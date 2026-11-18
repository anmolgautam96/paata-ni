
function showPage(pageNumber) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    document.getElementById('page' + pageNumber)
        .classList.add('active');

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function openLetter() {
    const letter = document.getElementById('letter');
    letter.classList.toggle('open');
}

