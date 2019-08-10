console.log('alfa');

getData(1)
    .then(data => console.log(data))
    .catch(err => console.log(err));

console.log('omega');

// promise
function getData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('leyendo datos');
            resolve({ id: id });
        }, 2000);
    });
}