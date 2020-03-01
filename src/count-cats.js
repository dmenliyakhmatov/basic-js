module.exports = function countCats(matrix) {
  let numberOfCats = 0;
  let catsArray = matrix.forEach((arr) => { 
      arr.forEach ((item) => {
       if (item==='^^') { numberOfCats++;}
      })
    });
  return numberOfCats;
};
