roastList = 
["https://i.redd.it/5nzifzgxt9261.jpg",
"You're so bad at technology that this is what happens when you pick up a phone https://cdn.discordapp.com/attachments/743373419722309732/788352177134370816/pr58gj0l49561.png",
"You're about as useful as <@403419413904228352>",
"I think you'd do better as a garbage sorter, as it takes one to know one.",
"You're the type of person to search up one yt vid on the subject then call yourself knowledgeable on it.",
"If people were flowers you’d probably be an artichoke",
"Your pfp is so bad that i can kill you for that and not get charged because it would be self defense.",
""]

function roasted(){
  var l = roastList.length;
  var r = Math.floor(Math.random() * (l - 0) ) + 0;
  return roastList[r];
  console.log(r)
};
exports.roastCM = roasted;
