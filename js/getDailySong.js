async function loadDailySong(forceNew = false) {
    const COOKIE_NAME = "daily_song";
    const DATE_COOKIE = "daily_song_date";

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
        return null;
    }

    function setCookie(name, value, expires) {
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    }

    const today = new Date().toLocaleDateString("en-CA");

    let savedSong = getCookie(COOKIE_NAME);
    let savedDate = getCookie(DATE_COOKIE);

    if (forceNew || !savedSong || savedDate !== today) {
        const response = await fetch("/json/songs.json");
        const links = await response.json();

        savedSong = links[Math.floor(Math.random() * links.length)];

        if (!forceNew) {
            const nextMidnight = new Date();
            nextMidnight.setHours(24, 0, 0, 0);

            setCookie(COOKIE_NAME, savedSong, nextMidnight);
            setCookie(DATE_COOKIE, today, nextMidnight);
        }
    }

    const url = new URL(savedSong);
    const videoId = url.searchParams.get("v");
    if (!videoId) return;

    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    const container = document.getElementById("daily-song");
    container.innerHTML = "";

    const iframe = document.createElement("iframe");
    iframe.src = embedUrl;
    iframe.allowFullscreen = true;
    iframe.loading = "lazy";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";

    const button = document.createElement("button");
    button.textContent = "Gimmie another!";
    button.addEventListener("click", () => loadDailySong(true));

    container.appendChild(iframe);
    container.appendChild(button);
}

loadDailySong();