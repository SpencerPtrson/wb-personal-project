import { DataTypes, Model } from 'sequelize';
import util from 'util';
import connectToDB from '../database/db.js';

export const db = await connectToDB('postgresql:///pokemonproject')


//#region users
    export class User extends Model {
        [util.inspect.custom]() {
        return this.toJSON();
        }
    }
    
    User.init(
        {
            userId: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            modelName: 'user',
            sequelize: db,
        },
    );
//#endregion users


//#region pokemon instances
export class PokemonInstance extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}

PokemonInstance.init(
    {
        pokemonInstanceId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        speciesId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        teamId: {
            type: DataTypes.INTEGER
        },
        natureId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        level: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 100
            }
        },
        move1Id: {
            type: DataTypes.INTEGER,
        },
        move2Id: {
            type: DataTypes.INTEGER,
        },
        move3Id: {
            type: DataTypes.INTEGER,
        },
        move4Id: {
            type: DataTypes.INTEGER,
        },

        // IVS
        hpIV: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 0,
                max: 31
            }
        },
        atkIV: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 0,
                max: 31
            }
        },
        defIV: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 0,
                max: 31
            }
        },
        spATKIV: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 0,
                max: 31
            }
        },
        spDEFIV: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 0,
                max: 31
            }
        },
        speedIV: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 0,
                max: 31
            }
        },

        // EVS
        hpEV: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 0,
                max: 255
            }
        },
        atkEV: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 0,
                max: 255
            }
        },
        defEV: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 0,
                max: 255
            }
        },
        spATKEV: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 0,
                max: 255
            }
        },
        spDEFEV: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 0,
                max: 255
            }
        },
        speedEV: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 0,
                max: 255
            }
        },  
    },
    {
        modelName: 'pokemoninstance',
        sequelize: db
    }
);


PokemonInstance.beforeCreate(async (instance, options) => {
    try {
        const result = await PokemonInstance.findAll({
            where: { teamId: instance.teamId }
        });
        console.log(result);
        if (result.length >=  6) { throw new Error(`Cannot create more instances for ${instance.teamId}`)}
    } catch (error) {
        throw error; // you must throw an error inside the hook in order to cancel the real execution statement
    }
});
//#endregion pokemon instances


//#region natures
export class PokemonNature extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}

PokemonNature.init(
    {
        natureId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        increasedStat: {
            type: DataTypes.STRING
        },
        decreasedStat: {
            type: DataTypes.STRING,
        },
    },
    {
        modelName: 'PokemonNature',
        sequelize: db
    }
);
//#endregion natures


//#region species
    export class PokemonSpecies extends Model {
        [util.inspect.custom]() {
            return this.toJSON()
        }
    }

    PokemonSpecies.init(
        {
            speciesId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            sprite: {
                type: DataTypes.STRING,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            type1: {
                type: DataTypes.STRING,
                allowNull: false
            },
            type2: {
                type: DataTypes.STRING,
            },
            baseHP: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            baseATK: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            baseDEF: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            baseSPATK: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            baseSPDEF: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            baseSPEED: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
        },
        {
            modelName: 'PokemonSpecies',
            sequelize: db
        }
    );
//#endregion species


//#region types
    export class PokemonType extends Model {
        [util.inspect.custom]() {
            return this.toJSON()
        }
    }

    PokemonType.init(
        {
            typeId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
        },
        {
            modelName: 'PokemonType',
            sequelize: db
        }
    );
//#endregion types


//#region moves
    export class PokemonMove extends Model {
        [util.inspect.custom]() {
            return this.toJSON()
        }
    }

    PokemonMove.init(
        {
            moveId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            moveClass: {
                type: DataTypes.STRING,
                allowNull: false
            },
            type: {
                type: DataTypes.STRING,
                allowNull: false
            },
            power: {
                type: DataTypes.INTEGER
            },
            accuracy: {
                type: DataTypes.INTEGER,
            },
            pp: {
                type: DataTypes.INTEGER
            },
            priority: {
                type: DataTypes.INTEGER,
            },
            shortDescription: {
                type: DataTypes.STRING,
            },
            flavorText: {
                type: DataTypes.STRING,
            },
        },
        {
            modelName: 'PokemonMove',
            sequelize: db
        }
    );
//#endregion moves


//#region abilities
    export class Ability extends Model {
        [util.inspect.custom]() {
            return this.toJSON()
        }
    }

    Ability.init(
        {
            abilityId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            shortDescription: {
                type: DataTypes.STRING,
                allowNull: false
            },
            flavorText: {
                type: DataTypes.STRING,
                allowNull: false
            },
        },
        {
            modelName: 'ability',
            sequelize: db
        }
    );
//#endregion abilities


//#region teams
export class PokemonTeam extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}

PokemonTeam.init(
    {
        teamId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        teamName: {
            type: DataTypes.STRING
        }
    },
    {
        modelName: 'PokemonTeam',
        sequelize: db
    }
);
//#endregion teams


//#region Foreign Keys

// Species - Ability Association Table
PokemonSpecies.belongsToMany(Ability, { through: 'SpeciesAbilities' });
Ability.belongsToMany(PokemonSpecies, { through: 'SpeciesAbilities' });


// Species - Move Association Table
PokemonSpecies.belongsToMany(PokemonMove, { through: 'SpeciesMoves' });
PokemonMove.belongsToMany(PokemonSpecies, { through: 'SpeciesMoves' });


// Species - Type Association Table
PokemonSpecies.belongsToMany(PokemonType, { through: 'SpeciesTypes' });
PokemonType.belongsToMany(PokemonSpecies, { through: 'SpeciesTypes' });


// Move - Type Forein Key
PokemonType.hasMany(PokemonMove, { foreignKey: 'typeId' });
PokemonMove.belongsTo(PokemonType, { foreignKey: 'typeId' });


// User - Team Foreign Key
User.hasMany(PokemonTeam, { foreignKey: 'userId' });
PokemonTeam.belongsTo(User, { foreignKey: 'userId' });


// Pokemon Instance - Pokemon Species foreign key
PokemonSpecies.hasMany(PokemonInstance, { foreignKey: 'speciesId' });
PokemonInstance.belongsTo(PokemonSpecies, { foreignKey: 'speciesId' });


// Team - Pokemon Instance Association Table
PokemonTeam.hasMany(PokemonInstance, { foreignKey: 'teamId' });
PokemonInstance.belongsTo(PokemonTeam, { foreignKey: 'teamId' });



//#endregion Foreign Keys


// await db.close();