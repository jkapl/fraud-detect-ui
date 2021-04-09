export async function getMessages () {
    let res = {
        "transaction_id" : "uuid",
        "device_metadata": {
          "device_id": "cy56ayzpdp",
          "location": "94016",
          "merchant_name": "chase"
        },
        "transaction": {
          "device_id": "cy56ayzpdp",
          "transaction_value": "1000",
          "account_id": "8mmvrnxiuy",
          "time_ms": "1593617082456",
          "flagged": false
        }
    }
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(JSON.stringify(res))
        }, 2000);
    });

    // const res = await fetch('/api/messages')
    // return res.json();
}