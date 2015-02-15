define(function() {
	'use strict';

	var nativeConsole = {};
	try {
		// for IE 8/9
		if (!window.console || !ibeConfig.development) {
			window.console = {
				log:   function() {},
				debug: function() {},
				info:  function() {},
				warn:  function() {},
				error: function() {}
			};
		}
		/* jshint ignore:start */
		nativeConsole = console;
		/* jshint ignore:end */
		// Firefox throws an exception if you access the console object and it doesn't exist. Wow!
	} catch (e) { }
	return nativeConsole;
});