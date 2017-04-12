/**
 * Item.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  	connection: 'SuperShopperDB',
  	tableName: 'Items',

  attributes: {

      ItemNo:{
       	type: 'integer',
       	size: 14,
       	primaryKey: true,
       	unique:true,
        required: true,
       	columnName: 'ItemID'
       },
      Name:{
       	type: 'string',
       	size: 50,
       	columnName: 'Name'
        },
      Type:{
      	type: 'string',
       	size: 50,
       	columnName: 'Type'
       },
       Catalogs:{
        collection: 'catalogid',
        via: 'CatalogNo',
        through:'catalog'
       }
  }
};

