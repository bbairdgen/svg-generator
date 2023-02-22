const { Circle, Triangle, Square } = require('./shapes')

describe('Triangle', () => {
    describe('triangle', () => {
        it('should add red as the fill color for the shape', () => {
            const shape = new Triangle(); 
            shape.setColor("red");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="red" />')
        });
    });
});
describe('Circle', () => {
    describe('circle', () => {
        it('should add green as the fill color for the shape', () => {
            const shape = new Circle(); 
            shape.setColor("green");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="90" fill="green" />')
        });
    });
});
describe('Square', () => {
    describe('square', () => {
        it('should add #996799 as the fill color for the shape', () => {
            const shape = new Square(); 
            shape.setColor("#996799");
            expect(shape.render()).toEqual('<rect width="190" height="190" fill="#996799" />')
        });
    });
});

