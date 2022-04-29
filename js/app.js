window.addEventListener("DOMContentLoaded", function() {

   const body = document.querySelector("body");

   const accreptBtn = document.querySelector("#acrept");
   const color = document.querySelector("#color");
   const size = document.querySelector("#size");
   const radius = document.querySelector("#radius");
   const pointer = document.querySelector(".cursor");

   accreptBtn.addEventListener("click", function () {
       document.querySelector("h1").remove();

       document.addEventListener("mousemove", function (e) {
           let paint = document.createElement("div");
           paint.classList.add("item");

           body.appendChild(paint)
           let x = e.pageX;
           let y = e.pageY;

           paint.style.left = x + "px";
           paint.style.top = y + "px";
           paint.style.background = color.value;
           paint.style.width = `${size.value}px`;
           paint.style.height = `${size.value}px`;
           paint.style.borderRadius = `${radius.value}px`
       });
   });

   document.addEventListener("mousemove", function(e) {
    let x = e.clientX;
    let y = e.clientY;

    pointer.style.left = x + "px";
    pointer.style.top = y + "px";
    pointer.style.width = `${size.value}px`;
    pointer.style.height = `${size.value}px`;
    pointer.style.borderRadius = `${radius.value}px`;
     pointer.style.borderColor = color.value;

   })

})