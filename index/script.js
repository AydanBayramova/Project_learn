
function plus(a,b){
    return(a+b)
    
    
}
const netice=plus(2,4)
console.log(netice);




  const mult=function (d){
    return(d*d);
  }
  mult(5);
  console.log(mult(5));


  const myArr=[3,5,function(b){console.log("array elementi");return(b)}]
  const exam=myArr[2](6);
console.log(exam);
  const myObj={
    name:"aa",
    sur:"bb",
    age:12222,
    func:function(){
        console.log("obyekt elementi");
    }
  }
  myObj.func();
  console.log(2+(function(){return(3)})()); //IIFE
  const mytextfunc=function(num){
    return  function  tofunction() {
        console.log(num*3);
    }
  }
  mytextfunc(4)();