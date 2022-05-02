// write js code here corresponding to favourites.html
var displayFav=JSON.parse(localStorage.getItem("favourites"));
displayFav.forEach(function(element){
    var tr=document.createElement("tr");
    var td1=document.createElement("td");
    td1.innerText=element.matchnumber;
    var td2=document.createElement("td");
    td2.innerText=element.teamA;
    var td3=document.createElement("td");
    td3.innerText=element.teamB;
    var td4=document.createElement("td");
    td4.innerText=element.date;
    var td5=document.createElement("td");
    td5.innerText=element.venue;
    var td6=document.createElement("td");
    td6.innerText="Delete";
    td6.addEventListener("click",deleteMatch);

    tr.append(td1,td2,td3,td4,td5,td6);
    document.querySelector("tbody").append(tr);
});

function deleteMatch()
{
    event.target.parentNode.remove();
   
}
