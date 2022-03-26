console.log('Here is : ', 'Object')


/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/


var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];

var info = [
    {
        name : { first : "nada" , last :"alawneh"} , age : 24 , dob :"16-9-1997" , favFood:["flafel" ,"burger" ,"shawrma"] , favMovie:["harrypotter" , "me and you" , "the fault in our stars" , "princes diaries"]
    }
]

/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides

Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/
var persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
  ];

  function firstName(a){
   let x = [];
   for ( i=0 ; i<a.length ; i++){
   x[i] = a[i].name.first;
   }
   return x ;
  }
 
 document.write(firstName(persons));

/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons

Ex: averageAge(persons) => 41.2
*/
var persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
  ];

function averageAge(a){
    let avg=0;
    for( i=0 ; i<a.length ; i++){
        avg=avg+a[i].age;
    }

    return avg/a.length;
}

     document.write( '<br>' + averageAge(persons));

/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person

Ex: olderPerson(persons) => "Soso Al-Amora"
*/
var persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
  ];

  

function olderPerson(a){
let minAge = a[0].age;
for ( i=0 ; i<a.length ; i++ ){
    if ( minAge < a[i].age ){
        minAge = a[i].age;
        fullname = a[i].name.first + a[i].name.last;
    }

}
return fullname;

}
document.write('<br>' + olderPerson(persons));

/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/
var persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
  ];

  function longestName(a){
      
  
  let l = a[0].name.first.length + a[0].name.last.length;

  for ( i=0 ; i<a.length ; i++){
      if ( l< a[i].name.first.length + a[i].name.last.length ){
          l = a[i].name.first.length + a[i].name.last.length ;
           n = a[i].name.first + a[i].name.last;
      }
      
  }
  return n; 
  }
  document.write( '<br>' + longestName(persons));

  

/*
6
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/

//////////////////////////////////////////////////////////////////
var persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
  ];

  function longestName(a){
      let index=0;
  let n=[];
  let l=a[0].name.first.length + a[0].name.last.length;
  for( i=0 ; i<a.length ; i++){
      if (l< a[i].name.first.length + a[i].name.last.length){
          l=a[i].name.first.length + a[i].name.last.length ;
           n=a[i].name.first + a[i].name.last
      }
      
  }
  return n; 
  }
  document.write( '<br>' + longestName(persons));

/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??

Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,{}
  mama:1,
  hello:3
}
*/

function repeatWord(a){
    let word = a.toUpperCase().split(" ");
    let rep = 0 ;
    for ( i=0 ; i<word.length ; i++){
        for ( j=0 ; j<word.length ; j++){
            if (word[i]==word[j]){
                rep++ ;


            }
        }

        console.log( word[i] + rep);
        rep=0 ;
    }
}
repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO");







/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??

Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/
function repeatChar(string) {
    string = string.toLowerCase();
    object = {};
    for (i = 0; i < string.length; i++) {
        if (!object.hasOwnProperty(string[i])) {
            object[`${string[i]}`] = 1;

        } else {
            object[`${string[i]}`]++;
        }


    }

    return object;
}

console.log(repeatChar("maMababatetacedo"));

/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array

Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
=>  {a: 1, cat: 3}
*/


function selectFromObject(object, array) {
    result = {};
    for (i = 0; i < array.length; i++) {
        for (const [key, val] of Object.entries(object)) {
            if (key == array[i]) {
                result[`${array[i]}`] = val;

            }
        }
    }

    return result;

}
console.log(selectFromObject({ a: 1, cat: 3 }, ['a', 'cat', 'd']));
