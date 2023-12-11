document.documentElement.classList.add('js-enabled');


const createParallax = {
   parallax : document.querySelector('.parallax'),
   scrolledHeight : window.scrollY,

  init (){
    window.addEventListener('scroll', ()=>{
      this.limit = this.parallax.offsetTop + this.parallax.offsetHeight;
      console.log(this.scrolledHeight, this.parallax.offsetTop, this.parallax.offsetHeight, this.limit);
      if(this.scrolledHeight > this.parallax.offsetTop && this.scrolledHeight<= this.limit){
        console.log("lol")
        this.parallax.style.backgroundPositionY = (this.scrolledHeight -this.parallax.offsetTop) /2 + "px";
      } else {
        this.parallax.style.backgroundPositionY = 0;
      }
    });
  }
}
 createParallax.init();




/*
(function () {
  const app = {
    cacheDom() {
      this.parallax = document.querySelector(".parallax");
    },
    init() {
      document.documentElement.classList.add('js-enabled');
      this.cacheDom();
      window.addEventListener("scroll", () => {
        this.relax();
      });
    },
    relax() {
      const scrolledHeight = window.pageYOffset;
      const limit = this.parallax.offsetTop + this.parallax.offsetHeight;
      console.log(scrolledHeight,this.parallax.offsetTop);
      if (scrolledHeight > this.parallax.offsetTop && scrolledHeight <= limit) {
        this.parallax.style.backgroundPositionY = (scrolledHeight - this.parallax.offsetTop) / 2 + "px";
      } else {
        this.parallax.style.backgroundPositionY = "0";
      }
    }
  };

  app.init();
})();

 */