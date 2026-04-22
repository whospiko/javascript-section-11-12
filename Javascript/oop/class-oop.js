// class ClassName{
//
// }
class Student{
    #name = '' // private
    #age = 0

    constructor(){
    }

    set Age(age){
        if(age !== 0){
            this.#age = age;
        }
    }

    get Age(){
        return this.#age;
    }

    getName(){
        if(this.#name === ''){
            return "Nothing"
        }
        return "This Data From Class Student " + this.#name
    }
    setName(name){
        if(name.length < 3){
            console.log("Invalid")
            return;
        }

        this.#name = name;
    }
}
const s1 = new Student();

s1.Age = 5;
console.log(s1.Age);

s1.setName('John');
console.log(s1.getName());


