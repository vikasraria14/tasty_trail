const express = require('express');
const cors = require('cors');
const config = require('./config.json');
const app = express();
// const a = require('./database/createTables')
app.use(cors());
app.use(express.json());

const authRouter = require('./routes/auth')
const productRouter = require('./routes/product')
const cartRouter = require('./routes/cart')
const loginRouter = require('./routes/login')
const signupRouter = require('./routes/register')
const adminRegister = require('./routes/adminRegisteration')
const adminLogin = require('./routes/adminLogin')
const admin = require('./routes/admin')
const addMenu = require('./routes/addMenu')
const orderRouter = require('./routes/orders')

app.use('/uploads', express.static('uploads'));
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/cart', cartRouter);
app.use('/api/v1/login', loginRouter);
app.use('/api/v1/register', signupRouter);
app.use('/api/v1/orders', orderRouter)
app.use('/api/v1/adminRegistration', adminRegister)
app.use('/api/v1/adminLogin', adminLogin)
app.use('/api/v1/admin', admin)
app.use('/api/v1/addProduct',addMenu)

const port = process.env.PORT || config.port
app.listen(port, () => {
    console.log(`Restaurant Backend running at port ${port}`);
});

