// 1. Map is a function of array
// 2. map returns a new array

// arr1 = [23, 55, 4, 3, 22, 298]

// const newnum = arr1.map((n) => { return n ** 2 });
// // console.log(newnum);
// price = [2, 65, 92, 659, 5, 62, 98, 29, 8]
// // const newprice=price.map((m)=>{ return m+'₹'})
// const newprice = price.map((m) => { return m + '₹' })
// // console.log(newprice);

// const ar2 = [23, 44, 5, 4, 3, 22];
// // create a new array where if old element is even
// const newar2 = ar2.map((k) => {
//     if (k % 2 == 0)
//         return k /= 2;

//     else
//         return k *= 2;

// })
// console.log(newar2);
// const newarr2=ar2.map((n)=>n%2==0?n/2:n*2)
// console.log(newarr2);
// const filteredarr2=ar2.filter((a)=>{return a%2!==0})
// console.log(filteredarr2)
a = [];
c = 0;
const checkprime = (n) => {
    for (let i = 2; i <= (Math.sqrt(n)); i++) {
        if (n % i == 0)
            c++;
    }
    if (c == 0)
      {a.push(n);
console.log(n)
}
}
const arr=ar2.filter((a)=>{return a%2!==0})
console.log(arr)
checkprime(22)
