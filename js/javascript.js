const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');

const cargarImagen = (entradas, observador) => {

    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
        } else {
            entrada.target.classList.remove('visible');
        }
    });
}

const observador = new IntersectionObserver(cargarImagen, {
    root: null,
    threshold: 0.4
});

observador.observe(img1);
observador.observe(img2);