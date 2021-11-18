/*
const members = [
  {name: 'Laveesh Gupta', age: 20},
  {name: 'Yash Jangid', age: 40},
  {name: 'Firoz Khan', age: 41},
  {name: 'Amrit Srivastava', age: 17},
  {name: 'Chandraprakash Sharma'},
  {name: 'Swpril Ahuja', age: 45},
  {name: 'Yogesh Khatri', age: 51}
];
1. Get array of first names of everyone
2. Make everyone's last names in UPPERCASE in given array of objects
3. Get entries where age is between 41-60
4. Get average age
5. Get Person with maximum age
6. Divide persons in three groups, result should look like
    {
      'young': [],
      'old': [],
      'noage': []
    }
    Less than 35yrs is young, above 35 is old
7. add a new member to same members array instance at index 2
8. extract first and second element using destructing
9. Create a new array instance adding a new member at index 0,
   and keeping existing afterwards
10. Extract properties of object using destructuring
11. Rename extracted property of object while destructing
12. Destructure any property of an object and use spread operator
    to get remaining properties in an object
13. Create a new object by copying using spread operator, override
    one of the properties to assign a new value in the same step
14. Use reduce function on array and object
*Thank you for your business! We look forward to working with you again.
*/
const members = [
    {name: 'Laveesh Gupta', age: 20},
    {name: 'Yash Jangid', age: 40},
    {name: 'Firoz Khan', age: 41},
    {name: 'Amrit Srivastava', age: 17},
    {name: 'Chandraprakash Sharma'},
    {name: 'Swpril Ahuja', age: 45},
    {name: 'Yogesh Khatri', age: 51}
  ];

  //  1 Get array of first names of everyone

// let fname = members.map((member)=>{
//   const names = member.name.split(" ");
//   return names[0];
//   // fname_arr.push(names[0]) 
//   // return fname       
// })
// console.log(fname);

// // 2. Make everyone's last names in UPPERCASE in given array of objects
const lname = members.map((member)=>{
    const split_name = member.name.split(" ");
    return split_name[1].toUpperCase();
})
console.log(lname);

// // // 3. Get entries where age is between 41-60
// Method 1 const age = members.forEach((member)=>{

//       if(member.age>=41&&member.age<=60){
//           console.log(member)
//       }
// })

 // 4. get avgof age
// let filterAge = members.filter(({ age }) => Number.isInteger(age))
// let average = filterAge.reduce((total, next) =>
// total + next.age, 0) / members.length;
// console.log(average);
  
//5 get person with max age

// var max = 0;
// console.log(members.reduce((acc, a) => {
//   if (a.age > max) {
//     acc = a.name
//     max = a.age;
//   }
//   return acc;
// }, ""))
        
        



// 6 
// const nonage = []
// const younger = []
// const older = []
// const age = members.forEach((member)=>{
//       if(member.age==null){
//           nonage.push(member.age)
//       }else if (member.age<=40){
       
//         younger.push(member.age)
//       }else{
//         older.push(member.age)
//       }
// })
// console.log("noAge" , nonage);
// console.log("Younger",younger);
// console.log("Older",older);

// 7
// members.splice(2,0,{name:"Abhay Sharma", age:21})
// console.log(members);

// // 8 
// const [first,second] = members
// console.log(first,second);

// // 9
// const newArr = [
//     {name:"kunal Mod" , age: 22},
//     ...members
// ]
// console.log(newArr);

// // // 10
// for(let { name, age } of members) {
//     console.log(`${name} is ${age} years old!`);
// }

// // 11
// const [{name:fullname,age:currage}]=members;
// console.log(fullname);


// // 12
// for(let { name,...age } of members) {
//       console.log(name,age);
//  }

// // 13 
// const newObj = {...members}
// members[1].name = 'Suresh'
// members[1].age = 55;
// console.log(newObj);


// // 14
// // let averages = filterAge.reduce((total, next) =>
// // total + next.age, 0) / members.length;
// // console.log(averages);