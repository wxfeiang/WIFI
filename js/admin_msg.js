// 应用偏好
var hobdy_dec = echarts.init(document.getElementById('hobdy_dec'));
option = {

    // 图表的位置
    grid: {
        position: 'center',
    },
    tooltip: {
        //雷达图的tooltip不会超出div，也可以设置position属性，position定位的tooltip 不会随着鼠标移动而位置变化，不友好
        confine: true,
        enterable: true, //鼠标是否可以移动到tooltip区域内
    },

    radar: {
        splitNumber: 5, // 雷达图圈数设置
        name: {

            color: '#fff',
            backgroundColor: '#999',
            borderRadius: 3,
            padding: [3, 5]

        },
        // 设置雷达图中间射线的颜色
        axisLine: {
            lineStyle: {
                color: '#fff',
            },
        },
        splitArea: {
            areaStyle: {
                // color: ['#0F346C', "#1E85F3", "#1D84F3", '#7342F3', '#7342F3'],
                color: [
                    '#103B75',
                    new echarts.graphic.LinearGradient(0,
                        0, 0, 1, [{
                            offset: 0,
                            color: '#8011FF'
                        }, {
                            offset: 1,
                            color: '#0078FF'
                        }]),
                    new echarts.graphic.LinearGradient(0,
                        0, 0, 1, [{
                            offset: 0,
                            color: '#8011FF'
                        }, {
                            offset: 1,
                            color: '#0078FF'
                        }]),
                    new echarts.graphic.LinearGradient(0,
                        0, 0, 1, [{
                            offset: 0,
                            color: '#8011FF'
                        }, {
                            offset: 1,
                            color: '#0078FF'
                        }]),
                    new echarts.graphic.LinearGradient(0,
                        0, 0, 1, [{
                            offset: 0,
                            color: '#8011FF'
                        }, {
                            offset: 1,
                            color: '#0078FF'
                        }]),

                ]

            },
            opacity: 0.5

        },
        indicator: [{
                name: '学术',
                max: 80,
                color: "#fff",

            },
            {
                name: '游戏',
                max: 100,
                color: "#fff"
            },
            {
                name: '社交',
                max: 100,
                color: "#fff"
            },
            {
                name: '新闻',
                max: 80,
                color: "#fff"
            },
            {
                name: '金融',
                max: 90,
                color: "#fff"
            },
            {
                name: '购物',
                max: 100,
                color: "#fff"
            }
        ]
    },
    series: [{
        name: 'aaaa',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [{
            value: [80, 50, 80, 80, 80, 80],
            name: '应用偏好'
        }],
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(0,
                    0, 0, 1, [{
                        offset: 0,
                        color: '#fff'
                    }, {
                        offset: 1,
                        color: '#fff'
                    }])
            }
        },

    }]
};
hobdy_dec.setOption(option);
// 热点区域
var myChart9 = echarts.init(document.getElementById('area_map'));
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        itemWidth: 10,
        itemHeight: 10,
        data: [{
                name: '2016年',
                icon: 'circle',
            },
            {
                name: '2017年',
                icon: 'circle',
            },

        ]
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },


    xAxis: {
        type: 'category',
        boundaryGap: [0, 0.01],
        color: "#fff",
        data: ['图书馆', '体育场', '食堂', '宿舍', '教学楼', '实验楼']
    },
    yAxis: {
        type: 'value',

        name: '金额(元)',
        nameLocation: 'center',
        nameGap: 70, //与轴线间距
        nameTextStyle: {
            fontWeight: "normal",

            fontSize: 14,
        },
        left: "center"
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        x: '25%',
                        width: '50%',
                        funnelAlign: 'center',
                        max: 1548
                    }
                }
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    series: [{
            name: '本月',
            type: 'bar',
            data: [1203, 23489, 2034, 1970, 131744, 4515],
            itemStyle: {
                normal: {
                    color: "#6a9bfd",

                    lineStyle: {
                        color: new echarts.graphic.LinearGradient(0,
                            0, 0, 1, [{
                                offset: 0,
                                color: '#fff'
                            }, {
                                offset: 1,
                                color: '#fff'
                            }])
                    }
                }

            }
        },
        {
            name: '上个月',
            type: 'bar',
            data: [19325, 2438, 31000, 121594, 134141, 42566],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0,
                            0, 0, 1, [{
                                offset: 0,
                                color: '#1980ff'
                            }, {
                                offset: 1,
                                color: '#fff'
                            }])

                        ,

                    lineStyle: {
                        color: new echarts.graphic.LinearGradient(0,
                            0, 0, 1, [{
                                offset: 0,
                                color: '#1980ff'
                            }, {
                                offset: 1,
                                color: '#fff'
                            }])
                    }
                }

            }
        },

    ],
    barMaxWidth: 40, //最大宽度

};
myChart9.setOption(option);