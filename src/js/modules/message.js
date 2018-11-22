const myMessage = "Hello World";

const init = () => {
  messageMe(myMessage);
};

const messageMe = message => {
  alert(message);
};

export { init };
