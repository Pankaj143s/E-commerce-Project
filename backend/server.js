const express = require('express')

const productRoutes = require('./routes/productRoutes')
const app = express()


app.use('/api', productRoutes)

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})