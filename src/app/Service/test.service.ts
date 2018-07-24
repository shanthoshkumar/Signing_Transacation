import { Injectable } from '@angular/core';
import  Web3 from 'web3';
import * as Tx from 'ethereumjs-tx';
declare let require: any;
let Abi = require('../Service/test_abi.json')
var Buffer = require('buffer/').Buffer 
@Injectable({
  providedIn: 'root'
})
export class TestService {
  public  web3=null;
  public contract:any;
  public contractAddress:string="0xde84c865dad9c1ce44c84fb2c7af268bae13fa7c";
  public owner:string="0x6814b126eEbeED353A8D9e1bDCaC422f6F0A339e";

  constructor() { 
    this.web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/Vr1GWcLG0XzcdrZHWMPu'));
    this.contract = new this.web3.eth.Contract(Abi, this.contractAddress, {
      from: this.owner,
      gasLimit: 3000000,
    }); 
  }


  public async getTransactionCount(): Promise<number> {

    return new Promise((resolve, reject) => { 
   this.web3.eth.getTransactionCount("0x6814b126eEbeED353A8D9e1bDCaC422f6F0A339e",function(err,result)
   {
    if(err!=null)
    {
      reject(err)
    }
    else
    {
     resolve(result)   
    } 
  });
}) as Promise<number>;
}




public async Generate_Account(key): Promise<string> {
  
  return new Promise((resolve, reject) => { 
    this.web3.eth.accounts.privateKeyToAccount('0x' + key,function(err,result)
  {
  if(err!=null)
  {
    reject(err)
  }
  else
  {
    var address = result['address'];
    //resolve(address) 
  } 
});
}) as Promise<string>;
}


  public async show_data(): Promise<number> {

    return new Promise((resolve, reject) => {      
      this.contract.methods.show_count().call(function(err,result) 
      {
       if(err!=null) 
       {
         reject(err)
    
       }
       else 
       {
         resolve(result) 
       }
      });
    }) as Promise<number>;
  }
 
  public async receive(input_key): Promise<string> {

    return new Promise((resolve, reject) => {  
     
      this.getTransactionCount().then(result=>{
       var  nonce = result.toString(16);

       const privateKey = Buffer.from(input_key,'hex'); 
       const obj = this.web3.eth.accounts.privateKeyToAccount('0x' + input_key);
       
       var senderAddress = obj['address'];
       const contractFunction = this.contract.methods.receive(senderAddress);  
       const functionAbi = contractFunction.encodeABI()
         var  txParams  = {
          nonce: '0x' +nonce,
          gasPrice:  '493E0',
          gasLimit: 4000000,
          from :senderAddress,
          to: this.contractAddress,
          value: '0x00',
          data: functionAbi
        }      
        var tx = new Tx(txParams);
        tx.sign(privateKey);
        const serializedTx = tx.serialize();
        this.web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', receipt =>{
       console.log(receipt);
       
         resolve(receipt['transactionHash']) 
      })
    })
    }) as Promise<string>;
  }


  

  public async increment(input_key,input): Promise<string> {

    return new Promise((resolve, reject) => {  
      const contractFunction = this.contract.methods.increment(input);  
      const functionAbi = contractFunction.encodeABI()

      this.getTransactionCount().then(result=>{
       var  nonce = result.toString(16);
 
       const privateKey = Buffer.from(input_key,'hex'); 
       const obj = this.web3.eth.accounts.privateKeyToAccount('0x' + input_key);
       var senderAddress = obj['address'];
         var  txParams  = {
          nonce: '0x' +nonce,
          gasPrice:  '493E0',
          gasLimit: 4000000,
          from :senderAddress,
          to: this.contractAddress,
          value: '0x00',
          data: functionAbi
        }      
        var tx = new Tx(txParams);
        tx.sign(privateKey);
        const serializedTx = tx.serialize();
        this.web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', receipt =>{
       console.log(receipt);
       
         resolve(receipt['transactionHash']) 
      })
    })
    }) as Promise<string>;
  }


  public async decrement(input_key,input): Promise<string> {

    return new Promise((resolve, reject) => {  
      const contractFunction = this.contract.methods.decrement(input);  
      const functionAbi = contractFunction.encodeABI()

      this.getTransactionCount().then(result=>{
       var  nonce = result.toString(16);

       const privateKey = Buffer.from(input_key,'hex'); 
       const obj = this.web3.eth.accounts.privateKeyToAccount('0x' + input_key);
       var senderAddress = obj['address'];
         var  txParams  = {
          nonce: '0x' +nonce,
          gasPrice:  '493E0',
          gasLimit: 4000000,
          from :senderAddress,
          to: this.contractAddress,
          value: '0x00',
          data: functionAbi
        }      
        var tx = new Tx(txParams);
        tx.sign(privateKey);
        const serializedTx = tx.serialize();
        this.web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', receipt =>{
       console.log(receipt);
       
         resolve(receipt['transactionHash']) 
      })
    })
    }) as Promise<string>;
  }
  

  }
