var fortunes = [
  'It is certain ',
  'It is decidedly so Without a doubt ',
  'Yes definitely ',
  'You may rely on it',
  'iAs I see it, yes',
  'Most likely',
  'Outlook good',
  'Yes',
  'Signs point to yes',
  'Ask again later',
  'Better not tell you now',
  'Cannot predict now',
  'Don\'t count on it',
  'My reply is no',
  'My sources say no',
  'Outlook not so good',
  'Very doubtful',
]
var readline = require('readline');
var r1 = readline.createInterface(process.stdin, process.stdout);

var name;
var question;
r1.question("What do you wish to know? ",  function(answer)
{
     name = answer;
     var fortune = fortunes[Math.floor(Math.random()*fortunes.length)];
     console.log(fortune);
     r1.close();
});
