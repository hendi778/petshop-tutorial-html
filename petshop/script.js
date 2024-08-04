document.addEventListener('DOMContentLoaded', function() {
    // Pengiriman formulir kontak
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const message = event.target.message.value;

        if (name && email && message) {
            alert(`Terima kasih atas pesan Anda, ${name}!`);
            event.target.reset();
        } else {
            alert('Harap isi semua kolom');
        }
    });
});