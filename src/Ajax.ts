export default function getData(url: string, cb: any) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', cb);
    xhr.open('GET', url)
    xhr.send()
}