<template>
  <div class="home">
    <RobotBuilder />
  </div>
</template>

<script>
// @ is an alias to /src
// import HomePage from '@/home/HomePage.vue';
import RobotBuilder from '@/build/RobotBuilder.vue';

export default {
  name: 'Home',
  components: {
    RobotBuilder,
  },
};
</script>
