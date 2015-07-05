/**
 * Created by Darcy on 30/06/2015.
 */
declare module 'fs-plus' {
    export function listSync(rootPath:string,extensions:string[]);
    export function isFileSync(filePath:string);
}