<template>
  <aside id="queue" class="queue">
    <div class="queue-controls">
      <label>Queue · <span class="overline">{{ $store.getters.queueSize }} tracks</span></label>
    </div>
    <div v-if="$store.getters.isQueueEmpty" class="queue-songs queue-songs--empty">
      <label>This queue is empty</label>
    </div>
    <div v-else class="queue-songs">
      <Track
          v-for="track in $store.state.queue"
          :key="track.id"
          :track="track"
          :display-controls="false"
      />
    </div>
  </aside>
</template>

<script>
import Track from "@/components/Track";
export default {
  name: "Queue",
  components: { Track },
}
</script>

<style scoped>
.queue {
  overflow: hidden;
  overflow-y: auto;

  width: 330px;
  background-color: var(--grey-200);
  border-left: 1px solid var(--grey-100);
  padding: 15px;
  display: flex;
  flex-direction: column;
}

.queue-controls {
  margin-bottom: 15px;
}

.queue-songs--empty {
  color: var(--grey-400);
}
</style>