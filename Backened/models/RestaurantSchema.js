const mongoose = require('mongoose');
const restaurant = mongoose.Schema({
    restName:{
        type:String,
        required : true
    },
    city:{
        type:String,
        required :true
    },
    products:[{type : mongoose.Schema.Types.ObjectId, ref:'Product'}]
})


const Resturant = mongoose.model("Restaurant", restaurant);
module.exports = Resturant