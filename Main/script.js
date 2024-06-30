const radioButtons = document.querySelectorAll('.btn-check');
radioButtons.forEach(button => {
  button.addEventListener('change', function() {
    // Tüm içerikleri gizle
    document.querySelectorAll('.content').forEach(content => {
      content.style.display = 'none';
    });

    // Seçili radio butonun ID'sine göre ilgili içeriği göster
    const contentId = this.getAttribute('id').replace('btnradio', 'content');
    document.getElementById(contentId).style.display = 'block';
  });
});

function showContent(contentId) {
  // Tüm içerik öğelerini gizle
  const contents = document.querySelectorAll('.content-item');
  contents.forEach(content => content.classList.remove('active'));

  // Tıklanan butona ait içeriği göster
  document.getElementById(contentId).classList.add('active');
}

// Sayfa yüklendiğinde ilk içeriği göster
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('content1').classList.add('active');
});
