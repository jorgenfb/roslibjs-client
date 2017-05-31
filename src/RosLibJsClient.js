var ROSLIB = require("roslib");
var Promise = require("bluebird");
var EventEmitter2 = require('eventemitter2').EventEmitter2;
// Internal libraries
var Connection = require('./Connection');
var TopicManager = require('./TopicManager');
var ServiceManager = require('./ServiceManager');

var defaultOptions = {
	url: "ws://localhost:9090",
	// Milliseconds before attempting another reconnect
	reconnectInterval: 5000
};

function getUserOptions(options) {
	// WARNING: This might not work on all browsers
	return Object.assign({}, defaultOptions, options);
}

module.exports = function Client(options) {
	var _this = this;
	var events = new EventEmitter2();
	var options = getUserOptions(options);
	var connection = new Connection(events, options);
	// Public API
	this.service = new ServiceManager(connection);
	this.topic = new TopicManager(events, connection);
};