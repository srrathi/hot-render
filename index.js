const data = require('./URL.json')

const sendRequests = async () => {
    try {
        const promisesArray = data.map(url => fetch(url));
        const resp = await Promise.all(promisesArray);

        const message = data.map((url, idx) => `${url}: status ${resp[idx]?.status}`).join("\n")
        const options = {
            method: 'POST',
            body: JSON.stringify({
                title: 'Render Hot Cron',
                description: message,
                webhookUrl: process.env.WEBHOOK_URL
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }
        fetch(process.env.API_URL, options);
    } catch (err) {
        console.log("error occurred in script", err)
    }
}

sendRequests()