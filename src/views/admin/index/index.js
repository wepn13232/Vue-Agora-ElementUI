export default {
    name: "index",
    data() {
        return {
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
            anotherNum: []
        }
    },
    methods: {
        charts1() {
            //初始化实例
            let chart1 = this.$echarts.init(document.getElementById('chart1'));
            let chart2 = this.$echarts.init(document.getElementById('chart2'));
            let chart3 = this.$echarts.init(document.getElementById('chart3'));
            // 指定图表的配置项和数据
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
                    data: ['旅游类', '攻略类', '地点推荐类', '品牌分享类']
                },
                series: [
                    {
                        name: '文章占比',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: [
                            {value: 335, name: '旅游类'},
                            {value: 310, name: '攻略类'},
                            {value: 234, name: '地点推荐类'},
                            {value: 135, name: '品牌分享类'},
                        ],
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

            //圈圈图
            var option2 = {
                backgroundColor: '#2c343c',

                title: {
                    text: 'Customized Pie',
                    left: 'center',
                    top: 20,
                    textStyle: {
                        color: '#ccc'
                    }
                },

                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },

                visualMap: {
                    show: false,
                    min: 80,
                    max: 600,
                    inRange: {
                        colorLightness: [0, 1]
                    }
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '50%'],
                        data: [
                            {value: 335, name: '直接访问'},
                            {value: 310, name: '邮件营销'},
                            {value: 274, name: '联盟广告'},
                            {value: 235, name: '视频广告'},
                            {value: 400, name: '搜索引擎'}
                        ].sort(function (a, b) {
                            return a.value - b.value;
                        }),
                        roseType: 'radius',
                        label: {
                            normal: {
                                textStyle: {
                                    color: 'rgba(255, 255, 255, 0.3)'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                lineStyle: {
                                    color: 'rgba(255, 255, 255, 0.3)'
                                },
                                smooth: 0.2,
                                length: 10,
                                length2: 20
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#c23531',
                                shadowBlur: 200,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },

                        animationType: 'scale',
                        animationEasing: 'elasticOut',
                        animationDelay: function (idx) {
                            return Math.random() * 200;
                        }
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
    },
    mounted() {
        this.changeData();
        this.changeType();
        this.charts1();
    }
}
