var div=document.createElement("div")
div.setAttribute("id","bg");
var div1=document.createElement("div");
div1.setAttribute("class","container");
var div2=document.createElement("div");
div2.setAttribute("id","title");
div2.innerHTML="Find The Nationality";
var br1=document.createElement("br");
var lable1= document.createElement("label");
lable1.setAttribute("for","searchbox")
lable1.setAttribute("id","lable");
lable1.innerHTML="Enter Your Name :";
var br2=document.createElement("br");
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","searchbox");
input.setAttribute("placeholder"," Enter Your Sweet name")
var btn= document.createElement("button");
btn.setAttribute("id","btn");
btn.innerHTML="Search now";
btn.addEventListener("click",f1)
var br5= document.createElement("br");
var label6= document.createElement("label");
label6.innerHTML=" Our country Details :"
label6.setAttribute("id","lable");



div.append(div1,div2,br1,lable1,br2,input,btn,br5,label6)
document.body.append(div);
async function f1(){
    try {
        
    var peoplename= document.getElementById("searchbox").value
    var res= await fetch(`https://api.nationalize.io?name=${peoplename}`)
    var res1= await res.json()
    console.log(res1)
    var details=res1.country
    console.log(details)
    details.map((x)=>{

        var br3 = document.createElement("br")
        var label3 = document.createElement("lable")
        label3.style.margintop="5px"
        label3.style. paddingLeft=" 45%";
        label3.style.color="#fff"
        label3.innerHTML=`country_id :${x.country_id}`
        var br4=document.createElement("br");
        var label4 = document.createElement("lable")
        label4.style.color="#fff"
        label4.style. paddingLeft=" 45%";
        label4.innerHTML=`probability :${x.probability}`
        div.append(br3,label3,br4,label4)
    })
    } catch (error) {
        console.log(error)
        
    }
}