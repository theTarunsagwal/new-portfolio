let exit=document.querySelector(".menu_bar");
let menu=()=>{
    exit.classList.toggle("menu0")
}
window.addEventListener("load", (event) => {
    timer= setInterval(()=>{
        let loader=document.querySelector(".loader")
        let yellow=document.querySelector(".color_yellow")
        let yellowone=document.querySelector(".color_yellow1")
        let black=document.querySelector(".color_black")
        let upyellow=document.querySelector(".up_yellow")
        let upyellowone=document.querySelector(".up_yellow1")
        let downblack=document.querySelector(".down_black")
        let blackone=document.querySelector(".color_black1")
        loader.classList.toggle("loader");
        yellow.classList.toggle("color_yellow");
        yellowone.classList.toggle("color_yellow1");
        blackone.classList.toggle("color_black1");
        black.classList.toggle("color_black");
        upyellow.classList.toggle("up_yellow");
        upyellowone.classList.toggle("up_yellow1");
        downblack.classList.toggle("down_black");
    },2500)
    console.log(timer);
  });

