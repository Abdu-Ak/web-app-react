const userdetails = require("../../model/userSchema")
const bcrypt = require("bcrypt");


module.exports={

postSignup : (req,res)=>{
   let data = req.body
     bcrypt.hash(data.password,10).then((password)=>{
       
        userdetails.create({
            name : data.name,
            email : data.email,
            phonenumber : data.phone,
            password : password,
        }).then(()=>{
            
            res.send({success : true})
        })
     
     })
},

postLogin : (req,res)=>{
    let {email,password} = req.body;
  
        userdetails.findOne({email: email}).then((userdata=>{
           if (userdata !==null) {
            bcrypt.compare(password, userdata.password ).then((value)=>{
                if (value) {
                 res.send({success:true})
                } else {
                 res.send({success:false})
                }
             })
           } else {
            res.send({success:false})
           }
        }))
      
}

    
}