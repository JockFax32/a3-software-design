$(function (){
    d3.csv("data/data.csv", function(err, data){
        var age = []
            population = []
        data.forEach(function(d) {
            age.push(d.age)
            population.push(d.population)
        });
        
        var myChart = donutChart()
        var chartWrapper = d3.select('#my-div')
                .datum([data]) 
                .call(myChart); 
    })
})