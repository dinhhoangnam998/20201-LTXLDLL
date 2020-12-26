var W3CWebSocket = require('websocket').w3cwebsocket;

var client = new W3CWebSocket('ws://192.168.1.2:7999/', 'echo-protocol');

client.onerror = function() {
    console.log('Connection Error');
};

client.onopen = function() {
    console.log('WebSocket Client Connected');
};

client.onclose = function() {
    console.log('echo-protocol Client Closed');
};

client.onmessage = function(e) {
    console.log("Received: '" + e.data + "'");

}