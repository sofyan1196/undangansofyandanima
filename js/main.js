// Combined internal scripts
function lazyloadRunObserver(){const lazyloadBackgrounds=document.querySelectorAll('.e-con.e-parent:not(.e-lazyloaded)');const lazyloadBackgroundObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){const lazyloadBackground=entry.target;if(lazyloadBackground){lazyloadBackground.classList.add('e-lazyloaded');}lazyloadBackgroundObserver.unobserve(entry.target);}})},{rootMargin:'200px 0px 200px 0px'});lazyloadBackgrounds.forEach(lazyloadBackground=>{lazyloadBackgroundObserver.observe(lazyloadBackground);});}
['DOMContentLoaded','elementor/lazyload/observe'].forEach(event=>{document.addEventListener(event,lazyloadRunObserver);});
function setDynamicVH(){let vh=window.innerHeight*0.01;document.documentElement.style.setProperty('--vh',`${vh}px`);}
setDynamicVH();
window.addEventListener('resize',setDynamicVH);
function createObserver(selector,offset){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('active');}else{entry.target.classList.remove('active');}})},{rootMargin:'0px 0px -'+offset+'px 0px'});document.querySelectorAll(selector).forEach(el=>observer.observe(el));}
document.addEventListener('DOMContentLoaded',()=>{['.reveal','.revealin','.revealkanan','.revealkiri','.revealatas','.revealr'].forEach(cls=>createObserver(cls,150));createObserver('.ef',100);});
const wdpAudio=document.getElementById('song');
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'){wdpAudio&&wdpAudio.play();}else{wdpAudio&&wdpAudio.pause();}});
function loadScript(src){return new Promise((resolve,reject)=>{if(document.querySelector(`script[src="${src}"]`)){resolve();return;}const s=document.createElement('script');s.src=src;s.onload=resolve;s.onerror=reject;document.body.appendChild(s);});}
function loadCSS(href){return new Promise((resolve,reject)=>{if(document.querySelector(`link[href="${href}"]`)){resolve();return;}const l=document.createElement('link');l.rel='stylesheet';l.href=href;l.onload=resolve;l.onerror=reject;document.head.appendChild(l);});}
const galleryLinks=document.querySelectorAll('[data-lightbox]');if(galleryLinks.length){const handler=async e=>{if(typeof lightbox==='undefined'){e.preventDefault();await Promise.all([loadCSS('https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/css/lightbox.min.css'),loadScript('https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox.min.js')]);e.currentTarget.click();}};galleryLinks.forEach(el=>el.addEventListener('click',handler,{once:true}));}
const qrTrigger=document.getElementById('qr-trigger');if(qrTrigger){qrTrigger.addEventListener('click',()=>loadScript('js/qr-code.js'),{once:true});}
document.addEventListener('DOMContentLoaded',()=>{if(window.AOS){AOS.init({debounceDelay:50,once:false,mirror:true});}});
function initAudioControls() {
    const audio = document.getElementById('song');
    const playButton = document.getElementById('mute-sound');
    const pauseButton = document.getElementById('unmute-sound');

    function updateAudioButtons() {
        if (!audio) return;
        if (audio.paused) {
            playButton.style.display = 'block';
            pauseButton.style.display = 'none';
        } else {
            playButton.style.display = 'none';
            pauseButton.style.display = 'block';
        }
    }

    if (playButton) {
        playButton.addEventListener('click', () => audio.play());
    }

    if (pauseButton) {
        pauseButton.addEventListener('click', () => audio.pause());
    }

    if (audio) {
        audio.addEventListener('play', updateAudioButtons);
        audio.addEventListener('pause', updateAudioButtons);
    }

    updateAudioButtons();
}

document.addEventListener('DOMContentLoaded', function() {
    // ==========================================================
    // BAGIAN 1: LOGIKA KONTEN DINAMIS & NAMA TAMU
    // ==========================================================
    const urlParams = new URLSearchParams(window.location.search);
    const namaTamu = urlParams.get('to');
    const namaWrapper = document.getElementById('nama-wrapper');
    const inputNamaForm = document.getElementById('nama');

    if (namaTamu) { 
        let formattedName = namaTamu.replace(/[_-]/g, ' ');
        formattedName = formattedName.replace(/\b\w/g, char => char.toUpperCase());
        const elemenNamaCover = document.querySelector('.elementor-element-70b520ab .elementor-widget-container'); 
        if (elemenNamaCover) {
            elemenNamaCover.textContent = formattedName;
        }
        if (namaWrapper) {
            namaWrapper.style.display = 'none';
        }
        if (inputNamaForm) {
            inputNamaForm.value = formattedName;
        }
    } else { 
        if (namaWrapper) {
            namaWrapper.style.display = 'block';
            inputNamaForm.placeholder = "Nama Anda";
        }
    }
    
    // 1. Data untuk setiap versi undangan (DENGAN PENAMBAHAN countdownTarget)
    const weddingData = {
        sofyan: {
            countdownTarget: "2025-09-25T09:00:00", // PENTING: Sesuaikan tanggal & waktu ini
            akadTanggal: "Selasa, 23 September 2025",
            gmapsLink: "https://maps.app.goo.gl/8ppV9YEc2yLNtatT7",
            gmapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d879.5768921696072!2d113.52789246165845!3d-8.185957312917491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sJln%20perkebunan%20tunggusari%2C%20Curah%20Kalong%2C%20gambiran%2C%20Kabupaten%20Jember%2C%20Jawa%20Timur%2068152!5e0!3m2!1sid!2sid!4v1754827615836!5m2!1sid!2sid",
            akadWaktu: "Pukul 08:00 WIB",
            akadLokasi: "Alamat: Kediaman Mempelai Wanita",
            resepsiTanggal: "Kamis, 25 September 2025",
            resepsiWaktu: "Pukul 10:00 WIB - Selesai",
            resepsiLokasi: "Alamat: Kediaman Mempelai Pria"
        },
        ima: {
            countdownTarget: "2025-09-28T10:00:00", // PENTING: Sesuaikan tanggal & waktu ini
            akadTanggal: "Selasa, 23 September 2025",
            akadWaktu: "Pukul 08:00 WIB",
            gmapsLink: "https://maps.app.goo.gl/8ppV9YEc2yLNtatT7",
            gmapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d879.5768921696072!2d113.52789246165845!3d-8.185957312917491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sJln%20perkebunan%20tunggusari%2C%20Curah%20Kalong%2C%20gambiran%2C%20Kabupaten%20Jember%2C%20Jawa%20Timur%2068152!5e0!3m2!1sid!2sid!4v1754827615836!5m2!1sid!2sid",
            akadLokasi: "Alamat: Kediaman Mempelai Wanita",
            resepsiTanggal: "Rabu, 24 September 2025",
            resepsiWaktu: "Pukul 10:00 WIB - Selesai",
            resepsiLokasi: "Alamat: Kediaman Mempelai Wanita"
        }
    };

    // 2. Baca parameter 'v' dari URL
    const version = urlParams.get('v');

    // 3. Pilih data yang sesuai, default ke 'sofyan' jika parameter tidak ada
    const selectedData = weddingData[version] || weddingData.sofyan;

    // 4. Update konten HTML dengan data yang dipilih
    const homeTglEl = document.getElementById('home-tanggal');
    const akadTglEl = document.getElementById('akad-tanggal');
    const akadWaktuEl = document.getElementById('akad-waktu');
    const akadLokasiEl = document.getElementById('akad-lokasi');
    const resepsiTglEl = document.getElementById('resepsi-tanggal');
    const resepsiWaktuEl = document.getElementById('resepsi-waktu');
    const resepsiLokasiEl = document.getElementById('resepsi-lokasi');
    const gmapsButton = document.getElementById('gmaps-button');
            if (gmapsButton) {
                gmapsButton.href = selectedData.gmapsLink;
            }
            // === KODE BARU UNTUK MEMUAT PETA ===
        const mapContainer = document.getElementById('map-container');
        if (mapContainer && selectedData.gmapsEmbedUrl) {
            const iframe = document.createElement('iframe');
            iframe.src = selectedData.gmapsEmbedUrl;
            iframe.width = "100%";
            iframe.height = "300"; // Anda bisa atur tinggi peta di sini
            iframe.style.border = 0;
            iframe.allowFullscreen = "";
            iframe.loading = "lazy"; // Penting untuk performa
            iframe.referrerPolicy = "no-referrer-when-downgrade";
            
            mapContainer.innerHTML = ''; // Bersihkan placeholder jika ada
            mapContainer.appendChild(iframe);
        }
        // ===================================
    if(homeTglEl) homeTglEl.textContent = selectedData.resepsiTanggal;
    if(akadTglEl) akadTglEl.textContent = selectedData.akadTanggal;
    if(akadWaktuEl) akadWaktuEl.textContent = selectedData.akadWaktu;
    if(akadLokasiEl) akadLokasiEl.textContent = selectedData.akadLokasi;
    if(resepsiTglEl) resepsiTglEl.textContent = selectedData.resepsiTanggal;
    if(resepsiWaktuEl) resepsiWaktuEl.textContent = selectedData.resepsiWaktu;
    if(resepsiLokasiEl) resepsiLokasiEl.textContent = selectedData.resepsiLokasi;

    
    // 5. Inisialisasi countdown dengan data yang benar
    initJavaneseCountdown(selectedData.countdownTarget);

     // ==========================================================
    // BAGIAN 2: MENGURUS FORMULIR DAN DAFTAR UCAPAN (INI YANG DIPERBAIKI)
    // ==========================================================
    const ucapanContainer = document.getElementById('ucapan-list');
    const form = document.getElementById('form-ucapan');
    const formStatus = document.getElementById('form-status');
    const hadirCountEl = document.getElementById('hadir-count');
    const tidakHadirCountEl = document.getElementById('tidak-hadir-count');

    // State untuk melacak halaman saat ini dan status loading
    let currentPage = 1;
    let isLoading = false;
    const itemsPerPage = 10; // Tampilkan 10 ucapan per halaman

    // Buat tombol "Load More" secara dinamis
    const loadMoreButton = document.createElement('button');
    loadMoreButton.textContent = 'Muat Ucapan Lainnya';
    loadMoreButton.className = 'ucapan-submit-btn'; // Menggunakan style yang sama dengan tombol kirim
    loadMoreButton.style.marginTop = '20px'; // Beri sedikit jarak
    ucapanContainer.insertAdjacentElement('afterend', loadMoreButton); // Letakkan setelah list ucapan
    
    function fetchUcapan(page = 1) {
        if (isLoading) return; // Mencegah request ganda jika masih loading
        isLoading = true;
        loadMoreButton.textContent = 'Memuat...';

        // Kirim nomor halaman ke PHP
        fetch(`get_ucapan.php?page=${page}&limit=${itemsPerPage}`)
            .then(response => response.json())
            .then(data => {
                // Selalu update counter dengan total dari server
                hadirCountEl.textContent = data.counts.hadir;
                tidakHadirCountEl.textContent = data.counts.tidak_hadir;

                if (page === 1) {
                    ucapanContainer.innerHTML = ''; // Hanya bersihkan jika ini halaman pertama
                }

                if (!data.ucapan || data.ucapan.length === 0) {
                    loadMoreButton.style.display = 'none'; // Sembunyikan tombol jika sudah tidak ada ucapan
                    if (page === 1) {
                        ucapanContainer.innerHTML = '<p style="text-align: center; color: white;">Belum ada ucapan. Jadilah yang pertama!</p>';
                    }
                    return;
                }

                // Gunakan DocumentFragment untuk performa rendering yang lebih baik
                const fragment = document.createDocumentFragment();
                data.ucapan.forEach(item => {
                    const ucapanBox = document.createElement('div');
                    ucapanBox.className = 'ucapan-box';
                    // (Logika timeAgo dan statusIcon tetap sama)
                    let statusIcon = (item.kehadiran && item.kehadiran.toLowerCase() === 'hadir') ? 
                        '<i class="fas fa-check-circle" style="color: #7bdcb5;" title="Hadir"></i>' : 
                        '<i class="fas fa-times-circle" style="color: #f78da7;" title="Tidak Hadir"></i>';
                    
                    const date = new Date(item.timestamp.replace(/-/g, "/"));
                    const now = new Date();
                    const diffSeconds = Math.floor((now - date) / 1000);
                    let timeAgo = '';
                    if (diffSeconds < 60) timeAgo = `beberapa detik lalu`;
                    else {
                        const diffMinutes = Math.floor(diffSeconds / 60);
                        if (diffMinutes < 60) timeAgo = `${diffMinutes} menit lalu`;
                        else {
                            const diffHours = Math.floor(diffMinutes / 60);
                            if (diffHours < 24) timeAgo = `${diffHours} jam lalu`;
                            else {
                                const diffDays = Math.floor(diffHours / 24);
                                timeAgo = `${diffDays} hari lalu`;
                            }
                        }
                    }

                    ucapanBox.innerHTML = `
                        <div class="ucapan-header">
                            <span class="nama-display">${item.nama} ${statusIcon}</span>
                            <span class="timestamp-display">${timeAgo}</span>
                        </div>
                        <p class="ucapan-display">${item.ucapan}</p>
                    `;
                    fragment.appendChild(ucapanBox);
                });
                ucapanContainer.appendChild(fragment);

                // Jika jumlah data yang diterima kurang dari yang diminta, berarti ini halaman terakhir
                if (data.ucapan.length < itemsPerPage) {
                    loadMoreButton.style.display = 'none';
                } else {
                    loadMoreButton.style.display = 'block';
                }

            })
            .catch(error => {
                console.error('Error fetching data:', error);
                ucapanContainer.innerHTML = '<p style="text-align: center; color: white;">Gagal memuat ucapan.</p>';
                loadMoreButton.style.display = 'none';
            })
            .finally(() => {
                isLoading = false;
                loadMoreButton.textContent = 'Muat Ucapan Lainnya';
            });
    }

    loadMoreButton.addEventListener('click', () => {
        currentPage++;
        fetchUcapan(currentPage);
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const submitButton = form.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.textContent = 'Mengirim...';
        
        fetch('submit_ucapan.php', { method: 'POST', body: formData })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                formStatus.style.color = '#7bdcb5';
                form.reset();
                if (namaTamu) {
                    document.getElementById('nama').value = namaTamu.replace(/[_-]/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
                }
                // Muat ulang dari halaman pertama untuk menampilkan ucapan baru di atas
                currentPage = 1; 
                fetchUcapan(currentPage); 
            } else {
                formStatus.style.color = '#f78da7';
            }
            formStatus.textContent = data.message;
        })
        .catch(error => {
            console.error('Error:', error);
            formStatus.style.color = '#f78da7';
            formStatus.textContent = 'Terjadi kesalahan.';
        })
        .finally(() => {
            submitButton.disabled = false;
            submitButton.textContent = 'Kirim';
            setTimeout(() => { formStatus.textContent = ''; }, 3000);
        });
    });

    // Panggil untuk memuat 10 ucapan pertama saat halaman dibuka
    fetchUcapan(currentPage);

    // Inisialisasi kontrol audio
    initAudioControls();
});
