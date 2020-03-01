const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity) {
  let parseSample = parseFloat (sampleActivity);

  if (typeof(sampleActivity) === 'string' && parseSample>0 && parseSample<=MODERN_ACTIVITY) { 
    let age = Math.ceil((Math.log(MODERN_ACTIVITY/parseSample))/(0.693/HALF_LIFE_PERIOD));
    return age;
  } else {return false;}
};
