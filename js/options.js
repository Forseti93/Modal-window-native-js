"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Options = function () {
  function Options(height, width, bg, fontSize, textAlign) {
    _classCallCheck(this, Options);

    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }

  _createClass(Options, [{
    key: "createDiv",
    value: function createDiv(text) {
      var newDiv = document.createElement("div");
      document.body.appendChild(newDiv);
      var cssStyles = "height:" + this.height + "px;\n    width:" + this.width + "px;\n    background-color:" + this.bg + ";\n    font-size:" + this.fontSize + "px;\n    text-align:" + this.textAlign + ";";
      newDiv.textContent = text;
      newDiv.style.cssText = cssStyles;
    }
  }]);

  return Options;
}();

var item = new Options(300, 350, "red", 34, "center");
item.createDiv("Div created with class Options. *see options.js file");