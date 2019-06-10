import { Age } from '../src/spaceAge.js'

const secsInYear = 365 * 24 * 60 * 60;

describe ('LifeExpectancy', function() {
   let testEarthAge;
   let testLifeExpecctancy;

   beforeEach(function(){
     testEarthAge = 35;
     testlifeExpectancy = 75;

    let earthYearsLeft = (testLifeExpectancy - testEarthAge);
  });

  it('should test if life expectancy on Mars is correct', function() {
    let age = (testEarthAge / .24);
    let lifeExpectancy = (testLifeExpectancy / .24);
    expect(person.getMars)
  })


})
