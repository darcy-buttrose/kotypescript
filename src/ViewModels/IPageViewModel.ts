/**
 * Created by Darcy on 20/06/2015.
 */
/// <reference path="../../typings/knockout/knockout.d.ts"/>
import {IPerson} from '../Components/PersonTable/Models/IPerson';

export interface IPageViewModel {
    persons: KnockoutObservableArray<IPerson>;
}