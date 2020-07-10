function home(outlet: HTMLElement | null) {
    if (outlet) {
        outlet.innerHTML = "<h1>HOME</h1>"
        loadContent('./components/home/home.component.html', outlet)
        loadContent('https://api.coingecko.com/api/v3/coins/list', outlet)

    }
}
function livereports(outlet: HTMLElement | null) {
    if (outlet) {
        outlet.innerHTML = "<h1> Live reports </h1>"
    }

}

function about(outlet: HTMLElement | null) {
    if (outlet) {
        outlet.innerHTML = "<h1>ABOUT</h1>"
        loadContent('./components/about/about.component.html', outlet)
        loadScript('./components/about/about.component.js')
    }

    // var scriptTag = document.createElement('script');
    // scriptTag.src = './components/about/about.component.js';

    // scriptTag.onload = implementationCode;
    //  scriptTag.onreadystatechange = implementationCode;
    // document.body.insertAdjacentElement('beforeend',scriptTag)   
}

function loadContent(url: string, outlet: HTMLElement | null) {
    if (outlet) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url)
        xhr.onload = function () {
            outlet.innerHTML += xhr.responseText;
        }
        xhr.send()    
    }
}

function loadScript(url: string) {
    var scriptTag = document.createElement('script');
    scriptTag.src = url;
    document.body.insertAdjacentElement('beforeend', scriptTag)
}

export { home, about, livereports }