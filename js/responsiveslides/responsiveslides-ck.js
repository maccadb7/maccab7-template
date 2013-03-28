/*! ResponsiveSlides.js v1.53
 * http://responsiveslides.com
 * http://viljamis.com
 *
 * Copyright (c) 2011-2012 @viljamis
 * Available under the MIT license
 *//*jslint browser: true, sloppy: true, vars: true, plusplus: true, indent: 2 */(function(e,t,n){e.fn.responsiveSlides=function(r){var s=e.extend({auto:!0,speed:2500,timeout:5e3,pager:!1,nav:!0,random:!1,pause:!0,pauseControls:!0,prevText:"Previous",nextText:"Next",maxwidth:"",navContainer:"",manualControls:"",namespace:"rslides",before:function(){},after:function(){}},r);return this.each(function(){n++;var o=e(this),u,a,f,l,c,h,p=0,d=o.children(),v=d.size(),m=parseFloat(s.speed),g=parseFloat(s.timeout),y=parseFloat(s.maxwidth),b=s.namespace,w=b+n,E=b+"_nav "+w+"_nav",S=b+"_here",x=w+"_on",T=w+"_s",N=e("<ul class='"+b+"_tabs "+w+"_tabs' />"),C={"float":"left",position:"relative",opacity:1,zIndex:2},k={"float":"none",position:"absolute",opacity:0,zIndex:1},L=function(){var e=document.body||document.documentElement,t=e.style,n="transition";if(typeof t[n]=="string")return!0;u=["Moz","Webkit","Khtml","O","ms"];n=n.charAt(0).toUpperCase()+n.substr(1);var r;for(r=0;r<u.length;r++)if(typeof t[u[r]+n]=="string")return!0;return!1}(),A=function(t){s.before();if(L){d.removeClass(x).css(k).eq(t).addClass(x).css(C);p=t;setTimeout(function(){s.after()},m)}else d.stop().fadeOut(m,function(){e(this).removeClass(x).css(k).css("opacity",1)}).eq(t).fadeIn(m,function(){e(this).addClass(x).css(C);s.after();p=t})};if(s.random){d.sort(function(){return Math.round(Math.random())-.5});o.empty().append(d)}d.each(function(e){this.id=T+e});o.addClass(b+" "+w);r&&r.maxwidth&&o.css("max-width",y);d.hide().css(k).eq(0).addClass(x).css(C).show();L&&d.show().css({"-webkit-transition":"opacity "+m+"ms ease-in-out","-moz-transition":"opacity "+m+"ms ease-in-out","-o-transition":"opacity "+m+"ms ease-in-out",transition:"opacity "+m+"ms ease-in-out"});if(d.size()>1){if(g<m+100)return;if(s.pager&&!s.manualControls){var O=[];d.each(function(e){var t=e+1;O+="<li><a href='#' class='"+T+t+"'>"+t+"</a>"+"</li>"});N.append(O);r.navContainer?e(s.navContainer).append(N):o.after(N)}if(s.manualControls){N=e(s.manualControls);N.addClass(b+"_tabs "+w+"_tabs")}(s.pager||s.manualControls)&&N.find("li").each(function(t){e(this).addClass(T+(t+1))});if(s.pager||s.manualControls){h=N.find("a");a=function(e){h.closest("li").removeClass(S).eq(e).addClass(S)}}if(s.auto){f=function(){c=setInterval(function(){d.stop(!0,!0);var e=p+1<v?p+1:0;(s.pager||s.manualControls)&&a(e);A(e)},g)};f()}l=function(){if(s.auto){clearInterval(c);f()}};s.pause&&o.hover(function(){clearInterval(c)},function(){l()});if(s.pager||s.manualControls){h.bind("click",function(t){t.preventDefault();s.pauseControls||l();var n=h.index(this);if(p===n||e("."+x).queue("fx").length)return;a(n);A(n)}).eq(0).closest("li").addClass(S);s.pauseControls&&h.hover(function(){clearInterval(c)},function(){l()})}if(s.nav){var M="<a href='#' class='"+E+" prev'>"+s.prevText+"</a>"+"<a href='#' class='"+E+" next'>"+s.nextText+"</a>";r.navContainer?e(s.navContainer).append(M):o.after(M);var _=e("."+w+"_nav"),D=_.filter(".prev");_.bind("click",function(t){t.preventDefault();var n=e("."+x);if(n.queue("fx").length)return;var r=d.index(n),i=r-1,o=r+1<v?p+1:0;A(e(this)[0]===D[0]?i:o);(s.pager||s.manualControls)&&a(e(this)[0]===D[0]?i:o);s.pauseControls||l()});s.pauseControls&&_.hover(function(){clearInterval(c)},function(){l()})}}if(typeof document.body.style.maxWidth=="undefined"&&r.maxwidth){var P=function(){o.css("width","100%");o.width()>y&&o.css("width",y)};P();e(t).bind("resize",function(){P()})}})}})(jQuery,this,0);