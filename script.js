document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('yes-button').addEventListener('click', function() {
        window.location.href = 'yes.html';
    });

    document.getElementById('no-button').addEventListener('click', function() {
        window.location.href = 'no.html';
    });
});