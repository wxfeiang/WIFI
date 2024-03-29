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
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: '#60D9F7'
                            },

                            {
                                offset: 0.5,
                                color: '#58BAF6'
                            },
                            {
                                offset: 0.7,
                                color: '#52A0F5'
                            },
                            {
                                offset: 1,
                                color: '#4D8CF4'
                            }
                        ]
                    )
                },
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
// 热点区域
var ranking1 = echarts.init(document.getElementById('area_map'));

function hrefrank() {

    var hrefData = [];
    for (var i = 0; i < 6; i++) {
        var hrefRand = Math.round(Math.random() * 20 + 1);
        hrefData.push(hrefRand)
    }
    return hrefData;
}

rankRise();
setInterval(rankRise, 5000)

function rankRise() {
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
            align: "right",
            x: 'right',
            textStyle: {
                color: "#fff",
            },
            data: [{
                    name: '本月',
                    icon: 'circle',
                },
                {
                    name: '上个月',
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
            data: ['三楼会议室', '办公区', '洽谈室1', '洽谈室2', '洽谈室3', '洽谈室4'],
            axisLabel: {
                textStyle: {
                    color: "#fff", //坐标值得具体的颜色.
                    fontSize: 10
                }
            }
        },
        yAxis: {
            type: 'value',
            name: '5/h',
            nameLocation: 'center',
            nameGap: 70, //与轴线间距
            nameTextStyle: {
                fontWeight: "normal",
                color: "#fff",
                fontSize: 14,
            },
            left: "center",
            axisLabel: {
                formatter: '{value} /h',
                textStyle: {
                    color: "#fff", //坐标值得具体的颜色.
                    fontSize: 10
                }
            },
            splitLine: {
                //y轴网个样式
                show: false,
                lineStyle: {
                    color: ["rgba(255,255,255,.5)"],
                    width: 1,
                    type: "solid"
                }
            },
        },
        toolbox: {
            show: true,

        },
        series: [{
                name: '本月',
                type: 'bar',
                data: hrefrank(),
                itemStyle: {
                    normal: {
                        barBorderRadius: [7, 7, 0, 0],
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [{
                                    offset: 0,
                                    color: '#8011FF'
                                },

                                {
                                    offset: 1,
                                    color: '#1667FF'
                                }
                            ]
                        )
                    },
                    emphasis: {
                        barBorderRadius: [7, 7, 0, 0],
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [{
                                    offset: 0,
                                    color: '#0083FF'
                                },

                                {
                                    offset: 1,
                                    color: '#00B4FF'
                                }
                            ]
                        )
                    }
                },
            },
            {
                name: '上个月',
                type: 'bar',
                data: hrefrank(),

                itemStyle: {
                    normal: {
                        barBorderRadius: [7, 7, 0, 0],
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [{
                                    offset: 0,
                                    color: '#0083FF'
                                },

                                {
                                    offset: 1,
                                    color: '#00B4FF'
                                }
                            ]
                        )
                    },
                    emphasis: {
                        barBorderRadius: [7, 7, 0, 0],
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [{
                                    offset: 0,
                                    color: '#0083FF'
                                },

                                {
                                    offset: 1,
                                    color: '#00B4FF'
                                }
                            ]
                        )
                    }
                },
            },

        ],
        barMaxWidth: 10, //最大宽度

    };

    ranking1.setOption(option);
}



// area_map2

var area_map2 = echarts.init(document.getElementById('area_map2'));
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
            name: '热门区域'
        }],
        itemStyle: {
            normal: {
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: '#60D9F7'
                            },

                            {
                                offset: 0.5,
                                color: '#58BAF6'
                            },
                            {
                                offset: 0.7,
                                color: '#52A0F5'
                            },
                            {
                                offset: 1,
                                color: '#4D8CF4'
                            }
                        ]
                    )
                },
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(0,
                    0, 0, 1, [{
                        offset: 0,
                        color: '#fff'
                    }, {
                        offset: 1,
                        color: '#fff'
                    }])
            },
        },

    }]
};
area_map2.setOption(option);

$(window).resize(function () {
    hobdy_dec.resize();
    ranking1.resize();
    area_map2.resize();
})


layui.use("element", function () {

    var names = ["吴大佑", "张栋梁", "张国琦", "李建国", "黄思雨", "王毅杜", "刘子涛", "王义木", "赵鑫鑫", "李毅阳", "刘涛涛"]
    var element = layui.element;

    function progres() {
        // 获取到所有得 进度条 
        var progs = $(".dy-pro")
        progs.each(function (index) {
            var rand = Math.round(Math.random() * 90 + 10);
            var name = Math.round(Math.random() * 10 + 1);
            progs.eq(index).attr("lay-filter", "demo" + index);
            progs.eq(index).prev().html(names[name])
            progs.eq(index).next().html(rand + '%')
            element.progress("demo" + index, rand + '%')
        })
    }

    setInterval(progres, 5000);
    //datas
    function datas() {
        // 获取到所有得 进度条 
        var progs = $(".datas li .dy-pro")
        progs.each(function (index) {
            var rand = Math.round(Math.random() * 90 + 10);
            var name = Math.round(Math.random() * 10 + 1);
            progs.eq(index).attr("lay-filter", "demo" + index);
            progs.eq(index).prev().html(names[name])
            progs.eq(index).next().html(name + 'h/天')
            element.progress("demo" + index, rand + '%')
        })
    }
    setInterval(datas, 5000);



});