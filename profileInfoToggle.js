document.addEventListener("DOMContentLoaded", () => {
    const showPersonalInfo = document.getElementById("showPersonalInfo");
    const showRecentSub = document.getElementById("showRecentSub");
    const showWallet = document.getElementById("showWallet");
    const personalInfo = document.getElementById("personalInfoWrapper");
    const recentSubmission = document.getElementById("recentSubmissionWrapper");
    const wallet = document.getElementById("walletWrapper");
    function hideall() {
        document.querySelectorAll(".contentWrappers").forEach(containers => {
            containers.style.display = "none";
        })
        document.querySelectorAll(".toggleLinks").forEach(links => {
            links.style.color = "#fff";
        });
    }
    showPersonalInfo.addEventListener("click", () => {
        hideall();
        showPersonalInfo.style.color = "#8fff00";
        personalInfo.style.display = "block";
    });
    showRecentSub.addEventListener("click", () => {
        hideall();
        showRecentSub.style.color = "#8fff00";
        recentSubmission.style.display = "block";
    });
    showWallet.addEventListener("click", () => {
        hideall();
        showWallet.style.color = "#8fff00";
        wallet.style.display = "block";
    });
});