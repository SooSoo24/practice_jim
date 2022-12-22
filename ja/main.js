'use strict';

{
  // 背景色が伸びて出現
  // 動きのきっかけの起点となるアニメーションの名前を定義
  function BgFadeAnime(){

    // 背景色が伸びて出現（左から右）
  $('.bgLRextendTrigger').each(function(){ //bgLRextendTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('bgLRextend');// 画面内に入ったらbgLRextendというクラス名を追記
      console.log("rrr");
    }else{
      $(this).removeClass('bgLRextend');// 画面外に出たらbgLRextendというクラス名を外す
    }
  });	

  // 文字列を囲う子要素
  $('.bgappearTrigger').each(function(){ //bgappearTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
    }else{
      $(this).removeClass('bgappear');// 画面外に出たらbgappearというクラス名を外す
    }
  });		
  }

  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

  // // 画面が読み込まれたらすぐに動かしたい場合の記述
  // $(window).on('load', function(){
  //   BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
  // });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述









  
  //フォードアップエフェクトを付与
  function fadeUpEffect() {
    $('.fadeUpTrigger').each(function () {
      var position = $(this).offset().top + 100;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
  
      if (scroll >= position - windowHeight) {
        $(this).addClass('fadeUp');
      }
    });
  }
  
  $(window).scroll(function () {
    fadeUpEffect();
  });


  //スクロールに応じてヘッダーとバナーにactiveクラスを付与
  $(window).scroll(function(){
    if($(this).scrollTop() > 200){
      $('header').addClass('active');
      $('header .btn').addClass('active');
      $('.icon-up-box').fadeIn();
    }else{
      $('header').removeClass('active');
      $('header .btn').removeClass('active');
      $('.icon-up-box').fadeOut();
    }
  });



  $('.banner-trainer').on('click' , function(){
    $('.OT-trainer-wrapper').addClass('active');
    $('.OT-staff-wrapper').removeClass('active');
    $('.banner-trainer').addClass('active');
    $('.banner-staff').removeClass('active');
  });

  $('.banner-staff').on('click' , function(){
    $('.OT-trainer-wrapper').removeClass('active');
    $('.OT-staff-wrapper').addClass('active');
    $('.banner-trainer').removeClass('active');
    $('.banner-staff').addClass('active');
  });
  

  
  


  
// スクロールアイコンを非表示
  $(".price-wrapper").scroll(function(){
    if ($(this).scrollLeft() > 20) {
      $(".price-scroll-box").fadeOut();
    }
  });



  
// swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



  //FAQのアコーディオン
  const $faq_q = $('.faq-q');
  const $faq_a = $('.faq-a');

  $faq_a.hide();

  $faq_q.on('click', function(){
    $(this).toggleClass('active');
    $(this).next().slideToggle(200);
  });
}