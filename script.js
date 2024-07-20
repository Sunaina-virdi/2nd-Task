let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add(){
    if(inputs.value == ""){
        alert("Please Enter Task");
    }
    else{
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${inputs.value}
        <div>
            <img src="check.png" width="20px" class="done-btn"/>
            <img src="bin.png" width="20px" class="remove-btn"/>
        </div>`;
        text.appendChild(newEle);
        inputs.value = ""; //empty

        newEle.querySelector(".remove-btn").addEventListener("click",remove);
        newEle.querySelector(".done-btn").addEventListener("click",markDone);

        function remove(){
            newEle.remove()
        }
        function markDone(){
            newEle.classList.toggle("done");
        }
    }
}