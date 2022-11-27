const options ={
    chart:{
        type:'bar',
        height: '100%'
    },
        series:[
        {
        'name':'sightings',
        'data':[10,13,15,22,24,28]
        },
        {
         'name':'temperature',
         'data':[32,31,34,32,26,29]
        }
        ],
        xaxis:{
            categories:['Jan','Feb','Mar','Apr','May', 'Jun']
            }

}

const chartElement = document.querySelector("#chart");
const chart = new ApexCharts(chartElement, options);

chart.render();
