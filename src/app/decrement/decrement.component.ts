import { Component, OnInit } from '@angular/core';

import { TestService } from '../Service/test.service';

@Component({
  selector: 'app-decrement',
  templateUrl: './decrement.component.html',
  styleUrls: ['./decrement.component.css']
})
export class DecrementComponent implements OnInit {
  public Count;
  // public private_key = 'a3c0074742371bfbfa3b2ffae0cac027ab1dcecb49fa0c7ea34f640aa89b3dd4'  //metamask acc key

  constructor(private ts:TestService)
  {
    this.ts.show_data().then(result =>this.Count=result)
  }

  update(private_key,data)
  {
    this.ts.decrement(private_key,data).then(result =>{
    alert('success')
    this.ts.show_data().then(res=>this.Count=res)
  });    
  }
 
  ngOnInit() {
  }

}
