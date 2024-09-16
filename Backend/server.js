import app from './index.js'

import express from 'express'

app.listen(process.env.PORT , () => {
    console.log(`The server is getting started on the port ${process.env.PORT}`)
})

