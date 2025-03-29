$(document).ready(function () {
  $('#menu-icon').click(function () {
      $('#menu').toggleClass('open'); // クラスの切り替えで開閉
  });

  // メニュー内のリンクをクリックしたら閉じる
  $('#menu a').click(function () {
      $('#menu').removeClass('open');
  });

  // 画面のどこかをクリックするとメニューを閉じる
  $(document).click(function (event) {
      if (!$(event.target).closest('#menu, #menu-icon').length) {
          $('#menu').removeClass('open');
      }
  });

  // カルーセル
  $('.news-inner').slick({
    slidesToShow: 5, // 5つのアイテムを表示
    slidesToScroll: 1, // スクロール時に1つずつ移動
    infinite: true, // 無限ループ
    dots: false, // ドットナビゲーションを表示
    arrows: true, // 次へ・前へボタンを表示
    responsive: [
    {
    breakpoint: 1024,
    settings: {
    slidesToShow: 3, // 画面幅が1024px以下の場合は3つ表示
    slidesToScroll: 1,
    infinite: true,
    dots: true
    }
    },
    {
    breakpoint: 600,
    settings: {
    slidesToShow: 2, // 画面幅が600px以下の場合は2つ表示
    slidesToScroll: 1
    }
    },
    {
    breakpoint: 480,
    settings: {
    slidesToShow: 1, // 画面幅が480px以下の場合は1つ表示
    slidesToScroll: 1
    }
    }
    ]
});

    // スクロールバー風の要素を追加
$('.slick-slider').append('<div class="slick-scrollbar"><div class="slick-scrollbar-thumb"></div></div>');

// スクロールバーの動きを制御
$('.news-inner').on('afterChange', function(event, slick, currentSlide){
var totalSlides = slick.slideCount;
var visibleSlides = slick.options.slidesToShow;
var scrollPercentage = (currentSlide / (totalSlides - visibleSlides)) * 100;
$('.slick-scrollbar-thumb').css('width', (visibleSlides / totalSlides) * 100 + '%');
$('.slick-scrollbar-thumb').css('transform', 'translateX(' + scrollPercentage + '%)');
});

// ドラッグでスクロールバーを動かす
var isDragging = false;
var startX;
var scrollStart;

$('.slick-scrollbar-thumb').on('mousedown', function(e) {
isDragging = true;
startX = e.pageX;
scrollStart = parseFloat($(this).css('transform').split(',')[4]) || 0;
$(document).on('mousemove', onDrag);
$(document).on('mouseup', stopDrag);
});

function onDrag(e) {
if (!isDragging) return;
var deltaX = e.pageX - startX;
var totalWidth = $('.slick-scrollbar').width();
var thumbWidth = $('.slick-scrollbar-thumb').width();
var maxScroll = totalWidth - thumbWidth;
var newScroll = Math.min(Math.max(scrollStart + deltaX, 0), maxScroll);
var scrollPercentage = newScroll / maxScroll;
var totalSlides = $('.news-inner').slick('getSlick').slideCount;
var visibleSlides = $('.news-inner').slick('getSlick').options.slidesToShow;
var newSlide = Math.round(scrollPercentage * (totalSlides - visibleSlides));
$('.news-inner').slick('slickGoTo', newSlide, true);
}

function stopDrag() {
isDragging = false;
$(document).off('mousemove', onDrag);
$(document).off('mouseup', stopDrag);
}

// 矢印クリックでスライドを移動
$('.left-arrow').on('click', function() {
    $('.news-inner').slick('slickPrev');
    });
    
    $('.right-arrow').on('click', function() {
    $('.news-inner').slick('slickNext');
});

// カルーセル
$('.pic-inner').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: true, // 矢印を表示
    autoplay: true, // 自動スクロールを有効にする
    autoplaySpeed: 2000, // 自動スクロールの速度（ミリ秒）
    prevArrow: '<button type="button" class="slick-prev">←</button>', // カスタムの前の矢印
    nextArrow: '<button type="button" class="slick-next">→</button>' // カスタムの次の矢印
    });

});


