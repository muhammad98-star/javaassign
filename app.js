// Chapter 1
//Task 1
alert("Welcome to S.M Fotoz & Video");

//Task 2
alert("Please enter a valid Password");

//Task 3
 alert("Welcome to JS land..\nHappy Coding!");

//Task 4

alert("Welcome to JS Land..");
alert("Happy Coding!");

//Task#5

console.log("Hello I can run my JS through my web browser console")

//Task# 6
// check index.html

//Task 7


//CHAPTER# 2

//Task#1

var username;

//Task#2

var myname="Muhammad Ali Qureshi"

//Task#3

var message;
message="Hello World";
alert(message);

//Task#4

var name="Jhone Doe"
var age="15 Year old"
var certification="Web & Mobile Application Certificate "

alert(name);
alert(age);
alert(certification);

//Task#5

var food="PIZZA"
alert(food+"\n"+food.slice(0,4)+"\n"+food.slice(0,3)+"\n"+food.slice(0,2)+"\n"+food.slice(0,1))

//Task#6

var email="example@example.com"
alert("My Email address is "+email)

//Task#7

var book="A samarter way to learn to JavaScript"
alert("I am trying to learn from the book."+book)

//Task# 8

document.write("Yah! i can write HTML content through JavaScript")

//Task# 9

alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")

//CHAPTER# 3

//Task#1

var age=21;
alert("I am "+age+" year old");

//Task#3

var visit=14;
alert("You have vist "+visit+" times");

//Task#4

var birthyear=1998;
alert("My birth Year is "+birthyear+"\n"+"Dat type of my declare variable is Number")

//Task#5

var visitorname="faraz";
var product="T-Shirts (s)";
var quantity=5;

alert(visitorname+" ordered "+quantity+" "+product+" on XYZ clothing store")

//CHAPTER#4

//Task#1

var name1,name2,nmae3;
//Task#3

document.write("Rules for naming JS variables<br><br><br>Variable names can only contain ______, ______, ______ and ______<br>Variables must begin with a ______, ______ or _____. For example $name, _name or nam<br>Variable names are case _________ <br>Variable names should not be JS _________ ");

//CHAPTER#5

//Task#1

var num1=5;
var num2=8;
var sum=num1+num2;

document.write("Sum of "+num1+" and "+num2+" is"+sum);

//Task#2

var num1=5;
var num2=8;
var sum=num1-num2;

document.write("Sum of "+num1+" and "+num2+" is"+sum);



var num1=5;
var num2=8;
var sum=num1*num2;

document.write("Sum of "+num1+" and "+num2+" is"+sum);



var num1=5;
var num2=8;
var sum=num1/num2;

document.write("Sum of "+num1+" and "+num2+" is"+sum);

//Task#3

var value=2;
alert("Value after variable declaration is:"+value);

var a=5;
alert(a++);
alert(a++);

//Task#4

var ticketprice=600;
document.write("Total cost to buy 5 tickets to a movie is"+ticketprice*5+"PKR")

//Task#5

var table=+prompt("Enter table ");
document.write("Table of "+table+"<br><br>");


for(var i=1;i<=10;i++)
{
    document.write(table+"*"+i+"="+table*i+"<br>");
}

//Task#6
var celsius=50;
var farenheit=60;

C=(farenheit-32)*5/9;
F=(celsius*9/5)+32

document.write(celsius+" C"+" is "+F+" F"+"<br>");
document.write(farenheit+" F"+" is "+C+" C");

//Task#7

var item1=650;
var item2=100;
var quantity1=3;
var quantity2=7;
var charges=100;

document.write(" Price of item 1 is"+item1+"<br>");
document.write("Quantity of item 1 is "+quantity1+"<br>");
document.write(" Price of item 2 is "+item2+"<br>");
document.write("Quantity of item 2 is "+quantity2+"<br>");
document.write("Shipping Charges "+charges+"<br>");
document.write("Total Cost of your Order is "+((item1*quantity1)+(item2*quantity2)+charges));

//Task#8

var marksobtained=689;
var totamarks=1100;

document.write("Total Marks: "+totamarks+"<br>");
document.write("Marks Obtained: "+marksobtained+"<br>");
document.write("Percentage:"+((marksobtained*100)/totamarks)+"%"+"<br>");

//Task#9

var us=10;
var saudiriyal=25;
var one_usdollar=104.80;
var one_saudiriyal=28;

document.write("Total Currency in PKR: "+((us*one_usdollar)+(saudiriyal*one_saudiriyal)))
//CHAPTER#6-9

//Task#1

var a=10;
document.write("Result <br>");
document.write("The value of a is: "+a+"<br><br>");
document.write("The value of ++a is: "+(++a)+"<br>");
document.write("Now the value of a is: "+a+"<br><br>");
document.write("The value of a++ is: "+(a++)+"<br>");
document.write("Now the value of a is: "+a+"<br><br>");
document.write("The value of --a is: "+(--a)+"<br>");
document.write("Now the value of a is: "+a+"<br><br>");
document.write("The value of a-- is: "+(a--)+"<br>");
document.write("Now the value of a is: "+a+"<br><br>");

//Task#2

var a=2;
var b=1;

document.write("a is "+a+"<br>");
document.write("b is "+b+"<br>");
document.write("Result is "+((--a)-(--b)+(++b)+(b--)));
