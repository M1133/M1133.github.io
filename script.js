var openShowreel = function() {
  var wheelBtn = $(".wheel-btn");
  var sectionMenuBlock = $(".section");
  var closeSection = $(".section .section-close");

  wheelBtn.on("click", function (e) {
    e.preventDefault();
    sectionMenuBlock.addClass("open");
    if($('.case-study-images li video').length > 0) {
      $('.case-study-images li video')[0].play();
    }
  });
  closeSection.on("click", function (e) {
    e.preventDefault();
    sectionMenuBlock.removeClass("open");
    if($('.case-study-images li video').length) {
      $('.case-study-images li video')[0].pause();
    }
  });
};

var openInfo = function() {
  var infoBtn = $(".contact-us");
  var sectionInfo = $(".popup-contact");
  var closeSection = $(".popup-contact .section-close");
  var scene = $(".scene");

  infoBtn.on("click", function (e) {
    e.preventDefault();
    sectionInfo.addClass("open");
    scene.addClass("open");
  });
  sectionInfo.on("click", function (event) {
    var e = document.querySelector('.popup-contact__half');
    if (!e.contains(event.target)) {
      sectionInfo.removeClass("open");
      scene.removeClass("open");
    }
  });
  closeSection.on("click", function (e) {
    e.preventDefault();
    sectionInfo.removeClass("open");
    scene.removeClass("open");
  });
};

var contactLink = function() {
  var contactBtn = $(".contact-link");
  var sectionMenuBlock = $(".section");
  var sectionInfo = $(".popup-contact");
  var scene = $(".scene");

  contactBtn.on("click", function (e) {
    e.preventDefault();
    sectionMenuBlock.removeClass("open");
    if($('.case-study-images li video').length > 0) {
      $('.case-study-images li video')[0].pause();
    }
    sectionInfo.addClass("open");
    scene.addClass("open");
  });
}

function showWheel() {

  /* Hero Case study images */
  $('.case-study-name').on('mouseenter', function() {
    $('.case-study-name.active').removeClass('active');
    $('.case-study-images li.show').removeClass("show");
    $('.case-study-images li').eq($(this).index()).addClass("show");
    $('.case-study-name').eq($(this).index()).addClass('active');
    $('.case-study-images li video')[0].pause();
    $('.case-study-images li').eq($(this).index()).find("video")[0].play();
  });

  $('.case-study-name:nth-child(1)').trigger('mouseenter');
  
}

var sendForm = function() {
  //E-mail Ajax Send
  $(".popup-contact form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Thank you!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
};

var btnFormAnimation = function(){
  var animateButton = function(e) {
    var bubblyButtons = $(".contact100-form-btn");
    // e.preventDefault;
    bubblyButtons.removeClass("animate");
    bubblyButtons.addClass("animate");
    setTimeout(function(){
      bubblyButtons.removeClass("animate");
    },700);

  };

  var bubblyButtons = document.getElementsByClassName("contact100-form-btn");

  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }
};

var magicBlock = function() {
  if($(window).width() > 1200 && $(".magic").length > 0) {
    var $magic = $(".magic"),
        magicWHalf = $magic.width() / 2;
    $magic.show();
    $(document).on("mousemove", function(e) {
      $magic.css({"left": e.pageX - magicWHalf, "top": e.pageY - magicWHalf});
    });
  } else {
    $(".magic").hide();
  }

}

$(document).ready(function() {
  magicBlock();
  openShowreel();
  showWheel();
  openInfo();
  sendForm();
  contactLink();
  btnFormAnimation();
  $( window ).resize(function() {
    magicBlock();
  });

});