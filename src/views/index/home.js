import essayCard from "@/components/essayCard/essayCard.vue";
import personCard from "@/components/personCard/personCard.vue";
import * as allUrls from '../../utils/allUrls.js'


export default {
    name: 'home',
    inject: ['reload'],
    components: {essayCard, personCard},
    data() {
        return {
            indexPic: {},
            personInfo: {},
            essayInfo: {},
            loading1: false
        }
    },
    methods: {
        //获取首页推荐（图片）
        getIndexPic() {
            this.loading1 = true
            allUrls.getIndexPicRec('post').then(res => {
                return res.json()
            }).then(data => {
                if (+data.status === 200) {
                    //    请求成功回调
                    this.indexPic = data.data;
                    this.loading1 = false;
                } else {
                    //    请求失败回调
                    this.$message.error("获取推荐图片失败");
                }
            }).catch(err => {
                console.log(err)
            })
        },
        //获取首页文章推荐
        getIndexEssay() {
            allUrls.getIndexEssay('post').then(res => {
                return res.json();
            }).then(data => {
                if (+data.status === 200) {
                    this.essayInfo = data.data
                } else {
                    this.$message.error("获取文章数据失败")
                }
            }).catch(err => {
                console.log(err)
            })
        },
        //获取人物卡片信息
        getTopListPerson() {
            allUrls.getToplistPerson("post").then(res => {
                return res.json()
            }).then(data => {
                this.personInfo = data.personInfo
            }).catch(err => {
                console.log(err)
            })
        },
        // 跳转至注册页
        toReg() {
            this.$router.push('/register')
        },
        // 跳转至文章内容页
        toEssay(item) {
            this.$router.push({path: '/essayInfo', query: {item: JSON.stringify(item)}})
        },
        //跳转至“更多文章”
        toMoreEssay() {
            this.$router.push('/essayList')
        },
        //    悟空
        consoleGoku() {
            console.log(
                '/*\n' +
                '                                   MMMMM\n' +
                '                                     MMMMMM\n' +
                '                                       MMMMMMM\n' +
                '                                        MMMMMMMM     .\n' +
                '                                         MMMMMMMMM\n' +
                '                                         HMMMMMMMMMM\n' +
                '                                          MMMMMMMMMMMM  M\n' +
                '                                          MMMMMMMMMMMMM  M\n' +
                '                                           MMMMMMMMMMMMM  M\n' +
                '                                           MMMMMMMMMMMMM:\n' +
                '                                           oMMMMMMMMMMMMMM\n' +
                '                 .MMMMMMMMMMMMMMo           MMMMMMMMMMMMMMM M\n' +
                '           MMMMMMMMMMMMMMMMMMMMMMMMMMM      MMMMMMMMMMMMMMMM\n' +
                '             MMMMMMMMMMMMMMMMMMMMMMMMMMMM.  oMMMMMMMMMMMMMMM.M\n' +
                '               MMMMMMMMMMMMMMMMMMMMMMMMMMMM  MMMMMMMMMMMMMMMM\n' +
                '                 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n' +
                '                   oMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n' +
                '                     MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n' +
                '                       MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM:                     H\n' +
                '                        MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM                  .         MMM\n' +
                '                         MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM              M       MMMMMM\n' +
                '                          .MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM          M   MMMMMMMMMM\n' +
                '                   MM.      MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM       M MMMMMMMMMMMM\n' +
                '                       MM    MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM    .MMMMMMMMMMMMMM\n' +
                '                         MM  MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n' +
                '                           MM MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n' +
                '                  .MMMMMMMMM MMMMMMMMMMMMMMMMMMMMMMMM.MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n' +
                '                     HMMMMMMMMMMMMMMMMMMMMM.MMMMMMMMM.MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n' +
                '                        MMMMMMMMMMMMMMM MMM.oMMMMMMM..MMMMMMMMM:MMMMMMMMMMMMMMMMMMMMMMM\n' +
                '                          MMMMMMMMMMMMMM MM..MMMMMMM...MMMMMMM. MMMMMMMMMMMMMMMMMMMMM\n' +
                '                            MMMMMMMMMMMMMMM ..MMMMMM...MMMMMM ..MMMMMMMMMMMMMMMMMMM\n' +
                '                             MMMMMMM:M.MMM.M.. MMMMM M..MMMMM...MMMMMMMMMMMMMMMMMM  MMM\n' +
                '                               MMMM. .M..MM.M...MMMMMM..MMMMM.. MMMMMMMMMMMMMMMMMMMMMMMMMMMMMM .\n' +
                '                                MMMM..M....M.....:MMM .MMMMMM..MMMMMMM...MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n' +
                '                                 MMM.M.. ...M......MM.MMMMM.......MHM.M  .MMMMMMMMMMMMMMMMMMMMMMMMM\n' +
                '                            MMMMMMMM..MM. . MMM.....MMMMMM.M.....M ..MM..M MMMMMMMMMMMMMMMMMMM\n' +
                '                               .MMMMMHMM. ..MMMM. MMM............o..... . .MMMMMMMMMMMMMMM\n' +
                '                                  MMM. M... .........................M..:.MMMMMMMMMMMM\n' +
                '                                    oMMM............ .................M.M.MMMMMMMMM\n' +
                '                                       .....MM........................ . MMMMMM\n' +
                '                                      M.....M.....................o.MM.MMMMMMMM.\n' +
                '                                       M........................M.. ...MMMMMMMMMMMMMo\n' +
                '                                         :....MMM..............MMM..oMMMMMMM\n' +
                '                                          M...MMM.............MMMMMMM\n' +
                '                                             .............:MMMMMMMM\n' +
                '                                             M..... MMM.....M\n' +
                '                                             M M.............\n' +
                '                                             ................M\n' +
                '                                          ooM.................MM  MoMMMMMoooM\n' +
                '                                     MMoooM......................MoooooooH..oMM\n' +
                '                                 MHooooMoM.....................MMooooooM........M\n' +
                '                               oooooooMoooM......... o........MoooooooM............\n' +
                '                               Mooooooooooo.......M.........Moooooooo:..............M\n' +
                '                              MooMoooooooooM...M........:Mooooooooooo:..............M\n' +
                '                             M..oooooooooooo .........Mooooooooooooooo..............M\n' +
                '                            M...Mooo:oooooooo.M....ooooooooooooooooooo..M...........M\n' +
                '                             ...oooooMoooooooM..Mooooooooooooo:oooooooM.M...........M.\n' +
                '                            M...ooooooMoo:ooooMoooooooooooooHoooooooooH:M. ...........:\n' +
                '                            M..MoooooooMoooooooooooooooooo:ooooooMooooMoM..............M\n' +
                '                            M..ooooooooooMooooooooooooooHoooooooMooHooooM...............M\n' +
                '                            ...ooooooooooooooooooo:MooooooooooooooMoMoooM................\n' +
                '                           M...oooooooooooooooooooooooooooooooooooooMooMM................M\n' +
                '                           ...MooooooooooooooooooooooooooooooooooooooooMo ................\n' +
                '                           ...MooooooooooooooooooooooooooooooooooooooooM M................M\n' +
                '                          M...ooooooooooooooooooooooooooooooooooooooooM   ................M\n' +
                '                          ...MoooooooooooooooooooooooooooooooooooooooMM   .:...............\n' +
                '                          .....MooooooooooooooooooooooooooooooooooooMoo       .............M\n' +
                '                          M...... ooooooooooooooooooooooooooooooooooooM       M..............M\n' +
                '                          M........MooooMMM MM MM  MMMMMMMMMooooooooM         M...............M\n' +
                '                          .........HM     M:  MM :MMMMMM          M           M...............\n' +
                '                         M..........M     M   MoM M                           M................M\n' +
                '                         M.........:M  MoH  M M M MooooHoooMM.   M             M...............M\n' +
                '                         M..........Moooo MMooM    oooooMooooooooM              M..............H\n' +
                '                         M.........MooooM  Mooo  : ooooooMooooMoooM              M........ . .o.M\n' +
                '                         H..  .....ooooo   oooo  M MooooooooooooooM               M... MMMMMMMMMMM\n' +
                '                         MMMMMMMMMMooooM M oooo  .  ooooooMooooooooM              .MMMMMMMMMMMMMMM\n' +
                '                         MMMMMMMMMMooooH : ooooH    oooooooooooooooo               MMMMMMMMMMMMMMM\n' +
                '                         MMMMMMMMMMoooo    ooooM    Moooooooooooooooo              .MMMMMMMMMMMMMMM\n' +
                '                         MMMMMMMMMMoooo    ooooM    MooooooooooooooooM              MMMMMMMMMMMMMMM\n' +
                '                         MMMMMMMMMMoooM    ooooM     ooooooooooooooooo               MMMMMMMMMMM:M\n' +
                '                         MMMMMMMMMMoooM   MooooM     oooooooooooMoooooo               MH...........\n' +
                '                          . ......Mooo.   MooooM     oooooooooooooooooo              M............M\n' +
                '                         M.M......oooo    MooooM     Moooooooooooooooooo:           .........M.....\n' +
                '                         M.M.....Moooo    MooooM      ooooooooooooooooooM            .M............\n' +
                '                         .......MooooH    MooooM      oooooooooMoooooooooo          M..o...M..o....M\n' +
                '                         .o....HMooooM    MooooH      MooooooooMooooooooooM          .:M...M.......M\n' +
                '                        M..M.....MoooM    :oooo:    .MooooooooHooMoooooooooM         M M... ..oM.M\n' +
                '                         M...M.:.Mooo. MMMMooooo   oooooooooooMoooooooooooooM          ....M. M\n' +
                '                          M:M..o.Moooooooooooooo MooooooooooooooMooooooooooooM          .Mo\n' +
                '                                 MooooooooooooooMooooooooooooMoMoooooooooooooo\n' +
                '                                 Mooooooooooooooo:ooooooooooooooooooooooooooooo\n' +
                '                                 ooooooooooooooooMooooooooooMoooooooooooooooooo\n' +
                '                                 ooooooooooooooooMoooooooooooMooooooooooooooooHo\n' +
                '                                 ooMooooooooooooooMoooooooooooooooooooooooooooMoM\n' +
                '                                MooMoooooooooooooo.ooooooooooooooooooooooooooo:oM\n' +
                '                                MoooooooooooooooooooooooooooooooooooooooooooooooM\n' +
                '                                MoooMooooooooooooooMooooooooooooooooooooooooooooo.\n' +
                '                                MoooMooooooooooooooMoooooooooooooooooooooooooMooooM\n' +
                '                                MooooooooooooooooooMoooooooooooooooooooooooooMoooooM\n' +
                '                                MooooMoooooooooooooMoooooooooooooooooooooooooMoHooooM\n' +
                '                                ooooooMooooooooooooooooooooooooooooooooooooooooMoMoooM\n' +
                '                               MooooooooooooooooooooMooooooooooooooooooooooooooMoooooH:\n' +
                '                               MoooooooMooooooooooooMoooooooooooooooooooooooooooooHoooM\n' +
                '                               MooooooooMoooooooooooMoooooooooooooooooooooooooMoooMooooM\n' +
                '                               Moooooooooooooooooooooooooooooooooooooooooooooo.oooMooooo\n' +
                '                               MoooooooooooooooooooooooooooooooooooooooooooooMoooooooooM\n' +
                '                                MooooooooooooooooooooMoooooooooooooooooooooooooooooooooM\n' +
                '                                 MooooooooooooooooooooMHooooooooooooooooooooMoooo:ooooo\n' +
                '                                  MMooooooooooooooooooMoMHoooooooooooooooooooooooMooooo\n' +
                '                                   MMoooooooooooooooMMooo MMooooooooooooooooooooooooooM\n' +
                '                                   MMMoooooooooooooMooooo  oooooooooooooooooooooMooooo\n' +
                '                                   MooMMoooooooooMoooMMoM  ooooHooooooooooooooooMooooM\n' +
                '                                   MooooMooooooMooooMoooM  MoooooMoooooooooooooMooooo\n' +
                '                                   ooooooMMooooooooMooooM  MoooooooooMooooooooooooooM\n' +
                '                                   HooooooMoooooooMooooM    HoooooooHooMooooooooooooo\n' +
                '                                    oooMoooooooooHoooM         MoooooooooMoooooooooM\n' +
                '                                     HooooooooooooHM             MooooooooMMoooooooM\n' +
                '                                      MMMMMMMMMMMMMM                Moooooo:MooooHMM\n' +
                '                                       MMMMMMM: ...                  MMMMMMMMMMMMMM\n' +
                '                                      M............M                  MMMMMMMMM ....\n' +
                '                                      M.MM..........                  M.............M\n' +
                '                                   M ..............MM                 M..............\n' +
                '                                MMMMM............MMMM                 ..MMMMMMMM ....M\n' +
                '                              MMMMMMMMMMMMMMMMMMMMMMMM               MMMMMMMMMMMMM...M\n' +
                '                           .MMMMMMMMMMMMMMMMMMMMMMMMMM               MMMMMMMMMMMMMMMMMM\n' +
                '                           MMMMMMMMMMMMMMMMMMMMMMMMM                MMMMMMMMMMMMMMMMMMM\n' +
                '                           :MMMMMMMMMMMMMMMMMMH                     MMMMMMMMMMMMMMMMMMM\n' +
                '                              By EBEN Jérôme                        MMMMMMMMMMMMMMMMMM\n' +
                '                                                                    MMMMMMMMMMMMMMM\n' +
                '                                                                     HMMMMMM\n' +
                '\n' +
                '           */'
            )
        }
    },
    mounted() {
        this.reload();
        this.getIndexPic();
        this.getIndexEssay();
        this.getTopListPerson();
        this.consoleGoku();
    }
}
