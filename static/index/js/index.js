const dataS = [
    "static/index/jpg/ds2.jpg",
    "static/index/jpg/ds3.jpg",
    "static/index/jpg/ds4.jpg",
    "static/index/jpg/ds5.jpg",
    "static/index/jpg/ds6.jpg",
    "static/index/jpg/ds7.jpg",
    "static/index/jpg/ds8.jpg",
    "static/index/jpg/ds9.jpg",
    "static/index/jpg/ds10.jpg"
  ]
  
  const node = document.getElementById("image-head");
  
  const cycleImages = (images, container, step) => {
      images.forEach((image, index) => (
        setTimeout(() => {
          container.style.backgroundImage = `url(${image})`  
      }, step * (index + 1))
    ))
    setTimeout(() => cycleImages(images, container, step), step * images.length)
  }
  
  cycleImages(dataS, node, 6500)