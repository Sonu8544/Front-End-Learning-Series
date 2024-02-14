console.log("Hello sonu Start Now...")

const email = ["sksonu8544@gmail.com", "abc@gmail.com", "def@gmail.com"];

function waitForMainSend(i) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(i)
        }, 2000)
    })
}

async function mailSender() {
    console.log("Now Start To send main...")
    for (user of email) {
        const result = await waitForMainSend(user);
        console.log(result)
    }
    console.log("Done...")
}

mailSender()
