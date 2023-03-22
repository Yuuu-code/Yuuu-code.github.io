$(function(){
  let btn = $('.hamburger__btn')
  $('.hamburger__btn , .overlay, header-nav uh li a').on('click', function(){
    btn.toggleClass("open");
    $('main').toggleClass("open");
    $('header').toggleClass("open");
    $('footer').toggleClass("open");
    $('.overlay').toggleClass("open");
    if(btn.hasClass("open")){
      btn.attr('src','https://raw.githubusercontent.com/Yuuu-code/Yuuu-code.github.io/b881af8912d3accb8cbd9152291d61cae11f5141/batsu.svg')
    } else {
      btn.attr('src','https://raw.githubusercontent.com/Yuuu-code/Yuuu-code.github.io/b881af8912d3accb8cbd9152291d61cae11f5141/hamburger.svg')
    }
  });

  $(".header-nav ul li a").on("click", function () {
    $('main').removeClass("open");
    $('header').removeClass("open");
    $('footer').removeClass("open");
    $('.overlay').removeClass("open");
    if(btn.hasClass("open")){
      btn.attr('src','https://raw.githubusercontent.com/Yuuu-code/Yuuu-code.github.io/b881af8912d3accb8cbd9152291d61cae11f5141/batsu.svg')
    } else {
      btn.attr('src','https://raw.githubusercontent.com/Yuuu-code/Yuuu-code.github.io/b881af8912d3accb8cbd9152291d61cae11f5141/hamburger.svg')
    }
  });

  const swiper = new Swiper('.swiper', {
    // trueでスライダーがループするようになる。
    loop: true,
    // ループ時に何枚のスライドを複製するかを指定。slidesPerView: 'auto'とloopを併用する場合は、このオプションが必要。
    loopedSlides: '2',
    // 一度に何枚のスライドを表示するかを指定。'auto'にすると、各スライドが持つ本来の横幅が指定される。
    slidesPerView: "auto",
    // スライドが切り替わる速度を指定。
    speed: 8000,
    // スライダーが自動再生するようになる。delay…スライドが表示されてから、次のスライドに移動するまでの停止時間を指定。停止させたくないので、0にしておく。disableOnInteraction…falseにすると、ユーザーがスライドをドラッグやスワイプしても、すぐに自動再生が再開する。
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      // クリックできるようにする。
      clickable: true,
    },
  });

  // アコーディオン
  $('.faqs-ac__title').on('click', function() {
    $(this).next().slideToggle();
    $(this).toggleClass("open");
  });

  // スムーススクロール
  let headerHeight = $('header').outerHeight();
  $('a[href^="#"]').click(function(){
		// 移動速度を指定（ミリ秒）
    let speed = 300;
		// aタグのhrefを取得
    let id = $(this).attr('href');
		//idの値が#のみだったらtarget値をhtmlタグ、違う場合はtarget値をidの値にする
    let target = $("#" == id ? 'html' : id);
		//  位置を取得
    let position = target.offset().top - headerHeight;
    $('html, body').animate({
      scrollTop:position
    },
    speed
    );
    return false;
  });

  // to-top
  const float = $('.to-top');
  float.hide();
  $(window).scroll(function(){
    if($(this).scrollTop() > 200){
      float.fadeIn();
    }else{
      float.fadeOut();
    }
  });

  // google form
  let $form = $('#js-form')
  $form.submit(function(e) { 
    $.ajax({ 
    url: $form.attr('action'), 
    data: $form.serialize(), 
    type: "POST", 
    dataType: "xml", 
    statusCode: { 
        0: function() { 
          //送信に成功したときの処理 
          $form.slideUp()
          $('#js-success').slideDown()
        }, 
        200: function() { 
          //送信に失敗したときの処理 
          $form.slideUp()
          $('#js-error').slideDown()
        }
      } 
    });
    return false; 
  }); 

  // formの入力確認
  let $submit = $('#js-submit')
  // 指定した要素の中身が変更（入力）された時
  $('#js-form input').on('change', function() {
    if(
      // 指定した要素のvalueが空ではない
      $('#js-form input[type="text"]').val() !== "" &&
      // 指定した要素がチェックされている
      $('#js-form input[name="entry.1903435531"]').prop('checked') === true
    ) {
			// 全て入力された時
			$submit.prop('disabled', false)
      $submit.addClass('is-active')
    } else {
			// 入力されていない時
			$submit.prop('disabled', true)
      $submit.removeClass('is-active')
    }
  })

});


