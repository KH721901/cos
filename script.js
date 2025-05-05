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

  $('.news-inner').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: true, // 矢印を表示
    autoplay: true, // 自動スクロールを有効にする
    autoplaySpeed: 2000, // 自動スクロールの速度（ミリ秒）
    prevArrow: '<button type="button" class="slick-prev">←</button>', // カスタムの前の矢印
    nextArrow: '<button type="button" class="slick-next">→</button>' // カスタムの次の矢印
});



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

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 600) { // 50はスクロール量の例です。調整してください。
    $('.logo,.menu-image').addClass('black');
    } else {
    $('.logo,.menu-image').removeClass('black');
    }
});

$(window).on('scroll', function() {
    $('.news, .products,.brand,.pic,.makeup').each(function() {
    var $this = $(this);
    var sectionTop = $this.offset().top;
    var sectionBottom = sectionTop + $this.outerHeight();
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    
    // セクションが表示領域に入ったときにフェードイン
    if (scrollTop + windowHeight > sectionTop && scrollTop < sectionBottom) {
    $this.addClass('fade-in');
    } else {
    // セクションが表示領域から完全に出たときにクラスを削除
    $this.removeClass('fade-in');
    }
    });
    });
    });

  
    