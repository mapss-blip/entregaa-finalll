/**
 * Postales de Flores - Main Interaction Script
 * Simple and clean vanilla JS
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Interactive Image (Zoom effect)
    const flowerImg = document.getElementById('flower-img');
    if (flowerImg) {
        flowerImg.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = flowerImg.getBoundingClientRect();
            const x = ((e.clientX - left) / width) * 100;
            const y = ((e.clientY - top) / height) * 100;
            flowerImg.style.transformOrigin = `${x}% ${y}%`;
        });
    }

    // 2. Details Button & Modal Logic
    const detailBtn = document.getElementById('detail-btn');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('close-modal');

    if (detailBtn && modal) {
        detailBtn.addEventListener('click', () => {
            modal.style.display = 'flex';
            modal.classList.remove('hidden');
        });

        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
            modal.classList.add('hidden');
        });

        // Close modal when clicking outside content
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                modal.classList.add('hidden');
            }
        });
    }

    // 3. Audio Playback Console Feedback (Optional)
    const audioElems = document.querySelectorAll('audio');
    audioElems.forEach(audio => {
        audio.addEventListener('play', () => {
            console.log('Reproduciendo paisaje sonoro...');
        });
    });

    // 4. Parallax effect for gallery postcards
    const cards = document.querySelectorAll('.postcard-frame');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            if (window.innerWidth < 768) return; // Only desktop
            const { left, top, width, height } = card.getBoundingClientRect();
            const centerX = left + width / 2;
            const centerY = top + height / 2;
            const mouseX = e.clientX - centerX;
            const mouseY = e.clientY - centerY;
            
            const rotateX = (mouseY / (height / 2)) * -5; // Limit rotation to 5 degrees
            const rotateY = (mouseX / (width / 2)) * 5;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
    });
});
