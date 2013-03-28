// Camera slideshow v1.3.4 - a jQuery slideshow with many effects, transitions, easy to customize, using canvas and mobile ready, based on jQuery 1.4+
// Copyright (c) 2012 by Manuel Masia - www.pixedelic.com
// Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
(function(e){e.fn.camera=function(t,n){function i(){if(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i))return!0}function D(){var t=e(y).width();e("li",y).removeClass("camera_visThumb");e("li",y).each(function(){var n=e(this).position(),r=e("ul",y).outerWidth(),i=e("ul",y).offset().left,s=e("> div",y).offset().left,o=s-i;o>0?e(".camera_prevThumbs",J).removeClass("hideNav"):e(".camera_prevThumbs",J).addClass("hideNav");r-o>t?e(".camera_nextThumbs",J).removeClass("hideNav"):e(".camera_nextThumbs",J).addClass("hideNav");var u=n.left,a=n.left+e(this).width();a-o<=t&&u-o>=0&&e(this).addClass("camera_visThumb")})}function B(){function r(){b=s.width();if(t.height.indexOf("%")!=-1){var n=Math.round(b/(100/parseFloat(t.height)));t.minHeight!=""&&n<parseFloat(t.minHeight)?w=parseFloat(t.minHeight):w=n;s.css({height:w})}else if(t.height=="auto")w=s.height();else{w=parseFloat(t.height);s.css({height:w})}e(".camerarelative",l).css({width:b,height:w});e(".imgLoaded",l).each(function(){var n=e(this),r=n.attr("width"),i=n.attr("height"),s=n.index(),o,u,a=n.attr("data-alignment"),f=n.attr("data-portrait");if(typeof a=="undefined"||a===!1||a==="")a=t.alignment;if(typeof f=="undefined"||f===!1||f==="")f=t.portrait;if(f==0||f=="false")if(r/i<b/w){var l=b/r,c=Math.abs(w-i*l)*.5;switch(a){case"topLeft":o=0;break;case"topCenter":o=0;break;case"topRight":o=0;break;case"centerLeft":o="-"+c+"px";break;case"center":o="-"+c+"px";break;case"centerRight":o="-"+c+"px";break;case"bottomLeft":o="-"+c*2+"px";break;case"bottomCenter":o="-"+c*2+"px";break;case"bottomRight":o="-"+c*2+"px"}n.css({height:i*l,"margin-left":0,"margin-right":0,"margin-top":o,position:"absolute",visibility:"visible",width:b})}else{var l=w/i,c=Math.abs(b-r*l)*.5;switch(a){case"topLeft":u=0;break;case"topCenter":u="-"+c+"px";break;case"topRight":u="-"+c*2+"px";break;case"centerLeft":u=0;break;case"center":u="-"+c+"px";break;case"centerRight":u="-"+c*2+"px";break;case"bottomLeft":u=0;break;case"bottomCenter":u="-"+c+"px";break;case"bottomRight":u="-"+c*2+"px"}n.css({height:w,"margin-left":u,"margin-right":u,"margin-top":0,position:"absolute",visibility:"visible",width:r*l})}else if(r/i<b/w){var l=w/i,c=Math.abs(b-r*l)*.5;switch(a){case"topLeft":u=0;break;case"topCenter":u=c+"px";break;case"topRight":u=c*2+"px";break;case"centerLeft":u=0;break;case"center":u=c+"px";break;case"centerRight":u=c*2+"px";break;case"bottomLeft":u=0;break;case"bottomCenter":u=c+"px";break;case"bottomRight":u=c*2+"px"}n.css({height:w,"margin-left":u,"margin-right":u,"margin-top":0,position:"absolute",visibility:"visible",width:r*l})}else{var l=b/r,c=Math.abs(w-i*l)*.5;switch(a){case"topLeft":o=0;break;case"topCenter":o=0;break;case"topRight":o=0;break;case"centerLeft":o=c+"px";break;case"center":o=c+"px";break;case"centerRight":o=c+"px";break;case"bottomLeft":o=c*2+"px";break;case"bottomCenter":o=c*2+"px";break;case"bottomRight":o=c*2+"px"}n.css({height:i*l,"margin-left":0,"margin-right":0,"margin-top":o,position:"absolute",visibility:"visible",width:b})}})}var n;if(P==1){clearTimeout(n);n=setTimeout(r,200)}else r();P=!0}function Q(e){for(var t,n,r=e.length;r;t=parseInt(Math.random()*r),n=e[--r],e[r]=e[t],e[t]=n);return e}function G(e){return Math.ceil(e)==Math.floor(e)}function ut(){if(e(y).length&&!e(g).length){var t=e(y).outerWidth(),n=e("ul > li",y).outerWidth(),r=e("li.cameracurrent",y).length?e("li.cameracurrent",y).position():"",i=e("ul > li",y).length*e("ul > li",y).outerWidth(),o=e("ul",y).offset().left,u=e("> div",y).offset().left,a;o<0?a="-"+(u-o):a=u-o;if(ot==1){e("ul",y).width(e("ul > li",y).length*e("ul > li",y).outerWidth());e(y).length&&!e(g).lenght&&s.css({marginBottom:e(y).outerHeight()});D();e("ul",y).width(e("ul > li",y).length*e("ul > li",y).outerWidth());e(y).length&&!e(g).lenght&&s.css({marginBottom:e(y).outerHeight()})}ot=!1;var f=e("li.cameracurrent",y).length?r.left:"",l=e("li.cameracurrent",y).length?r.left+e("li.cameracurrent",y).outerWidth():"";f<e("li.cameracurrent",y).outerWidth()&&(f=0);if(l-a>t)f+t<i?e("ul",y).animate({"margin-left":"-"+f+"px"},500,D):e("ul",y).animate({"margin-left":"-"+(e("ul",y).outerWidth()-t)+"px"},500,D);else if(f-a<0)e("ul",y).animate({"margin-left":"-"+f+"px"},500,D);else{e("ul",y).css({"margin-left":"auto","margin-right":"auto"});setTimeout(D,100)}}}function at(){tt=0;var n=e(".camera_bar_cont",J).width(),r=e(".camera_bar_cont",J).height();if(u!="pie")switch(V){case"leftToRight":e("#"+a).css({right:n});break;case"rightToLeft":e("#"+a).css({left:n});break;case"topToBottom":e("#"+a).css({bottom:r});break;case"bottomToTop":e("#"+a).css({top:r})}else rt.clearRect(0,0,t.pieDiameter,t.pieDiameter)}function ft(n){f.addClass("camerasliding");z=!1;var r=parseFloat(e("div.cameraSlide.cameracurrent",l).index());if(n>0)var c=n-1;else if(r==k-1)var c=0;else var c=r+1;var h=e(".cameraSlide:eq("+c+")",l),p=e(".cameraSlide:eq("+(c+1)+")",l).addClass("cameranext");r!=c+1&&p.hide();e(".cameraContent",o).fadeOut(600);e(".camera_caption",o).show();e(".camerarelative",h).append(e("> div ",f).eq(c).find("> div.camera_effected"));e(".camera_target_content .cameraContent:eq("+c+")",s).append(e("> div ",f).eq(c).find("> div"));if(!e(".imgLoaded",h).length){var d=E[c],v=new Image;v.src=d+"?"+(new Date).getTime();h.css("visibility","hidden");h.prepend(e(v).attr("class","imgLoaded").css("visibility","hidden"));var m,S;if(!e(v).get(0).complete||m=="0"||S=="0"||typeof m=="undefined"||m===!1||typeof S=="undefined"||S===!1){e(".camera_loader",s).delay(500).fadeIn(400);v.onload=function(){m=v.naturalWidth;S=v.naturalHeight;e(v).attr("data-alignment",N[c]).attr("data-portrait",T[c]);e(v).attr("width",m);e(v).attr("height",S);l.find(".cameraSlide_"+c).hide().css("visibility","visible");B();ft(c+1)}}}else{if(E.length>c+1&&!e(".imgLoaded",p).length){var x=E[c+1],C=new Image;C.src=x+"?"+(new Date).getTime();p.prepend(e(C).attr("class","imgLoaded").css("visibility","hidden"));C.onload=function(){m=C.naturalWidth;S=C.naturalHeight;e(C).attr("data-alignment",N[c+1]).attr("data-portrait",T[c+1]);e(C).attr("width",m);e(C).attr("height",S);B()}}t.onLoaded.call(this);if(e(".camera_loader",s).is(":visible"))e(".camera_loader",s).fadeOut(400);else{e(".camera_loader",s).css({visibility:"hidden"});e(".camera_loader",s).fadeOut(400,function(){e(".camera_loader",s).css({visibility:"visible"})})}var L=t.rows,A=t.cols,M=1,_=0,D,P,H,I,q,R=new Array("simpleFade","curtainTopLeft","curtainTopRight","curtainBottomLeft","curtainBottomRight","curtainSliceLeft","curtainSliceRight","blindCurtainTopLeft","blindCurtainTopRight","blindCurtainBottomLeft","blindCurtainBottomRight","blindCurtainSliceBottom","blindCurtainSliceTop","stampede","mosaic","mosaicReverse","mosaicRandom","mosaicSpiral","mosaicSpiralReverse","topLeftBottomRight","bottomRightTopLeft","bottomLeftTopRight","topRightBottomLeft","scrollLeft","scrollRight","scrollTop","scrollBottom","scrollHorz");marginLeft=0,marginTop=0,opacityOnGrid=0;t.opacityOnGrid==1?opacityOnGrid=0:opacityOnGrid=1;var U=e(" > div",f).eq(c).attr("data-fx");i()&&t.mobileFx!=""&&t.mobileFx!="default"?I=t.mobileFx:typeof U!="undefined"&&U!==!1&&U!=="default"?I=U:I=t.fx;if(I=="random"){I=Q(R);I=I[0]}else{I=I;if(I.indexOf(",")>0){I=I.replace(/ /g,"");I=I.split(",");I=Q(I);I=I[0]}}dataEasing=e(" > div",f).eq(c).attr("data-easing");mobileEasing=e(" > div",f).eq(c).attr("data-mobileEasing");i()&&t.mobileEasing!=""&&t.mobileEasing!="default"?typeof mobileEasing!="undefined"&&mobileEasing!==!1&&mobileEasing!=="default"?q=mobileEasing:q=t.mobileEasing:typeof dataEasing!="undefined"&&dataEasing!==!1&&dataEasing!=="default"?q=dataEasing:q=t.easing;D=e(" > div",f).eq(c).attr("data-slideOn");if(typeof D!="undefined"&&D!==!1)X=D;else if(t.slideOn=="random"){var X=new Array("next","prev");X=Q(X);X=X[0]}else X=t.slideOn;var G=e(" > div",f).eq(c).attr("data-time");typeof G!="undefined"&&G!==!1&&G!==""?P=parseFloat(G):P=t.time;var Y=e(" > div",f).eq(c).attr("data-transPeriod");typeof Y!="undefined"&&Y!==!1&&Y!==""?H=parseFloat(Y):H=t.transPeriod;if(!e(f).hasClass("camerastarted")){I="simpleFade";X="next";q="";H=400;e(f).addClass("camerastarted")}switch(I){case"simpleFade":A=1;L=1;break;case"curtainTopLeft":t.slicedCols==0?A=t.cols:A=t.slicedCols;L=1;break;case"curtainTopRight":t.slicedCols==0?A=t.cols:A=t.slicedCols;L=1;break;case"curtainBottomLeft":t.slicedCols==0?A=t.cols:A=t.slicedCols;L=1;break;case"curtainBottomRight":t.slicedCols==0?A=t.cols:A=t.slicedCols;L=1;break;case"curtainSliceLeft":t.slicedCols==0?A=t.cols:A=t.slicedCols;L=1;break;case"curtainSliceRight":t.slicedCols==0?A=t.cols:A=t.slicedCols;L=1;break;case"blindCurtainTopLeft":t.slicedRows==0?L=t.rows:L=t.slicedRows;A=1;break;case"blindCurtainTopRight":t.slicedRows==0?L=t.rows:L=t.slicedRows;A=1;break;case"blindCurtainBottomLeft":t.slicedRows==0?L=t.rows:L=t.slicedRows;A=1;break;case"blindCurtainBottomRight":t.slicedRows==0?L=t.rows:L=t.slicedRows;A=1;break;case"blindCurtainSliceTop":t.slicedRows==0?L=t.rows:L=t.slicedRows;A=1;break;case"blindCurtainSliceBottom":t.slicedRows==0?L=t.rows:L=t.slicedRows;A=1;break;case"stampede":_="-"+H;break;case"mosaic":_=t.gridDifference;break;case"mosaicReverse":_=t.gridDifference;break;case"mosaicRandom":break;case"mosaicSpiral":_=t.gridDifference;M=1.7;break;case"mosaicSpiralReverse":_=t.gridDifference;M=1.7;break;case"topLeftBottomRight":_=t.gridDifference;M=6;break;case"bottomRightTopLeft":_=t.gridDifference;M=6;break;case"bottomLeftTopRight":_=t.gridDifference;M=6;break;case"topRightBottomLeft":_=t.gridDifference;M=6;break;case"scrollLeft":A=1;L=1;break;case"scrollRight":A=1;L=1;break;case"scrollTop":A=1;L=1;break;case"scrollBottom":A=1;L=1;break;case"scrollHorz":A=1;L=1}var Z=0,et=L*A,it=b-Math.floor(b/A)*A,st=w-Math.floor(w/L)*L,ot,lt,ct=0,ht=0,pt=new Array,dt=new Array,vt=new Array;while(Z<et){pt.push(Z);dt.push(Z);O.append('<div class="cameraappended" style="display:none; overflow:hidden; position:absolute; z-index:1000" />');var mt=e(".cameraappended:eq("+Z+")",l);I=="scrollLeft"||I=="scrollRight"||I=="scrollTop"||I=="scrollBottom"||I=="scrollHorz"?W.eq(c).clone().show().appendTo(mt):X=="next"?W.eq(c).clone().show().appendTo(mt):W.eq(r).clone().show().appendTo(mt);Z%A<it?ot=1:ot=0;Z%A==0&&(ct=0);Math.floor(Z/A)<st?lt=1:lt=0;mt.css({height:Math.floor(w/L+lt+1),left:ct,top:ht,width:Math.floor(b/A+ot+1)});e("> .cameraSlide",mt).css({height:w,"margin-left":"-"+ct+"px","margin-top":"-"+ht+"px",width:b});ct=ct+mt.width()-1;Z%A==A-1&&(ht=ht+mt.height()-1);Z++}switch(I){case"curtainTopLeft":break;case"curtainBottomLeft":break;case"curtainSliceLeft":break;case"curtainTopRight":pt=pt.reverse();break;case"curtainBottomRight":pt=pt.reverse();break;case"curtainSliceRight":pt=pt.reverse();break;case"blindCurtainTopLeft":break;case"blindCurtainBottomLeft":pt=pt.reverse();break;case"blindCurtainSliceTop":break;case"blindCurtainTopRight":break;case"blindCurtainBottomRight":pt=pt.reverse();break;case"blindCurtainSliceBottom":pt=pt.reverse();break;case"stampede":pt=Q(pt);break;case"mosaic":break;case"mosaicReverse":pt=pt.reverse();break;case"mosaicRandom":pt=Q(pt);break;case"mosaicSpiral":var gt=L/2,yt,bt,wt,Et=0;for(wt=0;wt<gt;wt++){bt=wt;for(yt=wt;yt<A-wt-1;yt++)vt[Et++]=bt*A+yt;yt=A-wt-1;for(bt=wt;bt<L-wt-1;bt++)vt[Et++]=bt*A+yt;bt=L-wt-1;for(yt=A-wt-1;yt>wt;yt--)vt[Et++]=bt*A+yt;yt=wt;for(bt=L-wt-1;bt>wt;bt--)vt[Et++]=bt*A+yt}pt=vt;break;case"mosaicSpiralReverse":var gt=L/2,yt,bt,wt,Et=et-1;for(wt=0;wt<gt;wt++){bt=wt;for(yt=wt;yt<A-wt-1;yt++)vt[Et--]=bt*A+yt;yt=A-wt-1;for(bt=wt;bt<L-wt-1;bt++)vt[Et--]=bt*A+yt;bt=L-wt-1;for(yt=A-wt-1;yt>wt;yt--)vt[Et--]=bt*A+yt;yt=wt;for(bt=L-wt-1;bt>wt;bt--)vt[Et--]=bt*A+yt}pt=vt;break;case"topLeftBottomRight":for(var bt=0;bt<L;bt++)for(var yt=0;yt<A;yt++)vt.push(yt+bt);dt=vt;break;case"bottomRightTopLeft":for(var bt=0;bt<L;bt++)for(var yt=0;yt<A;yt++)vt.push(yt+bt);dt=vt.reverse();break;case"bottomLeftTopRight":for(var bt=L;bt>0;bt--)for(var yt=0;yt<A;yt++)vt.push(yt+bt);dt=vt;break;case"topRightBottomLeft":for(var bt=0;bt<L;bt++)for(var yt=A;yt>0;yt--)vt.push(yt+bt);dt=vt}e.each(pt,function(n,i){function d(){e(this).addClass("cameraeased");e(".cameraeased",l).length>=0&&e(y).css({visibility:"visible"});if(e(".cameraeased",l).length==et){ut();e(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom",o).each(function(){e(this).css("visibility","hidden")});W.eq(c).show().css("z-index","999").removeClass("cameranext").addClass("cameracurrent");W.eq(r).css("z-index","1").removeClass("cameracurrent");e(".cameraContent",o).eq(c).addClass("cameracurrent");r>=0&&e(".cameraContent",o).eq(r).removeClass("cameracurrent");t.onEndTransition.call(this);e("> div",f).eq(c).attr("data-video")!="hide"&&e(".cameraContent.cameracurrent .imgFake",o).length&&e(".cameraContent.cameracurrent .imgFake",o).click();var n=W.eq(c).find(".fadeIn").length,i=e(".cameraContent",o).eq(c).find(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom").length;n!=0&&e(".cameraSlide.cameracurrent .fadeIn",o).each(function(){if(e(this).attr("data-easing")!="")var t=e(this).attr("data-easing");else var t=q;var r=e(this);if(typeof r.attr("data-outerWidth")=="undefined"||r.attr("data-outerWidth")===!1||r.attr("data-outerWidth")===""){var i=r.outerWidth();r.attr("data-outerWidth",i)}else var i=r.attr("data-outerWidth");if(typeof r.attr("data-outerHeight")=="undefined"||r.attr("data-outerHeight")===!1||r.attr("data-outerHeight")===""){var s=r.outerHeight();r.attr("data-outerHeight",s)}else var s=r.attr("data-outerHeight");var o=r.position(),u=o.left,a=o.top,f=r.attr("class"),l=r.index(),c=r.parents(".camerarelative").outerHeight(),h=r.parents(".camerarelative").outerWidth();f.indexOf("fadeIn")!=-1?r.animate({opacity:0},0).css("visibility","visible").delay(P/n*.1*(l-1)).animate({opacity:1},P/n*.15,t):r.css("visibility","visible")});e(".cameraContent.cameracurrent",o).show();i!=0&&e(".cameraContent.cameracurrent .moveFromLeft, .cameraContent.cameracurrent .moveFromRight, .cameraContent.cameracurrent .moveFromTop, .cameraContent.cameracurrent .moveFromBottom, .cameraContent.cameracurrent .fadeIn, .cameraContent.cameracurrent .fadeFromLeft, .cameraContent.cameracurrent .fadeFromRight, .cameraContent.cameracurrent .fadeFromTop, .cameraContent.cameracurrent .fadeFromBottom",o).each(function(){if(e(this).attr("data-easing")!="")var t=e(this).attr("data-easing");else var t=q;var n=e(this),r=n.position(),s=r.left,o=r.top,u=n.attr("class"),a=n.index(),f=n.outerHeight();if(u.indexOf("moveFromLeft")!=-1){n.css({left:"-"+b+"px",right:"auto"});n.css("visibility","visible").delay(P/i*.1*(a-1)).animate({left:r.left},P/i*.15,t)}else if(u.indexOf("moveFromRight")!=-1){n.css({left:b+"px",right:"auto"});n.css("visibility","visible").delay(P/i*.1*(a-1)).animate({left:r.left},P/i*.15,t)}else if(u.indexOf("moveFromTop")!=-1){n.css({top:"-"+w+"px",bottom:"auto"});n.css("visibility","visible").delay(P/i*.1*(a-1)).animate({top:r.top},P/i*.15,t,function(){n.css({top:"auto",bottom:0})})}else if(u.indexOf("moveFromBottom")!=-1){n.css({top:w+"px",bottom:"auto"});n.css("visibility","visible").delay(P/i*.1*(a-1)).animate({top:r.top},P/i*.15,t)}else if(u.indexOf("fadeFromLeft")!=-1){n.animate({opacity:0},0).css({left:"-"+b+"px",right:"auto"});n.css("visibility","visible").delay(P/i*.1*(a-1)).animate({left:r.left,opacity:1},P/i*.15,t)}else if(u.indexOf("fadeFromRight")!=-1){n.animate({opacity:0},0).css({left:b+"px",right:"auto"});n.css("visibility","visible").delay(P/i*.1*(a-1)).animate({left:r.left,opacity:1},P/i*.15,t)}else if(u.indexOf("fadeFromTop")!=-1){n.animate({opacity:0},0).css({top:"-"+w+"px",bottom:"auto"});n.css("visibility","visible").delay(P/i*.1*(a-1)).animate({top:r.top,opacity:1},P/i*.15,t,function(){n.css({top:"auto",bottom:0})})}else if(u.indexOf("fadeFromBottom")!=-1){n.animate({opacity:0},0).css({bottom:"-"+f+"px"});n.css("visibility","visible").delay(P/i*.1*(a-1)).animate({bottom:"0",opacity:1},P/i*.15,t)}else u.indexOf("fadeIn")!=-1?n.animate({opacity:0},0).css("visibility","visible").delay(P/i*.1*(a-1)).animate({opacity:1},P/i*.15,t):n.css("visibility","visible")});e(".cameraappended",l).remove();f.removeClass("camerasliding");W.eq(r).hide();var s=e(".camera_bar_cont",J).width(),h=e(".camera_bar_cont",J).height(),d;u!="pie"?d=.05:d=.005;e("#"+a).animate({opacity:t.loaderOpacity},200);j=setInterval(function(){f.hasClass("stopped")&&clearInterval(j);if(u!="pie"){if(tt<=1.002&&!f.hasClass("stopped")&&!f.hasClass("paused")&&!f.hasClass("hovered"))tt+=d;else if(tt<=1&&(f.hasClass("stopped")||f.hasClass("paused")||f.hasClass("stopped")||f.hasClass("hovered")))tt=tt;else if(!f.hasClass("stopped")&&!f.hasClass("paused")&&!f.hasClass("hovered")){clearInterval(j);K();e("#"+a).animate({opacity:0},200,function(){clearTimeout(F);F=setTimeout(at,p);ft();t.onStartLoading.call(this)})}switch(V){case"leftToRight":e("#"+a).animate({right:s-s*tt},P*d,"linear");break;case"rightToLeft":e("#"+a).animate({left:s-s*tt},P*d,"linear");break;case"topToBottom":e("#"+a).animate({bottom:h-h*tt},P*d,"linear");break;case"bottomToTop":e("#"+a).animate({bottom:h-h*tt},P*d,"linear")}}else{nt=tt;rt.clearRect(0,0,t.pieDiameter,t.pieDiameter);rt.globalCompositeOperation="destination-over";rt.beginPath();rt.arc(t.pieDiameter/2,t.pieDiameter/2,t.pieDiameter/2-t.loaderStroke,0,Math.PI*2,!1);rt.lineWidth=t.loaderStroke;rt.strokeStyle=t.loaderBgColor;rt.stroke();rt.closePath();rt.globalCompositeOperation="source-over";rt.beginPath();rt.arc(t.pieDiameter/2,t.pieDiameter/2,t.pieDiameter/2-t.loaderStroke,0,Math.PI*2*nt,!1);rt.lineWidth=t.loaderStroke-t.loaderPadding*2;rt.strokeStyle=t.loaderColor;rt.stroke();rt.closePath();if(tt<=1.002&&!f.hasClass("stopped")&&!f.hasClass("paused")&&!f.hasClass("hovered"))tt+=d;else if(tt<=1&&(f.hasClass("stopped")||f.hasClass("paused")||f.hasClass("hovered")))tt=tt;else if(!f.hasClass("stopped")&&!f.hasClass("paused")&&!f.hasClass("hovered")){clearInterval(j);K();e("#"+a+", .camera_canvas_wrap",J).animate({opacity:0},200,function(){clearTimeout(F);F=setTimeout(at,p);ft();t.onStartLoading.call(this)})}}},P*d)}}i%A<it?ot=1:ot=0;i%A==0&&(ct=0);Math.floor(i/A)<st?lt=1:lt=0;switch(I){case"simpleFade":height=w;width=b;opacityOnGrid=0;break;case"curtainTopLeft":height=0,width=Math.floor(b/A+ot+1),marginTop="-"+Math.floor(w/L+lt+1)+"px";break;case"curtainTopRight":height=0,width=Math.floor(b/A+ot+1),marginTop="-"+Math.floor(w/L+lt+1)+"px";break;case"curtainBottomLeft":height=0,width=Math.floor(b/A+ot+1),marginTop=Math.floor(w/L+lt+1)+"px";break;case"curtainBottomRight":height=0,width=Math.floor(b/A+ot+1),marginTop=Math.floor(w/L+lt+1)+"px";break;case"curtainSliceLeft":height=0,width=Math.floor(b/A+ot+1);i%2==0?marginTop=Math.floor(w/L+lt+1)+"px":marginTop="-"+Math.floor(w/L+lt+1)+"px";break;case"curtainSliceRight":height=0,width=Math.floor(b/A+ot+1);i%2==0?marginTop=Math.floor(w/L+lt+1)+"px":marginTop="-"+Math.floor(w/L+lt+1)+"px";break;case"blindCurtainTopLeft":height=Math.floor(w/L+lt+1),width=0,marginLeft="-"+Math.floor(b/A+ot+1)+"px";break;case"blindCurtainTopRight":height=Math.floor(w/L+lt+1),width=0,marginLeft=Math.floor(b/A+ot+1)+"px";break;case"blindCurtainBottomLeft":height=Math.floor(w/L+lt+1),width=0,marginLeft="-"+Math.floor(b/A+ot+1)+"px";break;case"blindCurtainBottomRight":height=Math.floor(w/L+lt+1),width=0,marginLeft=Math.floor(b/A+ot+1)+"px";break;case"blindCurtainSliceBottom":height=Math.floor(w/L+lt+1),width=0;i%2==0?marginLeft="-"+Math.floor(b/A+ot+1)+"px":marginLeft=Math.floor(b/A+ot+1)+"px";break;case"blindCurtainSliceTop":height=Math.floor(w/L+lt+1),width=0;i%2==0?marginLeft="-"+Math.floor(b/A+ot+1)+"px":marginLeft=Math.floor(b/A+ot+1)+"px";break;case"stampede":height=0;width=0;marginLeft=b*.2*(n%A-(A-Math.floor(A/2)))+"px";marginTop=w*.2*(Math.floor(n/A)+1-(L-Math.floor(L/2)))+"px";break;case"mosaic":height=0;width=0;break;case"mosaicReverse":height=0;width=0;marginLeft=Math.floor(b/A+ot+1)+"px";marginTop=Math.floor(w/L+lt+1)+"px";break;case"mosaicRandom":height=0;width=0;marginLeft=Math.floor(b/A+ot+1)*.5+"px";marginTop=Math.floor(w/L+lt+1)*.5+"px";break;case"mosaicSpiral":height=0;width=0;marginLeft=Math.floor(b/A+ot+1)*.5+"px";marginTop=Math.floor(w/L+lt+1)*.5+"px";break;case"mosaicSpiralReverse":height=0;width=0;marginLeft=Math.floor(b/A+ot+1)*.5+"px";marginTop=Math.floor(w/L+lt+1)*.5+"px";break;case"topLeftBottomRight":height=0;width=0;break;case"bottomRightTopLeft":height=0;width=0;marginLeft=Math.floor(b/A+ot+1)+"px";marginTop=Math.floor(w/L+lt+1)+"px";break;case"bottomLeftTopRight":height=0;width=0;marginLeft=0;marginTop=Math.floor(w/L+lt+1)+"px";break;case"topRightBottomLeft":height=0;width=0;marginLeft=Math.floor(b/A+ot+1)+"px";marginTop=0;break;case"scrollRight":height=w;width=b;marginLeft=-b;break;case"scrollLeft":height=w;width=b;marginLeft=b;break;case"scrollTop":height=w;width=b;marginTop=w;break;case"scrollBottom":height=w;width=b;marginTop=-w;break;case"scrollHorz":height=w;width=b;r==0&&c==k-1?marginLeft=-b:r<c||r==k-1&&c==0?marginLeft=b:marginLeft=-b}var h=e(".cameraappended:eq("+i+")",l);if(typeof j!="undefined"){clearInterval(j);clearTimeout(F);F=setTimeout(at,H+_)}if(e(g).length){e(".camera_pag li",s).removeClass("cameracurrent");e(".camera_pag li",s).eq(c).addClass("cameracurrent")}if(e(y).length){e("li",y).removeClass("cameracurrent");e("li",y).eq(c).addClass("cameracurrent");e("li",y).not(".cameracurrent").find("img").animate({opacity:.5},0);e("li.cameracurrent img",y).animate({opacity:1},0);e("li",y).hover(function(){e("img",this).stop(!0,!1).animate({opacity:1},150)},function(){e(this).hasClass("cameracurrent")||e("img",this).stop(!0,!1).animate({opacity:.5},150)})}var p=parseFloat(H)+parseFloat(_);if(I=="scrollLeft"||I=="scrollRight"||I=="scrollTop"||I=="scrollBottom"||I=="scrollHorz"){t.onStartTransition.call(this);p=0;h.delay((H+_)/et*dt[n]*M*.5).css({display:"block",height:height,"margin-left":marginLeft,"margin-top":marginTop,width:width}).animate({height:Math.floor(w/L+lt+1),"margin-top":0,"margin-left":0,width:Math.floor(b/A+ot+1)},H-_,q,d);W.eq(r).delay((H+_)/et*dt[n]*M*.5).animate({"margin-left":marginLeft*-1,"margin-top":marginTop*-1},H-_,q,function(){e(this).css({"margin-top":0,"margin-left":0})})}else{t.onStartTransition.call(this);p=parseFloat(H)+parseFloat(_);if(X=="next")h.delay((H+_)/et*dt[n]*M*.5).css({display:"block",height:height,"margin-left":marginLeft,"margin-top":marginTop,width:width,opacity:opacityOnGrid}).animate({height:Math.floor(w/L+lt+1),"margin-top":0,"margin-left":0,opacity:1,width:Math.floor(b/A+ot+1)},H-_,q,d);else{W.eq(c).show().css("z-index","999").addClass("cameracurrent");W.eq(r).css("z-index","1").removeClass("cameracurrent");e(".cameraContent",o).eq(c).addClass("cameracurrent");e(".cameraContent",o).eq(r).removeClass("cameracurrent");h.delay((H+_)/et*dt[n]*M*.5).css({display:"block",height:Math.floor(w/L+lt+1),"margin-top":0,"margin-left":0,opacity:1,width:Math.floor(b/A+ot+1)}).animate({height:height,"margin-left":marginLeft,"margin-top":marginTop,width:width,opacity:opacityOnGrid},H-_,q,d)}}})}}var r={alignment:"center",autoAdvance:!0,mobileAutoAdvance:!0,barDirection:"leftToRight",barPosition:"bottom",cols:6,easing:"easeInOutExpo",mobileEasing:"",fx:"random",mobileFx:"",gridDifference:250,height:"50%",imagePath:"images/",hover:!0,loader:"pie",loaderColor:"#eeeeee",loaderBgColor:"#222222",loaderOpacity:.8,loaderPadding:2,loaderStroke:7,minHeight:"200px",navigation:!0,navigationHover:!0,mobileNavHover:!0,opacityOnGrid:!1,overlayer:!0,pagination:!0,playPause:!0,pauseOnClick:!0,pieDiameter:38,piePosition:"rightTop",portrait:!1,rows:4,slicedCols:12,slicedRows:8,slideOn:"random",thumbnails:!1,time:7e3,transPeriod:1500,onEndTransition:function(){},onLoaded:function(){},onStartLoading:function(){},onStartTransition:function(){}},t=e.extend({},r,t),s=e(this).addClass("camera_wrap");s.wrapInner('<div class="camera_src" />').wrapInner('<div class="camera_fakehover" />');var o=e(".camera_fakehover",s);o.append('<div class="camera_target"></div>');t.overlayer==1&&o.append('<div class="camera_overlayer"></div>');o.append('<div class="camera_target_content"></div>');var u;t.loader=="pie"&&e.browser.msie&&e.browser.version<9?u="bar":u=t.loader;u=="pie"?o.append('<div class="camera_pie"></div>'):u=="bar"?o.append('<div class="camera_bar"></div>'):o.append('<div class="camera_bar" style="display:none"></div>');t.playPause==1&&o.append('<div class="camera_commands"></div>');t.navigation==1&&o.append('<div class="camera_prev"><span></span></div>').append('<div class="camera_next"><span></span></div>');t.thumbnails==1&&s.append('<div class="camera_thumbs_cont" />');t.thumbnails==1&&t.pagination!=1&&e(".camera_thumbs_cont",s).wrap("<div />").wrap('<div class="camera_thumbs" />').wrap("<div />").wrap('<div class="camera_command_wrap" />');t.pagination==1&&s.append('<div class="camera_pag"></div>');s.append('<div class="camera_loader"></div>');e(".camera_caption",s).each(function(){e(this).wrapInner("<div />")});var a="pie_"+s.index(),f=e(".camera_src",s),l=e(".camera_target",s),c=e(".camera_target_content",s),h=e(".camera_pie",s),p=e(".camera_bar",s),d=e(".camera_prev",s),v=e(".camera_next",s),m=e(".camera_commands",s),g=e(".camera_pag",s),y=e(".camera_thumbs_cont",s),b,w,E=new Array;e("> div",f).each(function(){E.push(e(this).attr("data-src"))});var S=new Array;e("> div",f).each(function(){e(this).attr("data-link")?S.push(e(this).attr("data-link")):S.push("")});var x=new Array;e("> div",f).each(function(){e(this).attr("data-target")?x.push(e(this).attr("data-target")):x.push("")});var T=new Array;e("> div",f).each(function(){e(this).attr("data-portrait")?T.push(e(this).attr("data-portrait")):T.push("")});var N=new Array;e("> div",f).each(function(){e(this).attr("data-alignment")?N.push(e(this).attr("data-alignment")):N.push("")});var C=new Array;e("> div",f).each(function(){e(this).attr("data-thumb")?C.push(e(this).attr("data-thumb")):C.push("")});var k=E.length;e(c).append('<div class="cameraContents" />');var L;for(L=0;L<k;L++){e(".cameraContents",c).append('<div class="cameraContent" />');if(S[L]!=""){var A=e("> div ",f).eq(L).attr("data-box");typeof A!="undefined"&&A!==!1&&A!=""?A='data-box="'+e("> div ",f).eq(L).attr("data-box")+'"':A="";e(".camera_target_content .cameraContent:eq("+L+")",s).append('<a class="camera_link" href="'+S[L]+'" '+A+' target="'+x[L]+'"></a>')}}e(".camera_caption",s).each(function(){var t=e(this).parent().index(),n=s.find(".cameraContent").eq(t);e(this).appendTo(n)});l.append('<div class="cameraCont" />');var O=e(".cameraCont",s),M;for(M=0;M<k;M++){O.append('<div class="cameraSlide cameraSlide_'+M+'" />');var _=e("> div:eq("+M+")",f);l.find(".cameraSlide_"+M).clone(_)}e(window).bind("load resize pageshow",function(){ut();D()});O.append('<div class="cameraSlide cameraSlide_'+M+'" />');var P;s.show();var b=l.width(),w=l.height(),H;e(window).bind("resize pageshow",function(){P==1&&B();e("ul",y).animate({"margin-top":0},0,ut);if(!f.hasClass("paused")){f.addClass("paused");if(e(".camera_stop",J).length){e(".camera_stop",J).hide();e(".camera_play",J).show();u!="none"&&e("#"+a).hide()}else u!="none"&&e("#"+a).hide();clearTimeout(H);H=setTimeout(function(){f.removeClass("paused");if(e(".camera_play",J).length){e(".camera_play",J).hide();e(".camera_stop",J).show();u!="none"&&e("#"+a).fadeIn()}else u!="none"&&e("#"+a).fadeIn()},1500)}});var j,F,I,q,R,m,g,U,z;i()&&t.mobileAutoAdvance!=""?q=t.mobileAutoAdvance:q=t.autoAdvance;q==0&&f.addClass("paused");i()&&t.mobileNavHover!=""?R=t.mobileNavHover:R=t.navigationHover;if(f.length!=0){var W=e(".cameraSlide",l);W.wrapInner('<div class="camerarelative" />');var X,V=t.barDirection,J=s;e("iframe",o).each(function(){var t=e(this),n=t.attr("src");t.attr("data-src",n);var r=t.parent().index(".camera_src > div");e(".camera_target_content .cameraContent:eq("+r+")",s).append(t)});function K(){e("iframe",o).each(function(){e(".camera_caption",o).show();var n=e(this),r=n.attr("data-src");n.attr("src",r);var i=t.imagePath+"blank.gif",u=new Image;u.src=i;if(t.height.indexOf("%")!=-1){var a=Math.round(b/(100/parseFloat(t.height)));t.minHeight!=""&&a<parseFloat(t.minHeight)?w=parseFloat(t.minHeight):w=a}else t.height=="auto"?w=s.height():w=parseFloat(t.height);n.after(e(u).attr({"class":"imgFake",width:b,height:w}));var f=n.clone();n.remove();e(u).bind("click",function(){if(e(this).css("position")=="absolute"){e(this).remove();r.indexOf("vimeo")!=-1||r.indexOf("youtube")!=-1?r.indexOf("?")!=-1?autoplay="&autoplay=1":autoplay="?autoplay=1":r.indexOf("dailymotion")!=-1&&(r.indexOf("?")!=-1?autoplay="&autoPlay=1":autoplay="?autoPlay=1");f.attr("src",r+autoplay);z=!0}else{e(this).css({position:"absolute",top:0,left:0,zIndex:10}).after(f);f.css({position:"absolute",top:0,left:0,zIndex:9})}})})}K();t.hover==1&&(i()||o.hover(function(){f.addClass("hovered")},function(){f.removeClass("hovered")}));if(R==1){e(d,s).animate({opacity:0},0);e(v,s).animate({opacity:0},0);e(m,s).animate({opacity:0},0);if(i()){o.live("vmouseover",function(){e(d,s).animate({opacity:1},200);e(v,s).animate({opacity:1},200);e(m,s).animate({opacity:1},200)});o.live("vmouseout",function(){e(d,s).delay(500).animate({opacity:0},200);e(v,s).delay(500).animate({opacity:0},200);e(m,s).delay(500).animate({opacity:0},200)})}else o.hover(function(){e(d,s).animate({opacity:1},200);e(v,s).animate({opacity:1},200);e(m,s).animate({opacity:1},200)},function(){e(d,s).animate({opacity:0},200);e(v,s).animate({opacity:0},200);e(m,s).animate({opacity:0},200)})}e(".camera_stop",J).live("click",function(){q=!1;f.addClass("paused");if(e(".camera_stop",J).length){e(".camera_stop",J).hide();e(".camera_play",J).show();u!="none"&&e("#"+a).hide()}else u!="none"&&e("#"+a).hide()});e(".camera_play",J).live("click",function(){q=!0;f.removeClass("paused");if(e(".camera_play",J).length){e(".camera_play",J).hide();e(".camera_stop",J).show();u!="none"&&e("#"+a).show()}else u!="none"&&e("#"+a).show()});t.pauseOnClick==1&&e(".camera_target_content",o).mouseup(function(){q=!1;f.addClass("paused");e(".camera_stop",J).hide();e(".camera_play",J).show();e("#"+a).hide()});e(".cameraContent, .imgFake",o).hover(function(){U=!0},function(){U=!1});e(".cameraContent, .imgFake",o).bind("click",function(){if(z==1&&U==1){q=!1;e(".camera_caption",o).hide();f.addClass("paused");e(".camera_stop",J).hide();e(".camera_play",J).show();e("#"+a).hide()}})}if(u!="pie"){p.append('<span class="camera_bar_cont" />');e(".camera_bar_cont",p).animate({opacity:t.loaderOpacity},0).css({position:"absolute",left:0,right:0,top:0,bottom:0,"background-color":t.loaderBgColor}).append('<span id="'+a+'" />');e("#"+a).animate({opacity:0},0);var Y=e("#"+a);Y.css({position:"absolute","background-color":t.loaderColor});switch(t.barPosition){case"left":p.css({right:"auto",width:t.loaderStroke});break;case"right":p.css({left:"auto",width:t.loaderStroke});break;case"top":p.css({bottom:"auto",height:t.loaderStroke});break;case"bottom":p.css({top:"auto",height:t.loaderStroke})}switch(V){case"leftToRight":Y.css({left:0,right:0,top:t.loaderPadding,bottom:t.loaderPadding});break;case"rightToLeft":Y.css({left:0,right:0,top:t.loaderPadding,bottom:t.loaderPadding});break;case"topToBottom":Y.css({left:t.loaderPadding,right:t.loaderPadding,top:0,bottom:0});break;case"bottomToTop":Y.css({left:t.loaderPadding,right:t.loaderPadding,top:0,bottom:0})}}else{h.append('<canvas id="'+a+'"></canvas>');var Z,Y=document.getElementById(a);Y.setAttribute("width",t.pieDiameter);Y.setAttribute("height",t.pieDiameter);var et;switch(t.piePosition){case"leftTop":et="left:0; top:0;";break;case"rightTop":et="right:0; top:0;";break;case"leftBottom":et="left:0; bottom:0;";break;case"rightBottom":et="right:0; bottom:0;"}Y.setAttribute("style","position:absolute; z-index:1002; "+et);var tt,nt;if(Y&&Y.getContext){var rt=Y.getContext("2d");rt.rotate(Math.PI*1.5);rt.translate(-t.pieDiameter,0)}}if(u=="none"||q==0){e("#"+a).hide();e(".camera_canvas_wrap",J).hide()}if(e(g).length){e(g).append('<ul class="camera_pag_ul" />');var it;for(it=0;it<k;it++)e(".camera_pag_ul",s).append('<li class="pag_nav_'+it+'" style="position:relative; z-index:1002"><span><span>'+it+"</span></span></li>");e(".camera_pag_ul li",s).hover
(function(){e(this).addClass("camera_hover");if(e(".camera_thumb",this).length){var t=e(".camera_thumb",this).outerWidth(),n=e(".camera_thumb",this).outerHeight(),r=e(this).outerWidth();e(".camera_thumb",this).show().css({top:"-"+n+"px",left:"-"+(t-r)/2+"px"}).animate({opacity:1,"margin-top":"-3px"},200);e(".thumb_arrow",this).show().animate({opacity:1,"margin-top":"-3px"},200)}},function(){e(this).removeClass("camera_hover");e(".camera_thumb",this).animate({"margin-top":"-20px",opacity:0},200,function(){e(this).css({marginTop:"5px"}).hide()});e(".thumb_arrow",this).animate({"margin-top":"-20px",opacity:0},200,function(){e(this).css({marginTop:"5px"}).hide()})})}if(e(y).length){var st;if(!e(g).length){e(y).append("<div />");e(y).before('<div class="camera_prevThumbs hideNav"><div></div></div>').before('<div class="camera_nextThumbs hideNav"><div></div></div>');e("> div",y).append("<ul />");e.each(C,function(t,n){if(e("> div",f).eq(t).attr("data-thumb")!=""){var r=e("> div",f).eq(t).attr("data-thumb"),i=new Image;i.src=r;e("ul",y).append('<li class="pix_thumb pix_thumb_'+t+'" />');e("li.pix_thumb_"+t,y).append(e(i).attr("class","camera_thumb"))}})}else{e.each(C,function(t,n){if(e("> div",f).eq(t).attr("data-thumb")!=""){var r=e("> div",f).eq(t).attr("data-thumb"),i=new Image;i.src=r;e("li.pag_nav_"+t,g).append(e(i).attr("class","camera_thumb").css({position:"absolute"}).animate({opacity:0},0));e("li.pag_nav_"+t+" > img",g).after('<div class="thumb_arrow" />');e("li.pag_nav_"+t+" > .thumb_arrow",g).animate({opacity:0},0)}});s.css({marginBottom:e(g).outerHeight()})}}else!e(y).length&&e(g).length&&s.css({marginBottom:e(g).outerHeight()});var ot=!0;if(e(m).length){e(m).append('<div class="camera_play"></div>').append('<div class="camera_stop"></div>');if(q==1){e(".camera_play",J).hide();e(".camera_stop",J).show()}else{e(".camera_stop",J).hide();e(".camera_play",J).show()}}at();e(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom",o).each(function(){e(this).css("visibility","hidden")});t.onStartLoading.call(this);ft();e(d).length&&e(d).click(function(){if(!f.hasClass("camerasliding")){var n=parseFloat(e(".cameraSlide.cameracurrent",l).index());clearInterval(j);K();e("#"+a+", .camera_canvas_wrap",s).animate({opacity:0},0);at();n!=0?ft(n):ft(k);t.onStartLoading.call(this)}});e(v).length&&e(v).click(function(){if(!f.hasClass("camerasliding")){var n=parseFloat(e(".cameraSlide.cameracurrent",l).index());clearInterval(j);K();e("#"+a+", .camera_canvas_wrap",J).animate({opacity:0},0);at();n==k-1?ft(1):ft(n+2);t.onStartLoading.call(this)}});if(i()){o.bind("swipeleft",function(n){if(!f.hasClass("camerasliding")){var r=parseFloat(e(".cameraSlide.cameracurrent",l).index());clearInterval(j);K();e("#"+a+", .camera_canvas_wrap",J).animate({opacity:0},0);at();r==k-1?ft(1):ft(r+2);t.onStartLoading.call(this)}});o.bind("swiperight",function(n){if(!f.hasClass("camerasliding")){var r=parseFloat(e(".cameraSlide.cameracurrent",l).index());clearInterval(j);K();e("#"+a+", .camera_canvas_wrap",J).animate({opacity:0},0);at();r!=0?ft(r):ft(k);t.onStartLoading.call(this)}})}e(g).length&&e(".camera_pag li",s).click(function(){if(!f.hasClass("camerasliding")){var n=parseFloat(e(this).index()),r=parseFloat(e(".cameraSlide.cameracurrent",l).index());if(n!=r){clearInterval(j);K();e("#"+a+", .camera_canvas_wrap",J).animate({opacity:0},0);at();ft(n+1);t.onStartLoading.call(this)}}});if(e(y).length){e(".pix_thumb img",y).click(function(){if(!f.hasClass("camerasliding")){var n=parseFloat(e(this).parents("li").index()),r=parseFloat(e(".cameracurrent",l).index());if(n!=r){clearInterval(j);K();e("#"+a+", .camera_canvas_wrap",J).animate({opacity:0},0);e(".pix_thumb",y).removeClass("cameracurrent");e(this).parents("li").addClass("cameracurrent");at();ft(n+1);ut();t.onStartLoading.call(this)}}});e(".camera_thumbs_cont .camera_prevThumbs",J).hover(function(){e(this).stop(!0,!1).animate({opacity:1},250)},function(){e(this).stop(!0,!1).animate({opacity:.7},250)});e(".camera_prevThumbs",J).click(function(){var t=0,n=e(y).outerWidth(),r=e("ul",y).offset().left,i=e("> div",y).offset().left,s=i-r;e(".camera_visThumb",y).each(function(){var n=e(this).outerWidth();t+=n});s-t>0?e("ul",y).animate({"margin-left":"-"+(s-t)+"px"},500,D):e("ul",y).animate({"margin-left":0},500,D)});e(".camera_thumbs_cont .camera_nextThumbs",J).hover(function(){e(this).stop(!0,!1).animate({opacity:1},250)},function(){e(this).stop(!0,!1).animate({opacity:.7},250)});e(".camera_nextThumbs",J).click(function(){var t=0,n=e(y).outerWidth(),r=e("ul",y).outerWidth(),i=e("ul",y).offset().left,s=e("> div",y).offset().left,o=s-i;e(".camera_visThumb",y).each(function(){var n=e(this).outerWidth();t+=n});o+t+t<r?e("ul",y).animate({"margin-left":"-"+(o+t)+"px"},500,D):e("ul",y).animate({"margin-left":"-"+(r-n)+"px"},500,D)})}}})(jQuery);(function(e){e.fn.cameraStop=function(){var t=e(this),n=e(".camera_src",t),r="pie_"+t.index();n.addClass("stopped");if(e(".camera_showcommands").length)var i=e(".camera_thumbs_wrap",t);else var i=t}})(jQuery);(function(e){e.fn.cameraPause=function(){var t=e(this),n=e(".camera_src",t);n.addClass("paused")}})(jQuery);(function(e){e.fn.cameraResume=function(){var t=e(this),n=e(".camera_src",t);(typeof autoAdv=="undefined"||autoAdv!==!0)&&n.removeClass("paused")}})(jQuery);