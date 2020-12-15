/*
TODO:re-add "O cockroach of the basement"




*/
const Discord = require("discord.js"); // imports the discord library
const keepAlive = require('./server');
const wisdomCM = require('./wisdom');
const roastCM = require('./roasts')
const TimeUnit = require("timeunit")
const sleep = require('sleep')
const fs = require("fs"); // imports the file io library
const { stringify } = require("querystring");
const client = new Discord.Client(); // creates a discord client
client.once("ready", () => { // prints "Ready!" to the console once the bot is online
  console.log("Ready!");
  client.channels.cache.get('788263463708524554').send('RESTARTED, VERSION beta.0.5 <@&788322884158095360>');
});

function randint(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function rickRoll(){
     message.channel.send("|| *badumbudubudum*\nWe're no strangers to love\nYou know the rules, and so do I\nA full commitment's what I'm thinking of\nYou wouldn't get this from any other guy\nOk you got rickrolled bye ||");
}

var idiot = "781122488217501723"; //strike 1 role
var neat = "530188818733727774"; //probably gavin
var prefix = "?";

client.on("message", message => {
    if (message.content == 'where banana'){
        message.channel.send('https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/271157_2200-732x549.jpg')
    }
    if (message.content == 'ooga booga'){
        message.channel.send('https://i.redd.it/oj7w9292r3k21.jpg')
        sleep.sleep(3)
        message.channel.send("r!warn <@"+ message.author + ">")
    }


  //getting the command and arguments
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  //if it dosent start with prefix, exit
  const args = message.content.slice(prefix.length).trim().split(' ');
  // get the arguments of the message
  const command = args.shift().toLowerCase();
  // remove the first argument (aka the command)
  console.log(args) //because yes
  //the commands
  if (command == "wisdom") {
    message.channel.send(wisdomCM.showerThought())
  }
  if (command == "idiot") {
    if (message.sender == '746363850999332924' || args[0] == '<@!746363850999332924>') { //whoever has strike 1 role will get the reply below
      message.channel.send("may be an idiot, def not a weeb")
      return
    }
    if (message.sender == neat) {
      message.channel.send("no")
    }
    else {
      var idi = randint(0, 100)
      console.log(idi)
      if (idi > 50) {
        message.channel.send("no");
      }
      if (idi < 50) {
        message.channel.send("yes");
      }
      if (idi < 5) {
        setTimeout(function(){
          message.channel.send("||*badumbudubudum*\nWe're no strangers to love\nYou know the rules, and so do I\nA full commitment's what I'm thinking of\nYou wouldn't get this from any other guy\nOk you got rickrolled bye ||")
        }, 2000) //ok perfect
             }
    };
  }
  if (command == "roast") {
    message.channel.send(roastCM.roastCM()) 
    //the function name is the word that comes after 'exports.' (as in exports.*roastCM* = roasted)
    //in the js, and the library name is the variable name of the require() (eg const roastCM = require(./roasts))
    //hope that helps
  }
  if (command == "help") {
    message.channel.send("Prefix: `?`\nCommands: \nidiot: Checks if you are an idiot or not \nwisdom: Gives you wisdom\n\nthats it")
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