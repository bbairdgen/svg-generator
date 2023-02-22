const fs = require('fs').promises
const inquirer = require('inquirer')
const shapes = require('./lib/shapes')


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
            // console.log(answers);
            const circle = shapes.Circle.createCircle(answers)
            const triangle = shapes.Triangle.createTriangle(answers)
            const square = shapes.Square.createSquare(answers)
            if (answers.shapeType === 'Circle') {
                fs.writeFile('./examples/logo.svg', circle, (err) =>
                    err ? console.log(err) : console.log('Generated logo.svg'))
                } else if (answers.shapeType === 'Triangle') {
                fs.writeFile('./examples/logo.svg', triangle, (err) =>
                    err ? console.log(err) : console.log('Generated logo.svg'))
                } else if (answers.shapeType === 'Square'){
                    fs.writeFile('./examples/logo.svg', square, (err) =>
                        err ? console.log(err) : console.log('Generated logo.svg'))
                }
        })
}

writeToFile()