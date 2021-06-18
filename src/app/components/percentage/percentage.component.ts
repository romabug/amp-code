import {Component, Input, OnChanges, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-percentage',
  templateUrl: './percentage.component.html',
  styleUrls: ['./percentage.component.css'],

})
export class PercentageComponent implements OnChanges {

  @Input()
  public inputText: string | number = 0;
  @Input()
  public decimalPlaces: string | number = 2;

  public decimalPlacesArg: string = '';


  ngOnChanges() {
    this.inputText = this.convertInputText(this.inputText);
    this.decimalPlacesArg = this.handleDecimalPlaces(this.decimalPlaces);
  }


  private convertInputText(percentText: string | number): number {

    if (!percentText) {
      console.warn(" no number input to this component");
      return 0;
    }

    let text: string = percentText.toString().trim();

    if (text.indexOf("%") >= 0) {
      return Number(text.replace("%", "").trim());

    } else {
      return Number(text) * 100;
    }

  }


  private handleDecimalPlaces(places: string | number): string {
    let placesArg: string;
    if (!places) {
      console.warn(" no decimalPlaces input to this component");
      placesArg = "." + this.decimalPlaces.toString() + "-" + this.decimalPlaces.toString();
      return placesArg;
    }

    placesArg = "." + places.toString() + "-" + places.toString();
    return placesArg;
  }


}
