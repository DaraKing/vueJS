<template>
<div class="auction-timeline">
    <el-timeline>
        <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :timestamp="activity.timestamp">
            {{activity.content}}
        </el-timeline-item>
    </el-timeline>
</div>
</template>

<script>
export default {
  name: 'Timeline',
  props: ['activities']
}
</script>

<style lang="scss" scoped>
</style>
