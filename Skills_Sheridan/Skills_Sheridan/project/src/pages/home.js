export function renderHome() {
  const content = `
    <div class="d-flex flex-column min-vh-100" style="background-color: #002D72;">
      <section class="hero-section flex-grow-1 d-flex align-items-center" style="padding: 0;">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-7 mb-4 mb-lg-0">
              <h1 class="display-4 mb-3" style="color: white; font-weight: 600; font-size: 2.5rem;">Sheridan College Capstone Project 2025</h1>
              <p class="lead mb-3" style="color: white; font-size: 1.25rem;">Showcasing Innovation and Excellence in Technology</p>
              <p class="mb-4" style="color: white; font-size: 1.1rem;">Join us on March 12, 2025 for an exciting showcase of student projects</p>
              <a href="#registration" class="btn btn-light btn-lg" style="font-weight: 500; padding: 12px 32px; border-radius: 8px;">Register Now</a>
            </div>
            <div class="col-lg-5">
              <div class="row g-3">
                <div class="col-12">
                  <div class="card h-100" style="background: linear-gradient(145deg, #003692, #002D72); color: white; border: 2px solid rgba(255,255,255,0.15); border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.2); backdrop-filter: blur(5px);">
                    <div class="card-body" style="padding: 1.5rem;">
                      <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
                        <div style="background: rgba(255,255,255,0.1); padding: 8px; border-radius: 8px; margin-right: 12px;">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                            <polyline points="22 4 12 14.01 9 11.01"/>
                          </svg>
                        </div>
                        <h5 class="card-title" style="font-size: 1.25rem; margin: 0;">Showcase Your Skills</h5>
                      </div>
                      <p class="card-text" style="font-size: 1rem; opacity: 0.9; margin-bottom: 0; padding-left: 44px;">Present your innovative projects to industry professionals and peers.</p>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="card h-100" style="background: linear-gradient(145deg, #003692, #002D72); color: white; border: 2px solid rgba(255,255,255,0.15); border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.2); backdrop-filter: blur(5px);">
                    <div class="card-body" style="padding: 1.5rem;">
                      <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
                        <div style="background: rgba(255,255,255,0.1); padding: 8px; border-radius: 8px; margin-right: 12px;">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                            <circle cx="9" cy="7" r="4"/>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                          </svg>
                        </div>
                        <h5 class="card-title" style="font-size: 1.25rem; margin: 0;">Network</h5>
                      </div>
                      <p class="card-text" style="font-size: 1rem; opacity: 0.9; margin-bottom: 0; padding-left: 44px;">Connect with industry leaders and potential employers.</p>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="card h-100" style="background: linear-gradient(145deg, #003692, #002D72); color: white; border: 2px solid rgba(255,255,255,0.15); border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.2); backdrop-filter: blur(5px);">
                    <div class="card-body" style="padding: 1.5rem;">
                      <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
                        <div style="background: rgba(255,255,255,0.1); padding: 8px; border-radius: 8px; margin-right: 12px;">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="8" r="7"/>
                            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                          </svg>
                        </div>
                        <h5 class="card-title" style="font-size: 1.25rem; margin: 0;">Win Prizes</h5>
                      </div>
                      <p class="card-text" style="font-size: 1rem; opacity: 0.9; margin-bottom: 0; padding-left: 44px;">Compete for recognition and valuable prizes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;

  document.getElementById('app').innerHTML = content;
}