// Global properties
const Web3 = require("web3");
const EtheriumTransaction = require("ethereumjs-tx");
const web3 = new Web("HTTP://127.0.0.1:7545");

// Set the sending and recieving address
const sendingAddress = "0xAd858eb3A7bA1E39763e93AF778Bbb82589Dc256";
const recievingAddress = "0xC6A3e83660DA51aB2335Ae6E94a40a97D6f7E697";


// check the balancae on each transaction
web3.eth.getBalance(sendingAddress).then(console.log);
web3.eth.getBalance(recievingAddress).then(console.log);

// Set up the transactions using the transaction varible
let rawTransaction = {
	nonce: 0,
	to: recievingAddress,
	gasPrice: 20000000,
	gasLimit: 30000,
	value: 100,
	data: ""
};

// Sign the transaction with the hex value of the private key of the sender
const privateKeySender = "aae6e49d79120e18e85d53ab6366537e0d7e4ff46f2389127202e03eb921864a";
const privateKeySenderHex = new Buffer(privateKeySender, "hex");
const transaction = new EtheriumTransaction(rawTransaction);
transaction.sign(privateKeySenderHex);

