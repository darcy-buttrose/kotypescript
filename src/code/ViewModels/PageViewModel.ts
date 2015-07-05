/**
 * Created by Darcy on 20/06/2015.
 */
/// <reference path="../../typings/knockout/knockout.d.ts"/>
/// <reference path="../Components/PersonTable/Models/IPerson.d.ts"/>
/// <reference path="./IPageViewModel.d.ts"/>
import * as ko from "knockout";
import {Person} from '../Components/PersonTable/Models/Person';

export class PageViewModel implements IPageViewModel {
    public persons: KnockoutObservableArray<IPerson>;
    constructor(personData: IPerson[]) {
        this.persons = ko.observableArray(personData);
    }
}