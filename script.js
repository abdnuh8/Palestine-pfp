const upload = document.getElementById('upload');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const downloadBtn = document.getElementById('download');

function drawImage(image) {
    const size = 300;
    canvas.width = size;
    canvas.height = size;
    
    // Create circular mask
    ctx.beginPath();
    ctx.arc(size/2, size/2, size/2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();
    
    ctx.drawImage(image, 0, 0, size, size);
}

upload.addEventListener('change', function(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
            drawImage(img);
        }
        img.src = event.target.result;
    }
    
    reader.readAsDataURL(file);
});

downloadBtn.addEventListener('click', function() {
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'palestine-solidarity.png';
    link.href = dataUrl;
    link.click();
});
