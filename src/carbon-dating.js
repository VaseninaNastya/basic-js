

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity != "string"){
        return false
    }
    let newNumber = Number(sampleActivity)
    let newString =String(newNumber)
    if(newString.length != sampleActivity.length)
    {
        return false
    }
    if(+sampleActivity < 1 )
    {
        return false
    }
    if ( sampleActivity.length == 0 ){
        return false
    }
    if(sampleActivity.includes(' ') != false){
        return false
    }
    if(+sampleActivity/3!=NaN){
        return false
    }
    let test1= sampleActivity.slice(0, 1)
    if(typeof +test1 != 'number'){
        return false
    }
    else{
        return Math.ceil((HALF_LIFE_PERIOD*MODERN_ACTIVITY)/sampleActivity)
    }
};
