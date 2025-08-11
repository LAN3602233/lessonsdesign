document.addEventListener('DOMContentLoaded', function() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  const contentCards = document.querySelectorAll('.content-card');
  
  // 初始显示第一个内容
  timelineItems[0].classList.add('active');
  contentCards[0].classList.add('active');
  
  // 为每个时间线项目添加事件监听
  timelineItems.forEach(item => {
    // 鼠标进入事件
    item.addEventListener('mouseenter', function() {
      // 如果已经是激活状态，则不做任何操作
      if (this.classList.contains('active')) return;
      
      // 移除所有激活状态
      timelineItems.forEach(i => i.classList.remove('active'));
      contentCards.forEach(c => c.classList.remove('active'));
      
      // 添加当前激活状态
      this.classList.add('active');
      const targetId = this.getAttribute('data-target');
      document.getElementById(targetId).classList.add('active');
    });
    
    // 点击事件（为移动设备考虑）
    item.addEventListener('click', function() {
      // 如果已经是激活状态，则不做任何操作
      if (this.classList.contains('active')) return;
      
      // 移除所有激活状态
      timelineItems.forEach(i => i.classList.remove('active'));
      contentCards.forEach(c => c.classList.remove('active'));
      
      // 添加当前激活状态
      this.classList.add('active');
      const targetId = this.getAttribute('data-target');
      document.getElementById(targetId).classList.add('active');
    });
  });
});