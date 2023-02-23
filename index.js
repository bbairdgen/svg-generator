//Variables used to run inquirer and the write file function.
const inquirer = require('inquirer')
const { writeFile } = require('fs/promises');

// variables to call the code written in the mentioned files

const { Circle, Triangle, Square } = require('./lib/shapes')
const SVG = require('./lib/svg')

//Inquirer questions
const questions = [
    {
        type: 'maxlength-input',
        name: 'svgText',
        message: 'Enter your text (max limit of 3 characters)',
        maxLength: 3
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter your text color choice. If you use a hexadecimal number please include # before the number.'
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter your shape color choice. If you use a hexadecimal number please include # before the number.'
    },
    {
        type: 'rawlist',
        name: 'shapeType',
        message: 'Pick the shape you would like your logo.',
        choices: ['Circle', 'Triangle', 'Square']
    }
];

//Function created to call inquirer questions and create the file. 
function writeToFile() {
    inquirer.prompt(questions)
        .then((answers) => {
            let shape;
            //Creates an instance of the SVG class
            const svg = new SVG()
            //This is an easier way to do if-else statements when choices are needed.
            switch (answers.shapeType) {
                case "Square":
                    //Creates a new instance of the Square class, when Square is selected.
                    shape = new Square();
                    //passes arguments to the SVG class
                    svg.renderText(answers.svgText, answers.textColor, 33, 55, 5)
                    break;
                case "Circle":
                    //Creates a new instance of the Circle class, when circle is selected.
                    shape = new Circle();
                    //passes arguments to the SVG class
                    svg.renderText(answers.svgText, answers.textColor, 50, 60, 4.8)
                    break;
                default:
                    //Creates a new instance of the triangle class, when triand is selected or if nothing is selected.
                    shape = new Triangle();
                    //passes arguments to the SVG class
                    svg.renderText(answers.svgText, answers.textColor, 50, 70, 2.7)
                    break;
            }
            // passes arugments to the setColor method in the Shape class.
            shape.setColor(answers.shapeColor)

            // console.log(shape)
            // Renders the actual shape
            svg.renderShape(shape)
            // creates the file in the desired location.
            return writeFile('./examples/logo.svg', svg.renderSvg())
        })
        // success message if the file is created.
        .then(() => console.log('success'))
        // error message if the file is not created.
        .catch((err) => console.log(err))
}

//initiates the function when node index.js is called in CLI.
writeToFile()