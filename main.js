
let trafficGoal = 0;
let leadsGoal = 0;

 // New Total Leads goal is total sales goal / total leads goal CR
 function totalLeadsGoal(){
      let var3 = Number(document.querySelector("#TotalSales1").value)
      let var4 = Number((document.querySelector("#tlCR").value)/100)
      let var5 = (var3/var4);
      var5 = var5.toFixed(2)
      document.querySelector("#ntlcalc").innerText = (var5);
}

// New Total Leads Goal var1 and result of function totalleadsgoal / Conversion rate var2
function webTrafficGoal() {
      let var1 = Number(document.querySelector("#ntlcalc").innerText)
      let var2 = Number(document.querySelector("#wbCR").value/100)
      let var6 = (var1/var2)
      var6 = var6.toFixed(2)
      console.log("var1 is " + var1 + " and var2 is " + var2);
      if((var1 == null) || (var2 == null)) {
            document.querySelector(".error").style.display = "inline-block";
      }else{
            document.querySelector(".error").style.display = "none";
            document.querySelector("#wtrcalc").innerText = var6;
}}