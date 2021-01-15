const Discord = require("discord.js")
const config = require("./config.json")
const bot = new Discord.Client();
const figlet = require('figlet');

bot.on("ready", () => {
  figlet('Made By Indian-Tech-Spport', (err, result) => {
    console.log(err || result)
  })
   console.log(bot.user.username + " is online.")
});

bot.on("message", async message => {
    if(message.content === `${config.prefix}nordvpn`) {
        
          let fs = require("fs");
      
          var NordVPN_File_Buffer = fs.readFileSync("./nordvpn.txt");
          var NordVPN_File_Buffer_To_String = NordVPN_File_Buffer.toString();
          var NordVPN_File_Buffer_Split_Lines = NordVPN_File_Buffer_To_String.split(
            "\n"
          );
      
          var lines = NordVPN_File_Buffer_Split_Lines.length - 1;
      
          if (lines === 0) {
            message.channel.send('We Out of Stock');
            return;
          }
      
          function procced() {
            fs.readFile("./nordvpn.txt", function read(err, data) {
              if (err) {
                throw err;
              }
      
              var rl = data.toString().split("\n");
              var item = rl[Math.floor(Math.random() * rl.length)];
              message.reply('check ur dms');
              //mentionHook.send("NordVPN: ||" + item + "||")
              message.author.send(`Here is your nord vpn acc ||${item}||`)
      
      
              const searchKeyword = item;
              let lastIndex = -1; 
      
              for (let index = 0; index < rl.length; index++) {
                if (rl[index].includes(searchKeyword)) {
                  lastIndex = index;
                  break;
                }
              }
      
              rl.splice(lastIndex, 1);
      
              const updatedData = rl.join("\n");
      
              fs.writeFile("./nordvpn.txt", updatedData, err => {
                if (err) throw err;
              });
            });
          }
      
        procced();
    }
})

bot.on("message", async message => {
  if(message.content === `${config.prefix}spotify`) {
      
        let fs = require("fs");
    
        var Spotify_File_Buffer = fs.readFileSync("./spotify.txt");
        var Spotify_File_Buffer_To_String = Spotify_File_Buffer.toString();
        var Spotify_File_Buffer_Split_Lines = Spotify_File_Buffer_To_String.split(
          "\n"
        );
    
        var lines = Spotify_File_Buffer_Split_Lines.length - 1;
    
        if (lines === 0) {
          message.channel.send('We Out of Stock');
          return;
        }
    
        function procced() {
          fs.readFile("./spotify.txt", function read(err, data) {
            if (err) {
              throw err;
            }
    
            var rl = data.toString().split("\n");
            var item = rl[Math.floor(Math.random() * rl.length)];
            message.reply('check ur dms');
            //mentionHook.send("Spoify: ||" + item + "||")
            message.author.send(`Here is your spotify acc ||${item}||`)
    
    
            const searchKeyword = item;
            let lastIndex = -1; 
    
            for (let index = 0; index < rl.length; index++) {
              if (rl[index].includes(searchKeyword)) {
                lastIndex = index;
                break;
              }
            }
    
            rl.splice(lastIndex, 1);
    
            const updatedData = rl.join("\n");
    
            fs.writeFile("./spotify.txt", updatedData, err => {
              if (err) throw err;
            });
          });
        }
    
      procced();
  }
})

bot.on("message", async message => {
  if(message.content === `${config.prefix}hulu`) {
      
        let fs = require("fs");
    
        var hulu_File_Buffer = fs.readFileSync("./hulu.txt");
        var hulu_File_Buffer_To_String = hulu_File_Buffer.toString();
        var hulu_File_Buffer_Split_Lines = hulu_File_Buffer_To_String.split(
          "\n"
        );
    
        var lines = hulu_File_Buffer_Split_Lines.length - 1;
    
        if (lines === 0) {
          message.channel.send('We Out of Stock');
          return;
        }
    
        function procced() {
          fs.readFile("./hulu.txt", function read(err, data) {
            if (err) {
              throw err;
            }
    
            var rl = data.toString().split("\n");
            var item = rl[Math.floor(Math.random() * rl.length)];
            message.reply('check ur dms');
            //mentionHook.send("NordVPN: ||" + item + "||")
            message.author.send(`Here is your hulu acc ||${item}||`)
    
    
            const searchKeyword = item;
            let lastIndex = -1; 
    
            for (let index = 0; index < rl.length; index++) {
              if (rl[index].includes(searchKeyword)) {
                lastIndex = index;
                break;
              }
            }
    
            rl.splice(lastIndex, 1);
    
            const updatedData = rl.join("\n");
    
            fs.writeFile("./hulu.txt", updatedData, err => {
              if (err) throw err;
            });
          });
        }
    
      procced();
  }
})

bot.on("message", async message => {
  if(message.content === `${config.prefix}steam`) {
      
        let fs = require("fs");
    
        var steam_File_Buffer = fs.readFileSync("./steam.txt");
        var steam_File_Buffer_To_String = steam_File_Buffer.toString();
        var steam_File_Buffer_Split_Lines = steam_File_Buffer_To_String.split(
          "\n"
        );
    
        var lines = steam_File_Buffer_Split_Lines.length - 1;
    
        if (lines === 0) {
          message.channel.send('We Out of Stock');
          return;
        }
    
        function procced() {
          fs.readFile("./steam.txt", function read(err, data) {
            if (err) {
              throw err;
            }
    
            var rl = data.toString().split("\n");
            var item = rl[Math.floor(Math.random() * rl.length)];
            message.reply('check ur dms');
            //mentionHook.send("NordVPN: ||" + item + "||")
            message.author.send(`Here is your steam acc ||${item}||`)
    
    
            const searchKeyword = item;
            let lastIndex = -1; 
    
            for (let index = 0; index < rl.length; index++) {
              if (rl[index].includes(searchKeyword)) {
                lastIndex = index;
                break;
              }
            }
    
            rl.splice(lastIndex, 1);
    
            const updatedData = rl.join("\n");
    
            fs.writeFile("./steam.txt", updatedData, err => {
              if (err) throw err;
            });
          });
        }
    
      procced();
  }
})

bot.on("message", async message => {
  if(message.content === `${config.prefix}crunchyroll`) {
      
        let fs = require("fs");
    
        var crunchyroll_File_Buffer = fs.readFileSync("./crunchyroll.txt");
        var crunchyroll_File_Buffer_To_String = crunchyroll_File_Buffer.toString();
        var crunchyroll_File_Buffer_Split_Lines = crunchyroll_File_Buffer_To_String.split(
          "\n"
        );
    
        var lines = crunchyroll_File_Buffer_Split_Lines.length - 1;
    
        if (lines === 0) {
          message.channel.send('We Out of Stock');
          return;
        }
    
        function procced() {
          fs.readFile("./crunchyroll.txt", function read(err, data) {
            if (err) {
              throw err;
            }
    
            var rl = data.toString().split("\n");
            var item = rl[Math.floor(Math.random() * rl.length)];
            message.reply('check ur dms');
            //mentionHook.send("NordVPN: ||" + item + "||")
            message.author.send(`Here is your crunchyroll acc ||${item}||`)
    
    
            const searchKeyword = item;
            let lastIndex = -1; 
    
            for (let index = 0; index < rl.length; index++) {
              if (rl[index].includes(searchKeyword)) {
                lastIndex = index;
                break;
              }
            }
    
            rl.splice(lastIndex, 1);
    
            const updatedData = rl.join("\n");
    
            fs.writeFile("./crunchyroll.txt", updatedData, err => {
              if (err) throw err;
            });
          });
        }
    
      procced();
  }
})



bot.login(config.token)