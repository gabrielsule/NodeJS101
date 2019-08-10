const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/demo')
    .then(() => console.log('Conectando a MondoDB'))
    .catch(err => console.log('Error conectando a MongoDB', err))

const prodSchema = new mongoose.Schema ({
    name: String,
    description: String,
    tags: [String],
    cant: Number,
    date: { type: Date, default: Date.now}
});

const Product = mongoose.model('Product', prodSchema);

async function createProduct() {
    const product = new Product({
        name: 'martillo',
        description: 'Officia ullamco proident qui veniam magna do ut dolore.',
        cant: 5,
        tags: ['carpinteria', 'albanilleria']
    });

    const result = await product.save();
    console.log(result);
}

async function getProducts() {
    const pageNumber = 1;
    const pageSize = 5;

    const result = await Product
    .find()
    .skip(( pageNumber - 1) * pageSize)
    .limit(pageSize)
    .select({ name: 1, description: 1 });
    console.log(result);
}

async function updateProduct(id) {
    const result = await Product.update({ _id: id }, {
        $set: {
            name: 'pinza',
            cant:  3
        }
    });

    console.log(result);
}

async function deleteProduct(id) {
    const result = await Product.deleteOne({ _id: id }, {
    });

    console.log(result);
}


// createProduct();
getProducts();
// updateProduct('');
// deleteProduct('');