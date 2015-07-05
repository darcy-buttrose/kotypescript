/**
 * Created by Darcy on 20/06/2015.
 */
/// <reference path="../../../../typings/knockout/knockout.d.ts"/>
/// <reference path="./IPersonViewModel.d.ts"/>

interface IPersonTableViewModel {
    persons : KnockoutObservableArray<IPersonViewModel>;
}