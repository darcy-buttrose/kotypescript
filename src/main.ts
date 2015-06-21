/**
 * Created by Darcy on 19/06/2015.
 */
/// <reference path="../typings/jquery/jquery.d.ts"/>
/// <reference path="../typings/knockout/knockout.d.ts"/>

import * as $ from 'jquery';
import * as ko from 'knockout';
import {IPerson} from './Components/PersonTable/Models/IPerson';
import {Person} from './Components/PersonTable/Models/Person';
import {IPageViewModel} from './ViewModels/IPageViewModel';
import {PageViewModel} from './ViewModels/PageViewModel';

export class main {
    constructor() {
        console.log('ctor');
    }
    ready() {
        $(document).ready(() => {
            var personArray : IPerson[] = [
                new Person('Darcy','Buttrose',45),
                new Person('Marta','Osoba-Buttrose',53),
                new Person('Maksym','Osoba-Buttrose',11)
            ];

            var pageViewModel : IPageViewModel = new PageViewModel(personArray);

            var componentLoader = {
                loadComponent: (name,compontConfig,callback) => {
                    Promise.all([System.import(compontConfig.viewModel),System.import(compontConfig.template)])
                        .then((loaded) => {
                            var result = {
                                template: ko.utils.parseHtmlFragment(loaded[1]),
                                createViewModel: function (params, componentInfo) { return new loaded[0].viewModel(params, componentInfo); }
                            };
                            callback(result);
                        });
                }
            };

            ko.components.loaders.unshift(componentLoader);

            ko.components.register('person-table', {
                viewModel: 'build/Components/PersonTable/ViewModels/PersonTableViewModel',
                template: 'build/Components/PersonTable/Views/PersonTableView.html!text'
            });
            ko.applyBindings(pageViewModel);
            ko.components.get('person-table',(c) => {
                console.log('component => ' + c !== null);
            })
        });
    }
}