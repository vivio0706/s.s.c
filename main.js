$(function() {
    window.onload = function() {
        const fade = document.getElementsByClassName('pattern7');
    fade[0].classList.add('show');
    }

    //スクロールをするとハンバーガーメニューに変化するための設定を関数でまとめる
    function FixedAnime() {
        //ヘッダーの高さを取得
        var mainvisualH = $('#mainvisual').outerHeight(true);
        var scroll = $(window).scrollTop();
        if (scroll >= mainvisualH){//ヘッダーの高さ以上までスクロールしたら
            $('.openbtn').addClass('fadeDown0');//.openbtnにfadeDownというクラス名を付与して
            $('#header').addClass('dnone');//#headerにdnoneというクラス名を付与
        }else{//それ以外は
            $('.openbtn').removeClass('fadeDown0');//fadeDownというクラス名を除き
            $('#header').removeClass('dnone');//dnoneというクラス名を除く
        }
    } 


    // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function () {
        FixedAnime();//スクロールをするとハンバーガーメニューに変化するための関数を呼ぶ
    });

      // ページが読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function () {
        FixedAnime();//スクロールをするとハンバーガーメニューに変化するための関数を呼ぶ
    });


      //ボタンをクリックした際のアニメーションの設定
    $(".openbtn").click(function () {//ボタンがクリックされたら
        $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
        $("#g-nav").toggleClass('panelactive');//ヘッダーにpanelactiveクラスを付与
        $(".circle-bg").toggleClass('circleactive');//丸背景にcircleactiveクラスを付与
    });
    $("#g-navi li a").click(function () {//ナビゲーションのリンクがクリックされたら
        $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
        $("#g-nav").removeClass('panelactive');//ヘッダーのpanelactiveクラスも除去
    });

    $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
        $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
        $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去
        $(".circle-bg").removeClass('circleactive');//丸背景のcircleactiveクラスを除去
    });


    function fadeAnime(){

        $('.fadeInTrigger').each(function(){ //fadeUpTriggerというクラス名が
            var elemPos = $(this).offset().top-50;//要素より、50px上の
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
            $(this).addClass('fadeIn');// 画面内に入ったらfadeUpというクラス名を追記
            }else{
            $(this).removeClass('fadeIn');// 画面外に出たらfadeUpというクラス名を外す
            }
        });

        // ふわっ
        $('.fadeInTrigger').each(function(){ //fadeUpTriggerというクラス名が
            var elemPos = $(this).offset().top-50;//要素より、50px上の
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
            $(this).addClass('fadeIn');// 画面内に入ったらfadeUpというクラス名を追記
            }else{
            $(this).removeClass('fadeIn');// 画面外に出たらfadeUpというクラス名を外す
            }
        });

        $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
            var elemPos = $(this).offset().top-50;//要素より、50px上の
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
            $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
            }else{
            $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
            }
        });

        $('.fadeRightTrigger').each(function(){ //fadeUpTriggerというクラス名が
            var elemPos = $(this).offset().top-50;//要素より、50px上の
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
            $(this).addClass('fadeRight');// 画面内に入ったらfadeUpというクラス名を追記
            }else{
            $(this).removeClass('fadeRight');// 画面外に出たらfadeUpというクラス名を外す
            }
        });

        $('.fadeLeftTrigger').each(function(){ //fadeUpTriggerというクラス名が
            var elemPos = $(this).offset().top-50;//要素より、50px上の
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
            $(this).addClass('fadeLeft');// 画面内に入ったらfadeUpというクラス名を追記
            }else{
            $(this).removeClass('fadeLeft');// 画面外に出たらfadeUpというクラス名を外す
            }
        });

        $('.fadeDownTrigger').each(function(){ //fadeUpTriggerというクラス名が
            var elemPos = $(this).offset().top-50;//要素より、50px上の
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
            $(this).addClass('fadeDown');// 画面内に入ったらfadeUpというクラス名を追記
            }else{
            $(this).removeClass('fadeDown');// 画面外に出たらfadeUpというクラス名を外す
            }
        });

        $('.fadeUp_btnTrigger').each(function(){ //fadeUpTriggerというクラス名が
            var elemPos = $(this).offset().top-50;//要素より、50px上の
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
            $(this).addClass('fadeUp_btn');// 画面内に入ったらfadeUpというクラス名を追記
            }else{
            $(this).removeClass('fadeUp_btn');// 画面外に出たらfadeUpというクラス名を外す
            }
        });

        $('.fadeUpCornerLTrigger').each(function(){ //fadeUpTriggerというクラス名が
            var elemPos = $(this).offset().top-50;//要素より、50px上の
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
            $(this).addClass('fadeUpCornerL');// 画面内に入ったらfadeUpというクラス名を追記
            }else{
            $(this).removeClass('fadeUpCornerL');// 画面外に出たらfadeUpというクラス名を外す
            }
        });

        $('.fadeUpCornerRTrigger').each(function(){ //fadeUpTriggerというクラス名が
            var elemPos = $(this).offset().top-50;//要素より、50px上の
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
            $(this).addClass('fadeUpCornerR');// 画面内に入ったらfadeUpというクラス名を追記
            }else{
            $(this).removeClass('fadeUpCornerR');// 画面外に出たらfadeUpというクラス名を外す
            }
        });
    }

  // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
        fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述


    // キーを押したとき
    $(window).on('keydown', function(e){
        var keyCode = e.keyCode;

        if(keyCode == 16 || keyCode == 44 || keyCode == 91 || keyCode == 92){
            $('img').hide();
            return false;
        }
    });
    
    // キーを離したとき
    $(window).on('keyup', function(){
        $('img').show();
    });


    //アコーディオンをクリックした時の動作
$('.title').on('click', function() {//タイトル要素をクリックしたら
    $('.box').slideUp(500);//クラス名.boxがついたすべてのアコーディオンを閉じる

    var findElm = $(this).next(".box");//タイトル直後のアコーディオンを行うエリアを取得

    if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
        $(this).removeClass('close');//クラス名を除去    
    }else{//それ以外は
        $('.close').removeClass('close'); //クラス名closeを全て除去した後
        $(this).addClass('close');//クリックしたタイトルにクラス名closeを付与し
        $(findElm).slideDown(500);//アコーディオンを開く
    }
});

  //ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
$(window).on('load', function(){
    $('.accordion-area li:first-of-type section').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
    $(".open").each(function(index, element){ //openクラスを取得
      var Title =$(element).children('.title'); //openクラスの子要素のtitleクラスを取得
      $(Title).addClass('close');       ///タイトルにクラス名closeを付与し
      var Box =$(element).children('.box'); //openクラスの子要素boxクラスを取得
      $(Box).slideDown(500);          //アコーディオンを開く
    });
});



    $('.slider').slick({
        arrows: false,//左右の矢印はなし
        autoplay: true,//自動的に動き出すか。初期値はfalse。
        autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
        speed: 6900,//スライドのスピード。初期値は300。
        infinite: true,//スライドをループさせるかどうか。初期値はtrue。
        pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
        pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
        cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
        slidesToShow: 4,//スライドを画面に4枚見せる
        slidesToScroll: 1,//1回のスライドで動かす要素数
        responsive: [
            {
            breakpoint: 769,//モニターの横幅が769px以下の見せ方
            settings: {
                slidesToShow: 2,//スライドを画面に2枚見せる
            }
        },
        {
            breakpoint: 426,//モニターの横幅が426px以下の見せ方
            settings: {
                slidesToShow: 1.5,//スライドを画面に1.5枚見せる
            }
        }
    ]
    });

    function PageTopAnime() {
        var scroll = $(window).scrollTop();
        if (scroll >= 100){//上から100pxスクロールしたら
            $('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
            $('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
        }else{
            if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
                $('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
                $('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
            }
        }
    }
    
    // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function () {
        PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
    });
    
    // ページが読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function () {
        PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
    });
    
    
    // #page-topをクリックした際の設定
    $('#page-top').click(function () {
        var scroll = $(window).scrollTop(); //スクロール値を取得
        if(scroll > 0){
            $(this).addClass('floatAnime');//クリックしたらfloatAnimeというクラス名が付与
            $('body,html').animate({
                scrollTop: 0
            }, 2000,function(){//スクロールの速さ。数字が大きくなるほど遅くなる
                $('#page-top').removeClass('floatAnime');//上までスクロールしたらfloatAnimeというクラス名を除く
            });	
        }
        return false;//リンク自体の無効化
    });


});

