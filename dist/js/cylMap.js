 $(function(){
// 百度地图API功能
    //地图类型：
    //地图(BMAP_NORMAL_MAP)
    //三维(BMAP_PERSPECTIVE_MAP)
    //卫星(BMAP_SATELLITE_MAP)
    //混合(BMAP_HYBRID_MAP)
    //var map = new BMap.Map("dudiMap", {mapType:BMAP_SATELLITE_MAP});
	var map = new BMap.Map("cylMap");
	
    map.enableScrollWheelZoom();

    //mp.centerAndZoom("天津",13);      // 初始化地图,用城市名设置地图中心点
    map.centerAndZoom(new BMap.Point(117.210813, 39.14393), 15);

    map.setMapStyle({
        style : "normal"
    });
    var sContent1 = "<h4 style='margin:0 0 5px 0;padding:0.2em 0'>测试1</h4>"
            + "<img style='float:right;margin:4px' id='imgDemo' src='../images/dudi_show.png' width='139' height='104'/>"
            // + "<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>测试1描述...</p>"
            + "</div>";

    var sContent2 =  "<p>企业名称</p><p>信用分：100</p>";

    var data_info = [ [ 117.210813, 39.14393, sContent2,"../images/map_icon1.png" ],
                    [ 117.220813, 39.15393, sContent2,"../images/map_icon1.png" ],
                    [ 117.230813, 39.16393, sContent2,"../images/map_icon1.png" ] ];
    /* var opts = {
                width : 250,     // 信息窗口宽度
                height: 80,     // 信息窗口高度
                title : "信息窗口" , // 信息窗口标题
                enableMessage:true//设置允许信息窗发送短息
               }; */
               
    var pointArray = new Array();//定义点数组，供确定显示范围使用。
	     
    for (var i = 0; i < data_info.length; i++) {
        
        //创建特殊显示marker
        var pt = new BMap.Point(data_info[i][0],data_info[i][1]);
        //var myIcon = new BMap.Icon("../images/public/map_icon1.png", new BMap.Size(200,102));

        //var markericon = new BMap.Marker(pt,{icon:myIcon}); // 创建标注
        //map.addOverlay(marker2);              // 将标注添加到地图中
        var myIcon = new BMap.Icon(data_info[i][3], new BMap.Size(30,34));
        var marker = new BMap.Marker(pt,{icon:myIcon});
        //var marker = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1])); // 创建标注
        
        var content = data_info[i][2];
        map.addOverlay(marker); // 将标注添加到地图中
        addClickHandler(content, marker);
        
        pointArray[i] = new BMap.Point(data_info[i][0], data_info[i][1]);
        
    }
    
    //让所有点在视野范围内
    map.setViewport(pointArray);

    function addClickHandler(content, marker) {
        marker.addEventListener("click", function(e) {
            openInfo(content, e)
        });
    }
    function openInfo(content, e) {
        var p = e.target;
        var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
        //var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象 

        var infoWindow = new BMap.InfoWindow(content); // 创建信息窗口对象 

        map.openInfoWindow(infoWindow, point); //开启信息窗口
    }
})