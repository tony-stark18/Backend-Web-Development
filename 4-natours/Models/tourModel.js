const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A Tour must have a Name'],
    unique: true,
    trim: true,
    minlength: [10, 'A tour name must have at least 10 characters'],
    maxlength: [40, 'A tour name must have at most 40 characters'],
  },
  duration: {
    type: Number,
    required: [true, 'A Tour must have a duration'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A Tour must have a groupSize'],
  },
  difficulty: {
    type: String,
    required: [true, 'A Tour must have a difficulty'],
  },
  ratingAverage: {
    type: Number,
    default: 4.5,
  },
  ratingQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'A Tour must have a price'],
  },
  priceDiscount: {
    type: Number,
    validate: function (val) {
      return val < this.price;
    },
    message: 'Discount Price ({VALUE}) must be below the regular price',
  },
  summary: {
    type: String,
    trim: true,
    required: [true, 'A Tour must have a Summary'],
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, 'A Tour must have a cover image'],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  startDates: [Date],
});
//Document middleware - It runs before .save() and .create()
tourSchema.pre('save', function () {
  console.log(this);
});
const Tour = new mongoose.model('Tour', tourSchema);
module.exports = Tour;
