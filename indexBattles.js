battles = [
    {
       img: "assets/images/battle-1.png",
       title: "Website Development",
       desc: "Design a user-friendly construction website that embodies the brand's identity and values, focusing on clarity, navigation, and device responsiveness.",
       link: "#"
    },
    {
        img: "assets/images/battle-2.png",
        title: "Website Development",
        desc: "Design a user-friendly construction website that embodies the brand's identity and values, focusing on clarity, navigation, and device responsiveness.",
        link: "#"
    },
    {
        img: "assets/images/battle-3.png",
        title: "Website Design",
        desc: "Design a user-friendly construction website that embodies the brand's identity and values, focusing on clarity, navigation, and device responsiveness.",
        link: "#"
    }, 
    {
        img: "assets/images/battle-4.png",
        title: "UI/UX Designing",
        desc: "Design a user-friendly construction website that embodies the brand's identity and values, focusing on clarity, navigation, and device responsiveness.",
        link: "#"
    },
    {
        img: "assets/images/battle-5.png",
        title: "Backend Login Designing for a Ecommerce Website",
        desc: "Design a user-friendly construction website that embodies the brand's identity and values, focusing on clarity, navigation, and device responsiveness.",
        link: "#"
    },
    {
        img: "assets/images/battle-6.png",
        title: "Backend Development Using Python",
        desc: "Design a user-friendly construction website that embodies the brand's identity and values, focusing on clarity, navigation, and device responsiveness.",
        link: "#"
    },
]

document.addEventListener("DOMContentLoaded", () => {
    let battleCode = '';
    let duration = 50;
    battles.forEach(battle => {
        battleCode += `
        <div class="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay=${duration}>
            <div class="card rounded-4 overflow-hidden bg-dark mx-auto" style="width: 90%; border: 4px solid #404040;">
                <img src="${battle.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="card-title text-white">${battle.title}</h4>
                    <p class="card-text text-white opacity-50">${battle.desc}</p>
                    <a href="battles.html" class="btn prClr_bg w-100 fw-medium">Enroll</a>
                </div>
            </div>
        </div>`
        duration+100;
    });
    document.getElementById('ecpBattlesSlides').innerHTML = battleCode;
});