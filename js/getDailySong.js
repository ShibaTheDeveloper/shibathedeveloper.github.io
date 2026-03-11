async function loadDailySong() {
    const COOKIE_NAME = "daily_song";
    const DATE_COOKIE = "daily_song_date";

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
        return null;
    }

    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 86400000);
        document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
    }

    const today = new Date().toISOString().split("T")[0];

    let savedSong = getCookie(COOKIE_NAME);
    let savedDate = getCookie(DATE_COOKIE);

    if (!savedSong || savedDate !== today) {
        const response = await fetch("/json/songs.json");
        const data = await response.json();

        const links = data;
        savedSong = links[Math.floor(Math.random() * links.length)];

        setCookie(COOKIE_NAME, savedSong, 1);
        setCookie(DATE_COOKIE, today, 1);
    }

    const url = new URL(savedSong);
    const videoId = url.searchParams.get("v");
    if (!videoId) return;

    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    const wrapper = document.createElement("div");
    wrapper.className = "daily-song";

    const title = document.createElement("h2");
    title.textContent = "Daily Song";

    const iframe = document.createElement("iframe");
    iframe.src = embedUrl;
    iframe.allowFullscreen = true;
    iframe.loading = "lazy";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";

    wrapper.appendChild(title);
    wrapper.appendChild(iframe);

    const container = document.querySelector(".container");
    container.appendChild(wrapper);
}

loadDailySong();