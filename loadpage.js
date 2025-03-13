const PAGES = {
    index: `
        <h1>welcome!</h1>

        <p>
            i'm shiba, a game dev from poland. <br><br>
            i mainly work with luau in roblox studio, but i'm also trying to learn python and c#. <br><br>
            if you want to contact or check out some of my works, check the buttons below.
        </p>

       <div class="button-container">
            <button onclick="loadPage('socials')">socials</button>
            <button onclick="loadPage('mywork')">my works</button>
        </div>
    `,
    mywork: `
        <h1>my works</h1>

        <p>
            <a href="https://www.roblox.com/games/16634562549/TBB-TARPG-REWORK-OPEN-ALPHA">TBB:TARPG</a>
            a fan RP game of <a href="https://www.roblox.com/games/10834586502/The-Battle-Bricks">Tumore's The Battle Bricks</a>, my first ever successful project
        </p>

        <p>
            <a href="https://www.roblox.com/games/88623920231246/Teapot-Tumble">Teapot Tumble</a>
            a spin on roblox's classic falling teapots of doom game by clockwork
        </p>

       <div class="button-container">
            <button onclick="loadPage('index')">back</button>
            <button onclick="loadPage('socials')">socials</button>
        </div>
    `,
    socials: `
        <h1>socials</h1>

        <p>
            discord: shibahh <br><br>
            roblox: <a href="https://www.roblox.com/users/2456801075/profile" target="_blank">ssshibah</a> (uid: 2456801075) <br><br>
            yt: <a href="https://www.youtube.com/@shibahhh" target="_blank">@shibahhh</a> <br><br>
            github: <a href="https://github.com/shibahh" target="_blank">shibahh</a> <br><br>
        </p>
        
        <div class="button-container">
            <button onclick="loadPage('index')">back</button>
            <button onclick="loadPage('mywork')">my works</button>
        </div>
    `
}

function loadPage(page) {
    document.querySelector(".container").innerHTML = PAGES[page]
}

document.addEventListener("DOMContentLoaded", () => {
	loadPage("index")
})