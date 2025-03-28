//node script2.js
// console.log(console)

// methods used with console
//{
//     log: [Function: log],
//     warn: [Function: warn],
//     dir: [Function: dir],
//     time: [Function: time],
//     timeEnd: [Function: timeEnd],
//     timeLog: [Function: timeLog],
//     trace: [Function: trace],
//     assert: [Function: assert],
//     clear: [Function: clear],
//     count: [Function: count],
//     countReset: [Function: countReset],
//     group: [Function: group],
//     groupEnd: [Function: groupEnd],
//     table: [Function: table],********************
//     debug: [Function: debug],
//     info: [Function: info],
//     dirxml: [Function: dirxml],
//     error: [Function: error],
//     groupCollapsed: [Function: groupCollapsed],
//     Console: [Function: Console],
//     profile: [Function: profile],
//     profileEnd: [Function: profileEnd],
//     timeStamp: [Function: timeStamp],
//     context: [Function: context]
//   }


console.time("forLop: ")
let i=0;
for(i=0; i<100;i++){
    i++
}
console.timeEnd("forLop: ")

console.time("whileLop: ")
while(i<100){
    i++;
    i++;
}
console.timeEnd("whileLop: ")