document.addEventListener("DOMContentLoaded", () => {
    showDescription = document.getElementById("showDescription");
    showLeaderboard = document.getElementById("showLeaderboard");
    showPrizepool = document.getElementById("showPrizepool");
    showTasks = document.getElementById("showTasks");
    showSubmit = document.getElementById("showSubmit");
    Description = document.getElementById("description");
    Leaderboard = document.getElementById("leaderboard");
    Prizepool = document.getElementById("prizepool");
    Tasks = document.getElementById("tasks");
    Submit = document.getElementById("submit");
    function hideall(){
        document.querySelectorAll(".contentWrappers").forEach(containers => {
            containers.style.display = "none";
        })
        document.querySelectorAll(".toggleLinks").forEach(links => {
            links.style.color = "#fff";
        });
    }
    showDescription.addEventListener("click", () => {
        hideall();
        showDescription.style.color = "#8FFF00";
        Description.style.display = "block";
    });
    showLeaderboard.addEventListener("click", () => {
        hideall();
        showLeaderboard.style.color = "#8FFF00";
        Leaderboard.style.display = "block";
    });
    showPrizepool.addEventListener("click", () => {
        hideall();
        showPrizepool.style.color = "#8FFF00";
        Prizepool.style.display = "block";
    });
    showTasks.addEventListener("click", () => {
        hideall();
        showTasks.style.color = "#8FFF00";
        Tasks.style.display = "block";
    });
    showSubmit.addEventListener("click", () => {
        hideall();
        showSubmit.style.color = "#8FFF00";
        Submit.style.display = "block";
    });
});