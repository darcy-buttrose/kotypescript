/**
 * Created by Darcy on 19/06/2015.
 */
/// <reference path="../typings/jquery/jquery.d.ts"/>
/// <reference path="../typings/knockout/knockout.d.ts"/>
/// <reference path="../typings/es6-promise/es6-promise.d.ts"/>
/// <reference path="../typings/systemjs/systemjs.d.ts"/>

/// <reference path="./Components/PersonTable/Models/IPerson.d.ts"/>
/// <reference path="./ViewModels/IPageViewModel.d.ts"/>

import * as $ from 'jquery';
import * as ko from 'knockout';
import {Person} from './Components/PersonTable/Models/Person';
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
                    let templateName = compontConfig.template;
                    let moduleName = compontConfig.module;
                    let viewModelName = compontConfig.viewModel;
                    Promise.all([System.import(moduleName),System.import(templateName)])
                        .then((loaded) => {
                            var result = {
                                template: ko.utils.parseHtmlFragment(loaded[1]),
                                createViewModel: (params, componentInfo) => {
                                    let vm = new loaded[0][viewModelName](params, componentInfo);
                                    return vm;
                                }
                            };
                            callback(result);
                        });
                }
            };

            ko.components.loaders.unshift(componentLoader);

            ko.components.register('person-table', {
                module: 'build/code/Components/PersonTable/ViewModels/PersonTableViewModel',
                viewModel: 'PersonTableViewModel',
                template: 'build/code/Components/PersonTable/Views/PersonTableView.html!text'
            });
            ko.applyBindings(pageViewModel);
        });
    }
}