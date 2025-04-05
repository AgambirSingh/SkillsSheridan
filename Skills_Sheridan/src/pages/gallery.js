export function renderGallery() {
  const content = `
    <div class="container py-5" style="margin-top: 72px;">
      <h2 class="section-title">Project Gallery</h2>
      <p class="lead mb-4">Highlights from previous Capstone events</p>
      
      <div class="row g-4">
        <div class="col-md-4">
          <div class="card h-100">
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" 
                 class="card-img-top" alt="Students presenting at Capstone event"
                 style="height: 240px; object-fit: cover;">
            <div class="card-body">
              <h5 class="card-title">Capstone 2024</h5>
              <p class="card-text">Students presenting their innovative solutions to industry partners.</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-4">
          <div class="card h-100">
            <img src="https://images.unsplash.com/photo-1544531585-9847b68c8c86?auto=format&fit=crop&q=80&w=800" 
                 class="card-img-top" alt="Award ceremony celebration"
                 style="height: 240px; object-fit: cover;">
            <div class="card-body">
              <h5 class="card-title">Award Ceremony</h5>
              <p class="card-text">Celebrating excellence in student projects and innovations.</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-4">
          <div class="card h-100">
            <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800" 
                 class="card-img-top" alt="Industry networking event"
                 style="height: 240px; object-fit: cover;">
            <div class="card-body">
              <h5 class="card-title">Industry Networking</h5>
              <p class="card-text">Students connecting with potential employers and industry experts.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('app').innerHTML = content;
}