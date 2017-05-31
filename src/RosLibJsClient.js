var _ = require("lodash");
var ROSLIB = require("roslib");
var Promise = require("bluebird");
var EventEmitter2 = require('eventemitter2').EventEmitter2;
// Internal libraries
var Connection = require('./Connection');

var defaultOptions = {
	url: "ws://localhost:9090",
	// Milliseconds before attempting another reconnect
	reconnectInterval: 5000
};

function getUserOptions(options) {
	return _.assign(defaultOptions, options);
}

module.exports = function Client(options) {

	var _this = this;
	var events = new EventEmitter2();
	var options = getUserOptions(options);
	var connection = new Connection(events, options);

	
};