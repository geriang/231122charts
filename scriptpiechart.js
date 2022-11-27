const options ={
    chart:{
        type:'pie',
        height:'100%'
    },
        series:[21,23,22,27,45],
        labels:["English", "Maths", "Mother Tongue", "Science", "PE"]
        // colors:[]

}

const chartElement = document.querySelector("#chart");
const chart = new ApexCharts(chartElement, options);

chart.render();
