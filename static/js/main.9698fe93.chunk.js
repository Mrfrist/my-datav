(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{216:function(e,t,a){e.exports=a(519)},518:function(e,t,a){},519:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(210),i=a.n(r),m=a(211),c=a(212),o=a(215),s=a(214),d=a(20),u=a.n(d),p=(a(516),a(213)),E=a(19),f=(a(518),function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var l;return Object(m.a)(this,a),(l=t.call(this,e)).state={myChart1:null,myChart2:null,myChart3:null,myChart4:null,myChart5:null,myChart6:null},l}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.initalECharts(),this.initalECharts1(),this.initalECharts2(),this.initalECharts3(),this.initalECharts4(),this.initalECharts5();var e=this;window.onresize=function(){console.log(e.state.myChart1,"2222222222222"),e.state.myChart1.resize(),e.state.myChart2.resize(),e.state.myChart3.resize(),e.state.myChart4.resize(),e.state.myChart5.resize(),e.state.myChart6.resize()}}},{key:"initalECharts5",value:function(){var e=this;this.setState({myChart6:u.a.init(document.getElementById("mainMap3"))},(function(){e.state.myChart6.setOption({title:{show:!0,text:"\u8fd16\u4e2a\u6708\u89c2\u4f17\u6d3b\u8dc3\u8d8b\u52bf",x:"center",textStyle:{fontSize:14,fontStyle:"normal",fontWeight:"normal",color:"#01c4f7"}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["\u89c2\u770b\u4eba\u6570\u3001\u6b21\u6570\uff08\u4e2a\uff09","\u573a\u5747\u89c2\u770b\u6570\uff08\u573a\uff09"],textStyle:{fontSize:12,color:"#ffffff"},top:20,itemWidth:20,itemHeight:12,itemGap:10},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",data:["1\u6708","2\u6708","3\u6708","4\u6708","\u4e94\u6708","6\u6708"],splitLine:{show:!0,lineStyle:{color:["#07234d"]}},axisLabel:{show:!0,textStyle:{color:"#c3dbff",fontSize:12}}},yAxis:{type:"value",boundaryGap:[0,.01],splitLine:{show:!0,lineStyle:{color:["#07234d"]}},axisLabel:{show:!0,textStyle:{color:"#c3dbff",fontSize:12}}},series:[{name:"\u89c2\u770b\u4eba\u6570\u3001\u6b21\u6570\uff08\u4e2a\uff09",type:"bar",data:[140,170,90,180,90,90],itemStyle:{color:new u.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#9408fc"},{offset:1,color:"#05aed3"}])}},{name:"\u573a\u5747\u89c2\u770b\u6570\uff08\u573a\uff09",type:"bar",data:[120,130,80,130,120,120],itemStyle:{color:new u.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#13b985"},{offset:1,color:"#dc9b18"}])}}]})}))}},{key:"initalECharts4",value:function(){var e=this;this.setState({myChart5:u.a.init(document.getElementById("mainMap2"))},(function(){e.state.myChart5.setOption({title:{show:!0,text:"\u8fd16\u4e2a\u6708\u4e3b\u64ad\u6d3b\u8dc3\u8d8b\u52bf",x:"center",textStyle:{fontSize:14,fontStyle:"normal",fontWeight:"normal",color:"#01c4f7"}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["\u5f00\u64ad\u4e3b\u64ad\u6570\uff08\u4e2a\uff09","\u5f00\u64ad\u573a\u6b21\u6570\uff08\u573a\uff09"],textStyle:{fontSize:12,color:"#ffffff"},top:20,itemWidth:20,itemHeight:12,itemGap:10},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",data:["1\u6708","2\u6708","3\u6708","4\u6708","\u4e94\u6708","6\u6708"],splitLine:{show:!0,lineStyle:{color:["#07234d"]}},axisLabel:{show:!0,textStyle:{color:"#c3dbff",fontSize:12}}},yAxis:{type:"value",boundaryGap:[0,.01],splitLine:{show:!0,lineStyle:{color:["#07234d"]}},axisLabel:{show:!0,textStyle:{color:"#c3dbff",fontSize:12}}},series:[{name:"\u5f00\u64ad\u4e3b\u64ad\u6570\uff08\u4e2a\uff09",type:"bar",data:[140,170,90,180,90,90],itemStyle:{color:new u.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#9408fc"},{offset:1,color:"#05aed3"}])}},{name:"\u5f00\u64ad\u573a\u6b21\u6570\uff08\u573a\uff09",type:"bar",data:[120,130,80,130,120,120],itemStyle:{color:new u.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#13b985"},{offset:1,color:"#dc9b18"}])}}]})}))}},{key:"initalECharts3",value:function(){var e=this;this.setState({myChart4:u.a.init(document.getElementById("countyMap"))},(function(){e.state.myChart4.setOption({color:["#ff832e","#37cbff","#b3e269"],legend:{top:30,data:["\u7f8e\u5986","\u7406\u8d22","\u6559\u80b2","\u6bcd\u5a74","\u767e\u8d27"],textStyle:{fontSize:12,color:"#ffffff"},icon:"circle",itemWidth:10,itemHeight:10,itemGap:10},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",splitLine:{show:!0,lineStyle:{color:["#07234d"]}},axisLabel:{show:!0,textStyle:{color:"#c3dbff",fontSize:12}}},yAxis:{type:"category",data:["\u4e0a\u6d77","\u5e7f\u5dde","\u676d\u5dde","\u5929\u6d25","\u5317\u4eac","\u53a6\u95e8","\u5408\u80a5"],axisLabel:{show:!0,textStyle:{color:"#c3dbff",fontSize:12}}},series:[{name:"\u7f8e\u5986",type:"bar",stack:"\u603b\u91cf",label:{show:!1,position:"insideRight"},data:[320,302,301,334,390,330,320]},{name:"\u7406\u8d22",type:"bar",stack:"\u603b\u91cf",label:{show:!1,position:"insideRight"},data:[120,132,101,134,90,230,210]},{name:"\u6559\u80b2",type:"bar",stack:"\u603b\u91cf",label:{show:!1,position:"insideRight"},data:[220,182,191,234,290,330,310]},{name:"\u6bcd\u5a74",type:"bar",stack:"\u603b\u91cf",label:{show:!1,position:"insideRight"},data:[150,212,201,154,190,330,410]},{name:"\u767e\u8d27",type:"bar",stack:"\u603b\u91cf",label:{show:!1,position:"insideRight"},data:[820,832,901,934,1290,1330,1320]}]})}))}},{key:"initalECharts2",value:function(){var e=this;this.setState({myChart3:u.a.init(document.getElementById("cityMap"))},(function(){e.state.myChart3.setOption({color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#d000d0"},{offset:1,color:"#7006d9"}],globalCoord:!1},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"value",splitLine:{show:!0,lineStyle:{color:["#07234d"]}},axisLabel:{show:!0,textStyle:{color:"#c3dbff",fontSize:12}}}],yAxis:[{type:"category",data:["\u79d1\u6280","\u6bcd\u5a74","\u7537\u58eb","\u7f8e\u5986","\u73e0\u5b9d","\u5ba0\u7269"],axisTick:{alignWithLabel:!0},axisLabel:{show:!0,textStyle:{color:"#c3dbff",fontSize:12}}}],series:[{name:"\u76f4\u63a5\u8bbf\u95ee",type:"bar",barWidth:"60%",data:[10,52,200,334,390,330,220]}]})}))}},{key:"initalECharts1",value:function(){var e=this;this.setState({myChart2:u.a.init(document.getElementById("provinceMap"))},(function(){e.state.myChart2.setOption({color:["#9702fe","#ff893b","#37cbff","#d90051","#b2e269"],tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",top:30,right:"20%",data:["\u7f8e\u5986","\u767e\u5ea6","\u6559\u80b2","\u7406\u8d22","\u6bcd\u5a74"],textStyle:{fontSize:12,color:"#ffffff"},icon:"circle",itemWidth:10,itemHeight:10,itemGap:10},series:[{name:"\u8bbf\u95ee\u6765\u6e90",type:"pie",radius:["50%","70%"],center:["35%","50%"],avoidLabelOverlap:!1,label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"30",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:335,name:"\u7f8e\u5986"},{value:310,name:"\u767e\u5ea6"},{value:234,name:"\u6559\u80b2"},{value:135,name:"\u7406\u8d22"},{value:1548,name:"\u6bcd\u5a74"}]}]})}))}},{key:"initalECharts",value:function(){var e=this;u.a.registerMap("zhongguo",p);var t={"\u6d1b\u9633":[112.460299,34.62677],"\u897f\u5b89":[108.946466,34.347269],"\u5170\u5dde":[103.84044,36.067321],"\u4e4c\u9c81\u6728\u9f50":[87.62444,43.830763],"\u5305\u5934":[109.846544,40.662929],"\u897f\u5b81":[101.78443,36.623393],"\u94f6\u5ddd":[106.258602,38.487834],"\u6210\u90fd":[104.081534,30.655822],"\u91cd\u5e86":[106.558434,29.568996],"\u62c9\u8428":[91.120789,29.65005],"\u6606\u660e":[102.852448,24.873998],"\u8d35\u9633":[106.636577,26.653325],"\u592a\u539f":[112.534919,37.873219],"\u6b66\u6c49":[114.311582,30.598467],"\u957f\u6c99":[112.945473,28.234889],"\u5357\u660c":[115.864589,28.689455],"\u5408\u80a5":[117.233443,31.826578],"\u676d\u5dde":[120.215503,30.253087],"\u5e7f\u5dde":[113.271431,23.135336],"\u5317\u4eac":[116.413384,39.910925],"\u5929\u6d25":[117.209523,39.093668]},a=function(e){for(var a=[],l=0;l<e.length;l++){var n=e[l],r=t[n[0].name],i=t[n[1].name];i&&r&&a.push({fromName:n[1].name,toName:n[0].name,coords:[i,r]})}return a},l=[];[["\u6d59\u6c5f",[[{name:"\u6d1b\u9633"},{name:"\u6d1b\u9633",value:100}],[{name:"\u6d1b\u9633"},{name:"\u897f\u5b89",value:35}],[{name:"\u6d1b\u9633"},{name:"\u5170\u5dde",value:25}],[{name:"\u6d1b\u9633"},{name:"\u4e4c\u9c81\u6728\u9f50",value:55}],[{name:"\u6d1b\u9633"},{name:"\u5305\u5934",value:60}],[{name:"\u6d1b\u9633"},{name:"\u897f\u5b81",value:45}],[{name:"\u6d1b\u9633"},{name:"\u94f6\u5ddd",value:35}],[{name:"\u6d1b\u9633"},{name:"\u6210\u90fd",value:35}],[{name:"\u6d1b\u9633"},{name:"\u91cd\u5e86",value:40}],[{name:"\u6d1b\u9633"},{name:"\u62c9\u8428",value:205}],[{name:"\u6d1b\u9633"},{name:"\u6606\u660e",value:50}],[{name:"\u6d1b\u9633"},{name:"\u8d35\u9633",value:55}],[{name:"\u6d1b\u9633"},{name:"\u592a\u539f",value:60}],[{name:"\u6d1b\u9633"},{name:"\u6b66\u6c49",value:65}],[{name:"\u6d1b\u9633"},{name:"\u957f\u6c99",value:70}],[{name:"\u6d1b\u9633"},{name:"\u5357\u660c",value:75}],[{name:"\u6d1b\u9633"},{name:"\u5408\u80a5",value:80}],[{name:"\u6d1b\u9633"},{name:"\u676d\u5dde",value:85}],[{name:"\u6d1b\u9633"},{name:"\u5e7f\u5dde",value:90}],[{name:"\u6d1b\u9633"},{name:"\u5317\u4eac",value:95}],[{name:"\u6d1b\u9633"},{name:"\u5929\u6d25",value:60}]]]].forEach((function(e,n){l.push({name:e[0],type:"lines",zlevel:1,symbol:["none","none"],symbolSize:0,effect:{show:!0,period:5,trailLength:.1,symbol:"arrow",symbolSize:5},lineStyle:{normal:{color:"#f19000",width:1,opacity:.6,curveness:.2}},data:a(e[1])},{name:e[0],type:"effectScatter",coordinateSystem:"geo",zlevel:2,rippleEffect:{period:5,scale:4,brushType:"stroke"},label:{normal:{show:!1,position:"right",formatter:"{b}"}},symbol:"circle",symbolSize:function(e){return e[2]/10},itemStyle:{normal:{color:"#f19000"}},data:e[1].map((function(e){return{name:e[1].name,value:t[e[1].name].concat([e[1].value])}}))},{name:e[0],type:"scatter",coordinateSystem:"geo",zlevel:3,symbol:"circle",symbolSize:function(e){return e[2]/15},itemStyle:{normal:{color:"#f00"}},data:e[1].map((function(e){return{name:e[1].name,value:t[e[1].name].concat([e[1].value])}}))})})),this.setState({myChart1:u.a.init(document.getElementById("mainMap"))},(function(){e.state.myChart1.setOption({tooltip:{trigger:"item"},visualMap:{min:0,left:"20%",max:1e4,text:["\u9ad8","\u4f4e"],splitNumber:0,color:["#0054bb","#85ADDE"],textStyle:{color:"#c3dbff"}},series:[{name:"2011\u5168\u56fdGDP\u5206\u5e03",type:"map",mapType:"china",mapLocation:{x:"left"},itemStyle:{normal:{label:{show:!0,color:"#fff"},borderWidth:0}},data:[{name:"\u897f\u85cf",value:700},{name:"\u9752\u6d77",value:1670.44},{name:"\u5b81\u590f",value:2102.21},{name:"\u6d77\u5357",value:2522.66},{name:"\u7518\u8083",value:5020.37},{name:"\u8d35\u5dde",value:5701.84},{name:"\u65b0\u7586",value:6610.05},{name:"\u4e91\u5357",value:22},{name:"\u91cd\u5e86",value:500},{name:"\u5409\u6797",value:1e3},{name:"\u5c71\u897f",value:5e3},{name:"\u5929\u6d25",value:4e3},{name:"\u6c5f\u897f",value:9e3},{name:"\u5e7f\u897f",value:689},{name:"\u9655\u897f",value:9982},{name:"\u9ed1\u9f99\u6c5f",value:12582},{name:"\u5185\u8499\u53e4",value:14359.88},{name:"\u5b89\u5fbd",value:22},{name:"\u5317\u4eac",value:800},{name:"\u798f\u5efa",value:1223},{name:"\u4e0a\u6d77",value:19195.69},{name:"\u6e56\u5317",value:537},{name:"\u6e56\u5357",value:8872},{name:"\u56db\u5ddd",value:21026.68},{name:"\u8fbd\u5b81",value:22226.7},{name:"\u6cb3\u5317",value:24515.76},{name:"\u6cb3\u5357",value:26931.03},{name:"\u6d59\u6c5f",value:32318.85},{name:"\u5c71\u4e1c",value:45361.85},{name:"\u6c5f\u82cf",value:49110.27},{name:"\u5e7f\u4e1c",value:53210.28},{name:"\u53f0\u6e7e",value:53210.28},{name:"\u5357\u6d77\u8bf8\u5c9b",value:53210.28}]}]})}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"data"},n.a.createElement("header",{className:"header_main"},n.a.createElement("h3",null,"\u77e5\u74dc\u6570\u636e\u5e73\u53f0")),n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row fill-h",style:{display:"flex"}},n.a.createElement("div",{className:"col-lg-3 fill-h",style:{width:"25%"}},n.a.createElement("div",{className:"xpanel-wrapper xpanel-wrapper-5"},n.a.createElement(E.b,null,n.a.createElement("div",{className:"xpanel"},n.a.createElement("div",{className:"fill-h",id:"mainMap1"},n.a.createElement("table",{width:"100%",border:"0",cellSpacing:"0",cellPadding:"0"},n.a.createElement("tr",null,n.a.createElement("td",{width:"105",style:{color:"#0c86a9"}},"\u6392\u540d"),n.a.createElement("td",{width:"181",style:{color:"#0c86a9"}},"\u7701\u4efd"),n.a.createElement("td",{width:"112",style:{color:"#0c86a9"}},"\u4e3b\u64ad")),n.a.createElement("tr",null,n.a.createElement("td",null,"01"),n.a.createElement("td",null,"\u5b89\u5fbd"),n.a.createElement("td",null,"23.2w")),n.a.createElement("tr",null,n.a.createElement("td",null,"01"),n.a.createElement("td",null,"\u5b89\u5fbd"),n.a.createElement("td",null,"23.2w")),n.a.createElement("tr",null,n.a.createElement("td",null,"01"),n.a.createElement("td",null,"\u5b89\u5fbd"),n.a.createElement("td",null,"23.2w")),n.a.createElement("tr",null,n.a.createElement("td",null,"01"),n.a.createElement("td",null,"\u5b89\u5fbd"),n.a.createElement("td",null,"23.2w")),n.a.createElement("tr",null,n.a.createElement("td",null,"01"),n.a.createElement("td",null,"\u5b89\u5fbd"),n.a.createElement("td",null,"23.2w")),n.a.createElement("tr",null,n.a.createElement("td",null,"01"),n.a.createElement("td",null,"\u5b89\u5fbd"),n.a.createElement("td",null,"23.2w")),n.a.createElement("tr",null,n.a.createElement("td",null,"01"),n.a.createElement("td",null,"\u5b89\u5fbd"),n.a.createElement("td",null,"23.2w")),n.a.createElement("tr",null,n.a.createElement("td",null,"01"),n.a.createElement("td",null,"\u5b89\u5fbd"),n.a.createElement("td",null,"23.2w")),n.a.createElement("tr",null,n.a.createElement("td",null,"01"),n.a.createElement("td",null,"\u5b89\u5fbd"),n.a.createElement("td",null,"23.2w")),n.a.createElement("tr",null,n.a.createElement("td",null,"01"),n.a.createElement("td",null,"\u5b89\u5fbd"),n.a.createElement("td",null,"23.2w"))))))),n.a.createElement("div",{className:"xpanel-wrapper xpanel-wrapper-4"},n.a.createElement(E.b,null,n.a.createElement("div",{className:"xpanel"},n.a.createElement("div",{className:"fill-h",id:"worldMap"},n.a.createElement("table",{width:"100%",border:"0",cellSpacing:"0",cellPadding:"0"},n.a.createElement("tr",null,n.a.createElement("td",{width:"105",style:{color:"#0c86a9"}},"\u6392\u540d"),n.a.createElement("td",{width:"181",style:{color:"#0c86a9"}},"\u57ce\u5e02"),n.a.createElement("td",{width:"112",style:{color:"#0c86a9"}},"\u4e3b\u64ad\u6570"),n.a.createElement("td",{width:"112",style:{color:"#0c86a9"}},"\u4e3b\u64ad\u7c7b\u578b")),n.a.createElement("tr",null,n.a.createElement("td",null,"01"),n.a.createElement("td",null,"\u5b89\u5fbd"),n.a.createElement("td",null,"23.2w"),n.a.createElement("td",null,"\u7f8e\u5986")),n.a.createElement("tr",null,n.a.createElement("td",null,"01"),n.a.createElement("td",null,"\u5b89\u5fbd"),n.a.createElement("td",null,"23.2w"),n.a.createElement("td",null,"\u7f8e\u98df")),n.a.createElement("tr",null,n.a.createElement("td",null,"01"),n.a.createElement("td",null,"\u5b89\u5fbd"),n.a.createElement("td",null,"23.2w"),n.a.createElement("td",null,"\u6559\u80b2")),n.a.createElement("tr",null,n.a.createElement("td",null,"01"),n.a.createElement("td",null,"\u5b89\u5fbd"),n.a.createElement("td",null,"23.2w"),n.a.createElement("td",null,"\u5267\u60c5")),n.a.createElement("tr",null,n.a.createElement("td",null,"01"),n.a.createElement("td",null,"\u5b89\u5fbd"),n.a.createElement("td",null,"23.2w"),n.a.createElement("td",null,"\u65c5\u6e38")),n.a.createElement("tr",null,n.a.createElement("td",null,"01"),n.a.createElement("td",null,"\u5b89\u5fbd"),n.a.createElement("td",null,"23.2w"),n.a.createElement("td",null,"\u7f8e\u5986")),n.a.createElement("tr",null,n.a.createElement("td",null,"01"),n.a.createElement("td",null,"\u5b89\u5fbd"),n.a.createElement("td",null,"23.2w"),n.a.createElement("td",null,"\u7f8e\u5986")),n.a.createElement("tr",null,n.a.createElement("td",null,"01"),n.a.createElement("td",null,"\u5b89\u5fbd"),n.a.createElement("td",null,"23.2w"),n.a.createElement("td",null,"\u7f8e\u5986")),n.a.createElement("tr",null,n.a.createElement("td",null,"01"),n.a.createElement("td",null,"\u5b89\u5fbd"),n.a.createElement("td",null,"23.2w"),n.a.createElement("td",null,"\u7f8e\u5986")),n.a.createElement("tr",null,n.a.createElement("td",null,"01"),n.a.createElement("td",null,"\u5b89\u5fbd"),n.a.createElement("td",null,"23.2w"),n.a.createElement("td",null,"\u7f8e\u5986")))))))),n.a.createElement("div",{className:"col-lg-6 fill-h",style:{width:"50%"}},n.a.createElement("div",{className:"xpanel-wrapper xpanel-wrapper-5"},n.a.createElement("div",{className:"xpanel",style:{position:"relative"}},n.a.createElement("div",{className:"map_bg"}),n.a.createElement("div",{className:"circle_allow"}),n.a.createElement("div",{className:"circle_bg"}),n.a.createElement("div",{style:{width:"100%",position:"absolute",top:10,display:"flex",left:"50%",justifyContent:"center",color:"#fff",alignItems:"center",transform:"translateX(-50%)"}},n.a.createElement("p",null,"\u5168\u56fd\u6dd8\u5b9d\u4e3b\u64ad\u6570\u91cf\uff1a"),n.a.createElement("div",{className:"databg"},"2"),n.a.createElement("div",{className:"databg"},"2"),n.a.createElement("div",{className:"databg"},"2"),n.a.createElement("div",{className:"databg"},"2"),n.a.createElement("div",{className:"databg"},"2"),n.a.createElement("div",{className:"databg"},"2"),n.a.createElement("div",{className:"databg"},"2"),n.a.createElement("div",{className:"databg"},"2"),n.a.createElement("div",{className:"databg"},"2"),n.a.createElement("p",null,"\u5e26\u8d27\u4e3b\u64ad\u6570\uff1a222222222")),n.a.createElement("div",{className:"fill-h",id:"mainMap"}))),n.a.createElement("div",{className:"xpanel-wrapper xpanel-wrapper-4",style:{display:"flex"}},n.a.createElement("div",{style:{width:"50%",paddingRight:8,position:"relative"}},n.a.createElement(E.c,null,n.a.createElement("div",{className:"xpanel"},n.a.createElement("div",{className:"fill-h",id:"mainMap2"})))),n.a.createElement("div",{style:{width:"50%",paddingLeft:8}},n.a.createElement(E.c,null,n.a.createElement("div",{className:"xpanel"},n.a.createElement("div",{className:"fill-h",id:"mainMap3"})))))),n.a.createElement("div",{className:"col-lg-3 fill-h",style:{width:"25%"}},n.a.createElement("div",{className:"xpanel-wrapper xpanel-wrapper-6",style:{position:"relative"}},n.a.createElement("div",{className:"content_title"},"\u4e3b\u64ad\u7c7b\u578b\u5360\u6bd4"),n.a.createElement(E.a,null,n.a.createElement("div",{className:"xpanel"},n.a.createElement("div",{className:"fill-h",id:"provinceMap"})))),n.a.createElement("div",{className:"xpanel-wrapper xpanel-wrapper-6",style:{position:"relative"}},n.a.createElement("div",{className:"content_title"},"\u91cd\u70b9\u54c1\u7c7b\u6392\u540d"),n.a.createElement(E.a,null,n.a.createElement("div",{className:"xpanel"},n.a.createElement("div",{className:"fill-h",id:"cityMap"})))),n.a.createElement("div",{className:"xpanel-wrapper xpanel-wrapper-4",style:{position:"relative"}},n.a.createElement("div",{className:"content_title"},"Top10\u57ce\u5e02\u5404\u54c1\u7c7b\u5360\u6bd4"),n.a.createElement(E.a,null,n.a.createElement("div",{className:"xpanel"},n.a.createElement("div",{className:"fill-h",id:"countyMap"})))))))))}}]),a}(l.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[216,1,2]]]);
//# sourceMappingURL=main.9698fe93.chunk.js.map