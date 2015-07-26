---
layout: newdefault
title: Resources
---

<div class = "ui fluid input" id="the-basics">
 <h3> <input class="input typeahead" type="text" placeholder="Search Resources"></h3>
</div>

<div class="ui special two cards">
 {% for page in site.pages%}
       <!--Project-->
  {% if page.categories contains "resources"%}
<!--style="background-image:url({{site.baseurl}}/images/{})"-->
<div class="pink card">
   <div class="dimmable image">
      <div class="ui dimmer">
        <div class="content">
          <div class="center">
            <h3><a class="white" href="{{site.baseurl}}/projects/{{page.locator}}">{{page.hook}}</a></h3>
          </div>
        </div>
      </div>
      <img src="{{site.baseurl}}/images/{{page.tease}}">
   </div>
<!--  <div class="content">
      <a class="header" href="{{site.baseurl}}/team/{{page.locator}}"><span class="pink backed">{{page.title}}</span></a>
      <div class="staff meta">
        <a href="{{site.baseurl}}/team/{{page.locator}}">{{page.funder}}</a>
      </div>
    </div>-->
</div>
  {%endif%}
{% endfor %}
</div>


<script>$('.special.cards .image').dimmer({
  on: 'hover'
});</script>

<script>
var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};

var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
  'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
  'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

$('#the-basics .typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'states',
  source: substringMatcher(states)
});

            /* var seg ="";
            $pod.find('segment').each(function(){
              seg += '<a>'+$(this).text()+'</a>'
              if (segz.indexOf($(this).text())==-1){
                segz.push($(this).text());}
            });

            $pod.find('movie').each(function(){
              if (movz.indexOf($(this).text())==-1){
                movz.push($(this).text());}
            });*/

        /* $('#search').typeahead([
          {
            name: 'segments',
            local: segz,
            header: '<h7>Segments</h7>'
          },
          {
            name: 'movies',
            local:movz,
            header: '<h7>Movies</h7>'
          }
        ]);*/

       /*   $("#search").bind('keyup',function(){
           if (event.keyCode!="39" && event.keyCode!="13" && event.keyCode!="40"  && event.keyCode!="38" && event.keyCode!="37" && event.keyCode!="17" && event.keyCode!="91"){

                       $(".podcast").each(function(){
                           $(this).removeClass("hide");});
            }
        });
        $("#search").bind('typeahead:selected', function(obj, datum)
            {dispatch(datum.value);

             });

          $("#search").bind('typeahead:autocompleted', function(obj, datum)
            {dispatch(datum.value);
             });*/
</script>
