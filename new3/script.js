document.addEventListener('DOMContentLoaded', function() {
  const leftbtn = document.getElementById('leftbtn');
  const rightbtn = document.getElementById('rightbtn');
  const photos = document.querySelector('.photos');

  leftbtn.addEventListener('click', function() {
    const imgWidth = photos.firstElementChild.clientWidth;
    photos.style.transform = `translateX(-${imgWidth}px)`;
    photos.appendChild(photos.firstElementChild);
    setTimeout(() => {
      photos.style.transition = 'none';
      photos.style.transform = 'translateX(0)';
      setTimeout(() => {
        photos.style.transition = '';
      });
    }, 500);
  });

  rightbtn.addEventListener('click', function() {
    const imgWidth = photos.firstElementChild.clientWidth;
    const lastPhoto = photos.lastElementChild;
    photos.style.transition = 'none';
    photos.style.transform = `translateX(-${imgWidth}px)`;
    photos.insertBefore(lastPhoto, photos.firstElementChild);
    setTimeout(() => {
      photos.style.transition = '';
      photos.style.transform = 'translateX(0)';
    });
  });
});