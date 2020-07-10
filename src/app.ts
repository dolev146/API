import { home,  about, livereports } from './routes.js'

window.onload = init;

const routes = {
    home,
    about,
    livereports
}

function init() {
    document.querySelector('nav > ul')?.addEventListener('click', selectRoute)
}

function selectRoute(event : any) {
    event.preventDefault();
    if (event.target.nodeName !== "A") {
        return
    }
    const outlet = document.querySelector('.link-outlet')
    routes[event.target.textContent.toLowerCase()](outlet) 
}