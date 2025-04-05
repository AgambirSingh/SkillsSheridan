export function renderRegistration() {
  const content = `
    <div class="container py-5">
      <h2 class="section-title">Project Registration</h2>
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-body">
              <form id="registrationForm" class="needs-validation" novalidate>
                <div class="mb-3">
                  <label for="studentId" class="form-label">Student ID</label>
                  <input type="text" class="form-control" id="studentId" required pattern="[0-9]{9}">
                  <div class="invalid-feedback">Please enter a valid 9-digit student ID.</div>
                </div>
                
                <div class="mb-3">
                  <label for="email" class="form-label">Sheridan Email</label>
                  <input type="email" class="form-control" id="email" required pattern=".+@sheridancollege\.ca$">
                  <div class="invalid-feedback">Please enter a valid Sheridan College email address.</div>
                </div>

                <div class="mb-3">
                  <label for="projectTitle" class="form-label">Project Title</label>
                  <input type="text" class="form-control" id="projectTitle" required>
                </div>

                <div class="mb-3">
                  <label for="projectDescription" class="form-label">Project Description</label>
                  <textarea class="form-control" id="projectDescription" rows="3" required></textarea>
                </div>

                <div class="mb-3">
                  <label class="form-label">Team Members (3-4 members required)</label>
                  <div id="teamMembers">
                    <div class="input-group mb-2">
                      <input type="text" class="form-control" placeholder="Student ID" required pattern="[0-9]{9}">
                      <input type="email" class="form-control" placeholder="Sheridan Email" required pattern=".+@sheridancollege\.ca$">
                    </div>
                  </div>
                  <button type="button" class="btn btn-secondary btn-sm" id="addMember">Add Team Member</button>
                </div>

                <button type="submit" class="btn btn-primary">Submit Registration</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('app').innerHTML = content;
  initializeRegistrationValidation();
}

function initializeRegistrationValidation() {
  const form = document.getElementById('registrationForm');
  const addMemberBtn = document.getElementById('addMember');
  const teamMembers = document.getElementById('teamMembers');
  let memberCount = 1;

  addMemberBtn.addEventListener('click', () => {
    if (memberCount < 3) {
      const memberInput = document.createElement('div');
      memberInput.className = 'input-group mb-2';
      memberInput.innerHTML = `
        <input type="text" class="form-control" placeholder="Student ID" required pattern="[0-9]{9}">
        <input type="email" class="form-control" placeholder="Sheridan Email" required pattern=".+@sheridancollege\.ca$">
      `;
      teamMembers.appendChild(memberInput);
      memberCount++;
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      e.stopPropagation();
      form.classList.add('was-validated');
      return;
    }

    // Here we'll add the registration logic once we set up the database
    alert('Registration submitted successfully!');
  });
}