
const msg=document.querySelector('.msg')
const guess=document.querySelector('input')
const button=document.querySelector('.button')
let randumwords="";
let newwords="";

let play=false;
let sword=['python','javascript',"mongodb","#c","c++","html","css","java","reactjs","anguler",
"sql","android","swift"]


createnewwords=()=>{
    let rannum=Math.floor(Math.random()*sword.length)
    let newtempswords= sword[rannum]
    // console.log(newtempswords.split(""))
    return newtempswords;
}
const scramleword=(array)=>{
for(let i=array.length -1;i>0;i--){
    let temp=array[i]
    // console.log(temp)
    let j=Math.floor(Math.random()*(i+1))
    // console.log(i)
    // console.log(j)
    array[i]=array[j];
    array[j]=temp;

}
return array;
}
button.addEventListener("click",function(){
if(!play){
    play=true
    button.innerHTML="guess"
    guess.classList.toggle('hidden')
     newwords= createnewwords();
     randumwords=scramleword(newwords.split("")).join("")
    //  console.log(randumwords);
     msg.innerHTML=randumwords;
    
}
else{
    let tempword=guess.value;
    if(tempword===newwords){
        
        play=false;
        msg.innerHTML=`Awasome its correct it is ${newwords}`
        button.innerHTML=`start again`
    guess.classList.toggle('hidden')
        
    }
    else{
        
        msg.innerHTML=`sorry boss its incorrect plz try again  ${randumwords}`

    }
}
})
