console.log('alfa');

getData(1, (data) => {
    console.log(data);
});

console.log('omega');

// callback
function getData(id, callback) {
    setTimeout(() => {
        console.log('leyendo datos');
        callback({ id: id });
    }, 2000);
}