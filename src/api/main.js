export const get = (address) => {
    return fetch(address).then(response => response.json());
}

export const post = (address, payload) => {
    return fetch(address, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
}
