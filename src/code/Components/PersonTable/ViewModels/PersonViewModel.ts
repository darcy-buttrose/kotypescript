/**
 * Created by Darcy on 19/06/2015.
 */
/// <reference path="../../../../typings/knockout/knockout.d.ts"/>
/// <reference path="../Models/IPerson.d.ts"/>
/// <reference path="./IPersonViewModel.d.ts"/>
import * as ko from "knockout";

export class PersonViewModel implements IPersonViewModel {
    public firstName: KnockoutObservable<string>;
    public lastName: KnockoutObservable<string>;
    public age: KnockoutObservable<number>;
    public fullName: KnockoutComputed<string>;
    public editing: KnockoutObservable<boolean>;

    constructor(person: IPerson) {
        this.firstName = ko.observable(person.firstName);
        this.lastName = ko.observable(person.lastName);
        this.age = ko.observable(person.age);
        this.editing = ko.observable(false);
        this.fullName = ko.computed({
            read: () => { return this.firstName() + " " + this.lastName();},
            write: (value : string) => {
                var names = value.split(', ');
                this.firstName(names[0]);
                this.lastName(names[1]);
            }
        });
    }

    edit(): void {
        this.editing(true);
    }
}