import { Component, OnInit } from '@angular/core';
import  Web3 from 'web3';
import * as Tx from 'ethereumjs-tx';
  declare let require: any;
let Abi = require('../Service/test_abi.json')

import { TestService } from '../Service/test.service';
@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css']
})
export class IncrementComponent implements OnInit {
  web3 = null;
  // private_key = 'a3c0074742371bfbfa3b2ffae0cac027ab1dcecb49fa0c7ea34f640aa89b3dd4'  //metamask acc key
public Count;

  constructor(private ts:TestService){ 
        this.ts.show_data().then(res=>this.Count=res)
   }

 

  update(private_key,data)
  {
    this.ts.increment(private_key,data).then(result =>{
    alert('success')
    this.ts.show_data().then(res=>this.Count=res)
  });    
  }

  ngOnInit()
   { 
  }

}
