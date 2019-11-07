export default {
    name: "essayManager",
    data() {
        return {
            input:'',
            loadEssayForm:true,
            tableData: [
                {
                    id:'1',
                    name: '人像怎么修？别拍照了真的',
                    username: 'admin',
                },
                {
                    id:'2',
                    name: '人像怎么修？别拍照了真的',
                    username: 'admin',
                },
                {
                    id:'3',
                    name: '人像怎么修？别拍照了真的',
                    username: 'admin',
                },
                {
                    id:'4',
                    name: '人像怎么修？别拍照了真的',
                    username: 'admin',
                },
            ]
        }
    },
    methods:{
        deleteRow(val){
            console.log(val.id)
        }
    },
    mounted(){
      setTimeout(()=>{
          this.loadEssayForm = false;
      },2000)
    },
}
