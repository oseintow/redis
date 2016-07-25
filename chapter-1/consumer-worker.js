var redis = require("redis");
var client = redis.createClient();
var queue = require("./queue"); // 1
var logsQueue = new queue.Queue("logs", client); // 2

function logMessages(){
    logsQueue.pop(function(err, replies){
        var queueName = replies[0];
        var message = replies[1];
        console.log("[Consumer] Got log: " + message + " from " + queueName + " queue");

        logsQueue.size(function(err,size){
            console.log(size + " logs left");
        });

        logMessages();
    });
}

logMessages();