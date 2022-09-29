const gallery = document.querySelector(".gallery")

const showModal = e =>{
    if(e.target.classList.contains("gallery-item")){
        let src = e.target.getAttribute("src")
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'))
        myModal.show()
    }
}

gallery.addEventListener("click", showModal)