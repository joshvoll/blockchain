// Global properties
const Web3 = require("web3");
const EthereumTransaction = require("ethereumjs-tx").Transaction
const web3 = new Web3("HTTP://127.0.0.1:7545");

// Set the sending and recieving address
const sendingAddress = "0xAd858eb3A7bA1E39763e93AF778Bbb82589Dc256";
const recievingAddress = "0xC6A3e83660DA51aB2335Ae6E94a40a97D6f7E697";


// check the balancae on each transaction
web3.eth.getBalance(sendingAddress).then(console.log);
web3.eth.getBalance(recievingAddress).then(console.log);

// Set up the transactions using the transaction varible
/*
let rawTransaction = {
	nonce: 0,
	to: recievingAddress,
	gasPrice: 20000000,
	gasLimit: 30000,
	value: 100,
	data: ""
};
*/

var rawTransaction ={
    nounce: web3.utils.toHex(0),
    to: recievingAddress,
    gasPrice: web3.utils.toHex(20000000),
    gasLimit: web3.utils.toHex(30000),
    value: web3.utils.toHex(100),
    data: web3.utils.toHex("")
}

// Sign the transaction with the hex value of the private key of the sender
const privateKeySender = "aae6e49d79120e18e85d53ab6366537e0d7e4ff46f2389127202e03eb921864a";
const privateKeySenderHex = new Buffer.from(privateKeySender,'hex')
const transaction = new EthereumTransaction(rawTransaction);
transaction.sign(privateKeySenderHex);


// Send the serialize transactions to the etherium network
const serializedTransaction = transaction.serialize();
web3.eth.sendSignedTransaction(serializedTransaction);
