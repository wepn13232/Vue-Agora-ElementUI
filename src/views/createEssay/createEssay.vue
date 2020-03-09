<template>
    <div class="createEssay">
        <div class="containerSelf">
            <div class="editorForm">
                <el-form label-position="top" :model="essayForm" :rules="rules" ref="essayForm">
                    <el-form-item label="文章封面图" prop="pic">
                        <el-input v-model="essayForm.pic" placeholder="http://"></el-input>
                        <div class="loadPic" v-if="essayForm.pic">
                            <img :src="essayForm.pic" alt="loadPic">
                        </div>
                    </el-form-item>
                    <el-form-item label="文章类型" prop="essayType">
                        <el-select v-model="essayForm.essayType" placeholder="请选择">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="文章标题" prop="title">
                        <el-input v-model="essayForm.title"></el-input>
                    </el-form-item>
                    <el-form-item label="附言" prop="OTitle">
                        <el-input v-model="essayForm.OTitle"></el-input>
                    </el-form-item>
                    <el-form-item label="文章内容">
                        <div id="websiteEditorElem" style="height: 550px"></div>
                    </el-form-item>
                    <div class="btn-group">
                        <el-button type="primary" @click="submitForm('essayForm')">发表</el-button>
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

<style lang="scss">
    .createEssay {
        .containerSelf {
            .editorForm {
                .el-select .el-input {
                    width: 200px !important;
                }
            }
        }

    }
</style>
