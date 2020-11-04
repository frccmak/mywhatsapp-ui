export function randomColor() {
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}

export function messageUUID() {
    return Math.floor(Math.random() * 10000000).toString();
}
