const http = require('http');
const fs = require('fs/promises');
const server  = http.createServer(async(req,res)=>{
   const url  = req.url;
   if(url == "/home" || url == '/' && req.method == "GET") {
    const data = await fs.readFile('home.html','utf-8');
    
    res.write(data);
}
else if(url == "/about" && req.method == "POST") {
    const data  = await fs.readFile('about.html',"utf-8");
    res.write(data);
}
else {
    res.write("404  error");
}
res.end();
})
server.listen(3002,(err)=>{
    try{
        if(err) throw err;
        console.log("server is running on the port 3002")
    }catch(err) {
        console.log("Server error",err)
    }
})