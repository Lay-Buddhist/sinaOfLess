/**
 * Created by WQM on 2018/3/25.
 */
$(function () {
    $(".nav_btn").on("click",function () {
        //$(".qiao").slideToggle("normal");
        //$(this).text("收起");
        if($(this).text() === "展开") {
            $(".qiao").slideDown("normal");
            $(this).text("收起");
        }else {
            $(".qiao").slideUp("normal");
            $(this).text("展开");
        }
    });
});
$(function () {
    $(".gongkai").on("click", function () {
        $(".some").css({display:"block"});
    })
    $(".some").on("click", function () {
        $(this).css({display:"none"});
    })
});

$(function () {
    $(document).scroll(function () {
        if( $(document).scrollTop() > 100)  {
            $(".top1").css({display:"block"});
        }else {
            $(".top1").css({display:"none"});
        }
    })
    $(".top1").on("click", function () {
        var speed = 400;
        $('html,body').animate({ scrollTop: 0 }, speed);
        return false;
    })
});