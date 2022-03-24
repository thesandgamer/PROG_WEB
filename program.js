const varConst = 5;
console.log(varConst);

let hello = "";
console.log(hello);
hello = "bonjour";
console.log(hello);

const number = Number(prompt("Enter a number."));
if (number > 0 )
{
    console.log(number + " is positive");
}
else
{
    console.log(number + " is negative");    
}
const number2 = 17;

let i = 0;
while (i < number2)
{
    console.log(i);
    i++;
}

console.log("e count until " + number2 );

for (let counter = 1; counter <= 5;counter++)
{
    console.log(counter);
} 

function sayHello(greetings)
{
    console.log(greetings);
}

sayHello("Bonjour");

class Person
{
    constructor(name,adress,age)
    {
        this.name = name;
        this.adress = adress;
        this.age = age;
    }

    introduce()
    {
        console.log("My name is " + this.name + " , I live in " + this.adress + " ,I have " + this.age + " years old");
    }

}

p1 = new Person("People1", "City1",20);
p1.introduce();
p2 = new Person("People2","City2",21);
p3 = new Person("People3","City3 ",22);

let peoples = [p1,p2,p3];
for (p of peoples)
{
    p.introduce();
}

p4 = new Person("People4","City4",1200)

//-------Beware-------
let otherList = peoples; //Là ça fait une reference vers la liste
//const otherList = Array.from(peoples); //Pour copier une liste
otherList[2] = p4;
for (p of peoples)
{
    p.introduce();
}

for (p of otherList)
{
    p.introduce();
}