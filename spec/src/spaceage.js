const mercuryAge = .24;
const venusAge = .62;
const marsAge = 1.88;
const jupiterAge = 11.86;

  export class Age {

    constructor(earthAge, lifeExpectancy) {
      this.earthAge = earthAge;
      this.currentYear = currentYear;
      this.lifeExpectancy = lifeExpectancy;
    }

    getEarthAge() {
      return this.earthAge;
    }

    getlifeExpectancy() {
      return this.lifeExpectancy;
    }

    ageEarthToMercury() {
      return Math.floor(this.earthAge / mercuryAge);
    }

    ageEarthToVenus() {
      return Math.floor(this.earthAge / venusAge);
    }

    ageEarthToMars() {
      return Math.floor(this.earthAge / marsAge);
    }

    ageEarthToJupiter() {
      return Math.floor(this.earthAge / jupiterAge);
    }

    remainingLifeMercury() {
      return Math.abs(Math.floor((this.lifeExpectancy/mercuryAge) - (this.earthAge / mercuryAge)));
    }

    remainingLifeVenus() {
      return Math.abs(Math.floor((this.lifeExpectancy/venusAge) - (this.earthAge / venusAge)));
    }

    remainingLifeMars() {
      return Math.abs(Math.floor((this.lifeExpectancy/marsAge) - (this.earthAge / marsAge)));
    }

    remainingLifeJupiter() {
      return Math.abs(Math.floor((this.lifeExpectancy/jupiterAge) - (this.earthAge / jupiterAge)));
    }
  }
