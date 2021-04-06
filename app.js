const express = require('express');
const app = express();
const puerto = process.env.PORT;
const path = require('path');

// le decimos cual es la carpeta publica
const publicPath = path.join(__dirname, './public');
// para que encuentre las imagenes y css
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, './views/index.html'))
);

app.get('/login', (req, res) =>
    res.sendFile(path.join(__dirname, './views/login.html'))
);

app.get('/register', (req, res) =>
    res.sendFile(path.join(__dirname, './views/register.html'))
);

app.get('/producto', (req, res) =>
    res.sendFile(path.join(__dirname, './views/product.html'))
);

app.get('/detalleProducto', (req, res) =>
    res.sendFile(path.join(__dirname, './views/productDetail.html'))
);

app.get('/carrito', (req, res) =>
    res.sendFile(path.join(__dirname, './views/productCart.html'))
);

app.get('/plantilla', (req, res) =>
    res.sendFile(path.join(__dirname, './views/plantilla.html'))
);


app.listen(puerto || 3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
});