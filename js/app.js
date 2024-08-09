//! Search
document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    const pages = [
        { title: 'Anasayfa', url: '/templates/index.html' },
        { title: 'İstanbul', url: '/templates/istanbul.html' },
        { title: 'Plan Oluştur', url: '/templates/plan.html' },
        { title: 'Bilgilerim', url: '/templates/about.html' },
        { title: 'Çarkı Çevir', url: '/templates/game.html' },
        { title: 'Kayıt Ol / Giriş Yap', url: '/templates/login.html' },
        { title: 'Gezi Haritası', url: '/templates/travel.html' },
    ];

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const query = normalizeString(searchInput.value);
        const results = pages.filter(page => normalizeString(page.title).includes(query));
        if (results.length > 0) {
            window.location.href = results[0].url; // İlk sonucu seçip yönlendiriyoruz
        } else {
            searchResults.textContent = 'No results found';
        }
    });

    function normalizeString(str) {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase(); // Normalize special characters and lower case
    }
});





//! footer
const ilceler = [
    { name: "Adalar", url: "https://www.adalar.bel.tr/" },
    { name: "Arnavutköy", url: "https://www.arnavutkoy.bel.tr/" },
    { name: "Ataşehir", url: "https://www.atasehir.bel.tr/" },
    { name: "Avcılar", url: "https://www.avcilar.bel.tr/" },
    { name: "Bağcılar", url: "https://www.bagcilar.bel.tr/" },
    { name: "Bahçelievler", url: "https://www.bahcelievler.bel.tr/" },
    { name: "Bakırköy", url: "https://www.bakirkoy.bel.tr/" },
    { name: "Başakşehir", url: "https://www.basaksehir.bel.tr/" },
    { name: "Bayrampaşa", url: "https://www.bayrampasa.bel.tr/" },
    { name: "Beşiktaş", url: "https://www.besiktas.bel.tr/" },
    { name: "Beykoz", url: "https://www.beykoz.bel.tr/" },
    { name: "Beylikdüzü", url: "https://www.beylikduzu.bel.tr/" },
    { name: "Beyoğlu", url: "https://www.beyoglu.bel.tr/" },
    { name: "Büyükçekmece", url: "https://www.bcekmece.bel.tr/" },
    { name: "Çatalca", url: "https://www.catalca.bel.tr/" },
    { name: "Çekmeköy", url: "https://www.cekmekoy.bel.tr/" },
    { name: "Esenler", url: "https://www.esenler.bel.tr/" },
    { name: "Esenyurt", url: "https://www.esenyurt.bel.tr/" },
    { name: "Eyüpsultan", url: "https://www.eyupsultan.bel.tr/" },
    { name: "Fatih", url: "https://www.fatih.bel.tr/" },
    { name: "Gaziosmanpaşa", url: "https://www.gaziosmanpasa.bel.tr/" },
    { name: "Güngören", url: "https://www.gungoren.bel.tr/" },
    { name: "Kadıköy", url: "https://www.kadikoy.bel.tr/" },
    { name: "Kağıthane", url: "https://www.kagithane.bel.tr/" },
    { name: "Kartal", url: "https://www.kartal.bel.tr/" },
    { name: "Küçükçekmece", url: "https://www.kucukcekmece.bel.tr/" },
    { name: "Maltepe", url: "https://www.maltepe.bel.tr/" },
    { name: "Pendik", url: "https://www.pendik.bel.tr/" },
    { name: "Sancaktepe", url: "https://www.sancaktepe.bel.tr/" },
    { name: "Sarıyer", url: "https://www.sariyer.bel.tr/" },
    { name: "Silivri", url: "https://www.silivri.bel.tr/" },
    { name: "Sultanbeyli", url: "https://www.sultanbeyli.bel.tr/" },
    { name: "Sultangazi", url: "https://www.sultangazi.bel.tr/" },
    { name: "Şile", url: "https://www.sile.bel.tr/" },
    { name: "Şişli", url: "https://www.sisli.bel.tr/" },
    { name: "Tuzla", url: "https://www.tuzla.bel.tr/" },
    { name: "Ümraniye", url: "https://www.umraniye.bel.tr/" },
    { name: "Üsküdar", url: "https://www.uskudar.bel.tr/" },
    { name: "Zeytinburnu", url: "https://www.zeytinburnu.bel.tr/" }
];

// 3 sütunu seçiyoruz
const col1 = document.getElementById('ilce-listesi-1');
const col2 = document.getElementById('ilce-listesi-2');
const col3 = document.getElementById('ilce-listesi-3');

// İlçeleri 3 sütuna eşit olarak dağıtıyoruz
ilceler.forEach((ilce, index) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = ilce.url;
    a.textContent = ilce.name;
    li.appendChild(a);

    if (index % 3 === 0) {
        col1.appendChild(li);
    } else if (index % 3 === 1) {
        col2.appendChild(li);
    } else {
        col3.appendChild(li);
    }
});


//! Plan oluştur

document.addEventListener('DOMContentLoaded', () => {
    const ilceSelect = document.getElementById('ilceSelect');
    const categoryFilters = document.getElementById('categoryFilters');
    const filterButton = document.getElementById('filterButton');


    // İlçe verisi
    const ilceler = [
        'Adalar', 'Arnavutköy', 'Ataşehir', 'Avcılar', 'Bağcılar', 'Bakırköy', 'Başakşehir', 'Bayrampaşa', 'Beşiktaş', 'Beykoz', 'Beyoğlu', 'Büyükçekmece', 'Çatalca', 'Çekmeköy', 'Esenler', 'Esenyurt', 'Eyüp', 'Fatih', 'Gaziosmanpaşa', 'Güngören', 'Kadıköy', 'Kağıthane', 'Kartal', 'Küçükçekmece', 'Maltepe', 'Pendik', 'Sancaktepe', 'Sarıyer', 'Silivri', 'Şişli', 'Sultanbeyli', 'Tuzla', 'Üsküdar', 'Zeytinburnu'
    ];

    // Kategori verisi
    const kategoriler = ['eglence', 'sanat', 'kultur', 'alisveris', 'doga'];

    // Fonksiyon: Türkçe karakterleri normalleştir
    function normalizeString(str) {
        return str
            .toLowerCase()
            .replace(/ı/g, 'i')
            .replace(/ş/g, 's')
            .replace(/ü/g, 'u')
            .replace(/ö/g, 'o')
            .replace(/ç/g, 'c')
            .replace(/ğ/g, 'g');
    }

    // İlçeleri ekle
    ilceler.forEach(ilce => {
        const option = document.createElement('option');
        option.value = normalizeString(ilce);
        option.textContent = ilce;
        ilceSelect.appendChild(option);
    });

    // Kategorileri ekle
    kategoriler.forEach(kategori => {
        const div = document.createElement('div');
        div.className = 'form-check';
        div.innerHTML = `
            <input class="form-check-input" type="checkbox" value="${kategori}" id="${kategori}">
            <label class="form-check-label" for="${kategori}">
                ${kategori.charAt(0).toUpperCase() + kategori.slice(1)}
            </label>
        `;
        categoryFilters.appendChild(div);
    });

    const data = {
        adalar: {
            eglence: ["Büyükada Luna Park", "Heybeliada Papatya Cafe", "Burgazada Konak Cafe"],
            sanat: ["Adalar Sanat Galerisi", "Büyükada Rum Yetimhanesi", "Heybeliada Sanat Evi"],
            kultur: ["Adalar Müzesi", "Büyükada Tarihi Köşk", "Heybeliada İsmet İnönü Evi"],
            alisveris: ["Adalar Butik", "Büyükada Çiçekçi", "Heybeliada Hediyelik Eşyalar"],
            doga: ["Büyükada Çamlıca Tepesi", "Heybeliada Doğa Parkı", "Burgazada Doğal Yaşam Alanı"]
        },
        arnavutkoy: {
            eglence: ["Arnavutköy Kafe", "Pelit Cafe", "Arnavutköy Alışveriş Merkezi"],
            sanat: ["Arnavutköy Sanat Merkezi", "Yıldız Klasik Sanatlar", "İstanbul Sanat Atölyesi"],
            kultur: ["Arnavutköy Kültür Merkezi", "İstanbul Modern", "Pelit Kültür Merkezi"],
            alisveris: ["Arnavutköy AVM", "Mega Alışveriş Merkezi", "Arnavutköy Butik"],
            doga: ["Arnavutköy Parkı", "Ağaçlı Park", "Küçükçekmece Gölü Parkı"]
        },
        atasehir: {
            eglence: ["Mimar Sinan Parkı Kafe", "Ataşehir Bowling Salonu", "Oasis Alışveriş Merkezi"],
            sanat: ["Ataşehir Sanat Galerisi", "Mimar Sinan Üniversitesi", "Sahne Ataşehir"],
            kultur: ["Ataşehir Kültür Merkezi", "İstanbul Kültür Merkezi", "Müze-İstanbul"],
            alisveris: ["Metropol AVM", "Ataşehir Alışveriş Merkezi", "Moda Caddesi"],
            doga: ["Ataşehir Parkı", "Çamlıca Tepesi", "Bostancı Parkı"]
        },
        avcilar: {
            eglence: ["Avcılar Sahil Kafe", "Avcılar Parkı", "Aqua Florya Alışveriş Merkezi"],
            sanat: ["Avcılar Sanat Merkezi", "Florya Sanat Evi", "Avcılar Kültür Merkezi"],
            kultur: ["Avcılar Kültür Merkezi", "Florya Kültür Merkezi", "İstanbul Kültür Merkezi"],
            alisveris: ["Avcılar AVM", "Florya AVM", "Marmara Park AVM"],
            doga: ["Avcılar Sahili", "Florya Orman Parkı", "Küçükçekmece Gölü"]
        },
        bagcilar: {
            eglence: ["Bağcılar Parkı", "Süleyman Seba Kafe", "StarCity Alışveriş Merkezi"],
            sanat: ["Bağcılar Sanat Merkezi", "Bağcılar Kültür Merkezi"],
            kultur: ["Bağcılar Kültür Merkezi", "Kadın Aile Kültür Merkezi",],
            alisveris: ["Bağcılar AVM", "MallOfİstanbul", "StarCity AVM"],
            doga: ["Bağcılar Parkı", "Molla Gürani Parkı", "Millet Bahçesi"]
        },
        bahcelievler: {
            eglence: ["Bahçelievler Hürriyet Parkı Kafe", "Marmara Forum AVM", "Bahçelievler Sineması"],
            sanat: ["Bahçelievler Sanat Evi", "İstanbul Kültür Merkezi", "Halk Eğitim Merkezi"],
            kultur: ["Bahçelievler Kültür Merkezi", "İstanbul Tarih Müzesi", "Edebiyat Müzesi"],
            alisveris: ["Marmara Forum AVM", "Bahçelievler AVM", "Metroport AVM"],
            doga: ["Bahçelievler Parkı", "Küçükçekmece Gölü", "Halkalı Parkı"]
        },
        bakirkoy: {
            eglence: ["Bakırköy Botanik Parkı", "Carousel AVM", "Capacity AVM"],
            sanat: ["Bakırköy Sanat Merkezi", "İstanbul Resim ve Heykel Müzesi", "Atatürk Kültür Merkezi"],
            kultur: ["Bakırköy Kültür Merkezi", "İstanbul Modern", "Yedikule Hisarı"],
            alisveris: ["Carousel AVM", "Capacity AVM", "Aqua Florya AVM"],
            doga: ["Bakırköy Botanik Parkı", "Florya Orman Parkı", "Küçükçekmece Gölü"]
        },
        basaksehir: {
            eglence: ["Başakşehir Park Kafe", "İstanbul Arena", "Başakşehir Çam ve Sakura Şehir Hastanesi"],
            sanat: ["Başakşehir Sanat Merkezi", "Mimar Sinan Üniversitesi", "Başakşehir Kültür Merkezi"],
            kultur: ["Başakşehir Kültür Merkezi", "İstanbul Kültür Merkezi", "İstanbul Müzesi"],
            alisveris: ["Başakşehir AVM", "Mall of İstanbul", "İstanbul AVM"],
            doga: ["Başakşehir Parkı", "Kıraç Orman Parkı", "Tuzla Ormanları"]
        },
        bayrampasa: {
            eglence: ["Bayrampaşa Forum AVM", "Bayrampaşa Parkı Kafe", "Bayrampaşa Spor Salonu"],
            sanat: ["Bayrampaşa Sanat Merkezi", "İstanbul Modern", "İstanbul Resim ve Heykel Müzesi"],
            kultur: ["Bayrampaşa Kültür Merkezi", "İstanbul Tarih Müzesi", "Halk Eğitim Merkezi"],
            alisveris: ["Bayrampaşa Forum AVM", "Vialand AVM", "İstanbul AVM"],
            doga: ["Bayrampaşa Parkı", "Küçükçekmece Gölü", "Ağaçlı Park"]
        },
        besiktas: {
            eglence: ["Beşiktaş Çarşı", "Beşiktaş Deniz Kafe", "Ortaköy Meydanı"],
            sanat: ["Beşiktaş Sanat Merkezi", "İstanbul Modern", "İstanbul Resim ve Heykel Müzesi"],
            kultur: ["Beşiktaş Kültür Merkezi", "Yıldız Sarayı", "Dolmabahçe Sarayı"],
            alisveris: ["Beşiktaş AVM", "Zorlu Center", "Kanyon AVM"],
            doga: ["Yıldız Parkı", "Beşiktaş Parkı", "Ortaköy Parkı"]
        },
        beykoz: {
            eglence: ["Beykoz Korusu", "Beykoz Sahil", "Beykoz Parkı"],
            sanat: ["Beykoz Sanat Evi", "İstanbul Resim ve Heykel Müzesi", "İstanbul Modern"],
            kultur: ["Beykoz Kültür Merkezi", "Yoros Kalesi", "Hidiv Kasrı"],
            alisveris: ["Beykoz AVM", "Kavacık AVM", "Acarkent AVM"],
            doga: ["Polonezköy Tabiat Parkı", "Beykoz Korusu", "Mihrabat Korusu"]
        },
        beyoglu: {
            eglence: ["Taksim Meydanı", "İstiklal Caddesi", "Galata Kulesi"],
            sanat: ["İstanbul Modern", "Pera Müzesi", "Salt Beyoğlu"],
            kultur: ["Galata Kulesi", "Taksim Cumhuriyet Anıtı", "Çiçek Pasajı"],
            alisveris: ["Demirören AVM", "Taksim Meydanı Çarşısı", "Atlas Pasajı"],
            doga: ["Gezi Parkı", "Taksim Parkı", "Gümüşsuyu Parkı"]
        },
        buyukcekmece: {
            eglence: ["Büyükçekmece Sahil", "Aqua Marine", "Büyükçekmece Alışveriş Merkezi"],
            sanat: ["Büyükçekmece Sanat Merkezi", "Kültürpark", "Atatürk Kültür Merkezi"],
            kultur: ["Mimar Sinan Köprüsü", "Büyükçekmece Kalesi", "Atatürk Kültür Merkezi"],
            alisveris: ["Büyükçekmece AVM", "Atirus AVM", "Aqua Marine AVM"],
            doga: ["Büyükçekmece Sahili", "Albatros Parkı", "Küçükçekmece Gölü"]
        },
        catalca: {
            eglence: ["Çatalca Sahil", "Çatalca Parkı", "Çatalca Kafe"],
            sanat: ["Çatalca Sanat Merkezi", "Çatalca Sanat Evi", "İstanbul Modern"],
            kultur: ["Çatalca Kültür Merkezi", "Çatalca Kalesi", "Çatalca Müzesi"],
            alisveris: ["Çatalca AVM", "İstanbul AVM", "Çatalca Butik"],
            doga: ["Çilingoz Tabiat Parkı", "Gökçeali Göleti", "Çatalca Ormanları"]
        },
        cekmekoy: {
            eglence: ["Çekmeköy Parkı", "Çekmeköy Kafe", "Çekmeköy AVM"],
            sanat: ["Çekmeköy Sanat Merkezi", "Çekmeköy Sanat Evi", "İstanbul Modern"],
            kultur: ["Çekmeköy Kültür Merkezi", "Saklı Göl", "Küçüksu Kasrı"],
            alisveris: ["Çekmeköy AVM", "Metrogarden AVM", "Çekmeköy Butik"],
            doga: ["Alemdağ Ormanları", "Taşdelen Mesire Alanı", "Sarıgazi Parkı"]
        },
        esenler: {
            eglence: ["Esenler Parkı", "Esenler AVM", "Esenler Kafe"],
            sanat: ["Esenler Sanat Merkezi", "İstanbul Modern", "Esenler Resim ve Heykel Müzesi"],
            kultur: ["Esenler Kültür Merkezi", "Tarihi Su Kemerleri", "Yıldız Sarayı"],
            alisveris: ["Esenler AVM", "Forum İstanbul", "Esenler Butik"],
            doga: ["Esenler Parkı", "Esenler Orman Parkı", "Kemerburgaz Kent Ormanı"]
        },
        esenyurt: {
            eglence: ["Esenyurt Parkı", "Esenyurt Kafe", "Esenyurt AVM"],
            sanat: ["Esenyurt Sanat Merkezi", "İstanbul Modern", "Esenyurt Resim ve Heykel Müzesi"],
            kultur: ["Esenyurt Kültür Merkezi", "Tarihi Su Kemerleri", "Yıldız Sarayı"],
            alisveris: ["Esenyurt AVM", "Torium AVM", "Esenyurt Butik"],
            doga: ["Esenyurt Parkı", "Esenyurt Orman Parkı", "Kemerburgaz Kent Ormanı"]
        },
        eyupsultan: {
            eglence: ["Eyüp Sultan Parkı", "Eyüp Sultan Kafe", "Eyüp Sultan AVM"],
            sanat: ["Eyüp Sultan Sanat Merkezi", "İstanbul Modern", "Eyüp Sultan Resim ve Heykel Müzesi"],
            kultur: ["Eyüp Sultan Kültür Merkezi", "Pierre Loti Tepesi", "Yıldız Sarayı"],
            alisveris: ["Eyüp Sultan AVM", "Vialand AVM", "Eyüp Sultan Butik"],
            doga: ["Eyüp Sultan Parkı", "Pierre Loti Tepesi", "Kemerburgaz Kent Ormanı"]
        },
        fatih: {
            eglence: ["Fatih Parkı", "Fatih Kafe", "Fatih AVM"],
            sanat: ["Fatih Sanat Merkezi", "İstanbul Modern", "Fatih Resim ve Heykel Müzesi"],
            kultur: ["Fatih Kültür Merkezi", "Topkapı Sarayı", "Yıldız Sarayı"],
            alisveris: ["Fatih AVM", "Historia AVM", "Fatih Butik"],
            doga: ["Fatih Parkı", "Gülhane Parkı", "Kemerburgaz Kent Ormanı"]
        },
        gaziosmanpasa: {
            eglence: ["Gaziosmanpaşa Parkı", "Gaziosmanpaşa Kafe", "Gaziosmanpaşa AVM"],
            sanat: ["Gaziosmanpaşa Sanat Merkezi", "İstanbul Modern", "Gaziosmanpaşa Resim ve Heykel Müzesi"],
            kultur: ["Gaziosmanpaşa Kültür Merkezi", "Tarihi Su Kemerleri", "Yıldız Sarayı"],
            alisveris: ["Gaziosmanpaşa AVM", "Forum İstanbul", "Gaziosmanpaşa Butik"],
            doga: ["Gaziosmanpaşa Parkı", "Gaziosmanpaşa Orman Parkı", "Kemerburgaz Kent Ormanı"]
        },
        gungoren: {
            eglence: ["Güngören Parkı", "Güngören Kafe", "Güngören AVM"],
            sanat: ["Güngören Sanat Merkezi", "İstanbul Modern", "Güngören Resim ve Heykel Müzesi"],
            kultur: ["Güngören Kültür Merkezi", "Tarihi Su Kemerleri", "Yıldız Sarayı"],
            alisveris: ["Güngören AVM", "Kale Outlet Center", "Güngören Butik"],
            doga: ["Güngören Parkı", "Güngören Orman Parkı", "Kemerburgaz Kent Ormanı"]
        },
        kadikoy: {
            eglence: ["Kadıköy Sahil", "Moda Sahnesi", "Kadıköy Çarşısı"],
            sanat: ["Kadıköy Sanat Merkezi", "Barış Manço Kültür Merkezi", "Süreyya Operası"],
            kultur: ["Kadıköy Kültür Merkezi", "Moda Sahnesi", "Bahariye Caddesi"],
            alisveris: ["Kadıköy AVM", "Akasya AVM", "Tepe Nautilus"],
            doga: ["Moda Parkı", "Fenerbahçe Parkı", "Göztepe Parkı"]
        },
        kagithane: {
            eglence: ["Kağıthane Parkı", "Kağıthane Kafe", "Kağıthane AVM"],
            sanat: ["Kağıthane Sanat Merkezi", "İstanbul Modern", "Kağıthane Resim ve Heykel Müzesi"],
            kultur: ["Kağıthane Kültür Merkezi", "Sadabad Kasrı", "Yıldız Sarayı"],
            alisveris: ["Kağıthane AVM", "Axis İstanbul", "Kağıthane Butik"],
            doga: ["Kağıthane Parkı", "Sadabad Parkı", "Kemerburgaz Kent Ormanı"]
        },
        kartal: {
            eglence: ["Kartal Sahil", "Kartal Kafe", "Kartal AVM"],
            sanat: ["Kartal Sanat Merkezi", "İstanbul Modern", "Kartal Resim ve Heykel Müzesi"],
            kultur: ["Kartal Kültür Merkezi", "Dragos Tepesi", "Yıldız Sarayı"],
            alisveris: ["Kartal AVM", "İstmarina AVM", "Kartal Butik"],
            doga: ["Kartal Sahil", "Aydos Ormanı", "Dragos Tepesi"]
        },
        kucukcekmece: {
            eglence: ["Küçükçekmece Parkı", "Küçükçekmece Kafe", "Küçükçekmece AVM"],
            sanat: ["Küçükçekmece Sanat Merkezi", "İstanbul Modern", "Küçükçekmece Resim ve Heykel Müzesi"],
            kultur: ["Küçükçekmece Kültür Merkezi", "Tarihi Su Kemerleri", "Yıldız Sarayı"],
            alisveris: ["Küçükçekmece AVM", "ArenaPark AVM", "Küçükçekmece Butik"],
            doga: ["Küçükçekmece Parkı", "Küçükçekmece Gölü", "Kemerburgaz Kent Ormanı"]
        },
        maltepe: {
            eglence: ["Maltepe Sahil", "Maltepe Kafe", "Maltepe AVM"],
            sanat: ["Maltepe Sanat Merkezi", "İstanbul Modern", "Maltepe Resim ve Heykel Müzesi"],
            kultur: ["Maltepe Kültür Merkezi", "Başıbüyük Mezarlığı", "Yıldız Sarayı"],
            alisveris: ["Maltepe AVM", "Hilltown AVM", "Maltepe Butik"],
            doga: ["Maltepe Sahil", "Maltepe Orman Parkı", "Kemerburgaz Kent Ormanı"]
        },
        pendik: {
            eglence: ["Pendik Sahil", "Pendik Kafe", "Pendik AVM"],
            sanat: ["Pendik Sanat Merkezi", "İstanbul Modern", "Pendik Resim ve Heykel Müzesi"],
            kultur: ["Pendik Kültür Merkezi", "Pendik Marina", "Yıldız Sarayı"],
            alisveris: ["Pendik AVM", "Pendorya AVM", "Pendik Butik"],
            doga: ["Pendik Sahil", "Aydos Ormanı", "Kemerburgaz Kent Ormanı"]
        },
        sancaktepe: {
            eglence: ["Sancaktepe Parkı", "Sancaktepe Kafe", "Sancaktepe AVM"],
            sanat: ["Sancaktepe Sanat Merkezi", "İstanbul Modern", "Sancaktepe Resim ve Heykel Müzesi"],
            kultur: ["Sancaktepe Kültür Merkezi", "Tarihi Su Kemerleri", "Yıldız Sarayı"],
            alisveris: ["Sancaktepe AVM", "Rings AVM", "Sancaktepe Butik"],
            doga: ["Sancaktepe Parkı", "Sancaktepe Orman Parkı", "Kemerburgaz Kent Ormanı"]
        },
        sultanbeyli: {
            eglence: ["Sultanbeyli Parkı", "Sultanbeyli Kafe", "Sultanbeyli AVM"],
            sanat: ["Sultanbeyli Sanat Merkezi", "İstanbul Modern", "Sultanbeyli Resim ve Heykel Müzesi"],
            kultur: ["Sultanbeyli Kültür Merkezi", "Tarihi Su Kemerleri", "Yıldız Sarayı"],
            alisveris: ["Sultanbeyli AVM", "AtlasPark AVM", "Sultanbeyli Butik"],
            doga: ["Sultanbeyli Parkı", "Sultanbeyli Orman Parkı", "Kemerburgaz Kent Ormanı"]
        },
        sultangazi: {
            eglence: ["Sultangazi Parkı", "Sultangazi Kafe", "Sultangazi AVM"],
            sanat: ["Sultangazi Sanat Merkezi", "İstanbul Modern", "Sultangazi Resim ve Heykel Müzesi"],
            kultur: ["Sultangazi Kültür Merkezi", "Tarihi Su Kemerleri", "Yıldız Sarayı"],
            alisveris: ["Sultangazi AVM", "Vialand AVM", "Sultangazi Butik"],
            doga: ["Sultangazi Parkı", "Sultangazi Orman Parkı", "Kemerburgaz Kent Ormanı"]
        },
        sisli: {
            eglence: ["Şişli Parkı", "Şişli Kafe", "Şişli AVM"],
            sanat: ["Şişli Sanat Merkezi", "İstanbul Modern", "Şişli Resim ve Heykel Müzesi"],
            kultur: ["Şişli Kültür Merkezi", "Tarihi Su Kemerleri", "Yıldız Sarayı"],
            alisveris: ["Şişli AVM", "Cevahir AVM", "Şişli Butik"],
            doga: ["Şişli Parkı", "Maçka Parkı", "Kemerburgaz Kent Ormanı"]
        },
        tuzla: {
            eglence: ["Tuzla Sahil", "Tuzla Kafe", "Tuzla AVM"],
            sanat: ["Tuzla Sanat Merkezi", "İstanbul Modern", "Tuzla Resim ve Heykel Müzesi"],
            kultur: ["Tuzla Kültür Merkezi", "Tuzla Tersanesi", "Yıldız Sarayı"],
            alisveris: ["Tuzla AVM", "MarinaPark AVM", "Tuzla Butik"],
            doga: ["Tuzla Sahil", "Tuzla Orman Parkı", "Kemerburgaz Kent Ormanı"]
        },
        umraniye: {
            eglence: ["Ümraniye Parkı", "Ümraniye Kafe", "Ümraniye AVM"],
            sanat: ["Ümraniye Sanat Merkezi", "İstanbul Modern", "Ümraniye Resim ve Heykel Müzesi"],
            kultur: ["Ümraniye Kültür Merkezi", "Tarihi Su Kemerleri", "Yıldız Sarayı"],
            alisveris: ["Ümraniye AVM", "Canpark AVM", "Ümraniye Butik"],
            doga: ["Ümraniye Parkı", "Ümraniye Orman Parkı", "Kemerburgaz Kent Ormanı"]
        },
        uskudar: {
            eglence: ["Üsküdar Sahil", "Üsküdar Kafe", "Üsküdar AVM"],
            sanat: ["Üsküdar Sanat Merkezi", "İstanbul Modern", "Üsküdar Resim ve Heykel Müzesi"],
            kultur: ["Üsküdar Kültür Merkezi", "Kız Kulesi", "Yıldız Sarayı"],
            alisveris: ["Üsküdar AVM", "Capitol AVM", "Üsküdar Butik"],
            doga: ["Üsküdar Sahil", "Fethipaşa Korusu", "Kemerburgaz Kent Ormanı"]
        },
        zeytinburnu: {
            eglence: ["Zeytinburnu Sahil", "Zeytinburnu Kafe", "Zeytinburnu AVM"],
            sanat: ["Zeytinburnu Sanat Merkezi", "İstanbul Modern", "Zeytinburnu Resim ve Heykel Müzesi"],
            kultur: ["Zeytinburnu Kültür Merkezi", "Kazlıçeşme Sanat Merkezi", "Yıldız Sarayı"],
            alisveris: ["Zeytinburnu AVM", "Olivium AVM", "Zeytinburnu Butik"],
            doga: ["Zeytinburnu Sahil", "Kazlıçeşme Sahili", "Kemerburgaz Kent Ormanı"]
        }
    };

    filterButton.addEventListener('click', () => {
        const selectedIlce = ilceSelect.value;
        const selectedCategories = Array.from(categoryFilters.querySelectorAll('input:checked')).map(input => input.value);

        // Seçimlerin doğruluğunu kontrol et
        if (!selectedIlce || selectedCategories.length === 0) {
            alert('En az bir ilçe ve kategori seçiniz.');
            return; // Fonksiyonun geri kalanını çalıştırma
        }

        const mekanList = document.getElementById('mekanList');
        mekanList.innerHTML = ''; // Listeyi temizle

        // Eğer seçili ilçe varsa
        if (data[selectedIlce]) {
            const mekanlar = data[selectedIlce];

            selectedCategories.forEach(category => {
                if (mekanlar[category]) {
                    mekanlar[category].forEach(mekan => {
                        const li = document.createElement('li');
                        li.textContent = mekan;
                        mekanList.appendChild(li);
                    });
                }
            });
        }

        // Modal'ı göster
        const modal = new bootstrap.Modal(document.getElementById('mekanModal'));
        modal.show();


    });



});


//!Travel

function initMap() {
    // Kullanıcı konumu (Bağcılar Belediyesi)
    const userLocation = { lat: 41.0431, lng: 28.8497 };

    const allPlaces = [
        { name: "Bağcılar Parkı", position: { lat: 41.0365, lng: 28.8514 } },
        { name: "Süleyman Seba Kafe", position: { lat: 41.0408, lng: 28.8582 } },
        { name: "StarCity Alışveriş Merkezi", position: { lat: 41.0415, lng: 28.8542 } },
        { name: "Bağcılar Sanat Merkezi", position: { lat: 41.0387, lng: 28.8563 } },
        { name: "Bağcılar Kültür Merkezi", position: { lat: 41.0379, lng: 28.8578 } },
        { name: "Kadın Aile Kültür Merkezi", position: { lat: 41.0371, lng: 28.8583 } },
        { name: "Bağcılar AVM", position: { lat: 41.0371, lng: 28.8583 } },
        { name: "MallOfİstanbul", position: { lat: 41.0398, lng: 28.8577 } },
        { name: "StarCity AVM", position: { lat: 41.0415, lng: 28.8542 } },
        { name: "Molla Gürani Parkı", position: { lat: 41.0391, lng: 28.8555 } },
        { name: "Millet Bahçesi", position: { lat: 41.0365, lng: 28.8514 } },
        { name: "Büyükada Luna Park", position: { lat: 40.8682, lng: 29.0731 } },
        { name: "Heybeliada Papatya Cafe", position: { lat: 40.8690, lng: 29.0821 } },
        { name: "Burgazada Konak Cafe", position: { lat: 40.8771, lng: 29.0885 } },
        { name: "Adalar Sanat Galerisi", position: { lat: 40.8688, lng: 29.0744 } },
        { name: "Büyükada Rum Yetimhanesi", position: { lat: 40.8685, lng: 29.0729 } },
        { name: "Heybeliada Sanat Evi", position: { lat: 40.8692, lng: 29.0808 } },
        { name: "Adalar Müzesi", position: { lat: 40.8689, lng: 29.0732 } },
        { name: "Büyükada Tarihi Köşk", position: { lat: 40.8693, lng: 29.0740 } },
        { name: "Heybeliada İsmet İnönü Evi", position: { lat: 40.8691, lng: 29.0820 } },
        { name: "Adalar Butik", position: { lat: 40.8687, lng: 29.0733 } },
        { name: "Büyükada Çiçekçi", position: { lat: 40.8686, lng: 29.0728 } },
        { name: "Heybeliada Hediyelik Eşyalar", position: { lat: 40.8690, lng: 29.0809 } },
        { name: "Büyükada Çamlıca Tepesi", position: { lat: 40.8683, lng: 29.0734 } },
        { name: "Heybeliada Doğa Parkı", position: { lat: 40.8694, lng: 29.0810 } },
        { name: "Burgazada Doğal Yaşam Alanı", position: { lat: 40.8773, lng: 29.0887 } }
    ];

    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: userLocation
    });

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    const { places, date } = getUrlParams();
    const selectedPlaces = allPlaces.filter(place => places.includes(place.name));

    const placeList = document.getElementById('placeList');
    placeList.innerHTML = ''; // Listeyi temizle

    selectedPlaces.forEach(place => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = JSON.stringify(place.position);
        checkbox.id = place.name;

        const label = document.createElement('label');
        label.htmlFor = place.name;
        label.textContent = place.name;

        li.appendChild(checkbox);
        li.appendChild(label);
        placeList.appendChild(li);

        new google.maps.Marker({
            position: place.position,
            map: map,
            title: place.name
        });
    });

    document.getElementById('routeButton').addEventListener('click', () => {
        const checkedPlaces = [];
        const checkboxes = document.querySelectorAll('#placeList input[type="checkbox"]:checked');

        checkboxes.forEach(checkbox => {
            const position = JSON.parse(checkbox.value);
            checkedPlaces.push({ name: checkbox.nextElementSibling.textContent, position });
        });

        if (checkedPlaces.length === 0) {
            window.alert('Lütfen en az bir mekan seçin.');
            return;
        }

        const waypoints = checkedPlaces.map(place => ({
            location: place.position,
            stopover: true
        }));

        const request = {
            origin: userLocation,
            destination: userLocation,
            waypoints: waypoints,
            travelMode: 'DRIVING'
        };

        directionsService.route(request, (result, status) => {
            if (status === 'OK') {
                directionsRenderer.setDirections(result);
                createRouteCard(date, checkedPlaces); // Rota oluşturulduktan sonra kart oluştur
            } else {
                window.alert('Rota oluşturulamadı: ' + status);
            }
        });

        checkedPlaces.forEach(place => {
            new google.maps.Marker({
                position: place.position,
                map: map,
                title: place.name
            });
        });
    });
}

function createRouteCard(date, places) {
    const routeDetails = document.getElementById('routeDetails');
    const placeNames = places.map(place => place.name).join(', ');
    
    const card = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title mb-3">Rota Detayları</h5>
                <p class="card-text"><strong>Tarih:</strong> ${date || 'Seçilmedi'}</p>
                <p class="card-text"><strong>Mekanlar:</strong> ${placeNames}</p>
                <p class="card-text text-danger">Sosyal tesislerde kullanabileceğin indirim kuponunu almayı unutma!</p>
                <button class="btn btn-success" id="saveButton">Kaydet</button>
            </div>
        </div>
    `;
    
    routeDetails.innerHTML = card;

    document.getElementById('saveButton').addEventListener('click', function() {
        alert('Kaydedildi!');
    });
}

// URL parametrelerini almak için fonksiyon
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const date = params.get('date');
    const places = params.get('places') ? params.get('places').split(',') : [];
    return { date, places };
}

window.onload = initMap;