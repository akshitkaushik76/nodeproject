const http = require("http");
const port = 3004
const data = [{
    id:1001,
    name:"akshit",
    email:"akshi@123"
  }];
const server = http.createServer((req,res)=>{  // returns the instance of the server//
  
  const url = req.url;
  if(url == "/users" && req.method == "GET") {
    res.writeHead(200,{"Content-Type":"application/json"})
    
    res.write(JSON.stringify(data));
    res.end()
  }
  else if(url == "/user" && req.method == "POST") {
    let body = ''
    req.on("data",(chunk)=>{
       body+=chunk;
    })
    req.on("end",()=>{
        const parseddata = JSON.parse(body);
        //destrucuring//
        const {name,email} = parseddata;
        const newid = data.length>0?(data[data.length-1].id+1):1001;
        const newuser = {
            id:newid,
            name,
            email
        };
        data.push(newuser);
    })
  }
  else {
    res.writeHead(404,{"Content-type":"application/json"});
    res.write(JSON.stringify({status:"success",message:"usercreated successfully"}));
  }
  res.end();
})
server.listen(port,(err)=>{
    try{
      if(err) throw err; //out of the try catch block//
      console.log(`server is running on port ${port}`);
    }catch(err) {
        console.log("server error",err.message);
    }

})
