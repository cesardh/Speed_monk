// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree.




$(document).ready(function() {

  var templo = new Parallax( $('.templo'), -0.02);
  var logo = new Parallax( $('.logo'), -0.07);
  var monje = new Parallax( $('.monje'), -0.09);
  var globoVideo = new Parallax( $('.g_video'), -0.12);
  var globoPlay = new Parallax( $('.g_play'), -0.12);
  var bambu1 = new Parallax( $('.bambu1'), -0.15);
  var bambu2 = new Parallax( $('.bambu2'), -0.15);

  var globo = [];
  var globoPos = [
    [10, 30, 5],
    [5, 37, 10],
    [4, 60, 13],
    [8, 10, 70],
    [5, 25, 60]
  ];



  for (var i = 0; i < 5; i++) {

    $('.globo' + i).css({
      width: globoPos[i][0] + '%',
      right: globoPos[i][1] + '%',
      top: globoPos[i][2] + '%'
    });

    var random = Math.random() * 0.15 + 0.05;
    globo[i] = new Parallax( $('.globo' + i)  , -random);


  };



  $('#wrapper').mousemove(function(event){

    var wcenter = $(window).width()/2;
    var hcenter = $(window).height()/2;
  	mx = event.pageX - wcenter;
  	my = event.pageY - hcenter;

    monje.mover();
    logo.mover();
    templo.mover();
    globoVideo.mover();
    globoPlay.mover();
    bambu1.mover();
    bambu2.mover();

    for (var i = 0; i < globo.length; i++) {
      //globo[i].vy = -globo[i].vx * 2;
      globo[i].mover()
    }

  })


});

var mx;
var my;

function Parallax(elem, vel){
  this.vx = vel;
  this.vy = vel/2
  this.elem = elem;
  this.elemX = parseInt(this.elem.position().left);
  this.elemY = parseInt(this.elem.position().top);

  this.mover = function(){
    this.posX = this.elemX + mx * this.vx;
    this.posY = this.elemY + my * this.vy;

    this.elem.css('left', this.posX + 'px');
    this.elem.css('top', this.posY + 'px');
  }
}









