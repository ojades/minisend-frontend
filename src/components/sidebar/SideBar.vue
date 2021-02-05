<template>
  <div class="content">
    <div class="logo">Mini<span class="logoII">Send</span></div>
    <div>
      <Nav></Nav>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/sidebar/Nav";
export default {
  name: "SideBar",
  components: {
    Nav
  }
}
</script>

<style scoped>
.content {
  color: #ffffff;
}
.logo {
  font-weight: bold;
  font-family: Impact;
  font-size: 20px;
  text-align: center;
}
.logo .logoII {
  color: goldenrod;
  font-size: 3rem;
}
</style>