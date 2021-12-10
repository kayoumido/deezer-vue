<template>
  <div class="root"  @click="$router.push('/playlists/' + id)" >
    <div class="picture">
      <img :src="pictureUrl" alt="image">
    </div>
    <div class="text">
      <h3>{{name}}</h3>
      <p>{{description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Playlist.vue",
  props: {
    id: Number,
    name: String,
    description: String,
    pictureUrl: String,
  }
}
</script>

<style scoped>

.root{
  display: flex;
  margin: 10px 0;
  height: 125px;
  justify-content: center;
  align-content: center;
  border-radius: 5px;
}

.root:hover{
  cursor:pointer;
  background: rgba(211, 211, 211, 0.212);
}

.picture{
  flex: 1;
}

img{
  border-radius: 5px;
  height: 125px;
  width: 125px;
}

.text{
  flex: 2;
  text-align: left;
  padding-left: 20px;
}

</style>