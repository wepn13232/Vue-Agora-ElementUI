import * as allUrls from '../../../utils/allUrls.js'

export default {
    name: "index",
    data() {
        return {
            defaultActive: '1',
            addressData: [
                {
                    address: 'tianhe',
                    num: 113
                },
                {
                    address: 'haizhu',
                    num: 168
                },
                {
                    address: 'panyu',
                    num: 63
                },
                {
                    address: 'kaifaqu',
                    num: 93
                },
                {
                    address: 'xiashan',
                    num: 77
                },
                {
                    address: 'conghua',
                    num: 109
                },
                {
                    address: 'zengcheng',
                    num: 30
                },
                {
                    address: 'yuexiu',
                    num: 188
                },
            ],
            anotherData: [],
            anotherNum: [],
            essayData: [
                {value: 1, name: '旅游类'},
                {value: 1, name: '攻略类'},
                {value: 1, name: '地点推荐类'},
                {value: 1, name: '摄影类'},
            ],
            numOfSex: [
                {value: 1, name: '女'},
                {value: 1, name: '男'},
            ]
        }
    },
    methods: {
        charts1() {
            //初始化实例
            let chart1 = this.$echarts.init(document.getElementById('chart1'));
            let chart2 = this.$echarts.init(document.getElementById('chart2'));
            let chart3 = this.$echarts.init(document.getElementById('chart3'));

            // 文章类型比例
            var option = {
                title: {
                    text: '本站文章分类占比',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['旅游类', '攻略类', '地点推荐类', '摄影类']
                },
                series: [
                    {
                        name: '文章占比',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '50%'],
                        data: this.essayData,
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };

            //男女比例
            var option2 = {
                title: {
                    text: '本站男女比例占比',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 10,
                    data: ['男', '女']
                },
                series: [
                    {
                        name: '男女比例',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: this.numOfSex
                    }
                ]
            };

            //地区统计
            var option3 = {
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: this.anotherData,
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '地区统计',
                        type: 'bar',
                        barWidth: '60%',
                        data: this.anotherNum
                    }
                ]
            };

            //插入实例
            chart1.setOption(option);
            chart2.setOption(option2);
            chart3.setOption(option3);
        },
        //对象转数组
        changeType() {
            for (let i in this.addressData) {
                this.anotherData.push(this.addressData[i].address);
                this.anotherNum.push(this.addressData[i].num)
            }
        },
        //数据格式转换
        changeData() {
            for (let i in this.addressData) {
                let address = this.addressData[i].address;
                switch (address) {
                    case 'tianhe':
                        this.addressData[i].address = '广州 / 天河区';
                        continue;
                    case 'yuexiu':
                        this.addressData[i].address = '广州 / 越秀区';
                        continue;
                    case 'haizhu':
                        this.addressData[i].address = '广州 / 海珠区';
                        continue;
                    case 'panyu':
                        this.addressData[i].address = '广州 / 番禺区';
                        continue;
                    case 'baiyun':
                        this.addressData[i].address = '广州 / 白云区';
                        continue;
                    case 'conghua':
                        this.addressData[i].address = '广州 / 从化区';
                        continue;
                    case 'zengcheng':
                        this.addressData[i].address = '广州 / 增城区';
                        continue;
                    case 'kaifaqu':
                        this.addressData[i].address = '湛江 / 开发区';
                        continue;
                    case 'xiashan':
                        this.addressData[i].address = '湛江 / 霞山区';
                        continue;
                    case 'chikan':
                        this.addressData[i].address = '湛江 / 赤坎区';
                        continue;
                    default:
                        this.addressData[i].address = '暂未录入';
                        break;
                }
            }
        },
        //获取图表数据
        _getEchartData() {
            return new Promise(resolve => {
                allUrls.getNumOfSex({}, 'post').then(res => {
                    return res.json();
                }).then(res => {
                    if (+res.status === 200) {
                        this.numOfSex[1].value = (+res.data.male); //获取男数量
                        this.numOfSex[0].value = (+res.data.female); //获取女数量
                    } else {
                        this.$message.error("获取男女人数失败！");
                    }
                }).then(() => {
                    allUrls.getEssayType({}, 'post').then(res => {
                        return res.json();
                    }).then(res => {
                        if (+res.status === 200) {
                            this.essayData[0].value = res.data.typeTravel;
                            this.essayData[1].value = res.data.typeStrategy;
                            this.essayData[2].value = res.data.typeLocation;
                            this.essayData[3].value = res.data.typePhotoG;
                        } else {
                            this.$message.error("获取文章信息失败！");
                        }
                    }).then(() => {
                        //    TODO执行查询地址统计
                        resolve();
                    })
                }).catch(err => {
                    console.log(err);
                    this.$message.error("获取图表信息出错！");
                    return false;
                })
            }).then(() => {
                this.charts1();
            })
        },
    },
    mounted() {
        this._getEchartData();
        this.$emit('getDefaultActive', this.defaultActive)
        this.changeData();
        this.changeType();
    },
}
