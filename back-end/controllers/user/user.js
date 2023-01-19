const userdetails = require("../../model/userSchema")
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

module.exports={

postSignup : (req,res)=>{
   let data = req.body
   console.log(req.body);
     bcrypt.hash(data.password,10).then((password)=>{
       
        userdetails.create({
            name : data.name,
            email : data.email,
            phone : data.phone,
            password : password,
        }).then(()=>{
            
            res.send({success : true})
        })
     
     })
},

postLogin : (req,res)=>{
    let admin = { 
        name : "admin@ak" ,
        password : "12345"
    }
   
    let {email,password} = req.body;
 
         
       if (email === admin.name && password === admin.password) {

        const payload = {
            name: admin.name
          }
          jwt.sign(
            payload,
            "secret",
            {expiresIn : 3600},
            (err,token)=>{
                if (token) {
                    res.send({success:true, token : `Bearer ${token}`, accountType : "admin" })
                } else {
                  console.log(err);  
                }})
       } else {
        userdetails.findOne({email: email}).then((userdata=>{
            if (userdata !==null) {
             bcrypt.compare(password, userdata.password ).then((value)=>{
                 if (value) {
                   const payload = {
                     id : userdata._id,
                     name: userdata.name
                   }
                     jwt.sign(
                         payload,
                         "secret",
                         {expiresIn : 3600},
                         (err,token)=>{
                             if (token) {
                                 res.send({success:true, token : `Bearer ${token}`,id:userdata._id , accountType : 'user' })
                             } else {
                               console.log(err);  
                             }
                         }
                     )
                 
                 } else {
                  res.send({success:false})
                 }
              })
            } else {
             res.send({success:false})
            }
         }))
       }
        
      
},

Profile : (req,res)=>{
   let id = req.body.id
   userdetails.findOne({id : id}).then((userdata)=>{
       res.send({success: true , details: userdata})
   })   
},
setDp : (req,res)=>{   
    let id = req.params.id
    const image = {
        url :req.file.path,
        filename : req.file.filename   
      }
     userdetails.findByIdAndUpdate({_id : id},{image : image}).then((userdata) => {
        userdetails.findOne({_id : id}).then((data)=>{
            res.send({ success: true ,image : data.image.url });
        })  
    }).catch((e) => {
        console.log(e);
        res.send({ success: false, e });
    })
}

    
}