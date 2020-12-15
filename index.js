/*
TODO:re-add "O cockroach of the basement"




*/
const Discord = require("discord.js"); // imports the discord library
const keepAlive = require('./server');
const wisdom = require('./wisdom');
const fs = require("fs"); // imports the file io library
const { stringify } = require("querystring");
const client = new Discord.Client(); // creates a discord client
client.once("ready", () => { // prints "Ready!" to the console once the bot is online
  console.log("Ready!");
  client.channels.cache.get('788263463708524554').send('RESTARTED, VERSION beta.0.3');
});

function randint(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var idiot = 781122488217501723;
var neat = 530188818733727774;
var prefix = "?"

client.on("message", message => {
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
    message.channel.send(wisdom.showerThought())
  }
  if (command == "idiot") {
    if (message.member.roles.cache.get('781122488217501723')) {
      message.channel.send("oh absolutely yes f||lobber||ing idiot")
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
    };
  }
  if (command == "help") {
    message.channel.send("Commands: \n?idiot: Checks if you are an idiot or not \n?wisdom: Gives you wisdom\n\nthats it")
  }

  /*
  old code:
  if (message.content === "O cockroach of the basement, what is your wisdom?" || message.content === "?wisdom") {
    message.channel.send(wisdom.showerThought());
  };
  if (message.content === "O cockroach of the basement, am i an idiot?" || message.content === '?idiot') {
    if (message.member.roles.cache.get('781122488217501723')) {
      message.channel.send("oh absolutely yes f||lobber||ing idiot")
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
    };
  };
  if (message.content === "?help" || message.content === "O cockroach of the basement, what do you do?") {
    message.channel.send("Commands: \n?idiot: Checks if you are an idiot or not \n?wisdom: Gives you wisdom\n\nthats it")
    */

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