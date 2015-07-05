/**
 * Created by Darcy on 20/06/2015.
 */
/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="../Components/PersonTable/Models/IPerson.d.ts" />
interface IPageViewModel {
    persons: KnockoutObservableArray<IPerson>;
}
interface PageViewModelFactory {
    new(persons:IPerson[]):IPageViewModel;
}
