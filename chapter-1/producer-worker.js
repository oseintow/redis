var redis = require("redis");
var client = redis.createClient();
var queue = require("./queue");

var losQueue = new queue.Queue("logs", client);
var MAX = 5;

for(var i = 0; i < MAX; i ++){
    losQueue.push("Hello World #" + i);
}

console.log("Created " + MAX + " logs");
client.quit();

