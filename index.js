// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",function()
{
    subFun();
});
var matchArr= null || [];
function subFun()
    {
        event.preventDefault();
        var matchObj={
            matchnumber:document.querySelector("#matchNum").value,
            teamA:masaiForm.teamA.value,
            teamB:masaiForm.teamB.value,
            date:masaiForm.date.value,
            venue:masaiForm.venue.value,
        };
       
        matchArr.push(matchObj);
     
        localStorage.setItem("schedule",JSON.stringify(matchArr));
    }
