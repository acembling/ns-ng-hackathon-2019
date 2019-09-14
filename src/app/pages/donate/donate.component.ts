import { Component, OnInit } from "@angular/core";
import { openAdvancedUrl, AdvancedWebViewOptions } from 'nativescript-advanced-webview';

@Component({
    selector: "app-donate",
    moduleId: module.id,
    templateUrl: "./donate.component.html",
    styleUrls: ["./donate.component.scss"]
})
export class DonateComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }


    openLink() {

    const opts: AdvancedWebViewOptions = {
        url: 'https://www.justgiving.com/plasticoceans',
        toolbarColor: '#242424',
        toolbarControlsColor: '#ffffff', // iOS only
        showTitle: false, // Android only
        isClosed: (res) => {
            console.log('closed it', res);
        }
    };

    openAdvancedUrl(opts);
}

}
