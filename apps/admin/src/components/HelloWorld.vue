<template>
  <div class="hello">
    <small>Fetching from API: @nestjs/api</small>
    <h1>{{ users.message }}</h1>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup() {
    const users = ref({ message: 'incoming...' });
    onMounted(async () => {
      const res = await fetch('/api').then((r) => r.json());
      users.value = { ...users.value, message: res.message };
      console.log(res);
    });

    return {
      users,
    };
  },
})
</script>