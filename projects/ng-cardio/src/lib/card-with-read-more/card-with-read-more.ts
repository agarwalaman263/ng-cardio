import { Component, OnInit, Input } from '@angular/core';
import { EachCardData } from './Model';

@Component({
  selector: 'card-with-read-more',
  template: `
  <ng-container>
  <div class="grid-container">
      <div *ngFor='let eachCard of this.CardDetailsArray; let i=index' class="each-card-container gradientBorder{{i%4}}">
          <div class="each-card">
              <div class="OverLayText">
                  <div>
                      {{eachCard?.overlayText}}
                  </div>
              </div>
              <div class="cardHeader">
                  {{eachCard?.cardHeader}}
              </div>
              <div>
                  {{eachCard?.belowHeader}}
              </div>
              <button class="read-more-button" (click)="this.expandContactWork(i)">
                      {{!this.stateOfExpands[i]?'Read More':'Read Less'}}</button>
              <div class="details" [ngClass]="{expand: this.stateOfExpands[i]}">
                  {{eachCard?.cardDetails}}
              </div>

          </div>
      </div>
  </div>
</ng-container>
`,
  styles: [`
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 350px);
    row-gap: 100px;
    column-gap: 100px;
    grid-template-rows: auto;
}

.each-card-container,
.gradientBorder0,
.gradientBorder1,
.gradientBorder2,
.gradientBorder3 {
    position: relative;
}

.each-card {
    background: rgb(32, 32, 45);
    background: linear-gradient(90deg, rgba(32, 32, 45, 1) 50%, rgba(23, 23, 25, 1) 50%);
    position: relative;
    padding: 1rem;
    box-sizing: border-box;
    height: 500px;
    overflow: hidden;
}

.each-card-container::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all 2s;
}

.each-card-container:hover:before {
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: 0;
    right: 0;
    transform: skew(2deg, 2deg);
}

.gradientBorder0:hover:before {
    background: linear-gradient(315deg, #ff0057, #e64a19);
}

.gradientBorder1:hover:before {
    background: linear-gradient(315deg, #89ff00, #00bcd4);
}

.gradientBorder2:hover:before {
    background: linear-gradient(315deg, #e91e63, #5d02ff);
}

.gradientBorder3:hover:before {
    background: linear-gradient(315deg, #ff0000, #ffc107);
}

.OverLayText {
    position: absolute;
    right: 0;
    top: 100px;
    color: whitesmoke;
    font-size: 14rem;
    opacity: 0.02;
    transition: all 2s;
    animation-duration: 2s;
    white-space: nowrap;
}

.cardHeader {
    margin-top: 140px;
    font-size: 1rem;
    color: white;
    font-weight: bold;
}

.details {
    display: none;
    color: white;
    font-weight: 200;
    text-align: left;
}

.each-card-container:hover>.each-card>.OverLayText {
    top: 1rem;
    right: 1rem;
    font-size: 3rem;
    opacity: 0.2;
}

.read-more-button {
    margin-top: 20px;
    background: none;
    border: 2px white solid;
    color: white;
    padding: 5px;
    position: relative;
}

.expand {
    display: block;
}`]
})
export class CardWithReadMoreComponent implements OnInit {

  @Input()
  public CardDetailsArray: EachCardData[];

  public stateOfExpands: boolean[] = [];

  public ngOnInit() {
    this.stateOfExpands = new Array(this.CardDetailsArray.length).fill(false);
  }

  public expandContactWork(elementNumber: number) {
    const mem = this.stateOfExpands[elementNumber]
    for (let i = 0; i < this.CardDetailsArray.length; i++) {
      this.stateOfExpands[i] = false;
    }
    this.stateOfExpands[elementNumber] = !mem;
  }
}
