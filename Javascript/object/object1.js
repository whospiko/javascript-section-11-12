// function Test (person, job="job test") {
//     this.person = person
//     this.job = job
//     this.run = function () {
//         this.walk()
//         console.log(`run ${this.person}`);
//     }
//     this.walk = function () {
//         console.log(`walk ${this.person}`);
//     }
// }
//
// const t1 = new Test("p1", "job p1")
// console.log(t1.job)


// const test = {
//     person: "test",
//     job: "job test",
//     get getPerson(){
//         // do something
//         if(this.person === "test"){
//             console.log("person error");
//             return null
//         }
//         return this.person;
//     },
//     set setPerson(person){
//         if(person === "t1")
//         {
//             console.log("can not input " + person);
//             return
//         }
//         this.person = person;
//     }
// }
// console.log(test.person);
// console.log(test.getPerson)
// test.setPerson = "t1"
// console.log(test.getPerson)

// test.run()
//
// test.fly = function (){
//     console.log(`fly ${this.person}`);
// }
//
// test.fly()


//test.person = "test1"
//console.log(test.walking)
//test.walking = "test2"
//console.log(test.walking)
//test.person = "person"
//console.log(test.person)
//console.log(test.person)

const MyMath =  {
    PI: 3.14,
    sum : function (a,b) { return a + b;},
    minus :  (a, b) =>  a - b,
}

console.log(MyMath.sum(1,2))
console.log(MyMath.minus(2,2))
console.log(MyMath.PI)

console.log(Math.PI)
console.log(Math.random())
