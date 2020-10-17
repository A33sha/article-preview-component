const tooltip = document.querySelector(".tooltip");
const share = document.querySelector("#share");
const share2 = document.querySelector("#share-2");
share.addEventListener("click", ()=>{
    tooltip.style.visibility = "visible";
    share2.style.visibility = "visible";

});

share2.addEventListener("click", ()=>{
    tooltip.style.visibility = "hidden";
    share2.style.visibility= "hid den";
});
tooltip.addEventListener("click",()=>{
    tooltip.style.visibility ="hidden";
    share2.style.visibility = "hidden";
});