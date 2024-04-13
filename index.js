const data = require('./URL.json')

const sendRequests = async () => {
    try {
        const promisesArray = data.map(url => fetch(url));
        const resp = await Promise.all(promisesArray);
        console.log(resp?.map(r => r?.status))
    } catch (err) {
        console.log("error occurred in script", err)
    }
}

sendRequests()