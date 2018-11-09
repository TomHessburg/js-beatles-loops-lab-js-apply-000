// add solution here

function theBeatlesPlay(musician, instruments){
  var empty = [];
    for(let i=0; i>musician.length; i++){
      var current =`${musician[i]} plays ${instruments[i]}`;
      empty.push(current);
    }
  return empty;  
}