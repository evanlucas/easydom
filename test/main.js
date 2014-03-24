var dom = require('../')
var test = require('tape')

test('setup', function(t) {
  var btn = document.createElement('button')
  btn.setAttribute('type', 'button')
  btn.setAttribute('class', 'btn-clicker')
  dom.setText(btn, 'Click Me')
  var title = document.createElement('h1')
  title.setAttribute('class', 'theTitle')
  var para = document.createElement('p')
  para.setAttribute('class', 'para')
  para.innerHTML = '<div>This is a test</div>'
  var item = document.createElement('p')
  item.setAttribute('class', 'full')
  dom.setText(item, 'NAME')
  document.body.appendChild(btn)
  document.body.appendChild(title)
  document.body.appendChild(para)
  document.body.appendChild(item)
  t.end()
})

test('on', function(t) {
  var btn = document.querySelector('.btn-clicker')
  t.ok(btn, 'btn exists')
  dom.on(btn, 'click', function(e) {
    t.ok(e !== null, 'btn event exists')
    t.end()
  })

  btn.click()
})

test('setText', function(t) {
  var title = document.querySelector('.theTitle')
  dom.setText(title, 'HBC')
  t.equal(title.textContent, 'HBC')
  t.end()
})

test('remove', function(t) {
  var clicker = document.querySelector('.btn-clicker')
  dom.remove(clicker)
  var cli = document.querySelector('.btn-clicker')
  t.equal('object', typeof cli, 'should be empty')
  t.end()
})

test('empty', function(t) {
  var para = document.querySelector('.para')
  dom.empty(para)
  t.equal(para.innerHTML, '', 'Should empty innerHTML')
  t.end()
})

test('css', function(t) {
  var item = document.querySelector('.full')
  dom.css(item, 'color', 'blue')
  var color = item.style['color']
  t.equal(color, 'blue', 'Should set color to blue')
  t.end()
})
