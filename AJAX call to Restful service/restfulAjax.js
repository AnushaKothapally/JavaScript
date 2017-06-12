/* used call back function */
function makeAjaxcall(url,cfun){
    alert("hello");
var xhttp=new XMLHttpRequest();
    alert("hello"+xhttp.readyState);
xhttp.onreadystatechange=function(){
        alert("hello"+xhttp.readyState);

    if(xhttp.readyState==4&&xhttp.status==200){
        
        return this;
    }
xhttp.open("GET",url,true);
xhttp.send();
}

}

function getdata(){
 //  var xhttp=makeAjaxcall("http://services.groupkt.com/country/get/all");
   //  alert("hello");
 var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://services.groupkt.com/country/get/all", true);
  xhttp.send();
  xhttp.onreadystatechange = function() { 
      var table="<tr><th>Name</th><th>Alpha_code2</th><th>Alpha_code3</th></tr>";
      var msg="";
    if (this.readyState == 4 && this.status == 200) {
    var result=JSON.parse(this.responseText);
    
    for(var x in result){
        if(result.hasOwnProperty(x)){
       for(var i in result[x]){
           if(result[x].hasOwnProperty(i)){
           if(i=="result"){
               var arr=result[x][i];
               arr.forEach(function(ele){
                   table=table+"<tr>";
                   for(var j in ele){
                       console.log("key"+j+"value"+ele[j]);
                       table=table+"<td>"+ele[j]+"</td>"
                   }
                table=table+"</tr>"
               });
                }
               else{
                 if(i=="messages"){
                    var arr=result[x][i];
                     arr.forEach(function(ele){
                                 msg=msg+ele+"<br/>  ";
                                 });
                 }  
               }
               }
       }
       
        }
    }
    }
     document.getElementById("table").innerHTML =table; 
     document.getElementById("msg").innerHTML=msg;
    }
}

