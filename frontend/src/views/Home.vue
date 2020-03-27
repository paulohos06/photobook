<template>
  <div>
    <h1>Photobook</h1>
    <p class="alert">{{ message }}</p>

    <div class="container">
      <div class="filter">
        <input type="search" placeholder="Filtre pelo título" v-model="filter" />
      </div>
      <!-- .filter -->
      <ul class="book">
        <li v-for="photo of photoWithFilter" :key="photo._id">
          <Panel :title="photo.title">
            <ResponsiveImage :url="photo.url" :title="photo.title" v-transform:rotate.animate />
            <br>
            <div class="btn-action">
              <div class="btn-edit">
                <router-link :to="{ name: 'update', params: { id: photo._id } }">
                  <Button className="success" type="button" label="Editar"/>
                </router-link>
              </div>
              <div class="btn-remove">
                <Button className="close" type="button" label="Remover" :confirm="true" @btnAction="remove(photo)"/>
              </div>
            </div>
          </Panel>
        </li>
      </ul>
    </div>
    <!-- .container -->
  </div>
</template>

<script>
import Panel from "../components/Panel";
import ResponsiveImage from "../components/ResponsiveImage";
import Button from "../components/Button";
import PhotoService from '../models/photo/PhotoService'

export default {
  components: { Panel, ResponsiveImage, Button },
  data() {
    return {
      pageTitle: 'Photobook',
      photos: [],
      filter: '',
      message: ''
    };
  },
  async created() {
    try {
      this.photos = await PhotoService(this.$http).findAll()
    } catch (err) {
      this.message = err.message
    }
  },
  computed: {
    photoWithFilter: function() {
      if (!this.filter) {
        return this.photos;
      } else {
        const exp = new RegExp(this.filter.trim(), "i");
        return this.photos.filter(photo => exp.test(photo.title));
      }
    }
  },
  methods: {
    remove: async function(photo) {
      try {
        await PhotoService(this.$http).remove(photo)
        this.photos = this.photos.filter(item => item != photo)
        this.message = 'Foto removida com sucesso!'
      } catch (err) {
        this.message = err.message
      }
    }
  }
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  width: 80%;
}
li {
  display: inline-block;
  list-style: none;
}
.filter {
  width: 100%;
}
.filter input {
  box-sizing: border-box;
  display: inline-block;
  width: 50%;
  border: 1px solid #bbb;
  padding: 12px;
  outline: 0;
  font-size: 0.95em;
}
.btn-action {
  display: inline-block;
}
.btn-edit {
  float: left;
  width: 60px;
}
.btn-remove {
  float: right;
  width: 90px;
}
</style>