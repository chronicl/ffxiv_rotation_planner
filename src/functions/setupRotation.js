export const setRotationWithTimeline = (rotation) => {
  if (rotation.length === 0) {
    return [];
  }
  const rotationWithTimeline = [];
  if (!rotation[0].timePos || !rotation[0].isPositioned) {
    rotation[0] = { ...rotation[0], timePos: 0, isPositioned: true };
  }
  for (const [index, action] of rotation.entries()) {
    let newAction = { ...action };
    // creating actions time position if not already existent
    if ((!action.timePos && action.timePos !== 0) || !action.isPositioned) {
      if (action.isGCD) {
        const previousAction = rotationWithTimeline[index - 1];
        if (previousAction.isGCD) {
          newAction = {
            ...action,
            timePos: previousAction.timePos + previousAction.numRecast,
          };
        }
        // => previousAction is ogcd
        else {
          let newTimePos = previousAction.timePos + 0.73;
          // checking if any gcd is still active
          for (const anotherPreviousAction of [
            ...rotationWithTimeline,
          ].reverse()) {
            // break condition so we don't have to check all actions in rotation (no gcd is longer than 4 sec)
            if (newTimePos - anotherPreviousAction.timePos >= 4) {
              break;
            }
            // if gcd is still on cooldown at newTimePos
            else if (
              anotherPreviousAction.isGCD &&
              anotherPreviousAction.timePos + anotherPreviousAction.numRecast >
                newTimePos
            ) {
              newTimePos =
                anotherPreviousAction.timePos + anotherPreviousAction.numRecast;
            }
          }
          newAction = { ...action, timePos: newTimePos };
        }
      }
      // action is ogcd
      else {
        let newTimePos = rotationWithTimeline[index - 1].timePos + 0.73;
        for (const previousAction of [...rotationWithTimeline].reverse()) {
          if (previousAction.name === action.name) {
            const endOfActionCD =
              previousAction.timePos + previousAction.numRecast;
            if (endOfActionCD > newTimePos) {
              newTimePos = endOfActionCD;
            }
            break;
          }
        }
        newAction = { ...action, timePos: newTimePos };
      }
    }
    rotationWithTimeline.push(newAction);
  }
  return rotationWithTimeline;
};
