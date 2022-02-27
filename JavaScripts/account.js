
function openSearch()
{
    document.querySelector("#NavbarContainer").style.zIndex = "0";
    document.querySelector("#myOverlay").style.display = "block";
}
function closeSearch()
{
    document.querySelector("#NavbarContainer").style.zIndex = "1";
    document.querySelector("#myOverlay").style.display = "none";
}
function OurProductPage()
{
    window.location.href = "ourproduct.html";
}
function GoToHomePage()
{
    window.location.href = "index.html";
}
function MinimalistAddToCartPage()
{
    console.log(1);
    window.location.href = "cart.html";
}
function LoginSignUpPage()
{
    console.log(1);
    window.location.href = "login.html";
}
function concernpage()
{
    window.location.href = "concern.html";
}
function knowleadgepage()
{
    window.location.href = "knowledge.html";
}
function TrackerOrder()
{
    window.location.href = "track.html";
}



var Loginname = JSON.parse(localStorage.getItem("MinimalistLoginName"));
document.querySelector("#UserName").innerHTML = `Name : ${Loginname[Loginname.length-1]}`;
document.querySelector("#LogOutHeading").addEventListener("click",logout);
var LoginName = JSON.parse(localStorage.getItem("MinimalistLoginName"))
var LogOut = JSON.parse(localStorage.getItem("MinimalistLogOut"));
var show = JSON.parse(localStorage.getItem("MinimalistShow"))
function logout()
{
    //console.log(1);
    if(LogOut[LogOut.length-1] == "LogOut")
    {
        //console.log(1);
        alert("You want to LogOut");
        LogOut[1] = ("SignUp");
        LoginName[1] = ("Login");
        show[1] = ("show");
        localStorage.setItem("MinimalistLogOut",JSON.stringify(LogOut));
        localStorage.setItem("MinimalistLoginName",JSON.stringify(LoginName));
        localStorage.setItem("MinimalistShow",JSON.stringify(show));
        window.location.href = "login.html";
    }
    else
    {
        console.log(1);
        
        //
        //alert("signup");
        window.location.href = "login.html";
    }
}
