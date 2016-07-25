var redis = require("redis");
var client = redis.createClient();
client.set("my_key", "Hello world using Node.js and Redis");
client.get("my_key", redis.print);
client.quit();