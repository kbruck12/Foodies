/**
 * ItemController
 *
 * @description :: Server-side logic for managing Items
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res, next){
    	Item.find(function foundCatalogids(err,item){
    		if(err) return next(err);
    		if(!item) return next();
    		res.view({
    			item: item
    		});
    	});
    }
};

