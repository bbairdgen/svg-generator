const fs = require('fs').promises
const inquirer = require('inquirer')
const { Circle, Triangle, Square } = require('./lib/shapes')
const SVG = require('./lib/svg')
const { writeFile } = require('fs/promises');

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

function writeToFile() {
    inquirer.prompt(questions)
        .then((answers) => {
            let shape;
            const svg = new SVG()
            switch (answers.shapeType) {
                case "Square":
                    shape = new Square();
                    svg.renderText(answers.svgText, answers.textColor, 33, 55, 5)
                    break;
                case "Circle":
                    shape = new Circle();
                    svg.renderText(answers.svgText, answers.textColor, 50, 60, 4.8)
                    break;
                    default: 
                    shape = new Triangle();
                    svg.renderText(answers.svgText, answers.textColor, 50, 70, 2.7)
                    break;
            }
            shape.setColor(answers.shapeColor)

            console.log(shape)
            svg.renderShape(shape)
            return writeFile('./examples/logo.svg', svg.renderSvg())
        })
        .then(() => console.log('success'))
        .catch((err) => console.log(err))
}

writeToFile()