// Promise.All  ->  if All promise resolve
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1 Resolve")
    }, 2000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p2 resolve")
    }, 1000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p3 Resolve")
    }, 5000);
});

Promise.all([p1, p2, p3])
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.error(error)
    })

   
    // if Any promise reject

    const p4 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("p4 Reject")
        }, 2000);
    });

    Promise.all([p1, p2, p3, p4])
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.error(error)
    })