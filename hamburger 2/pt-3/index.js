function addtask(){
    const aashu = document.createElement("li")
    const box= document.getElementById("list")
    box.appendChild(aashu)
    aashu.textContent=document.getElementById("input-box").value
    document.getElementById("input-box").value=""
    deleteTask(aashu)
}
function  deleteTask(aashu)
{
    const deletebtn = document.createElement('button')
    deletebtn.textContent = "Delete"
    aashu.appendChild(deletebtn)
    deletebtn.onclick = function(){
        aashu.remove()
    }
}