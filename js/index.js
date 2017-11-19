$(function(){
    //沙发轮播图开始
    var index=0;
    var time='';
    var timeout='';
    $('.sofe-left-btn').on('click',function(){
        clearTimeout(timeout);
        timeout=setTimeout(function(){
            index--;
            index=index<-7?0:index;
            $('.sofe-show').css('left',index * 266);
        },200)

    });
    $('.sofe-right-btn').on('click',function(){
        clearTimeout(timeout);
        timeout=setTimeout(function(){
            index++;
            index=index>0?-7:index;
            $('.sofe-show').css('left',index * 266);
        },200)
    });

    $('.sofe-left-btn').hover(function(){
        clearInterval(time);
    },function(){
        move();
    });
    $('.sofe-right-btn').hover(function(){
        clearInterval(time);
    },function(){
        move();
    });
    $('.sofe-img').hover(function(){
        clearInterval(time);
    },function(){
        move();
    });
    function move(){
        clearInterval(time);
        time= setInterval(function(){
            index--;
            //index=index<-8?0:index;
                $('.sofe-show').stop().animate({'left':index * 266},1000);
            if(index==-8){
                $('.sofe-show').stop().animate({'left':index * 266},1000,function(){
                    $('.sofe-show').css('left',0);
                });
                index=0;
            }
        },2000);
    }
    move();
//沙发轮播图结束



//动态加载开始


    var data=[
        {"id":1,"name":"纯实木进口白橡木椅系列","picpath":"img/img-04.jpg.jpg","price":500},
        {"id":2,"name":"北欧简约全实木客椅系列","picpath":"img/img-06.jpg.jpg","price":709},
        {"id":3,"name":"北欧简约全实木客椅系列","picpath":"img/img-07.jpg.jpg","price":669},
        {"id":4,"name":"雪尼尔帆布沙发系列","picpath":"img/img-08.jpg.jpg","price":549},
        {"id":5,"name":"黑白调转椅现代风系列","picpath":"img/img-09.jpg.jpg","price":418},
        {"id":6,"name":"中式餐椅实木椅系列","picpath":"img/img-10.jpg.jpg","price":898},
        {"id":7,"name":"北欧简约现代座椅系列","picpath":"img/img-11.jpg.jpg","price":990},
        {"id":8,"name":"曼斯菲尔设计师椅简约系列","picpath":"img/img-12.jpg.jpg","price":156},
        {"id":9,"name":"现代旋转椅子时尚系列","picpath":"img/img-13.jpg.jpg","price":688},
        {"id":10,"name":"橡木桌椅新中式时代系列","picpath":"img/img-14.jpg.jpg","price":759},
        {"id":11,"name":"美食餐椅软包复古系列","picpath":"img/img-15.jpg.jpg","price":989},
        {"id":12,"name":"法式田园餐椅 欧式办公系列","picpath":"img/img-16.jpg.jpg","price":799}
    ];
    var str='';
    for(var i=0;i<data.length;i++){
        str+='<div class="col-md-3 ">';
        str+='<div class="buyNow"><h3>立即<br>购买</h3></div>';
        str+='<img src="'+data[i].picpath+'" alt="" class="center-block"/>';
        str+='<p class="text-center" style="color: #000;margin-top: 51px">'+data[i].name+'</p>';
        str+='<p class="text-center" style="font-size: 20px;color: #000;"><span style="font-size: 14px;">￥</span>'+data[i].price+'</p>';
        str+='</div>';
    }
    $('.search-show').html(str);
    $('#input').blur(function(){
        var val=$(this).val();
        if(val==''){
            val='系列';
        }

        $.ajax({
            url:'http://172.25.5.92:8080/Emerlshop/NameServlet?name='+val,
            type:'get',
            dataType:'jsonp',
            jsonpCallback:'cb',
            success:function(data){
                console.log(data);
                var str='';

                for(var i=0;i<data.length;i++){
                    str+='<div class="col-md-3 ">';
                    str+='<div class="buyNow"><h3>立即<br>购买</h3></div>';
                    str+='<img src="'+data[i].picpath+'" alt="" class="center-block"/>';
                    str+='<p class="text-center" style="color: #000;margin-top: 51px">'+data[i].name+'</p>';
                    str+='<p class="text-center" style="font-size: 20px;color: #000;"><span style="font-size: 14px;">￥</span>'+data[i].price+'</p>';
                    str+='</div>';
                }
                $('.search-show').html(str);
                if($('.search-show>div').length<=0){
                    str='<p>没有相关匹配的商品。。。</p>';
                    $('.search-show').html(str);
                }



            },error:function(){
                alert('请求失败');
            }
        });
        $('#input').val('');

    });


    $(window).scroll(function(){
        scrtop=$(document).scrollTop();
        if(scrtop>250){
            $('.back-to-top').css('display','block')
        }
        if(scrtop<=250){
            $('.back-to-top').css('display','none')
        }
    });





//动态加载结束
});






