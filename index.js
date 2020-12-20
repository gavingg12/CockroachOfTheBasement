/*
TODO:re-add "O cockroach of the basement"



*/


const Discord = require("discord.js"); // imports the discord library
const keepAlive = require('./server'); //Keeps alive
const wisdomCM = require('./wisdom');
const roastCM = require('./roasts')
const TimeUnit = require("timeunit")
const Database = require("@replit/database")
const talkedRecently = new Set();

const sleep = require('sleep')
const fs = require("fs"); // imports the file io library
const { stringify } = require("querystring");
const client = new Discord.Client(); // creates a discord client
client.once("ready", () => { // prints "Ready!" to the console once the bot is online
  console.log("Ready!");
  client.channels.cache.get('788263463708524554').send('RESTARTED, VERSION beta.0.13.4 <@&788322884158095360>');
});

const db = new Database() //DATABASE FILE, STORE USERDATA HERE


function randint(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function rickRoll(){
     message.channel.send("|| *badumbudubudum*\nWe're no strangers to love\nYou know the rules, and so do I\nA full commitment's what I'm thinking of\nYou wouldn't get this from any other guy\nOk you got rickrolled bye ||");
}

var idiot = "781122457423577099"; //strike 2 role
var neat = "530188818733727774"; //probably gavin
var prefix = "?";



client.on("message", async message => {
  //No prefix commands
    if (message.content == 'moo') { //if u say moo (you understand lol I'm dumb) then it will continue
      if (talkedRecently.has(message.author.id) && !message.author.bot) { //if you have talkedRecently then say message below
        return message.channel.send("Wait dude, you're on a 10 second cooldown rn, <@" + message.author + ">");
      } //if not, the command continues
      else { //this is the moo
        message.channel.send ("https://i.pinimg.com/originals/94/7a/23/947a23a2c15c1e1f05e4910c996f7458.jpg")
        talkedRecently.add(message.author.id); //makes you have cooldown
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 10000); //deletes cooldown after 10 second delay
      }//involves replacing the codes in different parts a lot
    }  
    if (message.content == 'where banana'){
      if (talkedRecently.has(message.author.id) && !message.author.bot) {
        return message.channel.send("Wait dude, you're on a 10 second cooldown rn, <@" + message.author + ">");
      }
      else {
        message.channel.send("here banana")
        message.channel.send('https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/271157_2200-732x549.jpg')
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 10000);
      }
    }
    if (message.content == 'ooga booga' || message.content == 'Ooga Booga.'){
      if (talkedRecently.has(message.author.id) && !message.author.bot) {
        return message.channel.send("Wait dude, you're on a 10 second cooldown rn, <@" + message.author + ">");
      }
      else {
        message.channel.send("Sorry pal, but")
        message.channel.send('https://i.redd.it/oj7w9292r3k21.jpg')
        message.channel.send("r!warn <@"+ message.author + "> no more ooga boogas for today")
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 10000);
      }
    }
    if (message.content == 'pop' || message.content == '*pop*' || message.content == '**pop**' || message.content == '***pop***') {
      if (talkedRecently.has(message.author.id) && !message.author.bot) {
        return message.channel.send("Wait dude, you're on a 10 second cooldown rn, <@" + message.author + ">");
      }
      else {
        message.channel.send("https://steamuserimages-a.akamaihd.net/ugc/841456062822553322/00F0AC3B343779C8BBBCF0FAC27BC9FDF9CBD7C6/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true")
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 10000);
      }
    }

  //getting the command and arguments
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  //if it dosent start with prefix, exit or if it's a bot
  const args = message.content.slice(prefix.length).trim().split(' '); //space after prefix
  // get the arguments of the message
  const command = args.shift().toLowerCase();
  // remove the first argument (aka the command)
  console.log(message.author + " " + command + args) //because yes
  

  //the commands
  if (command == "random") {
    if (!args.length) {
      return message.channel.send(`Random what, ${message.author}?`);
    }
    else if (args[0] == "number") {
        if (!args[1]) return message.reply("what numbers dummy"); //if no arguements

        range = args[1]
        
        if (range.indexOf("-")){
            minMax = range.split("-")
            min = parseInt(minMax[0])
            max = parseInt(minMax[1])
            console.log(min + "-" + max)
            r = randint(min, max)
            console.log(r)
            message.channel.send("I pick " + r + " :ok_hand:")
        }

        else if (args[1] == "any") {
        if (args[3]) {
          return message.reply("Too many arguements nerd, you only need to do `?random number any (extra)`")
        }
        if (args[2] == "positive") {
          var anyNumberRandomPositive = randint(1, 1000000000000)
          message.channel.send("I choose " + anyNumberRandomPositive + " :ok_hand:");
          return
        }
        else if (args[2] == "negative") {
          var anyNumberRandomNegative = randint(-1000000000000, -1)
          message.channel.send("I choose " + anyNumberRandomNegative + " :ok_hand:");
          return
        }
        var anyNumberRandom = randint(-1000000000000, 1000000000000)
          message.channel.send("I choose " + anyNumberRandom + " :ok_hand:");
        return
      }
    }
    else if (args[0] == "roll-the-die") {
      if (!args[1]) return message.reply("what die dummy");
      if (args[2]) {
        return message.reply("Too many arguements nerd, you only need to do `?random roll-the-die (type of die)`");
      }
      else if (args[1] == "D4") {
        var die4 = randint(1, 4)
        msg = await message.channel.send(":game_die: Rolling    :game_die:");
        setTimeout(function() {
          msg.edit(":game_die: Rolling.   :game_die:")
        }, 500);
        setTimeout(function() {
          msg.edit(":game_die: Rolling..  :game_die:")
        }, 500);
        setTimeout(function() {
          msg.edit(":game_die: Rolling... :game_die:")
        }, 500);
        setTimeout(function() {
          msg.edit("The game die has been rolled: ||" + die4 + "|| has faced upwards. :0")
        }, 1000);
        return
      }
      else if (args[1] == "D6") {
        var die6 = randint(1, 6)
        msg = await message.channel.send(":game_die: Rolling    :game_die:");
        setTimeout(function() {
          msg.edit(":game_die: Rolling.   :game_die:")
        }, 500);
        setTimeout(function() {
          msg.edit(":game_die: Rolling..  :game_die:")
        }, 500);
        setTimeout(function() {
          msg.edit(":game_die: Rolling... :game_die:")
        }, 500);
        setTimeout(function() {
          msg.edit("The game die has been rolled: ||" + die6 + "|| has faced upwards. :0")
        }, 1000);
        return
      }
      else if (args[1] == "D8") {
        var die8 = randint(1, 8)
        msg = await message.channel.send(":game_die: Rolling    :game_die:");
        setTimeout(function() {
          msg.edit(":game_die: Rolling.   :game_die:")
        }, 500);
        setTimeout(function() {
          msg.edit(":game_die: Rolling..  :game_die:")
        }, 500);
        setTimeout(function() {
          msg.edit(":game_die: Rolling... :game_die:")
        }, 500);
        setTimeout(function() {
          msg.edit("The game die has been rolled: ||" + die8 + "|| has faced upwards. :0")
        }, 1000);
        return
      }
      else if (args[1] == "D10") {
        var die10 = randint(1, 10)
        msg = await message.channel.send(":game_die: Rolling    :game_die:");
        setTimeout(function() {
          msg.edit(":game_die: Rolling.   :game_die:")
        }, 500);
        setTimeout(function() {
          msg.edit(":game_die: Rolling..  :game_die:")
        }, 500);
        setTimeout(function() {
          msg.edit(":game_die: Rolling... :game_die:")
        }, 500);
        setTimeout(function() {
          msg.edit("The game die has been rolled: ||" + die10 + "|| has faced upwards. :0")
        }, 1000)
        return
      }
      else if (args[1] == "D12") {
        var die12 = randint(1, 12)
        msg = await message.channel.send(":game_die: Rolling    :game_die:")
        setTimeout(function() {
          msg.edit(":game_die: Rolling.   :game_die:")
        }, 500)
        setTimeout(function() {
          msg.edit(":game_die: Rolling..  :game_die:")
        }, 500)
        setTimeout(function() {
          msg.edit(":game_die: Rolling... :game_die:")
        }, 500)
        setTimeout(function() {
          msg.edit("The game die has been rolled: ||" + die12 + "|| has faced upwards. :0")
        }, 1000)
        return
      }
      else if (args[1] == "D20") {
        var die20 = randint(1, 20)
        msg = await message.channel.send(":game_die: Rolling    :game_die:")
        setTimeout(function() {
          msg.edit(":game_die: Rolling.   :game_die:")
        }, 500)
        setTimeout(function() {
          msg.edit(":game_die: Rolling..  :game_die:")
        }, 500)
        setTimeout(function() {
          msg.edit(":game_die: Rolling... :game_die:")
        }, 500)
        setTimeout(function() {
          msg.edit("The game die has been rolled: ||" + die20 + "|| has faced upwards. :0")
        }, 1000)
        return
      }
      else {
        return message.channel.send("that die doesn't exist lol")
      }
    }
    else if (args[0] == "letter") {
      if (args[1]) {
        return message.reply("Too many arguements nerd, you only need to do `?random letter`");
      }
      const letters = "abcdefghijklmnopqrstuvwxyz"
      const Random = Math.floor(Math.random() * letters.length)
      return message.channel.send("I have chosen the letter `" + letters[Random] + "`.");
    }
  }
  if (command == "wisdom") {
    if (args[0]) {
      return message.reply("Too many arguements nerd, you only need to do `?wisdom`")
    }
    message.channel.send(wisdomCM.showerThought());
  }
  if (command == "idiot") {
    if (message.author == 781122457423577099 || args[0] == "<@!781122457423577099>") { //whoever has strike 2 role will get the reply below
      message.channel.send("definitely");
      return
    }
    if (message.author == 746363850999332924 || args[0] == "<@!746363850999332924>") { //nathan 746363850999332924
      var nathan = randint(0, 100)
      console.log(nathan)
      if (nathan > 11) {
        message.channel.send("yes");
      }
      if (nathan < 10) {
        message.channel.send("maybe");
      }
      return
    }
    if (args[0] == "<@!787192565757247538>" || args[0] == "<@!787970990210416742>") { //the bot 787192565757247538
      message.channel.send("I literally give you wisdom\nidiot");
      return
    }
    if (message.sender == neat) {
      message.channel.send("no")
    }
    else {
      var idi = randint(0, 100) // makes the value from 0-100
      console.log(idi)
      if (idi > 50) { //if the randomized value is greater than 50, no
        message.channel.send("no");
      }
      if (idi < 50) { //if the randomized value is less than 50, yes
        message.channel.send("yes");
      }
      if (idi < 3) { //3% chance to get rickrolled
        setTimeout(function(){
          message.channel.send("|| *badumbudubudum*\nWe're no strangers to love\nYou know the rules, and so do I\nA full commitment's what I'm thinking of\nYou wouldn't get this from any other guy\nOk you got rickrolled bye ||")
        }, 1000) //ok perfect
             }
    };
  }
  if (command == "roast") {
    if (args[0]) {
      return message.reply("Too many arguements nerd, you only need to do `?roast`")
    }
    message.channel.send(roastCM.roastCM()) 
    //the function name is the word that comes after 'exports.' (as in exports.*roastCM* = roasted)
    //in the js, and the library name is the variable name of the require() (eg const roastCM = require(./roasts))
    //hope that helps
  }
  if (command == "help") {
    if (args[0]) {
      return message.reply("Too many arguements nerd, we'll split the `?help` if there are a lot of commands.")
    }
    message.channel.send("Prefix: `?`\nCommands: \nidiot: Checks if you are an idiot or not \nwisdom: Gives you wisdom\nroast: Roasts you/sends a roast\nrandom (number [1-10, 1-100, any {positive, negative}]) (letter) (roll-the-die [type of die])\nping: Gives you your latency from you-server\n\nThat's it");
    return
  }
  if (command == "iq") {
    if (args[0]) {
      return message.reply("Too many arguements nerd, you only need to do `?iq`")
    }
     var iq = randint(0, 200);
     var iqstr = '' + iq
     if (!message.mentions.members.first()){
      message.channel.send("<@" + message.author + ">'s iq is " + iqstr)
     } else if(message.mentions.members.first()) {
         message.channel.send("<@" + message.mentions.members.first() + ">'s iq is " + iqstr)
     }// else if (args){
    //     message.channel.send(args[0] + "'s iq is " + iqstr)
    // } ADD LATER
      if (iq == 69) {
          message.channel.send("nice")
      }
  }
  if (command == "ping") {
    if (args[0]) {
      return message.reply("Too many arguements nerd, you only need to do `?ping`");
    }
      message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms\nOh, and pong`);
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