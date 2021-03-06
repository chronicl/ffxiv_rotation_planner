export default [{
name: `True Thrust`,
lvl: `Lv. 1`,
skill_type: `Weaponskill`,
cast: `Instant`,
recast: `2.5s`,
cost: `-`,
skill_range: `3y`,
aoe_range: `0y`,
effect: `Delivers an attack with a potency of 290.
※Action changes to Raiden Thrust when Raiden Thrust Ready.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/6e7b4c5d88679ce087e653fe8a4336f900c7bce1.png`,
numDuration: 0,
numRecast: 2.5,
numCast: 0.0,
isGCD: true,
},
{
name: `Vorpal Thrust`,
lvl: `Lv. 4`,
skill_type: `Weaponskill`,
cast: `Instant`,
recast: `2.5s`,
cost: `-`,
skill_range: `3y`,
aoe_range: `0y`,
effect: `Delivers an attack with a potency of 140.
Combo Action: True Thrust
Combo Potency: 350`,
img_link: `https://img.finalfantasyxiv.com/lds/d/0ac8b5b6d03f8ba1aa283c83301e84c270ce1595.png`,
numDuration: 0,
numRecast: 2.5,
numCast: 0.0,
isGCD: true,
},
{
name: `Life Surge`,
lvl: `Lv. 6`,
skill_type: `Ability`,
cast: `Instant`,
recast: `45s`,
cost: `-`,
skill_range: `0y`,
aoe_range: `0y`,
effect: `Ensures critical damage for first weaponskill used while Life Surge is active.
Duration: 5s
Effect cannot be applied to damage over time.
Additional Effect: Absorbs a portion of damage dealt as HP`,
img_link: `https://img.finalfantasyxiv.com/lds/d/034ad6c7fbda298dcedf100898c1cd5460c30961.png`,
numDuration: 0,
numRecast: 45.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Piercing Talon`,
lvl: `Lv. 15`,
skill_type: `Weaponskill`,
cast: `Instant`,
recast: `2.5s`,
cost: `-`,
skill_range: `15y`,
aoe_range: `0y`,
effect: `Delivers a ranged attack with a potency of 150.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/3687d97607593f18324aa7f8933935c9094d9c53.png`,
numDuration: 0,
numRecast: 2.5,
numCast: 0.0,
isGCD: true,
},
{
name: `Disembowel`,
lvl: `Lv. 18`,
skill_type: `Weaponskill`,
cast: `Instant`,
recast: `2.5s`,
cost: `-`,
skill_range: `3y`,
aoe_range: `0y`,
effect: `Delivers an attack with a potency of 150.
Combo Action: True Thrust
Combo Potency: 320
Combo Bonus: Increases damage dealt by 10%
Duration: 30s`,
img_link: `https://img.finalfantasyxiv.com/lds/d/87e2b860cda70e023ac2d9e4684f16fa5d918e3f.png`,
numDuration: 0,
numRecast: 2.5,
numCast: 0.0,
isGCD: true,
},
{
name: `Full Thrust`,
lvl: `Lv. 26`,
skill_type: `Weaponskill`,
cast: `Instant`,
recast: `2.5s`,
cost: `-`,
skill_range: `3y`,
aoe_range: `0y`,
effect: `Delivers an attack with a potency of 100.
Combo Action: Vorpal Thrust
Combo Potency: 530
Combo Bonus: Grants Sharper Fang and Claw if under the effect of Blood of the Dragon or Life of the Dragon
Duration: 10s`,
img_link: `https://img.finalfantasyxiv.com/lds/d/a11727ddf314b6e583cb017ca0192cf4331f5df2.png`,
numDuration: 0,
numRecast: 2.5,
numCast: 0.0,
isGCD: true,
},
{
name: `Lance Charge`,
lvl: `Lv. 30`,
skill_type: `Ability`,
cast: `Instant`,
recast: `90s`,
cost: `-`,
skill_range: `0y`,
aoe_range: `0y`,
effect: `Increases damage dealt by 15%.
Duration: 20s`,
img_link: `https://img.finalfantasyxiv.com/lds/d/5aea946d8e0db3900e9a028831d60d8f42f3f7ad.png`,
numDuration: 0,
numRecast: 90.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Jump`,
lvl: `Lv. 30`,
skill_type: `Ability`,
cast: `Instant`,
recast: `30s`,
cost: `-`,
skill_range: `20y`,
aoe_range: `0y`,
effect: `Delivers a jumping attack with a potency of 310. Returns you to your original position after the attack is made.
Additional Effect: Grants Dive Ready
Duration: 15s
Cannot be executed while bound.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/23f784928a1276b4a1cac68461fd69cd14c0892c.png`,
numDuration: 0,
numRecast: 30.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Elusive Jump`,
lvl: `Lv. 35`,
skill_type: `Ability`,
cast: `Instant`,
recast: `30s`,
cost: `-`,
skill_range: `0y`,
aoe_range: `0y`,
effect: `Executes a jump to a location 15 yalms behind you.
Cannot be executed while bound.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/1300ada2191e5210d6918c26ad814b6f5ded70b4.png`,
numDuration: 0,
numRecast: 30.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Doom Spike`,
lvl: `Lv. 40`,
skill_type: `Weaponskill`,
cast: `Instant`,
recast: `2.5s`,
cost: `-`,
skill_range: `10y`,
aoe_range: `10y`,
effect: `Delivers an attack with a potency of 170 to all enemies in a straight line before you.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/2fe400904b7e2c6c2e7d284c3dde93256435c4c8.png`,
numDuration: 0,
numRecast: 2.5,
numCast: 0.0,
isGCD: true,
},
{
name: `Spineshatter Dive`,
lvl: `Lv. 45`,
skill_type: `Ability`,
cast: `Instant`,
recast: `60s`,
cost: `-`,
skill_range: `20y`,
aoe_range: `0y`,
effect: `Delivers a jumping attack with a potency of 240.
Cannot be executed while bound.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/273656f659221a90213bf126978b82935a55ee80.png`,
numDuration: 0,
numRecast: 60.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Chaos Thrust`,
lvl: `Lv. 50`,
skill_type: `Weaponskill`,
cast: `Instant`,
recast: `2.5s`,
cost: `-`,
skill_range: `3y`,
aoe_range: `0y`,
effect: `Delivers an attack with a potency of 100.
140 when executed from a target's rear.
Combo Action: Disembowel
Combo Potency: 290
Rear Combo Potency: 330
Combo Bonus: Damage over time
Potency: 45
Duration: 24s
Combo Bonus: Grants Enhanced Wheeling Thrust if under the effect of Blood of the Dragon or Life of the Dragon
Duration: 10s`,
img_link: `https://img.finalfantasyxiv.com/lds/d/014f198a507508d6362aa0a3600cb4d88e0ad0d3.png`,
numDuration: 0,
numRecast: 2.5,
numCast: 0.0,
isGCD: true,
},
{
name: `Dragonfire Dive`,
lvl: `Lv. 50`,
skill_type: `Ability`,
cast: `Instant`,
recast: `120s`,
cost: `-`,
skill_range: `20y`,
aoe_range: `5y`,
effect: `Delivers a jumping fire-based attack with a potency of 380 to target and all enemies nearby it.
Cannot be executed while bound.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/bfab1a70152c29d5548c020dbd528ec340c1700c.png`,
numDuration: 0,
numRecast: 120.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Battle Litany`,
lvl: `Lv. 52`,
skill_type: `Ability`,
cast: `Instant`,
recast: `180s`,
cost: `-`,
skill_range: `0y`,
aoe_range: `15y`,
effect: `Increases critical hit rate of self and nearby party members by 10%.
Duration: 20s`,
img_link: `https://img.finalfantasyxiv.com/lds/d/f6c69db1585ab351e218aeb4841893c7e0688096.png`,
numDuration: 0,
numRecast: 180.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Blood of the Dragon`,
lvl: `Lv. 54`,
skill_type: `Ability`,
cast: `Instant`,
recast: `25s`,
cost: `-`,
skill_range: `0y`,
aoe_range: `0y`,
effect: `Increases potency of High Jump and Spineshatter Dive by 30%.
Duration: 30s
Additional Effect: Grants Sharper Fang and Claw upon successfully executing Full Thrust, or Enhanced Wheeling Thrust upon successfully executing Chaos Thrust
Duration: 10s
Effects end upon use or upon using a weaponskill other than Fang and Claw or Wheeling Thrust.
Cannot be executed while under the effect of Life of the Dragon.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/483ebf1852d86be56bc2e5c92ae6fde0c49fa786.png`,
numDuration: 0,
numRecast: 25.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Fang and Claw`,
lvl: `Lv. 56`,
skill_type: `Weaponskill`,
cast: `Instant`,
recast: `2.5s`,
cost: `-`,
skill_range: `3y`,
aoe_range: `0y`,
effect: `Delivers an attack with a potency of 320.
360 when executed from a target's flank.
Can only be executed while under the effects of Sharper Fang and Claw and either Blood of the Dragon or Life of the Dragon.
Additional Effect: Extends Blood of the Dragon duration by 10s to a maximum of 30s`,
img_link: `https://img.finalfantasyxiv.com/lds/d/65a645947ee5ab9dce5ca2e944e89b9893ddb347.png`,
numDuration: 0,
numRecast: 2.5,
numCast: 0.0,
isGCD: true,
},
{
name: `Wheeling Thrust`,
lvl: `Lv. 58`,
skill_type: `Weaponskill`,
cast: `Instant`,
recast: `2.5s`,
cost: `-`,
skill_range: `3y`,
aoe_range: `0y`,
effect: `Delivers an attack with a potency of 320.
360 when executed from a target's rear.
Can only be executed while under the effects of Enhanced Wheeling Thrust and either Blood of the Dragon or Life of the Dragon.
Additional Effect: Extends Blood of the Dragon duration by 10s to a maximum of 30s`,
img_link: `https://img.finalfantasyxiv.com/lds/d/c26b5739e3bce8a5c09a2bc19d7f869da91f5747.png`,
numDuration: 0,
numRecast: 2.5,
numCast: 0.0,
isGCD: true,
},
{
name: `Geirskogul`,
lvl: `Lv. 60`,
skill_type: `Ability`,
cast: `Instant`,
recast: `30s`,
cost: `-`,
skill_range: `15y`,
aoe_range: `15y`,
effect: `Delivers an attack with a potency of 300 to all enemies in a straight line before you.
Can only be executed while under the effect of Blood of the Dragon.
Additional Effect: Changes Blood of the Dragon to Life of the Dragon while under the full gaze of the first brood
※Action changes to Nastrond while under the effect of Life of the Dragon.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/2f823a1219265d7fe6673a9acd0c2b75b5413afa.png`,
numDuration: 0,
numRecast: 30.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Sonic Thrust`,
lvl: `Lv. 62`,
skill_type: `Weaponskill`,
cast: `Instant`,
recast: `2.5s`,
cost: `-`,
skill_range: `10y`,
aoe_range: `10y`,
effect: `Delivers an attack with a potency of 100 to all enemies in a straight line before you.
Combo Action: Doom Spike
Combo Potency: 200
Combo Bonus: Extends Blood of the Dragon duration by 10s to a maximum of 30s`,
img_link: `https://img.finalfantasyxiv.com/lds/d/7bd1778570117ca040fbf3491032b5b980559a56.png`,
numDuration: 0,
numRecast: 2.5,
numCast: 0.0,
isGCD: true,
},
{
name: `Dragon Sight`,
lvl: `Lv. 66`,
skill_type: `Ability`,
cast: `Instant`,
recast: `120s`,
cost: `-`,
skill_range: `12y`,
aoe_range: `0y`,
effect: `Grants Right Eye to self, increasing damage dealt by 10%. Also grants target party member Left Eye, increasing damage dealt by 5% as long as target remains within 12 yalms.
Duration: 20s`,
img_link: `https://img.finalfantasyxiv.com/lds/d/8488c7224121abb08e94383600ee5a2054eaa46e.png`,
numDuration: 0,
numRecast: 120.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Mirage Dive`,
lvl: `Lv. 68`,
skill_type: `Ability`,
cast: `Instant`,
recast: `1s`,
cost: `-`,
skill_range: `20y`,
aoe_range: `0y`,
effect: `Delivers an attack with a potency of 300.
Additional Effect: Strengthens the gaze of your Dragon Gauge by 1 if under the effect of Blood of the Dragon or Life of the Dragon
Can only be executed when Dive Ready.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/abff513798c46d430b4ad56da6ce49bc75314c16.png`,
numDuration: 0,
numRecast: 1.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Nastrond`,
lvl: `Lv. 70`,
skill_type: `Ability`,
cast: `Instant`,
recast: `10s`,
cost: `-`,
skill_range: `15y`,
aoe_range: `15y`,
effect: `Delivers an attack with a potency of 400 to all enemies in a straight line before you.
Can only be executed while under the effect of Life of the Dragon.
※This action cannot be assigned to a hotbar.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/80f58c48f8e7a3e6c8fa1b2d2980c8c4fe4c7864.png`,
numDuration: 0,
numRecast: 10.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Coerthan Torment`,
lvl: `Lv. 72`,
skill_type: `Weaponskill`,
cast: `Instant`,
recast: `2.5s`,
cost: `-`,
skill_range: `10y`,
aoe_range: `10y`,
effect: `Delivers an attack with a potency of 100 to all enemies in a straight line before you.
Combo Action: Sonic Thrust
Combo Potency: 230
Combo Bonus: Extends Blood of the Dragon duration by 10s to a maximum of 30s`,
img_link: `https://img.finalfantasyxiv.com/lds/d/c04c09c30486700eabded45c30b0f47923887df4.png`,
numDuration: 0,
numRecast: 2.5,
numCast: 0.0,
isGCD: true,
},
{
name: `High Jump`,
lvl: `Lv. 74`,
skill_type: `Ability`,
cast: `Instant`,
recast: `30s`,
cost: `-`,
skill_range: `20y`,
aoe_range: `0y`,
effect: `Delivers a jumping attack with a potency of 400. Returns you to your original position after the attack is made.
Additional Effect: Grants Dive Ready
Duration: 15s
Cannot be executed while bound.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/527bab0ab3941c1ce51d6c51906c76b6d345963e.png`,
numDuration: 0,
numRecast: 30.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Raiden Thrust`,
lvl: `Lv. 76`,
skill_type: `Weaponskill`,
cast: `Instant`,
recast: `2.5s`,
cost: `-`,
skill_range: `3y`,
aoe_range: `0y`,
effect: `Delivers an attack with a potency of 330.
Can only be executed when Raiden Thrust Ready.
※This action cannot be assigned to a hotbar.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/be39341d26a47ae3da9dc3e9705ea68a252a76e5.png`,
numDuration: 0,
numRecast: 2.5,
numCast: 0.0,
isGCD: true,
},
{
name: `Stardiver`,
lvl: `Lv. 80`,
skill_type: `Ability`,
cast: `Instant`,
recast: `30s`,
cost: `-`,
skill_range: `20y`,
aoe_range: `5y`,
effect: `Delivers a jumping fire-based attack to target and all enemies nearby it with a potency of 600 for the first enemy, and 30% less for all remaining enemies.
Can only be executed while under the effect of Life of the Dragon.
Cannot be executed while bound.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/019a31423ddcdfb6f6b47d3d8e64e87e6494cbb1.png`,
numDuration: 0,
numRecast: 30.0,
numCast: 0.0,
isGCD: false,
},
]