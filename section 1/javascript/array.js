
// const nums = [67, 987, 88, 7, 78, 766, 68, 7, 78, 8, 8878, 'nice']
// console.log(typeof (nums));
// 1.Arrayy can contain multiple type of data
// 2. Array support indexing
// 3.Array aredynamic( size can be changed)
// Array are mutable(can be changed)

// const fruits = ["apple", 'banana', 'mango', 'pineapple', 'watermalon']

// indexing used for acessing single element
// console.log(fruits[3]);
// // slicing-accessing multiple element
// console.log( fruits.slice(1,4))
// console.log( fruits.slice(1))
// console.log( fruits.slice(1,10))
// console.log( fruits[100])
// // removing element
// fruits.splice(1,2);
// console.log(fruits);
// // adding new elements
// fruits.push("graphs");
// console.log(fruits)
// // pop omites last element
// fruits.pop() 
// console.log(fruits);
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);

// }
// for (let fr of fruits) {
//     console.log(fr);
// }
// fruits.forEach((element) => { console.log(element) });
// // map
// const numbers=[2,3,6,8,9,4,0]
// // wap to square each numbers in above array and store them in array
// for (let i = 0; i < numbers.length; i++) {
//     fruits[i]=(numbers[i])**
//     console.log(numbers[i]);
// }
// // fruits.forEach((element) => { console.log(element) });
// for (let i = 0; i < numbers.length; i++) {
//    console.log(numbers[i]);
// }
// let newNum=[]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const checkperfect = (n) => {
    if (n ** 0.5 === parseInt(n ** 0.5))
        console.log(n);
    // else
    // console.log(" not perfact square");

}
for (let n = 1; n <= 1000; n++)
    checkperfect(n)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
b=[]
j=0
a= [434, 32, 456, 12, 66, 35, 99, 5653, 345, 23465, 350];
for(let i=0;i<a.length;i++)
{
if(a[i]<100)
{b[j]=a[i];
j++}

}
// for(let i=0;i<b.length;i++)
console.log(b)
