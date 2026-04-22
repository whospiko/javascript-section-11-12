// const globalVar = "globalVar";
//
// function test(){
//     let msg = "out-block"
//     {
//        let msg = "in-block"
//         console.log("inner : " +msg)
//     }
//     {
//         console.log("other-block : " + msg)
//     }
//     console.log("outer : " + msg)
//     console.log("in-function : " + globalVar)
//
//     return msg;
// }
//
// console.log("outside-function : " + globalVar)
// console.log("call message from local : " + msg)
//
// test()

function getUser(user) {
  return user.name.toUpperCase();
}

getUser(null); // 💥 runtime error