import { NgModule } from '@angular/core';
import { NgxMPrintComponent } from './ngx-m-print.component';
import { NgxMPrintButtonDirective } from './ngx-m-print.directive';



@NgModule({
  declarations: [
    NgxMPrintComponent,
    NgxMPrintButtonDirective,
  ],
  imports: [
  ],
  exports: [
    NgxMPrintComponent,
    NgxMPrintButtonDirective
  ]
})
export class NgxMPrintModule { }
