export function renderProjects() {
  const content = `
    <div class="container py-5" style="margin-top: 72px;">
      <h2 class="section-title">Current Projects</h2>
      <div class="row g-4">
        <div class="col-md-6 col-lg-4">
          <div class="card h-100">
            <img src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800" 
                 class="card-img-top" alt="Smart home automation system"
                 style="height: 220px; object-fit: cover;">
            <div class="card-body">
              <h5 class="card-title">Smart Home Automation</h5>
              <p class="card-text">An IoT-based home automation system that controls lighting, temperature, and security through a mobile app.</p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">Team: Group A</small>
                <button class="btn btn-primary btn-sm">View Details</button>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-md-6 col-lg-4">
          <div class="card h-100">
            <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800" 
                 class="card-img-top" alt="AI Health Assistant interface"
                 style="height: 220px; object-fit: cover;">
            <div class="card-body">
              <h5 class="card-title">AI Health Assistant</h5>
              <p class="card-text">A machine learning-powered health assistant that provides personalized wellness recommendations.</p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">Team: Group B</small>
                <button class="btn btn-primary btn-sm">View Details</button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="card h-100">
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" 
                 class="card-img-top" alt="Data Analytics Dashboard"
                 style="height: 220px; object-fit: cover;">
            <div class="card-body">
              <h5 class="card-title">Data Analytics Platform</h5>
              <p class="card-text">Advanced data visualization and analytics platform for business intelligence.</p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">Team: Group C</small>
                <button class="btn btn-primary btn-sm">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('app').innerHTML = content;
}