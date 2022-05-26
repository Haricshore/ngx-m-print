Simple library for print in angular

Install
npm i ngx-m-print

Import into main module
```
import {NgxMPrintModule} from 'ngx-m-print';
 
@NgModule({
 
imports: [NgxMPrintModule]
 
})
export class AppModule {
}
```


Add directive to template


```
<div lib-ngx-m-print [printElement]="true"> 
  <!--Element you WANT to print-->
</div>

<div lib-ngx-m-print [printElement]="false"> 
  <!--Element you DON'T WANT to print-->
</div>
 
<button print>Print</button>
```

Print button should have 'print' directive.

Button with print directive can co-exist with lib-ngx-m-print.
So you can hide the button from print preview like this.

```
<button lib-ngx-m-print [printElement]="false" print>Print table</button>
```

This is a component acting and used as a directive (similar to button in Material button)

Printed element looks the same as in your app.

This library was generated with Angular CLI version 13.3.0.