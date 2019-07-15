<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8"><div>
                <span class="auction-label">Product name</span>
                <span class="auction-information">{{ data.ProductName }}</span>
            </div></el-col>
            <el-col :span="8"><div>
                <span class="auction-label">Product sort</span>
                <span class="auction-information">{{ data.ProductSort }}</span>
            </div></el-col>
            <el-col :span="8"><div>
                <span class="auction-label">Current price</span>
                <span class="auction-information">{{ data.CurrentPrice }}</span>
            </div></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="8"><div>
                <span class="auction-label">Start price</span>
                <span class="auction-information">{{ data.StartPrice }}</span>
            </div></el-col>
            <el-col :span="8"><div>
                <span class="auction-label">Number of offers</span>
                <span class="auction-information">{{ data.NumberOfOffers }}</span>
            </div></el-col>
            <el-col :span="8"><div>
                <span class="auction-label">Offers per hour</span>
                <span class="auction-information">{{ data.OffersPerHour }}</span>
            </div></el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'Primary',
  props: ['data']
}
</script>

<style scoped>
</style>
