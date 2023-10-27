import { DataTypes, Model } from 'sequelize';
import util from 'util';
import connectToDB from '../database/db.js';

export const db = await connectToDB('postgresql:///pokemonproject')


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
            allowNull: false
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