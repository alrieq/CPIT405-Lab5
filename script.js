alert("Khalid Alharbi")
function factorialHandler() {
    var num = document.getElementById("factNum").value;
    document.getElementById("factorialResult").innerHTML = factorialRecursive(num);
}
function factorialRecursive(num) {
    if (num === 0) return 1;
    return num * factorialRecursive(num - 1);
}

class Person {
    constructor(first_name, last_name, year_of_birth) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.year_of_birth = year_of_birth;
    }
    getAge(){
        return (new Date().getFullYear() - this.year_of_birth)
    }
    getFullName(){
        return this.first_name + " " + this.last_name;
    }
}
var n =1;
function handlePerson(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var year = document.getElementById("year").value;
    var person = new Person(fname , lname, year);
    document.getElementById("people").innerHTML += n + "- " +  person.getFullName() + " and he is " + person.getAge()+ " years old" + "<br>";
    n++;
}