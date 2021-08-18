let toggleNavStatus = false;

const sidebar = document.querySelector(".nav-sidebar");
const hamburger = document.querySelector(".btn-toggle-nav");

hamburger.addEventListener('click', function () {
    sidebar.classList.toggle('hidden')
})




// let toggleNav = function () {
//     let getSidebar = document.querySelector(".nav-sidebar");
//     let getSidebarUl = document.querySelector(".nav-sidebar ul");
//     let getSidebarTitle = document.querySelector(".nav-sidebar span");
//     let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

//     if (toggleNavStatus === false) {
//         getSidebarUl.style.visibility = "visible";
//         getSidebar.style.width = "272px";
//         getSidebarTitle.style.opacity = "0.5";

//         let arrayLength = getSidebarLinks.length;
//         for (let i = 0; i < arrayLength; i++) {
//             getSidebarLinks[i].style.opacity = "1";
//         }

//         toggleNavStatus = true;
//     }

//     else if (toggleNavStatus === true) {
//         getSidebar.style.width = "50px";
//         getSidebarTitle.style.opacity = "0";

//         let arrayLength = getSidebarLinks.length;
//         for (let i = 0; i < arrayLength; i++) {
//             getSidebarLinks[i].style.opacity = "0";
//         }

//         getSidebarUl.style.visibility = "hidden";

//         toggleNavStatus = false;
//     }


//     let btnColor1 = document.getElementById('btnColor1');
//     let btnColor2 = document.getElementById('btnColor2');
//     let btnColor3 = document.getElementById('btnColor3');
//     let btnColor4 = document.getElementById('btnColor4');
//     let btnColor5 = document.getElementById('btnColor5');

//     btnColor1.addEventListener('click', function () { 'body'.style.background = "lightgray" });
//     btnColor2.addEventListener('click', function () { 'body'.style.background = 'red' });
//     btnColor3.addEventListener('click', function () { 'body'.style.background = 'orange' });
//     btnColor4.addEventListener('click', function () { 'body'.style.background = 'purple' });
//     btnColor5.addEventListener('click', function () { 'body'.style.background = 'green' });

//     const toggleColor = function () {
//         const bodyElement = document.body;
//         bodyElement.classList.toggle("btnColor2");
//     };

//     const attachEventToChangeColorButton = function () {
//         const changeColorButton = document.getElementById("change-background-button");
//         changeColorButton.addEventListener("click", function () {
//             toggleColor();
//         });
//     };

//     attachEventToChangeColorButton();
// }