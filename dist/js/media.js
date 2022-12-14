
const media = document.querySelector(".media");
const imgs = document.querySelectorAll(".media-contener__item--img")
const buttons = document.querySelectorAll(".media-contener__item--btn")

const fullScreen =   document.createElement('div')
const fullImg = document.createElement('img')
document.body.append(fullScreen)
fullScreen.append(fullImg)

const showPhoto = (e)=>{
    buttons.forEach((button, btnIndex)=>{
        if(e.target===button){
            imgs.forEach((img, imgIndex)=>{
                if(btnIndex===imgIndex){
                  fullImg.setAttribute('src', img.src)
                  fullImg.classList.add("fullImg")
                  fullScreen.classList.add("fullScreen")
                  document.querySelector('body').classList.add("stopScroll")

                }
            })
        }
    })
}
const closeFullScreen = e =>{
    if(e.target.matches(".fullScreen")){
        fullImg.classList.remove("fullImg")
        fullImg.removeAttribute('src')
        fullScreen.classList.remove("fullScreen")
        document.querySelector('body').classList.remove("stopScroll")
    }
}


media.addEventListener("click", showPhoto)
fullScreen.addEventListener("click", closeFullScreen)