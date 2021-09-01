let helpObj = require('/home/sanket/Desktop/JavscriptTheory/Theory/FileOrganiser/commands/help.js');
let treeObj = require('/home/sanket/Desktop/JavscriptTheory/Theory/FileOrganiser/commands/tree.js');
let organiseObj = require('/home/sanket/Desktop/JavscriptTheory/Theory/FileOrganiser/commands/organise.js');

let inputArr = process.argv.slice(2);
let command = inputArr[0];
let path = inputArr[1];

switch(command){
    case 'help' :
        helpObj.helpFn();

        break;
    case 'tree' :
        treeObj.treeFn(path);

        break;
    case 'organise' :
        organiseObj.organiseFn(path);

        break;
    default :
        console.log("Invalid Input.");
        break;            
}