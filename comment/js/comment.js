
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
            if(count_text<0){
                $('.count-number>input').val(0)
            }
            $(this).val($(this).val().replace(/\D|^0/g,''));
        });

        //放大镜效果
        $('.small-box').on({
            mouseenter:function(){
                $('.mask').css('display','block');
                $('.big-box').css('display','block');
            },mouseleave:function(){
                $('.mask').css('display','none');
                $('.big-box').css('display','none');
            },mousemove:function(e){
                var left= e.pageX-$('.small-box').offset().left-$('.mask').width()/2;
                var top= e.pageY-$('.small-box').offset().top-$('.mask').height()/2;
                if(left<=0){
                    left=0;
                }else if(left>=$('.small-box').width()-$('.mask').width()){
                    left=$('.small-box').width()-$('.mask').width();
                }
                if(top<=0){
                    top=0;
                }else if(top>=$('.small-box').height()-$('.mask').height()){
                    top=$('.small-box').height()-$('.mask').height();
                }
                $('.mask').css({left:left,top:top});
                //console.log($('.mask').width()/2)
                //console.log($('.small-box').offset().left)

                var img_left=left/($('.small-box').width()-$('.mask').width())*($('.big-img').width()-$('.big-box').width());
                var img_top=top/($('.small-box').height()-$('.mask').height())*($('.big-img').height()-$('.big-box').height());
                $('.big-img').css({left:-img_left,top:-img_top});
                console.log(img_left);
            }
        });

        //评论区
        $('#btn').on('click',function(){
            var text=$('#text').val();
            var str='';
            if(text!=''){
                str+='<li>';
                str+='<div class="pull-left">';
                str+='<img src="img/getAvatar.jpg" alt=""/>';
                str+=' <p class="text-center">JUST</p>';
                str+='</div>';
                str+=' <div class="pull-left contents">';
                str+=' <p class="data">2017年09月09日 14：00发表</p>';
                str+='<p>'+text+'</p>';
                str+='</div>';
                str+='</li>';
                $('#comments').append(str);
                $('#text').val('')
            }
        })
    });
})();