function goWork(isJobComplete){
    return new Promise((resolve,reject )=>{
        setTimeout(()=>{
            if(isJobComplete){
                resolve(999);
            }else{
                reject('No work no money');
            }
        },500)
    });
}
function goToEgypt(moneyForTour) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (moneyForTour < 450) {
                reject('Not enough money');
            } else {
                console.log('HOORAY')
                resolve(moneyForTour-450);
            }
        },300);
    })
}
function buySouvenirs(money,souvenirCount){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const totalPrice = souvenirCount*10;
            if(totalPrice>money){
                reject('Not enough')
            }else {
                resolve(`Here you go ${souvenirCount} items`)
            }

        },1000)
    })
}

// goWork(true)
//     .then(money=>{
//         console.log('Good job.Here you go',money,'$');
//         return goToEgypt(money);
//     })
//     .then(moneyAfterTour =>{
//             console.log('It was great vacation',moneyAfterTour);
//             return buySouvenirs(moneyAfterTour,15);
//         })
//     .then(res=>{
//             console.log(res);
//         })
//     .catch(reason =>{
//             console.log('OOOPS',reason);
//         })
//     .finally(()=>{
//             console.log('FINAL')
//         })

// or
// sink away javascript
async function workation() {
    try {
        const money =await goWork(false);
        console.log('Good job.Here you go',money,'$');

        const moneyAfterTour = await goToEgypt(money);
        console.log('It was great vacation',moneyAfterTour);

        const res = await buySouvenirs(moneyAfterTour,15);
        console.log(res);
    }catch (e) {
        console.log('OOOPS',e) //standard
        // console.error('OOOPS',e) //red
        // console.warn('OOOPS',e) //yellow
    }
}
workation()
// ---------------------------------------------------------------------------
