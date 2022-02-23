
//------------------------------------------- Navbar start ----------------------------------------

import {navbar,searchbar} from "../components/navbar.js"
document.querySelector("#myOverlay").innerHTML = searchbar();
document.querySelector("#NavbarContainer").innerHTML = navbar();
document.querySelector("#CloseBtn").addEventListener("click",closeSearch);
document.querySelector("#SearchIcon").addEventListener("click",openSearch);
function openSearch()
{
    document.querySelector("#myOverlay").style.display = "block";
}
function closeSearch()
{
    document.querySelector("#myOverlay").style.display = "none";
}
// --------------------------------------------Navbar End--------------------------------------------------


