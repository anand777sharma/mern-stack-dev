// objects are use to store key value pairs.
let user = { name: 'raju', age: 25, email: 'raju@gmail.com','enroll-no':'ghdsvchdv' };
let key='enroll-no';
// console.log(user.email);
// console.log(user['enroll-no']);
// console.log(user[key]);
// console.log(user);
// console.log(user.address);
user.address='lucknow-226017';
// user['address']='lucknow-226017';
// console.log(user);
user.name='shamu';
// console.log(user);

let brand='samsung';
let model='galaxy s22';
let colors=['white','black','grey']
let price=60000;
let smartphone={ brand,model,colors,price}
// console.log(smartphone);
// console.log(smartphone.colors[1]);
// const printDetails=(obj)=>{

//     console.log(obj.brand);
//     console.log(obj.model);
// }
// printDetails(smartphone);
// // printDetails();this will throw error
const printDetails=({brand,model})=>{

    // console.log(brand);
    // console.log(model);
}
printDetails(smartphone);
let myorder=[
    {id:2436,name:'tshirt',price:500},
    {id:2877,name:'tie',price:589},
    {id:2566,name:'trouser',price:5000}
];
console.log(myorder[1].name);
const k=myorder.filter((obj)=> obj.price<1000)
console.log(k)

