const init = db => {
  const index = (req, res) => res.send('Bem-vindo!')

  const findAll = (req, res) => {
    db.find({}).sort({ title: 1 }).exec((err, docs) => {
      if (err) {
        console.log(err)
        res.send({ success: false, errors: err })
      } else {
        res.send(docs)
      }
    })
  }

  const add = (req, res) => {
    db.insert(req.body, (err, doc) => {
      if (err) {
        console.log(err)
        res.send({ success: false, errors: err })
      } else {
        console.log(`Adicionado com sucesso: ${doc._id}`)
        res.send({ success: true })
      }
    })
  }

  const find = (req, res) => {
    db.findOne({ _id: req.params.id }, (err, doc) => {
      if (err) {
        console.log(err)
        res.send({ success: false, errors: err })
      } else {
        res.json(doc)
      }
    })
  }

  const update = (req, res) => {
    db.update({ _id: req.params.id }, req.body, (err) => {
      if (err) {
        console.log(err)
        res.send({ success: false, errors: err })
      } else {
        console.log(`Atualizado com sucesso: ${req.body._id}`)
        res.send({ success: true })
      }
    })
  }

  const remove = (req, res) => {
    db.remove({ _id: req.params.id }, {}, function (err, numRemoved) {
      if (err) {
        console.log(err)
        res.send({ success: false, errors: err })
      } else {
        console.log('Removido com sucesso')
        res.send({ success: true })
      }
    })
  }

  return {
    index,
    findAll,
    add,
    find,
    update,
    remove
  }
}

module.exports = init
