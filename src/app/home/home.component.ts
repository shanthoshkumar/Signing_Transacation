import { Component, OnInit } from '@angular/core';
// 
// import * as Web3 from 'web3';  
import Web3 from 'web3';
import { Routes, Router } from '@angular/router';
declare let require: any;
declare let window: any;
const EthereumTx = require('ethereumjs-tx')

var Buffer = require('buffer/').Buffer  // note: the trailing slash is important!
// // import  * as Buffer from 'buffer' 
// var buffer=Buffer;

 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public _web3;
  public  contractAddress = '0x44524dfd5d99240c659795cc0466b9d485174c56'; // Deployed manually
  public abi = [{"constant":true,"inputs":[],"name":"a","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_a","type":"uint32"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"}];
  public account = '0x6814b126eEbeED353A8D9e1bDCaC422f6F0A339e'; 
 public txParams;
 public privateKey;

  constructor() {
    if (typeof window.web3 !== 'undefined') {
      this._web3 = new Web3(window.web3.currentProvider);

      var contract = new this._web3.eth.Contract(this.abi, this.contractAddress, {
        from: this.account,
        gasLimit: 3000000,
      });
      
    } 

    var contractFunction = contract.methods
    alert(this._web3.version)
  this.privateKey = Buffer.from('a3c0074742371bfbfa3b2ffae0cac027ab1dcecb49fa0c7ea34f640aa89b3dd4', 'hex'); 
  // console.log(privateKey);


//     this._web3.eth.getAccounts(function(err,res){  
//   (document.getElementById('acc') as HTMLParagraphElement).innerHTML=res;
      

//       console.log("Account"+''+ res);
//   })


// this._web3.eth.getBalance("0x407d73d8a49eeb85d32cf465507dd71d507100c1",function(err,balance){
//   (document.getElementById('bal') as HTMLParagraphElement).innerHTML=balance;

//   console.log("Balance"+''+   balance);
// })


// this._web3.eth.getCode("0xd5677cf67b5aa051bb40496e68ad359eb97cfbf8",function(err,data){
//   (document.getElementById('code') as HTMLParagraphElement).innerHTML=data;

//   console.log("Code"+''+  data);
// })

// // this._web3.eth.getBlock(3150,function(err,res){
// //   (document.getElementById('block') as HTMLParagraphElement).innerHTML=res;

// //   console.log("Block"+''+  res);    
// // })

 
// this._web3.eth.getBlockTransactionCount(3150,function(error,result){
//   (document.getElementById('block_trans_count') as HTMLParagraphElement).innerHTML=result;

//   console.log("block_trans_count"+''+  result);
// })

// this._web3.eth.getAccounts(function(err,data){
//   console.log(data);
  
// })

// this._web3.eth.estimateGas({from: this.account},function(err,gas){
//   (document.getElementById('gas') as HTMLParagraphElement).innerHTML=gas;

//   console.log("Estimated Gas"+''+  gas)
// })


  
  this._web3.eth.getTransactionCount(this.account,function(err,_nonce){

  var nonce = _nonce.toString(16);
  (document.getElementById('trans_count') as HTMLParagraphElement).innerHTML=nonce;

  console.log("Nonce: " + nonce);
  this.txParams = {
    gasPrice: '600000000000',
    gasLimit: 4000000000,
    to: this.contractAddress,
    data: this.abi,
    from: this.account,
    nonce: '0x' + nonce
  };
})

  const tx = new EthereumTx(this.txParams);
  const privateKey = Buffer.from('a3c0074742371bfbfa3b2ffae0cac027ab1dcecb49fa0c7ea34f640aa89b3dd4', 'hex'); 
 

  tx.sign(privateKey);
  var temp= tx.sign(privateKey);
  


  const serializedTx = tx.serialize();
  this._web3.eth.accounts.privateKeyToAccount('0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709',function(err,data){alert("in...")})
  alert("success")

  this._web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', receipt => {
    console.log(receipt);
    // this.contract.methods.get().call().then(v => console.log("Value after increment: " + v));
  })


  

}
ngOnInit()
{
//  this.Fetch()
}


}
