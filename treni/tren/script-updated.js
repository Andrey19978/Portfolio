document.getElementById('showModalButton').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
});

document.getElementById('closeModalButton').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

document.getElementById('registerButton').addEventListener('click', function() {
    var form = document.getElementById('registrationForm');
    var overlay = document.getElementById('overlay');
    form.style.display = 'block';
    overlay.style.display = 'block';
});

document.getElementById('closeButton').addEventListener('click', function() {
    var form = document.getElementById('registrationForm');
    var overlay = document.getElementById('overlay');
    form.style.display = 'none';
    overlay.style.display = 'none';
});

document.getElementById('visil').addEventListener('click',
    function() {
        var form = document.getElementById('fom');
        var overlay = document.getElementById('overlay');
        form.style.display = 'block';
        overlay.style.display = 'block';
        }
)
