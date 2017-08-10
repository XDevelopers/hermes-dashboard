type = ['','info','success','warning','danger'];
    	

demo = {
   initPickColor: function(){
        $('.pick-class-label').click(function(){
            var new_class = $(this).attr('new-class');  
            var old_class = $('#display-buttons').attr('data-class');
            var display_div = $('#display-buttons');
            if(display_div.length) {
            var display_buttons = display_div.find('.btn');
            display_buttons.removeClass(old_class);
            display_buttons.addClass(new_class);
            display_div.attr('data-class', new_class);
            }
        });
    },
    
    initChartist: function(){    
        
        /*var dataSales = {
          labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
          series: [
             [287, 385, 490, 492, 554, 586, 698, 695, 752, 788, 846, 944],
            [67, 152, 143, 240, 287, 335, 435, 437, 539, 542, 544, 647],
            [23, 113, 67, 108, 190, 239, 307, 308, 439, 410, 410, 509]
          ]
        };
        
        var optionsSales = {
          lineSmooth: false,
          low: 0,
          high: 800,
          showArea: true,
          height: "245px",
          axisX: {
            showGrid: false,
          },
          lineSmooth: Chartist.Interpolation.simple({
            divisor: 3
          }),
          showLine: false,
          showPoint: true,
        };
        
        var responsiveSales = [
          ['screen and (max-width: 640px)', {
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              }
            }
          }]
        ];
    
        Chartist.Line('#chartHours', dataSales, optionsSales, responsiveSales);*/

    
        /*var data = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          series: [
            [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
            [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
          ]
        };
        
        var options = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: "245px"
        };
        
        var responsiveOptions = [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              }
            }
          }]
        ];
        
        Chartist.Bar('#chartActivity', data, options, responsiveOptions);

        /*var dataPreferences = {
            labels: ['JAN.', 'FEB.', 'MAR.', 'APR.', 'MAY.', 'JUN.', 'JUL.', 'AUG.', 'SEP.', 'OCT.', 'NOV.', 'DEC.'],

            series: [
                [0, 180, 80, 320, 220, 420, 190, 570, 440, 370, 420, 260]
            ],
           
        };
        
        var optionsPreferences = {
          lineSmooth: Chartist.Interpolation.simple({
            divisor: 100
          }),
          showArea: false,
          showPoint: true,
          showLine: true,
          height: '200px',
          axisX: {
            showGrid: false
          }
        };

        Chartist.Line('#chartPreferences', dataPreferences, optionsPreferences);*/

        var chart = new Chartist.Line('#chartPreferences1', {
         labels: ['JAN.', 'FEB.', 'MAR.', 'APR.', 'MAY.', 'JUN.', 'JUL.', 'AUG.', 'SEP.', 'OCT.', 'NOV.', 'DEC.'],
          series: [
            [0, 180, 80, 320, 220, 420, 190, {meta: '$570', value:570}, 440, 370, 420, 260]
          ]
        }, {
            lineSmooth: Chartist.Interpolation.simple({
                    divisor: 100
                  }),
                  showArea: false,
                  showPoint: true,
                  showLine: true,
                  height: '200px',
                  axisX: {
                    showGrid: false
                  }
        });
      


    chart.on('draw', function(data) {
      if(data.type === 'point') {
        var circle = new Chartist.Svg('circle', {
          cx: [data.x], cy:[data.y], r:[7],
        }, 'ct-circle');
        data.element.replace(circle);
      }
    });

    chart.on('draw', function(data) {
      if(data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 400 * data.index,
            dur: 1000,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      }
    });

      var chart = new Chartist.Line('#chartPreferences2', {
         labels: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
          series: [
            [12, 16, 21, 3, 12, 0, 22, 10, 6, 18, 9, 13, 36, 4, 12, 17, 19, 10, 10, 1, 8, 12, 2, 22, 50, 42, 2, 18, 10, 5]
          ]
        }, {
            lineSmooth: Chartist.Interpolation.simple({
                    divisor: 100
                  }),
                  showArea: false,
                  showPoint: true,
                  showLine: true,
                  height: '200px',
                  axisX: {
                    showGrid: false
                  }
        });

        chart.on('draw', function(data) {
      if(data.type === 'point') {
        var circle = new Chartist.Svg('circle', {
          cx: [data.x], cy:[data.y], r:[7],
        }, 'ct-circle');
        data.element.replace(circle);
      }
    });

    chart.on('draw', function(data) {
      if(data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 400 * data.index,
            dur: 1000,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      }
    });

                var chart = new Chartist.Line('#chartPreferences3', {
         labels: ['1', '2', '3', '4', '5', '6', '7'],
          series: [
            [12, 3, 22, 16, 17, 2, 4]
          ]
        }, {
            lineSmooth: Chartist.Interpolation.simple({
                    divisor: 100
                  }),
                  showArea: false,
                  showPoint: true,
                  showLine: true,
                  height: '200px',
                  axisX: {
                    showGrid: false
                  }
        });

          chart.on('draw', function(data) {
      if(data.type === 'point') {
        var circle = new Chartist.Svg('circle', {
          cx: [data.x], cy:[data.y], r:[7],
        }, 'ct-circle');
        data.element.replace(circle);
      }
    });

    chart.on('draw', function(data) {
      if(data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 400 * data.index,
            dur: 1000,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      }
    });
          var chart = new Chartist.Line('#chartHours', {
    series: [
        [7,9,7.3,7.7,8.6,10,9.1,8.9,9,8.6,7.3,7.8,8.2]
      ]
    }, {
        lineSmooth: Chartist.Interpolation.simple({
                divisor: 100
              }),
              showArea: false,
              showPoint: true,
              low: 6,
              high:11,
              showLine: true,
              height: '150px',
              axisX: {
                showGrid: false
              }
    });
      


    chart.on('draw', function(data) {
      if(data.type === 'point') {
        var circle = new Chartist.Svg('circle', {
          cx: [data.x], cy:[data.y], r:[6],
        }, 'ct-circle');
        data.element.replace(circle);
      }
    });

    var chart = new Chartist.Line('#chartActivity', {
    series: [
        [8.9, 9.5, 10,9.2, 8.9, 9, 8.7, 7.2, 8.8,9.8, 8.9,10]
      ]
    }, {
        lineSmooth: Chartist.Interpolation.simple({
                divisor: 100
              }),
              showArea: false,
              showPoint: true,
              low: 6,
              high: 11,
              showLine: true,
              height: '150px',
              axisX: {
                showGrid: false
              }
    });
      


    chart.on('draw', function(data) {
      if(data.type === 'point') {
        var circle = new Chartist.Svg('circle', {
          cx: [data.x], cy:[data.y], r:[6],
        }, 'ct-circle');
        data.element.replace(circle);
      }
    });

    },
    
    initGoogleMaps: function(){
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
          zoom: 13,
          center: myLatlng,
          scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
          styles: [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}]
    
        }
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        
        var marker = new google.maps.Marker({
            position: myLatlng,
            title:"Hello World!"
        });
        
        // To add the marker to the map, call setMap();
        marker.setMap(map);
    },
    
	showNotification: function(from, align){
    	color = Math.floor((Math.random() * 4) + 1);
    	
    	$.notify({
        	icon: "nc-icon nc-bell-55",
        	message: "Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer."
        	
        },{
            type: type[color],
            timer: 400,
            placement: {
                from: from,
                align: align
            }
        });
	}

    
}


