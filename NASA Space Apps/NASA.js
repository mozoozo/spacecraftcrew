const menue = document.querySelector("#menue")
const menue2 = document.querySelector("#menue2")

function myFunction(){
    menue2.classList.add("hi");
    document.body.style.overflow = "hidden";
}

function myFunction2(){
    menue2.classList.remove("hi");
    document.body.style.overflow = "auto";
}

