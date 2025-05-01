
const upload = document.getElementById('upload');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const downloadBtn = document.getElementById('download');

upload.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.beginPath();
      ctx.arc(200, 200, 200, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(img, 0, 0, 400, 400);
      ctx.restore();

      // Draw border
      ctx.beginPath();
      ctx.arc(200, 200, 195, 0, 2 * Math.PI);
      ctx.lineWidth = 10;
      ctx.strokeStyle = 'black';
      ctx.stroke();

      // Flag border sections
      ctx.beginPath();
      ctx.arc(200, 200, 190, -Math.PI / 2, 0);
      ctx.strokeStyle = 'red';
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(200, 200, 190, 0, Math.PI / 2);
      ctx.strokeStyle = 'green';
      ctx.stroke();
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
});

downloadBtn.addEventListener('click', () => {
  const link = document.createElement('a');
  link.download = 'palestine-profile.png';
  link.href = canvas.toDataURL();
  link.click();
});
