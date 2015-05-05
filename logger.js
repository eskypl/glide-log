define(function () {
	'use strict';

	/**
	 * GlideLog is an aggregator for using multiple logging adapters.
	 * GlideLog implements commonly used functions from window.console: info, debug, warn, error and log.
	 * All messages sent using GlideLog are pushed to its adapters and processed in those adapters.
	 * @constructor
	 */
	function GlideLog() {
		this.adapters = [];
	}

	GlideLog.prototype = {
		constructor: GlideLog,

		/**
		 * Reporting levels for adapters
		 */
		REPORT_NONE: 0, // no reporting
		REPORT_ERROR: 1, // reports .error() calls
		REPORT_WARN: 2, // reports .warn() calls
		REPORT_DEBUG: 4, // reports .debug() calls and .log() calls
		REPORT_LOG: 4, // reports .debug() calls and .log() calls
		REPORT_INFO: 8, // reports .info() calls
		REPORT_ALL: 1 + 2 + 4 + 8, // reports all calls

		/**
		 * addAdapter Adds new adapter to be managed by GlideLog
		 * @param _adapter {Object} Object that should implement methods: info, debug, warn, error, log
		 * @param _level {number} Reporting level for added adapter (see defined constants)
		 */
		addAdapter: function (_adapter, _level) {
			this.adapters.push({
				adapter: _adapter,
				reportingLevel: _level
			});
		},

		/**
		 * info Sends log message with type info
		 * @param _msg {string} Log message
		 */
		info: function (_msg) {
			logAll.call(this, 'info', _msg);
		},

		/**
		 * debug Sends log message with type debug
		 * @param _msg {string} Log message
		 */
		debug: function (_msg) {
			logAll.call(this, 'debug', _msg);
		},

		/**
		 * warn Sends log message with type warn
		 * @param _msg {string} Log message
		 */
		warn: function (_msg) {
			logAll.call(this, 'warn', _msg);
		},

		/**
		 * error Sends log message with type error
		 * @param _msg {string} Log message
		 */
		error: function (_msg) {
			logAll.call(this, 'error', _msg);
		},

		/**
		 * log Sends log message with type log
		 * @param _msg {string} Log message
		 */
		log: function (_msg) {
			logAll.call(this, 'log', _msg);
		}
	};

	/**
	 * logAll Pushes log to all added adapters
	 * @param _type {string} Log type (possible values are log, info, debug, warn, error)
	 * @param _msg {string} Log message
	 */
	function logAll(_type, _msg) {
		for (var i = 0; i < this.adapters.length; i++) {
			var adapter = this.adapters[i].adapter;
			var adapterReportingLevel = this.adapters[i].reportingLevel;
			var typeReportingLevel = this['REPORT_' + _type.toUpperCase()];

			if (adapterReportingLevel & typeReportingLevel) {
				adapter[_type](_msg);
			}
		}
	}

	return new GlideLog();
});