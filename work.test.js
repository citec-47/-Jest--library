
const stringReverse = require('./stringReverse.js')
const calculate = require('./calculating.js')
const characters = require('./characteristic.js')
const stringFromOneToten = require('./stringOneTo.js')
const LengthOfstring = require('./lnghtOfstring.js')

it('projects', ()=>{
     expect(1).toBe(1)
})

it(' string length', ()=>{
    expect(LengthOfstring('maurice')).toBe(7)
})

it(' char and <= 10 char', ()=>{
    expect(stringFromOneToten('dog')).toBe(3)
})

it('reverse', ()=>{
    expect(stringReverse('wow')).toBe('wow')
})


it('string of capitalise first ', ()=>{
    expect(characters('man')).toBe('Man')
})

describe('calculate', ()=>{
    test('addition test', ()=>{
        expect(calculate.add(3,5)).toBe(8);
        expect(calculate.add(8,5)).toBe(13);
        expect(calculate.add(13,5)).toBe(18);
        expect(calculate.add(18,5)).toBe(23);
    })

    test('multiplication test', ()=>{
        expect(calculate.mult(3,5)).toBe(15);
        expect(calculate.mult(5,5)).toBe(25);
        expect(calculate.mult(7,7)).toBe(49);
        expect(calculate.mult(6,8)).toBe(48);
    })


    test('division test', ()=>{
        expect(calculate.div(15,5)).toBe(3);
        expect(calculate.div(48,6)).toBe(8);
        expect(calculate.div(56,7)).toBe(8);
        expect(calculate.div(63,9)).toBe(7);
    })

    test('subtraction test', ()=>{
        expect(calculate.sub(15,5)).toBe(10);
        expect(calculate.sub(48,6)).toBe(42);
        expect(calculate.sub(56,7)).toBe(49);
        expect(calculate.sub(63,9)).toBe(54);
    })


})