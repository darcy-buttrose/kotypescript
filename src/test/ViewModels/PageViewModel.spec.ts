/**
 * Created by Darcy on 25/06/2015.
 */
/// <reference path="../../typings/es6-promise/es6-promise.d.ts"/>
/// <reference path="../../typings/systemjs/systemjs.d.ts"/>
/// <reference path="../../typings/jasmine/jasmine.d.ts"/>
/// <reference path="../../code/ViewModels/IPageViewModel.d.ts"/>
/// <reference path="../../code/Components/PersonTable/Models/IPerson.d.ts"/>
describe('PageViewModel', () => {
    it('should populate persons', (done) => {
        Promise.all([
            System.import('code/ViewModels/PageViewModel'),
            System.import('code/Components/PersonTable/Models/Person')
        ])
        .then((loaded) => {
            var PageViewModel:PageViewModelFactory = loaded[0].PageViewModel;
            var Person:PersonFactory = loaded[1].Person;

            let people:IPerson[] = [
                new Person('Darcy', 'Buttrose', 45),
                new Person('Marta', 'Osoba-Buttrose', 53)
            ];
            let pageViewModel:IPageViewModel = new PageViewModel(people);
            expect(pageViewModel.persons()).toBe(people);
            done();
        })
        .catch(console.error.bind(console));
    });
});
