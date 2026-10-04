/* ========================= */
/* MESSAGE BOX */
/* ========================= */

function showMessage(message) {

    const text = document.getElementById("specialMessage");

    text.innerHTML = message;

    const box = document.getElementById("messageBox");

    box.style.transform = "scale(1.03)";

    setTimeout(function() {

        box.style.transform = "scale(1)";

    }, 200);
}


/* ========================= */
/* COMFORT */
/* ========================= */

function comfortMe() {

    showMessage(
        "Come here, baby 🫂❤️. You don't have to be strong today. Rest, get comfortable, and let yourself be taken care of. If I were there, I'd hold you close until you felt a little better."
    );

}


/* ========================= */
/* MAKE ME SMILE */
/* ========================= */

function makeMeSmile() {

    const messages = [

        "Emergency boyfriend announcement 🚨: You are officially allowed to be dramatic today. 😂❤️",

        "Your period said: 'Let me ruin her day.' Me: 'Not on my watch.' 😤🫂❤️",

        "If cuddles could cure everything, you'd be feeling 100% right now. Unfortunately, I'm not there... yet. 😌❤️",

        "Today you have permission to steal the blanket, demand snacks, and complain about everything. 😂💕",

        "Breaking news 📰: The most beautiful girl in the world is currently fighting her period. And she's winning. ❤️🏆"

    ];

    const random =
        messages[Math.floor(Math.random() * messages.length)];

    showMessage(random);

}


/* ========================= */
/* CHOCOLATE */
/* ========================= */

function chocolate() {

    showMessage(
        "🍫 CHOCOLATE EMERGENCY! 🍫<br><br>Whatever amount of chocolate you think you need... double it. I don't make the rules. 😂❤️"
    );

}


/* ========================= */
/* LOVE MESSAGE */
/* ========================= */

function loveMessage() {

    const messages = [

        "You are loved more than you probably realize. ❤️",

        "Even on your hardest days, you are still my beautiful girl. 🌹❤️",

        "I choose you on the happy days, the difficult days, and every day in between. 🫶",

        "You don't have to be okay all the time. Just be you. I'll still be here. ❤️",

        "If today feels heavy, let me carry a little of it with you. 🫂❤️"

    ];

    const random =
        messages[Math.floor(Math.random() * messages.length)];

    showMessage(random);

}


/* ========================= */
/* FEELING CHECK-IN */
/* ========================= */

function feeling(type) {

    const response =
        document.getElementById("careResponse");


    if (type === "cramps") {

        response.innerHTML =
            "Oh baby 🫂❤️. I'm sorry you're hurting. Get comfortable, rest, and be gentle with yourself. If I were there, I'd hold you close and take care of you.";

    }


    else if (type === "sad") {

        response.innerHTML =
            "Come here, beautiful 🫂❤️. You don't have to pretend you're okay. It's completely fine to have a difficult day. I'm still right here loving you.";

    }


    else if (type === "tired") {

        response.innerHTML =
            "Then today is officially a REST DAY 😴❤️. Put your feet up, get comfortable, and let your body have the rest it deserves.";

    }


    else if (type === "moody") {

        response.innerHTML =
            "😂❤️ Mood officially accepted! No arguments today. You are beautiful, loved, and completely allowed to be a little moody.";

    }


    else if (type === "okay") {

        response.innerHTML =
            "I'm glad you're feeling okay, beautiful 😊❤️. Keep smiling. And remember, I'm always in your corner.";

    }

}


/* ========================= */
/* PAGE NAVIGATION */
/* ========================= */

function showPage(pageNumber) {

    const page1 =
        document.getElementById("page1");

    const page2 =
        document.getElementById("page2");

    const page3 =
        document.getElementById("page3");


    page1.classList.remove("active");

    page2.classList.remove("active");

    page3.classList.remove("active");


    if (pageNumber === 1) {

        page1.classList.add("active");

    }


    else if (pageNumber === 2) {

        page2.classList.add("active");

    }


    else if (pageNumber === 3) {

        page3.classList.add("active");

    }


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* ========================= */
/* FINAL MESSAGE */
/* ========================= */

function rememberThis() {

    const finalMessage =
        document.getElementById("finalMessage");


    finalMessage.innerHTML =
        "Distance can keep me from holding you right now, but it can never stop me from caring about you. ❤️ You are loved. ❤️";


    finalMessage.classList.add("show");

}