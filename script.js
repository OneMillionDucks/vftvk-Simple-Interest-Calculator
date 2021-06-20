//This function computed the totals based on input from the form
function compute()
{
    var principal = document.getElementById("principal").value;
    validatePrincipal();
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = Number(principal) * Number(years) * Number(rate) / 100;

    var year = new Date().getFullYear()+parseInt(years);

    //This is the word salad for printing out the highlighted values
    document.getElementById("result").innerHTML="</br>If you deposit <span class='highlight'>"+principal+"</span>"+ 
    ",\<br\>at an interest rate of <span class='highlight'>"+rate+"</span>%"+
    ".\<br\>You will receive an amount of <span class='highlight'>"+interest+"</span>"+
    ",\<br\>in the year <span class='highlight'>"+year+"</span>\<br\>"
}

//This function updates the displayed value of the rate when the slider is moved
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

//This function is run compute is run to ensure the principal is a positive number
function validatePrincipal()
{
    var principal = document.getElementById("principal").value;
    if(principal<=0){
        alert("Enter a positive number");
        return false;
    }
    document.getElementById("principal").focus();
}
