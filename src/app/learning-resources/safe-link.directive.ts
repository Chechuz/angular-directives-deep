import { Directive, ElementRef, inject, input } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone:true,
    host: {
       ' (click)': 'onConfirmLeavePage($event)'
    }
})
export class SafeLinkDirective{
    queryParam = input('myapp', {alias: 'appSafeLink'});
    private hostElement = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

    constructor(){
        console.log('Safe link directive is active!')
    }

    onConfirmLeavePage(event: MouseEvent){
       const wantsToLeave= window.confirm('Do you want to leave the page?');

       if(wantsToLeave){
        const adess = this.hostElement.nativeElement.href;
        this.hostElement.nativeElement.href = adess + '?from=' + this.queryParam;
        return;
       }
       event?.preventDefault();
    }
}