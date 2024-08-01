    
//QUEBRA DE TEXTO DO TEXTO DO APLICATIVO
    document.addEventListener("DOMContentLoaded", function() {
        const p = document.getElementById('text-content');
        p.innerHTML = p.innerHTML.replace(/(\.\s+)/g, '.<br><br>');
    });


//REGISTRO DE FORMULARIO:
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const rating = document.querySelector('input[name="rating"]:checked').value;

    const now = new Date();
    const datetime = now.toLocaleString('pt-BR');

    const feedbackItem = document.createElement('div');
    feedbackItem.classList.add('testimonial');
    feedbackItem.innerHTML = `
        <p class="author">${name} (${email})</p>
        <p class="datetime">${datetime}</p>
        <p>"${message}"</p>
        <p class="stars">Avaliação: ${'&#9733;'.repeat(rating)}</p>
    `;

    document.getElementById('feedbackList').appendChild(feedbackItem);

    document.getElementById('feedbackForm').reset();
});


//CARROSEL:
document.addEventListener('DOMContentLoaded', () => {
    const carouselInner = document.querySelector('.carousel-inner');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;
    const totalItems = indicators.length;

    const showSlide = (index) => {
        const offset = -index * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
        updateIndicators(index);
    };

    const updateIndicators = (index) => {
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    };

    indicators.forEach(indicator => {
        indicator.addEventListener('click', (e) => {
            const slideIndex = parseInt(e.target.getAttribute('data-slide'), 10);
            currentIndex = slideIndex;
            showSlide(currentIndex);
        });
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalItems;
        showSlide(currentIndex);
    }, 5000);
});

//NAVBAR
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
 
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
          
            navLinks.forEach(link => link.classList.remove("active"));
            
            this.classList.add("active");
        });
    });
});