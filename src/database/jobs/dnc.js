export default [{
name: `Cascade`,
lvl: `Lv. 1`,
skill_type: `Weaponskill`,
cast: `Instant`,
recast: `2.5s`,
cost: `-`,
skill_range: `25y`,
aoe_range: `0y`,
effect: `Delivers an attack with a potency of 250.
Additional Effect: 50% chance of granting Flourishing Cascade
Duration: 20s
※Action changes to Emboite while dancing.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/afcd5c61e980ffaf401617165f6618bf4e2b662b.png`,
numDuration: 0,
numRecast: 2.5,
numCast: 0.0,
isGCD: true,
},
{
name: `Fountain`,
lvl: `Lv. 2`,
skill_type: `Weaponskill`,
cast: `Instant`,
recast: `2.5s`,
cost: `-`,
skill_range: `25y`,
aoe_range: `0y`,
effect: `Delivers an attack with a potency of 100.
Combo Action: Cascade
Combo Potency: 300
Combo Bonus: 50% chance of granting Flourishing Fountain
Duration: 20s
※Action changes to Entrechat while dancing.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/c0288b3cea78c41f88375b9d3bb1c9de7ffe5fbe.png`,
numDuration: 0,
numRecast: 2.5,
numCast: 0.0,
isGCD: true,
},
{
name: `Windmill`,
lvl: `Lv. 15`,
skill_type: `Weaponskill`,
cast: `Instant`,
recast: `2.5s`,
cost: `-`,
skill_range: `0y`,
aoe_range: `5y`,
effect: `Delivers an attack with a potency of 150 to all nearby enemies.
Additional Effect: 50% chance of granting Flourishing Windmill
Duration: 20s`,
img_link: `https://img.finalfantasyxiv.com/lds/d/07d9922baa23d0c3727a37f91bcb952a29c59eaf.png`,
numDuration: 0,
numRecast: 2.5,
numCast: 0.0,
isGCD: true,
},
{
name: `Standard Step`,
lvl: `Lv. 15`,
skill_type: `Ability`,
cast: `Instant`,
recast: `30s`,
cost: `-`,
skill_range: `0y`,
aoe_range: `0y`,
effect: `Begin dancing, granting yourself Standard Step.
Duration: 15s
Action changes to Standard Finish while dancing.
Only Standard Finish, En Avant, step actions, role actions, Sprint, and Limit Break can be performed while dancing.
Triggers the cooldown of weaponskills, step actions, and finish actions upon execution. Cannot be executed during the cooldown of weaponskills, step actions, or finish actions.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/b5ffcf31bd1ff35e29cd0d01bc2abe173414998a.png`,
numDuration: 0,
numRecast: 30.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Standard Finish`,
lvl: `Lv. 15`,
skill_type: `Ability`,
cast: `Instant`,
recast: `1.5s`,
cost: `-`,
skill_range: `0y`,
aoe_range: `15y`,
effect: `Delivers an attack to all nearby enemies. Potency varies with number of successful steps, dealing full potency for the first enemy, and 75% less for all remaining enemies.
0 steps: 500
1 step: 750
2 steps: 1,000
Step Bonus: Grants Standard Finish and Esprit to self and party member designated as your Dance Partner
Damage bonus of Standard Finish varies with number of successful steps.
1 step: 2%
2 steps: 5%
Duration: 60s
Triggers the cooldown of weaponskills, step actions, and finish actions upon execution. Cannot be executed during the cooldown of weaponskills, step actions, or finish actions.
※This action cannot be assigned to a hotbar.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/96be9e1b85b3edbb10155ebad3e5a7dfe0bbe6fb.png`,
numDuration: 0,
numRecast: 1.5,
numCast: 0.0,
isGCD: false,
},
{
name: `Reverse Cascade`,
lvl: `Lv. 20`,
skill_type: `Weaponskill`,
cast: `Instant`,
recast: `2.5s`,
cost: `-`,
skill_range: `25y`,
aoe_range: `0y`,
effect: `Delivers an attack with a potency of 300.
Additional Effect: 50% chance of granting a Fourfold Feather
Can only be executed while under the effect of Flourishing Cascade.
※Action changes to Jete while dancing.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/2527a50fb52d954275f1666b509dfe50ea9f98d2.png`,
numDuration: 0,
numRecast: 2.5,
numCast: 0.0,
isGCD: true,
},
{
name: `Bladeshower`,
lvl: `Lv. 25`,
skill_type: `Weaponskill`,
cast: `Instant`,
recast: `2.5s`,
cost: `-`,
skill_range: `0y`,
aoe_range: `5y`,
effect: `Delivers an attack with a potency of 100 to all nearby enemies.
Combo Action: Windmill
Combo Potency: 200
Combo Bonus: 50% chance of granting Flourishing Shower
Duration: 20s`,
img_link: `https://img.finalfantasyxiv.com/lds/d/1937e53b0f04535b1a3eb1c1ebe46543e9d502c3.png`,
numDuration: 0,
numRecast: 2.5,
numCast: 0.0,
isGCD: true,
},
{
name: `Fan Dance`,
lvl: `Lv. 30`,
skill_type: `Ability`,
cast: `Instant`,
recast: `1s`,
cost: `-`,
skill_range: `25y`,
aoe_range: `0y`,
effect: `Delivers an attack with a potency of 150.
Additional Effect: 50% chance of granting Flourishing Fan Dance
Duration: 20s
Can only be executed while in possession of Fourfold Feathers.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/cfe022c5539d073fb5445e56c26ea4c08fa533ae.png`,
numDuration: 0,
numRecast: 1.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Rising Windmill`,
lvl: `Lv. 35`,
skill_type: `Weaponskill`,
cast: `Instant`,
recast: `2.5s`,
cost: `-`,
skill_range: `0y`,
aoe_range: `5y`,
effect: `Delivers an attack to all nearby enemies with a potency of 300 for the first enemy, and 50% less for all remaining enemies.
Additional Effect: 50% chance of granting a Fourfold Feather
Can only be executed while under the effect of Flourishing Windmill.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/b395047c59ee8ea05728f1afa51c77b9a15ac08d.png`,
numDuration: 0,
numRecast: 2.5,
numCast: 0.0,
isGCD: true,
},
{
name: `Fountainfall`,
lvl: `Lv. 40`,
skill_type: `Weaponskill`,
cast: `Instant`,
recast: `2.5s`,
cost: `-`,
skill_range: `25y`,
aoe_range: `0y`,
effect: `Delivers an attack with a potency of 350.
Additional Effect: 50% chance of granting a Fourfold Feather
Can only be executed while under the effect of Flourishing Fountain.
※Action changes to Pirouette while dancing.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/fe7e37682a7f9acf527a4a8cf7f22c72d2d06542.png`,
numDuration: 0,
numRecast: 2.5,
numCast: 0.0,
isGCD: true,
},
{
name: `Bloodshower`,
lvl: `Lv. 45`,
skill_type: `Weaponskill`,
cast: `Instant`,
recast: `2.5s`,
cost: `-`,
skill_range: `0y`,
aoe_range: `5y`,
effect: `Delivers an attack to all nearby enemies with a potency of 350 for the first enemy, and 50% less for all remaining enemies.
Additional Effect: 50% chance of granting a Fourfold Feather
Can only be executed while under the effect of Flourishing Shower.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/8b0144f4a40a411c09c7293f03b0b04cc6737d83.png`,
numDuration: 0,
numRecast: 2.5,
numCast: 0.0,
isGCD: true,
},
{
name: `Fan Dance II`,
lvl: `Lv. 50`,
skill_type: `Ability`,
cast: `Instant`,
recast: `1s`,
cost: `-`,
skill_range: `0y`,
aoe_range: `5y`,
effect: `Delivers an attack with a potency of 100 to all nearby enemies.
Additional Effect: 50% chance of granting Flourishing Fan Dance
Duration: 20s
Can only be executed while in possession of Fourfold Feathers.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/df273063f56a58a4ba928a96262ef25448da4f57.png`,
numDuration: 0,
numRecast: 1.0,
numCast: 0.0,
isGCD: false,
},
{
name: `En Avant`,
lvl: `Lv. 50`,
skill_type: `Ability`,
cast: `Instant`,
recast: `30s`,
cost: `-`,
skill_range: `0y`,
aoe_range: `0y`,
effect: `Quickly dash 10 yalms forward.
Maximum Charges: 3
Cannot be executed while bound.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/9324bef7237c64a9e9c8e3c25c489d17eddfca45.png`,
numDuration: 0,
numRecast: 30.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Curing Waltz`,
lvl: `Lv. 52`,
skill_type: `Ability`,
cast: `Instant`,
recast: `60s`,
cost: `-`,
skill_range: `0y`,
aoe_range: `3y`,
effect: `Restores own HP and the HP of all nearby party members.
Cure Potency: 300
Additional Effect: Party member designated as your Dance Partner will also heal self and nearby party members`,
img_link: `https://img.finalfantasyxiv.com/lds/d/cc58d1ee6cc85a0052dda55b8c38d010d1a309e3.png`,
numDuration: 0,
numRecast: 60.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Shield Samba`,
lvl: `Lv. 56`,
skill_type: `Ability`,
cast: `Instant`,
recast: `120s`,
cost: `-`,
skill_range: `0y`,
aoe_range: `20y`,
effect: `Reduces damage taken by self and nearby party members by 10%.
Duration: 15s
Effect cannot be stacked with bard's Troubadour or machinist's Tactician.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/923229026e2fecca668c5fe8fab16b35a52174ac.png`,
numDuration: 0,
numRecast: 120.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Closed Position`,
lvl: `Lv. 60`,
skill_type: `Ability`,
cast: `Instant`,
recast: `30s`,
cost: `-`,
skill_range: `30y`,
aoe_range: `0y`,
effect: `Grants you Closed Position and designates a party member as your Dance Partner, allowing you to share the effects of Standard Finish, Devilment, and Curing Waltz with said party member.
Effect ends upon reuse.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/7e1695b7bc0e5f9225f368459e067395dfdc7a4b.png`,
numDuration: 0,
numRecast: 30.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Ending`,
lvl: `Lv. 60`,
skill_type: `Ability`,
cast: `Instant`,
recast: `1s`,
cost: `-`,
skill_range: `0y`,
aoe_range: `0y`,
effect: `Ends dance with your partner.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/99d20b196f121b2c282aee09ffeb1b9c6e433f62.png`,
numDuration: 0,
numRecast: 1.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Devilment`,
lvl: `Lv. 62`,
skill_type: `Ability`,
cast: `Instant`,
recast: `120s`,
cost: `-`,
skill_range: `0y`,
aoe_range: `0y`,
effect: `Increases critical hit rate and direct hit rate by 20%.
Duration: 20s
Additional Effect: Party member designated as your Dance Partner will also receive the effect of Devilment`,
img_link: `https://img.finalfantasyxiv.com/lds/d/bc62a69ff374351513db01d25db930607c9ce917.png`,
numDuration: 0,
numRecast: 120.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Fan Dance III`,
lvl: `Lv. 66`,
skill_type: `Ability`,
cast: `Instant`,
recast: `1s`,
cost: `-`,
skill_range: `25y`,
aoe_range: `5y`,
effect: `Delivers an attack to target and all enemies nearby it with a potency of 200 for the first enemy, and 50% less for all remaining enemies.
Can only be executed while under the effect of Flourishing Fan Dance.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/f7722dd1f6f0c2ea82926d74a232765b72698927.png`,
numDuration: 0,
numRecast: 1.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Technical Step`,
lvl: `Lv. 70`,
skill_type: `Ability`,
cast: `Instant`,
recast: `120s`,
cost: `-`,
skill_range: `0y`,
aoe_range: `0y`,
effect: `Begin dancing, granting yourself Technical Step.
Duration: 15s
Action changes to Technical Finish while dancing.
Only Technical Finish, En Avant, step actions, role actions, Sprint, and Limit Break can be performed while dancing.
Triggers the cooldown of weaponskills, step actions, and finish actions upon execution. Cannot be executed during the cooldown of weaponskills, step actions, or finish actions.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/a5f2362dced6bc98c151739044beb010d1162514.png`,
numDuration: 0,
numRecast: 120.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Technical Finish`,
lvl: `Lv. 70`,
skill_type: `Ability`,
cast: `Instant`,
recast: `1.5s`,
cost: `-`,
skill_range: `0y`,
aoe_range: `15y`,
effect: `Delivers an attack to all nearby enemies. Potency varies with number of successful steps, dealing full potency for the first enemy, and 75% less for all remaining enemies.
0 steps: 500
1 step: 750
2 steps: 1,000
3 steps: 1,250
4 steps: 1,500
Step Bonus: Grants Technical Finish and Esprit to self and party members
Damage bonus of Technical Finish varies with number of successful steps.
1 step: 1%
2 steps: 2%
3 steps: 3%
4 steps: 5%
Duration: 20s
Additional Effect: Activates the Esprit Gauge
Triggers the cooldown of weaponskills, step actions, and finish actions upon execution. Cannot be executed during the cooldown of weaponskills, step actions, or finish actions.
※This action cannot be assigned to a hotbar.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/696a7424f972d185376a1cac217dad6ddd5421a9.png`,
numDuration: 0,
numRecast: 1.5,
numCast: 0.0,
isGCD: false,
},
{
name: `Flourish`,
lvl: `Lv. 72`,
skill_type: `Ability`,
cast: `Instant`,
recast: `60s`,
cost: `-`,
skill_range: `0y`,
aoe_range: `0y`,
effect: `Grants you the effects of Flourishing Cascade, Flourishing Fountain, Flourishing Windmill, Flourishing Shower, and Flourishing Fan Dance.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/56781a044cc005df1951421a93236b81dac79380.png`,
numDuration: 0,
numRecast: 60.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Saber Dance`,
lvl: `Lv. 76`,
skill_type: `Weaponskill`,
cast: `Instant`,
recast: `2.5s`,
cost: `-`,
skill_range: `25y`,
aoe_range: `5y`,
effect: `Delivers an attack to target and all enemies nearby it with a potency of 600 for the first enemy, and 50% less for all remaining enemies.
Esprit Gauge Cost: 50`,
img_link: `https://img.finalfantasyxiv.com/lds/d/65e2983616ba549790024138bcc9e61720174350.png`,
numDuration: 0,
numRecast: 2.5,
numCast: 0.0,
isGCD: true,
},
{
name: `Improvisation`,
lvl: `Lv. 80`,
skill_type: `Ability`,
cast: `Instant`,
recast: `120s`,
cost: `-`,
skill_range: `0y`,
aoe_range: `6y`,
effect: `Dance to the beat of your own drum, granting Improvisation to self.
Improvisation Effect: Continuously increases Esprit Gauge while in combat
Duration: 15s
The speed at which the gauge increases varies with the number of nearby party members. Furthermore, HP recovery via healing actions for self and nearby party members is increased by 10%.
Effect ends upon using another action or moving (including facing a different direction).
Cancels auto-attack upon execution.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/cc11b1e16f00f3ddd19331177dfebd1b1d70c741.png`,
numDuration: 0,
numRecast: 120.0,
numCast: 0.0,
isGCD: false,
},
]