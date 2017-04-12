/**
 * StoreController
 *
 * @description :: Server-side logic for managing stores
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	search: function (req, res, next){
  	  Store.find(req.param('storeZip'),function foundStore(err,store){
    		if(err) return next(err);
    		if(store.ZipCode == 'storeZip') return next();
    		res.view({
    			store: store
    		});
    	});
    },

     show: function(req,res,next){
        Store.findOne({StoreNo: req.param('id')}).exec(function foundStore(err,store){
            if(err) return next(err);
            if(!store) return next();
           // res.redirect('/catalogid/show/'+store.StoreNo);
           res.json({catalog})
        });
    },

    index: function (req, res, next){
    	Store.find(function foundMentors(err,store){
    		if(err) return next(err);
    		if(!store) return next();
    		res.view({
    			store: store
    		});
    	});
    },
    getStoreCatalog: function(req,res,next){
        var storeNumber = req.param('storeNumber');
        var catalogId = 0;
        CatalogId.findOne({StoreNo: storeNumber}).exec(function foundStore(err, _catalogId){
            if(err) return next(err);
            if(!_catalogId) return next();
            //res.json(_catalogId.Items);
            Catalog.find({CatalogNo: _catalogId.CatalogNo}).exec(function (err,catalog_items){
                if(err) return next(err);
                if(!catalog_items) return next();
                var itemIds = catalog_items.map(function (elem) {return elem.ItemID; });
                Item.find({ItemNo: itemIds}).exec(function (err,_items){
                    if(err) return next(err);
                    if(!_items) return next();
                    
                    res.json({items: _items, catalogs: catalog_items});
                });
            });
        });
        //, function foundCatalogId(err,catalogId){
        //    return catalogId;
        //});
       // var catalog = Catalog.find({CatalogNo: catalogId});
        // return res.json({
        //     CatalogNo: catalogId,
        //     StoreNo: storeNumber
        // });
    }


};
    


