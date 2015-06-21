/**
 * Created by Darcy on 19/06/2015.
 */
/// <reference path="../../../../typings/knockout/knockout.d.ts"/>
import * as ko from "knockout";
import {IPerson} from "../Models/IPerson";
import {IPersonViewModel} from "IPersonViewModel";

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
            read: () => {
                return this.firstName + " " + this.lastName;
            },
            write: (value: string) => {
                var lastSpecPos = value.lastIndexOf(" ");
                if (lastSpecPos > 0) {
                    this.firstName(value.substring(0,lastSpecPos));
                    this.lastName(value.substring(lastSpecPos+1));
                }
            }
        });
    }

    edit(): void {
        this.editing(true);
    }
}