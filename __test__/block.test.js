const  { Block, Transaction, Blockchain }  = require("../blockchain");
const SHA256 = require('crypto-js/sha256');

describe("Block", () => {
  test("when new block is created, the timestamp is the time when it was created", () => {
    const timestamp = Date.now();
    const testBlock = new Block();
    expect(testBlock.timestamp).toEqual(timestamp);
  })
  test("when new block is created, transactions is an array", () => {
    const testBlock = new Block(new Transaction(1, 2, 3));
    const fromAddress = 1;
    const toAddress = 2;
    const amount = 3;
    expect(testBlock.transactions).toEqual({ fromAddress, toAddress, amount });
  })
  test("when new block is created, previousHash is empty string", () => {
    const testBlock = new Block();
    expect(testBlock.previousHash).toBe("");
  })
  test("when new block is created, nonce is 0", () => {
    const testBlock = new Block(new Transaction(1, 2, 3));
    expect(testBlock.nonce).toBe(0);
  })
  test("when new block is created, hash is the return value of calculateHash", () => {
    const testBlock = new Block(new Transaction(1, 2, 3));
    const { previousHash, timestamp, transactions, nonce } = testBlock;
    const expected = SHA256(previousHash + timestamp + JSON.stringify(transactions) + nonce).toString();
    expect(testBlock.hash).toBe(expected);
  })
})

describe("Blockchain", () => {
  test("when a new blockchain is created, the chain is the genesisblock", () => {
    const testBlockchain = new Blockchain;
    expect(testBlockchain.chain).toEqual([new Block(null, "0")])
  })
})