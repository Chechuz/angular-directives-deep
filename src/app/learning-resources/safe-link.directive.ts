import { Directive, input } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone:true,
    host: {
       ' (click)': 'onConfirmLeavePage($event)'
    }
})
export class SafeLinkDirective{
    queryParam = input('myapp', {alias: 'appSafeLink'});

    constructor(){
        console.log('Safe link directive is active!')
    }

    onConfirmLeavePage(event: MouseEvent){
       const wantsToLeave= window.confirm('Do you want to leave the page?');

       if(wantsToLeave){
        const adess = (event.target as HTMLAnchorElement).href;
        (event.target as HTMLAnchorElement).href = adess + '?from=' + this.queryParam;
        return;
       }
       event?.preventDefault();
    }
}