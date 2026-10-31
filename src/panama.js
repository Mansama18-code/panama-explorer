 // 1. Initialize Map centered on Panama
        const map = L.map('map').setView([8.538, -80.512], 7);

         L.tileLayer('https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png?key=cb1_4z8j_1_ff160d8cb602fa44da1bf657', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                subdomains: 'abcd',
                maxZoom: 20
            }).addTo(map);

        // 2. Data Store (In a real app, this comes from Firebase)
        let places = [
            { name: "Panama Canal", category: "Historical", desc: "The engineering marvel connecting oceans.", lat: 8.98, lng: -79.51 },
            { name: "Casco Viejo", category: "Tourist", desc: "The historic heart of Panama City.", lat: 8.95, lng: -79.53 }
        ];

        const markers = [];

        // 3. Function to render markers and list
        function renderApp() {
            // Clear existing markers
            markers.forEach(m => map.removeLayer(m));
            const listContainer = document.getElementById('place-list');
            listContainer.innerHTML = '';

            places.forEach((place, index) => {
                // Add Marker to Map
                const marker = L.marker([place.lat, place.lng]).addTo(map)
                    .bindPopup(`<b>${place.name}</b><br>${place.category}`);
                markers.push(marker);

                // Add to Sidebar List
                const item = document.createElement('div');
                item.className = "p-3 bg-blue-50 border-l-4 border-blue-500 rounded cursor-pointer hover:bg-blue-100 transition";
                item.innerHTML = `
                    <h3 class="font-bold text-blue-800">${place.name}</h3>
                    <p class="text-xs text-blue-600 font-semibold uppercase">${place.category}</p>
                    <p class="text-sm text-gray-700 mt-1">${place.desc}</p>
                `;
                item.onclick = () => {
                    map.flyTo([place.lat, place.lng], 13);
                    marker.openPopup();
                };
                listContainer.appendChild(item);
            });
        }

        // 4. Modal Logic
        function toggleModal() {
            const modal = document.getElementById('modal');
            modal.classList.toggle('hidden');
        }

        // 5. Handle Form Submission
        document.getElementById('placeForm').addEventListener('submit', (e) => {
            e.preventDefault();
            
            const newPlace = {
                name: document.getElementById('name').value,
                category: document.getElementById('category').value,
                desc: document.getElementById('desc').value,
                lat: parseFloat(document.getElementById('lat').value),
                lng: parseFloat(document.getElementById('lng').value)
            };

            places.push(newPlace);
            renderApp();
            toggleModal();
            e.target.reset();
        });

        // Initial Render
        renderApp();
    
