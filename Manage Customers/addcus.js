function customer(fname,lname,gender,birthdate,aline1,aline2,city,country,phone,email){
    this.fname=fname;
    this.lname=lname;
    this.gender=gender;
    this.birthdate=birthdate;
    this.aline1=aline1;
    this.aline2=aline2;
    this.city=city;
    this.country=country,
    this.phone=phone;
    this.email=email;

}
var customerlist=JSON.parse(localStorage.getItem("cuslist"))||[];
function add(){
    var fname=document.getElementById('fname').value;
    var lname=document.getElementById('lname').value;
    var gender;
    if(document.getElementById('r1').checked){
        gender=document.getElementById('r1').value;
    }
    else if(document.getElementById('r2').checked){
        gender=document.getElementById('r2').value;
    }
    else if(document.getElementById('r3').checked){
          gender=document.getElementById('r3').value;
    }
    var birthdate=document.getElementById('birthdate').value;
    var aline1=document.getElementById('aline1').value;
    var aline2=document.getElementById('aline2').value;
    var city=document.getElementById('city').value;
    var country=document.getElementById('country').value;
    var phnum=document.getElementById('phnum').value;
    var email=document.getElementById('mail').value;
    var phoneobj={};
   
    
    var table=document.getElementById('table1');
    var rCount=table.rows.length;
   var r1;
    var ip1;
    var t1;
    //var ele=table.rows[rCount-1].cells[0].children[0].value
    for(var i=1;i<rCount;i++){
        var cCount=table.rows[i].cells.length;
         var phDetails={};
    for(var j=0;j<cCount-1;j++){
    var ele=table.rows[i].cells[j].firstChild;
    if(j===0){
        if(ele.checked)
            phDetails.isprimary=ele.value;
    }else if(j===1){
        phDetails.phnumber=ele.value;
    }
    else if(j===2){
       phDetails.phtype=ele.options[ele.selectedIndex].value;
    }

    }
        if(Object.keys(phDetails).length>0)
            phoneobj[i]=phDetails;
    }
    var p1=new customer(fname,lname,gender,birthdate,aline1,aline2,city,country,phoneobj,email);
    customerlist.push(p1);
   
     // for(var j=0,col;col=row.cells[j];j++) {
       // var ele=col.firstChild.value;
          //alert(ele);
   //   }  
  //  }
    
    
    
    if(typeof(localStorage)){

        localStorage.setItem("cuslist",JSON.stringify(customerlist));
        var cuslist1=JSON.parse(localStorage.getItem("cuslist"));
       // document.getElementById('sp').innerHTML=localStorage.getItem("cuslist");
                //alert("true"+p1.aline1);
    }
    else{
        alert(false);
    }
    
    document.getElementById('form1').reset();
    alert("Customer Added successfully");
    window.location.href="viewcustomers.html";

}
function reset(){
     document.getElementById('form1').reset();
}

function viewdetail(){
    var phn="";
   // alert("hello");
     // document.getElementById('sp').innerHTML=localStorage.getItem("cuslist");
    var arr=JSON.parse(localStorage.getItem("cuslist"));
    var table="<tr><th>Firstanme</th><th>Lastname</th><th>Phone</th><th>Remove</th><th>Full Details</th><th>Edit Details</th></tr>";
    if(arr!=undefined||arr!=null){
     arr.forEach(function(ele){
                   table=table+"<tr>";
                   for(var j in ele){
                       console.log("key"+j+"value"+ele[j]);
                    if(j=="fname"||j=="lname")
                       table=table+"<td>"+ele[j]+"</td>";
                   
                    if(j=='phone'){
                       for(var k in ele[j]){
                           var obj=ele[j][k];
                           //alert(JSON.stringify(obj));
                        for(var l in obj){
                           // alert(l);
                            if(l==='isprimary'){
                                if(obj[l]=='on'){
                                   phn= obj['phnumber'];
                                   // alert(phn);
                                }
                               }
                          // phn=+ele[j][k].phnumber+",";
                         }
                       } 
                        table=table+"<td>"+phn+"</td>";
                    }
                   
                   }
                   
         table=table+"<td><input type='button' value='Remove' onclick='deletedetails(this)' class='btn btn-primary btn-sm'></td>";
         table=table+"<td><input type='button' value='View Full Details' class='btn btn-primary btn-sm' onclick='viewfull(this)'></td>";
          table=table+"<td><input type='button' value='Edil All' class='btn btn-primary btn-sm' onclick='editAll(this)'></td>";
                table=table+"</tr>";
               });
    //removeAll
    document.getElementById('removeAll').style.display='block';
    }
    document.getElementById('viewtable').innerHTML=table;
  //   window.location.href="viewcustomers.html";
}
function deletedetails(x){
    var ind=x.parentNode.parentNode.rowIndex;
    var arr=JSON.parse(localStorage.getItem("cuslist"));
    arr.splice(ind-1,1);
    localStorage.setItem("cuslist",JSON.stringify(arr));
    viewdetail();
   // alert("hello"+y+"index"+y.rowIndex);
    
}
function viewfull(x){
    var phn="";
    var i=1;
     var ind=x.parentNode.parentNode.rowIndex;
     var arr=JSON.parse(localStorage.getItem("cuslist"));
    var vobj=arr[ind-1];
    for( var y in vobj){
        if(y=="birthdate"){
            var str=vobj[y];
            var d= new Date(str);
            var month=d.getMonth()+1;
            var day=d.getDate();
            var yr=d.getFullYear();
            vobj[y]=month+"/"+day+"/"+yr;
        }
        if(y=="phone"){
              for(var k in vobj[y]){
                           var obj=vobj[y][k];
                           //alert(JSON.stringify(obj));
                        if('isprimary' in obj){
                           // alert(l);
                           phn= obj['phnumber']+"[Primary, type:"+obj['phtype']+"],"+"<br>"+phn;
                          // phn=+ele[j][k].phnumber+",";
                         }
                        else{
                            phn+=""+obj['phnumber']+"[type: "+obj['phtype']+"]"+"<br> ";
                        }
                       }
            vobj[y]=phn;
        }
        var str=document.getElementById('sp'+i).innerHTML;
        str=str.split(':');
        document.getElementById('sp'+i).innerHTML=str[0]+" : "+vobj[y];
        i++;
    }
    document.getElementById('popup').style.display='block';
    //   document.getElementById('main').style.disabled='true';
   document.getElementById('main').style.display='none';
    document.getElementById('body').style.backgroundColor='gray';
}
function closepopup(){
     document.getElementById('popup').style.display='none';
     document.getElementById('main').style.display='block';
        document.getElementById('body').style.backgroundColor='white';     
}
function editAll(x){
    var ind=x.parentNode.parentNode.rowIndex;
     var arr=JSON.parse(localStorage.getItem("cuslist"));
    window.location.href="addcustomer.html";
    document.getElementById("gohome").value="Hello"
   alert(document.getElementById("gohome"));
}

 function clearstorage() {
   // alert("hi");
  localStorage.removeItem("cuslist");

 document.getElementById('removeAll').style.display='none';
    viewdetail();
}
//createrow.idcount=0;
function createrow(x){   
    /*var table = document.getElementById("phonetable");
    var ind=x.parentNode.parentNode.rowIndex;
    var row = table.insertRow(ind+1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);*/
     /* cell1.appendChild(r1);
    cell2.appendChild(p1);
    cell3.appendChild(p2);
    cell4.appendChild(p3);*/
    var r1=document.createElement('input');
    r1.type='radio';
    r1.name='phone';
    var p1=document.createElement('input');
    p1.type='text';
    var p2=document.createElement("select");
    p2.setAttribute("class",'form-control');
    var o1=document.createElement('option');
    o1.value="";
    var o2=document.createElement('option');
    o2.value="Work";
    o2.text="Work";
    var o3=document.createElement('option');
    o3.value="Personal";
    o3.text="Personal";
    
    p2.appendChild(o1);
    p2.appendChild(o2);
    p2.appendChild(o3);
    
    var p3=document.createElement("input");
    p1.setAttribute('class',"form-control");
    p3.setAttribute('class',"btn btn-primary btn-sm");
    p3.type='button';
    p3.addEventListener('click',function(){
        createrow(this);
    },false);
    p3.value='+Add Row';

    
  
    var s1=document.createElement("i");
    s1.setAttribute('class','glyphicon glyphicon-remove');
    s1.addEventListener('click', function(){
       deleterow(this); 
    },false);

    
  
    var td1=document.createElement('td');
    var td2=document.createElement('td');
    var td3=document.createElement('td');
    var td4=document.createElement('td');
    var td5=document.createElement('td');
    var tr1=document.createElement('tr');
    
    td5.appendChild(s1);
    td1.appendChild(r1);
    td2.appendChild(p1);
    td4.appendChild(p3);
    td3.appendChild(p2);
    
    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tr1.appendChild(td3);
    tr1.appendChild(td4);
    tr1.appendChild(td5);
    var table = document.getElementById("phonetable").appendChild(tr1);
    
}

function deleterow(x){
   var rowin=x.parentNode.parentNode.rowIndex; 
    document.getElementById('table1').deleteRow(rowin);
   // alert(rowin);
}