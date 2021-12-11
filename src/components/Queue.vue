<template>
  <aside id="queue" class="queue">
    <div class="queue-controls">
      <label>Play next · 0 tracks</label>
    </div>
    <div class="queue-songs--empty">
      <label>This queue is empty</label>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Queue"
}
</script>

<style scoped>
.queue {
  overflow: hidden;
  overflow-y: auto;

  width: 330px;
  background-color: var(--grey-100);

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  border-left: 1px solid var(--grey-200);
}

.queue-controls {
  position: absolute;
  top: 32px;
  left: 32px;
}

.queue-songs--empty {
  color: var(--grey-400);
}
</style>