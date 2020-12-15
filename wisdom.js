var wisdomList = 
["Calling something overrated is just saying you disagree with the popular opinion.",
"If you failed at something nobody has ever failed before, then you have accomplished something nobody has ever accomplished.", 
"If EA suffers big enough losses from the backlash of Battlefront 2, and it all started because some guy couldn't unlock Vader, this will be the second time Anakin brought balance to something.",
"Gummy worms have more bones in them than actual worms.",
"The syllables in “on your mark, get set, go” are a countdown",
"Lamps in Videogames use real electricity.",
"On a galactic scale, amber and pearl are far rarer than gold and diamonds because they require life.",
"There is no physical evidence to say that today is Wednesday, we all just have to trust that someone has kept count since the first one ever.",
"Baby Yoda's first word probably came after his second word",
"Replying 'k' in morse '-.-', has the same passive aggressive tone",
"If you think a new television's picture looks mind blowing in an ad on yours, you don't need a new television.",
"There can be a genius that is just not known due to poverty",
"You are probably the best at something, even if it hasn't been invented yet",
"People's names are just specific sounds you make with your mouth to call someone's attention (suggested by :tomato:)",
"You are probably the worst at something, even if it hasn't been invented yet",
"Error: User above is an idiot",
"Error: User above is cute UwU",
"The meaning of some words and emojis change as you get older ('Daddy' and :eggplant:)",
"EMPTY sounds the same if you take out E; E and P; or even E P and Y.",
"We are all addicted to water and food, and the withdrawal symptom is death.",
"You can be blinded by the light and you can also be blinded by the lack of light.",
"Choosing a username that doesn't require you to add a number is the closest we'll come to an original thought",
"If humans were as intelligent as we think we are, we would agree on more things.",
"The universe is so unimaginably big that, theoretically, somewhere out there, Star Wars and Luke Skywalker could actually exist.",
"Bread and butter is a perfectly acceptable side, but the idea of a butter sandwich would disgust most people",
"Smartphones arent smart f||ucking|| dumb b||itches||",
"It's easier to make another $100,000 if you already have $1,000,000, but it's not easy to make another $10 if you only have $100.",
"The 3 wise men are the first persons to ever Christmas shop",
"Chewing ice is drinking water, but having to work harder for it.",
"When something blows up, it's doing really good, but when it bombs, it's doing horribly. However, when something is the bomb, its great, but it blowing up in your face is bad.",
"Satan and Santa are both red and have a realm for themselves.",
"Satan probably wouldnt treat sinners badly.",
"Dumb people are so arrogant because they never experience the humbling sensation of learning something new and then feel the 'click' in their head when they understand it.",
"The same things you would die to get are possibly the same things you’d live to keep.",
"Candle companies make various candles hoping you have money to burn.",
"Everything in the universe is either banana or not banana",
"claustrophobic people are fine with their brains being trapped in their skull"];

function showerThought(){
  var l = wisdomList.length;
  var r = Math.floor(Math.random() * (l - 0) ) + 0;
  return wisdomList[r];
};

exports.showerThought = showerThought;
