/**
 * Created by Darcy on 19/06/2015.
 */
interface IPerson {
    firstName: string;
    lastName: string;
    age: number;
}
interface PersonFactory {
    new(firstName:string,lastName:string,age:number):IPerson;
}
