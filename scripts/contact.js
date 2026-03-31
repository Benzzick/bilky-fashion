// ============================================
// CONTACT & APPOINTMENT JAVASCRIPT
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initInquiryForm();
  initAppointmentForm();
});

/**
 * Handle switching between Inquiry and Appointment tabs
 */
function initTabs() {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const inquiryForm = document.getElementById("contactForm");
  const appointmentForm = document.getElementById("appointmentForm");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      tabBtns.forEach((b) => b.classList.remove("active"));
      // Add active class to clicked button
      btn.classList.add("active");

      // Toggle forms
      const tab = btn.dataset.tab;
      if (tab === "inquiry") {
        inquiryForm.classList.add("active");
        appointmentForm.classList.remove("active");
        // Ensure inline styles don't override class
        inquiryForm.style.display = "";
        appointmentForm.style.display = "";
      } else {
        inquiryForm.classList.remove("active");
        appointmentForm.classList.add("active");
        // Ensure inline styles don't override class
        inquiryForm.style.display = "";
        appointmentForm.style.display = "";
      }
    });
  });
}

/**
 * Handle General Inquiry Form
 */
function initInquiryForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Basic validation check (simplified for demo)
    const inputs = form.querySelectorAll(
      "input[required], textarea[required], select[required]",
    );
    let isValid = true;

    inputs.forEach((input) => {
      const errorMsg = document.getElementById(input.id + "Error");
      if (!input.value.trim()) {
        input.classList.add("error");
        if (errorMsg) errorMsg.style.display = "block";
        isValid = false;
      } else {
        input.classList.remove("error");
        if (errorMsg) errorMsg.style.display = "none";
      }
    });

    if (isValid) {
      // Using global showNotification from script.js
      if (window.showNotification) {
        showNotification(
          "Your message has been sent successfully! We will contact you soon.",
          "success",
        );
      } else {
        alert("Message sent successfully!");
      }
      form.reset();
    }
  });
}

/**
 * Handle Appointment Booking Form
 */
function initAppointmentForm() {
  const form = document.getElementById("appointmentForm");
  const timeBtns = document.querySelectorAll(".time-btn");
  const selectedTimeInput = document.getElementById("selectedTime");
  const dateInput = document.getElementById("aptDate");
  const summaryCard = document.getElementById("bookingSummary");
  const summaryText = document.getElementById("summaryText");

  if (!form) return;

  // Set minimum date to today
  const today = new Date().toISOString().split("T")[0];
  dateInput.setAttribute("min", today);

  // Time slot selection
  timeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      timeBtns.forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedTimeInput.value = btn.dataset.time;
      updateSummary();
    });
  });

  // Date change
  dateInput.addEventListener("change", updateSummary);

  function updateSummary() {
    const date = dateInput.value;
    const time = selectedTimeInput.value;

    if (date && time) {
      summaryCard.style.display = "block";
      summaryText.innerHTML = `<strong>Appointment for:</strong> ${date} at ${time}`;
    } else {
      summaryCard.style.display = "none";
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const date = dateInput.value;
    const time = selectedTimeInput.value;
    const name = document.getElementById("aptName").value;

    if (!date || !time) {
      if (window.showNotification) {
        showNotification("Please select both a date and a time slot.", "error");
      }
      return;
    }

    // Logic for "submission"
    if (window.showNotification) {
      showNotification(
        `Confirmed! ${name}, your session is booked for ${date} at ${time}.`,
        "success",
      );
    } else {
      alert(`Appointment confirmed for ${date} at ${time}`);
    }

    form.reset();
    timeBtns.forEach((b) => b.classList.remove("selected"));
    summaryCard.style.display = "none";
  });
}

// Handle form submission
function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const successMessage = document.getElementById("successMessage");

  // Validate form
  if (!validateForm(form)) {
    // Scroll to first error
    const firstError = form.querySelector(".error");
    if (firstError) {
      firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      firstError.focus();
    }
    return;
  }

  // Get form data
  const formData = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
    timestamp: new Date().toISOString(),
  };

  // Show loading state
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn.textContent;
  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;

  // Simulate API call (in real app, this would be an actual API request)
  setTimeout(() => {
    // Log form data (in real app, this would be sent to server)
    console.log("Form submitted:", formData);

    // Show success message
    successMessage.classList.add("show");
    successMessage.scrollIntoView({ behavior: "smooth", block: "center" });

    // Reset form
    form.reset();

    // Reset button
    submitBtn.textContent = originalBtnText;
    submitBtn.disabled = false;

    // Hide success message after 5 seconds
    setTimeout(() => {
      successMessage.classList.remove("show");
    }, 5000);

    // Show notification
    showNotification("Thank you! Your message has been sent successfully.");

    // Save to localStorage for demo purposes
    saveContactSubmission(formData);
  }, 1500);
}

// Save contact submission to localStorage (demo purposes)
function saveContactSubmission(formData) {
  const submissions =
    JSON.parse(localStorage.getItem("contactSubmissions")) || [];
  submissions.push(formData);
  localStorage.setItem("contactSubmissions", JSON.stringify(submissions));
}

// Show notification
function showNotification(message) {
  const notification = document.createElement("div");
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
    padding: 1rem 1.5rem;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-lg);
    z-index: 10000;
    animation: slideInRight 0.3s ease;
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease";
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Auto-resize textarea
const messageTextarea = document.getElementById("message");
if (messageTextarea) {
  messageTextarea.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = Math.max(150, this.scrollHeight) + "px";
  });
}

// Phone number formatting (optional enhancement)
const phoneInput = document.getElementById("phone");
if (phoneInput) {
  phoneInput.addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 0) {
      if (value.length <= 3) {
        value = `(${value}`;
      } else if (value.length <= 6) {
        value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
      } else {
        value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
      }
    }
    e.target.value = value;
  });
}
