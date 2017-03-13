	
let mongoose = require('mongoose');
let Interest = require('../models/interests.js')

module.exports = {

		addInterest: function(req, res){
		let interest = req.body;
          return Interest.create(interest, (err, newInterest) => {
          if(err){
            res.json(err);
          } else {
            res.json('interest Added!'); 
          }     
        });
    },
    
	getAll: function(req, res){
		Interest.find({})
			.exec( (err, Interests) => {
				if(err){
            		res.json(err);
          		} else {
            		res.json(Interests); 
          		} 
			})
	}

}