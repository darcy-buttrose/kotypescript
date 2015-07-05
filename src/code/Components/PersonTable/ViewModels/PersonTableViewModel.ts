/**
 * Created by Darcy on 20/06/2015.
 */
/// <reference path="../../../../typings/knockout/knockout.d.ts"/>
/// <reference path="../Models/IPerson.d.ts"/>
/// <reference path="./IPersonViewModel.d.ts"/>
/// <reference path="./IPersonTableViewModel.d.ts"/>
import * as ko from "knockout";
import {PersonViewModel} from "./PersonViewModel";

export class PersonTableViewModel implements IPersonTableViewModel {
    public persons : KnockoutObservableArray<IPersonViewModel>;
    constructor(params, componentInfo) {
        this.persons = ko.observableArray([]);
        if (params.value) {
            let data : IPerson[] = params.value();
            data.forEach((value:IPerson) => {
                this.persons.push(new PersonViewModel(value));
            })
        }
    }
}