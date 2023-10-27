import { DataTypes, Model } from 'sequelize';
import util from 'util';
import connectToDB from '../database/db.js';

const db = await connectToDB('postgresql:///pokemonproject')


await db.close();