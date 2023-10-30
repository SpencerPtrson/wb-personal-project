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
                autoIncrement: true,
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
                autoIncrement: true,
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
                autoIncrement: true,
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
            longDescription: {
                type: DataTypes.STRING,
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



// await db.close();