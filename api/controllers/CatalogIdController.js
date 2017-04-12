/**
 * CatalogIdController
 *
 * @description :: Server-side logic for managing Catalogids
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    index: function (req, res, next){
    	CatalogId.find(function foundCatalogids(err,catalogid){
    		if(err) return next(err);
    		if(!catalogid) return next();
    		res.view({
    			catalogid: catalogid
    		});
    	});
    },

     show: function(req,res,next){
        CatalogId.findOne({StoreNo: req.param('id')}).populate('Items').exec(function foundCatalogids(err,catalog){
            if(err) return next(err);
            if(!catalog) return next();
            res.redirect('/catalogid/'+catalog.CatalogNo+'/items');
        });
    }
};

