/*const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var port = process.env.PORT || 5000;
var app = express() ;
var router = express.Router();

router.get('/:pagina/:filas', function(req, res) {
  res.json({ mensaje: '¡Bienvenido a nuestra API!' });
});

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors());
app.listen(port);
app.use('/api', router);*/

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// define a root route
app.get('/', (req, res) => {
  res.send("Hello Jimmy");
});

app.use(cors());
// Require employee routes
const categoryRoutes = require('./routes/category.route');
const productRoutes = require('./routes/product.route');
const countRoutes = require('./routes/count.route');

// using as middleware
app.use('/api/v1/categories', categoryRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/count-products', countRoutes);

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});