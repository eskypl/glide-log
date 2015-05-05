
# <a href="https://github.com/eskypl/glide"><img src="https://raw.github.com/eskypl/glide/master/assets/glide-logo.png" alt="Glide" width="84"></a> Log

JavaScript aggregator for using multiple logging adapters.
Any log message that will be sent by it will be pushed to all registered adapters.
Supports different reporting levels for each adapter.
To simplify usage and integration, glide-log implements window.console interface (log, info, debug, warn, error methods).

## Instalation

`npm install glide-log --save`

## Configuration

Minimal configuration for RequireJS is needed. RequireJS `paths` config variable
has to include property `debug` with given path to script.

### Development and Build

Following code should be used in development and build.

```js
require.config({
  paths: {
    debug: 'node_modules/glide-log/index'
  }
});
```

## Usage

```js
define([
  'debug'
], function (debug) {
  // adds window.console which is a native logging adapter for browsers
  // and sets its reporting level to report error and warn logs
  debug.addAdapter(window.console, debug.REPORT_ERROR | debug.REPORT_WARN);

  debug.log('simple log message'); // won't be sent to the browser console
  debug.debug('debugging message for developer'); // won't be sent to the browser console
  debug.info('simple informing message'); // won't be sent to the browser console
  debug.warn('message with a warning'); // will be sent to the browser console
  debug.error('message with an error'); // will be sent to the browser console
});
```

## TODO

## Contributing

## License