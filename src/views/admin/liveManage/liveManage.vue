<template>
    <div class="liveManage">
        <div class="searchLive">
            <el-input placeholder="请输入内容" v-model="input">
                <el-button slot="append">搜索</el-button>
            </el-input>
        </div>
        <div class="liveForm">
            <el-table
                v-loading="loadLiveForm"
                element-loading-text="列表加载中..."
                element-loading-fullscreen="false"
                :data="tableData"
                stripe
                height="550"
                style="width: 100%">
                <el-table-column
                    prop="id"
                    label="Id"
                    width="80">
                </el-table-column>
                <el-table-column
                    prop="username"
                    label="用户"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="Appid"
                    label="Appid"
                    width="350">
                </el-table-column>
                <el-table-column
                    prop="operate"
                    label="操作">
                    <template slot-scope="scope">
                        <el-button type="danger" plain @click="deleteRow(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script src="./liveManage.js"></script>

<style scoped lang="scss">
    @import "liveManage";
</style>
