/*!
 * jQuery JavaScript Library v3.1.0
 * https://jquery.com/
 *
 * Date: 2016-09-16
 * Version: 0.1.0
 */
;(function ($) {
  "use strict";
  if ($.fn.valign){return;}
  var valignmethods = {
    init : function(options) {
      var settings = $.extend({
        vAlign : 'middle',
        hAlign : 'center',
        otherCSS : {}
      }, options );
      return this.each(function() {
        var outerCell = $(this);
        if(typeof outerCell !== 'undefined' && outerCell.is('div')){
          if(!outerCell.hasClass('v-align-this')){
            outerCell.addClass('v-align-this');
          }
          var backup = $('<div id="temp">').append(outerCell.clone()).html();
          outerCell.data('backup',backup);
          $('#temp').remove();
          var html = outerCell.html() || '';
          var innerCell = $('<div>');
          if(outerCell.data('valign')){
            settings.vAlign = outerCell.data('valign');
          }
          if(outerCell.data('halign')){
            settings.hAlign = outerCell.data('halign');
          }
          innerCell.css({
            'display':'table-cell',
            'vertical-align':settings.vAlign,
            'text-align':settings.hAlign
          });
          $.each(settings.otherCSS, function(k,v){
            if(typeof k === 'string' && typeof v === 'string' && k!= 'display' && k != 'vertical-align' && k != 'text-align'){
              innerCell.css(k,v);
            }
          });
          outerCell.css({
            'display':'table'
          });
          innerCell.html(html);
          outerCell.html(innerCell);
          return outerCell;
        }
      });
    },
    destroy : function(){
      return this.each(function() {
        var backup = $(this).data('backup');
        $(this).replaceWith(backup).removeClass('v-align-this').removeAttr('data-valign').removeAttr('data-halign');
      });
    }
  };
  $.fn.valign = function(params) {
    if(valignmethods[params]) {
      return valignmethods[params].apply(this,Array.prototype.slice.call(arguments,1));
    }else if(typeof params === 'object' || !params) {
      return valignmethods.init.apply(this,arguments);
    }
  }
}(jQuery));
$(function(){$('.v-align-this').valign();});
