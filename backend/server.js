const express = require('express')
const cors = require('cors')
const app = express()


app.use(cors());

app.use(cors({ origin: ['http://localhost:5173', 'https://localhost:5173'] }))
const productRoutes = require('./routes/productRoutes')



app.use('/api', productRoutes)

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})