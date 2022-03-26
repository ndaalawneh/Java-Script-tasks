console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/

let arr=[1 , 7 , 9 , 45];
let name =["str", "alex" , "moh"];
let input=['the' , 'fox' , 'over' , 'lazy' , 'dog'] ;


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
var fruits=["Tomato","Banana","Watermelon"]
document.write("<br>"+fruits.indexOf("Tomato",0)+"<br>");
document.write(fruits.indexOf("Banana",0)+"<br>");


/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
let food=["mnsaf" , "burger" ,"botato" ,"shawrma" , "flafel"];
let sport=["football" , "tennis" ,"basketball"];
let movie=["harrypotter" , "the fault in our stars" , "me and you"  , "tom and jerry"];

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
function firstOfArray(a){
document.write("<br> the first element of array is : "+a[0]+"<br>");
}
firstOfArray([1,4,5]);

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
function lastOfArray(a){
    let length=a.length;
    document.write(a[length-1]+"<br>");
}
lastOfArray([1,4,5]);

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0,5,7,9];
array.push(10);
array.shift([0]);
array.shift([1]);
array.shift([2]);
array.unshift(1,3,4,6,8);
document.write(array+"<br>");
    


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/


var array2 = [5,9,-7,3.5]
document.write(array.push());
document.write(array.unshift());
document.write(array.shift());
document.write(array.pop()+"<br>");





/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
function middleOfArray(a){
   Y=parseInt(a.length/2);
if(a.length%2==0){
document.write(a[Y-1]);
}
else{
    document.write(a[Y]);
}
}

let myarr=[1,2,3,4,5,6,5];
middleOfArray(myarr);



 



/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/

 animals = ['cat', 'ele', 'bird' ,'zebra' ,'elephant'];
 animals[0]="cat";
 animals[1]="ele";
 animals[2]="bird";
 animals[3]="zebra";
 animals[4]="elephant";




/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
var nums= [1,2,3,8,9];
function indexOfArray(nums,X){
let Y=nums[X];
document.write('<br>' + Y +'<br>');
}
indexOfArray(nums,2);
/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/

function arrayExceptLast(a){

nums.pop();
return a;

}
var nums= [1,2,3,8,9]
document.write(arrayExceptLast(nums));
/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
var nums= [1,2,3,8,9];
function addToEnd(nums ,p2){
nums.push(p2); 
return nums
}

addToEnd(nums,55);
document.write('<br>'+ nums );






// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

var nums= [1,2,3,8,9];
function sumArray(nums){
   let sum = 0;
   for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
   }
   document.write('<br>' + sum);
}
sumArray(nums);







/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums= [1,2,3,8,9];
function minInArray(nums){
let min=nums[0];
for (i=0 ; i<nums.length ; i++){
    if(min>nums[i]){
        min=nums[i];
    }
    
    
}
document.write('<br>'+ min);
}
minInArray(nums);


/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums= [1,2,3,8,9];
function removeFromArray(n,v){
for(i=0 ; i<n.length;i++){
    if(v==n[i]){
    delete n[i];
    }
}
document.write('<br>' + n);
}
removeFromArray(nums,8);

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums= [1,2,3,8,9];
let odd=[];
let even=[];
function oddArray(a){
    for(i=0 ; i<a.length ; i++){
        if(a[i]%2 !==0){
            odd.push(a[i]);
        }
        else{
        even.push(a[i]);
        }
    }
    document.write( '<br>' + odd);

}
oddArray(nums);

/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums= [1,2,3,8,9];
var nums2= [1,2,3,8,9,77];

function aveArray(a){
let sum=0;
for(i=0 ; i<a.length ; i++){
    sum=sum+a[i];
}
let avg=sum/a.length;
return avg ;
}

 document.write( '<br>' + aveArray(nums)); 
document.write( '<br>' + aveArray(nums2));
/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
function shorterInArray(a){
var X=a[0];
for(i=0 ; i<a.length ; i++){
    if(X.length>a[i].length){
     X=a[i];
    }
}
return X;
}
document.write('<br>' + shorterInArray(strings));

/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var string= "alex mercer madrasa rashed2 emad hala" ;

function  repeatChar(s , ch){
    let B=0;
for(i=0 ; i<s.length ; i++){
    if( s[i]==ch){
    B++;
    }
}
return B;
}
document.write('<br>' + repeatChar(string , "a"));

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
function evenIndexOddLength(a){
    for (i=0 ; i<a.length ; i++){
        if(i%2==0){
            if(a[i].length%2!=0){
                return a[i];
            }
        }

        
    }

}
document.write('<br>' + evenIndexOddLength(strings));


/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums= [44, 5, 4, 3, 2, 10];

function powerElementIndex(a){
for(i=0 ; i<a.length ; i++){
    a[i] = Math.pow(a[i] , i);
    
}
return a;
}
document.write('<br>' + powerElementIndex(nums));

/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums= [5,2,2,1,8,66,55,77,34,9,55,1];
function evenNumberEvenIndex(a){
    
    for(i=0 ; i<a.length ; i++){
       if(i%2==0){
        if(a[i]%2==0){
            document.write('<br>' + a[i]);
              }
       }
    }
   
    }
    evenNumberEvenIndex(nums);
    
