import { Component, Input, OnInit } from '@angular/core';
import { EachCardDetails } from './Models';

@Component({
  selector: 'card-full-overlay',
  template: `
  <div class="grid-container">
    <div *ngFor='let eachCard of this.CardDetailsArray' class="each-card">
        <img [src]="eachCard.imageUrl" class="image" alt="check you net">
        <div style="text-align: center;color: black;">
            {{eachCard.belowImageText}}
        </div>
        <div class="belowImageText">
            <div>
                {{eachCard.belowImageText}}
            </div>
        </div>
        <div class="overlayText">
            <div style='color:black;' [innerHTML]="eachCard.overlayText">
            </div>
        </div>
    </div>
</div>`,
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
    padding: 1rem;
    overflow-x: hidden;
    box-sizing: border-box;
    height: 500px;
    overflow-y: hidden;
    transition: all 2s;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.each-card:hover>.overlayText {
    top: 10%;
}

.overlayText {
    position: absolute;
    bottom: -100%;
    top: 100%;
    left: 0;
    background-color: #ffffffcc;
    /* filter: blur(20px); */
    width: 100%;
    height: 100%;
    z-index: 5;
    padding: 1rem;
    transition: all 2s;
    text-align: left;
}

.image {
    z-index: 2;
    width: 100%;
}

.belowImageText {
    transition: all 2s;
    position: absolute;
    top: 0%;
    left: -100%;
    height: 10%;
    width: 100%;
    background-color: violet;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px 20px 0 0;
}

.each-card:hover>.belowImageText {
    left: 0;
}
  `]
})
export class CardFullOverlayComponent {
  @Input()
  public CardDetailsArray: EachCardDetails[];
}
