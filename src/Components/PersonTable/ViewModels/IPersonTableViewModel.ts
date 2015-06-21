/**
 * Created by Darcy on 20/06/2015.
 */
/// <reference path="../../../../typings/knockout/knockout.d.ts"/>
import {IPersonViewModel} from "IPersonViewModel";

export interface IPersonTableViewModel {
    persons : KnockoutObservableArray<IPersonViewModel>;
}