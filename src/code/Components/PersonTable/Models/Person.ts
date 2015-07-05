/**
 * Created by Darcy on 19/06/2015.
 */
/// <reference path="./IPerson.d.ts"/>
export class Person implements IPerson {
    firstName:string;
    lastName:string;
    age:number;

    constructor(firstName:string,lastName:string,age:number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}