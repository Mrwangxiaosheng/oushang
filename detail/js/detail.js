(function(){
    $(function(){
        //次导航栏和侧边栏固定
        var scrtop=0;

        $(window).scroll(function(){
            scrtop=$(document).scrollTop();
            if(scrtop<66){
                $('.add').css('top',(146-scrtop)+'px');
                $('.nav-bottom').stop().css({top:0});
            }
            if(scrtop>=66){
                $('.add').css('top',80);
                $('.nav-bottom').stop().animate({top:(scrtop-66)+'px'},0);
            }
            if($('body').height()-scrtop<=1085){
                $('.add').css('display','none');
                //$('.nav-bottom').stop().css({top:$('body').height()-1085-66+'px'});
            }
            if($('body').height()-scrtop>1085){
                $('.add').css('display','block');
            }
            if(scrtop>250){
                $('.back-to-top').css('display','block')
            }
            if(scrtop<=250){
                $('.back-to-top').css('display','none')
            }
        });

        //购买数量的加减

        $('.reduce').on('click',function(){
            var count= $('.count-number>input').val();
            count--;
            count=count<=0?0:count;
            if(count<=0){
                $('.reduce').css('color','#999')
            }else{
                $('.reduce').css('color','#000')
            }
            $('.count-number>input').val(count);
        });
        $('.plus').on('click',function(){
            var count= $('.count-number>input').val();
            count++;
            count=count>=99?99:count;
            $('.count-number>input').val(count);
            console.log(count)
        });
        $('.count-number>input').on('blur',function(){
            var count_text=$('.count-number>input').val();
            if(count_text==''){
                $('.count-number>input').val(0)
            }
            if(count_text>99){
                $('.count-number>input').val(99)
            }
        });
        $('.count-number>input').keyup(function(){
            var count_text=$('.count-number>input').val();
            if(count_text<=0){
                $('.count-number>input').val(0);
            }
            $(this).val($(this).val().replace(/\D|^0/g,''));
        })
    });

    //瀑布流代码
    var data=[
        [
            'pbl/3.jpg','pbl/4.jpg'
        ],[
            'pbl/5.jpg','pbl/6.jpg'
        ],[
            'pbl/7.jpg','pbl/8.jpg'
        ],[
            'pbl/9.jpg','pbl/10.jpg'
        ],[
            'pbl/11.jpg','pbl/12.jpg'
        ]
    ];
    var index = 0;
    var flag = true;
    $(window).scroll(function(){
        if(!flag){return;}
//        console.log($(document).height());
        if($(window).height() + $(document).scrollTop() >= $(document).height() - 300){
            flag = false;
//            动态加载
            for(var i = 0; i < data[index].length; i++){
                var str = '';
                str += '<div class="box">';
                str += '<img src="' + data[index][i] + '" alt="" class="center-block">';
                str += '</div>';
                $('#selection').append(str);
            }
//            延迟50毫秒进行计算高度  确保动态添加的元素已经添加完成
            setTimeout(function(){
                var boxs = $('.box');

//            瀑布流计算
                var arrhg = [];  // 用来保存每一列的高度
                for(var j = 0; j < boxs.length; j++){
                    if(j < 2){
                        // 保存了每一列的初始高度
                        arrhg[j] = $(boxs[j]).height();
                    }else{
//                   找到当前列最小的那一列
                        var minHeight = Math.min.apply(null,arrhg);
//                    找到当前数组的索引值
                        var arrIndex = $.inArray(minHeight,arrhg);
//                    设置css样式
                        $(boxs[j]).css({
                            position: 'absolute',
                            left: boxs[arrIndex].offsetLeft + 'px',
                            top: minHeight + 10 + 'px'
                        });
//                    更新最小列高度
                        arrhg[arrIndex] = minHeight + $(boxs[j]).height() + 10;
                    }
                }
                //设置主内容块的高度，让脚步一直往下走
                var sh=$(document).height()-196;
                $('section').height(sh);
                //console.log($('section').height());
                index++;
                flag = true;
                //console.log(index)
                if(index>=5){
                    $('footer').css('display','block');
                }
            },50);

        }
        //console.log($(document).height())

    });

})();
