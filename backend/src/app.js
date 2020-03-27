const init = db => {
  const express = require('express')
  const bodyParser = require('body-parser')
  const cors = require('cors')
  const routes = require('./routes')(db)
  const swaggerUI = require('swagger-ui-express')
  const YAML = require('yamljs')
  const swaggerDoc = YAML.load('./swagger.yaml')
  const app = express()

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(cors())
  app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))
  app.use(routes)

  return app
}

module.exports = init
