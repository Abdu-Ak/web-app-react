const userdetails = require("../../model/userSchema")



module.exports={

getUsers : (req,res)=>{
    userdetails.find().then((userdata)=>{
       res.send({details: userdata })
    })
},

getEdit : (req,res)=>{
   let id  = req.body.id
     
     userdetails.findById({_id : id}).then((userdata)=>{
        res.send({success: true , details : userdata})
     })
},

deleteUser: (req,res)=>{
    let id = req.body.id
     
    userdetails.deleteOne({_id : id }).then(()=>{
        res.send({succes:true })
    })
     
},

editUser : (req,res)=>{
     let {id,name,email,phone} =req.body
       
     userdetails.findByIdAndUpdate({_id : id},{name:name, email:email, phone:phone}).then((userdata)=>{
        res.send({success : true})
     })
       
}

    
}