// Sample data for movies and APKs
const movieData = [
    {
        id: 'm1',
        title: 'Avengers: Endgame',
        year: 2019,
        genre: 'action',
        quality: '1080p',
        size: '2.8GB',
        image: 'avengers-endgame.jpg',
        downloadLink: 'https://drive.google.com/uc?export=download&id=1AvengersEndgameDriveID'
    },
    {
        id: 'm2',
        title: 'Joker',
        year: 2019,
        genre: 'drama',
        quality: '720p',
        size: '1.5GB',
        image: 'https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc@._V1_.jpg',
        downloadLink: 'https://drive.google.com/uc?export=download&id=1JokerDriveID'
    },
    {
        id: 'm3',
        title: 'Interstellar',
        year: 2014,
        genre: 'sci-fi',
        quality: '4k',
        size: '4.2GB',
        image: 'https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg',
        downloadLink: 'https://drive.google.com/uc?export=download&id=1InterstellarDriveID'
    },
    {
        id: 'm4',
        title: 'The Dark Knight',
        year: 2008,
        genre: 'action',
        quality: '1080p',
        size: '2.3GB',
        image: 'dark-knight.jpg',
        downloadLink: 'https://drive.google.com/uc?export=download&id=1DarkKnightDriveID'
    },
    {
        id: 'm5',
        title: 'Parasite',
        year: 2019,
        genre: 'drama',
        quality: '720p',
        size: '1.7GB',
        image: 'parasite.jpg',
        downloadLink: 'https://drive.google.com/uc?export=download&id=1ParasiteDriveID'
    },
    {
        id: 'm6',
        title: 'Inception',
        year: 2010,
        genre: 'sci-fi',
        quality: '1080p',
        size: '2.1GB',
        image: 'inception.jpg',
        downloadLink: 'https://drive.google.com/uc?export=download&id=1InceptionDriveID'
    }
];

const apkData = [
    {
        id: 'a1',
        title: 'Spotify Premium',
        category: 'app',
        version: '8.8.12.512',
        size: '45MB',
        features: 'Premium unlocked, No ads',
        image: 'https://cdn.siasat.com/wp-content/uploads/2022/02/Spotify.jpg',
        downloadLink: 'https://drive.google.com/uc?export=download&id=1SpotifyDriveID'
    },
    {
        id: 'a2',
        title: 'Call of Duty Mobile',
        category: 'game',
        version: '1.0.39',
        size: '1.8GB',
        features: 'Unlimited CP, All skins',
        image: 'cod-mobile.jpg',
        downloadLink: 'https://drive.google.com/uc?export=download&id=1CODMobileDriveID'
    },
    {
        id: 'a3',
        title: 'YouTube Vanced',
        category: 'app',
        version: '17.03.38',
        size: '52MB',
        features: 'Ad-free, Background play',
        image: 'youtube-vanced.jpg',
        downloadLink: 'https://drive.google.com/uc?export=download&id=1YouTubeVancedDriveID'
    },
    {
        id: 'a4',
        title: 'Minecraft Premium',
        category: 'game',
        version: '1.19.50.02',
        size: '120MB',
        features: 'Full version unlocked',
        image: 'minecraft.jpg',
        downloadLink: 'https://drive.google.com/uc?export=download&id=1MinecraftDriveID'
    },
    {
        id: 'a5',
        title: 'TikTok Pro',
        category: 'app',
        version: '23.7.3',
        size: '85MB',
        features: 'No watermark, Region unlocked',
        image: 'tiktok.jpg',
        downloadLink: 'https://drive.google.com/uc?export=download&id=1TikTokDriveID'
    },
    {
        id: 'a6',
        title: 'PhotoShop Express',
        category: 'tool',
        version: '7.0.483',
        size: '65MB',
        features: 'Premium filters unlocked',
        image: 'photoshop.jpg',
        downloadLink: 'https://drive.google.com/uc?export=download&id=1PhotoShopDriveID'
    }
];

// Load latest movies (for home page)
function loadLatestMovies() {
    const latestMoviesContainer = document.getElementById('latestMovies');
    if (!latestMoviesContainer) return;
    
    // Get first 4 movies
    const latestMovies = movieData.slice(0, 4);
    
    let html = '';
    latestMovies.forEach(movie => {
        html += `
            <div class="content-card" data-id="${movie.id}">
                <div class="card-image">
                    <img src="assets/images/${movie.image}" alt="${movie.title}">
                </div>
                <div class="card-content">
                    <h3 class="card-title">${movie.title} (${movie.year})</h3>
                    <div class="card-meta">
                        <span>${movie.quality} • ${movie.size}</span>
                    </div>
                    <a href="${movie.downloadLink}" class="download-btn" target="_blank">
                        <i class="fas fa-download"></i> Download
                    </a>
                </div>
            </div>
        `;
    });
    
    latestMoviesContainer.innerHTML = html;
    
    // Add click event to view details
    document.querySelectorAll('#latestMovies .content-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('download-btn')) {
                const id = this.getAttribute('data-id');
                viewMovieDetails(id);
            }
        });
    });
}

// Load all movies (for movies page)
function loadAllMovies() {
    const allMoviesContainer = document.getElementById('allMovies');
    if (!allMoviesContainer) return;
    
    let html = '';
    movieData.forEach(movie => {
        html += `
            <div class="content-card" data-id="${movie.id}">
                <div class="card-image">
                    <img src="assets/images/${movie.image}" alt="${movie.title}">
                </div>
                <div class="card-content">
                    <h3 class="card-title">${movie.title} (${movie.year})</h3>
                    <div class="card-meta">
                        <span>${movie.quality} • ${movie.genre} • ${movie.size}</span>
                    </div>
                    <a href="${movie.downloadLink}" class="download-btn" target="_blank">
                        <i class="fas fa-download"></i> Download
                    </a>
                </div>
            </div>
        `;
    });
    
    allMoviesContainer.innerHTML = html;
    
    // Add click event to view details
    document.querySelectorAll('#allMovies .content-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('download-btn')) {
                const id = this.getAttribute('data-id');
                viewMovieDetails(id);
            }
        });
    });
}

// Load latest APKs (for home page)
function loadLatestAPKs() {
    const latestAPKsContainer = document.getElementById('latestAPKs');
    if (!latestAPKsContainer) return;
    
    // Get first 4 APKs
    const latestAPKs = apkData.slice(0, 4);
    
    let html = '';
    latestAPKs.forEach(apk => {
        html += `
            <div class="content-card" data-id="${apk.id}">
                <div class="card-image">
                    <img src="assets/images/${apk.image}" alt="${apk.title}">
                </div>
                <div class="card-content">
                    <h3 class="card-title">${apk.title}</h3>
                    <div class="card-meta">
                        <span>v${apk.version} • ${apk.size}</span>
                    </div>
                    <a href="${apk.downloadLink}" class="download-btn" target="_blank">
                        <i class="fas fa-download"></i> Download
                    </a>
                </div>
            </div>
        `;
    });
    
    latestAPKsContainer.innerHTML = html;
    
    // Add click event to view details
    document.querySelectorAll('#latestAPKs .content-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('download-btn')) {
                const id = this.getAttribute('data-id');
                viewAPKDetails(id);
            }
        });
    });
}

// Load all APKs (for APKs page)
function loadAllAPKs() {
    const allAPKsContainer = document.getElementById('allAPKs');
    if (!allAPKsContainer) return;
    
    let html = '';
    apkData.forEach(apk => {
        html += `
            <div class="content-card" data-id="${apk.id}">
                <div class="card-image">
                    <img src="assets/images/${apk.image}" alt="${apk.title}">
                </div>
                <div class="card-content">
                    <h3 class="card-title">${apk.title}</h3>
                    <div class="card-meta">
                        <span>v${apk.version} • ${apk.category} • ${apk.size}</span>
                    </div>
                    <a href="${apk.downloadLink}" class="download-btn" target="_blank">
                        <i class="fas fa-download"></i> Download
                    </a>
                </div>
            </div>
        `;
    });
    
    allAPKsContainer.innerHTML = html;
    
    // Add click event to view details
    document.querySelectorAll('#allAPKs .content-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('download-btn')) {
                const id = this.getAttribute('data-id');
                viewAPKDetails(id);
            }
        });
    });
}

// Load features (for home page)
function loadFeatures() {
    const featuresSection = document.getElementById('featuresSection');
    if (!featuresSection) return;
    
    featuresSection.innerHTML = `
        <div class="container">
            <h2 class="section-title">Our Features</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon"><i class="fas fa-bolt"></i></div>
                    <h3 class="feature-title">Fast Downloads</h3>
                    <p>Direct Google Drive links for maximum download speeds with no speed limits.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon"><i class="fas fa-shield-alt"></i></div>
                    <h3 class="feature-title">Virus Checked</h3>
                    <p>All files are scanned for viruses and malware before being uploaded.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon"><i class="fas fa-film"></i></div>
                    <h3 class="feature-title">High Quality</h3>
                    <p>Movies in various qualities from 480p to 4K to suit your needs.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon"><i class="fas fa-unlock-alt"></i></div>
                    <h3 class="feature-title">Premium Unlocked</h3>
                    <p>APKs with premium features unlocked and ads removed.</p>
                </div>
            </div>
        </div>
    `;
}

// View movie details
function viewMovieDetails(id) {
    const movie = movieData.find(m => m.id === id);
    if (!movie) return;
    
    contentArea.innerHTML = `
        <section class="content-details">
            <div class="details-container">
                <div class="details-image">
                    <img src="assets/images/${movie.image}" alt="${movie.title}">
                </div>
                <div class="details-content">
                    <h2>${movie.title} (${movie.year})</h2>
                    <div class="details-meta">
                        <span><i class="fas fa-film"></i> ${movie.genre}</span>
                        <span><i class="fas fa-tachometer-alt"></i> ${movie.quality}</span>
                        <span><i class="fas fa-weight-hanging"></i> ${movie.size}</span>
                    </div>
                    <div class="download-options">
                        <h3>Download Options</h3>
                        <a href="${movie.downloadLink}" class="download-btn" target="_blank">
                            <i class="fas fa-download"></i> Google Drive (${movie.quality})
                        </a>
                    </div>
                    <div class="details-description">
                        <h3>About</h3>
                        <p>Download ${movie.title} in ${movie.quality} quality directly from Google Drive. File size is ${movie.size}.</p>
                        <p>This is a high quality print with clear audio and video. Enjoy your movie!</p>
                    </div>
                    <a href="#" class="back-btn" id="backToMovies"><i class="fas fa-arrow-left"></i> Back to Movies</a>
                </div>
            </div>
        </section>
    `;
    
    // Add back button event
    document.getElementById('backToMovies').addEventListener('click', (e) => {
        e.preventDefault();
        loadPage('movies');
    });
}

// View APK details
function viewAPKDetails(id) {
    const apk = apkData.find(a => a.id === id);
    if (!apk) return;
    
    contentArea.innerHTML = `
        <section class="content-details">
            <div class="details-container">
                <div class="details-image">
                    <img src="assets/images/${apk.image}" alt="${apk.title}">
                </div>
                <div class="details-content">
                    <h2>${apk.title}</h2>
                    <div class="details-meta">
                        <span><i class="fas fa-mobile-alt"></i> ${apk.category}</span>
                        <span><i class="fas fa-code-branch"></i> v${apk.version}</span>
                        <span><i class="fas fa-weight-hanging"></i> ${apk.size}</span>
                    </div>
                    <div class="apk-features">
                        <h3>Mod Features</h3>
                        <ul>
                            ${apk.features.split(',').map(f => `<li>${f.trim()}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="download-options">
                        <h3>Download</h3>
                        <a href="${apk.downloadLink}" class="download-btn" target="_blank">
                            <i class="fas fa-download"></i> Google Drive (v${apk.version})
                        </a>
                    </div>
                    <div class="details-description">
                        <h3>Installation Guide</h3>
                        <ol>
                            <li>Download the APK file</li>
                            <li>Go to Settings > Security and enable "Unknown Sources"</li>
                            <li>Open the downloaded APK file and tap Install</li>
                            <li>Once installed, open the app and enjoy!</li>
                        </ol>
                    </div>
                    <a href="#" class="back-btn" id="backToAPKs"><i class="fas fa-arrow-left"></i> Back to APKs</a>
                </div>
            </div>
        </section>
    `;
    
    // Add back button event
    document.getElementById('backToAPKs').addEventListener('click', (e) => {
        e.preventDefault();
        loadPage('apks');
    });
}