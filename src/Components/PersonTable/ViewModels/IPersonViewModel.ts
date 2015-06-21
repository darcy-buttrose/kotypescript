/**
 * Created by Darcy on 20/06/2015.
 */
/// <reference path="../../../../typings/knockout/knockout.d.ts"/>
export interface IPersonViewModel {
    firstName: KnockoutObservable<string>;
    lastName: KnockoutObservable<string>;
    age: KnockoutObservable<number>;
    fullName: KnockoutComputed<string>;
    editing: KnockoutObservable<boolean>;
    edit() : void;
}