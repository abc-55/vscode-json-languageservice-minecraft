export default {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://minecraft-addon-tools.github.io/schemas/1.8.0/serverEntity.json",
  "title": "Entity definition file",
  "definitions": {
    "components": {
      "type": "object",
      "properties": {
        "minecraft:ambient_sound_interval": {
          "description": "Sets the entity's delay between playing its ambient sound.",
          "type": "object",
          "properties": {
            "range": {
              "description": "Maximum time is seconds to randomly add to the ambient sound delay time."
            },
            "value": {
              "description": "Minimum time in seconds before the entity plays its ambient sound again"
            }
          }
        },
        "minecraft:can_climb": {
          "description": "Allows this entity to climb up ladders.",
          "type": "object",
          "default": {}
        },
        "minecraft:can_fly": {
          "description": "Marks the entity as being able to fly, the pathfinder won't be restricted to paths where a solid block is required underneath it.",
          "type": "object",
          "default": {}
        },
        "minecraft:can_power_jump": {
          "description": "Allows the entity to power jump like the horse does in vanilla.",
          "type": "object",
          "default": {}
        },
        "minecraft:collision_box": {
          "description": "Sets the width and height of the Entity's collision box.",
          "type": "object",
          "properties": {
            "width": {
              "description": "Width and Depth of the collision box in blocks. A negative value will be assumed to be 0"
            },
            "height": {
              "description": "Height of the collision box in blocks. A negative value will be assumed to be 0"
            }
          }
        },
        "minecraft:color": {
          "description": "Defines the entity's color. Only works on vanilla entities that have predefined color values (sheep, llama, shulker).",
          "type": "object",
          "properties": {
            "value": {
              "description": "The Palette Color value of the entity"
            }
          }
        },
        "minecraft:color2": {
          "description": "Defines the entity's second texture color. Only works on vanilla entities that have a second predefined color values (tropical fish).",
          "type": "object",
          "properties": {
            "value": {
              "description": "The second Palette Color value of the entity"
            }
          }
        },
        "minecraft:default_look_angle": {
          "description": "Sets this entity's default head rotation angle.",
          "type": "object",
          "properties": {
            "value": {
              "description": "Angle in degrees"
            }
          }
        },
        "minecraft:equipment": {
          "description": "Sets the Equipment table to use for this Entity.",
          "type": "object",
          "properties": {
            "table": {
              "description": "The file path to the equipment table, relative to the behavior pack's root"
            },
            "slot_drop_chance": {
              "description": "A list of slots with the chance to drop an equipped item from that slot"
            }
          }
        },
        "minecraft:fire_immune": {
          "description": "Sets that this entity doesn't take damage from fire.",
          "type": "object",
          "default": {}
        },
        "minecraft:floats_in_liquid": {
          "description": "Sets that this entity can float in liquid blocks.",
          "type": "object",
          "default": {}
        },
        "minecraft:flying_speed": {
          "description": "Speed in Blocks that this entity flies at.",
          "type": "object",
          "properties": {
            "value": {
              "description": "Flying speed in blocks per tick"
            }
          }
        },
        "minecraft:foot_size": {
          "description": "Sets the number of blocks the entity can step without jumping.",
          "type": "object",
          "properties": {
            "value": {
              "description": "The value of the size of the entity's step"
            }
          }
        },
        "minecraft:friction_modifier": {
          "description": "Defines how much does friction affect this entity.",
          "type": "object",
          "properties": {
            "value": {
              "description": "The higher the number, the more the friction affects this entity. A value of 1.0 means regular friction, while 2.0 means twice as much"
            }
          }
        },
        "minecraft:ground_offset": {
          "description": "Sets the offset from the ground that the entity is actually at.",
          "type": "object",
          "properties": {
            "value": {
              "description": "The value of the entity's offset from the terrain, in blocks"
            }
          }
        },
        "minecraft:input_ground_controlled": {
          "description": "When configured as a rideable entity, the entity will be controlled using WASD controls.",
          "type": "object",
          "default": {}
        },
        "minecraft:is_baby": {
          "description": "Sets that this entity is a baby.",
          "type": "object",
          "default": {}
        },
        "minecraft:is_charged": {
          "description": "Sets that this entity is charged.",
          "type": "object",
          "default": {}
        },
        "minecraft:is_chested": {
          "description": "Sets that this entity is currently carrying a chest.",
          "type": "object",
          "default": {}
        },
        "minecraft:is_dyeable": {
          "description": "Allows dyes to be used on this entity to change its color.",
          "type": "object",
          "properties": {
            "interact_text": {
              "description": "The text that will display when interacting with this entity with a dye when playing with Touch-screen controls"
            }
          }
        },
        "minecraft:is_ignited": {
          "description": "Sets that this entity is currently on fire.",
          "type": "object",
          "default": {}
        },
        "minecraft:is_saddled": {
          "description": "Sets that this entity is currently saddled.",
          "type": "object",
          "default": {}
        },
        "minecraft:is_shaking": {
          "description": "Sets that this entity is currently shaking.",
          "type": "object",
          "default": {}
        },
        "minecraft:is_sheared": {
          "description": "Sets that this entity is currently sheared.",
          "type": "object",
          "default": {}
        },
        "minecraft:is_stackable": {
          "description": "Sets that this entity can be stacked.",
          "type": "object",
          "default": {}
        },
        "minecraft:is_tamed": {
          "description": "Sets that this entity is currently tamed.",
          "type": "object",
          "default": {}
        },
        "minecraft:item_controllable": {
          "description": "Defines what items can be used to control this entity while ridden",
          "type": "object",
          "properties": {
            "control_items": {
              "description": "List of items that can be used to control this entity"
            }
          }
        },
        "minecraft:loot": {
          "description": "Sets the loot table for what items this entity drops upon death.",
          "type": "object",
          "properties": {
            "table": {
              "description": "The path to the loot table, relative to the Behavior Pack's root"
            }
          }
        },
        "minecraft:mark_variant": {
          "description": "Additional variant value. Can be used to further differentiate variants.",
          "type": "object",
          "properties": {
            "value": {
              "description": "The ID of the variant. By convention, 0 is the ID of the base entity"
            }
          }
        },
        "minecraft:push_through": {
          "description": "Sets the distance through which the entity can push through.",
          "type": "object",
          "properties": {
            "value": {
              "description": "The value of the entity's push-through, in blocks"
            }
          }
        },
        "minecraft:scale": {
          "description": "Sets the entity's visual size.",
          "type": "object",
          "properties": {
            "value": {
              "description": "The value of the scale. 1.0 means the entity will appear at the scale they are defined in their model. Higher numbers make the entity bigger"
            }
          }
        },
        "minecraft:sound_volume": {
          "description": "Sets the entity's base volume for sound effects.",
          "type": "object",
          "properties": {
            "value": {
              "description": "The value of the volume the entity uses for sound effects"
            }
          }
        },
        "minecraft:type_family": {
          "description": "Defines the families this entity belongs to.",
          "type": "object",
          "properties": {
            "family": {
              "description": "List of family names"
            }
          }
        },
        "minecraft:variant": {
          "description": "Used to differentiate the component group of a variant of an entity from others (e.g. ocelot, villager)",
          "type": "object",
          "properties": {
            "value": {
              "description": "The ID of the variant. By convention, 0 is the ID of the base entity"
            }
          }
        },
        "minecraft:walk_animation_speed": {
          "description": "Sets the speed multiplier for this entity's walk animation speed.",
          "type": "object",
          "properties": {
            "value": {
              "description": "The higher the number, the faster the animation for walking plays. A value of 1.0 means normal speed, while 2.0 means twice as fast"
            }
          }
        },
        "minecraft:wants_jockey": {
          "description": "Sets that this entity wants to become a jockey.",
          "type": "object",
          "default": {}
        },
        "minecraft:addrider": {
          "description": "Adds a rider to the entity. Requires minecraft:rideable.",
          "type": "object",
          "properties": {
            "entity_type": {
              "description": "The entity type that will be riding this entity"
            }
          }
        },
        "minecraft:ageable": {
          "description": "Adds a timer for the entity to grow up. It can be accelerated by giving the entity the items it likes as defined by feedItems.",
          "type": "object",
          "properties": {
            "drop_items": {
              "description": "List of items that the entity drops when it grows up."
            },
            "duration": {
              "description": "Amount of time before the entity grows"
            },
            "feedItems": {
              "description": "List of items that can be fed to the entity. Includes 'item' for the item name and 'growth' to define how much time it grows up by"
            },
            "grow_up": {
              "description": "Event to run when this entity grows up"
            }
          }
        },
        "minecraft:angry": {
          "description": "Defines the entity's 'angry' state using a timer.",
          "type": "object",
          "properties": {
            "broadcastAnger": {
              "description": "If true, other entities of the same entity definition within the broadcastRange will also become angry"
            },
            "broadcastRange": {
              "description": "Distance in blocks within which other entities of the same entity definition will become angry"
            },
            "broadcast_filters": {
              "description": "Conditions that make this entry in the list valid"
            },
            "calm_event": {
              "description": "Event to run after the number of seconds specified in duration expires (when the entity stops being 'angry')"
            },
            "duration": {
              "description": "The amount of time in seconds that the entity will be angry"
            },
            "duration_delta": {
              "description": "Variance in seconds added to the duration [-delta, delta]"
            }
          }
        },
        "minecraft:boostable": {
          "description": "Defines the conditions and behavior of a rideable entity's boost",
          "type": "object",
          "properties": {
            "boost_items": {
              "description": "List of items that can be used to boost while riding this entity. Each item has the following properties:"
            },
            "duration": {
              "description": "Time in seconds for the boost"
            },
            "speed_multiplier": {
              "description": "Factor by which the entity's normal speed increases. E.g. 2.0 means go twice as fast"
            }
          }
        },
        "minecraft:breathable": {
          "description": "Defines what blocks this entity can breathe in and gives them the ability to suffocate",
          "type": "object",
          "properties": {
            "breatheBlocks": {
              "description": "List of blocks this entity can breathe in, in addition to the above"
            },
            "breathesAir": {
              "description": "If true, this entity can breathe in air"
            },
            "breathesLava": {
              "description": "If true, this entity can breathe in lava"
            },
            "breathesSolids": {
              "description": "If true, this entity can breathe in solid blocks"
            },
            "breathesWater": {
              "description": "If true, this entity can breathe in water"
            },
            "generatesBubbles": {
              "description": "If true, this entity will have visible bubbles while in water"
            },
            "inhaleTime": {
              "description": "Time in seconds to recover breath to maximum"
            },
            "nonBreatheBlocks": {
              "description": "List of blocks this entity can't breathe in, in addition to the above"
            },
            "suffocateTime": {
              "description": "Time in seconds between suffocation damage"
            },
            "totalSupply": {
              "description": "Time in seconds the entity can hold its breath"
            }
          }
        },
        "minecraft:breedable": {
          "description": "Defines the way an entity can get into the 'love' state.",
          "type": "object",
          "properties": {
            "allowSitting": {
              "description": "If true, entities can breed while sitting"
            },
            "blend_attributes": {
              "description": "If true, the entities will blend their attributes in the offspring after they breed. For example, horses blend their health, movement, and jump_strength in their offspring."
            },
            "breedCooldown": {
              "description": "Time in seconds before the Entity can breed again"
            },
            "breedItems": {
              "description": "The list of items that can be used to get the entity into the 'love' state"
            },
            "breedsWith": {
              "description": "The list of entity definitions that this entity can breed with."
            },
            "causes_pregnancy": {
              "description": "If true, the entity will become pregnant instead of spawning a baby."
            },
            "environment_requirements": {
              "description": "The list of nearby block requirements to get the entity into the 'love' state.block\n\nThe block types required nearby for the entity to breed.Back to top\n\ncount\n\nThe number of the required block types nearby for the entity to breed.Back to top\n\nradius\n\nHow many blocks radius from the mob's center to search in for the required blocks. Bounded between 0 and 16.Back to top"
            },
            "extraBabyChance": {
              "description": "Chance that up to 16 babies will spawn between 0.0 and 1.0, where 1.0 is 100%"
            },
            "inheritTamed": {
              "description": "If true, the babies will be automatically tamed if its parents are"
            },
            "mutation_factor": {
              "description": "Determines how likely the babies are to NOT inherit one of their parent's variances. Values are between 0.0 and 1.0, with a higher number meaning more likely to mutate"
            },
            "requireTame": {
              "description": "If true, the entities need to be tamed first before they can breed."
            }
          }
        },
        "minecraft:bribeable": {
          "description": "Defines the way an entity can get into the 'bribed' state.",
          "type": "object",
          "properties": {
            "bribe_cooldown": {
              "description": "Time in seconds before the Entity can be bribed again"
            },
            "bribe_items": {
              "description": "The list of items that can be used to bribe the entity"
            }
          }
        },
        "minecraft:burns_in_daylight": {
          "description": "Specifies if/how a mob burns in daylight.",
          "type": "object",
          "default": {}
        },
        "minecraft:damage_over_time": {
          "description": "Applies defined amount of damage to the entity at specified intervals",
          "type": "object",
          "properties": {
            "damagePerHurt": {
              "description": "Amount of damage caused each hurt"
            },
            "timeBetweenHurt": {
              "description": "Time in seconds between damage"
            }
          }
        },
        "minecraft:damage_sensor": {
          "description": "Defines what events to call when this entity is damaged by specific entities or items. Can be either an array or a single instance.",
          "type": "object",
          "properties": {
            "on_damage": {
              "description": "List of triggers with the events to call when taking this specific kind of damage, allows specifying filters for entity definitions and events"
            },
            "deals_damage": {
              "description": "If true, the damage dealt to the entity will take away health from it, set to false to make the entity ignore that damage"
            },
            "cause": {
              "description": "Type of damage that triggers this set of events"
            }
          }
        },
        "minecraft:environment_sensor": {
          "description": "Creates a trigger based on environment conditions.",
          "type": "object",
          "properties": {
            "on_environment": {
              "description": "The list of triggers that fire when the environment conditions match the given filter criteria."
            }
          }
        },
        "minecraft:equippable": {
          "description": "Defines an entity's behavior for having items equipped to it",
          "type": "object",
          "properties": {
            "slots": {
              "description": "List of slots and the item that can be equipped"
            }
          }
        },
        "minecraft:explode": {
          "description": "Defines how the entity explodes.",
          "type": "object",
          "properties": {
            "fuseLength": {
              "description": "The range for the random amount of time the fuse will be lit before exploding, a negative value means the explosion will be immediate"
            },
            "power": {
              "description": "The radius of the explosion in blocks and the amount of damage the explosion deals"
            },
            "maxResistance": {
              "description": "A blocks explosion resistance will be capped at this value when an explosion occurs"
            },
            "fuseLit": {
              "description": "If true, the fuse is already lit when this component is added to the entity"
            },
            "causesFire": {
              "description": "If true, blocks in the explosion radius will be set on fire"
            },
            "breaks_blocks": {
              "description": "If true, the explosion will destroy blocks in the explosion radius"
            },
            "fireAffectedByGriefing": {
              "description": "If true, whether the explosion causes fire is affected by the mob griefing game rule"
            },
            "destroyAffectedByGriefing": {
              "description": "If true, whether the explosion breaks blocks is affected by the mob griefing game rule"
            }
          }
        },
        "minecraft:genetics": {
          "description": "Defines the way a mob's genes and alleles are passed on to it's offspring, and how those traits manifest in the child. Compatible parent genes are crossed together, the alleles are handed down from the parents to the child, and any matching genetic variants fire off JSON events to modify the child and express the traits.",
          "type": "object",
          "properties": {
            "genes": {
              "description": "The list of genes that this entity has and will cross with a partner during breeding."
            },
            "mutation_rate": {
              "description": "Chance that an allele will be replaced with a random one instead of the parent's allele during birth."
            }
          }
        },
        "minecraft:giveable": {
          "description": "Defines sets of items that can be used to trigger events when used on this entity. The item will also be taken and placed in the entity's inventory.",
          "type": "object",
          "properties": {
            "items": {
              "description": "The list of items that can be given to the entity to place in their inventory."
            },
            "on_give": {
              "description": "Event to fire when the correct item is given."
            }
          }
        },
        "minecraft:healable": {
          "description": "Defines the interactions with this entity for healing it.",
          "type": "object",
          "properties": {
            "force_use": {
              "description": "Determines if item can be used regardless of entity being at full health"
            },
            "filters": {
              "description": "The filter group that defines the conditions for this trigger"
            },
            "items": {
              "description": "The array of items that can be used to heal this entity"
            }
          }
        },
        "minecraft:hurt_when_wet": {
          "description": "Specifies if an actor is hurt when wet.",
          "type": "object",
          "default": {}
        },
        "minecraft:insomnia": {
          "description": "Adds a timer since last rested to see if phantoms should spawn.",
          "type": "object",
          "properties": {
            "days_until_insomnia": {
              "description": "Number of days the mob has to stay up until the insomnia effect begins."
            }
          }
        },
        "minecraft:interact": {
          "description": "Defines interactions with this entity.",
          "type": "object",
          "properties": {
            "add_items": {
              "description": "Loot table with items to add to the player's inventory upon successful interaction"
            },
            "cooldown": {
              "description": "Time in seconds before this entity can be interacted with again"
            },
            "hurt_item": {
              "description": "The amount of damage the item will take when used to interact with this entity. A value of 0 means the item won't lose durability"
            },
            "interact_text": {
              "description": "Text to show when the player is able to interact in this way with this entity when playing with Touch-screen controls"
            },
            "on_interact": {
              "description": "Event to fire when the interaction occurs"
            },
            "particle_on_start": {
              "description": "Particle effect that will be triggered at the start of the interactionparticle_offset_towards_interactor\n\nWhether or not the particle will appear closer to who performed the interactionBack to top\n\nparticle_type\n\nThe type of particle that will be spawnedBack to top\n\nparticle_y_offset\n\nWill offset the particle this amount in the y directionBack to top"
            },
            "play_sounds": {
              "description": "List of sounds to play when the interaction occurs"
            },
            "spawn_entities": {
              "description": "List of entities to spawn when the interaction occurs"
            },
            "spawn_items": {
              "description": "Loot table with items to drop on the ground upon successful interaction"
            },
            "swing": {
              "description": "If true, the player will do the 'swing' animation when interacting with this entity"
            },
            "transform_to_item": {
              "description": "The item used will transform to this item upon successful interaction. Format: itemName:auxValue"
            },
            "use_item": {
              "description": "If true, the interaction will use an item"
            }
          }
        },
        "minecraft:inventory": {
          "description": "Defines this entity's inventory properties.",
          "type": "object",
          "properties": {
            "additional_slots_per_strength": {
              "description": "Number of slots that this entity can gain per extra strength"
            },
            "can_be_siphoned_from": {
              "description": "If true, the contents of this inventory can be removed by a hopper"
            },
            "container_type": {
              "description": "Type of container this entity has. Can be horse, minecart_chest, minecart_hopper, inventory, container or hopper"
            },
            "inventory_size": {
              "description": "Number of slots the container has"
            },
            "private": {
              "description": "If true, only the entity can access the inventory"
            },
            "restrict_to_owner": {
              "description": "If true, the entity's inventory can only be accessed by its owner or itself"
            }
          }
        },
        "minecraft:item_hopper": {
          "description": "Determines that this entity is an item hopper",
          "type": "object",
          "default": {}
        },
        "minecraft:jump.dynamic": {
          "description": "Defines a dynamic type jump control that will change jump properties based on the speed modifier of the mob.",
          "type": "object",
          "default": {}
        },
        "minecraft:jump.static": {
          "description": "Gives the entity the ability to jump.",
          "type": "object",
          "properties": {
            "jump_power": {
              "description": "The initial vertical velocity for the jump"
            }
          }
        },
        "minecraft:leashable": {
          "description": "Allows this entity to be leashed and Defines the conditions and events for this entity when is leashed.",
          "type": "object",
          "properties": {
            "hard_distance": {
              "description": "Distance in blocks at which the leash stiffens, restricting movement"
            },
            "max_distance": {
              "description": "Distance in blocks at which the leash breaks"
            },
            "on_leash": {
              "description": "Event to call when this entity is leashed"
            },
            "on_unleash": {
              "description": "Event to call when this entity is unleashed"
            },
            "soft_distance": {
              "description": "Distance in blocks at which the 'spring' effect starts acting to keep this entity close to the entity that leashed it"
            }
          }
        },
        "minecraft:lookat": {
          "description": "Defines the behavior when another entity looks at this entity.",
          "type": "object",
          "properties": {
            "filters": {
              "description": "Defines the entities that can trigger this component"
            },
            "look_cooldown": {
              "description": "The range for the random amount of time during which the entity is 'cooling down' and won't get angered or look for a target"
            },
            "look_event": {
              "description": "The event identifier to run when the entities specified in filters look at this entity"
            },
            "mAllowInvulnerable": {
              "description": "If true, invulnerable entities (e.g. Players in creative mode) are considered valid targets"
            },
            "searchRadius": {
              "description": "Maximum distance this entity will look for another entity looking at it"
            },
            "setTarget": {
              "description": "If true, this entity will set the attack target as the entity that looked at it"
            }
          }
        },
        "minecraft:movement.amphibious": {
          "description": "This move control allows the mob to swim in water and walk on land.",
          "type": "object",
          "properties": {
            "max_turn": {
              "description": "The maximum number in degrees the mob can turn per tick."
            }
          }
        },
        "minecraft:movement.basic": {
          "description": "This component accents the movement of an entity.",
          "type": "object",
          "properties": {
            "max_turn": {
              "description": "The maximum number in degrees the mob can turn per tick."
            }
          }
        },
        "minecraft:movement.fly": {
          "description": "This move control causes the mob to fly.",
          "type": "object",
          "properties": {
            "max_turn": {
              "description": "The maximum number in degrees the mob can turn per tick."
            }
          }
        },
        "minecraft:movement.generic": {
          "description": "This move control allows a mob to fly, swim, climb, etc.",
          "type": "object",
          "properties": {
            "max_turn": {
              "description": "The maximum number in degrees the mob can turn per tick."
            }
          }
        },
        "minecraft:movement.jump": {
          "description": "Move control that causes the mob to jump as it moves with a specified delay between jumps.",
          "type": "object",
          "properties": {
            "jump_delay": {
              "description": "Delay after landing when using the slime move control."
            },
            "max_turn": {
              "description": "The maximum number in degrees the mob can turn per tick."
            }
          }
        },
        "minecraft:movement.skip": {
          "description": "This move control causes the mob to hop as it moves.",
          "type": "object",
          "properties": {
            "max_turn": {
              "description": "The maximum number in degrees the mob can turn per tick."
            }
          }
        },
        "minecraft:movement.sway": {
          "description": "This move control causes the mob to sway side to side giving the impression it is swimming.",
          "type": "object",
          "properties": {
            "max_turn": {
              "description": "The maximum number in degrees the mob can turn per tick."
            }
          }
        },
        "minecraft:nameable": {
          "description": "Allows this entity to be named (e.g. using a name tag)",
          "type": "object",
          "properties": {
            "allowNameTagRenaming": {
              "description": "If true, this entity can be renamed with name tags"
            },
            "alwaysShow": {
              "description": "If true, the name will always be shown"
            },
            "default_trigger": {
              "description": "Trigger to run when the entity gets named"
            },
            "name_actions": {
              "description": "Describes the special names for this entity and the events to call when the entity acquires those names"
            }
          }
        },
        "minecraft:navigation.climb": {
          "description": "Allows this entity to generate paths that include vertical walls like the vanilla Spiders do.",
          "type": "object",
          "properties": {
            "avoid_portals": {
              "description": "Tells the pathfinder to avoid portals (like nether portals) when finding a path"
            },
            "avoid_sun": {
              "description": "Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths"
            },
            "avoid_water": {
              "description": "Tells the pathfinder to avoid water when creating a path"
            },
            "can_open_doors": {
              "description": "Tells the pathfinder that it can path through a closed door assuming the AI will open the door"
            },
            "can_pass_doors": {
              "description": "Whether a path can be created through a door"
            },
            "can_path_over_water": {
              "description": "Tells the pathfinder whether or not it can travel on the surface of the water"
            },
            "can_sink": {
              "description": "Tells the pathfinder whether or not it will be pulled down by gravity while in water"
            }
          }
        },
        "minecraft:navigation.float": {
          "description": "Allows this entity to generate paths by flying around the air like the regular Ghast.",
          "type": "object",
          "properties": {
            "avoid_portals": {
              "description": "Tells the pathfinder to avoid portals (like nether portals) when finding a path"
            },
            "avoid_sun": {
              "description": "Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths"
            },
            "avoid_water": {
              "description": "Tells the pathfinder to avoid water when creating a path"
            },
            "can_open_doors": {
              "description": "Tells the pathfinder that it can path through a closed door assuming the AI will open the door"
            },
            "can_pass_doors": {
              "description": "Whether a path can be created through a door"
            },
            "can_path_over_water": {
              "description": "Tells the pathfinder whether or not it can travel on the surface of the water"
            },
            "can_sink": {
              "description": "Tells the pathfinder whether or not it will be pulled down by gravity while in water"
            }
          }
        },
        "minecraft:navigation.fly": {
          "description": "Allows this entity to generate paths in the air like the vanilla Parrots do.",
          "type": "object",
          "properties": {
            "avoid_portals": {
              "description": "Tells the pathfinder to avoid portals (like nether portals) when finding a path"
            },
            "avoid_sun": {
              "description": "Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths"
            },
            "avoid_water": {
              "description": "Tells the pathfinder to avoid water when creating a path"
            },
            "can_open_doors": {
              "description": "Tells the pathfinder that it can path through a closed door assuming the AI will open the door"
            },
            "can_pass_doors": {
              "description": "Whether a path can be created through a door"
            },
            "can_path_over_water": {
              "description": "Tells the pathfinder whether or not it can travel on the surface of the water"
            },
            "can_sink": {
              "description": "Tells the pathfinder whether or not it will be pulled down by gravity while in water"
            }
          }
        },
        "minecraft:navigation.generic": {
          "description": "Allows this entity to generate paths by walking, swimming, flying and/or climbing around and jumping up and down a block.",
          "type": "object",
          "properties": {
            "avoid_portals": {
              "description": "Tells the pathfinder to avoid portals (like nether portals) when finding a path"
            },
            "avoid_sun": {
              "description": "Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths"
            },
            "avoid_water": {
              "description": "Tells the pathfinder to avoid water when creating a path"
            },
            "can_open_doors": {
              "description": "Tells the pathfinder that it can path through a closed door assuming the AI will open the door"
            },
            "can_pass_doors": {
              "description": "Whether a path can be created through a door"
            },
            "can_path_over_water": {
              "description": "Tells the pathfinder whether or not it can travel on the surface of the water"
            },
            "can_sink": {
              "description": "Tells the pathfinder whether or not it will be pulled down by gravity while in water"
            }
          }
        },
        "minecraft:navigation.swim": {
          "description": "Allows this entity to generate paths that include water.",
          "type": "object",
          "properties": {
            "avoid_portals": {
              "description": "Tells the pathfinder to avoid portals (like nether portals) when finding a path"
            },
            "avoid_sun": {
              "description": "Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths"
            },
            "avoid_water": {
              "description": "Tells the pathfinder to avoid water when creating a path"
            },
            "can_open_doors": {
              "description": "Tells the pathfinder that it can path through a closed door assuming the AI will open the door"
            },
            "can_pass_doors": {
              "description": "Whether a path can be created through a door"
            },
            "can_path_over_water": {
              "description": "Tells the pathfinder whether or not it can travel on the surface of the water"
            },
            "can_sink": {
              "description": "Tells the pathfinder whether or not it will be pulled down by gravity while in water"
            }
          }
        },
        "minecraft:navigation.walk": {
          "description": "Allows this entity to generate paths by walking around and jumping up and down a block like regular mobs.",
          "type": "object",
          "properties": {
            "avoid_portals": {
              "description": "Tells the pathfinder to avoid portals (like nether portals) when finding a path"
            },
            "avoid_sun": {
              "description": "Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths"
            },
            "avoid_water": {
              "description": "Tells the pathfinder to avoid water when creating a path"
            },
            "can_open_doors": {
              "description": "Tells the pathfinder that it can path through a closed door assuming the AI will open the door"
            },
            "can_pass_doors": {
              "description": "Whether a path can be created through a door"
            },
            "can_path_over_water": {
              "description": "Tells the pathfinder whether or not it can travel on the surface of the water"
            },
            "can_sink": {
              "description": "Tells the pathfinder whether or not it will be pulled down by gravity while in water"
            }
          }
        },
        "minecraft:peek": {
          "description": "Defines the entity's 'peek' behavior, defining the events that should be called during it",
          "type": "object",
          "properties": {
            "on_close": {
              "description": "Event to call when the entity is done peeking"
            },
            "on_open": {
              "description": "Event to call when the entity starts peeking"
            },
            "on_target_open": {
              "description": "Event to call when the entity's target entity starts peeking"
            }
          }
        },
        "minecraft:projectile": {
          "description": "Allows the entity to be a thrown entity.",
          "type": "object",
          "properties": {
            "angleoffset": {
              "description": "Determines the angle at which the projectile is thrown"
            },
            "catchFire": {
              "description": "If true, the entity hit will be set on fire"
            },
            "critParticleOnHurt": {
              "description": "If true, the projectile will produce additional particles when a critical hit happens"
            },
            "destroyOnHurt": {
              "description": "If true, this entity will be destroyed when hit"
            },
            "filter": {
              "description": "Entity Definitions defined here can't be hurt by the projectile"
            },
            "fireAffectedByGriefing": {
              "description": "If true, whether the projectile causes fire is affected by the mob griefing game rule"
            },
            "gravity": {
              "description": "The gravity applied to this entity when thrown. The higher the value, the faster the entity falls"
            },
            "hitSound": {
              "description": "The sound that plays when the projectile hits something"
            },
            "homing": {
              "description": "If true, the projectile homes in to the nearest entity"
            },
            "inertia": {
              "description": "The fraction of the projectile's speed maintained every frame while traveling in air"
            },
            "isdangerous": {
              "description": "If true, the projectile will be treated as dangerous to the players"
            },
            "knockback": {
              "description": "If true, the projectile will knock back the entity it hits"
            },
            "lightning": {
              "description": "If true, the entity hit will be struck by lightning"
            },
            "liquid_inertia": {
              "description": "The fraction of the projectile's speed maintained every frame while traveling in water"
            },
            "multipletargets": {
              "description": "If true, the projectile can hit multiple entities per flight"
            },
            "offset": {
              "description": "The offset from the entity's anchor where the projectile will spawn"
            },
            "onFireTime": {
              "description": "Time in seconds that the entity hit will be on fire for"
            },
            "particle": {
              "description": "Particle to use upon collision"
            },
            "potionEffect": {
              "description": "Defines the effect the arrow will apply to the entity it hits"
            },
            "power": {
              "description": "Determines the velocity of the projectile"
            },
            "reflectOnHurt": {
              "description": "If true, this entity will be reflected back when hit"
            },
            "semirandomdiffdamage": {
              "description": "If true, damage will be randomized based on damage and speed"
            },
            "shootSound": {
              "description": "The sound that plays when the projectile is shot"
            },
            "shoottarget": {
              "description": "If true, the projectile will be shot towards the target of the entity firing it"
            },
            "shouldbounce": {
              "description": "If true, the projectile will bounce upon hit"
            },
            "splashPotion": {
              "description": "If true, the projectile will be treated like a splash potion"
            },
            "splashRange": {
              "description": "Radius in blocks of the 'splash' effect"
            },
            "uncertaintyBase": {
              "description": "The base accuracy. Accuracy is determined by the formula uncertaintyBase - difficultyLevel * uncertaintyMultiplier"
            },
            "uncertaintyMultiplier": {
              "description": "Determines how much difficulty affects accuracy. Accuracy is determined by the formula uncertaintyBase - difficultyLevel * uncertaintyMultiplier"
            }
          }
        },
        "minecraft:rail_movement": {
          "description": "Defines the entity's movement on the rails. An entity with this component is only allowed to move on the rail.",
          "type": "object",
          "properties": {
            "max_speed": {
              "description": "Maximum speed that this entity will move at when on the rail"
            }
          }
        },
        "minecraft:rail_sensor": {
          "description": "Defines the behavior of the entity when the rail gets activated or deactivated.",
          "type": "object",
          "properties": {
            "check_block_types": {
              "description": "If true, on tick this entity will trigger its on_deactivate behavior"
            },
            "eject_on_activate": {
              "description": "If true, this entity will eject all of its riders when it passes over an activated rail"
            },
            "eject_on_deactivate": {
              "description": "If true, this entity will eject all of its riders when it passes over a deactivated rail"
            },
            "on_activate": {
              "description": "Event to call when the rail is activated"
            },
            "on_deactivate": {
              "description": "Event to call when the rail is deactivated"
            },
            "tick_command_block_on_activate": {
              "description": "If true, command blocks will start ticking when passing over an activated rail"
            },
            "tick_command_block_on_deactivate": {
              "description": "If false, command blocks will stop ticking when passing over a deactivated rail"
            }
          }
        },
        "minecraft:rideable": {
          "description": "Determines whether this entity can be ridden. Allows specifying the different seat positions and quantity.",
          "type": "object",
          "properties": {
            "controlling_seat": {
              "description": "The seat that designates the driver of the entity"
            },
            "crouching_skip_interact": {
              "description": "If true, this entity can't be interacted with if the entity interacting with it is crouching"
            },
            "family_types": {
              "description": "List of entities that can ride this entity"
            },
            "interact_text": {
              "description": "The text to display when the player can interact with the entity when playing with Touch-screen controls"
            },
            "pull_in_entities": {
              "description": "If true, this entity will pull in entities that are in the correct family_types into any available seats"
            },
            "rider_can_interact": {
              "description": "If true, this entity will be picked when looked at by the rider"
            },
            "seat_count": {
              "description": "The number of entities that can ride this entity at the same time"
            },
            "seats": {
              "description": "The list of positions and number of riders for each position for entities riding this entity"
            }
          }
        },
        "minecraft:scaffolding_climber": {
          "description": "Allows the player to detect and manuever on the scaffolding block.",
          "type": "object",
          "default": {}
        },
        "minecraft:scale_by_age": {
          "description": "Defines the entity's size interpolation based on the entity's age.",
          "type": "object",
          "properties": {
            "end_scale": {
              "description": "Ending scale of the entity when it's fully grown"
            },
            "start_scale": {
              "description": "Initial scale of the newborn entity"
            }
          }
        },
        "minecraft:shareables": {
          "description": "Defines a list of items the mob wants to share. Each item must have the following parameters:",
          "type": "object",
          "properties": {
            "items": {
              "description": "List of items that the entity wants to sharecraft_into\n\nDefines the item this entity wants to craft with the item defined above. Should be an item nameBack to top\n\nitem\n\nThe name of the itemBack to top\n\nsurplus_amount\n\nNumber of this item considered extra that the entity wants to shareBack to top\n\nwant_amount\n\nNumber of this item this entity wants to shareBack to top"
            }
          }
        },
        "minecraft:shooter": {
          "description": "Defines the entity's ranged attack behavior.",
          "type": "object",
          "properties": {
            "auxVal": {
              "description": "ID of the Potion effect to be applied on hit"
            },
            "def": {
              "description": "Entity definition to use as projectile for the ranged attack. The entity definition must have the projectile component to be able to be shot as a projectile"
            }
          }
        },
        "minecraft:sittable": {
          "description": "Defines the entity's 'sit' state.",
          "type": "object",
          "properties": {
            "sit_event": {
              "description": "Event to run when the entity enters the 'sit' state"
            },
            "stand_event": {
              "description": "Event to run when the entity exits the 'sit' state"
            }
          }
        },
        "minecraft:spawn_entity": {
          "description": "Adds a timer after which this entity will spawn another entity or item (similar to vanilla's chicken's egg-laying behavior).",
          "type": "object",
          "properties": {
            "min_wait_time": {
              "description": "Minimum amount of time to randomly wait in seconds before another entity is spawned"
            },
            "max_wait_time": {
              "description": "Maximum amount of time to randomly wait in seconds before another entity is spawned"
            },
            "spawn_sound": {
              "description": "Name of the sound effect to play when the entity is spawned"
            },
            "spawn_item": {
              "description": "Item identifier of the item to spawn"
            },
            "spawn_entity": {
              "description": "Identifier of the entity to spawn, leave empty to spawn the item defined above instead"
            },
            "spawn_method": {
              "description": "Method to use to spawn the entity"
            },
            "spawn_event": {
              "description": "Event to call when the entity is spawned"
            }
          }
        },
        "minecraft:tameable": {
          "description": "Defines the rules for a mob to be tamed by the player.",
          "type": "object",
          "properties": {
            "probability": {
              "description": "The chance of taming the entity with each item use between 0.0 and 1.0, where 1.0 is 100%"
            },
            "tameItems": {
              "description": "The list of items that can be used to tame this entity"
            },
            "tame_event": {
              "description": "Event to run when this entity becomes tamed"
            }
          }
        },
        "minecraft:tamemount": {
          "description": "Allows the Entity to be tamed by mounting it.",
          "type": "object",
          "properties": {
            "attemptTemperMod": {
              "description": "The amount the entity's temper will increase when mounted"
            },
            "autoRejectItems": {
              "description": "The list of items that, if carried while interacting with the entity, will anger it"
            },
            "feedItems": {
              "description": "The list of items that can be used to increase the entity's temper and speed up the taming process"
            },
            "feed_text": {
              "description": "The text that shows in the feeding interact button"
            },
            "maxTemper": {
              "description": "The maximum value for the entity's random starting temper"
            },
            "minTemper": {
              "description": "The minimum value for the entity's random starting temper"
            },
            "ride_text": {
              "description": "The text that shows in the riding interact button"
            },
            "tame_event": {
              "description": "Event that triggers when the entity becomes tamed"
            }
          }
        },
        "minecraft:target_nearby_sensor": {
          "description": "Defines the entity's range within which it can see or sense other entities to target them.",
          "type": "object",
          "properties": {
            "inside_range": {
              "description": "Maximum distance in blocks that another entity will be considered in the 'inside' range"
            },
            "on_inside_range": {
              "description": "Event to call when an entity gets in the inside range. Can specify 'event' for the name of the event and 'target' for the target of the event"
            },
            "on_outside_range": {
              "description": "Event to call when an entity gets in the outside range. Can specify 'event' for the name of the event and 'target' for the target of the event"
            },
            "outside_range": {
              "description": "Maximum distance in blocks that another entity will be considered in the 'outside' range"
            }
          }
        },
        "minecraft:teleport": {
          "description": "Defines an entity's teleporting behavior.",
          "type": "object",
          "properties": {
            "darkTeleportChance": {
              "description": "Modifies the chance that the entity will teleport if the entity is in darkness"
            },
            "lightTeleportChance": {
              "description": "Modifies the chance that the entity will teleport if the entity is in daylight"
            },
            "maxRandomTeleportTime": {
              "description": "Maximum amount of time in seconds between random teleports"
            },
            "minRandomTeleportTime": {
              "description": "Minimum amount of time in seconds between random teleports"
            },
            "randomTeleportCube": {
              "description": "Entity will teleport to a random position within the area defined by this cube"
            },
            "randomTeleports": {
              "description": "If true, the entity will teleport randomly"
            },
            "targetDistance": {
              "description": "Maximum distance the entity will teleport when chasing a target"
            },
            "target_teleport_chance": {
              "description": "The chance that the entity will teleport between 0.0 and 1.0. 1.0 means 100%"
            }
          }
        },
        "minecraft:tick_world": {
          "description": "Defines if the entity ticks the world and the radius around it to tick.",
          "type": "object",
          "properties": {
            "distance_to_players": {
              "description": "The distance at which the closest player has to be before this entity despawns. This option will be ignored if never_despawn is true. Min: 128 blocks."
            },
            "never_despawn": {
              "description": "If true, this entity will not despawn even if players are far away. If false, distance_to_players will be used to determine when to despawn."
            },
            "radius": {
              "description": "The area around the entity to tick. Default: 2. Allowed range: 2-6."
            }
          }
        },
        "minecraft:timer": {
          "description": "Adds a timer after which an event will fire.",
          "type": "object",
          "properties": {
            "looping": {
              "description": "If true, the timer will restart every time after it fires"
            },
            "randomInterval": {
              "description": "If true, the amount of time on the timer will be random between the min and max values specified in time"
            },
            "time": {
              "description": "Amount of time in seconds for the timer. Can be specified as a number or a pair of numbers (min and max)"
            },
            "time_down_event": {
              "description": "Event to fire when the time on the timer runs out"
            }
          }
        },
        "minecraft:trade_table": {
          "description": "Defines this entity's ability to trade with players.",
          "type": "object",
          "properties": {
            "display_name": {
              "description": "Name to be displayed while trading with this entity"
            },
            "table": {
              "description": "File path relative to the resource pack root for this entity's trades"
            }
          }
        },
        "minecraft:transformation": {
          "description": "Defines an entity's transformation from the current definition into another",
          "type": "object",
          "properties": {
            "add": {
              "description": "List of components to add to the entity after the transformation"
            },
            "begin_transform_sound": {
              "description": "Sound to play when the transformation starts"
            },
            "delay": {
              "description": "Defines the properties of the delay for the transformation"
            },
            "drop_equipment": {
              "description": "Cause the entity to drop all equipment upon transformation"
            },
            "into": {
              "description": "Entity Definition that this entity will transform into"
            },
            "transformation_sound": {
              "description": "Sound to play when the entity is done transforming"
            }
          }
        },
        "minecraft:trusting": {
          "description": "Defines the rules for a mob to trust players.",
          "type": "object",
          "properties": {
            "probability": {
              "description": "The chance of the entity trusting with each item use between 0.0 and 1.0, where 1.0 is 100%"
            },
            "trust_event": {
              "description": "Event to run when this entity becomes trusting"
            },
            "trust_items": {
              "description": "The list of items that can be used to get the entity to trust players"
            }
          }
        },
        "minecraft.behavior.scared": {
          "description": "Allows the a mob to become scared when the weather outside is thundering",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "sound_interval": {
              "description": "The interval in which a sound will play when active in a 1/delay chance to kick off"
            }
          }
        },
        "minecraft:behavior.avoid_mob_type": {
          "description": "Allows this entity to avoid certain mob types.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "entity_types": {
              "description": "List of entity types this mob avoids."
            },
            "ignore_visibility": {
              "description": "If true, visbility between this entity and the mob type will not be checked."
            },
            "max_dist": {
              "description": "Maximum distance to look for an entity"
            },
            "max_flee": {
              "description": "Distance in blocks within the mob considers it should stop fleeing."
            },
            "probability_per_strength": {
              "description": "Determines how likely it is that this entity will stop avoiding another entity based on that entity's strength"
            },
            "sprint_speed_multiplier": {
              "description": "Multiplier for running speed. 1.0 means keep the regular speed, while higher numbers make the running speed faster"
            },
            "walk_speed_multiplier": {
              "description": "Multiplier for walking speed. 1.0 means keep the regular speed, while higher numbers make the walking speed faster"
            }
          }
        },
        "minecraft:behavior.beg": {
          "description": "Allows this mob to look at and follow the player that holds food they like.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "items": {
              "description": "List of items that this mob likes"
            },
            "look_distance": {
              "description": "Distance in blocks the mob will beg from"
            },
            "look_time": {
              "description": "The range of time in seconds this mob will stare at the player holding a food they like, begging for it"
            }
          }
        },
        "minecraft:behavior.break_door": {
          "description": "Allows this mob to break doors.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.breed": {
          "description": "Allows this mob to breed with other mobs.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "speed_multiplier": {
              "description": "Movement speed multiplier of the mob when using this AI Goal"
            }
          }
        },
        "minecraft:behavior.charge_attack": {
          "description": "Allows the mob to attack its target by running at it.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.circle_around_anchor": {
          "description": "Allows the mob to move in a circle around a point or a target.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "goal_radius": {
              "description": "Distance in blocks within the mob considers it has reached the goal. This is the \"wiggle room\" to stop the AI from bouncing back and forth trying to reach a specific spot"
            },
            "height_above_target_range": {
              "description": "When the mob finds a target, the range of height in blocks above the target to start the anchor point."
            },
            "height_change_chance": {
              "description": "A random value to determine when to change the height of the mob from the anchor point. This has a 1/value chance every tick to do so."
            },
            "height_offset_range": {
              "description": "The range of height in blocks offset the mob can have from it's anchor point."
            },
            "radius_change_chance": {
              "description": "A random value to determine when to increase the size of the radius up to the maximum. This has a 1/value chance every tick to do so."
            },
            "radius_range": {
              "description": "Range of radius in blocks of the circle to move around."
            },
            "speed_multiplier": {
              "description": "Movement speed multiplier of the mob when using this AI Goal"
            }
          }
        },
        "minecraft:behavior.controlled_by_player": {
          "description": "Allows the mob to be controlled by the player.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.defend_village_target": {
          "description": "Allows the mob to stay in the village and fight mobs hostile to the villagers.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "entity_types": {
              "description": "List of entity types this mob considers a threat to the village"
            }
          }
        },
        "minecraft:behavior.door_interact": {
          "description": "Allows the mob to open and close doors.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.dragonchargeplayer": {
          "description": "Allows the dragon to attack a player by flying fast at them. The player is chosen by the dragonscanning goal. Can only be used by the Ender Dragon.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.dragondeath": {
          "description": "Allows the dragon to go out with glory. This controls the Ender Dragon's death animation and can't be used by other mobs.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.dragonflaming": {
          "description": "Allows the dragon to use its flame breath attack. Can only be used by the Ender Dragon.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.dragonholdingpattern": {
          "description": "Allows the Dragon to fly around in a circle around the center podium. Can only be used by the Ender Dragon.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.dragonlanding": {
          "description": "Allows the Dragon to stop flying and transition into perching mode. Can only be used by the Ender Dragon.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.dragonscanning": {
          "description": "Allows the dragon to look around for a player to attack while in perch mode. Can only be used by the Ender Dragon.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.dragonstrafeplayer": {
          "description": "Allows the dragon to fly around looking for a player and shoot fireballs at them. Can only be used by the Ender Dragon.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.dragontakeoff": {
          "description": "Allows the dragon to leave perch mode and go back to flying around. Can only be used by the Ender Dragon.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.drop_item_for": {
          "description": "Allows the mob to move near a target and drop an item.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "drop_item_chance": {
              "description": "The probability that the mob will drop an item."
            },
            "entity_types": {
              "description": "List of entity types this mob will drop items for."
            },
            "goal_radius": {
              "description": "Distance in blocks within the mob considers it has reached the goal. This is the \"wiggle room\" to stop the AI from bouncing back and forth trying to reach a specific spot"
            },
            "loot_table": {
              "description": "Loot table to select items from."
            },
            "max_dist": {
              "description": "Maximum distance in blocks this mob will look for entities to drop an item for."
            },
            "offering_distance": {
              "description": "The distance in blocks the mob will try to be away from the entity when it drops the item."
            },
            "on_drop_attempt": {
              "description": "Event to run when this mob attempts to drop an item."
            },
            "search_height": {
              "description": "Height in blocks from the target the mob can be."
            },
            "search_range": {
              "description": "The distance in blocks from the target the mob can be."
            },
            "speed_multiplier": {
              "description": "Movement speed multiplier of the mob when using this AI Goal"
            },
            "time_of_day_range": {
              "description": "The valid times of day that this goal can be used.  For reference: noon is 0.0, sunset is 0.25, midnight is 0.5, and sunrise is 0.75, and back to noon for 1.0."
            }
          }
        },
        "minecraft:behavior.eat_block": {
          "description": "Allows the mob to eat a block (for example, sheep eating grass).",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "on_eat": {
              "description": "Trigger to fire when the mob eats a block of grass"
            }
          }
        },
        "minecraft:behavior.enderman_leave_block": {
          "description": "Allows the enderman to drop a block they are carrying. Can only be used by Endermen.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.enderman_take_block": {
          "description": "Allows the enderman to take a block and carry it around. Can only be used by Endermen.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.find_mount": {
          "description": "Allows the mob to look around for another mob to ride atop it.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "avoid_water": {
              "description": "If true, the mob will not go into water blocks when going towards a mount"
            },
            "mount_distance": {
              "description": "This is the distance the mob needs to be, in blocks, from the desired mount to mount it. If the value is below 0, the mob will use its default attack distance"
            },
            "start_delay": {
              "description": "Time the mob will wait before starting to move towards the mount"
            },
            "target_needed": {
              "description": "If true, the mob will only look for a mount if it has a target"
            },
            "within_radius": {
              "description": "Distance in blocks within which the mob will look for a mount"
            }
          }
        },
        "minecraft:behavior.find_underwater_treasure": {
          "description": "Allows the mob to move towards the nearest underwater ruin or shipwreck.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "search_range": {
              "description": "The range that the mob will search for a treasure chest within a ruin or shipwreck to move towards."
            },
            "speed_multiplier": {
              "description": "Movement speed multiplier of the mob when using this AI Goal"
            },
            "stop_distance": {
              "description": "The distance the mob will move before stopping."
            }
          }
        },
        "minecraft:behavior.flee_sun": {
          "description": "Allows the mob to run away from direct sunlight and seek shade.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "speed_multiplier": {
              "description": "Movement speed multiplier of the mob when using this AI Goal"
            }
          }
        },
        "minecraft:behavior.float": {
          "description": "Allows the mob to stay afloat while swimming.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.float_wander": {
          "description": "Allows the mob to float around like the Ghast.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "float_duration": {
              "description": "Range of time in seconds the mob will float around before landing and choosing to do something else"
            },
            "must_reach": {
              "description": "If true, the point has to be reachable to be a valid target"
            },
            "random_reselect": {
              "description": "If true, the mob will randomly pick a new point while moving to the previously selected one"
            },
            "xz_dist": {
              "description": "Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1"
            },
            "y_dist": {
              "description": "Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1"
            },
            "y_offset": {
              "description": "Height in blocks to add to the selected target position"
            }
          }
        },
        "minecraft:behavior.follow_caravan": {
          "description": "Allows the mob to follow mobs that are in a caravan.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "entity_count": {
              "description": "Number of entities that can be in the caravan"
            },
            "entity_types": {
              "description": "List of entity types that this mob can follow in a caravan"
            },
            "speed_multiplier": {
              "description": "Movement speed multiplier of the mob when using this AI Goal"
            }
          }
        },
        "minecraft:behavior.follow_mob": {
          "description": "Allows the mob to follow other mobs.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "search_range": {
              "description": "The distance in blocks it will look for a mob to follow"
            },
            "speed_multiplier": {
              "description": "Movement speed multiplier of the mob when using this AI Goal"
            },
            "stop_distance": {
              "description": "The distance in blocks this mob stops from the mob it is following"
            }
          }
        },
        "minecraft:behavior.follow_owner": {
          "description": "Allows the mob to follow the player that owns them.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "speed_multiplier": {
              "description": "Movement speed multiplier of the mob when using this AI Goal"
            },
            "start_distance": {
              "description": "The distance in blocks that the owner can be away from this mob before it starts following it"
            },
            "stop_distance": {
              "description": "The distance in blocks this mob will stop from its owner while following it"
            }
          }
        },
        "minecraft:behavior.follow_parent": {
          "description": "Allows the mob to follow their parent around.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "speed_multiplier": {
              "description": "Movement speed multiplier of the mob when using this AI Goal"
            }
          }
        },
        "minecraft:behavior.go_home": {
          "description": "Allows the mob to move back to the position they were spawned.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "goal_radius": {
              "description": "Distance in blocks within the mob considers it has reached the goal. This is the \"wiggle room\" to stop the AI from bouncing back and forth trying to reach a specific spot"
            },
            "interval": {
              "description": "A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal"
            },
            "on_home": {
              "description": "Event to run when this mob gets home."
            },
            "speed_multiplier": {
              "description": "Movement speed multiplier of the mob when using this AI Goal"
            }
          }
        },
        "minecraft:behavior.guardian_attack": {
          "description": "Allows the guardian to use its laser beam attack. Can only be used by Guardians and Elder Guardians.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.harvest_farm_block": {
          "description": "Allows the villager to harvest nearby farms. Can only be used by Villagers.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "speed_multiplier": {
              "description": "Movement speed multiplier of the mob when using this AI Goal"
            }
          }
        },
        "minecraft:behavior.hurt_by_target": {
          "description": "Allows the mob to target another mob that hurts them.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "alert_same_type": {
              "description": "If true, nearby mobs of the same type will be alerted about the damage"
            },
            "entity_types": {
              "description": "List of entity types that this mob can target when hurt by them"
            },
            "hurt_owner": {
              "description": "If true, the mob will hurt its owner and other mobs with the same owner as itself"
            }
          }
        },
        "minecraft:behavior.lay_down": {
          "description": "Allows mobs to lay down at times",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "interval": {
              "description": "A random value to determine at what intervals something can occur. This has a 1/interval chance to choose this goal"
            },
            "random_stop_interval": {
              "description": "a random value in which the goal can use to pull out of the behavior. This is a 1/interval chance to play the sound"
            }
          }
        },
        "minecraft:behavior.lay_egg": {
          "description": "Allows the mob to lay an egg block on a sand block if the mob is pregnant.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "goal_radius": {
              "description": "Distance in blocks within the mob considers it has reached the goal. This is the \"wiggle room\" to stop the AI from bouncing back and forth trying to reach a specific spot"
            },
            "on_lay": {
              "description": "Event to run when this mob lays the egg."
            },
            "search_count": {
              "description": "The number of blocks each tick that the mob will check within it's search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick"
            },
            "search_height": {
              "description": "Height in blocks the mob will look for sand block to move towards"
            },
            "search_range": {
              "description": "The distance in blocks it will look for a sand block to move towards"
            },
            "speed_multiplier": {
              "description": "Movement speed multiplier of the mob when using this AI Goal"
            }
          }
        },
        "minecraft:behavior.leap_at_target": {
          "description": "Allows monsters to jump at and attack their target. Can only be used by hostile mobs.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "must_be_on_ground": {
              "description": "If true, the mob will only jump at its target if its on the ground. Setting it to false will allow it to jump even if its already in the air"
            },
            "yd": {
              "description": "The height in blocks the mob jumps when leaping at its target"
            }
          }
        },
        "minecraft:behavior.look_at_entity": {
          "description": "Allows the mob to look at nearby entities.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "angle_of_view_horizontal": {
              "description": "The angle in degrees that the mob can see in the Y-axis (up-down)"
            },
            "angle_of_view_vertical": {
              "description": "The angle in degrees that the mob can see in the X-axis (left-right)"
            },
            "filters": {
              "description": "Filter to determine the conditions for this mob to look at the entity"
            },
            "look_distance": {
              "description": "The distance in blocks from which the entity will look at"
            },
            "look_time": {
              "description": "Time range to look at the entity"
            },
            "probability": {
              "description": "The probability of looking at the target. A value of 1.00 is 100%"
            }
          }
        },
        "minecraft:behavior.look_at_player": {
          "description": "Allows the mob to look at the player when the player is nearby.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "angle_of_view_horizontal": {
              "description": "The angle in degrees that the mob can see in the Y-axis (up-down)"
            },
            "angle_of_view_vertical": {
              "description": "The angle in degrees that the mob can see in the X-axis (left-right)"
            },
            "look_distance": {
              "description": "The distance in blocks from which the entity will look at"
            },
            "look_time": {
              "description": "Time range to look at the entity"
            },
            "probability": {
              "description": "The probability of looking at the target. A value of 1.00 is 100%"
            }
          }
        },
        "minecraft:behavior.look_at_target": {
          "description": "Allows the mob to look at the entity they are targetting.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "angle_of_view_horizontal": {
              "description": "The angle in degrees that the mob can see in the Y-axis (up-down)"
            },
            "angle_of_view_vertical": {
              "description": "The angle in degrees that the mob can see in the X-axis (left-right)"
            },
            "look_distance": {
              "description": "The distance in blocks from which the entity will look at"
            },
            "look_time": {
              "description": "Time range to look at the entity"
            },
            "probability": {
              "description": "The probability of looking at the target. A value of 1.00 is 100%"
            }
          }
        },
        "minecraft:behavior.look_at_trading_player": {
          "description": "Allows the mob to look at the player they are trading with.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "angle_of_view_horizontal": {
              "description": "The angle in degrees that the mob can see in the Y-axis (up-down)"
            },
            "angle_of_view_vertical": {
              "description": "The angle in degrees that the mob can see in the X-axis (left-right)"
            },
            "look_distance": {
              "description": "The distance in blocks from which the entity will look at"
            },
            "look_time": {
              "description": "Time range to look at the entity"
            },
            "probability": {
              "description": "The probability of looking at the target. A value of 1.00 is 100%"
            }
          }
        },
        "minecraft:behavior.make_love": {
          "description": "Allows the villager to look for a mate to spawn other villagers with. Can only be used by Villagers.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.melee_attack": {
          "description": "Allows the mob to use close combat melee attacks.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "attack_once": {
              "description": "If true, this mob will attack only one time."
            },
            "attack_types": {
              "description": "Defines the entity types this mob will attack"
            },
            "melee_fov": {
              "description": "The allowable FOV the actor will use to determine if it can make a valid melee attack"
            },
            "random_stop_interval": {
              "description": "Defines the probability the mob will stop fighting. A value of 0 disables randomly stopping, while a value of 1 defines a 50% chance"
            },
            "reach_multiplier": {
              "description": "Multiplier for how far outside its box the mob can reach its target (this can be used to simulate a mob with longer arms by making this bigger)"
            },
            "require_complete_path": {
              "description": "If true, this goal will only trigger if the mob can reach its target."
            },
            "speed_multiplier": {
              "description": "Movement speed multiplier of the mob when using this AI Goal"
            },
            "track_target": {
              "description": "If true, this mob will chase after the target as long as it's a valid target"
            }
          }
        },
        "minecraft:behavior.mount_pathing": {
          "description": "Allows the mob to move around on its own while mounted seeking a target to attack.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "speed_multiplier": {
              "description": "Movement speed multiplier of the mob when using this AI Goal"
            },
            "target_dist": {
              "description": "The distance at which this mob wants to be away from its target"
            },
            "track_target": {
              "description": "If true, this mob will chase after the target as long as it's a valid target"
            }
          }
        },
        "minecraft:behavior.move_indoors": {
          "description": "Can only be used by Villagers. Allows them to seek shelter indoors.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "speed_multiplier": {
              "description": "Movement speed multiplier of the mob when using this AI Goal"
            }
          }
        },
        "minecraft:behavior.move_through_village": {
          "description": "Can only be used by Villagers. Allows the villagers to create paths around the village.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "only_at_night": {
              "description": "If true, the mob will only move through the village during night time"
            },
            "speed_multiplier": {
              "description": "Movement speed multiplier of the mob when using this AI Goal"
            }
          }
        },
        "minecraft:behavior.move_to_land": {
          "description": "Allows the mob to move back onto land when in water.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "goal_radius": {
              "description": "Distance in blocks within the mob considers it has reached the goal. This is the \"wiggle room\" to stop the AI from bouncing back and forth trying to reach a specific spot"
            },
            "search_count": {
              "description": "The number of blocks each tick that the mob will check within it's search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick"
            },
            "search_height": {
              "description": "Height in blocks the mob will look for land to move towards"
            },
            "search_range": {
              "description": "The distance in blocks it will look for land to move towards"
            },
            "speed_multiplier": {
              "description": "Movement speed multiplier of the mob when using this AI Goal"
            }
          }
        },
        "minecraft:behavior.move_to_water": {
          "description": "Allows the mob to move back into water when on land.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "goal_radius": {
              "description": "Distance in blocks within the mob considers it has reached the goal. This is the \"wiggle room\" to stop the AI from bouncing back and forth trying to reach a specific spot"
            },
            "search_count": {
              "description": "The number of blocks each tick that the mob will check within it's search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick"
            },
            "search_height": {
              "description": "Height in blocks the mob will look for water to move towards"
            },
            "search_range": {
              "description": "The distance in blocks it will look for water to move towards"
            },
            "speed_multiplier": {
              "description": "Movement speed multiplier of the mob when using this AI Goal"
            }
          }
        },
        "minecraft:behavior.move_towards_restriction": {
          "description": "Allows Guardians, Iron Golems and Villagers to move within their pre-defined area that the mob should be restricted to. Other mobs don't have a restriction defined.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "speed_multiplier": {
              "description": "Movement speed multiplier of the mob when using this AI Goal"
            }
          }
        },
        "minecraft:behavior.move_towards_target": {
          "description": "Allows mob to move towards its current target.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "within_radius": {
              "description": "Defines the radius in blocks that the mob tries to be from the target. A value of 0 means it tries to occupy the same block as the target"
            }
          }
        },
        "minecraft:behavior.nearest_attackable_target": {
          "description": "Allows the mob to check for and pursue the nearest valid target.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "attack_interval": {
              "description": "Time in seconds between attacks"
            },
            "entity_types": {
              "description": "List of entity types that this mob considers valid targets"
            },
            "must_reach": {
              "description": "If true, only entities that this mob can path to can be selected as targets"
            },
            "must_see": {
              "description": "If true, only entities in this mob's viewing range can be selected as targets"
            },
            "must_see_forget_duration": {
              "description": "Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more"
            },
            "persist_time": {
              "description": "Time in seconds for a valid target to stay targeted when it becomes and invalid target."
            },
            "reselect_targets": {
              "description": "If true, the target will change to the current closest entity whenever a different entity is closer"
            },
            "scan_interval": {
              "description": "How many ticks to wait between scanning for a target."
            },
            "target_search_height": {
              "description": "Height in blocks to search for a target mob. -1.0f means the height does not matter."
            },
            "within_radius": {
              "description": "Distance in blocks that the target can be within to launch an attack"
            }
          }
        },
        "minecraft:behavior.ocelot_sit_on_block": {
          "description": "Allows to mob to be able to sit in place like the ocelot.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "speed_multiplier": {
              "description": "Movement speed multiplier of the mob when using this AI Goal"
            }
          }
        },
        "minecraft:behavior.ocelotattack": {
          "description": "Can only be used by the Ocelot. Allows it to perform the sneak and pounce attack.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "sneak_speed_multiplier": {
              "description": "Multiplier for the sneaking speed. 1.0 means the ocelot will move at the speed it normally sneaks"
            },
            "sprint_speed_multiplier": {
              "description": "Multiplier for the running speed of this mob while using this attack"
            },
            "walk_speed_multiplier": {
              "description": "Multiplier for the walking speed while using this attack"
            }
          }
        },
        "minecraft:behavior.offer_flower": {
          "description": "Allows the mob to offer the player a flower like the Iron Golem does.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.open_door": {
          "description": "Allows the mob to open doors. Requires the mob to be able to path through doors, otherwise the mob won't even want to try opening them.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "close_door_after": {
              "description": "If true, the mob will close the door after opening it and going through it"
            }
          }
        },
        "minecraft:behavior.owner_hurt_by_target": {
          "description": "Allows the mob to target another mob that hurts their owner.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "entity_types": {
              "description": "List of entity types that this mob can target if they hurt their owner"
            }
          }
        },
        "minecraft:behavior.owner_hurt_target": {
          "description": "Allows the mob to target a mob that is hurt by their owner.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "entity_types": {
              "description": "List of entity types that this entity can target if the potential target is hurt by this mob's owner"
            }
          }
        },
        "minecraft:behavior.panic": {
          "description": "Allows the mob to enter the panic state, which makes it run around and away from the damage source that made it enter this state.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "force": {
              "description": "If true, this mob will not stop panicking until it can't move anymore or the goal is removed from it"
            },
            "prefer_water": {
              "description": "If true, the mob will prefer water over land"
            },
            "speed_multiplier": {
              "description": "Movement speed multiplier of the mob when using this AI Goal"
            }
          }
        },
        "minecraft:behavior.peek": {
          "description": "Allows the mob to peek out. This is what the shulker uses to look out of its shell.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.pet_sleep_with_owner": {
          "description": "Allows the pet mob to move onto a bed with it's owner while sleeping.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "goal_radius": {
              "description": "Distance in blocks within the mob considers it has reached the goal. This is the \"wiggle room\" to stop the AI from bouncing back and forth trying to reach a specific spot"
            },
            "search_height": {
              "description": "Height in blocks from the owner the pet can be to sleep with owner."
            },
            "search_range": {
              "description": "The distance in blocks from the owner the pet can be to sleep with owner."
            },
            "speed_multiplier": {
              "description": "Movement speed multiplier of the mob when using this AI Goal"
            }
          }
        },
        "minecraft:behavior.pickup_items": {
          "description": "Allows the mob to pick up items on the ground.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "goal_radius": {
              "description": "Distance in blocks within the mob considers it has reached the goal. This is the \"wiggle room\" to stop the AI from bouncing back and forth trying to reach a specific spot"
            },
            "max_dist": {
              "description": "Maximum distance this mob will look for items to pick up"
            },
            "speed_multiplier": {
              "description": "Movement speed multiplier of the mob when using this AI Goal"
            },
            "track_target": {
              "description": "If true, this mob will chase after the target as long as it's a valid target"
            }
          }
        },
        "minecraft:behavior.play": {
          "description": "Allows the mob to play with other baby villagers. This can only be used by Villagers.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "speed_multiplier": {
              "description": "Movement speed multiplier of the mob when using this AI Goal"
            }
          }
        },
        "minecraft:behavior.player_ride_tamed": {
          "description": "Allows the mob to be ridden by the player after being tamed.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.raid_garden": {
          "description": "Allows the mob to eat crops out of farms until they are full.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "blocks": {
              "description": "Blocks that the mob is looking for to eat"
            },
            "eat_delay": {
              "description": "Time in seconds between each time it eats"
            },
            "full_delay": {
              "description": "Amount of time in seconds before this mob wants to eat again"
            },
            "goal_radius": {
              "description": "Distance in blocks within the mob considers it has reached the goal. This is the \"wiggle room\" to stop the AI from bouncing back and forth trying to reach a specific spot"
            },
            "max_to_eat": {
              "description": "Maximum number of things this entity wants to eat"
            },
            "search_range": {
              "description": "Distance in blocks the mob will look for crops to eat"
            },
            "speed_multiplier": {
              "description": "Movement speed multiplier of the mob when using this AI Goal"
            }
          }
        },
        "minecraft:behavior.random_breach": {
          "description": "Allows the mob to randomly break surface of the water.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "cooldown_time": {
              "description": "Time in seconds the mob has to wait before using the goal again"
            },
            "interval": {
              "description": "A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal"
            },
            "speed_multiplier": {
              "description": "Movement speed multiplier of the mob when using this AI Goal"
            },
            "xz_dist": {
              "description": "Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1"
            },
            "y_dist": {
              "description": "Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1"
            }
          }
        },
        "minecraft:behavior.random_fly": {
          "description": "Allows a mob to randomly fly around.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "can_land_on_trees": {
              "description": "If true, the mob can stop flying and land on a tree instead of the ground"
            },
            "xz_dist": {
              "description": "Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1"
            },
            "y_dist": {
              "description": "Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1"
            }
          }
        },
        "minecraft:behavior.random_look_around": {
          "description": "Allows the mob to randomly look around.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "look_time": {
              "description": "The range of time in seconds the mob will stay looking in a random direction before looking elsewhere"
            }
          }
        },
        "minecraft:behavior.random_sitting": {
          "description": "Allows the mob to randomly sit for a duration.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "cooldown": {
              "description": "The cooldown time in seconds before the mob may sit again"
            },
            "min_sit_time": {
              "description": "The minimum amount of time in seconds before the mob can stand back up"
            },
            "start_chance": {
              "description": "This is the chance that the mob will start sitting, from 0 to 1"
            },
            "stop_chance": {
              "description": "This is the chance that the mob will stop sitting, from 0 to 1"
            }
          }
        },
        "minecraft:behavior.random_stroll": {
          "description": "Allows a mob to randomly stroll around.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "interval": {
              "description": "A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal"
            },
            "speed_multiplier": {
              "description": "Movement speed multiplier of the mob when using this AI Goal"
            },
            "xz_dist": {
              "description": "Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1"
            },
            "y_dist": {
              "description": "Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1"
            }
          }
        },
        "minecraft:behavior.random_swim": {
          "description": "Allows an entity to randomly move through water",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "interval": {
              "description": "A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal"
            },
            "speed_multiplier": {
              "description": "Movement speed multiplier of the mob when using this AI Goal"
            },
            "xz_dist": {
              "description": "Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1"
            },
            "y_dist": {
              "description": "Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1"
            }
          }
        },
        "minecraft:behavior.ranged_attack": {
          "description": "Allows the mob to use ranged attacks like shooting arrows.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "attack_interval_max": {
              "description": "Maximum amount of time in seconds the entity will wait after an attack before launching another"
            },
            "attack_interval_min": {
              "description": "Minimum amount of time in seconds the entity will wait after an attack before launching another"
            },
            "attack_radius": {
              "description": "Maxmimum distance the target can be for this mob to fire. If the target is further away, this mob will move first before firing"
            },
            "burst_interval": {
              "description": "Amount of time in seconds between each individual shot when firing multiple shots per attack"
            },
            "burst_shots": {
              "description": "Number of shots fired every time the mob uses a charged attack"
            },
            "charge_charged_trigger": {
              "description": "The minimum amount of time in ticks the mob has to charge before firing a charged attack"
            },
            "charge_shoot_trigger": {
              "description": "The minimum amount of time in ticks for the mob to start charging a charged shot. Must be greater than 0 to enable burst shots"
            },
            "ranged_fov": {
              "description": "The allowable FOV the actor will use to determine if it can make a valid ranged attack"
            },
            "speed_multiplier": {
              "description": "Movement speed multiplier of the mob when using this AI Goal"
            }
          }
        },
        "minecraft:behavior.receive_love": {
          "description": "Allows the villager to stop so another villager can breed with it. Can only be used by a Villager.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.restrict_open_door": {
          "description": "Allows the mob to stay indoors during night time.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.restrict_sun": {
          "description": "Allows the mob to automatically start avoiding the sun when its a clear day out.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.roll": {
          "description": "This allows the mob to roll forward.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "probability": {
              "description": "The probability that the mob will use the goal."
            }
          }
        },
        "minecraft:behavior.run_around_like_crazy": {
          "description": "Allows the mob to run around aimlessly.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "speed_multiplier": {
              "description": "Movement speed multiplier of the mob when using this AI Goal"
            }
          }
        },
        "minecraft:behavior.send_event": {
          "description": "Allows the mob to send an event to another mob.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "cast_duration": {
              "description": "Time in seconds for the entire event sending process"
            },
            "sequence": {
              "description": "List of events to send"
            }
          }
        },
        "minecraft:behavior.share_items": {
          "description": "Allows the mob to give items it has to others.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "entity_types": {
              "description": "List of entities this mob will share items with"
            },
            "goal_radius": {
              "description": "Distance in blocks within the mob considers it has reached the goal. This is the \"wiggle room\" to stop the AI from bouncing back and forth trying to reach a specific spot"
            },
            "max_dist": {
              "description": "Maximum distance in blocks this mob will look for entities to share items with"
            },
            "speed_multiplier": {
              "description": "Movement speed multiplier of the mob when using this AI Goal"
            }
          }
        },
        "minecraft:behavior.silverfish_merge_with_stone": {
          "description": "Allows the mob to go into stone blocks like Silverfish do. Currently it can only be used by Silverfish.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.silverfish_wake_up_friends": {
          "description": "Allows the mob to alert mobs in nearby blocks to come out. Currently it can only be used by Silverfish.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.skeleton_horse_trap": {
          "description": "Allows Equine mobs to be Horse Traps and be triggered like them, spawning a lightning bolt and a bunch of horses when a player is nearby. Can only be used by Horses, Mules, Donkeys and Skeleton Horses.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "duration": {
              "description": "Amount of time in seconds the trap exists. After this amount of time is elapsed, the trap is removed from the world if it hasn't been activated"
            },
            "within_radius": {
              "description": "Distance in blocks that the player has to be within to trigger the horse trap"
            }
          }
        },
        "minecraft:behavior.slime_attack": {
          "description": "Can only be used by Slimes and Magma Cubes. Allows the mob to use a melee attack like the slime's.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.slime_float": {
          "description": "Can only be used by Slimes and Magma Cubes. Controls their ability to float in water / lava.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.slime_keep_on_jumping": {
          "description": "Can only be used by Slimes and Magma Cubes. Allows the mob to continuously jump around like a slime.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.slime_random_direction": {
          "description": "Can only be used by Slimes and Magma Cubes. Allows the mob to move in random directions like a slime.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.snacking": {
          "description": "Allows the mob to take a load off and snack on food that it found nearby.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "items": {
              "description": "Items that we are interested in snacking on"
            },
            "snacking_cooldown": {
              "description": "The cooldown time in seconds before the mob is able to snack again"
            },
            "snacking_cooldown_min": {
              "description": "The minimum time in seconds before the mob is able to snack again"
            },
            "snacking_stop_chance": {
              "description": "This is the chance that the mob will stop snacking, from 0 to 1"
            }
          }
        },
        "minecraft:behavior.sneeze": {
          "description": "Allows the mob to stop and sneeze possibly startling nearby mobs and dropping an item.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "cooldown_time": {
              "description": "Time in seconds the mob has to wait before using the goal again"
            },
            "drop_item_chance": {
              "description": "The probability that the mob will drop an item when it sneezes."
            },
            "entity_types": {
              "description": "List of entity types this mob will startle (cause to jump) when it sneezes."
            },
            "loot_table": {
              "description": "Loot table to select dropped items from."
            },
            "prepare_sound": {
              "description": "Sound to play when the sneeze is about to happen."
            },
            "prepare_time": {
              "description": "The time in seconds that the mob takes to prepare to sneeze (while the prepare_sound is playing)."
            },
            "probability": {
              "description": "The probability of sneezing. A value of 1.00 is 100%"
            },
            "sound": {
              "description": "Sound to play when the sneeze occurs."
            },
            "within_radius": {
              "description": "Distance in blocks that mobs will be startled."
            }
          }
        },
        "minecraft:behavior.squid_dive": {
          "description": "Allows the squid to dive down in water. Can only be used by the Squid.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.squid_flee": {
          "description": "Allows the squid to swim away. Can only be used by the Squid.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.squid_idle": {
          "description": "Allows the squid to swim in place idly. Can only be used by the Squid.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.squid_move_away_from_ground": {
          "description": "Allows the squid to move away from ground blocks and back to water. Can only be used by the Squid.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.squid_out_of_water": {
          "description": "Allows the squid to stick to the ground when outside water. Can only be used by the Squid.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.stay_while_sitting": {
          "description": "Allows the mob to stay put while it is in a sitting state instead of doing something else.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.stomp_attack": {
          "description": "Allows the mob to use the polar bear's melee attack.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "attack_once": {
              "description": "If true, this mob will attack only one time."
            },
            "attack_types": {
              "description": "Defines the entity types this mob will attack"
            },
            "random_stop_interval": {
              "description": "Defines the probability the mob will stop fighting. A value of 0 disables randomly stopping, while a value of 1 defines a 50% chance"
            },
            "reach_multiplier": {
              "description": "Multiplier for how far outside its box the mob can reach its target (this can be used to simulate a mob with longer arms by making this bigger)"
            },
            "require_complete_path": {
              "description": "If true, this goal will only trigger if the mob can reach its target."
            },
            "speed_multiplier": {
              "description": "Movement speed multiplier of the mob when using this AI Goal"
            },
            "track_target": {
              "description": "If true, this mob will chase after the target as long as it's a valid target"
            }
          }
        },
        "minecraft:behavior.stomp_turtle_egg": {
          "description": "Allows this mob to stomp turtle eggs",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "goal_radius": {
              "description": "Distance in blocks within the mob considers it has reached the goal. This is the \"wiggle room\" to stop the AI from bouncing back and forth trying to reach a specific spot"
            },
            "interval": {
              "description": "A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal"
            },
            "search_count": {
              "description": "The number of blocks each tick that the mob will check within it's search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick"
            },
            "search_height": {
              "description": "Height in blocks the mob will look for turtle eggs to move towards"
            },
            "search_range": {
              "description": "The distance in blocks it will look for turtle eggs to move towards"
            },
            "speed_multiplier": {
              "description": "Movement speed multiplier of the mob when using this AI Goal"
            }
          }
        },
        "minecraft:behavior.summon_entity": {
          "description": "Allows the mob to attack the player by summoning other entities.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "summon_choices": {
              "description": "List of spells for the mob to use to summon entities. Each spell has the following parameters:"
            }
          }
        },
        "minecraft:behavior.swell": {
          "description": "Allows the creeper to swell up when a player is nearby. It can only be used by Creepers.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "start_distance": {
              "description": "This mob starts swelling when a target is at least this many blocks away"
            },
            "stop_distance": {
              "description": "This mob stops swelling when a target has moved away at least this many blocks"
            }
          }
        },
        "minecraft:behavior.swim_wander": {
          "description": "Has the fish swim around when they can't pathfind",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "speed_multiplier": {
              "description": "speed of the entity"
            }
          }
        },
        "minecraft:behavior.swoop_attack": {
          "description": "Allows the mob to move to attack a target. The goal ends if it has a horizontal collision or gets hit. Built to be used with flying mobs.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "delay_range": {
              "description": "Range of time in seconds between uses of this goal."
            },
            "speed_multiplier": {
              "description": "Movement speed multiplier of the mob when using this AI Goal"
            }
          }
        },
        "minecraft:behavior.take_flower": {
          "description": "Can only be used by Villagers. Allows the mob to accept flowers from Iron Golems.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.tempt": {
          "description": "Allows the mob to be tempted by food they like.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "can_get_scared": {
              "description": "If true, the mob can stop being tempted if the player moves too fast while close to this mob"
            },
            "items": {
              "description": "List of items this mob is tempted by"
            },
            "speed_multiplier": {
              "description": "Movement speed multiplier of the mob when using this AI Goal"
            },
            "within_radius": {
              "description": "Distance in blocks this mob can get tempted by a player holding an item they like"
            }
          }
        },
        "minecraft:behavior.trade_with_player": {
          "description": "Allows the player to trade with this mob.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.vex_copy_owner_target": {
          "description": "Allows the mob to target the same entity its owner is targeting.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "entity_types": {
              "description": "List of entities this mob can copy the owner from"
            }
          }
        },
        "minecraft:behavior.vex_random_move": {
          "description": "Allows the mob to move around randomly like the Vex.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.wither_random_attack_pos_goal": {
          "description": "Allows the wither to launch random attacks. Can only be used by the Wither Boss.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            }
          }
        },
        "minecraft:behavior.wither_target_highest_damage": {
          "description": "Allows the wither to focus its attacks on whichever mob has dealt the most damage to it.",
          "type": "object",
          "properties": {
            "priority": {
              "type": "integer"
            },
            "entity_types": {
              "description": "List of entity types the wither takes into account to find who dealt the most damage to it"
            }
          }
        }
      }
    },
    "event": {
      "type": "object",
      "properties": {
        "filters": {
          "type": "object",
          "description": "Allows to specify conditions which deciede whether the action is performed.",
          "allOf": [
            {
              "$ref": "#/definitions/filter"
            }
          ]
        },
        "add": {
          "type": "object",
          "title": "Add component groups",
          "description": "An object whose component_groups property specifies what component groups to add when the event occurs.",
          "allOf": [
            {
              "$ref": "#/definitions/component_group_list"
            }
          ]
        },
        "remove": {
          "type": "object",
          "title": "Remove component groups",
          "description": "An object whose component_groups property specifies what component groups to remove when the event occurs.",
          "allOf": [
            {
              "$ref": "#/definitions/component_group_list"
            }
          ]
        },
        "randomize": {
          "type": "array",
          "description": "Allows to specify multiple actions of which one is chosen at random.",
          "items": {
            "allOf": [
              {
                "$ref": "#/definitions/event"
              },
              {
                "properties": {
                  "weight": {
                    "type": "integer",
                    "description": "Determines the probability of this action. The probability will be the weight divided by the sum of all weights.\nFor example, if you specify two actions, one with weight 1 and one with weight 2, the probability of the first action is 1/3 and the probability of the second one is 2/3.",
                    "default": 1
                  }
                },
                "required": [
                  "weight"
                ]
              }
            ]
          }
        },
        "sequence": {
          "type": "array",
          "description": "Allows to specify multiple actions which are all performed when the event occurs.",
          "items": {
            "$ref": "#/definitions/event"
          }
        }
      },
      "propertyNames": {
        "enum": [
          "filters",
          "add",
          "remove",
          "randomize",
          "sequence",
          "weight"
        ]
      }
    },
    "component_group_list": {
      "type": "object",
      "properties": {
        "component_groups": {
          "description": "An array of names of component groups to add/remove.",
          "type": "array",
          "items": {
            "type": "string",
            "minecraftType": "componentGroupName"
          }
        }
      },
      "additionalProperties": false
    },
    "filter": {
      "type": "object",
      "properties": {
        "test": {
          "type": "string",
          "enum": [
            "clock_time",
            "has_ability",
            "has_biome_tag",
            "has_component",
            "has_damage",
            "has_equipment",
            "in_caravan",
            "in_clouds",
            "in_lava",
            "in_water",
            "in_water_or_rain",
            "is_altitude",
            "is_biome",
            "is_brightness",
            "is_climbing",
            "is_color",
            "is_daytime",
            "is_difficulty",
            "is_family",
            "is_game_rule",
            "is_humid",
            "is_immobile",
            "is_moving",
            "is_owner",
            "is_riding",
            "is_sneaking",
            "is_snow_covered",
            "is_target",
            "is_temperature_type",
            "is_temperature_value",
            "is_underground",
            "is_underwater",
            "is_variant",
            "moon_intensity",
            "moon_phase",
            "on_ground",
            "on_ladder"
          ],
          "enumDescriptions": [
            "Compares the current time with a float value in the range (0.0, 1.0).\n0.0= Noon\n0.25= Sunset\n0.5= Midnight\n0.75= Sunrise",
            "Returns true when the subject entity has the named ability.",
            "Tests whether the biome the subject is in has the specified tag.",
            "Returns true when the subject entity contains the named component.",
            "Returns true when the subject entity receives the named damage type.",
            "Tests for the presence of a named item in the designated slot of the subject entity.",
            "Returns true if the subject entity is in a caravan.",
            "Returns true when the subject entity is in the clouds.",
            "Returns true when the subject entity is in lava.",
            "Returns true when the subject entity is in water.",
            "Returns true when the subject entity is in water or rain.",
            "Tests the current altitude against a provided value. 0= bedrock elevation.",
            "Tests whether the Subject is currently in the named biome.",
            "Tests the current brightness against a provided value in the range (0.0f, 1.0f).",
            "Returns true if the subject entity is climbing.",
            "Returns true if the subject entity is the named color.",
            "Returns true during the daylight hours.",
            "Tests the current difficulty level of the game.",
            "Returns true when the subject entity is a member of the named family.",
            "Tests whether a named game rule is active.",
            "Tests whether the Subject is in an area with humidity",
            "Returns true if the subject entity is immobile. An entity is immobile if it lacks AI goals, has just changed dimensions or if it is a mob and has no health.",
            "Returns true if the subject entity is moving.",
            "Returns true if the subject entity is the owner of the calling entity.",
            "Returns true if the subject entity is riding on another entity.",
            "Returns true if the subject entity is sneaking.",
            "Tests whether the Subject is in an area with snow cover",
            "Returns true if the subject entity is the target of the calling entity.",
            "Tests whether the current temperature is a given type.",
            "Tests the current temperature against a provided value in the range (0.0, 1.0) where 0.0f is the coldest temp and 1.0f is the hottest.",
            "Returns true when the subject entity is underground. An entity is considered underground if there are non-solid blocks above it.",
            "Returns true when the subject entity is under water. An entity is considered underwater if it is completely submerged in water blocks.",
            "Returns true if the subject entity is the variant number provided.",
            "Compares the current moon intensity with a float value in the range (0.0, 1.0)",
            "Compares the current moon phase with an integer value in the range (0, 7).",
            "Returns true when the subject entity is on ground.",
            "Returns true when the subject entity is on a ladder."
          ]
        }
      },
      "oneOf": [
        {
          "properties": {
            "test": {},
            "subject": {
              "type": "string",
              "enum": [
                "other",
                "parent",
                "player",
                "self",
                "target"
              ],
              "enumDescriptions": [
                "The other member of an interaction, not the caller.",
                "The caller's current parent.",
                "The player involved with the interaction.",
                "The entity or object calling the test",
                "The caller's current target."
              ],
              "default": "self"
            },
            "operator": {
              "type": "string",
              "enum": [
                "!=",
                "<",
                "<=",
                "<>",
                "=",
                "==",
                ">",
                ">=",
                "equals",
                "not"
              ],
              "default": "equals"
            },
            "value": {}
          },
          "required": [
            "test"
          ],
          "additionalProperties": false,
          "oneOf": [
            {
              "properties": {
                "test": {
                  "const": "clock_time"
                },
                "value": {
                  "type": [
                    "number",
                    "string"
                  ]
                }
              },
              "required": [
                "value"
              ]
            },
            {
              "properties": {
                "test": {
                  "const": "has_ability"
                },
                "value": {
                  "type": "string",
                  "enum": [
                    "flySpeed",
                    "flying",
                    "instabuild",
                    "invulnerable",
                    "lightning",
                    "mayfly",
                    "mute",
                    "noclip",
                    "walkSpeed",
                    "worldbuilder"
                  ]
                }
              },
              "required": [
                "value"
              ]
            },
            {
              "properties": {
                "test": {
                  "const": "has_biome_tag"
                },
                "value": {
                  "type": "string"
                }
              },
              "required": [
                "value"
              ]
            },
            {
              "properties": {
                "test": {
                  "const": "has_component"
                },
                "value": {
                  "type": "string"
                }
              },
              "required": [
                "value"
              ]
            },
            {
              "properties": {
                "test": {
                  "const": "has_damage"
                },
                "value": {
                  "type": "string",
                  "enum": [
                    "anvil",
                    "attack",
                    "block_explosion",
                    "contact",
                    "drowning",
                    "entity_explosion",
                    "fall",
                    "falling_block",
                    "fatal",
                    "fire",
                    "fire_tick",
                    "fly_into_wall",
                    "lava",
                    "magic",
                    "none",
                    "override",
                    "piston",
                    "projectile",
                    "starve",
                    "suffocation",
                    "suicide",
                    "thorns",
                    "void",
                    "wither"
                  ]
                }
              },
              "required": [
                "value"
              ]
            },
            {
              "properties": {
                "test": {
                  "const": "has_equipment"
                },
                "value": {
                  "type": "string"
                }
              },
              "required": [
                "value"
              ]
            },
            {
              "properties": {
                "test": {
                  "const": "in_caravan"
                },
                "value": {
                  "type": [
                    "boolean",
                    "string"
                  ]
                }
              }
            },
            {
              "properties": {
                "test": {
                  "const": "in_clouds"
                },
                "value": {
                  "type": [
                    "boolean",
                    "string"
                  ]
                }
              }
            },
            {
              "properties": {
                "test": {
                  "const": "in_lava"
                },
                "value": {
                  "type": [
                    "boolean",
                    "string"
                  ]
                }
              }
            },
            {
              "properties": {
                "test": {
                  "const": "in_water"
                },
                "value": {
                  "type": [
                    "boolean",
                    "string"
                  ]
                }
              }
            },
            {
              "properties": {
                "test": {
                  "const": "in_water_or_rain"
                },
                "value": {
                  "type": [
                    "boolean",
                    "string"
                  ]
                }
              }
            },
            {
              "properties": {
                "test": {
                  "const": "is_altitude"
                },
                "value": {
                  "type": [
                    "integer",
                    "string"
                  ]
                }
              },
              "required": [
                "value"
              ]
            },
            {
              "properties": {
                "test": {
                  "const": "is_biome"
                },
                "value": {
                  "type": "string",
                  "enum": [
                    "beach",
                    "desert",
                    "extreme_hills",
                    "flat",
                    "forest",
                    "ice",
                    "jungle",
                    "mesa",
                    "mushroom_island",
                    "ocean",
                    "plain",
                    "river",
                    "savanna",
                    "stone_beach",
                    "swamp",
                    "taiga",
                    "the_end",
                    "the_nether"
                  ]
                }
              },
              "required": [
                "value"
              ]
            },
            {
              "properties": {
                "test": {
                  "const": "is_brightness"
                },
                "value": {
                  "type": [
                    "number",
                    "string"
                  ]
                }
              },
              "required": [
                "value"
              ]
            },
            {
              "properties": {
                "test": {
                  "const": "is_climbing"
                },
                "value": {
                  "type": [
                    "boolean",
                    "string"
                  ]
                }
              }
            },
            {
              "properties": {
                "test": {
                  "const": "is_color"
                },
                "value": {
                  "type": "string",
                  "enum": [
                    "black",
                    "blue",
                    "brown",
                    "cyan",
                    "gray",
                    "green",
                    "light_blue",
                    "light_green",
                    "magenta",
                    "orange",
                    "pink",
                    "purple",
                    "red",
                    "silver",
                    "white",
                    "yellow"
                  ]
                }
              },
              "required": [
                "value"
              ]
            },
            {
              "properties": {
                "test": {
                  "const": "is_daytime"
                },
                "value": {
                  "type": [
                    "boolean",
                    "string"
                  ]
                }
              }
            },
            {
              "properties": {
                "test": {
                  "const": "is_difficulty"
                },
                "value": {
                  "type": "string",
                  "enum": [
                    "easy",
                    "hard",
                    "normal",
                    "peaceful"
                  ]
                }
              },
              "required": [
                "value"
              ]
            },
            {
              "properties": {
                "test": {
                  "const": "is_family"
                },
                "value": {
                  "type": "string"
                }
              },
              "required": [
                "value"
              ]
            },
            {
              "properties": {
                "test": {
                  "const": "is_game_rule"
                },
                "value": {
                  "type": [
                    "boolean",
                    "string"
                  ]
                }
              }
            },
            {
              "properties": {
                "test": {
                  "const": "is_humid"
                },
                "value": {
                  "type": [
                    "boolean",
                    "string"
                  ]
                }
              }
            },
            {
              "properties": {
                "test": {
                  "const": "is_immobile"
                },
                "value": {
                  "type": [
                    "boolean",
                    "string"
                  ]
                }
              }
            },
            {
              "properties": {
                "test": {
                  "const": "is_moving"
                },
                "value": {
                  "type": [
                    "boolean",
                    "string"
                  ]
                }
              }
            },
            {
              "properties": {
                "test": {
                  "const": "is_owner"
                },
                "value": {
                  "type": [
                    "boolean",
                    "string"
                  ]
                }
              }
            },
            {
              "properties": {
                "test": {
                  "const": "is_riding"
                },
                "value": {
                  "type": [
                    "boolean",
                    "string"
                  ]
                }
              }
            },
            {
              "properties": {
                "test": {
                  "const": "is_sneaking"
                },
                "value": {
                  "type": [
                    "boolean",
                    "string"
                  ]
                }
              }
            },
            {
              "properties": {
                "test": {
                  "const": "is_snow_covered"
                },
                "value": {
                  "type": [
                    "boolean",
                    "string"
                  ]
                }
              }
            },
            {
              "properties": {
                "test": {
                  "const": "is_target"
                },
                "value": {
                  "type": [
                    "boolean",
                    "string"
                  ]
                }
              }
            },
            {
              "properties": {
                "test": {
                  "const": "is_temperature_type"
                },
                "value": {
                  "type": "string",
                  "enum": [
                    "cold",
                    "mild",
                    "ocean",
                    "warm"
                  ]
                }
              },
              "required": [
                "value"
              ]
            },
            {
              "properties": {
                "test": {
                  "const": "is_temperature_value"
                },
                "value": {
                  "type": [
                    "number",
                    "string"
                  ]
                }
              },
              "required": [
                "value"
              ]
            },
            {
              "properties": {
                "test": {
                  "const": "is_underground"
                },
                "value": {
                  "type": [
                    "boolean",
                    "string"
                  ]
                }
              }
            },
            {
              "properties": {
                "test": {
                  "const": "is_underwater"
                },
                "value": {
                  "type": [
                    "boolean",
                    "string"
                  ]
                }
              }
            },
            {
              "properties": {
                "test": {
                  "const": "is_variant"
                },
                "value": {
                  "type": [
                    "integer",
                    "string"
                  ]
                }
              },
              "required": [
                "value"
              ]
            },
            {
              "properties": {
                "test": {
                  "const": "moon_intensity"
                },
                "value": {
                  "type": [
                    "number",
                    "string"
                  ]
                }
              },
              "required": [
                "value"
              ]
            },
            {
              "properties": {
                "test": {
                  "const": "moon_phase"
                },
                "value": {
                  "type": [
                    "integer",
                    "string"
                  ]
                }
              },
              "required": [
                "value"
              ]
            },
            {
              "properties": {
                "test": {
                  "const": "on_ground"
                },
                "value": {
                  "type": [
                    "boolean",
                    "string"
                  ]
                }
              }
            },
            {
              "properties": {
                "test": {
                  "const": "on_ladder"
                },
                "value": {
                  "type": [
                    "boolean",
                    "string"
                  ]
                }
              }
            }
          ]
        },
        {
          "properties": {
            "all_of": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/filter"
              }
            },
            "any_of": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/filter"
              }
            }
          },
          "additionalProperties": false
        }
      ]
    }
  },
  "type": "object",
  "properties": {
    "format_version": {
      "title": "Format version",
      "description": "Specifies the version of the game this entity was made in. If the version is lower than the current version, any changes made to the entity in the vanilla version will be applied to it.",
      "type": "string",
      "default": "1.8.0"
    },
    "do_not_upgrade": {
      "description": "Disables all current and future backwards compatibility for this entity. If new components or properties are added or changed to the vanilla version of this entity, they will not be applied.",
      "type": "object",
      "default": {},
      "additionalProperties": false
    },
    "minecraft:entity": {
      "title": "Entity definition",
      "description": "Defines entity's components, component groups and events",
      "type": "object",
      "properties": {
        "description": {
          "title": "Entity description",
          "description": "Contains the identifier and some basic properties",
          "type": "object",
          "properties": {
            "identifier": {
              "type": "string",
              "description": "A string which identifies this entity. If an entity with this identifier exists, it is modified, otherwise a new entity is created."
            },
            "is_spawnable": {
              "description": "Sets whether or not this entity has a spawn egg in the creative ui.",
              "properties": {
                "value": {
                  "type": "boolean",
                  "default": true
                }
              },
              "required": [
                "value"
              ],
              "additionalProperties": false
            },
            "is_summonable": {
              "description": "Sets whether or not we can summon this entity using commands such as /summon.",
              "properties": {
                "value": {
                  "type": "boolean",
                  "default": true
                }
              },
              "required": [
                "value"
              ],
              "additionalProperties": false
            },
            "is_experimental": {
              "description": "Sets whether or not this entity is experimental. Experimental entities are only enabled when the experimental toggle is enabled.",
              "properties": {
                "value": {
                  "type": "boolean",
                  "default": false
                }
              },
              "required": [
                "value"
              ],
              "additionalProperties": false
            },
            "runtime_identifier": {
              "description": "Allows you to set what vanilla Minecraft entity's hard coded behaviors you want to use on your mob.",
              "properties": {
                "id": {
                  "type": "string"
                }
              },
              "required": [
                "id"
              ],
              "additionalProperties": false
            }
          },
          "required": [
            "identifier"
          ]
        },
        "component_groups": {
          "title": "Component groups",
          "description": "An object whose each property specifies a component group. The key is the name of the component group and the value is an object with the components belonging to that specific component group.",
          "examples": [
            {
              "component_group_1": {
                "minecraft:color": {
                  "value": 1
                }
              },
              "component_group_2": {
                "minecraft:color": {
                  "value": 2
                }
              }
            }
          ],
          "type": "object",
          "additionalProperties": {
            "$ref": "#/definitions/components"
          }
        },
        "components": {
          "type": "object",
          "title": "Components",
          "description": "An object with this entity's components that are not part of any component group. Each property specifies a component. The key is the name of the component and the value is usually an object with the properties of that component, or an empty object when there are no properties.\nNote: sometimes the value can also be an array, or even a boolean.",
          "allOf": [
            {
              "$ref": "#/definitions/components"
            }
          ]
        },
        "events": {
          "title": "Events",
          "description": "An object whose each property specifies an event. The key is the name of the event and the value is an object describing the action that happens when the event occurs.",
          "type": "object",
          "additionalProperties": {
            "$ref": "#/definitions/event"
          }
        }
      },
      "required": [
        "description",
        "components"
      ],
      "additionalProperties": false
    }
  },
  "required": [
    "minecraft:entity"
  ]
}