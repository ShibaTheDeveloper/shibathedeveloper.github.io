const PAGES = {
    index: `
        <h1>welcome!</h1>

        <p>
            im shiba, a game dev from poland mainly working with luau in roblox studio since 2018. <br>
            im always trying to improve my coding skills and learn new languages. <br>
            you can check out my projects, or contact me using the buttons above.
        </p>
    `,
    mywork: `
        <h1>my works</h1>

        <img src="Assets/embed.png></img>
        <p>
            <a href="https://www.roblox.com/games/16634562549/TBB-TARPG-REWORK-OPEN-ALPHA">TBB:TARPG</a> <br>
            a fan RP game of <a href="https://www.roblox.com/games/10834586502/The-Battle-Bricks">Tumore's The Battle Bricks</a>, my first ever successful project
        </p>

        <img src="Assets/embed.png></img>
        <p>
            <a href="https://www.roblox.com/games/88623920231246/Teapot-Tumble">Teapot Tumble</a> <br>
            a spin on roblox's classic falling teapots of doom game by clockwork
        </p>
    `,
    socials: `
        <h1>socials</h1>

        <p>
            discord: shibahh <br>
            roblox: <a href="https://www.roblox.com/users/2456801075/profile" target="_blank">ssshibah</a> (uid: 2456801075) <br>
            yt: <a href="https://www.youtube.com/@shibahhh" target="_blank">@shibahhh</a> <br>
            github: <a href="https://github.com/shibahh" target="_blank">shibahh</a> <br>
        </p>
    `
}

var buttons = `
    <div class="button-container">
        <button onclick="loadPage('index')">home</button>
        <button onclick="loadPage('socials')">socials</button>
        <button onclick="loadPage('mywork')">my works</button>
    </div>
`

var small = `
    <small>
        <br>
         the favicon is a picutre of sunny from omori
    </small>
`

function loadPage(page) {
    document.querySelector(".container").innerHTML = buttons + PAGES[page] + small
}

document.addEventListener("DOMContentLoaded", () => {
	loadPage("index")
})