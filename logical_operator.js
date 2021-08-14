//logical operator 
//Logical operators are used to determine the logic between variables or values 

/*
Logical Operators
And  -> &&;
Or -> ||;
not -> !;

*/
//logical and operator
let x = 5, y = 4, z = 6;
let result = (x>y && x>z);
console.log(result);

x=3, y=4, z=3;
result=(y>x && y>z);
console.log(result);

// logical Or operator

console.log(x==5 || y==5 || z==5);
console.log(x==6 || y==0);
console.log( x==0 || y==6);
console.log(x==3|| y==3);

//logical not 
console.log(!(x==y));
console.log(!(x==z));

