const slides = document.querySelectorAll(".carousel-img")
const btns = document.querySelectorAll(".btn")
const indicators = document.querySelectorAll(".indicator")


let current_slide = 0
let max_slide = slides.length - 1

const updateslide = (current_slide) =>{
    slides.forEach((slide,index)=>{
        slide.style.transform = `translate(${(current_slide-index)*100}%)`
    })
}
const updateindicators = (current_slide) =>{
    indicators.forEach((indicator,index)=>{
        indicator.classList.toggle("active", index == current_slide)
    })
} 

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(btn.classList.contains("btn-next")){
            current_slide++;
        }
        else{
            current_slide--;
        }
        if(current_slide > max_slide){
            current_slide = 0
        }else if(current_slide < 0){
            current_slide = max_slide
        }

        updateslide(current_slide)
        updateindicators(current_slide)
    })
})

indicators.forEach((indicator,index)=>{
    indicator.addEventListener("click",()=>{
        current_slide = index
        updateslide(current_slide)
        updateindicators(current_slide)
    })
})


