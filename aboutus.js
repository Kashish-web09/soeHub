const counter=document.getElementById("happyCount");
let count=0;
let target=10000;
const interval=setInterval(()=>{
    count++;
    counter.innerText=count;

    if(count===target){
        clearInterval(interval);
    }
},3000);