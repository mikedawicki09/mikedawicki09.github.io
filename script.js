//function to slide tab-indicator to designated tab button
function changeTab(page) {
    var indicator = document.querySelector(".tab-indicator");

    if (page == "tools") {
        if (indicator.style.left = "64%") {
            indicator.style.left = "35.5%";
        }
    }
    if (page == "languages") {
        if (indicator.style.left = "64%") {
            indicator.style.left = "2%";
        }
    }
    if (page == "frameworks") {
        if (indicator.style.left = "2%") {
            indicator.style.left = "68.5%";
        }
    }
}

//function to open the skill tabs
function openTab(page, elmnt, skillType) {
    changeTab(page);
    var i, tabContent;
    //grabs all elements that have the class tabContent
    tabContent = document.getElementsByClassName("tabContent");
    var tabButton = document.getElementsByClassName("tabButton");

    for (i = 0; i < tabButton.length; i++) {
        tabButton[i].style.color = "black";
        tabButton[i].style.boxShadow = "2px 2px 25px rgba(0,0,0,0.2)";
    }
    var slider = document.getElementById(skillType);
    //loops through each of the selected elements and hides them
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }


    document.getElementById(page).style.display = "block";
    elmnt.style.color = "#FA991C";
    elmnt.style.boxShadow = "2px 2px 25px #FA991C";

    count = 0;

}

//function to slide through skill carousel slider
var count = 0;
function sliderScript(num, skillType) {
    var listItem = document.getElementsByClassName(skillType);
    count += num;
    for (var i of listItem) {
        switch (count) {
            case 0:
                if (count == 0) { i.style.top = "0%"; }
                break;
            case 1:
                (skillType == 'frameSkill') ? i.style.top = "-95%" : i.style.top = "-95%";
                break;
            case 2:
                (skillType == 'frameSkill') ? i.style.top = "-190%" : i.style.top = "-190%";
                break;
            case 3:
                (skillType == 'frameSkill') ? count = 2 : i.style.top = "-285%";
                break;
            case 4:
                (skillType == 'frameSkill') ? count = 2 : i.style.top = "-380%";
                break;
            case 5: (skillType == "frameSkill") ? count = 2 : i.style.top = "-477%";
                break;
        }
        if (count < 0) {
            count = 0;
        }
        if (count > 5) {
            count = 5;
        }
    }
}

//function to smooth scroll to section of the page 
$(document).ready(function () {
    var scrollLink = $('.scroll');
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1200)
    })
})

//function to show side navigation bar 
function showNav() {
    const navbarList = document.querySelector(".my-nav-list");
    const menuBtn = document.querySelector(".menu-btn");
    navbarList.classList.add("active");
    menuBtn.classList.add("hide");
}
//function to hide side navigation button
function removeNav() {
    const navbarList = document.querySelector(".my-nav-list");
    const menuBtn = document.querySelector(".menu-btn");
    navbarList.classList.remove("active");
    menuBtn.classList.remove("hide");
}

//function to hide top navigation bar and display floating button
window.onscroll = function () { myFunction() };
function myFunction() {
    if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
        document.getElementById("floatButton").style.display = "block";
        document.getElementById("nav").style.display = "none";
    } else {
        document.getElementById("floatButton").style.display = "none";
        document.getElementById("nav").style.display = "block";
    }
}

//function to flip project card 
function cardFlip(project,side) {
    var project = document.getElementById(project);
    if (side == 0) {
        project.classList.add("flip");
    }
    else {
        project.classList.remove("flip");
    }
}

//function to open card information
var campusCount=0;
function fade(card,elmnt) {
    var plus = elmnt.querySelector(".fa-plus");
    var textArea = document.getElementById(card);
   var orgText = textArea.querySelector(".org-text");
    switch(campusCount) {
        case 0:
            orgText.classList.remove("slow");
            textArea.classList.add("toggle-area");
            plus.style.transform = 'rotate(135deg)';
            campusCount=1;
            break;
        case 1: 
            orgText.classList.add("slow");
            textArea.classList.remove("toggle-area");
            plus.style.transform = 'rotate(0deg)';
            campusCount=0;
            break;
        }
    }


