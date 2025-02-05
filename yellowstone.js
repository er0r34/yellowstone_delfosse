function nextSection(current, next) {
  document.getElementById(current).classList.remove("show");
  document.getElementById(next).classList.add("show");
  document
    .querySelector(`[data-target="#${next}"]`)
    .scrollIntoView({ behavior: "smooth" });
}

function enableContinueButton() {
  document.getElementById("continueButton").disabled = false;
}

let historyCount = 1;
let educationCount = 1;
let referenceCount = 1;

function addHistoryTab() {
  historyCount++;
  const newTabId = `job${historyCount}`;
  const newTab = `
    <li class="nav-item">
      <a class="nav-link" id="${newTabId}-tab" data-toggle="tab" href="#${newTabId}" role="tab" aria-controls="${newTabId}" aria-selected="false">Job ${historyCount}</a>
    </li>`;
  const newTabContent = `
    <div class="tab-pane fade" id="${newTabId}" role="tabpanel" aria-labelledby="${newTabId}-tab">
      <form>
        <div class="form-group row">
          <label for="companyName${historyCount}" class="col-sm-2 col-form-label">Company Name</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="companyName${historyCount}" name="companyName${historyCount}" />
          </div>
        </div>
        <div class="form-group row">
          <label for="jobTitle${historyCount}" class="col-sm-2 col-form-label">Job Title</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="jobTitle${historyCount}" name="jobTitle${historyCount}" />
          </div>
        </div>
        <div class="form-group row">
          <label for="jobDuties${historyCount}" class="col-sm-2 col-form-label">Job Duties</label>
          <div class="col-sm-10">
            <textarea class="form-control" id="jobDuties${historyCount}" name="jobDuties${historyCount}"></textarea>
          </div>
        </div>
        <div class="form-group row">
          <label for="employmentDates${historyCount}" class="col-sm-2 col-form-label">Dates of Employment</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="employmentDates${historyCount}" name="employmentDates${historyCount}" />
          </div>
        </div>
        <div class="form-group row">
          <label for="reasonForLeaving${historyCount}" class="col-sm-2 col-form-label">Reason for Leaving</label>
          <div class="col-sm-10">
            <textarea class="form-control" id="reasonForLeaving${historyCount}" name="reasonForLeaving${historyCount}"></textarea>
          </div>
        </div>
      </form>
    </div>`;
  document
    .getElementById("employmentHistoryTabs")
    .insertAdjacentHTML("beforeend", newTab);
  document
    .getElementById("employmentHistoryContent")
    .insertAdjacentHTML("beforeend", newTabContent);
  $(`#${newTabId}-tab`).tab("show");
}

function addEducationTab() {
  educationCount++;
  const newTabId = `education${educationCount}`;
  const newTab = `
    <li class="nav-item">
      <a class="nav-link" id="${newTabId}-tab" data-toggle="tab" href="#${newTabId}" role="tab" aria-controls="${newTabId}" aria-selected="false">Education ${educationCount}</a>
    </li>`;
  const newTabContent = `
    <div class="tab-pane fade" id="${newTabId}" role="tabpanel" aria-labelledby="${newTabId}-tab">
      <form>
        <div class="form-group row">
          <label for="schoolName${educationCount}" class="col-sm-2 col-form-label">School Name</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="schoolName${educationCount}" name="schoolName${educationCount}" />
          </div>
        </div>
        <div class="form-group row">
          <label for="degree${educationCount}" class="col-sm-2 col-form-label">Degree</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="degree${educationCount}" name="degree${educationCount}" />
          </div>
        </div>
        <div class="form-group row">
          <label for="graduationYear${educationCount}" class="col-sm-2 col-form-label">Year of Graduation</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="graduationYear${educationCount}" name="graduationYear${educationCount}" />
          </div>
        </div>
      </form>
    </div>`;
  document
    .getElementById("educationTabs")
    .insertAdjacentHTML("beforeend", newTab);
  document
    .getElementById("educationContent")
    .insertAdjacentHTML("beforeend", newTabContent);
  $(`#${newTabId}-tab`).tab("show");
}

function addReferenceTab() {
  referenceCount++;
  const newTabId = `reference${referenceCount}`;
  const newTab = `
    <li class="nav-item">
      <a class="nav-link" id="${newTabId}-tab" data-toggle="tab" href="#${newTabId}" role="tab" aria-controls="${newTabId}" aria-selected="false">Reference ${referenceCount}</a>
    </li>`;
  const newTabContent = `
    <div class="tab-pane fade" id="${newTabId}" role="tabpanel" aria-labelledby="${newTabId}-tab">
      <form>
        <div class="form-group row">
          <label for="referenceName${referenceCount}" class="col-sm-2 col-form-label">Reference Name</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="referenceName${referenceCount}" name="referenceName${referenceCount}" />
          </div>
        </div>
        <div class="form-group row">
          <label for="referencePhone${referenceCount}" class="col-sm-2 col-form-label">Reference Phone</label>
          <div class="col-sm-10">
            <input type="tel" class="form-control" id="referencePhone${referenceCount}" name="referencePhone${referenceCount}" />
          </div>
        </div>
        <div class="form-group row">
          <label for="referenceEmail${referenceCount}" class="col-sm-2 col-form-label">Reference Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="referenceEmail${referenceCount}" name="referenceEmail${referenceCount}" />
          </div>
        </div>
        <div class="form-group row">
          <label for="referenceRelationship${referenceCount}" class="col-sm-2 col-form-label">Relationship</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="referenceRelationship${referenceCount}" name="referenceRelationship${referenceCount}" />
          </div>
        </div>
      </form>
    </div>`;
  document
    .getElementById("referenceTabs")
    .insertAdjacentHTML("beforeend", newTab);
  document
    .getElementById("referenceContent")
    .insertAdjacentHTML("beforeend", newTabContent);
  $(`#${newTabId}-tab`).tab("show");
}
