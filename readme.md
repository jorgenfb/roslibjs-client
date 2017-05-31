Roslibjs Client
====

This is a wrapper around the roslibjs package aiming to improve shortcomings of the original roslib package by introducing a fluent API as well as some useful error and fault handling mechanisms.

For the official roslibjs repository please head to [https://github.com/RobotWebTools/roslibjs](https://github.com/RobotWebTools/roslibjs)

### Main Features

* Fluent API
* Automatic connection recovery
* Reconnect support for topics

### Use

Establishing a reliable connection with ROS is one of the main objectives of this library. It is, also, quite simple and straightforward. Just instantiate the library like so:

	var RosClient = require("roslibjs-client");
	var client = new RosClient({
		url: "ws://192.168.0.11:9090"
	});

Once you instantiate the client, it will connect to the said URL and stay connected. If the connection drops, it will try to reconnect every 5 seconds. You can change this interval by passing an additional *reconnectInterval* option in milliseconds. It is set to 5000 by default.

### Use at your own risk

We neither encourage nor discourage the use of this package in your projects. However, this is just a simple wrapper we created for our own needs. Bug reports and suggestions pertaining to this particular client library are quite welcome, but we will not respond to feature requests for your own use case or bug reports that are related to the roslibjs itself. Bear in mind that you can always use Roslibjs without this package, since this package itself is a wrapper around it.