/**
 * Created by Darcy on 19/06/2015.
 */
import {IPerson} from "IPerson";
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