const { Console } = require("console");

class Shape {
    constructor (){
        this.height = '300';
        this.width = '200';
        console.log('Test me');
    }

 static startTag() { 
    console.log(this.height);
        console.log('Crazy good');
        return `<svg width="${this.width}" height="${this.height}" version="1.1" smlns="http://www.w3.org/2000/svg">`
    }
    
    static endTag() {
        console.log(this.height);
        return `</svg>`
    }
}
Shape.startTag()
class Triangle extends Shape {
    constructor() {
        this.name = "polygon"
    }
}

class Circle extends Shape {
    constructor(height){
        super(height);
        console.log(this.height);
        }

static cirCode() {
        console.log(this.height);
        // console.log(answers.shapeColor);
        // return `<g><circle cx="100" cy="150" r="90" fill="${answers.shapeColor}"></circle>
        // <text x="50%" y="50%" text-anchor="middle" fill="${answers.textColor}">${answers.svgText}</text></g>`
    }

    static createCircle(answers) {
        return super.startTag() + this.cirCode(answers) + this.endTag()
    }
}

class Square extends Shape {

}

module.exports = { Shape, Circle }