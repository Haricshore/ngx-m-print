import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[print]'
})
export class NgxMPrintButtonDirective {

  constructor() { }

  ngOnInit(): void {
    window.onbeforeprint = () => {
      window.alert("Are you sure to print ?");
    }
  }

  @HostListener('click')
  print(){
    window.print();
  }
}
