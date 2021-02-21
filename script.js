function compute()
{
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    interest = (principal * years * rate)/100;
    amount = principal + interest;
    curr_year = new Date().getFullYear();
    result = document.getElementById("result");
    result.innerHTML = "If you deposit " + principal + "at an interest rate of "+rate+"%. You will receive an amount of "+amount+"in the year "+(curr_year+years);
    
}
function display_rate()
{
    slider = document.getElementById("rate");
    output = document.getElementById("rate-op");
    output.innerHTML = slider.value;
}
        