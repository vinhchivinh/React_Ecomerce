window.addEventListener("load",function(){
    var pre = document.querySelector(".pre");
    var next = document.querySelector(".next");
    var mainSlide=this.document.querySelector(".main-slide");
    var withMainSlide =this.document.querySelector(".main-slide").offsetWidth;
    var slideNumber =this.document.querySelectorAll(".slide-item").length;
    var countSlide=0;
    var width =0;
    next.addEventListener("click",function(){
        if(countSlide< slideNumber){
            width=width-580;
            mainSlide.style.transform=`translate(${width}px)`;
            countSlide++;
        }
        })
    pre.addEventListener("click",function(){
        if(countSlide>0) {
            width=width+580;
            mainSlide.style.transform=`translate(${width}px)`;
            countSlide--;
        }
        })
})



  



