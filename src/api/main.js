export const get = (address) => {
    return fetch(address).then(response => response.json());
}
