const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const deliverySchema = new Schema({
    name: { type: String, required: true},
    phoneNumber: { type: Number, required: true},
    province: { type: String, required: true},
    district: { type: String, required: true},
    city: { type: String, required: true},
    address: {type: String, required: true},
    postalCode: { type: Number, required: true},
    
}, {
    timestamps: true,
});



const Delivery = mongoose.model('Delivery', deliverySchema);

module.exports = Delivery;