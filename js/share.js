var share ={
  setting: {
    width: 700,
    height: 400
  },
  getCoords: function (type) {
    if(type === 'top') return (window.innerHeight - share.setting.height)/2;
    if(type === 'left') return (window.innerWidth - share.setting.width)/2;
  },
  openWindow: function (url) {
    window.open(
      url, '',
      `width=${this.setting.width}, height=${this.setting.height}, top=${this.getCoords('top')}, left=${this.getCoords('left')}, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no`);
  },
  run: function(type, url, text, des, thumb, appkey) {
    url = encodeURIComponent(url || document.location);
    text = encodeURIComponent(text || document.title);
    des = encodeURIComponent(des || '');
    thumb = thumb || '';
    appkey = appkey || '3896321144';

    var jump;
    switch (type) {
      case 'weibo':
        jump = `http://service.weibo.com/share/share.php?url=${url}&appkey=${appkey}&title=${text}&pic=${thumb}&ralateUid=1735559201`;
        break;
      case 'twitter':
        jump = `https://twitter.com/intent/tweet?url=${url}&text=${text}&via=GeekParkNet`;
        break;
    }
    share.openWindow(jump);
  }
}