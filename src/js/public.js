/**
 * Created by ly on 2016/12/5.
 */

$(function(){
    //左导航高度
    var winH = $(window).height() - 52;
    $(".leftBar").height(winH);

    //头部nav根据URL切换顶部选中导航
    var localUrl = window.location + '';
    var spIndex;
    if (localUrl.indexOf('/index.html') >= 0) { //企业风险预警
        spIndex = 0;
    } else if (localUrl.indexOf('/score_') >= 0) { //评分配置
        spIndex = 1;
    }
    $(".topNav a").eq(spIndex).addClass("active").siblings().removeClass("active");

    //leftBar1根据URL切换左侧选中导航
    var localUrl1 = window.location + '';
    var spIndex1;
    if (localUrl1.indexOf('/index.html') >= 0) { //指标管理
        spIndex1 = 0;
    }else if (localUrl.indexOf('allWarning.html') >= 0) { //规则管理
        spIndex1 = 3;
    }
    $(".leftBar li").eq(spIndex1).addClass("active").siblings().removeClass("active");

    //leftBar2根据URL切换左侧选中导航
    var localUrl2 = window.location + '';
    var spIndex2;
    if (localUrl2.indexOf('quota.html') >= 0) { //指标管理
        spIndex2 = 0;
    }else if (localUrl.indexOf('rule.html') >= 0) { //规则管理
        spIndex2 = 1;
    }else if (localUrl.indexOf('score.html') >= 0) { //评分模型
        spIndex2 = 2;
    }else if (localUrl.indexOf('level.html') >= 0) { //等级设置
        spIndex2 = 3;
    }else if (localUrl.indexOf('danger.html') >= 0) { //高危项定制
        spIndex2 = 4;
    }
    $(".leftBar li").eq(spIndex2).addClass("active").siblings().removeClass("active");
})



    $(function(){
        var localUrl = window.location + '';
        var spIndex;
        if (localUrl.indexOf('/credit-evaluation') >= 0) { //企业信用一张图
            spIndex = 0;
        } else if (localUrl.indexOf('/subdivision-field') >= 0) { //细分领域信用
            spIndex = 1;
        }
        $(".leftBar ul li").eq(spIndex).addClass("active").siblings().removeClass("active");
    })
