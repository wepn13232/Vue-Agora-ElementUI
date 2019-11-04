<template>
    <div class="index">
        <div class="chartsForm">
            <el-row type="flex" justify="space-around" class="p0m0">
                <!--图表一-->
                <el-col >
                    <div class="block" id="chart1"></div>
                </el-col>
                <el-col>
                    <div class="block" id="chart2"></div>
                </el-col>
            </el-row>
            <!--地区人数统计-->
            <el-row>
                <el-col>
                    <div class="addressSum" id="chart3"></div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script src="./index.js"></script>

<style scoped lang="scss">
    @import "index";
</style>
