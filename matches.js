// write js code here corresponding to matches.html
var favArr=[];
var getMatch=JSON.parse(localStorage.getItem("schedule"));

getMatch.forEach(function (elem){
    
    var tr=document.createElement("tr");
    var td1=document.createElement("td");
    td1.innerText=elem.matchnumber;
    var td2=document.createElement("td");
    td2.innerText=elem.teamA;
    var td3=document.createElement("td");
    td3.innerText=elem.teamB;
    var td4=document.createElement("td");
    td4.innerText=elem.date;
    var td5=document.createElement("td");
    td5.innerText=elem.venue;
    var td6=document.createElement("td");
    td6.innerText="Favourite";
   td6.style.color="green";
   td6.addEventListener("click",function()
   {
       addFavourite(elem);
   });
   
    tr.append(td1,td2,td3,td4,td5,td6);
    document.querySelector("tbody").append(tr);
});

function addFavourite(elem)
{
    favArr.push(elem);
   
    localStorage.setItem("favourites",JSON.stringify(favArr));
}

   


