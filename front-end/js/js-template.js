// tamam motaghayer haye tarif shode:
const navEl = document.querySelector(".navbar");
const navBrand = document.querySelector(".navbar-brand");
const navLinks = document.querySelectorAll(".nav-link");
const search = document.querySelector(".search-icon");
const search_box=document.querySelector("#search-box")
const search_btn = document.querySelector(".search-btn");
const cartshop = document.querySelector(".cart-shop");
const login = document.querySelector(".login");
const person = document.querySelectorAll(".person");




// --->!! faramoosh nashavad dar soorati ke dar safhe morede nazar, az motoghayeri dar function asli manand function zir estefade karde bashim vali dar safhe mojood nabashad, be moshkel mikhorim
window.addEventListener("scroll", () => {
    if (window.scrollY >= 60) {
        navEl.classList.add("navbar-scrolled");
        navEl.classList.remove("mt-5", "rounded-5", "mx-5");

        navBrand.classList.add("white-color");

        navLinks.forEach((link) => {
            link.classList.add("white-color");
        });

        search.removeAttribute("stroke");
        search.setAttribute("stroke" ,"#eff3ff");

        search_box.classList.remove("bg-color-bg-80");
        search_box.classList.add("bg-color-primary");

        search_btn.classList.remove("bg-color-primary", "white-color");
        search_btn.classList.add("bg-color-bg", "primary-color");

        cartshop.removeAttribute("fill");
        cartshop.setAttribute("fill" ,"#eff3ff");

        login.classList.remove("white-color", "bg-color-primary");
        login.classList.add("primary-color", "bg-color-bg");
    
        person.forEach((svg) => {
            svg.removeAttribute("stroke")
            svg.setAttribute("stroke" ,"#eff3ff")
        });
        
        
    
    
    } else if (window.scrollY < 60) {
        navEl.classList.remove("navbar-scrolled");
        navEl.classList.add("mt-5", "rounded-5", "mx-5");

        navBrand.classList.remove("white-color");

        navLinks.forEach((link) => {
            link.classList.remove("white-color");
        });

        search.removeAttribute("stroke");
        search.setAttribute("stroke" ,"#010c8e");

        search_box.classList.remove("bg-color-primary");
        search_box.classList.add("bg-color-bg-80");

        search_btn.classList.remove("bg-color-bg", "primary-color");
        search_btn.classList.add("bg-color-primary", "white-color");

        cartshop.removeAttribute("fill");
        cartshop.setAttribute("fill" ,"#010c8e");

        login.classList.remove("primary-color", "bg-color-bg");
        login.classList.add("white-color", "bg-color-primary");
        
        person.forEach((svg) => {
            svg.removeAttribute("stroke")
            svg.setAttribute("stroke" ,"#010c8e")
        });
    }
});