/**
 * Created by ly on 2016/12/6.
 */

$(function(){
    function iconDel(){
        $(".iconDel").on("click",function(){
            $(this).parent("li").remove();
        })
    }
    iconDel();

    //规则占比添加html
    $(".iconAddGz").click(function(){
        $(this).parents(".jsgsList_r").find("li:last").after('<li><input type="button" value="—" class="jsgsListIcon iconDel"><select class="jsgsListSel2"><option>请选择</option><option>+</option><option>-</option><option>×</option><option>÷</option></select><select class="jsgsListSel1"><option>请选择</option><option>涉集资诈骗高管人数</option><option>高管曾经投资集资诈骗公司金额比例</option><option>企业集资诈骗舆情负面次数</option><option>在法院起诉集资诈骗次数</option></select><select class="jsgsListSel2"><option>请选择</option><option>+</option><option>-</option><option>×</option><option>÷</option></select><input type="text" class="jsgsListInp2"></li>');

        iconDel();
    })
    //求平均添加html
    $(".iconAddPj").click(function(){
        $(this).parents(".jsgsList_r").find("li:last").after('<li><input type="button" value="—" class="jsgsListIcon iconDel"><select class="jsgsListSel2"><option>请选择</option><option>+</option><option>-</option><option>×</option><option>÷</option></select><select class="jsgsListSel1"><option>请选择</option><option>涉集资诈骗高管人数</option><option>高管曾经投资集资诈骗公司金额比例</option><option>企业集资诈骗舆情负面次数</option><option>在法院起诉集资诈骗次数</option></select><select class="jsgsListSel2"><option>请选择</option><option>+</option><option>-</option><option>×</option><option>÷</option></select></li>');
        iconDel();
    })
    //条件设置添加html
    $(".iconAddTj").click(function(){
        $(this).parents(".jsgsList_r").find("li:last").after('<li><input type="button" value="—" class="jsgsListIcon iconDel"><select class="jsgsListSel2"><option>或</option><option>且</option></select><select class="jsgsListSel1"><option>请选择</option><option>涉集资诈骗高管人数</option><option>高管曾经投资集资诈骗公司金额比例</option><option>企业集资诈骗舆情负面次数</option><option>在法院起诉集资诈骗次数</option></select><select class="jsgsListSel2"><option>请选择</option><option>+</option><option>-</option><option>×</option><option>÷</option></select><input type="text" class="jsgsListInp2"></li>');
        iconDel();
    })


    $("input[name='jsgs']").each(function() {
        if (this.checked) {
            $(this).parents(".jsgsList").find(".jsgsList_r").find("input").removeAttr("disabled").removeClass("disable");
            $(this).parents(".jsgsList").find(".jsgsList_r").find("select").removeAttr("disabled").removeClass("disable");
        }else{
            $(this).parents(".jsgsList").find(".jsgsList_r").find("input").attr("disabled","disabled").addClass("disable");
            $(this).parents(".jsgsList").find(".jsgsList_r").find("select").attr("disabled","disabled").addClass("disable");
        }
    })

    $("input[name='jsgs']").change(function(){
        $("input[name='jsgs']").each(function() {
            if (this.checked) {
                $(this).parents(".jsgsList").find(".jsgsList_r").find("input").removeAttr("disabled").removeClass("disable");
                $(this).parents(".jsgsList").find(".jsgsList_r").find("select").removeAttr("disabled").removeClass("disable");
            }else{
                $(this).parents(".jsgsList").find(".jsgsList_r").find("input").attr("disabled","disabled").addClass("disable");
                $(this).parents(".jsgsList").find(".jsgsList_r").find("select").attr("disabled","disabled").addClass("disable");
            }
        })
    })


})
