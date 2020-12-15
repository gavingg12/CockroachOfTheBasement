roastList = ["https://i.redd.it/5nzifzgxt9261.jpg"]

function roasted(){
  var l = roastList.length;
  var r = Math.floor(Math.random() * (l - 0) ) + 0;
  return roastList[r];
};
exports.roastCM = roasted;
