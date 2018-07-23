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
  // private_key = "cd67a2cbe1e4a555f7b6da3ef2fb357dc026943cc5c2bf5b85c48b8348a600d0"  //original key
  private_key= "a3c0074742371bfbfa3b2ffae0cac027ab1dcecb49fa0c7ea34f640aa89b3dd4"  //metamask acc key


  privateKey = Buffer.from(this.private_key, 'hex');
  account;balance;transaction_count;code_at;GBTC;estimated_gas;value_before;_nonce;value_after

  constructor() {
    this.web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/Vr1GWcLG0XzcdrZHWMPu'));
    let account = '0x4d8d095fc69Afedd24aA121f75C0Fa43D33F3706'; // Ganache
    let contractAddress = '0x44524dfd5d99240c659795cc0466b9d485174c56'; // Deployed manually
    let abi = [{"constant":true,"inputs":[],"name":"a","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_a","type":"uint32"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"}];

    const contract = new this.web3.eth.Contract(abi, contractAddress, {
      from: account,
      gasLimit: 3000000,
    });
    


    try {
      let meta = this;  
      const obj = this.web3.eth.accounts.privateKeyToAccount("0x"+this.private_key);
      console.log(obj);
      
      this.account = obj["address"];

      const contract = new this.web3.eth.Contract(abi, contractAddress, {
        from: this.account,
        gasLimit: 3000000,
      });

      const contractFunction = contract.methods.set(18);
      const functionAbi = contractFunction.encodeABI();
  
      let estimatedGas;
      let nonce;
      console.log("Getting gas estimate");
    
      contractFunction.estimateGas({from: this.account}).then((gasAmount) => {
        estimatedGas = gasAmount.toString(16); 
        this.estimated_gas=estimatedGas
      
        console.log("Estimated gas: " + estimatedGas);})
      


      this.web3.eth.getBalance(this.account).then(bal => this.balance = bal );
      this.web3.eth.getTransactionCount(this.account).then(tcount => this.transaction_count = tcount);
      this.web3.eth.getCode("0x44524dfd5d99240c659795cc0466b9d485174c56").then(code_at => this.code_at = code_at)      this.web3.eth.getBlockTransactionCount("latest",function(err,data){
        meta.GBTC = data; 
      })

      contract.methods.get().call().then(v =>this.value_before=v);
      this.web3.eth.getTransactionCount(this.account).then(_Nonce => {
        this._nonce = _Nonce.toString(16);
    
        console.log("Nonce: " + this._nonce);
       
        const txParams  = {
          nonce: '0x' + nonce,
          gasPrice:  '493E0',
          gasLimit: 4000000,
          to: contractAddress,
          value: '0x00',
          data: functionAbi
        } 

        const tx = new Tx(txParams);
        tx.sign(this.privateKey);
        var serializedTx = tx.serialize();
        const temp_data=serializedTx.toString('hex');
        console.log(temp_data);
 
      this.web3.eth.sendSignedTransaction('0x' + temp_data).on('receipt', console.log);

        contract.methods.get().call().then(v => this.value_after= v);


  })
      
    } catch (error) {
      console.log(error);
      
    }

 
  }
}
