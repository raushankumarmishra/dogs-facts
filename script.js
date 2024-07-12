const URl="https://dog-api.kinduff.com/api/facts";
const facts=document.querySelector(".facts");
const dogpic="https://dog.ceo/api/breeds/image/random";

var button=document.querySelector("#btn");
var image=document.querySelector(".imageD");
const getFacts=async ()=>{
    console.log("getting data...")
    let response=await fetch(URl);
    console.log(response);//this will give you JSON format data.
    let data=await response.json();
    // console.log(data.facts);/
facts.innerText=data.facts;

}
const getImage=async ()=>{
    console.log("getting data...")
    let response=await fetch(dogpic);
    console.log(response);//this will give you JSON format data.
    let data=await response.json();
    console.log(data.message);
    image.src=data.message;
    image.style.height = '40vh';
// facts.innerText=data.facts;


}
button.addEventListener("click",getImage);
button.addEventListener("click",getFacts);
