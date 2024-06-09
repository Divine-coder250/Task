document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll('.gallery-image');

    galleryItems.forEach(item => {


        item.addEventListener('mouseover', () => {
           
            item.style.filter = 'none';
            setTimeout(() => {
                item.style.filter = 'blur(9px) grayscale(100%)';
            });
            item.style.transform = 'scale(1.1)';
        });

        item.addEventListener('mouseout', () => {

            item.style.filter = 'none';
            item.style.transform = 'scale(1)';
          
        });
    });
});