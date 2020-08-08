export default [
  {
    name: `Malefic`,
    lvl: `Lv. 1`,
    skill_type: `Spell`,
    cast: `1.5s`,
    recast: `2.5s`,
    cost: `400 MP`,
    skill_range: `25y`,
    aoe_range: `0y`,
    effect: `Deals unaspected damage with a potency of 150.`,
    img_link: `https://img.finalfantasyxiv.com/lds/d/1290c0a03bd87a1dffe307f1931b2a9ddd5fb1c4.png`,
    numDuration: 0,
    numRecast: 2.5,
    numCast: 1.5,
    isGCD: true,
  },
  {
    name: `Benefic`,
    lvl: `Lv. 2`,
    skill_type: `Spell`,
    cast: `1.5s`,
    recast: `2.5s`,
    cost: `400 MP`,
    skill_range: `30y`,
    aoe_range: `0y`,
    effect: `Restores target's HP.
Cure Potency: 400
Additional Effect: 15% chance next Benefic II will restore critical HP
Duration: 15s`,
    img_link: `https://img.finalfantasyxiv.com/lds/d/736d977904e0f73af633cd13ecbe87732b93a4e9.png`,
    numDuration: 0,
    numRecast: 2.5,
    numCast: 1.5,
    isGCD: true,
  },
  {
    name: `Combust`,
    lvl: `Lv. 4`,
    skill_type: `Spell`,
    cast: `Instant`,
    recast: `2.5s`,
    cost: `400 MP`,
    skill_range: `25y`,
    aoe_range: `0y`,
    effect: `Deals unaspected damage over time.
Potency: 40
Duration: 18s`,
    img_link: `https://img.finalfantasyxiv.com/lds/d/fa81e6ca6840732a1a04ce7a88c44025a6b92091.png`,
    numDuration: 0,
    numRecast: 2.5,
    numCast: 0.0,
    isGCD: true,
  },
  {
    name: `Lightspeed`,
    lvl: `Lv. 6`,
    skill_type: `Ability`,
    cast: `Instant`,
    recast: `90s`,
    cost: `-`,
    skill_range: `0y`,
    aoe_range: `0y`,
    effect: `Reduces MP cost for spells by 50% and cast times for spells by 2.5 seconds.
Duration: 15s`,
    img_link: `https://img.finalfantasyxiv.com/lds/d/ffc773dbb11b87a77c8c8cbc78d5cdee80cee4c7.png`,
    numDuration: 0,
    numRecast: 90.0,
    numCast: 0.0,
    isGCD: false,
  },
  {
    name: `Helios`,
    lvl: `Lv. 10`,
    skill_type: `Spell`,
    cast: `2s`,
    recast: `2.5s`,
    cost: `900 MP`,
    skill_range: `0y`,
    aoe_range: `15y`,
    effect: `Restores own HP and the HP of all nearby party members.
Cure Potency: 330`,
    img_link: `https://img.finalfantasyxiv.com/lds/d/21f4f04888ea888d520f28f60927fdff717387a2.png`,
    numDuration: 0,
    numRecast: 2.5,
    numCast: 2.0,
    isGCD: true,
  },
  {
    name: `Ascend`,
    lvl: `Lv. 12`,
    skill_type: `Spell`,
    cast: `8s`,
    recast: `2.5s`,
    cost: `2400 MP`,
    skill_range: `30y`,
    aoe_range: `0y`,
    effect: `Resurrects target to a weakened state.`,
    img_link: `https://img.finalfantasyxiv.com/lds/d/8cba0ac717616c6631afacbf408c489e1e01d496.png`,
    numDuration: 0,
    numRecast: 2.5,
    numCast: 8.0,
    isGCD: true,
  },
  {
    name: `Essential Dignity`,
    lvl: `Lv. 15`,
    skill_type: `Ability`,
    cast: `Instant`,
    recast: `40s`,
    cost: `-`,
    skill_range: `30y`,
    aoe_range: `0y`,
    effect: `Restores target's HP.
Cure Potency: 400
Potency increases up to 1,100 as the target's HP decreases.
Maximum Charges: 2`,
    img_link: `https://img.finalfantasyxiv.com/lds/d/f1eb7b95c6884bd2ba45b63a822f4e333c188481.png`,
    numDuration: 0,
    numRecast: 40.0,
    numCast: 0.0,
    isGCD: false,
  },
  {
    name: `Benefic II`,
    lvl: `Lv. 26`,
    skill_type: `Spell`,
    cast: `2s`,
    recast: `2.5s`,
    cost: `900 MP`,
    skill_range: `30y`,
    aoe_range: `0y`,
    effect: `Restores target's HP.
Cure Potency: 700`,
    img_link: `https://img.finalfantasyxiv.com/lds/d/a885fb1c5df8771c4a2e84419d307242ea8ea038.png`,
    numDuration: 0,
    numRecast: 2.5,
    numCast: 2.0,
    isGCD: true,
  },
  {
    name: `Draw`,
    lvl: `Lv. 30`,
    skill_type: `Ability`,
    cast: `Instant`,
    recast: `30s`,
    cost: `-`,
    skill_range: `0y`,
    aoe_range: `0y`,
    effect: `Draws a card (arcanum) from your divining deck. Only one arcanum can be drawn at a time.
Arcanum effect can be triggered using either Play or Minor Arcana.`,
    img_link: `https://img.finalfantasyxiv.com/lds/d/00c07d301af2953574c8a5a8e7dfb3a5b35f4014.png`,
    numDuration: 0,
    numRecast: 30.0,
    numCast: 0.0,
    isGCD: false,
  },
  {
    name: `Diurnal Sect`,
    lvl: `Lv. 30`,
    skill_type: `Ability`,
    cast: `Instant`,
    recast: `5s`,
    cost: `-`,
    skill_range: `0y`,
    aoe_range: `0y`,
    effect: `Adds Regen to certain actions.
Cannot be used with Nocturnal Sect.
Shares a recast timer with Nocturnal Sect.
Effect cannot be removed while in combat.
Effect ends upon reuse.`,
    img_link: `https://img.finalfantasyxiv.com/lds/d/f639b99c54c0eea73fd8a4314358d8e5816863e4.png`,
    numDuration: 0,
    numRecast: 5.0,
    numCast: 0.0,
    isGCD: false,
  },
  {
    name: `Undraw`,
    lvl: `Lv. 30`,
    skill_type: `Ability`,
    cast: `Instant`,
    recast: `1s`,
    cost: `-`,
    skill_range: `0y`,
    aoe_range: `0y`,
    effect: `Returns the currently drawn arcanum back to your deck.`,
    img_link: `https://img.finalfantasyxiv.com/lds/d/7db205e22c1bc928cee957a824da21efeb425b0f.png`,
    numDuration: 0,
    numRecast: 1.0,
    numCast: 0.0,
    isGCD: false,
  },
  {
    name: `Play`,
    lvl: `Lv. 30`,
    skill_type: `Ability`,
    cast: `Instant`,
    recast: `1s`,
    cost: `-`,
    skill_range: `0y`,
    aoe_range: `0y`,
    effect: `Triggers the effect of your drawn arcanum.
Only one arcanum effect can be applied to a target at a time.`,
    img_link: `https://img.finalfantasyxiv.com/lds/d/68699d04987c650170dbb87ad2c326227210d7aa.png`,
    numDuration: 0,
    numRecast: 1.0,
    numCast: 0.0,
    isGCD: false,
  },
  {
    name: `Aspected Benefic`,
    lvl: `Lv. 34`,
    skill_type: `Spell`,
    cast: `Instant`,
    recast: `2.5s`,
    cost: `500 MP`,
    skill_range: `30y`,
    aoe_range: `0y`,
    effect: `Restores target's HP.
Cure Potency: 200
Diurnal Sect Effect: Regen
Cure Potency: 200
Duration: 15s
Effect cannot be stacked.
Nocturnal Sect Effect: Erects a magicked barrier which nullifies damage equaling 250% of the amount of HP restored
Duration: 30s
Effect cannot be stacked with scholar's Galvanize.
Can only be executed while under the effect of Diurnal Sect or Nocturnal Sect.`,
    img_link: `https://img.finalfantasyxiv.com/lds/d/c8ac5c5262677161d0cb0cbde2b862cdf25c42d3.png`,
    numDuration: 0,
    numRecast: 2.5,
    numCast: 0.0,
    isGCD: true,
  },
  {
    name: `Redraw`,
    lvl: `Lv. 40`,
    skill_type: `Ability`,
    cast: `Instant`,
    recast: `30s`,
    cost: `-`,
    skill_range: `0y`,
    aoe_range: `0y`,
    effect: `Draws a different arcanum from your deck.
Maximum Charges: 3`,
    img_link: `https://img.finalfantasyxiv.com/lds/d/2002ccc77cf334685b46f31730ef6828d5cf6cd4.png`,
    numDuration: 0,
    numRecast: 30.0,
    numCast: 0.0,
    isGCD: false,
  },
  {
    name: `Aspected Helios`,
    lvl: `Lv. 42`,
    skill_type: `Spell`,
    cast: `2s`,
    recast: `2.5s`,
    cost: `1000 MP`,
    skill_range: `0y`,
    aoe_range: `15y`,
    effect: `Restores own HP and the HP of all nearby party members.
Cure Potency: 200
Diurnal Sect Effect: Regen
Cure Potency: 100
Duration: 15s
Effect cannot be stacked.
Nocturnal Sect Effect: Erects a magicked barrier which nullifies damage equaling 125% of the amount of HP restored
Duration: 30s
Effect cannot be stacked with scholar's Galvanize.
Can only be executed while under the effect of Diurnal Sect or Nocturnal Sect.`,
    img_link: `https://img.finalfantasyxiv.com/lds/d/d34bbe710a798d7cfcd89968ff7c57489ad4c86b.png`,
    numDuration: 0,
    numRecast: 2.5,
    numCast: 2.0,
    isGCD: true,
  },
  {
    name: `Gravity`,
    lvl: `Lv. 45`,
    skill_type: `Spell`,
    cast: `1.5s`,
    recast: `2.5s`,
    cost: `600 MP`,
    skill_range: `25y`,
    aoe_range: `5y`,
    effect: `Deals unaspected damage with a potency of 140 to target and all enemies nearby it.`,
    img_link: `https://img.finalfantasyxiv.com/lds/d/6814b37bec9f998a123cdcc41b682fb3ca6fd0d2.png`,
    numDuration: 0,
    numRecast: 2.5,
    numCast: 1.5,
    isGCD: true,
  },
  {
    name: `Combust II`,
    lvl: `Lv. 46`,
    skill_type: `Spell`,
    cast: `Instant`,
    recast: `2.5s`,
    cost: `500 MP`,
    skill_range: `25y`,
    aoe_range: `0y`,
    effect: `Deals unaspected damage over time.
Potency: 50
Duration: 30s`,
    img_link: `https://img.finalfantasyxiv.com/lds/d/2459d885461b3a82bd42b9f3f0b2cac970105363.png`,
    numDuration: 0,
    numRecast: 2.5,
    numCast: 0.0,
    isGCD: true,
  },
  {
    name: `Nocturnal Sect`,
    lvl: `Lv. 50`,
    skill_type: `Ability`,
    cast: `Instant`,
    recast: `5s`,
    cost: `-`,
    skill_range: `0y`,
    aoe_range: `0y`,
    effect: `Adds a damage-nullifying barrier to certain actions. Also increases MP cost of Aspected Benefic.
Cannot be used with Diurnal Sect.
Shares a recast timer with Diurnal Sect.
Effect cannot be removed while in combat.
Effect ends upon reuse.`,
    img_link: `https://img.finalfantasyxiv.com/lds/d/20b5f03ecd86abb6f67d7d8ae54614c0e9fddee0.png`,
    numDuration: 0,
    numRecast: 5.0,
    numCast: 0.0,
    isGCD: false,
  },
  {
    name: `Synastry`,
    lvl: `Lv. 50`,
    skill_type: `Ability`,
    cast: `Instant`,
    recast: `120s`,
    cost: `-`,
    skill_range: `30y`,
    aoe_range: `0y`,
    effect: `Generate an aetheric bond with target party member. Each time you cast a single-target healing spell on yourself or a party member, the party member with whom you have the bond will also recover HP equaling 40% of the original spell.
Duration: 20s`,
    img_link: `https://img.finalfantasyxiv.com/lds/d/50937e17d4763c2e839979da1c0baff30b3353d4.png`,
    numDuration: 0,
    numRecast: 120.0,
    numCast: 0.0,
    isGCD: false,
  },
  {
    name: `Minor Arcana`,
    lvl: `Lv. 50`,
    skill_type: `Ability`,
    cast: `Instant`,
    recast: `1s`,
    cost: `-`,
    skill_range: `0y`,
    aoe_range: `0y`,
    effect: `Converts currently drawn arcanum into the Lord of Crowns when Balance, Arrow, or Spear, or the Lady of Crowns when Bole, Ewer, or Spire.
Only one arcanum effect can be applied to a target at a time.`,
    img_link: `https://img.finalfantasyxiv.com/lds/d/aaf52eeaf0a25832dbb4ea6763b009b053a2da4b.png`,
    numDuration: 0,
    numRecast: 1.0,
    numCast: 0.0,
    isGCD: false,
  },
  {
    name: `Divination`,
    lvl: `Lv. 50`,
    skill_type: `Ability`,
    cast: `Instant`,
    recast: `120s`,
    cost: `-`,
    skill_range: `0y`,
    aoe_range: `15y`,
    effect: `Increases damage dealt by self and nearby party members.
Duration: 15s
Can only be executed after obtaining three Seals of Arcana by playing at least three arcanum.
Effectiveness is determined by the number of different types of seals in play.
1 Seal Type: 4%
2 Seal Types: 5%
3 Seal Types: 6%`,
    img_link: `https://img.finalfantasyxiv.com/lds/d/85cbe8d68f1e7346ac2106c2f5e4d10b2cbb1852.png`,
    numDuration: 0,
    numRecast: 120.0,
    numCast: 0.0,
    isGCD: false,
  },
  {
    name: `Malefic II`,
    lvl: `Lv. 54`,
    skill_type: `Spell`,
    cast: `1.5s`,
    recast: `2.5s`,
    cost: `400 MP`,
    skill_range: `25y`,
    aoe_range: `0y`,
    effect: `Deals unaspected damage with a potency of 170.`,
    img_link: `https://img.finalfantasyxiv.com/lds/d/8df14ac51cbb7d40d9cd5d847ff412ec174cc2b8.png`,
    numDuration: 0,
    numRecast: 2.5,
    numCast: 1.5,
    isGCD: true,
  },
  {
    name: `Collective Unconscious`,
    lvl: `Lv. 58`,
    skill_type: `Ability`,
    cast: `Instant`,
    recast: `60s`,
    cost: `-`,
    skill_range: `0y`,
    aoe_range: `8y`,
    effect: `Creates a celestial ring around the caster.
Diurnal Sect Effect: Reduces damage taken by 10% and applies Wheel of Fortune to self and any party members who enter
Duration: 18s
Wheel of Fortune Effect (Diurnal): Regen
Cure Potency: 100
Duration: 15s
Nocturnal Sect Effect: Grants healing over time and applies Wheel of Fortune to self and any party members who enter
Cure Potency: 100
Duration: 18s
Wheel of Fortune Effect (Nocturnal): Reduces damage taken by 10%
Duration: 20s
Effect ends upon using another action or moving (including facing a different direction).
Cancels auto-attack upon execution.
Can only be executed while under the effect of Diurnal Sect or Nocturnal Sect.`,
    img_link: `https://img.finalfantasyxiv.com/lds/d/5a818588f6b530d12720e73f69e6a15f212db42e.png`,
    numDuration: 0,
    numRecast: 60.0,
    numCast: 0.0,
    isGCD: false,
  },
  {
    name: `Celestial Opposition`,
    lvl: `Lv. 60`,
    skill_type: `Ability`,
    cast: `Instant`,
    recast: `60s`,
    cost: `-`,
    skill_range: `0y`,
    aoe_range: `15y`,
    effect: `Restores own HP and the HP of all nearby party members.
Cure Potency: 200
Diurnal Sect Effect: Regen
Cure Potency: 100
Duration: 15s
Effect cannot be stacked.
Nocturnal Sect Effect: Erects a magicked barrier which nullifies damage equaling 125% of the amount of HP restored
Duration: 30s
Can only be executed while under the effect of Diurnal Sect or Nocturnal Sect.`,
    img_link: `https://img.finalfantasyxiv.com/lds/d/e4d9992477db32bb9eb1c947b135ed61ac94bc3c.png`,
    numDuration: 0,
    numRecast: 60.0,
    numCast: 0.0,
    isGCD: false,
  },
  {
    name: `Earthly Star`,
    lvl: `Lv. 62`,
    skill_type: `Ability`,
    cast: `Instant`,
    recast: `60s`,
    cost: `-`,
    skill_range: `30y`,
    aoe_range: `8y`,
    effect: `Deploys an Earthly Star in the designated area and grants the effect of Earthly Dominance.
Duration: 10s
Executing Stellar Detonation while under the effect of Earthly Dominance creates a Stellar Burst dealing unaspected damage with a potency of 100 to all nearby enemies. Also restores own HP and the HP of all nearby party members.
Cure Potency: 540
After 10s, Earthly Dominance effect is changed to Giant Dominance.
Duration: 10s
Waiting 10s or executing Stellar Detonation while under the effect of Giant Dominance creates a Stellar Explosion dealing unaspected damage with a potency of 150 to all nearby enemies. Also restores own HP and the HP of all nearby party members.
Cure Potency: 720`,
    img_link: `https://img.finalfantasyxiv.com/lds/d/e7b81f3cd1bd27491835ca58879d9b8687f3fb88.png`,
    numDuration: 0,
    numRecast: 60.0,
    numCast: 0.0,
    isGCD: false,
  },
  {
    name: `Stellar Detonation`,
    lvl: `Lv. 62`,
    skill_type: `Ability`,
    cast: `Instant`,
    recast: `3s`,
    cost: `-`,
    skill_range: `0y`,
    aoe_range: `8y`,
    effect: `While under the effect of Earthly Dominance, detonates the currently deployed Earthly Star, creating a Stellar Burst that deals unaspected damage with a potency of 100 to all nearby enemies.
Additional Effect: Restores own HP and the HP of all nearby party members
Cure Potency: 540
While under the effect of Giant Dominance, detonates the currently deployed Earthly Star, creating a Stellar Explosion that deals unaspected damage with a potency of 150 to all nearby enemies.
Additional Effect: Restores own HP and the HP of all nearby party members
Cure Potency: 720`,
    img_link: `https://img.finalfantasyxiv.com/lds/d/695d41da55c1785727610d54670d8c3863c3aa52.png`,
    numDuration: 0,
    numRecast: 3.0,
    numCast: 0.0,
    isGCD: false,
  },
  {
    name: `Malefic III`,
    lvl: `Lv. 64`,
    skill_type: `Spell`,
    cast: `1.5s`,
    recast: `2.5s`,
    cost: `400 MP`,
    skill_range: `25y`,
    aoe_range: `0y`,
    effect: `Deals unaspected damage with a potency of 210.`,
    img_link: `https://img.finalfantasyxiv.com/lds/d/6cc5cb9db2dda4e995115c65c432d7193e4c70be.png`,
    numDuration: 0,
    numRecast: 2.5,
    numCast: 1.5,
    isGCD: true,
  },
  {
    name: `Sleeve Draw`,
    lvl: `Lv. 70`,
    skill_type: `Ability`,
    cast: `Instant`,
    recast: `180s`,
    cost: `-`,
    skill_range: `0y`,
    aoe_range: `0y`,
    effect: `Draws a card (arcanum) from your divining deck and grants two stacks of Sleeve Draw.
Duration: 30s
Sleeve Draw Effect: Using your drawn arcanum or executing Undraw consumes a stack of Sleeve Draw and draws another card`,
    img_link: `https://img.finalfantasyxiv.com/lds/d/7f623be4bcf8802ab2abaaa1972912ba20cbf283.png`,
    numDuration: 0,
    numRecast: 180.0,
    numCast: 0.0,
    isGCD: false,
  },
  {
    name: `Combust III`,
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
    img_link: `https://img.finalfantasyxiv.com/lds/d/f09b3a0a776fac4f189850ac387c533b37a28f4c.png`,
    numDuration: 0,
    numRecast: 2.5,
    numCast: 0.0,
    isGCD: true,
  },
  {
    name: `Malefic IV`,
    lvl: `Lv. 72`,
    skill_type: `Spell`,
    cast: `1.5s`,
    recast: `2.5s`,
    cost: `400 MP`,
    skill_range: `25y`,
    aoe_range: `0y`,
    effect: `Deals unaspected damage with a potency of 250.`,
    img_link: `https://img.finalfantasyxiv.com/lds/d/37e1e78e08c61d5849c30eccc2561dd572e4eafe.png`,
    numDuration: 0,
    numRecast: 2.5,
    numCast: 1.5,
    isGCD: true,
  },
  {
    name: `Celestial Intersection`,
    lvl: `Lv. 74`,
    skill_type: `Ability`,
    cast: `Instant`,
    recast: `30s`,
    cost: `-`,
    skill_range: `30y`,
    aoe_range: `0y`,
    effect: `Restores own or target party member's HP.
Cure Potency: 200
Diurnal Sect Effect: Erects a magicked barrier which nullifies damage equaling 200% of the amount of HP restored
Duration: 30s
Nocturnal Sect Effect: Regen
Cure Potency: 150
Duration: 15s
Effect cannot be stacked.
Can only be executed while under the effect of Diurnal Sect or Nocturnal Sect.`,
    img_link: `https://img.finalfantasyxiv.com/lds/d/fc6100e977acefb11c443ee122137fb29d8dfb8f.png`,
    numDuration: 0,
    numRecast: 30.0,
    numCast: 0.0,
    isGCD: false,
  },
  {
    name: `Horoscope`,
    lvl: `Lv. 76`,
    skill_type: `Ability`,
    cast: `Instant`,
    recast: `60s`,
    cost: `-`,
    skill_range: `0y`,
    aoe_range: `20y`,
    effect: `Reads your fortune and those of nearby party members, granting them Horoscope.
Duration: 10s
Effect upgraded to Horoscope Helios upon receiving the effects of Helios or Aspected Helios.
Duration: 30s
Reading the cards a second time will restore the HP of those under either effect.
Horoscope Cure Potency: 200
Horoscope Helios Cure Potency: 400`,
    img_link: `https://img.finalfantasyxiv.com/lds/d/ff86979cebdde4e62b88ce4d2abda0b21e722a2c.png`,
    numDuration: 0,
    numRecast: 60.0,
    numCast: 0.0,
    isGCD: false,
  },
  {
    name: `Horoscope`,
    lvl: `Lv. 76`,
    skill_type: `Ability`,
    cast: `Instant`,
    recast: `1s`,
    cost: `-`,
    skill_range: `0y`,
    aoe_range: `20y`,
    effect: `Restores own HP and the HP of all nearby party members.
Potency is determined by the Horoscope effect of party members. Effect expires upon execution.
Horoscope Potency: 200
Horoscope Helios Potency: 400`,
    img_link: `https://img.finalfantasyxiv.com/lds/d/eb107805e38f4ee70e6b4e6bac925776ea43eb12.png`,
    numDuration: 0,
    numRecast: 1.0,
    numCast: 0.0,
    isGCD: false,
  },
  {
    name: `Neutral Sect`,
    lvl: `Lv. 80`,
    skill_type: `Ability`,
    cast: `Instant`,
    recast: `120s`,
    cost: `-`,
    skill_range: `0y`,
    aoe_range: `0y`,
    effect: `Increases healing magic potency by 20%.
Additional Effect: Aspected Helios and Aspected Benefic receive the effects of both Diurnal Sect and Nocturnal Sect
Duration: 20s`,
    img_link: `https://img.finalfantasyxiv.com/lds/d/53981c1619a7699b5db4ee30ad24e872ba8862a6.png`,
    numDuration: 0,
    numRecast: 120.0,
    numCast: 0.0,
    isGCD: false,
  },
];
