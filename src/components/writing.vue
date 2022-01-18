<template>
  <div>
    <div class="container">
      <div class="Box">
        <h2 class="title">{{ title }}</h2>
        <div class="article">{{ article }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "writing",
  props: ["title", "article"]
};
</script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
.Box {
  width: 300px;
  text-align: center;
  border: 1px solid rgb(163, 159, 159);
  border-radius: 15px;
  overflow: hidden;
}

.title {
  background: #009879;
  color: white;
  display: block;
  font-weight: bold;
  border-bottom: 2px solid;
}

.article {
  word-break: break-all;
}
</style>
