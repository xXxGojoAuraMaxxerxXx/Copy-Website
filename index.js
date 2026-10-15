const links = ["https://i.ytimg.com/vi/CxGSnA-RTsA/hqdefault.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC419YNLNoMlVD9UEzQbpVPLFnxwy7xSdbrMFJ4holrAcQeIO_OUa7HCfD&s=10", "https://wp-media.petersons.com/blog/wp-content/uploads/2018/01/26100309/blur-close-up-code-computer-546819.jpg"]
let index = 0;

function rightButton() {
    let img = document.getElementById("carousel-img");
    let currentLink = img.getAttribute("src");

    if (index === 0) {
        img.src = links[index + 1]
        index++
    }
    else if (index === 1) {
        img.src = links[2]
        index++
    } else {
        img.src = links[0]
        index = 0;
    }
}

function leftButton() {
    let img = document.getElementById("carousel-img");
    let currentLink = img.getAttribute("src");

    if (index === 0) {
        img.src = links[2]
        index = 2
    }
    else if (index === 1) {
        img.src = links[0]
        index--
    } else {
        img.src = links[1]
        index--;
    }
}

function coursesNav() {
    let sidebarNav = document.getElementById("internal-courses")
    let shown = sidebarNav.style.display;
    if (shown === "") {
        sidebarNav.style.display = "block";
    } else {
        sidebarNav.style.display = "";
    }
}

function burger() {
    let sidebarNav = document.getElementById("navbar-left")
    let shown = sidebarNav.style.display;
    if (shown === "inline-block") {
        sidebarNav.style.display = "none";
        let hiddenBurger = document.getElementById("burger2");
        hiddenBurger.style.display = "flex";
    } else {
        sidebarNav.style.display = "inline-block";
    }
}

function burger2() {
    let sidebarNav = document.getElementById("navbar-left")
    let shown = sidebarNav.style.display;
    sidebarNav.style.display = "inline-block";
    let hiddenBurger = document.getElementById("burger2");
    hiddenBurger.style.display = "none";
}