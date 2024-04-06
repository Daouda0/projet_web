console.log("bonjour")

const icontoggleMobileNav =document.getElementById("toggleMobileNav")
const closeMobileNav = [].slice.call(document.getElementsByClassName("mobile-close"))


const toggleNave = ()=>{
    const  mobileNav = document.getElementsByClassName("mobile")[0]
    if(!mobileNav.classList.contains("none")){
        mobileNav.classList.toggle("close")
        window.setTimeout(() => {
            mobileNav.classList.toggle("none")
            mobileNav.classList.toggle("close")
        },2000)
    }
    else{
        mobileNav.classList.toggle("none")
    }
}

icontoggleMobileNav.addEventListener("click", toggleNave)
closeMobileNav.forEach(item=> {item.addEventListener("click",toggleNave)
    
});
