const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const generateAuthToken = require('./jwtTokenGenerate');
const Product=require('./models/product')
const Restaurant = require('./models/RestaurantSchema');
// const Product = require('./models/product')

mongoose.connect('mongodb://127.0.0.1:27017/aarzoo').then(()=>{
    console.log('chal gya hehehe')

}).catch((err)=>{
    console.log(err)
})

const app=express()

app.use(cors())  // use to put request and get response on same pc , allow resourse sharing across different origins
const User = require('./models/users');

const bodyparser=require('body-parser')
const urluncodedeParser=bodyparser.urlencoded({extended:false})
app.use(bodyparser.json(),urluncodedeParser)
const bcrypt = require('bcrypt');








app.get('/',(req,res)=>{
    res.send('aarzo padh rhii???')

})

// signup api

app.post('/register', async(req, res)=>{

    const user = req.body;
    console.log(user,'arzooooooooooooo')

    const Email = await User.findOne({email:user.email});
    // const  Email=await User.findOne({email:user.email})

    if(Email){
        res.send("You have already been registered");
    }else{

        user.password = await bcrypt.hash(req.body.password, 10);

        const dbUser = new User({
            fname : user.fname,
            lname : user.lname,
            email : user.email.toLowerCase(),
            password : user.password
        })

        await dbUser.save();
        res.json({message : "done"})
    }

})


// login api

app.post('/login', async(req,res)=>{
    const userInfo=req.body
    let userData
    try{
        userData= await User.findOne({email:userInfo.email})
        console.log("email matched");
    }
    catch(err){
        console.log(err,"err")
        console.log("error aaa gyaa")

    }
    if(!userData){
        res.status(401).send({msg:"signUp kiya tune ???"})
    }
     const validPassword=  await bcrypt.compare(userInfo.password,userData.password).catch((err)=>{
        console.log(err,"err while matching passoword")
        res.status(500).send({msg:"Internal server err"})
     })
     if(!validPassword){
        res.send({msg:"Invalid password"})
     }
     let userDataObject=userData.toObject()
     delete userDataObject.password
       const token = generateAuthToken(userData)
       res.status(200).send({
        data:{
            token:token,userData:userDataObject
        },
        msg:"sab kuch theek hai done hai"
        

       })
})

// add restaurant api

app.post('/restaurants',(req, res)=>{
    const user = req.body
    console.log(user,"errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")
    const RestaurantData = new Restaurant(user)
    RestaurantData.save().then((resData)=>{
        res.json(resData)
    }).catch((err)=>{
        console.log(err, "errrr");
    })
})

// add product api

app.post('/restaurants/:id/products', (req, res)=>{

    const {id} = req.params;
    Restaurant.findById(id).then((restaurantsData)=>{
        if(!restaurantsData){
            res.status(404).json({err:"not found"});
        }

        const newProduct = new Product({
            ...req.body,
            restaurants:restaurantsData._id
        })
        if(!restaurantsData.products){
            restaurantsData.products=[]
        }

        restaurantsData.products.push(newProduct);

        return Promise.all([newProduct.save(),restaurantsData.save()]).then((product)=>{
            res.json(product);
        }).catch((err)=>{
            console.log(err, "Err");
        })

    })
})


app.get('/restaurants', (req, res)=>{
    Restaurant.find().populate('products').then((aarzo)=>{
        res.json(aarzo);
    })
    
    .catch((err)=>{
        console.log(err, "err : Not found");
    })
})

// Search for restaurants by name or city

// app.get('/restaurants/search', (req, res)=>{

//     const {q} = req.query
//     console.log(q);
//     Restaurant.find({
//         $or:[{restName:{$regex :`${q}`}}, {city:{$regex:`${q}`}}]
//     }).then((resData)=>{
//         res.json(resData);
//     }).catch((err)=>{
//         console.log(err);
//     })
// })



// getting through id 

app.get('/restaurants/:id', (req, res)=>{
    const details = req.query
    let resData
    try{
        resData = Restaurant.findOne({_id : details._id})
    } catch(err){
        console.log(err, "Not found!")
    }
    
    if(!resData){
        res.json(resData.data);
    }else{
        res.status(401).send("Not added yet");
    }
})
app.get('/products/search', (req, res)=>{
    const {q} = req.query
    console.log(q);

    Product.find({
        $or :[{description : {$regex : `${q}`}}, {name : {$regex : `${q}`}}]
    }).then((resData)=>{
        res.json(resData);
    }).catch((err)=>{
        console.log(err, "err");
    })
})


app.listen(3001,()=>{
    console.log('server chal gya')
})


