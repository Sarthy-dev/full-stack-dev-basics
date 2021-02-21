function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (principal * years * rate)/100;
    var amount = +principal + +interest;
    var curr_year = new Date().getFullYear();
    var result = document.getElementById("result");
    result.innerHTML = "If you deposit " + principal;
    result.innerHTML += ",at an interest rate of "+rate+"%.\n You will receive an amount of "+amount+",\nin the year "+(+curr_year + +years);
    
}
function display_rate()
{
    var slider = document.getElementById("rate");
    var output = document.getElementById("rate-op");
    output.innerHTML = slider.value;
}
        