/**
 * Module dependencies
 */
var dom = exports

//
// NOTE: Most of these functions were taken from substack's post
// at http://substack.net/weaning_yourself_off_jquery
//

dom.on = function(ele, event, fn) {
  if (ele.addEventListener)
    return ele.addEventListener.apply(ele, [event, fn])
  return ele.attachEvent.apply(ele, [event, fn])
}

dom.setText = function(ele, str) {
  ele.appendChild(document.createTextNode(str))
}

dom.remove = function(ele) {
  ele.parentNode.removeChild(ele)
}

dom.empty = function(ele) {
  ele.innerHTML = ''
}

dom.css = function(ele, name, val) {
  if (!ele.style) ele.style = {}
  ele.style[name] = val
}
