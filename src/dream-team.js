module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false
  }

  let firsLetters = members.map((name) => { 
    if( typeof(name) === 'string'){
    return name.toUpperCase().trim().split('').slice(0,1);
    }
  })

  let teamName = firsLetters.sort().join('');
  return teamName;
};