
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DAGO BUTIK</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
    <h1>DAGO BUTIK</h1>
    <p>Fashion Cantik, Elegan, dan Berkualitas</p>
    <nav>
        <a href="#home">Home</a>
        <a href="#produk">Produk</a>
        <a href="#tentang">Tentang Kami</a>
        <a href="#kontak">Kontak</a>
    </nav>
</header>

<section class="hero" id="home">
    <h2>Selamat Datang di Dago Butik</h2>
    <p>Temukan gaya fashion terbaik untuk penampilanmu.</p>
    <a href="#produk" class="btn">Lihat Produk</a>
</section>

<section id="produk">
    <h2>Koleksi Produk Kami</h2>

    <div class="produk-container">

        <div class="produk">
            <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500" alt="Dress wanita">
            <h3>Dress Wanita</h3>
            <p>Rp150.000</p>
            <button onclick="beli('Dress Wanita')">Beli Sekarang</button>
        </div>

        <div class="produk">
            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500" alt="Baju fashion">
            <h3>Fashion Casual</h3>
            <p>Rp120.000</p>
            <button onclick="beli('Fashion Casual')">Beli Sekarang</button>
        </div>

        <div class="produk">
            <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500" alt="Pakaian wanita">
            <h3>Outfit Modern</h3>
            <p>Rp180.000</p>
            <button onclick="beli('Outfit Modern')">Beli Sekarang</button>
        </div>

    </div>
</section>

<section id="tentang">
    <h2>Tentang Dago Butik</h2>
    <p>
        Dago Butik merupakan toko fashion yang menyediakan
        berbagai pilihan pakaian berkualitas dengan model
        modern, elegan, dan harga terjangkau.
    </p>
</section>

<section id="kontak">
    <h2>Hubungi Kami</h2>
    <p>Instagram: @dagobutik</p>
    <p>WhatsApp: 08xxxxxxxxxx</p>
</section>

<footer>
    <p>&copy; 2026 Dago Butik. All Rights Reserved.</p>
</footer>

<script src="script.js"></script>
</body>
</html>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #f8f1e7;
    color: #49372b;
}

header {
    background: #6b4935;
    color: white;
    text-align: center;
    padding: 25px;
}

header h1 {
    font-size: 35px;
    letter-spacing: 4px;
}

nav {
    margin-top: 20px;
}

nav a {
    color: white;
    text-decoration: none;
    margin: 12px;
    font-weight: bold;
}

.hero {
    text-align: center;
    padding: 100px 20px;
    background: #e8d5c0;
}

.hero h2 {
    font-size: 35px;
    margin-bottom: 15px;
}

.btn {
    display: inline-block;
    background: #6b4935;
    color: white;
    padding: 12px 25px;
    margin-top: 25px;
    text-decoration: none;
    border-radius: 5px;
}

section {
    padding: 50px 20px;
    text-align: center;
}

.produk-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;
    margin-top: 30px;
}

.produk {
    background: white;
    padding: 15px;
    width: 260px;
    border-radius: 10px;
    box-shadow: 0 3px 10px #00000020;
}

.produk img {
    width: 100%;
    height: 230px;
    object-fit: cover;
    border-radius: 8px;
}

.produk h3 {
    margin: 15px 0;
}

.produk p {
    color: #9a603c;
    font-weight: bold;
    margin-bottom: 15px;
}

button {
    background: #6b4935;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover, .btn:hover {
    background: #a47756;
}

#tentang p {
    max-width: 650px;
    margin: 20px auto;
    line-height: 1.8;
}

footer {
    background: #6b4935;
    color: white;
    text-align: center;
    padding: 20px;
}

@media (max-width: 600px) {
    nav a {
        display: inline-block;
        margin: 8px;
    }

    .hero h2 {
        font-size: 27px;
    }
}

function beli(produk) {
    const nomorWhatsApp = "6281234567890";

    const pesan = "Halo Dago Butik, saya ingin membeli "
                  + produk;

    const link = "https://wa.me/" + nomorWhatsApp
                 + "?text=" + encodeURIComponent(pesan);

    window.open(link, "_blank");
}

