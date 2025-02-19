const http = require("http")

const server = http.createServer(async(req,res)=>{
       res.setHeader("Content-Type","application/json");
       res.statusCode = 200;
       const data = await fetch("https://api.github.com/users?q=location:ghaziabad")
       const datajson = await (data.json())
       console.log(datajson);
       res.write(datajson);
       res.end();
    })
server.listen(3003,(err)=>{
    try{
        if(err) throw err;
        console.log("Server is running on port 3003")
    }catch(err){
        console.log("server error");
    }

})