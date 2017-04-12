/**
 * Store.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'SuperShopperDB',
  tableName: 'Stores',

    attributes: {

      StoreNo:{
       	type: 'integer',
       	unique: true,
       	primaryKey: true,
       	required: true,
       	autoIncrement: true,
       	columnName: 'StoreNo'
       },
      StoreName:{
       	type: 'string',
       	size: 40,
       	required: true,
       	columnName: 'Name'
       },
      ZipCode:{
       	type: 'integer',
       	size: 5,
       	required: true,
       	columnName: 'ZipCode'
       },
      Address:{
       	type: 'string',
       	size: 255,
       	columnName: 'Address'
       }

  }
};

