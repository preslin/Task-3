//XML-HTTP REQUEST
var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
 request.onload=function(){
     var result=JSON.parse(request.response);
    console.log(result);
  for (i=0;i<result.length;i++){
   console.log(result[i].flags)


   }
  for(var i=0;i<result.length;i++){
     console.log(result[i].region,result[i].subregion,result[i].population)
   }
}



let obj1={name:"person 1",age:5}
let obj2={age:5,name:"person 1"}

console.log(obj1.name,obj1.age);
console.log(obj2.age,obj2.name)