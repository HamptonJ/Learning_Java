/*
 * Load the data from the server
 */
export const sendCommand = (input) => {
    return fetch('input', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(input)
    }).then(response => {
        return response.text()
    });
};