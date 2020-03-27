const db = require('./config/db')
const app = require('./app')(db)
const port = process.env.PORT || 3000

app.listen(port, err => {
  if (err) console.log('Unable to start node server.')
  else console.log('Server is running...')
})
