class Shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="90" fill="${this.color}" />`
    }
}

// rpeeat for triangle and square but with their specific variables, then export 
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}
class Square extends Shape {
    render() {
        return `<rect width="190" height="190" fill="${this.color}" />`
    }
}


module.exports = { Circle, Triangle, Square }

//FIRST TRY AT CODE. ABOVE IS HELP RECEIVED FROM TUTOR. COMPARE TO LEARN MORE

// const { Console } = require("console");

// class Shape {
//     constructor() {
//         this.height = '200';
//         this.width = '300';
//     }

//     static startTag() {
//         const testShape = new Shape()
//         return `<svg width="${testShape.width}" height="${testShape.height}" version="1.1" xmlns="http://www.w3.org/2000/svg">`
//     }

//     static endTag() {
//         return `</svg>`
//     }
// }

// class Triangle extends Shape {
//     constructor() {
//         super()
//     }

//     static triCode(answers) {
//         return `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>
//     <text x="50%" y="70%" text-anchor="middle" font-size="2.7em" fill="${answers.textColor}">${answers.svgText}</text>`
//     }

//     static createTriangle(answers) {
//         return this.startTag() + this.triCode(answers) + this.endTag()
//      }
// }

// class Circle extends Shape {
//     constructor() {
//         super();
//     }

//     static cirCode(answers) {
//         return `<g><circle cx="150" cy="100" r="90" fill="${answers.shapeColor}"></circle>
//         <text x="50%" y="60%" text-anchor="middle" font-size="4.8em" fill="${answers.textColor}">${answers.svgText}</text></g>`
//     }

//     static createCircle(answers) {
//         return this.startTag() + this.cirCode(answers) + this.endTag()
//     }
// }

// class Square extends Shape {
//     constructor() {
//         super()
//     }
//     static sqCode(answers) {
//         return `<g><rect width="190" height="190" fill="${answers.shapeColor}"></rect>
//         <text x="33%" y="55%" text-anchor="middle" font-size="5em" fill="${answers.textColor}">${answers.svgText}</text></g>`
//     }
    
//     static createSquare(answers) {
//         return this.startTag() + this.sqCode(answers) + this.endTag()
//     }
// }

// module.exports = { Shape, Circle, Triangle, Square }