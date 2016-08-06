jQuery( document ).ready( function ( $ )
{
    'use strict';
    function removeHtmlTag(strx,chop){
        if(strx.indexOf("<")!=-1)
        {
            var s = strx.split("<");
            for(var i=0;i<s.length;i++){
                if(s[i].indexOf(">")!=-1){
                    s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length);
                }
            }
            strx =  s.join("");
        }
        chop = (chop < strx.length-1) ? chop : strx.length-2;
        while(strx.charAt(chop-1)!=' ' && strx.indexOf(' ',chop)!=-1) chop++;
        strx = strx.substring(0,chop-1);
        return strx+'...';
    }
    function createSummaryAndThumb(pID){
        $(pID).attr("class","lazy-load-box trigger effect-slidefromleft");
        var div = document.getElementById(pID);
        var datetime = jQuery(div).parent().parent().parent().parent().find("h2.date-header").text();
        var imgtag = "";
        var img = div.getElementsByTagName("img");
        var summ = summary_noimg;
        if(img.length>=1) {
            imgtag = '<span style="float:left; padding:0px 10px 5px 0px;overflow:hidden;height:' + img_thumb_height + 'px">    <div class="cover"> <div style="background-image: url(' + img[0].src + '); display: block;" data-original="' + img[0].src + '" class="cover_bg image-lazy"></div> </div> </span>';
            summ = summary_img;
        }
        else {
            imgtag = '<span style="float:left; padding-right:10px; overflow:hidden;height:' + img_thumb_height + 'px"><img src="http://onionnet.co.kr/sian/addplan/logo.jpg" width="211px" height="168px"/></span>';
            summ = summary_img;
        }
        var summary  = "<div>" + imgtag + '<div>' + removeHtmlTag(div.innerHTML,summ) + '</div> </div>';
        summary = summary.replace(/createSummaryAndThumb.*../, '');
        div.innerHTML = summary + " ...";
        $(div).parent().html("<div data-delay='" + "100" + "' data-speed='600' style='overflow:hidden;clear:both;-webkit-transition: all 600ms ease; -moz-transition: all 600ms ease; -ms-transition: all 600ms ease; -o-transition: all 600ms ease; transition: all 600ms ease;' class='post-body entry-content lazy-load-box trigger effect-slideup'> <h3 class='post-title'>" + $(div).parent().find("h3.post-title").html() + "</h3> <div class='post-header'> <div class='post-header-line-1'></div> </div>" + summary + " <div style='float:left;font-size:13px;padding:5px 10px;margin-top:8px;color:#b2b935' class='readmore'> (" + datetime +")</div>   <div style='float:right;font-size:13px;padding:5px 10px;margin-top:8px' class='readmore'> <a style='color:#b2b935' href='" + $(div).parent().find("h3.post-title a").attr("href") + "'> Read more </a> </div>");
    }
} );
