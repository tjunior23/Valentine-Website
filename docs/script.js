// Valentine's Day Website - Script
// The "No" button playfully dodges the cursor
// The "Yes" button links to yes.html

document.addEventListener('DOMContentLoaded', function() {
    const noButton = document.querySelector('.btn-no');

    if (noButton) {
        noButton.addEventListener('mouseenter', function() {
            // Get the card boundaries to keep button inside
            const card = document.querySelector('.card');
            const cardRect = card.getBoundingClientRect();
            const buttonRect = this.getBoundingClientRect();

            // Calculate random movement (but keep it subtle and elegant)
            const maxMoveX = 80;
            const maxMoveY = 40;
            const randomX = (Math.random() - 0.5) * maxMoveX * 2;
            const randomY = (Math.random() - 0.5) * maxMoveY * 2;

            // Apply smooth movement
            this.style.transition = 'transform 0.25s ease-out';
            this.style.transform = `translate(${randomX}px, ${randomY}px)`;
        });

        // Reset position when mouse leaves the card area entirely
        const card = document.querySelector('.card');
        if (card) {
            card.addEventListener('mouseleave', function() {
                noButton.style.transition = 'transform 0.4s ease-out';
                noButton.style.transform = 'translate(0, 0)';
            });
        }
    }
});
