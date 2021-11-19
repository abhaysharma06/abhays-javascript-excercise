const _ = require('lodash');

const members = [
    {name: 'Laveesh Gupta', age: 20},
    {name: 'Yash Jangid', age: 40},
    {name: 'Firoz Khan', age: 41},
    {name: 'Amrit Srivastava', age: 17},
    {name: 'Chandraprakash Sharma'},
    {name: 'Swpril Ahuja', age: 45},
    {name: 'Yogesh Khatri', age: 51}
  ];

// 1
const arr_fname = _.map(members,(member)=>{
    fname = member.name.split(' ')[0]
    return fname
})
console.log(arr_fname);

// 2
const arr_lname = _.map(members,(member)=>{
      const split_name = member.name.split(' ')
      const lname = split_name[1].toUpperCase()
      const name = `${split_name[0]} ${lname}`
      const age = member.age
      return {name,age}
})
console.log(arr_lname);

// 3
_.forIn(members,(key)=>{
  if(key.age>41 && key.age<60){
      console.log(key.age);
  }    
})

// method 2
const age_arr =  _.filter(members,(member)=> member.age>41 && member.age<60)
console.log(age_arr);


// 4

const maximum = _.reduce(members,(total,val)=>{

   if ((!!+val.age)===true)
    return total + val.age;
   else 
    return total + 0
},0)
const avg = maximum/members.length
console.log(avg);


// 5  
let max = 0
const maxAge = _.reduce(members,(total,value)=>{
     if(value.age>max){
         total = value.name
         max = value.age
     }
     return total;
},'')
console.log(maxAge);

// 6 
const nonage = []
const young = []
const older = [] 
const age_arr = _.forEach((member)=>{
   
      if(member.age>=35)
      older.push(member.age)
      else if(member.age<35)
      young.push(member.age)
      else
      nonage.push(member.age)
  

})
console.log({nonage,young,older});

// 7 
_.insert = function (arr, index, item) {
    arr.splice(index, 0, item);
  };
  
  _.insert(members,2,{name:'abhay',age:21});
  
  console.log(members);

// 8 
const [first,second] = members
console.log(first,second);

// 9 
const addItem = _.spread(function(...r){
    return [{name:'kunal', age:22},...r]
})
const ans =addItem(members);
console.log(ans);

// 10
const [{name, age}]=members
console.log(name,age);

// // 11
const [{name:fullname,age:currage}]=members;
console.log(fullname);

//12 
// const [{name,}] = members
// console.log(name);

// 13
const newobj = _.spread((...r)=>{
   return {...r}
})
const newObjAns = newobj(members)
console.log(newObjAns);
const {0: {name:fullname='Lavesh',age}}=newObjAns
console.log(fullname,age);
// method 2

console.log(_.pick(newObjAns,[0]));

