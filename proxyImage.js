const myImage = (function myImage() {
  const imgNode = document.createElement("img");
  document.body.appendChild(imgNode);
  return {
    setSrc: (src) => {
      imgNode.src = src;
    },
  };
})();

const ProxyImage = (function () {
  const image = new Image();
  image.onload = () => {
    myImage.setSrc(this.src);
  };

  return {
    setSrc: (src) => {
      myImage.setSrc("./test.png");
      image.src = src;
    },
  };
})();
