
document.addEventListener("DOMContentLoaded", function () {
    function toggleVisibility(id) {
        var element = document.getElementById(id);
        if (element.style.display === "none" || element.style.display === "") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }

    document.getElementById("Decoprime").onclick = function () {
        toggleVisibility("Decoprime");
    };

    // Añadir eventos a botones específicos
    document.getElementById("cleanMaButton").onclick = function () {
        toggleVisibility("oficinas");
    };

    // EventListener para el envío de formulario
    document.getElementById('contactoForm').addEventListener('submit', async function (event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const mensaje = document.getElementById('mensaje').value;

        try {
            const response = await fetch('/api/contacto', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nombre, email, telefono, mensaje }),
            });

            if (response.ok) {
                alert('Formulario enviado con éxito');
                document.getElementById('contactoForm').reset();
            } else {
                alert('Error al enviar el formulario');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error al enviar el formulario');
        }
    });
});














/*function toggleSection(id) {
    var section = document.getElementById(id);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

/* funtion toogleEvent*/

/*function toggleEvent(id) {
    var event = document.getElementById(id);
    if (event.style.display === "none" || event.style.display === "") {
        event.style.display = "block";
    } else {
        event.style.display = "none";
    }
}

/* function to toggle text */

/*function toggleText(id) {
    var text = document.getElementById(id);
    if (text.style.display === "none" || text.style.display === "") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

/* function to toggle image */

/*function toggleImage(id) {
    var image = document.getElementById(id);
    if (image.style.display === "none" || image.style.display === "") {
        image.style.display = "block";
    } else {
        image.style.display = "none";
    }
}

/* function to toggle video */
/*
function toggleVideo(id) {
    var video = document.getElementById(id);
    if (video.style.display === "none" || video.style.display === "") {
        video.style.display = "block";
    } else {
        video.style.display = "none";
    }
}

    document.getElementById('contactoForm').addEventListener('submit', async function(event) {
        event.preventDefault(); 

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const mensaje = document.getElementById('mensaje').value;

        const response = await fetch('/api/contacto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombre, email, telefono, mensaje }),
        });

        if (response.ok) {
            alert('Formulario enviado con éxito');
            document.getElementById('contactoForm').reset();
        } else {
            alert('Error al enviar el formulario');
        }
    });\
    
    */

