 // 滚动动画效果
    function checkScroll() {
      const elements = document.querySelectorAll(".scroll-element");
      const windowHeight = window.innerHeight;

      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("visible");
        }
      });
    }

    // 初始检查
    checkScroll();

    // 滚动时检查
    window.addEventListener("scroll", checkScroll);
    
    // 轮播图功能
    document.addEventListener('DOMContentLoaded', function() {
      const carousel = document.getElementById('carousel');
      const slides = document.querySelectorAll('.carousel-slide');
      const dots = document.querySelectorAll('.carousel-dot');
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');
      
      let currentIndex = 0;
      const slideCount = slides.length;
      
      // 更新轮播位置
      function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // 更新指示点状态
        dots.forEach((dot, index) => {
          dot.classList.toggle('active', index === currentIndex);
        });
      }
      
      // 下一个轮播项
      function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateCarousel();
      }
      
      // 上一个轮播项
      function prevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateCarousel();
      }
      
      // 自动轮播
      let autoSlide = setInterval(nextSlide, 5000);
      
      // 鼠标悬停时暂停轮播
      carousel.parentElement.addEventListener('mouseenter', () => {
        clearInterval(autoSlide);
      });
      
      // 鼠标离开时恢复轮播
      carousel.parentElement.addEventListener('mouseleave', () => {
        autoSlide = setInterval(nextSlide, 5000);
      });
      
      // 绑定按钮事件
      nextBtn.addEventListener('click', nextSlide);
      prevBtn.addEventListener('click', prevSlide);
      
      // 绑定指示点事件
      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          currentIndex = index;
          updateCarousel();
        });
      });
      
      // 时间线功能
      const timelineItems = document.querySelectorAll('.timeline-item');
      const contentCards = document.querySelectorAll('.content-card');
      
      timelineItems.forEach(item => {
        item.addEventListener('click', function() {
          const target = this.getAttribute('data-target');
          
          // 移除所有活动状态
          timelineItems.forEach(i => i.classList.remove('active'));
          contentCards.forEach(card => card.classList.remove('active'));
          
          // 添加当前活动状态
          this.classList.add('active');
          document.getElementById(target).classList.add('active');
        });
      });
    });