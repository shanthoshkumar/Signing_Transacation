import { Component } from '@angular/core';
import * as Web3 from 'web3';
import * as Tx from 'ethereumjs-tx';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  title = 'app';
  web3 = null;
  private_key = "cd67a2cbe1e4a555f7b6da3ef2fb357dc026943cc5c2bf5b85c48b8348a600d0"
  privateKey = Buffer.from(this.private_key, 'hex');
  account;balance;

  constructor() {
    this.web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/Vr1GWcLG0XzcdrZHWMPu'));
    let account = '0x4d8d095fc69Afedd24aA121f75C0Fa43D33F3706'; // Ganache
    let contractAddress = '0x44524dfd5d99240c659795cc0466b9d485174c56'; // Deployed manually
    let abi = [{"constant":true,"inputs":[],"name":"a","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_a","type":"uint32"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"}];

    const contract = new this.web3.eth.Contract(abi, contractAddress, {
      from: account,
      gasLimit: 3000000,
    });
    
    // const contractFunction = contract.methods.set(18);
    // const functionAbi = contractFunction.encodeABI();

    // let estimatedGas;
    // let nonce;
    
    // console.log("Getting gas estimate");
    
    // contractFunction.estimateGas({from: account}).then((gasAmount) => {
    //   estimatedGas = gasAmount.toString(16);
    
    //   console.log("Estimated gas: " + estimatedGas);
    
    //   this.web3.eth.getTransactionCount(account).then(_nonce => {
    //     nonce = _nonce.toString(16);
    
    //     console.log("Nonce: " + nonce);
    //     const txParams = {
    //       gasPrice: '493E0',
    //       gasLimit: 4000000,
    //       to: contractAddress,
    //       data: functionAbi,
    //       from: account,
    //       nonce: '0x' + nonce
    //     };
    
    //     const tx = new Tx(txParams);
    //     tx.sign(this.privateKey);
    
    //     const serializedTx = tx.serialize();
    
    //     contract.methods.get().call().then(v => console.log("Value before increment: " + v));
    
    //     this.web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', receipt => {
    //       console.log(receipt);
    //       contract.methods.get().call().then(v => console.log("Value after increment: " + v));
    //     })
    //   });
    // });


    try {

      const obj = this.web3.eth.accounts.privateKeyToAccount("0x"+this.private_key);
      console.log(obj);
      
      this.account = obj["address"];

      this.web3.eth.getBalance(this.account).then(bal => this.balance = bal );
      
    } catch (error) {
      console.log(error);
      
    }

  }
}
