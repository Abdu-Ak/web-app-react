const userdetails = require("../../model/userSchema")



module.exports={

getUsers : (req,res)=>{
    userdetails.find().then((userdata)=>{
       res.send({details: userdata })
    })
},

getEdit : (req,res)=>{
    console.log(req);
},

deleteUser: (req,res)=>{
    let id = req.body.id
     
    userdetails.deleteOne({_id : id }).then(()=>{
        res.send({succes:true })
    })
     
}

    
}