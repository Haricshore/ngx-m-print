import { Component, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[lib-ngx-m-print]',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    @media print {
    .print{
        width: 100%!important;
        height: 100%!important; 
        top: 0!important;
        left: 0!important;
        z-index: 999999!important;
        background-color: white!important;
        flex-direction: column;
    }

    .not-print{
        display: none!important;
        visibility: hidden!important;
    }
}
  `
  ],
  encapsulation: ViewEncapsulation.None
})
export class NgxMPrintComponent implements OnInit {

  @Input('printElement') printElement: boolean = false;
  constructor(private el: ElementRef) { }

  ngOnInit(): void{
    if(this.printElement == true){
      console.log("true");
      this.el.nativeElement.classList.add("print");
     }
     if(this.printElement == false){
      console.log("false");
      this.el.nativeElement.classList.add("not-print");
    }
     
   }

}
