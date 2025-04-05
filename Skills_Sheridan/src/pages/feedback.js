export function renderFeedback() {
  const content = `
    <div class="container py-5">
      <h2 class="section-title">Feedback Form</h2>
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-body">
              <form id="feedbackForm" class="needs-validation" novalidate>
                <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input type="text" class="form-control" id="name" required>
                </div>

                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" required>
                </div>

                <div class="mb-3">
                  <label for="category" class="form-label">Feedback Category</label>
                  <select class="form-select" id="category" required>
                    <option value="">Select a category</option>
                    <option value="event">Event Organization</option>
                    <option value="projects">Project Quality</option>
                    <option value="venue">Venue & Facilities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div class="mb-3">
                  <label for="rating" class="form-label">Rating</label>
                  <div class="d-flex gap-3">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="rating" id="rating1" value="1" required>
                      <label class="form-check-label" for="rating1">1</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="rating" id="rating2" value="2">
                      <label class="form-check-label" for="rating2">2</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="rating" id="rating3" value="3">
                      <label class="form-check-label" for="rating3">3</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="rating" id="rating4" value="4">
                      <label class="form-check-label" for="rating4">4</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="rating" id="rating5" value="5">
                      <label class="form-check-label" for="rating5">5</label>
                    </div>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="comments" class="form-label">Comments</label>
                  <textarea class="form-control" id="comments" rows="4" required></textarea>
                </div>

                <button type="submit" class="btn btn-primary">Submit Feedback</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('app').innerHTML = content;
  initializeFeedbackValidation();
}

function initializeFeedbackValidation() {
  const form = document.getElementById('feedbackForm');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      e.stopPropagation();
      form.classList.add('was-validated');
      return;
    }

    // Here we'll add the feedback submission logic once we set up the database
    alert('Feedback submitted successfully!');
  });
}