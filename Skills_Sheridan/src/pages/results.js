export function renderResults() {
  const content = `
    <div class="container py-5" style="margin-top: 72px;">
      <h2 class="section-title">Capstone Results</h2>
      
      <div class="card mb-4">
        <div class="card-header bg-primary text-white">
          <h3 class="h5 mb-0">2025 Results</h3>
        </div>
        <div class="card-body">
          <p class="lead">Results will be announced after the event on March 12, 2025</p>
        </div>
      </div>

      <h3 class="h4 mb-4">Past Winners</h3>
      
      <div class="row g-4">
        <div class="col-md-6">
          <div class="card h-100">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                 class="card-img-top" alt="2024 Winners presentation"
                 style="height: 200px; object-fit: cover;">
            <div class="card-header">
              <h4 class="h5 mb-0">2024 Winners</h4>
            </div>
            <div class="card-body">
              <h5 class="card-title text-primary">First Place</h5>
              <p class="card-text">Smart City Waste Management System</p>
              <p class="text-muted">Team: EcoTech Solutions</p>
              
              <h5 class="card-title text-primary mt-4">Second Place</h5>
              <p class="card-text">AI-Powered Educational Assistant</p>
              <p class="text-muted">Team: Learning Innovators</p>
              
              <h5 class="card-title text-primary mt-4">Third Place</h5>
              <p class="card-text">Blockchain Supply Chain Tracker</p>
              <p class="text-muted">Team: Chain Masters</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card h-100">
            <img src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=800" 
                 class="card-img-top" alt="2023 Winners celebration"
                 style="height: 200px; object-fit: cover;">
            <div class="card-header">
              <h4 class="h5 mb-0">2023 Winners</h4>
            </div>
            <div class="card-body">
              <h5 class="card-title text-primary">First Place</h5>
              <p class="card-text">Augmented Reality Navigation System</p>
              <p class="text-muted">Team: AR Pioneers</p>
              
              <h5 class="card-title text-primary mt-4">Second Place</h5>
              <p class="card-text">Healthcare Patient Management Platform</p>
              <p class="text-muted">Team: Health Tech</p>
              
              <h5 class="card-title text-primary mt-4">Third Place</h5>
              <p class="card-text">Renewable Energy Monitoring System</p>
              <p class="text-muted">Team: Green Energy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('app').innerHTML = content;
}