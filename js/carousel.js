document.addEventListener('DOMContentLoaded', function() {
  // 获取元素
  const carousel = document.querySelector('.carousel-slides');
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  
  let currentIndex = 0;
  let intervalId;
  const slideInterval = 5000; // 5秒自动切换

  // 显示指定索引的幻灯片
  function showSlide(index) {
    // 处理索引越界
    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;
    
    // 移动轮播轨道
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // 更新指示点状态
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  // 下一张
  function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
  }

  // 上一张
  function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
  }

  // 开始自动轮播
  function startAutoPlay() {
    intervalId = setInterval(nextSlide, slideInterval);
  }

  // 停止自动轮播
  function stopAutoPlay() {
    clearInterval(intervalId);
  }

  // 事件监听
  nextBtn.addEventListener('click', () => {
    nextSlide();
    stopAutoPlay();
    startAutoPlay();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    stopAutoPlay();
    startAutoPlay();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      showSlide(currentIndex);
      stopAutoPlay();
      startAutoPlay();
    });
  });

  // 鼠标悬停时暂停轮播
  document.querySelector('.carousel-container').addEventListener('mouseenter', stopAutoPlay);
  document.querySelector('.carousel-container').addEventListener('mouseleave', startAutoPlay);

  // 初始化
  showSlide(currentIndex);
  startAutoPlay();
});