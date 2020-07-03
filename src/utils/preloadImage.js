export function preloadImage(imglist) {
  let length = imglist.length;
  let images = new Array(); // 定义一个数组容器，用来存储预加载完成的图片
  function preload() {
    for (let i = 0; i < length; i++) {
      images[i] = new Image();
      images[i].src = `${imglist[i].url}`;
    }
  }
  preload();
}
