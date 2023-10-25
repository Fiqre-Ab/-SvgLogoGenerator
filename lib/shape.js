 class Shape{
    constructor(shapeColor,textColor,text){
     this.shapeColor=shapeColor;
     this.textColor=textColor;
     this.text=text
     
    }
   // Corrected setColor methods
  setShapeColor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  setTextColor(textColor) {
    this.textColor = textColor;
  }
}
class Triangle extends Shape {
  constructor(shapeColor, textColor, text) {
    super(shapeColor, textColor, text)
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
     <polygon points="100, 15 200, 200 0, 200"  fill="${this.textColor}" />
     <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.shapeColor}">${this.text}</text>
    </svg>`;
  }
}
class Square extends Shape{
    constructor(shapeColor,textColor,text){
  super(shapeColor,textColor,text);
}
render(){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="50" width="200" height="100" fill="${this.textColor}" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.shapeColor}">${this.text}</text>

</svg>`
  
 }
}


class Circle extends Shape {
   constructor(shapeColor,textColor,text){
  super(shapeColor,textColor,text);
}
render(){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="${this.textColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.shapeColor}">${this.text}</text>

</svg>`
}
}
 module.exports={Triangle,Square,Circle}