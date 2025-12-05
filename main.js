const quotesTable = [
    { text: "A good game is a game that makes you feel like you are part of it. A great game is a game that makes you forget that you're playing.", author: "Gabe Newell" },
    { text: "The beauty of video games is that they allow people to be who they want to be. It’s about expressing yourself.", author: "Cliff Bleszinski" },
    { text: "A game is not a thing you finish. A game is a thing you experience.", author: "Reggie Fils-Aimé" },
    { text: "The job of a designer is to design the game for the player to enjoy, not for the designer to enjoy.", author: "Yuji Naka" },
    { text: "We’re making something people can use, something people can really enjoy. The real fun of creating games is making people’s dreams come true.", author: "Tetsuya Takahashi" },
    { text: "In the end, the player is the one who decides what a game really is, not the game designer.", author: "Fumito Ueda" },
    { text: "Don’t just think of the technology, think of the emotions it can evoke.", author: "Hironobu Sakaguchi" },
    { text: "The most successful games are the ones that surprise you, make you laugh, or make you feel something.", author: "Kenji Inafune" },
    { text: "Games are meant to be shared. Not only with your friends but with the world.", author: "Jade Raymond" },
    { text: "A game is about making players feel good, feel that they’ve learned something, and have fun.", author: "Satoru Iwata" },
];

const PAGES = {
    index: `
        <h1>!! THIS WEBSITE IS FAR OVERDUE FOR A RE-CODE, WHICH WILL HAPPEN SOON !!</h1>
        <h1>welcome!</h1>

        <p>
            im shiba, a game dev from poland mainly working with luau in roblox studio since 2018. <br>
            i specialize in lua, and luau in roblox studio. (go to interests tab for details)<br>
            you can check out my projects, or contact me using the buttons above. <br>
        </p>

        <br>

        <small>
            while working on this website i CTRL + R'd discord way more times than i'd like to admit
        </small>

        <img src="/Assets/space-dog.gif" class="gif"></img>
    `,
    projects: `
        <h1>projects</h1>
        <p>
            now that i'm making this tab, i've realised how little projects i have actually finished and bothered to publish.
            you can click on the images to get redirected.
        </p>

        <small>projects are sorted from newest to oldest</small> <br>

        <div class="project-container">
           <a href="https://www.roblox.com/games/81692255468425/Same-Day-Shipping">
                <img src="/Assets/sds.webp" width = 150 height = 150>
           </a></img> <br>

            <p>
                Same Day Shipping is a game where you deliver parcels on a deadly timer.
            </p>
        </div>

        <div class="project-container">
           <a href="https://www.roblox.com/games/88623920231246/Teapot-Tumble">
                <img src="/Assets/teapot-tumble.png" width = 150 height = 150>
           </a></img> <br> 

            <p>
                Teapot Tumble, a spin on roblox's classic falling teapots of doom game by clockwork. the game is an alpha, so dont expect much.
            </p>
        </div>

        <div class="project-container">
           <a href="https://www.roblox.com/games/15795590655/Merge-Boxes">
                <img src="/Assets/merge-boxes.png" width = 150 height = 150>
           </a></img> <br> 

            <p>
                Merge Boxes, a merging game where you.. merge boxes. probably one of my simplest projects
            </p>
        </div>

        <div class="project-container">
            <a href="https://www.roblox.com/games/16634562549/TBB-TARPG-REWORK-OPEN-ALPHA">
                <img src="/Assets/tarpg.png" width = 150 height = 150>
           </a></img> <br> 

            <p>
                TBB:TARPG (the battle bricks: totally accurate roleplay game), a fan RP game of <a href="https://www.roblox.com/games/10834586502/The-Battle-Bricks">Tumore's The Battle Bricks</a>, my first ever successful project, and the oldest.
                it has had 4 versions which can all be played in the not yet finished <a href="https://www.roblox.com/games/94032704926982/TARPG-ERA">tarpg era game</a>
            </p>
        </div>
    `,
    links: `
        <h1>links</h1>

        <p>
            I'm pretty active on everything besides youtube. <br>
            please do not send me friend requests on roblox, and steam. <br>
            instead of friending me on discord just send me a message. <br>
        </p>

        <p>
            discord: shibathedeveloper <br>
            bsky: <a href="https://bsky.app/profile/shibadev.bsky.social" target="_blank">ShibaTheDeveloper</a><br>
            roblox: <a href="https://www.roblox.com/users/2456801075/profile" target="_blank">ShibaTheDeveloper</a><br>
            yt: <a href="https://www.youtube.com/@ShibaTheDeveloper" target="_blank">@ShibaTheDeveloper</a> <br>
            github: <a href="https://github.com/ShibaTheDeveloper" target="_blank">ShibaTheDeveloper</a> <br>
            steam: <a href="https://steamcommunity.com/id/ShibaTheDeveloper" target="_blank">ShibaTheDeveloper</a> <br>
            itch.io: <a href="https://shibathedeveloper.itch.io/" target="_blank">ShibaTheDeveloper</a> <br>
        </p>

        <h2>my most recent video</h2>
        <div class="videoWrapper">
        <iframe src="https://www.youtube.com/embed?listType=playlist&list=UUpeQpdGySva14lL8o-1Gr5Q"></iframe>
        </div>

        <!--<img src="/Assets/doggo-on-da-swing.gif" class="gif"></img>-->
    `,
    interests: `
        <h1>interests</h1>

        <h2>hobbies:</h2>
        <p>
            one of my favorite hobbies is coding, which i have been doing since 2018! <br>
            i code in luau a lot, but i've been making a switch to love2d and lua <br>
        </p>

        <h2>games:</h2>
        <p>
            my taste in games is all over the place, and i haven't really figured out what game genres i like and which ones i don't like <br>
            (in no particular order)<br><br>

            my favorite game as of 5/14/2025: Entry Point: Freelancer's Cut<br><br>

            games i'm a fan of: <br>
            -RDR2 <br>
            -Ultrakill <br>
            -Spore <br>
            -Forsaken <br>
            -Clash of Clans<br>
            -Entry Point (freelancer's cut and the og)<br>
            -Outer Wilds (i haven't even completed the game LOL)<br>
            -Valorant<br>
            -CS:GO (not cs2, that thing is unfinished)<br>
            -Windowkill<br><br>

            games i used to be a fan of: <br>
            -The Battle Bricks <br>
            -TDS <br>
            -The Wild West <br>
            -Clash Royale (p2w) <br>
        </p>

        <h2>music:</h2>
        <p>
            basically the only music genres i listen to are rap and video game OST<br>
            (in no particular order)<br><br>

            fav artists: <br>
            -kendrick lamar <br>
            -kanye west <br>
            -eminem <br>
            -micheal jackson <br><br>
            
            fav game osts: <br>
            -forsaken <br>
            -ultrakill <br>
        </p>
    `
}

var higher = `
    <h2>QUOTE OF THE DAY: "<span id="quote-text">Loading...</span>" <span id="quote-author">Loading...</span></h2>

    <div class="button-container">
        <button onclick="loadPage('index')">home</button>
        <button onclick="loadPage('links')">links</button>
        <button onclick="loadPage('interests')">interests</button>
        <button onclick="loadPage('projects')">projects</button>
    </div>
`;

// Function to get a hash of the current date
function getTodayHash() {
    const today = new Date();
    return today.toDateString(); // Returns the date string, i.e., "Thu Mar 14 2025"
}

function getQuoteIndexForToday() {
    const todayHash = getTodayHash();
    const storedHash = localStorage.getItem("quoteDayHash");

    // If the hash is not stored or it's a new day, store it and select a new quote
    if (storedHash !== todayHash) {
        const randomIndex = Math.floor(Math.random() * quotesTable.length);
        localStorage.setItem("quoteDayHash", todayHash);
        localStorage.setItem("quoteIndex", randomIndex);
    }

    return localStorage.getItem("quoteIndex");
}

function getQuoteOfTheDay() {
    const index = getQuoteIndexForToday();
    return quotesTable[index];
}

function loadPage(page) {
    document.querySelector(".container").innerHTML = higher + PAGES[page];
    displayQuote(); // Display the quote
}


function displayQuote() {
    const randomQuote = getQuoteOfTheDay();
    document.getElementById("quote-text").innerText = randomQuote.text;
    document.getElementById("quote-author").innerText = `- ${randomQuote.author}`;
}

document.addEventListener("DOMContentLoaded", () => {
	loadPage("index");
})