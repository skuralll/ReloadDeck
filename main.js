var refresh = function(){
  var tweetBox = document.getElementsByClassName('js-compose-text compose-text bg-color-twitter-white txt-size--14 scroll-v scroll-styled-v scroll-styled-h scroll-alt padding-a--0');
  if(tweetBox[0] == null) tweetBox = document.getElementsByClassName('js-compose-text compose-text bg-color-twitter-white txt-size-variable--14 scroll-v scroll-styled-v scroll-styled-h scroll-alt');
  if(tweetBox[0] != null){
    if(tweetBox[0].value != "") return;
  }
  
  location.reload();
}

setInterval(refresh, 30000);