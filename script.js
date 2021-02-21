function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var amount = principal + interest;
    var result = document.getElementById("result");
    result.innerHTML = "Total amount:" + amount;
    
}
        