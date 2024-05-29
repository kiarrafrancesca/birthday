document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('tap').addEventListener('change', function() {
        var button1 = document.querySelector('.button1');
        if (this.checked) {
            button1.style.display = 'block';
        } else {
            button1.style.display = 'none';
        }
    });

    document.getElementById('button1').addEventListener('click', function() {
        var hidden2 = document.getElementById('hidden2');
        var images = document.getElementById('images');
        var giftbox = document.getElementById('giftbox');
        var button1 = document.getElementById('button1');
        var button2 = document.getElementById('button2');
        hidden2.style.display = 'block';
        images.style.display = 'none';
        giftbox.style.display = 'none';
        button1.style.display = 'none';
        button2.style.display = 'block';
    });

    document.getElementById('button2').addEventListener('click', function() {
        var hidden2 = document.getElementById('hidden2');
        var images = document.getElementById('images');
        var giftbox = document.getElementById('giftbox');
        var button1 = document.getElementById('button1');
        var button2 = document.getElementById('button2');
        hidden2.style.display = 'none'
        images.style.display = 'grid';
        giftbox.style.display = 'none';
        button1.style.display = 'none';
        button2.style.display = 'none';
    });
});