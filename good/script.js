document.addEventListener('DOMContentLoaded', function() {
  const prevButton = document.getElementById('prev-slide');
  const nextButton = document.getElementById('next-slide');
  const imgList = document.querySelector('.img-list');
  const imgItems = document.querySelectorAll('.img-item');
  const sliderWrap = document.querySelector('.slider-wrap');
  
  const imgWidth = imgItems[0].offsetWidth;
  const visibleItems = 3; // 한 번에 보이는 이미지의 개수
  const totalItems = imgItems.length;
  const wrapWidth = sliderWrap.offsetWidth;

  let currentIndex = 0; // 현재 보이는 이미지의 인덱스
  let intervalId; // 자동 슬라이드 간격을 제어하기 위한 변수

  // 다음 버튼 클릭 시 동작
  nextButton.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % totalItems;
    moveSlider();
  });

  // 이전 버튼 클릭 시 동작
  prevButton.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    moveSlider();
  });

  // 자동 슬라이드 함수
  function startAutoSlide() {
    intervalId = setInterval(function() {
      currentIndex = (currentIndex + 1) % totalItems;
      moveSlider();
    }, 2000); // 3초마다 이미지 슬라이드
  }

  // 슬라이드 이동 함수
  function moveSlider() {
    const newPosition = -currentIndex * imgWidth;
    // 슬라이드가 wrap을 벗어나지 않도록 보정합니다.
    const maxPosition = wrapWidth - (totalItems * imgWidth);
    const finalPosition = newPosition < maxPosition ? maxPosition : newPosition;
    imgList.style.transform = `translateX(${finalPosition}px)`;
  }

  // 페이지 로드 시 자동 슬라이드 시작
  startAutoSlide();

  // 마우스가 슬라이더 위에 있을 때 자동 슬라이드 중지
  sliderWrap.addEventListener('mouseenter', function() {
    clearInterval(intervalId);
  });

  // 마우스가 슬라이더에서 벗어날 때 자동 슬라이드 다시 시작
  sliderWrap.addEventListener('mouseleave', function() {
    startAutoSlide();
  });
});