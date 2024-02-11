const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1 Resolve")
    }, 2000)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p2 Resolve")
    }, 2000)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p3 Resolve")
    }, 2000)
})

Promise.allSettled([p1, p2, p3])
    .then((Response) => {
        console.log(Response)
    }).catch((error) => {
        console.error(error)
    })


// if any promise reject
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("p4 Reject")
    }, 2000)
})


Promise.allSettled([p1, p2, p3, p4])
    .then((Response) => {
        console.log(Response)
    }).catch((error) => {
        console.error(error)
    })
