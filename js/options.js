class Options {
  constructor(height, width, bg, fontSize, textAlign) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }
  createDiv(text) {
    const newDiv = document.createElement("div");
    document.body.appendChild(newDiv);
    const cssStyles = `height:${this.height}px;
    width:${this.width}px;
    background-color:${this.bg};
    font-size:${this.fontSize}px;
    text-align:${this.textAlign};`;
    newDiv.textContent = text;
    newDiv.style.cssText = cssStyles;
  }
}
const item = new Options(300, 350, "red", 34, "center");
item.createDiv("Text inside new div");
