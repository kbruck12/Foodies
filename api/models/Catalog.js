/**
 * Catalog.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
 connection: 'SuperShopperDB',
  tableName: 'Locations',
  autoID:false,            
    attributes: {

      CatalogNo:{
       	model: 'catalogid'
       },
      ItemID:{
      model: 'item'
       },
      Location:{
       	type: 'string',
       	size: 50,
       	columnName: 'Location'
        },
      Price:{
       	type: 'float',
       	columnName: 'Price'
       },
       Inventory: {
       	type:'integer',
       	size:11,
       	columnName:'InventoryQuantity'
       }
  }

};

