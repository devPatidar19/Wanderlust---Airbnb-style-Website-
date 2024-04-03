const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().required().min(0),
    image: Joi.string().allow("", null),
  }).required(),
});

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required(),
  }).required(),
});


// const Joi = require('joi');
// const joi = require('joi');

// module.exports.listingSchema = joi.object({
//     listing : joi.object({
//         title: joi.string() .required(),
//         description: joi.string() .required(),
//         location: joi.string() .required(),
//         country: joi.string() .required(),
//         price: joi.number().required().min(0),
//         image:{
//              filename: joi.string(),
//              url : joi.string().allow("", null)
//         },
//     }).required()
// })

// module.exports.reviewSchema = Joi.object({
//     review: Joi.object({
//         rating: Joi.number().required(),
//         comment: Joi.string().required(),
//     }).required()
// })


// schema ki validation k liye server side se 
// ye joi tool ka use krna pdega or iske liye schema create kiye hai
// jisse koi bhdi hotspoch ya any tools se dtabase me data nhi add kr skta hai