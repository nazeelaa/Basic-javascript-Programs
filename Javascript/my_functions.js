let x = add(23, 9);   

function add(p, q) 
{
  return p + q;            
}
console.log("the value is:"+x);

let person = {
  name:"nazeela",
  hobby:"badmintion",
  scores:{
    math:28,
    se:60,
  },
  sayhi:function()
  {
    console.log("hi");
  }
}
console.log(person.name);
console.log(person.scores.math);
console.log(person.sayhi());