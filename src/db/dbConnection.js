const mongoose = require('mongoose')

const url = process.env.DB_CONFIG_URL || ''

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to the DB')
    })
    .catch((e) => {
        console.log('Error', e)
    })