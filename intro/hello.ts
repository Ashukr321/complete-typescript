//  variables alias in the typescripts 
type name = string;
const name1:name = "Ashutosh kumar";
console.log(name1);
//  create the object alias  
type userInfo = {
  name:string,
  age:number,
  address:string,
}

const user:userInfo  ={
  name:"ankit kumar singh",
  age:21,
  address:"village balua bihar siwan 841238"
}

console.log(user);

const userName:string = "ashutosh kumar";
console.log(userName.toUpperCase().length);

const userNum:number= 1234;
console.log(userNum);