roastList = ["Im pretty sure"]

function roasted(){
  var l = roastList.length;
  var r = Math.floor(Math.random() * (l - 0) ) + 0;
  return roastList[r];
};
