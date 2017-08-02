import webstomp from 'webstomp-client';

/**
 * Initilizes the WebSocket connection to the server.
 * @returns {Promise}
 */
export const initializeWebsocket = () => {
    return new Promise((resolve, reject) => {
        const client = webstomp.client('ws://localhost:8080/admin');
        console.log("Client", client);
        client.connect({}, (frame) => {
            console.log("Connected", frame);
            resolve(client);
        });
    });
};
