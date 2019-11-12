export default {
    name: "liveManage",
    data() {
        return {
            input: '',
            loadLiveForm: true,
            tableData: [
                {
                    id: '1',
                    username: 'admin',
                    Appid: 'ec7820719525489e80fa257f7b4c1062',
                },
                {
                    id: '2',
                    username: 'admin',
                    Appid: 'ec7820719525489e80fa257f7b4c1062',
                },
                {
                    id: '3',
                    username: 'admin',
                    Appid: 'ec7820719525489e80fa257f7b4c1062',
                },
                {
                    id: '4',
                    username: 'admin',
                    Appid: 'ec7820719525489e80fa257f7b4c1062',
                },
                {
                    id: '5',
                    username: 'admin',
                    Appid: 'ec7820719525489e80fa257f7b4c1062',
                },
                {
                    id: '6',
                    username: 'admin',
                    Appid: 'ec7820719525489e80fa257f7b4c1062',
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
            this.loadLiveForm = false;
        },2000)
    },
}
