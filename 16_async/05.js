console.log('alfa');
viewData();
console.log('omega');

async function viewData() {
    try {
        const data = await getData(1)
        console.log(data);
    } catch (err) {
        console.log(err.message);
    }
}

// await/async
function getData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('leyendo datos');
            resolve({ id: id });
            // reject(new Error('no se pudo ller los datos'));
        }, 2000);
    });
}