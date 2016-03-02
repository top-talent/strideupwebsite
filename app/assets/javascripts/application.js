// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require plugins/bootstrap/js/bootstrap.min
//= require plugins/detectmobilebrowser/detectmobilebrowser
//= require plugins/smartresize/smartresize
//= require plugins/jquery-easing/jquery.easing.min
//= require plugins/skrollr/skrollr.min
//= require plugins/jquery-sticky/jquery.sticky
//= require plugins/jquery-inview/jquery.inview.min
//= require plugins/jquery-countTo/jquery.countTo
//= require plugins/jquery-easypiechart/jquery.easypiechart.min
//= require plugins/jquery-countdown/jquery.countdown.min
//= require plugins/owl-carousel/owl.carousel.min
//= require plugins/isotope/isotope.pkgd.min
//= require plugins/jquery-magnificPopup/jquery.magnific-popup.min
//
//= require rinjani/main
//= require rinjani/animation
//= require rinjani/component/bar-chart.js
//= require rinjani/component/countdown.js
//= require rinjani/component/counters.js
//= require rinjani/component/pie-chart.js
//= require rinjani/component/portfolio.js
//= require rinjani/component/testimonials.js
//= require rinjani/component/animation.js

$(document).ready(function(){
  $("a.fb-share").on("click", function(e){
    e.preventDefault();
    FB.ui({
      method: 'share',
      href: 'https://www.strideup.com',
    }, function(response){});
  });


  if($("#animated-bars").length){
    $("#animated-bars .bars div").each(function(){
      $(this).css('margin-top', $(this).parent().height()-$(this).height());
    })
    setInterval(function(){
      var current = $("#animated-bars").data("currentbar");
      $("#animated-bars .bars div").removeClass("active-bar");
      var new_bar = current == 10 ? 1 : (current+1);
      $("#animated-bars #bar"+new_bar).addClass("active-bar");
      $("#animated-bars").data("currentbar", new_bar);
    }, 500);
  }

  if($("#map").length){

    //Render UK map
    var width = parseInt(d3.select('#map .uk-map').style('width')),
    map_ratio = 0.8
    height = width * map_ratio;

    var projection = d3.geo.albers()
    .center([0, 55.4])
    .rotate([4.4, 0])
    .parallels([50, 60])
    .scale(1200 * 5)
    .translate([width / 2, height / 2]);

    var path = d3.geo.path()
    .projection(projection);

    var svg = d3.select("#map .uk-map").append("svg")
    .attr("width", width)
    .attr("height", height);

    d3.json("/uk-postcode-area.json", function(error, uk) {
      svg.selectAll(".subunit")
      .data(topojson.feature(uk, uk.objects['uk-postcode-area']).features)
      .enter().append("path")
      .attr("class", "feature")
      .attr("d", path)
      .append("svg:title")
      .attr("transform", function (d) { return "translate(" + path.centroid(d) + ")"; })
      .attr("dy", ".35em")
      .text(function (d) { return d.id; });

      svg.append("path")
      .datum(topojson.mesh(uk, uk.objects['uk-postcode-area'], function(a, b) { return a !== b; }))
      .attr("class", "mesh")
      .attr("d", path);

    });
  }

});


