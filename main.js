const { Blockchain, Transaction } = require("./blockchain");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const myKey = ec.keyFromPrivate("0e7f07a52f695a09a6b167d74ab3f4598a32377e321e977d5031828ebab5bcee");
const myWalletAddress = myKey.getPublic("hex");

let ayaCoin = new Blockchain();


const tx1 = new Transaction(myWalletAddress, "someones wallet address", 10);
tx1.signTransaction(myKey);
ayaCoin.addTransaction(tx1);



console.log("start mining...")
ayaCoin.minePendingTransactions(myWalletAddress);
ayaCoin.minePendingTransactions(myWalletAddress);


console.log("Balance of ayako is...", ayaCoin.getBalanceOfAddress(myWalletAddress));
console.log("Is chain valid", ayaCoin.isChainValid());