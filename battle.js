document.addEventListener("DOMContentLoaded", () => {
    singlebattle = document.getElementById("showSingleBattle");
    groupbattle = document.getElementById("showGroupBattle");
    singlebattletable = document.getElementById("singleBattleTableContainer");
    groupbattletable = document.getElementById("groupBattleTableContainer");

    singlebattletable.style.display = "block";
    groupbattletable.style.display = "none";

    singlebattle.addEventListener("click", () => {
        groupbattle.classList.remove('activeTable');
        singlebattle.classList.add('activeTable');
        singlebattletable.style.display = "block";
        groupbattletable.style.display = "none";
    });
    groupbattle.addEventListener("click", () => {
        groupbattle.classList.add('activeTable');
        singlebattle.classList.remove('activeTable');
        singlebattletable.style.display = "none";
        groupbattletable.style.display = "block";
    });
})