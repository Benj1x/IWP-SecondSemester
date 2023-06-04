/*Part 1. Fun with Functions
In this exercise we will gradually use more and more aspects of JS functions on a simple example.
let diceRoll=[1,6,6,2,3,4,6];

Write a function get6s_v1 that takes an array of numbers (dice values 1..6) as parameter, and prints the indexes and corresponding values of the array where elements are 6s. E.g., 1:6, 2:6, 6:6 ..." excluding other elements. At this stage, just write a basic version, eg. without using functions as parameters
Apply the function to the above array as argument. (Not actually sure what they are trying to say here)
*/
get6s_v1();
let diceRolls=[1,6,6,2,3,4,6];
function get6s_v1(/*diceValues*/){
    let diceValues=[1,2,3,4,5,6];

    for (let i = 0; i < diceValues.length; i++)
    {
        console.log(diceValues[i]);
    }

}

/*Write a helper function eg "is6(v)" that can test if the supplied parameter value v is a 6 
Rewrite get6s_v1 to get6_v2 such that it uses the helper function to test if the index/value should be printed. 
Apply the function to the above array.  
Now create a get6s_v3 that rewrites get6_v2 to accept a dice array as first parameter, and a "compare" function as second parameter.
Apply the function using the diceRoll and function "is6" as actual arguments
Copy and rename the get6s_v3 function to findDices_v1(dice,compare). Call it with the same arguments as above using the diceRoll and function "is6"
Then call it using a function expression (named or anonymous) at the call site, to pass a function that selects 1 dices. 
Then call it using a lambda expression to pass a function that selects dices with values <= 3. 
(advanced:)  what does the following statement produce?
diceRoll.filter(dice=>dice==6).reduce((sum,dice)=>sum+dice,0);
*/

/*Part 2. Objects & Arrays
Declare an object "msgBoard" that represents a message board that a set of clients can use to exchange messages.
It should have a property for the  name of the message board, initialized to "IWP Chat", and another property (array) for storing the history of messages. 
Add a function (method) to the object called "putMessage" that takes a string message as argument at stores it in the message array.
Add a function (method) that prints the received messages to the console. I.e, the messageBoard could be used like:

msgBoard.putMessage("Hej, dette er en test");
msgBoard.putMessage("Hej IWP");
msgBoard.printMessages();

It should result in the following output
Messages History in board IWP Chat:
Hej, dette er en test
Hej IWP*/


class msgBoard{
    constructor(Name){
        this.ChatName = Name;
        this.ChatHistory = [];
        this.Callbacks = [];
    }
    putMessage(newMessage){
        this.ChatHistory.push(newMessage);
        this.sendAndNotify(newMessage);
    }
    printMessages(){
        this.ChatHistory.forEach((message) => {
            console.log( message );
          });
    }
    sendAndNotify(newMessage){
        //this.Callbacks[0](this.ChatName, this.ChatHistory[this.ChatHistory.length]);
        this.Callbacks[0](this.ChatName, newMessage);
    }
}

let board = new msgBoard("IWP Board");
board.Callbacks.push(function register(chatName, newMessage){ console.log(chatName + ": " + newMessage);});
board.putMessage("Hej, dette er en test");
board.putMessage("Hej IWP");
console.log("\n");
board.printMessages();

/*
Add a function "register(f)" to the object that clients use to be notified when new messages arrives (a so-called call-back function): 
The register function takes a function f as argument, and stores the passed function in a different array "callBacks". f itself takes two parameters: 
the name of the message board, and the message. Then prints them to the console, possibly in an client specific manner (eg language).   
Based on the putMessage method, add a similar one "sendAndNotify" that in addition to storing the message (eg using putMessage) also calls all registered 
call-back functions whenever a message arrives (supplying the registered function with the new message, and boardname.


function briansHandler(boardName,message){
  console.log(`Brian! A message from ${boardName}: ${message}`);
  }
 msgBoard.register(briansHandler);
 msgBoard.register((board,message)=>console.log(`Board ${board} says to Michele: ${message}`));
 msgBoard.sendAndNotifyMessage("URGENT: Opgaveregning nu!")


It should result in the following output
Brian! A message from IWP Chat: URGENT: Opgaveregning nu!
Board IWP Chat says to Michele: URGENT: Opgaveregning nu!

Make a constructor function  MessageBoard(name) that makes message boards.
Create a few message boards.   

 let board2= new MessageBoard("Opgave Regning"); 
 board2.putMessage("Hej, dette er en test");*/


 /*Part 3. BMI Calculator - Console Edition
The following archive contains the (console version) of the the BMI Calculator. 

Uncompress to a suitable location,  and simply double click the bmi.code-workspace. (debugging console applications: 
Tilføj "console": "integratedTerminal" til launch.json, see https://github.com/Microsoft/vscode/issues/47860) )



There are two versions included in separate files: 
app-c.js is using very plain imperative style programming. 
app-js.js uses a some more js features (objects with methods, array functions, and constructor functions) 
However, I "forgot" to implement a couple of functions. 

First take the app-c.js. Try to get an overview of the functions in the file (disregard those that renders html for the first time). But remark the importance of input validation  - this will also be important later.
Implement the missing contents of the functions calcBMI and bmiLookup. 
Then take a look at app-js.js. Remark the two constructor functions, and how some of the c-functions have been rewritten into member-functions. Locate the empty calcBMI and lookup functions and supply their contents. Consider using the array methods such as filter and indexOf. */