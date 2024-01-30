// //-----1---
// // var m = document.createElement('p'), //
// //   mText = document.createTextNode("mmmttt");
// // m.appendChild(mText);
// // document.body.appendChild(m);

// // console.log("nn");

// // ----2---getElementById("m1");  id 
// // let m=document.getElementById("m1");
// // m.innerHTML="mohamed";

// //----3---
// // let myE=document.getElementsByTagName('p');
// // console.log(myE.length); //3

// // // myE.innerHTML="mohamed";//will not change

// // //----4-
// // myE[0].innerHTML="mohamed";

// //---5--document.getElementsByclassName('p'); |not compatible with ie 8 
// // let myE=document.getElementsByClassName('m1');
// // console.log(myE.length); //3

// // // myE.innerHTML="mohamed";//will not change

// // myE[2].innerHTML="mohamed";

// //--6-- document.querySelectorAll() |not compatible with ie 8
// // let m=document.querySelectorAll("div.m1");
// // m[1].innerHTML="tarek";
// // m[2].innerHTML="tarek";//properties of undefined (setting 'innerHTML')

// //--7-- document.title
// // let mydiv=document.getElementById("show");
// // mydiv.innerHTML=document.title;

// // ---8-- document.images
//  let mydiv=document.getElementById("show");
// // mydiv.innerHTML=document.images.length;
// mydiv.innerHTML=document.images[1].src+"<br>"+document.images[1].src;
// let mydiv2=document.createElement("p"),
// mText = document.createTextNode("mmmttt");
// mydiv2.appendChild(mText);
// document.body.appendChild(mydiv2);
// for(let i=1;i<document.images.length;i+1){
   
//      document.write( mydiv2.innerHTML=document.images[i].src);
// }
// ----------9------ events--
// let m0=document.getElementById("buy");
// let m1=document.getElementById("mudiv")
 
// function m(){
//  const t=document.createElement("h1")
//  t.innerText="mohamed tarek "
//  m1.appendChild(t)

// }

// m0.addEventListener("click",m)
//----10----eo.target 
// m0.addEventListener("click",

// (eo)=>{
//     console.log(eo.target); 
   

// }

// );