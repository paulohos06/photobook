<template>
  <div id="register-form">
    <h1>Formulário</h1>

    <h3 class="subtitle" v-if="photo._id">Alterar Imagem</h3>
    <h4 class="subtitle" v-else>Adicionar Imagem</h4>

    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(submit)">
        <div class="control-group">
          <label for="title" class="control-label">Título</label>
          <div class="controls">
            <ValidationProvider rules="required|minmax:3,30" v-slot="{ errors }">
              <input type="text" name="title" id="title" v-model.lazy="photo.title">
              <div class="error">{{ errors[0] }}</div>
            </ValidationProvider>
          </div>
        </div>
        <!-- .control-group -->

        <div class="control-group">
          <label for="url" class="control-label">URL</label>
          <div class="controls">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <input type="text" name="url" id="url" autocomplete="off" v-model.lazy="photo.url">
              <div class="error">{{ errors[0] }}</div>
            </ValidationProvider>
            <div>
              <ResponsiveImage :url="photo.url" :title="photo.title" v-show="photo.url"/>
            </div>
          </div>
        </div>
        <!-- .control-group -->

        <div class="control-group">
          <label for="description" class="control-label">Descrição</label>
          <div class="controls">
            <textarea name="description" id="description" autocomplete="off" v-model="photo.description"></textarea>
          </div>
        </div>
        <!-- .control-group -->

        <div class="control-group">
          <div id="btn-action" class="controls">
              <div class="btn-save">
                <Button className="success" type="submit" label="Salvar" />
              </div>
              <div class="btn-return">
                <router-link :to="{ name: 'home' }">
                  <Button className="primary" type="button" label="Voltar" />
                </router-link>
              </div>
          </div>
        </div>
        <!-- .control-group -->
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import Button from '../components/Button'
import ResponsiveImage from '../components/ResponsiveImage'
import Photo from '../models/photo/Photo'
import PhotoService from '../models/photo/PhotoService'

export default {
  components: { Button, ResponsiveImage },
  data() {
    return {
      photo: Photo(),
      id: this.$route.params.id
    }
  },
  async created() {
    if (this.id) {
      try {
        this.photo = await PhotoService(this.$http).find(this.id)
      } catch (err) {
        console.log('Error:', err)
      }
    }
  },
  methods: {
    submit: async function() {
      try {
        await PhotoService(this.$http).add(this.photo)
        if (this.id) this.$router.push({ name: 'home' })
        this.photo = ''
      } catch (err) {
        console.log('Error:', err)
      } 
    }
  }
}
</script>

<style scoped>
input[type="text"] {
  width: 500px;
  padding: 5px;
  margin: 10px;
  outline: none;
  font-size: 15px;
  border: 1.5px solid #ccc;
}
textarea {
  width: 500px;
  padding: 10px;
  outline: none;
  font-size: 15px;
  border: 1.5px solid #ccc;
}
#btn-action {
  display: inline-block;
}
.btn-save {
  float: left;
  width: 70px;
}
.btn-return {
  float: right;
  width: 70px;
}
.subtitle {
  color: orangered;
}
.error {
  color: red;
}
</style>