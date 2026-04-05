function AddToLocalStorage(e){
    ClickedElement = e.target;
    localStorage.setItem(ClickedElement.id, ClickedElement.checked)
}

function ShowChecklist(e){
    SearchedElementId = e.target.id;
    for( let NavButton of AllNavButtons){
        if(NavButton.id == SearchedElementId){
            e.target.classList.remove("DormantButton");
        }else{
            NavButton.classList.add("DormantButton");
        }
    } 
    
    switch (SearchedElementId){
        case "RingCLNavButton":
            RingChecklist.style.display = "flex";
            SpellChecklist.style.display = "none";
            PyromancyChecklist.style.display = "none";
            MiracleChecklist.style.display = "none";
            GesturesChecklist.style.display = "none"
            break;
        case "SpellCLNavButton":
            RingChecklist.style.display = "none";
            SpellChecklist.style.display = "flex";
            PyromancyChecklist.style.display = "none";
            MiracleChecklist.style.display = "none";
            GesturesChecklist.style.display = "none"
            break;
        case "PyromancyCLNavButton":
            RingChecklist.style.display = "none";
            SpellChecklist.style.display = "none";
            PyromancyChecklist.style.display = "flex";
            MiracleChecklist.style.display = "none";
            GesturesChecklist.style.display = "none"
            break;
        case "MiracleCLNavButton":
            RingChecklist.style.display = "none";
            SpellChecklist.style.display = "none";
            PyromancyChecklist.style.display = "none";
            MiracleChecklist.style.display = "flex";
            GesturesChecklist.style.display = "none"
            break;
        case "GesturesCLNavButton":
            RingChecklist.style.display = "none";
            SpellChecklist.style.display = "none";
            PyromancyChecklist.style.display = "none";
            MiracleChecklist.style.display = "none";
            GesturesChecklist.style.display = "flex"
            break;
    }
}

document.addEventListener('DOMContentLoaded', () =>{
    AllCheckboxes = document.querySelectorAll("input[type='checkbox']")
    for (let Checkbox of AllCheckboxes){
        Checkbox.addEventListener('click', AddToLocalStorage);
        LSData = localStorage.getItem(Checkbox.id);
        if(LSData != null){
            console.log(LSData);
            if(LSData == "true"){
                Checkbox.checked = LSData;
            }else{
                Checkbox.checked = false;
            }
        }
    }

    RingChecklist = document.querySelector("#RingChecklistBox");
    SpellChecklist = document.querySelector("#SpellChecklistBox");
    PyromancyChecklist = document.querySelector("#PyromancyChecklistBox");
    MiracleChecklist = document.querySelector("#MiracleChecklistBox");
    GesturesChecklist = document.querySelector("#GesturesChecklistBox");

    AllNavButtons = document.querySelectorAll("div.NavigationButton");
    for (let NavButton of AllNavButtons){
        NavButton.addEventListener('click', ShowChecklist);
    }
});