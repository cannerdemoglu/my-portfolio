# My-Portfolio — Muhammed Can Erdemoğlu

Kişisel portföy sitemin kaynak kodları. Eğitim sürecimdeki ödev/proje çalışmaları, becerilerim ve iletişim bilgilerim yer alır. Mobil öncelikli, modern bir arayüz ve temel SEO uygulamaları içerir.

## İçerik ve Sayfalar
- **Ana Sayfa** (`index.html`)
- **Hakkımda** (`about-me.html`)
- **Ödevlerim** (`homework.html`)
- **Projeler** (`projects.html`) — Ana sayfadan kartlar kaldırılmıştır; bölüm başlığı gezinme için durur.
- **İletişim** (`contact.html`)
- **Proje Detayları** (`project/ui-ux.html`, `project/uygulama-odevi.html`)

## Özellikler
- **Mobil öncelikli tasarım** ve duyarlı grid yapısı
- **Açık/Koyu tema** (class tabanlı)
- **Mobil tipografi**: h1 16px, h2 14px, p 12px
- **Yatay kaydırmalı liste (slider)**: Mobilde “Ödevlerim” bölümü snap-scroll ile kayar
- **Geliştirilmiş hamburger ikon görünürlüğü** (stroke tabanlı SVG)
- **Tema rengi**: Birincil renk `#3955A2`
- **SEO**: Meta açıklamalar, Open Graph/Twitter kartları ve JSON‑LD (Ana Sayfa, Hakkımda, İletişim)

## Teknolojiler
- HTML5, CSS (TailwindCSS CDN), minimal JS
- Google Fonts: Space Grotesk, Material Symbols
- Tailwind yapılandırması: `script/tailwind.config.js`

## Hızlı Başlangıç
1. Bu projeyi klonla veya indir.
2. Tarayıcıda `index.html` dosyasını aç.
3. Geliştirme sırasında canlı yenileme için bir statik sunucu kullanabilirsin (VS Code Live Server vb.).

## Özelleştirme
- **Tema rengi**: `script/tailwind.config.js` içinde `colors.primary` değerini güncelle.
- **SEO kanonik URL**: Yayına aldığında `index.html`, `about-me.html`, `contact.html` dosyalarındaki `canonical` ve `og:url` alanlarını kendi alan adınla değiştir.
- **OG görselleri**: Kullandığın görselleri kalıcı bir host’a al ve `og:image` alanlarını güncelle.
- **Görseller**: `img/` klasörüne ekle; `about-me.html` profil resmi `img/pp.JPG` kullanır.

## Yol Haritası
- Proje kartlarının yeniden eklenmesi ve kategori/etiket filtreleri
- Basit blog veya notlar bölümü (ödev açıklamaları, ders notları)
- Daha kapsamlı Lighthouse/SEO iyileştirmeleri ve sitemap/robots

## İletişim
- E‑posta: `252011020@ogr.alanya.edu.tr`
- GitHub: `https://github.com/cannerdemoglu`
- LinkedIn: `https://www.linkedin.com/in/cannerdemoglu`
- Instagram: `https://instagram.com/cannerdemoglu`

