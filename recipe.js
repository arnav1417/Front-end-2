document.getElementById("createbtn").addEventListener("click", overlay);
document.getElementById("imgin").addEventListener("change", renderFile);

// on startup-----------------------------------------------------------------
const loginimg = document.getElementsByClassName("Profile")
if(localStorage.getItem("profile")!==null){
  let imgsrc = localStorage.getItem("profile");
  for( let i = 0 ; i<loginimg.length;i++){
    loginimg[i].src=imgsrc;
  }
}
else{  for( let i = 0 ; i<loginimg.length;i++){
  loginimg[i].src="P1.jpg";
}} 
//----------------------------------------------------------------------------
function overlay(){
  document.getElementById("recipecreate").style.display="flex";
  hoveroff();
}
function overlayoff(){
  document.getElementById("recipecreate").style.display="none"
}
function renderFile(){
    const render = document.getElementById("recimg");
    const file = document.getElementById("imgin").files[0];
    var reader = new FileReader();
    reader.addEventListener('load' , ()=> {
      render.src = reader.result;
    }, false)
    if(file){
      reader.readAsDataURL(file);
  }
}
  
  // Check
  
  let check = 1;
  document.getElementById("sidecol").addEventListener("click",sidebar);
  function sidebar(){
    if(check==1){
    document.getElementById("imglogo").src="fork-and-knife.png ";
    document.getElementById("nav").style.width="6%";
    document.getElementById("sideshow").style.display="flex";
    document.getElementById("account").style.display="none";
    document.getElementById("recipenav").style.display="none";
    document.getElementById("createbotbtn").style.display="block";
    check= check-1;
  }
  else if(check==0){
      document.getElementById("imglogo").src="restaurant.png ";
      document.getElementById("nav").style.width="18%";
      document.getElementById("sideshow").style.display="none";
      document.getElementById("account").style.display="flex";
      document.getElementById("recipenav").style.display="block";
      document.getElementById("createbotbtn").style.display="none";
      check=check+1;
  }
}
document.getElementById("closerecipe").addEventListener("click",function(){
  document.getElementById("recipecreate").style.display="none";
  document.getElementById("createbotbtn").style.opacity="1";
  let fu = document.getElementsByClassName("fu");
hoveron();  
})
document.getElementById("createbotbtn").addEventListener("click",function(){
  document.getElementById("recipecreate").style.display="flex";
  document.getElementById("createbotbtn").style.opacity="0";
  hoveroff();
}
)
//get data in alert.
// document.querySelector('form').addEventListener('submit', (e) => {
  // e.preventDefault()
  // const data = Object.fromEntries(new FormData(e.target).entries());
  // alert(data);
// });
document.getElementById("accountclick").addEventListener("click",function(){
  document.getElementById("accountdetail").style.display="flex";
  document.getElementById("createbotbtn").style.opacity="0";
  hoveroff();
})

document.getElementById("closeaccount").addEventListener("click",function(){
  document.getElementById("accountdetail").style.display="none"
  document.getElementById("createbotbtn").style.opacity="1";
  hoveron();
})


function hoveroff(){
  let fu = document.getElementsByClassName("fu");
  for(var i =0;i<fu.length;i++ ){
    fu[i].style.display="none";
  }
}
function hoveron(){
  let fu = document.getElementsByClassName("fu");
  for(var i =0;i<fu.length;i++ ){
    fu[i].style.display="block";
  }
}

// ---------------------------------------------------------------
//localstorage
document.getElementById("proimg").addEventListener("change", function(){
  const render = document.getElementById("profimg");
  const file = document.getElementById("proimg").files[0];
  var reader = new FileReader();
  reader.addEventListener('load' , ()=> {
    render.src=reader.result;
    localStorage.removeItem("profile");
    localStorage.setItem("profile",reader.result);
  }, false)
  if(file){
    reader.readAsDataURL(file);
  }
});

//save image to base64 format;
function imgto64(source){
  const file = source.files[0];
  var reader = new FileReader();
  reader.addEventListener('load' , ()=> {
    localStorage.removeItem("img64");
    localStorage.setItem("img64",reader.result);
  }, false)
  if(file){
    reader.readAsDataURL(file);
  }
}

// check new password
document.getElementById("profbtn").addEventListener("click", function(){
  let pw1 = document.getElementById("chnpsw");
  let pw2 = document.getElementById("conpwd");
  if(pw1.value!==pw2.value){
    pw1.style.border="0.1vh solid red";
    pw2.style.border="0.1vh solid red";
  }
})
document.getElementById("checki").addEventListener("click",function(){
  document.getElementById("recipeview").style.display="flex";
  document.getElementById("recipedetail").value="This is test!!"
  hoveroff();
})

document.getElementById("reciclose").addEventListener("click",function(){
  document.getElementById("recipeview").style.display="none";
  hoveron();
})

//Light Dark Mode
let light=0;
document.getElementById("modeind").addEventListener("click",function(){
  if(light==1){
    document.getElementById("modeind").style.fontVariationSettings="'FILL' 1";
    darkmode();
    light=light-1;
  }
  else{
    document.getElementById("modeind").style.fontVariationSettings="'FILL' 0";
    lightmode();
    light=light+1;
  }
})

// function to change mode
function lightmode(){
  var root = document.querySelector(':root');
  root.style.setProperty("--text",'black');
  root.style.setProperty("--content", "#ffffff");
  root.style.setProperty( '--head','#e67300ce');
  root.style.setProperty('--navbar','#ffffff');
  root.style.setProperty( '--search','#e0d1b572');
  root.style.setProperty( '--searchbar','rgba(0, 0, 0, 0.547)');
  root.style.setProperty("--accent","#b9c6cbea");
  root.style.setProperty("--border","gray");
}
function darkmode(){
  var root = document.querySelector(':root');
  root.style.setProperty("--text",'white');
  root.style.setProperty("--content", "#4d4c4c");
  root.style.setProperty( '--head','#e67300ce');
  root.style.setProperty('--navbar','#4d4c4c');
  root.style.setProperty( '--search','#e0d1b572');
  root.style.setProperty( '--searchbar','rgba(0, 0, 0, 0.547)');
  root.style.setProperty("--accent","#b9c6cbea");
  root.style.setProperty("--border","rgba(255,255,255,0.46)");
}
//----- create subbtn
document.getElementById("subbtn").addEventListener("click",function(e){
  e.preventDefault();
  let id= Date.now();
  const recin = document.getElementById("recipename");
  const imgname = document.getElementById("imgin");
  const ch=document.getElementById("issaved");
  const veg = document.getElementById("veg");
  const nveg = document.getElementById("nveg");
  const ind = document.getElementById("indian");
  const tan = document.getElementById("tandoori");
  const save = document.getElementById("issaved");
  const inreci =document.getElementById("inputrecipe")
  const enteredval=[];
  let i = 0;
  if(recin.value){
    enteredval[i]=recin.value;
  }
  i=i+1;
  if(imgname.files[0]){
      imgto64(imgname);
      enteredval[i]=localStorage.getItem("img64");
    }
  i=i+1
  if(ch.checked==true){
    enteredval[i]=true;
  }
  i=i+1;
  if(veg.checked==true){
    enteredval[i]=true
  }
  i=i+1;
  if(nveg.checked==true){
    enteredval[i]=true
  }
  i=i+1;  if(ind.checked==true){
    enteredval[i]=true
  }
  i=i+1;
  if(tan.checked==true){
    enteredval[i]=true
  }
  i=i+1;
  if(save.checked==true){
    enteredval[i]=true
  }
  i=i+1;
  if(inreci.value){
    enteredval[i]=inreci.value;
  }
  i=i+1;
  while(i>=0){
    console.log(i + enteredval[i]);
    i--;
  }
})

//---------trying core elements-----
