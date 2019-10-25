<template>
  <div class="home">
    <p>count:{{count}}</p>
    <div>
      <button @click="increaseCount">count++</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    increaseCount() {
      this.$store.commit("increaseCount",100);
    }
  }
};
</script>
