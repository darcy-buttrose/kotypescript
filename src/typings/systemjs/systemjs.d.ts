/**
 * Created by Darcy on 20/06/2015.
 */
interface ISystemStatic
{
    import(name: string): any;
    defined: any;
}

declare var System: ISystemStatic;