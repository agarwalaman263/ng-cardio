import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardWithClipPathComponent } from './card-with-clip-path/card-with-clip-path';
import { CardWithReadMoreComponent } from './card-with-read-more/card-with-read-more';
import { CardFullOverlayComponent } from './card-full-overlay/card-full-overlay';



@NgModule({
  declarations: [CardFullOverlayComponent, CardWithClipPathComponent,CardWithReadMoreComponent],
  imports: [CommonModule],
  exports: [CardFullOverlayComponent, CardWithClipPathComponent,CardWithReadMoreComponent]
})
export class NgCardioModule { }
