var ROSLIB = require("roslib");
var Promise = require("bluebird");

module.exports = function(events, options) {
	
	var rosInstance;
	var connected = false;

	var onFail = function() {
		if(connected) {
			// Going from connected to disconnected, publish disconnected event
			events.emit("ros:disconnected");
		}
		connected = false;
		setTimeout(connect, options.reconnectInterval);
	};

	var onSuccess = function() {
		if(connected) {
			// Already in connected state...
			return;
		}
		connected = true;
		events.emit('ros:connected', rosInstance);
	};
	
	var connect = function() {
		rosInstance = new ROSLIB.Ros({
			url: options.url
		});
		rosInstance.on("close", onFail);
		rosInstance.on("error", onFail);
		rosInstance.on("connection", onSuccess);
	};

	this.getInstance = function() {
		if(connected) {
			return Promise.resolve(rosInstance);
		}
		return new Promise(function(resolve) {
			events.once("ros:connected", resolve);
		});
	};
	// Open the connection
	connect();
};