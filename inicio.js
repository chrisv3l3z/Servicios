       const slides = document.querySelectorAll('.slide');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const pageIndicator = document.getElementById('pageIndicator');
        let currentSlideIndex = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active', 'prev');
                if (i === index) {
                    slide.classList.add('active');
                } else if (i < index) {
                    slide.classList.add('prev');
                }
            });
            updateNavButtons();
            updatePageIndicator();
        }

        function updateNavButtons() {
            prevBtn.classList.toggle('hidden', currentSlideIndex === 0);
            nextBtn.classList.toggle('hidden', currentSlideIndex === slides.length - 1);
        }

        function updatePageIndicator() {
            pageIndicator.textContent = `${currentSlideIndex + 1} / ${slides.length}`;
        }

        prevBtn.addEventListener('click', () => {
            if (currentSlideIndex > 0) {
                currentSlideIndex--;
                showSlide(currentSlideIndex);
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentSlideIndex < slides.length - 1) {
                currentSlideIndex++;
                showSlide(currentSlideIndex);
            }
        });

        // Toggle Table Functionality (for slide 3)
const plansTableContainer = document.getElementById('plansTableContainer');
const toggleTableBtn = document.getElementById('toggleTableBtn');

toggleTableBtn.addEventListener('click', () => {
    plansTableContainer.classList.toggle('collapsed');
    if (plansTableContainer.classList.contains('collapsed')) {
        toggleTableBtn.textContent = 'Expandir Tabla';
    } else {
        toggleTableBtn.textContent = 'Contraer Tabla';
    }
});

        document.addEventListener('DOMContentLoaded', function () {
            showSlide(currentSlideIndex); // Show the first slide
        });