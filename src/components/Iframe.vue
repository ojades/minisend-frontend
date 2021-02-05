<template>
  <div class="modal" tabindex="-1" :style="frameData.show ? 'display: block' : ''">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <iframe :src="frameData.url" width="100%"></iframe>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="closeModal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Iframe',
  props: ['frameData'],
  methods: {
    closeModal() {
      this.frameData.show = false
    }
  }
}

</script>

<style scoped>
.modal {
  display: none;
}
iframe {
  border-width: 0;
}
</style>