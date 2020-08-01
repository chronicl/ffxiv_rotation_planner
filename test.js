const rotation = [{
  name: `Hard Slash`,
  lvl: `Lv. 1`,
  skill_type: `Weaponskill`,
  cast: `Instant`,
  recast: `2.5s`,
  cost: `-`,
  skill_range: `3y`,
  aoe_range: `0y`,
  effect: `Delivers an attack with a potency of 200.`,
  img_link: `https://img.finalfantasyxiv.com/lds/d/3b67422b1bd53c93e53e524213c6ca19dd05de7c.png`,
  numDuration: 0,
  numRecast: 2.5,
  numCast: 0.0,
  isGCD: true,
  timePos: 0
  },
  {
  name: `Syphon Strike`,
  lvl: `Lv. 2`,
  skill_type: `Weaponskill`,
  cast: `Instant`,
  recast: `2.5s`,
  cost: `-`,
  skill_range: `3y`,
  aoe_range: `0y`,
  effect: `Delivers an attack with a potency of 100.
  Combo Action: Hard Slash
  Combo Potency: 300
  Combo Bonus: Restores MP`,
  img_link: `https://img.finalfantasyxiv.com/lds/d/459b2eb5794f3cd2a9b483158dfe6e474e8e0498.png`,
  numDuration: 0,
  numRecast: 2.5,
  numCast: 0.0,
  isGCD: true,
  },
  {
  name: `Unleash`,
  lvl: `Lv. 6`,
  skill_type: `Spell`,
  cast: `Instant`,
  recast: `2.5s`,
  cost: `-`,
  skill_range: `0y`,
  aoe_range: `5y`,
  effect: `Deals unaspected damage with a potency of 150 to all nearby enemies.`,
  img_link: `https://img.finalfantasyxiv.com/lds/d/5f0399c5e788f70820433fef68715ef5b5ce470f.png`,
  numDuration: 0,
  numRecast: 2.5,
  numCast: 0.0,
  isGCD: true,
  },
  {
  name: `Grit`,
  lvl: `Lv. 10`,
  skill_type: `Ability`,
  cast: `Instant`,
  recast: `10s`,
  cost: `-`,
  skill_range: `0y`,
  aoe_range: `0y`,
  effect: `Significantly increases enmity generation.
  Effect ends upon reuse.`,
  img_link: `https://img.finalfantasyxiv.com/lds/d/ec62ae3c9133c3fc745ca6e67f67537534ffe54c.png`,
  numDuration: 0,
  numRecast: 10.0,
  numCast: 0.0,
  isGCD: false,
  },
  {
  name: `Unmend`,
  lvl: `Lv. 15`,
  skill_type: `Spell`,
  cast: `Instant`,
  recast: `2.5s`,
  cost: `-`,
  skill_range: `15y`,
  aoe_range: `0y`,
  effect: `Deals unaspected damage with a potency of 150.
  Additional Effect: Increased enmity`,
  img_link: `https://img.finalfantasyxiv.com/lds/d/1b521d6a61a77f8dacc7aaec4847fb75f9bb0d4f.png`,
  numDuration: 0,
  numRecast: 2.5,
  numCast: 0.0,
  isGCD: true,
  },
  {
  name: `Syphon Strike`,
  lvl: `Lv. 2`,
  skill_type: `Weaponskill`,
  cast: `Instant`,
  recast: `2.5s`,
  cost: `-`,
  skill_range: `3y`,
  aoe_range: `0y`,
  effect: `Delivers an attack with a potency of 100.
  Combo Action: Hard Slash
  Combo Potency: 300
  Combo Bonus: Restores MP`,
  img_link: `https://img.finalfantasyxiv.com/lds/d/459b2eb5794f3cd2a9b483158dfe6e474e8e0498.png`,
  numDuration: 0,
  numRecast: 2.5,
  numCast: 0.0,
  isGCD: true,
  }]

const setRotationWithTimeline = (rotation) => {
  const rotationWithTimeline = [];
  for (const [index, action] of rotation.entries()) {
    let newAction = {...action}
    // creating actions time position if not already existent
    if (!action.timePos && action.timePos !== 0) {
      if (action.isGCD) {
        const previousAction = rotationWithTimeline[index-1];
        if (previousAction.isGCD) {
          newAction = {...action, timePos: previousAction.timePos + previousAction.numRecast}
        }
        // => previousAction is ogcd
        else {
          let newTimePos = previousAction.timePos + 0.73;
          // checking if any gcd is still active
          for (const anotherPreviousAction of [...rotationWithTimeline].reverse()) {
            // break condition so we don't have to check all actions in rotation (no gcd is longer than 4 sec)
            if (newTimePos - anotherPreviousAction.timePos >= 4) { break }
            // if gcd is still on cooldown at newTimePos
            else if (anotherPreviousAction.isGCD && anotherPreviousAction.timePos + anotherPreviousAction.numRecast > newTimePos) {
              newTimePos = anotherPreviousAction.timePos + anotherPreviousAction.numRecast;
            }
          }
          newAction = {...action, timePos: newTimePos}
        }
      }
      // action is ogcd
      else {
        let newTimePos = rotationWithTimeline[index-1].timePos + 0.73
        for (const previousAction of [...rotationWithTimeline].reverse()) {
          if (previousAction.name === action.name) {
            const endOfActionCD = previousAction.timePos + previousAction.numRecast
            if (endOfActionCD > newTimePos) { newTimePos = endOfActionCD }
            break
          } 
        }
        newAction = {...action, timePos: newTimePos}
      }
    }
    rotationWithTimeline.push(newAction)
  }
  console.log(rotationWithTimeline)
}

setRotationWithTimeline(rotation)