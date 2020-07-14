// import Ajax from './routes.js'
function home(outlet) {
    if (outlet) {
        let homediv = document.createElement("div");
        outlet.appendChild(homediv);
        homediv.innerHTML = "<div><h1 style=text-align:center>List of All the Coins</h1></div>";
        loadContent('./components/home/home.component.html', outlet);
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.coingecko.com/api/v3/coins/list');
        xhr.onload = function () {
            let containerInfo = document.createElement("div");
            containerInfo.classList = "containerCoins";
            outlet.appendChild(containerInfo);
            const data = JSON.parse(xhr.responseText);
            for (let i = 0; i < 100; i++) {
                let newdiv = document.createElement('div');
                newdiv.classList = "Coininside";
                let toggle_btn = document.createElement('input');
                let infoLink = document.createElement('a');
                infoLink.setAttribute('href', 'https://api.coingecko.com/api/v3/coins/list');
                infoLink.innerHTML = "more Info";
                toggle_btn.classList.add("toggle_btn");
                toggle_btn.setAttribute('type', 'checkbox');
                newdiv.classList.add("div_style");
                newdiv.innerHTML += `<span>${(data[i].symbol.toUpperCase())}<br><br>
                ${data[i].name} </span><br>`;
                containerInfo.appendChild(newdiv);
                newdiv.appendChild(toggle_btn);
                newdiv.appendChild(infoLink);
                toggle_btn.onclick = function (event) {
                    alert(event.target.parentElement.innerHTML);
                };
            }
        };
        xhr.send();
    }
}
function livereports(outlet) {
    if (outlet) {
        outlet.innerHTML = "<h1> Live reports </h1>";
    }
}
function about(outlet) {
    if (outlet) {
        outlet.innerHTML = "<h1>ABOUT</h1>";
        loadContent('./components/about/about.component.html', outlet);
        loadScript('./components/about/about.component.js');
    }
    // var scriptTag = document.createElement('script');
    // scriptTag.src = './components/about/about.component.js';
    // scriptTag.onload = implementationCode;
    //  scriptTag.onreadystatechange = implementationCode;
    // document.body.insertAdjacentElement('beforeend',scriptTag)   
}
function loadContent(url, outlet) {
    if (outlet) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function () {
            outlet.innerHTML += xhr.responseText;
        };
        xhr.send();
        return xhr;
    }
}
function loadScript(url) {
    var scriptTag = document.createElement('script');
    scriptTag.src = url;
    document.body.insertAdjacentElement('beforeend', scriptTag);
}
export { home, about, livereports };
//# sourceMappingURL=routes.js.map