// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

venom
  .create({
    session: 'session-name' //name of session
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    if (message.body === 'Hello' && message.isGroupMsg === false) {
    // Send Messages with Buttons Reply
const buttons = [
  {
    "buttonText": {
      "displayText": "Reserve Ticket"
      }
    },
  {
    "buttonText": {
      "displayText": "View Time Sheets"
      }
    }
  ]


// Send List menu
const list = [
  {
    title: "Pasta",
    rows: [
      {
        title: "Ravioli Lasagna",
        description: "Made with layers of frozen cheese",
      }
    ]
  },
  {
    title: "Dessert",
    rows: [
      {
        title: "Baked Ricotta Cake",
        description: "Sweets pecan baklava rolls",
      },
      {
        title: "Lemon Meringue Pie",
        description: "Pastry filled with lemonand meringue.",
      }
    ]
  }
];

 client.sendListMenu(message.to, 'Title', 'subTitle', 'Description', 'menu', list)
.then((result) => {
  console.log('Result: ', result); //return object success
})
.catch((erro) => {
  console.error('Error when sending: ', erro); //return object error
});


    }
  });
}