import { home, about, livereports } from './routes.js';
window.onload = function () {
    init();
    document.querySelector("body > nav > ul > li:nth-child(1) > a")?.click();
};
const routes = {
    home,
    about,
    livereports
};
function init() {
    document.querySelector('nav > ul')?.addEventListener('click', selectRoute);
}
function selectRoute(event) {
    event.preventDefault();
    if (event.target.nodeName !== "A") {
        return;
    }
    const outlet = document.querySelector('.link-outlet');
    routes[event.target.textContent.toLowerCase()](outlet);
}
//# sourceMappingURL=app.js.map