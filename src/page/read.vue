<template>
  <div>
    <h1>{{ hansom }}</h1>
    <h1></h1>
    <!-- <writing :title="dd" :article="섹스보지시발"></writing> -->
  </div>
</template>

<script>
import data from "../data";
import writing from "../components/writing.vue";

export default {
  name: "read",
  data() {
    return {
      hansom: "안녕..",
      index: null,
      title: null,
      text: null
    };
  },

  mounted() {
    this.index = this.$route.params.id;
    this.title = data[this.index].title;
    this.text = data[this.index].text;
    console.log(this.title);
  },

  components: {
    writing
  }
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
