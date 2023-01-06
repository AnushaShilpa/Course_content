
/// using promises
 const p =new Promise((resolve,reject)=>
   {
    setTimeout(() =>
     {
      resolve("c")
    },1000);
   })
   const p1 =new Promise((resolve,reject)=>
   {
    setTimeout(() =>
     {
      resolve("d")
    },2000);
   })
   const p2 =new Promise((resolve,reject)=>
   {
    setTimeout(() =>
     {
      resolve("e")
    },3000);
   })
   
   const p0 =new Promise((resolve,reject)=>
   {
    setTimeout(() =>
     {
      resolve("a")
    },0);
   })
   
   const p3 =new Promise((resolve,reject)=>
   {
    setTimeout(() =>
     {
      resolve("b")
    },500);
   })
  
  

p.then(text=> console.log(text))
p1.then(text1=> console.log(text1))
p2.then(text2=> console.log(text2))
p0.then(text0=> console.log(text0))
p3.then(text3=> console.log(text3))


//Promise.all([p,p1,p2,p0,p3]).then(values=> console.log(values))


/// using async await
async function alpha()
{
  const p =new Promise((resolve,reject)=>
     {
      setTimeout(() =>
       {
        resolve("c")
      },1000);
     })
     const p1 =new Promise((resolve,reject)=>
     {
      setTimeout(() =>
       {
        resolve("d")
      },2000);
     })
     const p2 =new Promise((resolve,reject)=>
     {
      setTimeout(() =>
       {
        resolve("e")
      },3000);
     })
     
     const p0 =new Promise((resolve,reject)=>
     {
      setTimeout(() =>
       {
        resolve("a")
      },0);
     })
     
     const p3 =new Promise((resolve,reject)=>
     {
      setTimeout(() =>
       {
        resolve("b")
      },500);
     })   
   let a1=await p0
   let a2=await p3
   let a3=await p
   let a4=await p1
   let a5=await p2
    console.log(a1);
    console.log(a2);
    console.log(a3);
    console.log(a4);
    console.log(a5);
}
console.log("alphbets are")
alpha()
