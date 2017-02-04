var subheader = document.getElementById("subheader");

var subheaderArray = [
  'CSS wizard 🎩🐰',
  'I\'m alright. 🙃',
  'Not a robot. 🤖',
  'Deserves a 💯',
  'Just 👌',
  'The truth is out there 👽'
];
var randomNumber = Math.floor(Math.random() * subheaderArray.length);

subheader.innerHTML = subheaderArray[randomNumber];
