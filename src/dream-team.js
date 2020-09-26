

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)){return false}
  let arr = members.map(function(name){
if(typeof name == "string"){
  if(!(name.charAt(0) === " ")){
    return name.slice(0, 1).toUpperCase()
  }else{
    let notEmptyName = name
    while(notEmptyName.charAt(0) === " "){
      notEmptyName = notEmptyName.slice(1,notEmptyName.length)
    }return notEmptyName.slice(0, 1).toUpperCase()
  }
}
  })


  return arr.sort().join('')
}
