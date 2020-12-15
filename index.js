/*



so what command do we add
or do we try to optimize

maybe ?roast





*/
const Discord = require("discord.js"); // imports the discord library
const keepAlive = require('./server');
const fs = require("fs"); // imports the file io library
const { stringify } = require("querystring");
const client = new Discord.Client(); // creates a discord client
client.once("ready", () => { // prints "Ready!" to the console once the bot is online
	console.log("Ready!");
  client.channels.cache.get('787971270448381983').send('RESTARTED, VERSION beta.0.2');
});

function randint(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}






var wisdom = 
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
"Candle companies make various candles hoping you have money to burn."];


var idiot = 746363850999332924;
var neat = 530188818733727774;

client.on("message", message => {
    if (message.content === "O cockroach of the basement, what is your wisdom?" || message.content === "?wisdom"){
        var r = randint(0, wisdom.length)
        message.channel.send(wisdom[r]);
    };
    if (message.content === "O cockroach of the basement, am i an idiot?" || message.content === "?idiot"){ // add no support later
        if (message.member.roles.cache.get == ('781122488217501723')){
            message.channel.send("oh absolutely yes f||lobber||ing idiot")
        }
        if (message.sender == neat){message.channel.send("no")}
        else { 
            var idi = randint(0,1)
              console.log(idi)
              if (idi == 0){message.channel.send("no")}
              if(message.member.roles.cache.get(''));
              else{message.channel.send("yes")} 
        };
    };
    if (message.content === "?help" || message.content === "O cockroach of the basement, what do you do?"){
      message.channel.send("Commands: \n?idiot: Checks if you are an idiot or not \n?wisdom: Gives you wisdom\n\nthats it")
    }
});

    
//?whatIsYourWisdom
keepAlive();
client.login(process.env.TOKEN); // starts the bot up

/*
find "O cockroach of the basement,"
check the words after that "What is your wisdom" "What is my IQ" etc

for what is your wisdom
generate number from 1-(whatever) 
find it in an array 'wisdom[0]'
then output there



*/