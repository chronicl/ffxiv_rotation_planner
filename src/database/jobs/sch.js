export default [{
name: `Ruin`,
lvl: `Lv. 1`,
skill_type: `Spell`,
cast: `2.5s`,
recast: `2.5s`,
cost: `400 MP`,
skill_range: `25y`,
aoe_range: `0y`,
effect: `Deals unaspected damage with a potency of 160.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/eb0ec769cf218f138999031fec8e1eeb6c9d3fb3.png`,
numDuration: 0,
numRecast: 2.5,
numCast: 2.5,
isGCD: true,
},
{
name: `Bio`,
lvl: `Lv. 2`,
skill_type: `Spell`,
cast: `Instant`,
recast: `2.5s`,
cost: `400 MP`,
skill_range: `25y`,
aoe_range: `0y`,
effect: `Deals unaspected damage over time.
Potency: 20
Duration: 30s`,
img_link: `https://img.finalfantasyxiv.com/lds/d/93f61adcffc6644730a017347d91805359b52bdb.png`,
numDuration: 0,
numRecast: 2.5,
numCast: 0.0,
isGCD: true,
},
{
name: `Physick`,
lvl: `Lv. 4`,
skill_type: `Spell`,
cast: `1.5s`,
recast: `2.5s`,
cost: `400 MP`,
skill_range: `30y`,
aoe_range: `0y`,
effect: `Restores target's HP.
Cure Potency: 400`,
img_link: `https://img.finalfantasyxiv.com/lds/d/e51f309947cde0c36f3a0cd815ca01e268928eb6.png`,
numDuration: 0,
numRecast: 2.5,
numCast: 1.5,
isGCD: true,
},
{
name: `Summon Eos`,
lvl: `Lv. 4`,
skill_type: `Spell`,
cast: `2.5s`,
recast: `2.5s`,
cost: `200 MP`,
skill_range: `0y`,
aoe_range: `0y`,
effect: `Summons the faerie Eos to fight at your side. When set to guard, automatically casts Embrace on party members who suffer damage.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/fd10e1fe5ed78b79ff0279fcc62bf67e263ce32b.png`,
numDuration: 0,
numRecast: 2.5,
numCast: 2.5,
isGCD: true,
},
{
name: `Summon Selene`,
lvl: `Lv. 4`,
skill_type: `Spell`,
cast: `2.5s`,
recast: `2.5s`,
cost: `200 MP`,
skill_range: `0y`,
aoe_range: `0y`,
effect: `Summons the faerie Selene to fight at your side. When set to guard, automatically casts Embrace on party members who suffer damage.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/24e441d1a99553755c5e9d6e6617fdb012fc33a3.png`,
numDuration: 0,
numRecast: 2.5,
numCast: 2.5,
isGCD: true,
},
{
name: `Resurrection`,
lvl: `Lv. 12`,
skill_type: `Spell`,
cast: `8s`,
recast: `2.5s`,
cost: `2400 MP`,
skill_range: `30y`,
aoe_range: `0y`,
effect: `Resurrects target to a weakened state.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/9e61ea15caf1f7c0e4b44943dcbee0178e61a9fd.png`,
numDuration: 0,
numRecast: 2.5,
numCast: 8.0,
isGCD: true,
},
{
name: `Whispering Dawn`,
lvl: `Lv. 20`,
skill_type: `Ability`,
cast: `Instant`,
recast: `60s`,
cost: `-`,
skill_range: `0y`,
aoe_range: `0y`,
effect: `Orders faerie to execute Whispering Dawn. If Seraph is summoned, orders her to execute Angel's Whisper.
Whispering Dawn/Angel's Whisper Effect: Gradually restores the HP of all nearby party members
Cure Potency: 120
Duration: 21s`,
img_link: `https://img.finalfantasyxiv.com/lds/d/f6088443b4a002235e8acf1e83f8975589992e99.png`,
numDuration: 0,
numRecast: 60.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Bio II`,
lvl: `Lv. 26`,
skill_type: `Spell`,
cast: `Instant`,
recast: `2.5s`,
cost: `400 MP`,
skill_range: `25y`,
aoe_range: `0y`,
effect: `Deals unaspected damage over time.
Potency: 40
Duration: 30s`,
img_link: `https://img.finalfantasyxiv.com/lds/d/62a7841d8036ec98074662efb7b311f440e26178.png`,
numDuration: 0,
numRecast: 2.5,
numCast: 0.0,
isGCD: true,
},
{
name: `Adloquium`,
lvl: `Lv. 30`,
skill_type: `Spell`,
cast: `2s`,
recast: `2.5s`,
cost: `1000 MP`,
skill_range: `30y`,
aoe_range: `0y`,
effect: `Restores target's HP.
Cure Potency: 300
Additional Effect: Grants Galvanize to target, nullifying damage equaling 125% of the amount of HP restored. When critical HP is restored, also grants Catalyze, nullifying damage equaling 125% the amount of HP restored.
Duration: 30s
Effect cannot be stacked with astrologian's Nocturnal Field.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/fb91f331551e8c432de49d1c5293890d2d42b2a7.png`,
numDuration: 0,
numRecast: 2.5,
numCast: 2.0,
isGCD: true,
},
{
name: `Succor`,
lvl: `Lv. 35`,
skill_type: `Spell`,
cast: `2s`,
recast: `2.5s`,
cost: `1300 MP`,
skill_range: `0y`,
aoe_range: `15y`,
effect: `Restores own HP and the HP of all nearby party members.
Cure Potency: 180
Additional Effect: Erects a magicked barrier which nullifies damage equaling 125% of the amount of HP restored
Duration: 30s
Effect cannot be stacked with astrologian's Nocturnal Field.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/cc5399017e8b496ac9ffed9c88f2653639bd3689.png`,
numDuration: 0,
numRecast: 2.5,
numCast: 2.0,
isGCD: true,
},
{
name: `Ruin II`,
lvl: `Lv. 38`,
skill_type: `Spell`,
cast: `Instant`,
recast: `2.5s`,
cost: `400 MP`,
skill_range: `25y`,
aoe_range: `0y`,
effect: `Deals unaspected damage with a potency of 200.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/d6875ae1008a9e4b2d04562cff42646752e919c5.png`,
numDuration: 0,
numRecast: 2.5,
numCast: 0.0,
isGCD: true,
},
{
name: `Fey Illumination`,
lvl: `Lv. 40`,
skill_type: `Ability`,
cast: `Instant`,
recast: `120s`,
cost: `-`,
skill_range: `0y`,
aoe_range: `0y`,
effect: `Orders faerie to execute Fey Illumination. If Seraph is summoned, orders her to execute Seraphic Illumination.
Fey Illumination/Seraphic Illumination Effect: Increases healing magic potency of all nearby party members by 10%, while reducing magic damage taken by all nearby party members by 5%
Duration: 20s
Effect cannot be stacked with Seraphic Illumination.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/17aa22b0bdc4d60954e312e9bfc032b0b3bc162f.png`,
numDuration: 0,
numRecast: 120.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Aetherflow`,
lvl: `Lv. 45`,
skill_type: `Ability`,
cast: `Instant`,
recast: `60s`,
cost: `-`,
skill_range: `0y`,
aoe_range: `0y`,
effect: `Restores 10% of maximum MP.
Additional Effect: Aetherflow III
Can only be executed while in combat.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/175631d8db5550a7b74a9bc811c3781e083e393e.png`,
numDuration: 0,
numRecast: 60.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Energy Drain`,
lvl: `Lv. 45`,
skill_type: `Ability`,
cast: `Instant`,
recast: `3s`,
cost: `-`,
skill_range: `25y`,
aoe_range: `0y`,
effect: `Deals unaspected damage with a potency of 150.
Additional Effect: Absorbs a portion of damage dealt as HP and restores MP
Additional Effect: Increases Faerie Gauge by 10
Aetherflow Gauge Cost: 1`,
img_link: `https://img.finalfantasyxiv.com/lds/d/92ea9227a8a09c62eb53852e2c26c0d6763a35c2.png`,
numDuration: 0,
numRecast: 3.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Lustrate`,
lvl: `Lv. 45`,
skill_type: `Ability`,
cast: `Instant`,
recast: `1s`,
cost: `-`,
skill_range: `30y`,
aoe_range: `0y`,
effect: `Restores target's HP.
Cure Potency: 600
Additional Effect: Increases Faerie Gauge by 10
Aetherflow Gauge Cost: 1`,
img_link: `https://img.finalfantasyxiv.com/lds/d/27d792d774f8a81acd4a0000b9c9bfd03d9f668c.png`,
numDuration: 0,
numRecast: 1.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Art of War`,
lvl: `Lv. 46`,
skill_type: `Spell`,
cast: `Instant`,
recast: `2.5s`,
cost: `600 MP`,
skill_range: `0y`,
aoe_range: `5y`,
effect: `Deals unaspected damage with a potency of 160 to all nearby enemies.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/7d77cd219b7e392fc67e848e3876ab2a0da3f4ee.png`,
numDuration: 0,
numRecast: 2.5,
numCast: 0.0,
isGCD: true,
},
{
name: `Sacred Soil`,
lvl: `Lv. 50`,
skill_type: `Ability`,
cast: `Instant`,
recast: `30s`,
cost: `-`,
skill_range: `30y`,
aoe_range: `8y`,
effect: `Creates a designated area in which party members will only suffer 90% of all damage inflicted.
Duration: 15s
Additional Effect: Regen
Cure Potency: 100
Additional Effect: Increases Faerie Gauge by 10
Aetherflow Gauge Cost: 1`,
img_link: `https://img.finalfantasyxiv.com/lds/d/5532c85488da9c458c1df07e27a6ac248016a825.png`,
numDuration: 0,
numRecast: 30.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Indomitability`,
lvl: `Lv. 52`,
skill_type: `Ability`,
cast: `Instant`,
recast: `30s`,
cost: `-`,
skill_range: `0y`,
aoe_range: `15y`,
effect: `Restores own HP and the HP of all nearby party members.
Cure Potency: 400
Additional Effect: Increases Faerie Gauge by 10
Aetherflow Gauge Cost: 1`,
img_link: `https://img.finalfantasyxiv.com/lds/d/4c25dfa884258e068266a628764ee8a966651118.png`,
numDuration: 0,
numRecast: 30.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Broil`,
lvl: `Lv. 54`,
skill_type: `Spell`,
cast: `2.5s`,
recast: `2.5s`,
cost: `400 MP`,
skill_range: `25y`,
aoe_range: `0y`,
effect: `Deals unaspected damage with a potency of 240.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/9023ce2c680aead6941e4d10953503afa29b30f0.png`,
numDuration: 0,
numRecast: 2.5,
numCast: 2.5,
isGCD: true,
},
{
name: `Deployment Tactics`,
lvl: `Lv. 56`,
skill_type: `Ability`,
cast: `Instant`,
recast: `120s`,
cost: `-`,
skill_range: `30y`,
aoe_range: `10y`,
effect: `Extends Galvanize effect cast on self or target to nearby party members.
Duration: Time remaining on original effect
No effect when target is not under the effect of Galvanize.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/11bf7c5d15fa5f0e87ccade144afae1493271221.png`,
numDuration: 0,
numRecast: 120.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Emergency Tactics`,
lvl: `Lv. 58`,
skill_type: `Ability`,
cast: `Instant`,
recast: `15s`,
cost: `-`,
skill_range: `0y`,
aoe_range: `0y`,
effect: `Transforms the next Galvanize and Catalyze statuses into HP recovery equaling the amount of damage reduction intended for the barrier.
Duration: 15s`,
img_link: `https://img.finalfantasyxiv.com/lds/d/96e167864b9f04346752550a09fe9eafc083d6fd.png`,
numDuration: 0,
numRecast: 15.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Dissipation`,
lvl: `Lv. 60`,
skill_type: `Ability`,
cast: `Instant`,
recast: `180s`,
cost: `-`,
skill_range: `0y`,
aoe_range: `0y`,
effect: `Orders your faerie away while granting you a full Aetherflow stack. Also increases healing magic potency by 20%.
Duration: 30s
Current faerie will return once the effect expires.
Summon Eos or Summon Selene cannot be executed while under the effect of Dissipation.
Can only be executed while in combat.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/91e4a1eba6f21dc955383948e8c7a6ae08dd6474.png`,
numDuration: 0,
numRecast: 180.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Excogitation`,
lvl: `Lv. 62`,
skill_type: `Ability`,
cast: `Instant`,
recast: `45s`,
cost: `-`,
skill_range: `30y`,
aoe_range: `0y`,
effect: `Grants self or target party member the effect of Excogitation, restoring HP when member's HP falls below 50% or upon effect duration expiration.
Cure Potency: 800
Duration: 45s
Additional Effect: Increases Faerie Gauge by 10
Aetherflow Gauge Cost: 1`,
img_link: `https://img.finalfantasyxiv.com/lds/d/bd79780b07240a2ea65de8b50451b3010b24b67f.png`,
numDuration: 0,
numRecast: 45.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Broil II`,
lvl: `Lv. 64`,
skill_type: `Spell`,
cast: `2.5s`,
recast: `2.5s`,
cost: `400 MP`,
skill_range: `25y`,
aoe_range: `0y`,
effect: `Deals unaspected damage with a potency of 260.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/a30f6e8eb3cdecbbf8b74e5eb5d45d7a4648a967.png`,
numDuration: 0,
numRecast: 2.5,
numCast: 2.5,
isGCD: true,
},
{
name: `Chain Stratagem`,
lvl: `Lv. 66`,
skill_type: `Ability`,
cast: `Instant`,
recast: `120s`,
cost: `-`,
skill_range: `25y`,
aoe_range: `0y`,
effect: `Increases rate at which target takes critical hits by 10%.
Duration: 15s`,
img_link: `https://img.finalfantasyxiv.com/lds/d/521f04e7cbbd3d21458d92208efcc2c1ffbd1bd1.png`,
numDuration: 0,
numRecast: 120.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Aetherpact`,
lvl: `Lv. 70`,
skill_type: `Ability`,
cast: `Instant`,
recast: `3s`,
cost: `-`,
skill_range: `30y`,
aoe_range: `0y`,
effect: `Orders faerie to execute Fey Union with target party member. Effect ends upon reuse.
Faerie Gauge Cost: 10
The Faerie Gauge increases when a faerie or Seraph is summoned and an Aetherflow action is successfully executed while in combat.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/f8bca94df1a7ff9fd12ed3debd1b811a6a2476b6.png`,
numDuration: 0,
numRecast: 3.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Dissolve Union`,
lvl: `Lv. 70`,
skill_type: `Ability`,
cast: `Instant`,
recast: `1s`,
cost: `-`,
skill_range: `0y`,
aoe_range: `0y`,
effect: `Dissolves current Fey Union.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/ce56cd93a350032b5e183b81d5c1c2a37137c995.png`,
numDuration: 0,
numRecast: 1.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Biolysis`,
lvl: `Lv. 72`,
skill_type: `Spell`,
cast: `Instant`,
recast: `2.5s`,
cost: `400 MP`,
skill_range: `25y`,
aoe_range: `0y`,
effect: `Deals unaspected damage over time.
Potency: 60
Duration: 30s`,
img_link: `https://img.finalfantasyxiv.com/lds/d/83e3cfa019f1ba25fb82d1e83e62bc911c30b0c3.png`,
numDuration: 0,
numRecast: 2.5,
numCast: 0.0,
isGCD: true,
},
{
name: `Broil III`,
lvl: `Lv. 72`,
skill_type: `Spell`,
cast: `2.5s`,
recast: `2.5s`,
cost: `400 MP`,
skill_range: `25y`,
aoe_range: `0y`,
effect: `Deals unaspected damage with a potency of 280.`,
img_link: `https://img.finalfantasyxiv.com/lds/d/4aa95e379eef31ec8f6b93a7533b46a8c5c5e4a0.png`,
numDuration: 0,
numRecast: 2.5,
numCast: 2.5,
isGCD: true,
},
{
name: `Recitation`,
lvl: `Lv. 74`,
skill_type: `Ability`,
cast: `Instant`,
recast: `90s`,
cost: `-`,
skill_range: `0y`,
aoe_range: `0y`,
effect: `Allows the execution of Adloquium, Succor, Indomitability, or Excogitation without consuming resources while also ensuring critical HP is restored.
Duration: 15s`,
img_link: `https://img.finalfantasyxiv.com/lds/d/40fbbda3ae8b7d2166434ae6c4df6c5a8d436186.png`,
numDuration: 0,
numRecast: 90.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Fey Blessing`,
lvl: `Lv. 76`,
skill_type: `Ability`,
cast: `Instant`,
recast: `60s`,
cost: `-`,
skill_range: `0y`,
aoe_range: `0y`,
effect: `Orders faerie to execute Fey Blessing.
Fey Blessing Effect: Restores the HP of all nearby party members
Cure Potency: 350
Faerie Gauge Cost: 10`,
img_link: `https://img.finalfantasyxiv.com/lds/d/faccf685dab99d3e8ba59c886136b691b60f8050.png`,
numDuration: 0,
numRecast: 60.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Summon Seraph`,
lvl: `Lv. 80`,
skill_type: `Ability`,
cast: `Instant`,
recast: `120s`,
cost: `-`,
skill_range: `0y`,
aoe_range: `0y`,
effect: `Summons Seraph to fight at your side. When set to guard, automatically casts Seraphic Veil on party members who suffer damage.
Cannot summon Seraph unless a pet is already summoned. Current pet will leave the battlefield while Seraph is present, and return once gone.
Duration: 22s`,
img_link: `https://img.finalfantasyxiv.com/lds/d/8ec02134f10e4112a75b550a44a5c2ef985a8db6.png`,
numDuration: 0,
numRecast: 120.0,
numCast: 0.0,
isGCD: false,
},
{
name: `Consolation`,
lvl: `Lv. 80`,
skill_type: `Ability`,
cast: `Instant`,
recast: `30s`,
cost: `-`,
skill_range: `0y`,
aoe_range: `0y`,
effect: `Orders Seraph to execute Consolation.
Consolation Effect: Restores the HP of all nearby party members
Cure Potency: 300
Additional Effect: Erects a magicked barrier which nullifies damage equaling the amount of HP restored
Duration: 30s
Maximum Charges: 2`,
img_link: `https://img.finalfantasyxiv.com/lds/d/862fce57d46cab43cb98e6cabd62ca9ae172a333.png`,
numDuration: 0,
numRecast: 30.0,
numCast: 0.0,
isGCD: false,
},
]