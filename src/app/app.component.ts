import { Component } from '@angular/core';
declare function require(moduleName: string): any;

const { version: appVersion } = require('../../package.json')
// this loads package.json
// then you destructure that object and take out the 'version' property from it
// and finally with ': appVersion' you rename it to const appVersion

@Component({
 selector: 'my-app',
 templateUrl: 'app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {

    title: string = 'Tour of Heroes';
    appVersion: string;

    constructor() {

        this.appVersion = appVersion;

    }
}