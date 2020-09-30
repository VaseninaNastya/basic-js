

module.exports = function getSeason( date ) {
  if (date  == null){
    return  'Unable to determine the time of year!'
  }
  
  if ( !date.getTime()) {  
    return new Error('Unable to determine the time of year!');
  }
  

  
  let month = date.getMonth()
  if(month == 11 || month == 0 || month == 1 ){
    monthName = 'winter'
    return monthName
  }
  if(month == 2 || month == 3 || month == 4 ){
    monthName = 'spring'
    return monthName
  }
  if(month == 5 || month == 6 || month == 7 ){
    monthName = 'summer'
    return monthName
  }
  if(month == 8 || month == 9 || month == 10 ){
    monthName = 'autumn'
    return monthName
  }
  if(!'springsummerautumnwinter'.includes(monthName))
  {
    return new Error('Unable to determine the time of year!');
  }

}
