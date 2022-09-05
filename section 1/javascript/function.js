// function addnum(a,b)
// {
//     var n="this works only in function"
//     console.log(a+b);

// }
// calling the function and defining the function
// addnum(5667,76);
// addnum(23,56);
// addnum(67,87);
// addnum(23,56);
// addnum(23,56);
// addnum(23,56);
// console.log(n)

// factorial
// fact=1
// function factorial(a)
// {
//     for(let i=1;i<=a;i++)
//     fact*=i;
//     return fact;
// }
// // factorial(20)

// const res =factorial(20)
// console.log(res)

// function fact1(a,b)
// {
//     s=a+b;
//     p= a*b;
//     return s;
// }
// const sumpro = function(a,b)
// {
//     s=a+b;
//     p= a*b;
//     // es6 ka part hai
//     return [s,p];
// }
// const [sum,pro]=sumpro(34,67);
// console.log(sum,pro);

// const checkperfect=(n)=>{
//     console.log(n)
// if(n**0.5=== parseInt(n**0.5))
// console.log("perfact square");
// else
// console.log(" not perfact square");

// }

// checkperfect(100)
// console.log(2**5);

c = 0;
const checkprime = (n) => {
    for (let i = 2; i <= (Math.sqrt(n)); i++) {
        if (n % i == 0)
            c++;
    }
    if (c == 0) {
        console.log(n)
        // console.log("number is prime");
    }
    else {
        
        // console.log(n)
        // console.log("number is not prime");
    }
}


for(j=2;j<=100;j++)
    
{ c=0;
    checkprime(j);
}
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////
// rev = 0;
// dig = 0;
// const checkpa = (n) => {
//     temp = n;
//     while (n > 0) {
//         console.log(rev)
//         dig = n % 10;
//         rev=rev*10 + dig;
//         n = parseInt(n / 10);

//     }
//     console.log(rev)
//     if (rev === temp)
//         console.log("number is palindrome");
//     else
//         console.log("number is not palindrome");
// }
// checkpa(12321)

// console.log(movies.indexof('element'))
// shift remove first element
movies.shift()
