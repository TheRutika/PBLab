const http = require("http");
const express = require("express");

const path = require('path');
const{  Server } = require("socket.io"); // { Server: Server }
const app = express();

const server = http.createServer(app);
const io = new Server(server);



// Socke.io
let a=1;

io.on("connection", (socket) => {
    socket.on("new-user", (name) => {
        console.log("New user "+ a++ +" : " + name);
        socket.broadcast.emit(console.log("user-connected", name));
     });
      });

io.on('connection', (socket) => {
   socket.on("user-message", (message)=> {

    io.emit('message', message); 
   });
});
app.use(express.static (path.resolve("./public"))); //diretorio público para acessar
//hello hello
app.get('/', (req, res) => {
    res.sendFile("/public/index.html....");
});

server.listen(9000,()=>{
    console.log("server is running on port 9000");
})

