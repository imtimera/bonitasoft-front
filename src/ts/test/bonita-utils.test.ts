import {randomColor, generateRandomBetween0and255}  from '../bonita-utils'

test('random color containts always rgb', () =>{
    expect(randomColor()).toContain('rgb')
})

test('RGB values in random color will always greater than 0', () =>{
    expect(generateRandomBetween0and255()).toBeGreaterThan(0)
})

test('RGB values in random color will always less or equals than than 255', () =>{
    expect(generateRandomBetween0and255()).toBeLessThanOrEqual(255)
})