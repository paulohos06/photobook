const photoService = axios => {
  // const baseUrl = '/v1/fotos'
  const baseUrl = '/fotos'

  const findAll = async () => {
    try {
      const photos = await axios.get(baseUrl)
      return photos.data
    } catch (err) {
      console.log('Error:', err)
      throw new Error('Serviço indisponível!')
    }
  }

  const find = async id => {
    const photo = await axios.get(`${baseUrl}/${id}`)
    return photo.data
  }
  
  const add = async photo => {
    if (!photo._id) create(photo)
    else update(photo)
  }

  const create = async photo => {
    return await axios.post(baseUrl, photo)
  }

  const update = async photo => {
    return await axios.put(`${baseUrl}/${photo._id}`, photo)
  }

  const remove = async photo => {
    try {
      return await axios.delete(`${baseUrl}/${photo._id}`)
    } catch (err) {
      console.log('Error:', err)
      throw new Error('Não foi possível remover a imagem!')
    }
  }

  return {
    findAll,
    find,
    add,
    remove
  }
}

export default photoService