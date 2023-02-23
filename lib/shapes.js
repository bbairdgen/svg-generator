// This is the shape class. It needs a constructor to create the method. 
class Shape {
    constructor() {
        // As this constructor does not need to pass any arguments, this just identifies an empty string. This is so the input in Inquirer can passed as a sting.
        this.color = '';
    }

    // This method is used to set the color so it can be called by the children classes
    setColor(color) {
        this.color = color;
    }
}

// Child of Shape
class Circle extends Shape {
    // renders the specific code needed for the circle. the fill is created by calling the item from the parent.
    render() {
        return `<circle cx="150" cy="100" r="90" fill="${this.color}" />`
    }
}

// Child of Shape
class Triangle extends Shape {
    // renders the specific code needed for the circle. the fill is created by calling the item from the parent.
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

// Child of Shape
class Square extends Shape {
    // renders the specific code needed for the circle. the fill is created by calling the item from the parent.
    render() {
        return `<rect width="190" height="190" fill="${this.color}" />`
    }
}

// exports the children classes to whichever files require them. 
module.exports = { Circle, Triangle, Square }

//FIRST TRY AT CODE. THE CODE I AM ACTUALLY USING ABOVE TAUGHT ME HOW TO BETTER USE CLASSES AND METHODS. COMPARE TO LEARN MORE

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