// creating a object 
var obj ={
    name : "John",
    age : 20
}
//console.log(obj);

// for adding  key & value in the above code.

var obj ={
    name : "John",
    age : 20
}
obj.gender = "male";
//console.log(obj);


// for printing particular key & value in the above code.

var obj ={
    name : "John",
    age : 20
}
//console.log(obj.name);

//  Can we give an array inside the objects?

var obj ={
    name : "John",
    age : 20,
    gender : "male",
    attendance : ["mon","tue","wed","thu"]
}
//console.log(obj);

//task resume

var resume = {
    Name : "Anish",
    age :27,
    gender: "male",
    qualification : ["degree","12th","10th"],
    location : "chennai",
    experience : "3 years experience in TTS",
    languagesKnown : ["tamil","english"]
}
//console.log(resume);

// for printing key in the array 
var obj ={
    name : "John",
    age : 20,
    gender : "male",
    attendance : ["mon","tue","wed","thu"]
}
for(var i=0;i<obj.attendance.length;i++){
   //console.log(obj.attendance[i])
}
//for (i in obj.attendance){
  //  console.log(i,obj.attendance[i])
//}

//JSON
var obj ={
    "name" : "John",
    "age" : "20",
    "gender" : "male",
    "attendance" : ["mon","tue","wed","thu"]
}
//console.log(obj);

//Array of objects 

var arr = [
    {
        "name" : "John",
        "age" : "20"
    },
    {
        "name" : "Anish",
        "age" : "27"
    },
    {
        "name" : "Ram",
        "age" : "23"
    },
    {
        "name" : "Stev",
        "age" : "25"
    }
];
for(var i=0;i<arr.length;i++){
    //console.log(arr[i].name,": " ,arr[i].age );
}

//Hoisting- developer mistake 
/* console.log(a);
var a = 7;
var b = 6;
console.log(b); */
// to solve hoisting issue 
//scope & block variable let & const are used 
/* console.log(a);
let a = 7;
var b = 6;
console.log(b); */

//copy by value
var a = 23;
var b = a;
a =24
console.log(a);
// b value cannot be changed 

//copy by reference

/* var arr =[23,24,25,26];
var arr1 = arr;
arr1[0] = 456;
console.log(arr1[0]); */


