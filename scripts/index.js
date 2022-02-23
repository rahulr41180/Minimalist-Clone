
//------------------------------------------- Navbar start ----------------------------------------

// import {navbar,searchbar} from "../components/navbar.js"
// document.querySelector("#myOverlay").innerHTML = searchbar();
// document.querySelector("#NavbarContainer").innerHTML = navbar();
// document.querySelector("#CloseBtn").addEventListener("click",closeSearch);
// document.querySelector("#SearchIcon").addEventListener("click",openSearch);
function openSearch()
{
    document.querySelector("#myOverlay").style.display = "block";
}
function closeSearch()
{
    document.querySelector("#myOverlay").style.display = "none";
}
// --------------------------------------------Navbar End--------------------------------------------------

// let searchinput = document.createElement("input");
// searchinput.setAttribute("id","SearchInput");
// searchinput.type = "search";
// searchinput.ariaPlaceholder = "Search Product...."

// let searchinput = document.querySelector("#SearchInput");
// searchinput.addEventListener("keypress",function(event)
// {
//     console.log(1);
//     //console.log("event :",event);
// });
// document.querySelector("#SearchInputBox").append(searchinput);
function SearchInput()
{
    console.log(1);
}
