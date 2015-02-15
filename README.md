
# <a href="https://github.com/eskypl/glide"><img src="https://raw.github.com/eskypl/glide/master/assets/glide-logo.png" alt="Glide" width="84"></a> Log

JavaScript debug plugin(console.log) for RequireJS.

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

To disable reporting just add to the body site

```html
<script type="text/javascript">
	var ibeConfig = {
		development: false
	};
</script>
```

## Usage

```js
define([
  'example',
  'debug'
], function ($example, debug) {
  debug.log('replaces the "console.log".');
  debug.debug('replaces the "console.debug".');
  debug.info('replaces the "console.info".');
  debug.warn('replaces the "console.warn".');
  debug.error('replaces the "console.error".');
});
```

## TODO

## Contributing

## License