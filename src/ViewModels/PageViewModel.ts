/**
 * Created by Darcy on 20/06/2015.
 */
/// <reference path="../../typings/knockout/knockout.d.ts"/>
import * as ko from "knockout";
import {IPerson} from '../Components/PersonTable/Models/IPerson';
import {Person} from '../Components/PersonTable/Models/Person';
import {IPageViewModel} from './IPageViewModel';

export class PageViewModel implements IPageViewModel {
    public persons: KnockoutObservableArray<IPerson>;
    constructor(personData: IPerson[]) {
        this.persons = ko.observableArray(personData);
    }
}