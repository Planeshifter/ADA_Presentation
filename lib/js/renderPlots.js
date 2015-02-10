$(document).ready(function(){

  $.getJSON( "../../PostsFrequencies25.json", function(data) {
    var container1 =  new Highcharts.Chart({
      chart: {
          renderTo: 'container1',
          type: 'column'
      },
      title: {
          text: 'Post Activity'
      },
      xAxis: {
          categories: data.categories,
          title: {
              text: "# of Posts"
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: 'User Count',
              align: 'high'
          },
          labels: {
              overflow: 'justify'
          }
      },
      tooltip: {
          valueSuffix: ' Users'
      },
      plotOptions: {
          bar: {
              dataLabels: {
                  enabled: true
              }
          }
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          x: -40,
          y: 100,
          width: 120,
          floating: true,
          borderWidth: 1,
          backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
          shadow: true
      },
      credits: {
          enabled: false
      },
      series: [{
          name: 'Davita',
          data: data.countsDavita
      },{
        name: "KidneySpace",
        data: data.countsKidneySpace
      }]
    });
  });

  $.getJSON( "../../MostFrequent.json", function(data) {
    var container2 = new Highcharts.Chart({
        chart: {
            renderTo: 'container2',
            type: 'bar'
        },
        title: {
            text: 'Most frequent synsets'
        },
        subtitle: {
            text: '(odered by number of words assigned to them)'
        },
        xAxis: {
            categories: data.synsetWords,
            title: {
                text: "synset"
            }
        },
        yAxis: {
            type: 'logarithmic',
            min: 80,
            title: {
                text: 'count (log-scale)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ''
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: false
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'word count',
            data: data.wordCounts
        },{
            name: 'doc count',
            data: data.docCounts
        }]
    });
  });
});
