const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, 'product name much be provided']
    },
    price: {
        type: Number,
        required:[true, 'product price name much be provided']
    },
    featured:{
        type:Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.5, 
    },
    createAt:{
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum:{
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{VALUE} is not supported'
        }
    }
})

module.exports = mongoose.model('Product', productSchema);