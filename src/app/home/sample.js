const Web3 = require('web3');
const Tx = require('ethereumjs-tx');

const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/Vr1GWcLG0XzcdrZHWMPu"));

const account = '0x6814b126eEbeED353A8D9e1bDCaC422f6F0A339e'; // Ganache
const privateKey = Buffer.from('a3c0074742371bfbfa3b2ffae0cac027ab1dcecb49fa0c7ea34f640aa89b3dd4', 'hex');
const contractAddress = '0x44524dfd5d99240c659795cc0466b9d485174c56'; // Deployed manually
const abi = [{"constant":true,"inputs":[],"name":"a","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_a","type":"uint32"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"}];

const contract = new web3.eth.Contract(abi, contractAddress, {
  from: account,
  gasLimit: 3000000,
});

const contractFunction = contract.methods.set(8);

const functionAbi = contractFunction.encodeABI();

let estimatedGas;
let nonce;

console.log("Getting gas estimate");

contractFunction.estimateGas({from: account}).then((gasAmount) => {
  estimatedGas = gasAmount.toString(16);

  console.log("Estimated gas: " + estimatedGas);

  web3.eth.getTransactionCount(account).then(_nonce => {
    nonce = _nonce.toString(16);

    console.log("Nonce: " + nonce);
    const txParams = {
      gasPrice: '0x09184e72a0',
      gasLimit: 4000000,
      to: contractAddress,
      data: functionAbi,
      from: account,
      nonce: '0x' + nonce
    };

    const tx = new Tx(txParams);
    tx.sign(privateKey);

    const serializedTx = tx.serialize();

    contract.methods.get().call().then(v => console.log("Value before increment: " + v));

    web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', receipt => {
      console.log(receipt);
      contract.methods.get().call().then(v => console.log("Value after increment: " + v));
    })
  });
});