$(function () {
    //start container-left-top
    Highcharts.chart('container-left-top', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Browser market shares in January, 2018'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Chrome',
                y: 61.41,
                sliced: true,
                selected: true
            }, {
                name: 'Internet Explorer',
                y: 11.84
            }, {
                name: 'Firefox',
                y: 10.85
            }, {
                name: 'Edge',
                y: 4.67
            }, {
                name: 'Safari',
                y: 4.18
            }, {
                name: 'Sogou Explorer',
                y: 1.64
            }, {
                name: 'Opera',
                y: 1.6
            }, {
                name: 'QQ',
                y: 1.2
            }, {
                name: 'Other',
                y: 2.61
            }]
        }]
    });
    //end container-left-top
    //start container-left-bottom
    Highcharts.chart('container-left-bottom', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Efficiency Optimization by Branch'
        },
        xAxis: {
            categories: [
                'Kiev',
                'Odessa',
                'Lviv'
            ]
        },
        yAxis: [{
            min: 0,
            title: {
                text: 'Employees'
            }
        }, {
            title: {
                text: 'Profit'
            },
            opposite: true
        }],
        legend: {
            shadow: false
        },
        tooltip: {
            shared: true
        },
        plotOptions: {
            column: {
                grouping: false,
                shadow: false,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Employees',
            color: 'rgba(165,170,217,1)',
            data: [150, 73, 20],
            pointPadding: 0.3,
            pointPlacement: -0.2
        }, {
            name: 'Employees Optimized',
            color: 'rgba(126,86,134,.9)',
            data: [140, 90, 40],
            pointPadding: 0.4,
            pointPlacement: -0.2
        }, {
            name: 'Profit',
            color: 'rgba(248,161,63,1)',
            data: [201.5, 178.8, 198.5],
            tooltip: {
                valuePrefix: '₴',
                valueSuffix: ' K'
            },
            pointPadding: 0.3,
            pointPlacement: 0.2,
            yAxis: 1
        }, {
            name: 'Profit Optimized',
            color: 'rgba(186,60,61,.9)',
            data: [300.6, 198.8, 208.5],
            tooltip: {
                valuePrefix: '₴',
                valueSuffix: ' K'
            },
            pointPadding: 0.4,
            pointPlacement: 0.2,
            yAxis: 1
        }]
    });
    //end container-left-bottom
    //start container-right-top
    Highcharts.chart('container-right-top', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Week food consumption'
        },
        xAxis: {
            categories: ['Salo', 'Pelmeni', 'Cabbage roll', 'Cutlet']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total Food consumption'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b> eats <b>' + this.y + '</b> of the <b>' + this.x + '</b>';
            }
        },
        series: [{
            name: 'Taras',
            data: [1, 1, 2, 2]
        }, {
            name: 'Petro',
            data: [2, 3, 2, 1]
        }, {
            name: 'Bogdan',
            data: [3, 4, 2, 1]
        }]
    });
    //end container-right-top
    //start container-right-bottom
    $.getJSON(
        'https://cdn.rawgit.com/highcharts/highcharts/057b672172ccc6c08fe7dbb27fc17ebca3f5b770/samples/data/usdeur.json',
        function (data) {
            Highcharts.chart('container-right-bottom', {
                chart: {
                    zoomType: 'x'
                },
                title: {
                    text: 'USD to EUR exchange rate over time'
                },
                subtitle: {
                    text: document.ontouchstart === undefined ?
                        'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
                },
                xAxis: {
                    type: 'datetime'
                },
                yAxis: {
                    title: {
                        text: 'Exchange rate'
                    }
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, Highcharts.getOptions().colors[0]],
                                [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                            ]
                        },
                        marker: {
                            radius: 2
                        },
                        lineWidth: 1,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        threshold: null
                    }
                },

                series: [{
                    type: 'area',
                    name: 'USD to EUR',
                    data: data
                }]
            });
        }
    );
    //end container-right-bottom
});