
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
document.querySelector("form").addEventListener("submit",SignUp);
var SignUpData = JSON.parse(localStorage.getItem("MinimalistSignupData"))||[];
console.log('SignUpData:', SignUpData)
function SignUp(event)
{
    event.preventDefault();

    var name = document.querySelector("#name").value;
    var contact = document.querySelector("#contact").value;
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value; 
    console.log(name,contact,email,password);

    var object =
    {
        Name : name,
        Contact : contact,
        Email : email,
        Password : password
    };

    SignUpData.push(object);
    console.log(SignUpData);
    localStorage.setItem("MinimalistSignupData",JSON.stringify(SignUpData));
    window.location.href = "login.html";
}