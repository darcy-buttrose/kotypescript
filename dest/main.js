/**
 * Created by Darcy on 21/06/2015.
 */
import $ from 'jquery';
import * as ko from 'knockout';
export class main {
    constructor() {
        console.log('ctor');
    }
    ready() {
        $(document).ready(() => {
            ko.applyBindings();
            console.log('ready');
        });
    }
}