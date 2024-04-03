const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");
const User = require("../models/user.js");
const { string } = require("joi");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    url: String,
    filename: String,
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  geometry: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ["Point"], // 'location.type' must be 'Point'
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const Review = require("./review.js");

// const listingSchema = new Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   image: {
//     filename: {
//       type: String,
//       default: "filename",
//     },
//     url: {
//       type: String,
//       default: "https://source.unsplash.com/random/200x200?sig=1",
//     },
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   location: {
//     type: String,
//     required: true,
//   },
//   country: {
//     type: String,
//     required: true,
//   },

//   reviews: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "Review",
//     },
//   ]

// });

// listingSchema.post("findOneAndDelete", async (listing) => {
//   if(listing){
//       await Review.deleteMany({_id: {$in: listing.reviews}});
//   };
// })

// const Listing = mongoose.model('Listing', listingSchema);

// module.exports = Listing;

//yha par data ka schema create kra hai .....