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

  
});
