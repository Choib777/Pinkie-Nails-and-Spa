/*----function to toggle mobile/tablet drop-down navigation menu----*/

function toggleMenu() {
    var menu = document.getElementById("menu");
    var sub = document.getElementById("submenu");
    console.log(menu);
    console.log(menu.style.display);

    /*---if both menu and submenu are open/all menus are open, close both menu and submenu/all menus---*/

    if (menu.classList.contains("slidedown") && menu.classList.contains("slidesub")) {
        menu.classList.remove("slidedown");
        menu.classList.remove("slidesub");
        menu.classList.add("slideallup");
    }

    /*---if only the menu is open and the submenu is not open, close the menu---*/

    else if (menu.classList.contains("slidedown")) {
        menu.classList.remove("slidedown");
        menu.classList.remove("slidesubup")
        console.log(menu.classList);
        menu.classList.add("slideup");
        console.log(menu.classList);
    }

    /*---if menu is up, slide menu down without submenu---*/

    else {
        menu.classList.remove("slideup");
        menu.classList.remove("slideallup");
        sub.classList.add("submenu-collapse");
        console.log(menu.classList);
        menu.classList.add("slidedown");
        console.log(menu.classList);
    }
}

/*----function to toggle services drop-down submenu----*/

function subMenu() {
    var sub = document.getElementById("submenu");
    var menu = document.getElementById("menu");

    /*---if submenu is up/collapsed, slide submenu down/display submenu---*/

    if (sub.classList.contains("submenu-collapse")) {
        sub.classList.remove("submenu-collapse");
        menu.classList.remove("slidesubup");
        menu.classList.add("slidesub");
    }

    /*---if submenu is down/expanded, slide submenu up/collapse submenu---*/

    else {
        sub.classList.add("submenu-collapse");
        menu.classList.remove("slidesub");
        menu.classList.add("slidesubup");
    }
}