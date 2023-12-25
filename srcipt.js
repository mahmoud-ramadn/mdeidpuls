



// start header scroll

let myheadertow=document.querySelector('.header-two');
console.log(myheadertow);

window.onscroll=()=>{
if(scrollY>0){
    myheadertow.style.width="100%"
    myheadertow.style.top="0px";
    myheadertow.style.Top="0px";
    
    
    myheadertow.style.boxShadow= "#0000ff38 0px 12px 18px 1px";

}else{
    myheadertow.style.boxShadow="0 0 0 0  transparent";
    myheadertow.style.width="1600px";
    myheadertow.style.top="70px"
   
}
if(scrollY>1200&&scrollY<1500){
    window.addEventListener('scroll',startCounters,{

        once:true
    })
}
}




let btnlef=document.querySelector('#left');
let btnright=document.querySelector('#right');
let slidlercard=document.querySelectorAll('.dctors-slider .collocter>div');
let slidertext=document.querySelectorAll('.dctors-slider  .collocter div .text');
console.log(slidertext);
console.log(slidlercard);



    
      
  btnlef.addEventListener("click",()=>{

let card=  Array.from(slidlercard);
console.log(card);
card[2].style.transform="translatex(-100%)";
btnlef.addEventListener("click",()=>{

  card[1].style.transform="translatex(-100%)";
 
})



})

btnright.addEventListener("click",()=>{

let card=  Array.from(slidlercard);
console.log(card);
card[1].style.transform="translatex(0%)";
btnright.addEventListener("click",()=>{
  card[2].style.transform="translatex(0%)";
})
})







let sidlistbtn=document.querySelector('.sid-list .get-pro');

let slidlist=document.querySelector('.sid-list');


sidlistbtn.onclick=()=>{
    slidlist.classList.toggle('togel')
}



let videobtn=document.querySelector(".who-we .box .col:nth-of-type(2) i");
console.log(videobtn);


// makin laygapge


let contaeinr=document.createElement('div');
contaeinr.style.width='100%';
contaeinr.style.height='100%';
contaeinr.style.background=' #202020c9';
contaeinr.style.zIndex="300"
contaeinr.style.position="fixed";
contaeinr.style.top="0";
contaeinr.style.left="0";
contaeinr.style.borderRadius="20px";
let iframe=document.createElement("div");
iframe.style.width="910px";
iframe.style.height="400px";
iframe.style.background="black";
iframe.style.position=" relative";
let creaticonx=document.createElement('i');
creaticonx.classList.add('fa-solid');
creaticonx.classList.add('fa-xmark');
creaticonx.style.position="absolute";
creaticonx.style.top='-20px';
creaticonx.style.right='0';
creaticonx.style.color="white";
creaticonx.style.fontSize='30px';
creaticonx.style.cursor="pointer"
creaticonx.style.width="30px";
creaticonx.style.height='30px';
creaticonx.style.borderRadius="50%";
creaticonx.style.backgroundColor="red"
creaticonx.style.display='flex';
creaticonx.style.alignItems="center";
creaticonx.style.justifyContent="center"
creaticonx.onclick=()=>{
    contaeinr.style.display="none"
}

let crafifame=document.createElement('iframe');
crafifame.src='https://www.youtube.com/embed/mhET-aOJtow?&mute=1';
crafifame.style.width="500px";
crafifame.style.height="200px";
iframe.style.borderRadius="20px";
iframe.style.display='flex';
iframe.style.alignItems="center";
iframe.style.justifyContent="center";
iframe.appendChild(crafifame)
iframe.appendChild(creaticonx)



contaeinr.appendChild(iframe)



contaeinr.style.alignItems="center";
contaeinr.style.justifyContent='center';

contaeinr.style.display="none"
document.body.appendChild(contaeinr)
videobtn.onclick=()=>{
    contaeinr.style.display="flex"
  

}
const counters = document.querySelectorAll(".count");
const speed =400;

// The code to start the animation is now wrapped in a function
const startCounters = () => {
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = parseInt(+counter.getAttribute("data-target"));
      console.log(target);
      const count = parseInt(+counter.innerText);
      const increment = Math.trunc(target / speed);
      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 1);
      } else {
        count.innerText = target;
      }
    };





    updateCount();
  });
}

// On the first scroll in this window, call the function to start the counters





//  star tty i

let cardimge=document.querySelectorAll('.imgsslider div');

console.log(cardimge);

let boximg=Array.from(cardimge)
console.log(boximg);


// star whelll

let scrollcibtaub=document.querySelector('.gallary');
let bactbtn=document.querySelector('.big .fa-arrow-left');
let Nextbtn=document.querySelector('.big .fa-arrow-right');
console.log(scrollcibtaub);
console.log(bactbtn);
console.log(Nextbtn);
let innga=document.querySelectorAll('.innerga  div')

scrollcibtaub.addEventListener("wheel",(evnt)=>{

  evnt.preventDefault();
  scrollcibtaub.scrollLeft+=evnt.deltaY;

});
  
//   Nextbtn.addEventListener('click',()=>{
//     scrollcibtaub.style.scrollBehavior="smooth";
// scrollcibtaub.scrollLeft+="100%";
// })

// bactbtn.addEventListener('click',()=>{
//   scrollcibtaub.style.scrollBehavior="smooth";
// scrollcibtaub.scrollLeft-="100%"
// })




let randno= Math.floor((Math.random() * 4) + 1);
console.log(randno);
