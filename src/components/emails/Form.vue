<template>
  <div class="container">
    <div class="title">Send New Email</div>
    <div class="row">
      <div class="col-md-6">
        <label>Sender Name</label>
        <input type="text" v-model="sender_name">
      </div>
      <div class="col-md-6">
        <label>Sender Email</label>
        <input type="text" v-model="sender_email">
      </div>
    </div>
    <div class="row">
      <div class="col">
        <label>Template Name:</label>
        <input type="text" v-model="name" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <label>Content:</label>
        <MonacoEditor
            width="100%"
            height="500"
            theme="vs-dark"
            language="javascript"
            :options="options"
            v-model="content"
        ></MonacoEditor>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <label>Status:</label>
        <select v-model="status">
          <option disabled value="">Please select one</option>
          <option value="1">Enabled</option>
          <option value="0">Disabled</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <label>Attachment:</label>
        <input type="file" name="contents" ref="files">
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <button class="btn btn-primary" @click="submit">Send</button>
      </div>
      <div class="col-6">
        <button class="btn btn-info" @click="preview">Preview</button>
      </div>
    </div>
    <Iframe
        :frame-data="frameProps"
    ></Iframe>
  </div>
</template>

<script>
import MonacoEditor from 'monaco-editor-vue'
// import {VueEditor} from 'vue2-editor'
import http from '../../helpers/HttpClient'
import Iframe from "@/components/Iframe"

export default {
  name: "Form",
  components: {
    MonacoEditor,
    Iframe
    // VueEditor
  },
  data() {
    return {
      editor: null,
      options: {},
      content: '',
      name: '',
      sender_name: '',
      sender_email: '',
      status: '',
      frameProps: {
        show: false,
        url: 'http://localhost:8080/test.html'
      }
    }
  },
  methods: {
    submit() {
      let formData = new FormData();

      formData.append('sender_name', this.sender_name);
      formData.append('sender_email', this.sender_email);
      formData.append('name', this.name);
      formData.append('content', this.content);

      http.post("/api/admin/template", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err.response);
      })
    },
    preview() {
      http.get('/api/admin/template/preview').then(response => {
        this.frameProps.url = response.data.url
      }).catch(err => {
        console.log(err.error.message)
      })
      this.frameProps.show = true
    },
    onLoad() {
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
label {
  display: block;
}
</style>