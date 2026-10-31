import { useState } from 'react'
import './panama.css'
import './panama.js'
import PanamaExplorer from '../../PanamaExplorer'

function Panamap() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Panama Explorer</title>
        
        
        <script src="https://cdn.tailwindcss.com"></script>
        
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
        
      
                      
    </head>

    <body class="bg-gray-100 font-sans">
    <nav class="bg-blue-700 text-white p-4 shadow-lg">
        <div class="container mx-auto flex justify-between items-center">
            <h1 class="text-2xl font-bold">🇵🇦 Panama Explorer</h1>
            <button onclick="toggleModal()" class="bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-bold transition">
                + Add New Place
            </button>
        </div>
    </nav>

    <main class="container mx-auto p-4 flex flex-col md:flex-row gap-6">
        
        
        <aside class="w-full md:w-1/3 bg-white p-6 rounded-xl shadow-md overflow-y-auto max-h-screen">
            <h2 class="text-xl font-bold mb-4 text-gray-800">Explore Panama</h2>
            <p class="text-gray-600 mb-6">Click on a marker to see details, or add a new landmark to the map!</p>
            
            <div id="place-list" class="space-y-4">
                
                <p class="text-sm text-gray-400 italic">No places selected.</p>
            </div>
        </aside>

        
        <section class="w-full md:w-2/3">
            <div id="map" class="shadow-xl border-4 border-white"></div>
        </section>
    </main>

    
    <div id="modal" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[1000]">
        <div class="bg-white rounded-xl p-6 w-full max-w-md shadow-2xl">
            <h2 class="text-xl font-bold mb-4">Add a New Landmark</h2>
            <form id="placeForm" class="space-y-4">
                <input type="text" id="name" placeholder="Place Name" class="w-full p-2 border rounded" required/>
                <select id="category" class="w-full p-2 border rounded">
                    <option value="Tourist">Tourist Attraction</option>
                    <option value="Historical">Historical Site</option>
                    <option value="Person">Historical Figure</option>
                    <option value="Reference">Reference/Museum</option>
                </select>
                <textarea id="desc" placeholder="Description" class="w-full p-2 border rounded" required></textarea>
                <div class="flex gap-2">
                    <input type="text" id="lat" placeholder="Latitude (e.g. 8.9)" class="w-1/2 p-2 border rounded" required/>
                    <input type="text" id="lng" placeholder="Longitude (e.g. -79.5)" class="w-1/2 p-2 border rounded" required/>
                </div>
                <div class="flex justify-end gap-2 mt-4">
                    <button type="button" onclick="toggleModal()" class="px-4 py-2 text-gray-500">Cancel</button>
                    <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded">Save Place</button>
                </div>
            </form>
        </div>
    </div>
                      

    
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

    <script src="panama.js"></script>
    </body>  
    </>
  )
};

export default Panamap;