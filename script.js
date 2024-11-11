
window.onload = function() {
    const loadingScreen = document.getElementById('loadingScreen');
    const mainContent = document.querySelector('.menu');  
    
    setTimeout(() => {
        loadingScreen.classList.add('hidden'); 
        mainContent.classList.remove('hidden');
    }, 3000);
};

tabInputs.forEach(function (input) {
    input.addEventListener('change', function () {
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update();
    });
});

function mostrarMensaje(elemento) {
    const mensaje = elemento.querySelector('.mensaje');
    mensaje.style.display = 'block'; 

    
    setTimeout(() => {
        mensaje.style.display = 'none';
    }, 2000);
}

function toggleModal() {
    const modal = document.getElementById('cartModal');

    if (modal.style.display === 'flex') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'flex';
    }
}

function updateImage(imgId, fileId, descId) {
    const fileInput = document.getElementById(fileId).files[0];
    const description = document.getElementById(descId).value;

    if (fileInput) {
        const reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById(imgId).src = e.target.result;
        };

        reader.readAsDataURL(fileInput);
        
        document.getElementById(descId).value = description;

        alert("¡Datos actualizados exitosamente para esta imagen!");
    } else {
        alert("Por favor, selecciona una imagen.");
    }
}


function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "flex";
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}


function saveChanges() {
    alert("Cambios guardados correctamente");
    closeModal();
}


