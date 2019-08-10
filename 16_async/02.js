console.log('alfa');
const data = getData(1);
console.log(data);
console.log('omega');

function getData(id) {
    setTimeout(() => {
        console.log('leyendo datos');
        return { id: id }
    }, 2000);
}