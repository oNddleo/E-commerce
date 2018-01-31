/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    // migrate: 'safe',
    // tableName: 'user',
    // autoPK: false,
    IDUSER: {
      type: 'string',
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    USERNAME: {
      type: "string"
    },
    PASSWORD: {
      type: "string"
    }
  }
};

