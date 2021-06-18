import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageComponent } from './percentage.component';

describe('PercentageComponent', () => {
  let component: PercentageComponent;
  let fixture: ComponentFixture<PercentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('it should create percentage component', () => {
    expect(component).toBeTruthy();
  });


  it('it should accept type of number ', () => {
    component.inputText = 0.383838;
    component.decimalPlaces = 2;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.percentage-component__number').innerText).toEqual('0.384');
  });



  it('it should accept type of string ', () => {
    component.inputText = "0.383838";
    component.decimalPlaces = "2";
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.percentage-component__number').innerText).toEqual('0.384');
  });

  it('it should accept mixed type of string and number ', () => {
    component.inputText = "0.383838";
    component.decimalPlaces = 2;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.percentage-component__number').innerText).toEqual('0.384');
  });


});
