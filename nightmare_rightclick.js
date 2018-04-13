/*add the code into ...lib/action.js where the nightmare’s folder in system*/

exports.contextmenu = function(selector, done) {
  debug('.contextmenu() on ' + selector);
  this.evaluate_now(function (selector) {
    document.activeElement.blur();
    var element = document.querySelector(selector);
    if (!element) {
      throw new Error('Unable to find element by selector: ' + selector);
    }
    var bounding = element.getBoundingClientRect();
    var event = new MouseEvent('contextmenu', {
        view: document.window,
        bubbles: true,
        cancelable: true,
        clientX: bounding.left + bounding.width / 2,
        clientY: bounding.top + bounding.height / 2,
    });
    element.dispatchEvent(event);
  }, done, selector);
};
