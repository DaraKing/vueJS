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
  props: ['data'],
  data () {
    return {
      activities: []
    }
  },
  created () {
    this.makeArray()
  },
  methods: {
    makeArray () {
      this.activities.push({
        'content': 'Start date',
        'timestamp': this.data.StartDate
      },
      {
        'content': 'End date',
        'timestamp': this.data.EndDate
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
