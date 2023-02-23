// The SVG class is to create the rest of the SVG code
class SVG {

    // constructor elements used to pull the information from the Inquirer input. 
    constructor() {
        this.textEl = '';
        this.shapeEl = '';
    }

    //This method is used to creat the required full string of code for the SVG. 
    renderSvg() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"> ${this.shapeEl} ${this.textEl} </svg> `
    }

    //This method creates the text element in the renderSvg() method. It can pass multiple arguments to allow it to function for the different required sizes of text in each shape. 
    renderText(message, color, x, y, fontSize) {
        this.textEl = `<text x="${x}%" y="${y}%" text-anchor="middle" font-size="${fontSize}em" fill="${color}">${message}</text>`
    }

    //This method is used to create the shape element to be called in the renderSvg() method. it only passes the shape argument which is called from the shapes.js file. 
    renderShape(shape) {
        this.shapeEl = shape.render();
    }
}

//exports the entire class to the file that requires it. 
module.exports = SVG;