function calculator(){
    var loanamount=document.getElementById("lamount");
    var interestrate=document.getElementById("linterest");
    var noofyrs=document.getElementById("lyrs");
    var monthlypay=document.getElementById("op1");
    var totalinterest=document.getElementById("op2");
    var totalpay=document.getElementById("op3");
    
    var p=parseFloat(loanamount.value);
    var r=parseFloat(interestrate.value)/100;
    var t=parseFloat(noofyrs.value*12);
    
    var monthly= p*r;
    var totalintrst=monthly*t;
    var total=p+totalintrst;
    //alert("I am here"+monthly+"amount");
    if(isFinite(total)){
        
        monthlypay.innerHTML=monthly.toFixed(3);
        totalinterest.innerHTML=totalintrst;
        totalpay.innerHTML=total;
    }
    
    
    
}