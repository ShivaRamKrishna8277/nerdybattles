//menu toggle
function openMenu(){
    document.querySelector(".mobileMenuWrapper").classList.add('activeMobileMenuWrapper');
    document.body.style.overflow = "hidden";
}
function closeMenu(){
    document.querySelector(".mobileMenuWrapper").classList.remove('activeMobileMenuWrapper');
    document.body.style.overflow = "auto";
}