import { Component, Input } from '@angular/core';
import { EachCardDetails } from './Models';
@Component({
  selector: 'card-with-clip-path',
  template: `
  <ng-container>
    <div class="grid-container">
        <div *ngFor='let eachCard of this.CardDetailsArray; let i=index' class="each-card">
            <img [src]="eachCard.imageUrl" class="image" alt="check you net">
            <div>{{eachCard.belowImageText }}
            </div>
            <div class="info-circle">
                <div *ngFor="let each of eachCard?.overlayTextArray">
                    {{each}}
                </div>
            </div>
        </div>
    </div>
</ng-container>`,
  styles: [`
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 350px);
    row-gap: 100px;
    column-gap: 100px;
    grid-template-rows: auto;
}

.each-card {
    background: white;
    border-radius: 20px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    overflow-x: hidden;
    box-sizing: border-box;
    height: 500px;
    color: black;
}

.info-circle {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #9bdc28;
    clip-path: circle(0% at 95% 5%);
    width: 100%;
    height: 100%;
    z-index: 5;
    padding: 1rem;
    transition: all 2s;
    color: white;
}

.image {
    z-index: 2;
    width: 100%;
}

.each-card:hover>.info-circle {
    clip-path: circle(100% at 95% 5%);
}

.info-circle div:first-child {
    margin-top: 70px !important;
}`]
})
export class CardWithClipPathComponent {
  @Input()
  public CardDetailsArray: EachCardDetails[];

}
