/**
 * CatalogController
 *
 * @description :: Server-side logic for managing Catalogs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    index: function (req, res, next){
    	Catalog.find(function foundCatalogs(err,catalog){
    		if(err) return next(err);
    		if(!catalog) return next();
    		res.view({
    			catalog: catalog
    		});
    	});
    },
    show: function(req,res,next){
         Catalog.find({CatalogNo: req.param('id')}).exec(function foundStore(err,catalog){
            if(err) return next(err);
            if(!catalog) return next();
              res.view({
                catalog: catalog
              });
 /*       CatalogId.find({CatalogNo: req.param('id')}).populate('Items').exec(function foundStore(err,item){
              if(err) return next(err);
              if(!item) return next();
                 res.view({
                  item: item
                          });
           });*/

       });            

    }

};

