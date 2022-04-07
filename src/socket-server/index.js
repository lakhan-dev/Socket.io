const app = require("express")();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
  cors: { origin: "*" },
});

const port = process.env.PORT || 3000;
users = [];
io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("message", (data) => {
    // console.log(data);
    io.emit("message", `${data.user_name} : ${data.message}`);
  });

  socket.on("disconnect", () => {
    console.log("a user disconnected!");
  });
});

httpServer.listen(port, () => console.log(`listening on port ${port}`));
