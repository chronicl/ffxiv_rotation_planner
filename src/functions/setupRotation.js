export default (rotation) => {
  if (rotation.length === 0) {
    return [];
  }

  const rotationWithTimeline = [];
  // insert first action at custom time or auto time
  if (rotation[0].isPositioned) {
    rotationWithTimeline.push({ ...rotation[0] });
  } else {
    rotationWithTimeline.push({ ...rotation[0], timePos: 0 });
  }

  // insert all other actions according to their settings/types
  for (const [i, action] of rotation.slice(1).entries()) {
    const index = i + 1;
    let newAction = { ...action };
    // creating actions time position if not manually positioned
    if (!action.isPositioned) {
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
