import {Component, OnInit, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class AppComponent implements OnInit {

  public inputValue1:any  = {
    'inputText': '55.55555%',
    'decimalPlaces': '1'
  }

  public inputValue2:any  = {
    'inputText': '0.65555',
    'decimalPlaces': '2'
  }

  public inputValue3:any  = {
    'inputText': 0.885555,
    'decimalPlaces': '3'
  }

  ngOnInit() {
  }


}
