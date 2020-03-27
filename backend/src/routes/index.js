const init = db => {
  const router = require('express').Router()
  const photos = require('../controllers/photos')(db)

  router.get('/', photos.index)
  router.get('/fotos', photos.findAll)
  router.post('/fotos', photos.add)

  router.get('/fotos/:id', photos.find)
  router.put('/fotos/:id', photos.update)
  router.patch('/fotos/:id', photos.update)
  router.delete('/fotos/:id', photos.remove)

  return router
}

module.exports = init
