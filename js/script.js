
var ctx = document.getElementById("graph").getContext('2d');

var chart = new Chart (ctx, {
    type: 'line',
    
    data: {
        labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
        datasets: [{
            offset: true,
            label: 'ppm',
            fill: false,
            backgroundcolor: 'rgb(255, 255, 255)',
            borderColor: 'rgb(90, 90, 90)',
            data: [800, 910, 850, 1140, 1200, 1280, 920, 1010, 870, 920, 1010, 1130],
            lineTension: 0
        }]
    },

    options: {
        responsive: false,
        scales: {
            yAxes: [{
                gridLines: {

                    color: 'rgba(255, 255, 255, 0.5)'
                },

                ticks: {
                    suggestedMin: 500,
                    suggestedMax: 1500,
                    fontColor: '#FFF'
                },
                color: 'rgba(255, 255, 255, 1.0)'
            }],

            xAxes: [{
                
                ticks: {
                    fontColor: '#FFF'
                },

                gridLines: {
                    color: 'rgba(255, 255, 255, 0.5)'
                },

            }]
        },
        animation: {
            update: 0
        },

        legend: {
            labels: {
                fontColor: '#FFF'
            }
        },
        elements: {
            point: {
                pointStyle: "circle"
            }
        }
    }
});

window.onresize(function(event) { 
    chart.update();
})


function generateChart(myData, myLabels) {

    chart = new Chart (ctx, {
        type: 'line',

        responsive: true,
        
        data: {
            labels: myLabels,
            datasets: [{
                offset: true,
                label: 'ppm',
                fill: false,
                backgroundcolor: 'rgb(255, 255, 255)',
                borderColor: 'rgb(150, 25, 25)',
                data: myData,
                lineTension: 0
            }]
        },

        options: {
            scales: {
                yAxes: [{

                    gridLines: {
                        color: 'rgba(255, 255, 255, 0.5)'
                    },

                    ticks: {
                        suggestedMin: 500,
                        suggestedMax: 1500
                    }
                }],

                xAxes: [{
                    gridLines: {
                        color: 'rgba(255, 255, 255, 0.5)'
                    }
                }]
            },
            animation: {
                update: 0
            }
        }
    });
}