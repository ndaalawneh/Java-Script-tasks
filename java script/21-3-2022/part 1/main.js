
/* 1. Write a JavaScript program that accept two integers and
 * display the larger. Go to the editor */
/******* Start Your Code *********/
  

var num1 = window.prompt("enter your first number");
var num2 = window.prompt("enter your second number");

if(num1>num2){
    console.log(num1);
}
else{
    console.log(num2);
}


 /******* End Your Code ********* */


 /* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
  let x=3;
  let y=-7;
  let z=2;
  let product=0;
  product =x*y+z;

  if(product<0){
      window.alert("the sign is -");
  }
  else{
      window.alert("the sign is positive");
  }




 /******* End Your Code ********* */



  /* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
var a= 0;
var b=-1;
var Z= 4;
if (a>b && a>Z)
{
        if (b>Z)
        {
            window.alert(a + ", " + b + ", " +Z);
        }
        else
        {
            window.alert(a + ", " + Z + ", " +b);
        }
}
else if (b>a && b >Z)
{
        if (a>Z)
        {
             window.alert(b + ", " + a + ", " +Z);
        }
        else
        {
             window.alert(b + ", " + Z + ", " +a);
        }
}
else if (Z>a && Z>b)
{
        if (a>b)
        {
            window.alert(Z + ", " + a + ", " +b);
        }
        else
        {
            window.alert(Z + ", " + b + ", " +a);
        }
}  
 /******* End Your Code ********* */



 



 /*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
a=-5;
b=-2;
c=-6;
d= 0;
f=-1;
if (a>b && a>c && a>d && a>f)
{
    window.alert(a);
}
else if (b>a && b>c && b>d && b>f)
{
    window.alert(b);
}
else if (c>a && c>b && c>d && c>f)
{
    window.alert(c);
}
else if (d>a && d>c && d>b && d>f)
{
    window.alert(d);
}
else
{
    window.alert(f);
}
 /******* End Your Code ********* */







  /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
  let X = window.prompt("enter the value");
  let Y = window.prompt("enter the other value");

  if(x>y){
      document.write("hello world");
  }
  else{
      document.write("Goodbye");
  }
 /******* End Your Code ********* */





