
const express = require("express");
const app = express();



app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/api/whoami", (request, response) => {
  const ip = request.connection.remoteAddress;
  const language = request.headers["accept-language"];
  const software = request.headers["user-agent"];
  const whoami = {"ipaddress":ip,"language":language,"software":software};
  response.json(whoami);
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
