

document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("top").disabled = false;
    document.getElementById("nu").disabled = true;
    document.getElementById("eu").disabled = true;
})


function selectiona() {
    document.getElementById("nu").disabled = false;
    document.getElementById("top").disabled = true;
}

function selectionb() {
    document.getElementById("eu").disabled = false;
    document.getElementById("top").disabled = true;
}


function formSubmitNewUser()
{

    let nusername = document.getElementById("nusername").value;
    let npassword = document.getElementById("npassword").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;

    if (nusername.length > 1 && npassword.length > 1 && city.length > 1 && state.length > 1) 
    {
        alert("Welcome "+ nusername);
    }
    else
    {
        alert("Please check you input is valid.");
    }
}

function formSubmitExitUser()
{
    var eusername = document.getElementById("username").value;
    var epassword = document.getElementById("password").value;

    if (eusername.length > 1 && epassword.length > 1)
    {
        alert("Welcome back " + eusername);   
    } 
    else
    {
        alert("Please check you input is valid.");
    }
}


// function formSubmitEvent() {
//     let name = document.getElementById("custname").value;
//     let address = document.getElementById("street").value;
//     let city = document.getElementById("city").value;
//     let state = document.getElementById("state").value;
//     let zip = document.getElementById("zip").value;

//     // we could do much better validation, but that's not the point of this example!
//     if (name.length > 2 && address.length > 2 && city.length > 2 && state.length > 1 && zip.length == 5) {
//         document.getElementById("experience").disabled = false;
//         document.getElementById("cust").value = name;
//         document.getElementById("visitdate").value = new Date();
//     }
//     else {
//         alert("please fill in all fields");
//     }
// }
