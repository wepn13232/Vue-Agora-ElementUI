<template>
    <div class="essayManage">
        <div class="searchEssay">
            <el-input placeholder="请输入内容" v-model="input">
                <el-button slot="append">搜索</el-button>
            </el-input>
        </div>
        <div class="essayForm">
            <el-table
                v-loading="loadEssayForm"
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
                    prop="title"
                    label="文章名"
                    width="550">
                </el-table-column>
                <el-table-column
                    prop="user"
                    label="发表用户"
                    width="180">
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

<script src="./essayManage.js"></script>

<style scoped lang="scss">
    @import "essayManage";
</style>
