var body=document.getElementById('main');
body.style.height='100%';
body.style.width='100%';
body.style.margin='0px';
var elmnt=document.createElement("div");
elmnt.style.backgroundColor='';
elmnt.style.border='1px solid';
elmnt.style.width='100%';
elmnt.style.height='100%';
var topnav=document.createElement("nav");
topnav.style.width='100%';
topnav.style.height='3%';
topnav.style.borderBottom='1px inset';
topnav.style.backgroundColor='honeydew';
elmnt.appendChild(topnav);

var d1=document.createElement('d1');
d1.style.float='right';
d1.style.width='40%';
topnav.appendChild(d1);
d1.style.height='100%';
var ip1=document.createElement('input');
ip1.setAttribute('type','text');
ip1.setAttribute("id","ip1");
ip1.setAttribute('value','Google search');
ip1.addEventListener('focus',function(event){
    ip1.setAttribute('value',"");
    ip1.style.outline='none';
    ip1.style.backgroundColor='green';
},true);
ip1.style.textAlign='center';

var b1=document.createElement('input');
b1.setAttribute('type','button');
b1.style.height='60%';
b1.setAttribute('value','Search');
b1.style.marginLeft="10px"
b1.style.textAlign='center';
b1.addEventListener("click",function(event){
var val=document.getElementById('ip1').value;
if(val==""){
    alert("Enter the search item"+document.documentMode);
}
else{
alert("Thank you for searching");
}
},true)
//b1.onclick=act();
d1.appendChild(ip1);
d1.appendChild(b1);


var header=document.createElement("header");
header.style.width='100%';
header.style.height='10%';
header.style.borderBottom='1px inset';
header.style.backgroundColor='aliceblue';
elmnt.appendChild(header);
var logo=document.createElement('img');
logo.style.position="relative";
logo.style.marginLeft='40px';
logo.setAttribute('height','99%');
logo.setAttribute('width','6%');
logo.style.float='left';
logo.src='rguktlogo.jpg';
header.appendChild(logo);
var head=document.createElement('h1');
head.style.margin= '0px';
head.style.position='relative';
head.style.left='35%';
head.style.top='40%';
var span=document.createElement('span');
span.innerHTML="Heading";
head.appendChild(span);
header.appendChild(head);

var mainnav=document.createElement("nav");
mainnav.style.width='100%';
mainnav.style.height='3%';
mainnav.style.borderBottom='1px inset';
mainnav.style.backgroundColor='honeydew';
elmnt.appendChild(mainnav);

var leftnav=document.createElement("nav");
leftnav.style.width='15%';
leftnav.style.height='64%';
leftnav.style.borderRight='1px inset';
leftnav.style.backgroundColor='cadetblue';
leftnav.style.float='left';
elmnt.appendChild(leftnav);


    //=[document.createElement('li'),document.createElement('li'),document.createElement('li'),document.createElement('li')];
(function createUL(){
    var ul=document.createElement('ul');
    ul.style.listStyleType='none';
    var list=['HTML','CSS','Java Script','Java','JQuery','JSON','SQL'];
    var a=[];
    var li1=[];
    for(var j=0;j<list.length;j++){
    li1[j]=document.createElement('li');
    a[j]=document.createElement('a');
    a[j].setAttribute('id',"a"+j);
    a[j].style.color="blue";
    a[j].style.textDecoration='none';
    a[j].setAttribute('href',"http://www.w3schools.com");
    var p=document.createElement('p');
    p.innerHTML=list[j];
    a[j].appendChild(p);
} var i=0;
li1.forEach(function(li){  
    li.appendChild(a[i]);
    li.style.margin="4px";
    i++;
    ul.appendChild(li);
});
leftnav.appendChild(ul);

}
());

var mainsec=document.createElement("div");
mainsec.style.width='65%';
mainsec.style.height='64%';
mainsec.style.float='left';
mainsec.style.borderRight='1px inset';
mainsec.style.backgroundColor='beige';
elmnt.appendChild(mainsec);

var rightsec=document.createElement("div");
rightsec.style.width='19.76%';
rightsec.style.height='64%';
rightsec.style.float='left';
rightsec.style.borderRight='1px inset';
rightsec.style.backgroundColor='cadetblue';
elmnt.appendChild(rightsec);

var footer=document.createElement('footer');
footer.style.width='100%';
footer.style.height='20%';
footer.style.clear='left';
footer.style.borderRight='1px inset';
footer.style.backgroundColor='lightgray';
var copyright="\u00A9 Copyright html.com";
var p=document.createElement('p');
footer.appendChild(p);
p.style.textAlign='center';
p.style.position='relative';
p.style.paddingTop='10px';
p.innerHTML=copyright;
footer.appendChild(p);
elmnt.appendChild(footer);
var i1=document.createElement("img");
i1.setAttribute('src',"planets.gif");
i1.setAttribute('height','20px');
i1.setAttribute('width','20px');
mainsec.appendChild(i1);

var s1=document.createElement('span');
s1.innerHTML="This is the main section";
s1.style.fontSize="16px";
mainsec.removeChild(i1);
mainsec.appendChild(s1); //mainsec.replaceChild(s1,i1);


body.appendChild(elmnt);
