// code your solution here
function saturdayFun (activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun());

const mondayWork =(activity="go to the office")=>(`This Monday, I will ${activity}.`);
console.log(mondayWork());
let result =mondayWork("work from home");
console.log(result);

function wrapAdjective (visual) {
    return function(adjective="special"){
         return `You are ${visual}${adjective}${visual}!`

    };
 };
 let encouragement=wrapAdjective("*")("a hard worker");
 console.log(encouragement);

let complement = wrapAdjective('||')("a dedicated programmer");
console.log(complement);