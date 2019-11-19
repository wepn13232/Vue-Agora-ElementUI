<template>
    <div class="createEssay">
        <div class="containerSelf">
            <div class="editorForm">
                <el-form label-position="top" :model="formData">
                    <el-form-item label="文章封面图">
                        <el-input v-model="formData.picUrl" placeholder="http://"></el-input>
                    </el-form-item>
                    <el-form-item label="文章标题">
                        <el-input v-model="formData.title"></el-input>
                    </el-form-item>
                    <el-form-item label="文章内容">
                        <div id="websiteEditorElem" style="height: 550px"></div>
                    </el-form-item>
                    <div class="btn-group">
                        <el-button type="primary">发表</el-button>
                        <el-button type="danger" @click="$router.go(-1)">取消</el-button>
                    </div>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script src="./createEssay.js"></script>

<style scoped lang="scss">
    @import "createEssay";
</style>
