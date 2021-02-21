function compute()
{
    var principal = document.getElementById("principal").value;
    var v = validate_principal();
    if (v == 0)
    return;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (principal * years * rate)/100;
    var amount = +principal + +interest;
    var curr_year = new Date().getFullYear();
    var result = document.getElementById("result");
    result.innerHTML = "If you deposit " + "<mark>"+principal+"</mark>";
    result.innerHTML += ",at an interest rate of "+"<mark>"+rate+"%"+"</mark>"+". You will receive an amount of "+"<mark>"+amount+"</mark>"+",\nin the year "+"<mark>"+(+curr_year + +years)+"</mark>";
    
}
function display_rate()
{
    var slider = document.getElementById("rate");
    var output = document.getElementById("rate-op");
    output.innerHTML = slider.value;
}
function validate_principal()
{
    var p = document.getElementById("principal").value;
    if (p < 0) {
        alert("Enter a positive number");
        return 0;
    } else return 1;
}
        