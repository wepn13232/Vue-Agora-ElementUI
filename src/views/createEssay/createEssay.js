import E from 'wangeditor'

export default {
    name: "createEssay",
    data(){
      return{
          formData:{
              phone:'',
              title:'',
              picUrl:''
          }
      }
    },
    mounted() {
        let phoneEditor = new E('websiteEditorElem');
        // 富文本
        phoneEditor.onchange = function () {
            console.log(this.$txt.html());
        }
        phoneEditor.create()
    },
}
