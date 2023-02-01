import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonSliderComponent } from './common-slider/common-slider.component';
import { CardSliderComponent } from './card-slider/card-slider.component';
import { PopupComponent } from './popup/popup.component';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { SafeHtmlPipe } from '../safe-html.pipe';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [CommonSliderComponent, CardSliderComponent, PopupComponent, SafeHtmlPipe],
  imports: [
    CommonModule,
    DialogModule,
    CheckboxModule,
    RadioButtonModule,
    ButtonModule,
    FormsModule,
    AgGridModule
  ],
  exports: [
    CommonSliderComponent,
    CardSliderComponent,
    PopupComponent
  ]
})
export class DsComponentsModule { }
