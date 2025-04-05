export function renderAdmin() {
  const content = `
    <div class="container py-5">
      <div class="row mb-4">
        <div class="col-12">
          <h2 class="section-title">Admin Panel</h2>
          
          <!-- Login Form (Initially Visible) -->
          <div id="adminLogin" class="card mb-4">
            <div class="card-body">
              <h3 class="h4 mb-3">Admin Login</h3>
              <form id="loginForm">
                <div class="mb-3">
                  <label for="username" class="form-label">Username</label>
                  <input type="text" class="form-control" id="username" required>
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input type="password" class="form-control" id="password" required>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
              </form>
            </div>
          </div>

          <!-- Admin Dashboard (Initially Hidden) -->
          <div id="adminDashboard" class="d-none">
            <!-- Navigation Tabs -->
            <ul class="nav nav-tabs mb-4" id="adminTabs" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="participants-tab" data-bs-toggle="tab" 
                  data-bs-target="#participants" type="button" role="tab">
                  Participants
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="projects-tab" data-bs-toggle="tab" 
                  data-bs-target="#projects" type="button" role="tab">
                  Projects
                </button>
              </li>
            </ul>

            <!-- Tab Content -->
            <div class="tab-content" id="adminTabContent">
              <!-- Participants Tab -->
              <div class="tab-pane fade show active" id="participants" role="tabpanel">
                <div class="d-flex justify-content-between align-items-center mb-4">
                  <h3 class="h4 mb-0">Manage Participants</h3>
                  <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addParticipantModal">
                    Add Participant
                  </button>
                </div>
                
                <div class="table-responsive">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th>Student ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Project</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody id="participantsTableBody">
                      <tr>
                        <td>123456789</td>
                        <td>John Doe</td>
                        <td>john.doe@sheridancollege.ca</td>
                        <td>Smart Home Automation</td>
                        <td>
                          <button class="btn btn-sm btn-warning me-1">Edit</button>
                          <button class="btn btn-sm btn-danger">Delete</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Projects Tab -->
              <div class="tab-pane fade" id="projects" role="tabpanel">
                <div class="d-flex justify-content-between align-items-center mb-4">
                  <h3 class="h4 mb-0">Manage Projects</h3>
                  <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addProjectModal">
                    Add Project
                  </button>
                </div>

                <div class="table-responsive">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th>Project ID</th>
                        <th>Title</th>
                        <th>Team Members</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody id="projectsTableBody">
                      <tr>
                        <td>PRJ001</td>
                        <td>Smart Home Automation</td>
                        <td>3 members</td>
                        <td><span class="badge bg-success">Active</span></td>
                        <td>
                          <button class="btn btn-sm btn-warning me-1">Edit</button>
                          <button class="btn btn-sm btn-danger">Delete</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Participant Modal -->
    <div class="modal fade" id="addParticipantModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Participant</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <form id="addParticipantForm">
              <div class="mb-3">
                <label for="studentId" class="form-label">Student ID</label>
                <input type="text" class="form-control" id="studentId" required pattern="[0-9]{9}">
              </div>
              <div class="mb-3">
                <label for="studentName" class="form-label">Name</label>
                <input type="text" class="form-control" id="studentName" required>
              </div>
              <div class="mb-3">
                <label for="studentEmail" class="form-label">Email</label>
                <input type="email" class="form-control" id="studentEmail" required pattern=".+@sheridancollege\\.ca$">
              </div>
              <div class="mb-3">
                <label for="projectAssignment" class="form-label">Project</label>
                <select class="form-select" id="projectAssignment" required>
                  <option value="">Select Project</option>
                  <option value="1">Smart Home Automation</option>
                  <option value="2">AI Health Assistant</option>
                </select>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="submit" form="addParticipantForm" class="btn btn-primary">Add Participant</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Project Modal -->
    <div class="modal fade" id="addProjectModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Project</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <form id="addProjectForm">
              <div class="mb-3">
                <label for="projectTitle" class="form-label">Project Title</label>
                <input type="text" class="form-control" id="projectTitle" required>
              </div>
              <div class="mb-3">
                <label for="projectDescription" class="form-label">Description</label>
                <textarea class="form-control" id="projectDescription" rows="3" required></textarea>
              </div>
              <div class="mb-3">
                <label for="projectStatus" class="form-label">Status</label>
                <select class="form-select" id="projectStatus" required>
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="submit" form="addProjectForm" class="btn btn-primary">Add Project</button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('app').innerHTML = content;
  initializeAdminPanel();
}

function initializeAdminPanel() {
  // Handle login form submission
  const loginForm = document.getElementById('loginForm');
  loginForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple admin authentication (replace with proper authentication later)
    if (username === 'admin' && password === 'admin123') {
      document.getElementById('adminLogin').classList.add('d-none');
      document.getElementById('adminDashboard').classList.remove('d-none');
    } else {
      alert('Invalid credentials!');
    }
  });

  // Handle participant form submission
  const addParticipantForm = document.getElementById('addParticipantForm');
  addParticipantForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!addParticipantForm.checkValidity()) {
      e.stopPropagation();
      addParticipantForm.classList.add('was-validated');
      return;
    }

    // Here we'll add the participant creation logic once we set up the database
    alert('Participant added successfully!');
    const modal = bootstrap.Modal.getInstance(document.getElementById('addParticipantModal'));
    modal.hide();
  });

  // Handle project form submission
  const addProjectForm = document.getElementById('addProjectForm');
  addProjectForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!addProjectForm.checkValidity()) {
      e.stopPropagation();
      addProjectForm.classList.add('was-validated');
      return;
    }

    // Here we'll add the project creation logic once we set up the database
    alert('Project added successfully!');
    const modal = bootstrap.Modal.getInstance(document.getElementById('addProjectModal'));
    modal.hide();
  });
}