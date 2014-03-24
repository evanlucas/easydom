# easydom

Simple helpers for dom manipulation that provide IE8 support

**NOTE: Most of what is in here came from [http://substack.net/weaning_yourself_off_jquery](http://substack.net/weaning_yourself_off_jquery), so all credit should go to @substack**

[![browser support](https://ci.testling.com/evanlucas/easydom.png)
](https://ci.testling.com/evanlucas/easydom)

## Tests

```bash
$ npm test
```

## Usage

```js
var dom = require('easydom')
```

## API

### on(ele, event, fn)

```js
dom.on('.btn', 'click', function() {
  console.log('clicked!')
})
```

### setText(ele, str)

```js
dom.setText('.btn', 'Click Me!!!!')
```

### remove(ele)

```js
dom.remove('.btn')
```

### empty(ele)

```js
dom.empty('.text')
```

### css(ele, name, val)

```js
dom.css('.btn', 'width', '200px')
```
