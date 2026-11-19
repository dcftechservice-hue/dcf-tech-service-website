
"use client";

import { useState, type FormEvent } from "react";

// ======================================================
// MAIN NAVIGATION
// ======================================================

const navigation = [
  { name: "All Services", href: "/AllServices" },
  { name: "Repairs", href: "/Repairs" },
  { name: "Software", href: "/Software" },
  { name: "Store", href: "/Store" },
  { name: "About", href: "/About" },
  { name: "Socials", href: "/Socials" },
  { name: "Contact", href: "/Contact" },
  { name: "Support", href: "/Support" },
];

// ======================================================
// SOFTWARE PAGE
// ======================================================

export default function Software() {
  const [contactMethod, setContactMethod] = useState("email");
  const [supportMethod, setSupportMethod] = useState("discuss");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage(
      "Your software support form is ready, but email submission has not been connected yet."
    );
  }

  return (
    <>
      {/* ==================================================
          HEADER
      ================================================== */}

      <header className="site-header">
        <div className="brand">
          <img
            src="/img/DCF_logo.png"
            alt="DCF Tech Service logo"
            className="site-logo"
          />
        </div>
      </header>

      {/* ==================================================
          MAIN NAVIGATION
      ================================================== */}

      <nav className="navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.name}
          </a>
        ))}
      </nav>

      {/* ==================================================
          SOFTWARE PAGE CONTENT
      ================================================== */}

      <main className="software-page">

        {/* ==================================================
            INTRODUCTION BANNER
        ================================================== */}

        <section className="software-hero">
          <div className="software-hero__content">
            <span className="software-hero__eyebrow">
              DCF TECH SERVICE
            </span>

            <h1>Software Support</h1>

            <p>
              Having trouble with software, applications or your
              operating system? Tell us what's happening and we'll
              help you find a solution.
            </p>

            <a href="#software-request" className="software-hero__button">
              Request Support
            </a>
          </div>
        </section>

        {/* ==================================================
            SUPPORT INFORMATION
        ================================================== */}

        <section className="software-information">

          <div className="software-information__heading">
            <h2>How We Can Help</h2>
            <p>
              Software problems can have many different causes.
              We'll look at the information you provide and work
              out the best way to help.
            </p>
          </div>

          <div className="software-information__grid">

            <article className="software-info-card">
              <span className="software-info-card__number">01</span>
              <h3>Tell Us the Problem</h3>
              <p>
                Describe what's happening, including any error
                messages, when the problem started and what
                you've already tried.
              </p>
            </article>

            <article className="software-info-card">
              <span className="software-info-card__number">02</span>
              <h3>We'll Review It</h3>
              <p>
                We'll look over your request and contact you to
                discuss the issue, possible solutions and any
                expected costs.
              </p>
            </article>

            <article className="software-info-card">
              <span className="software-info-card__number">03</span>
              <h3>Find the Best Solution</h3>
              <p>
                Depending on the problem, we may be able to help
                remotely, arrange support at your location or
                discuss another suitable option.
              </p>
            </article>

          </div>

          {/* SUPPORT LOCATION INFORMATION */}

          <div className="software-location">
            <div className="software-location__text">
              <h3>Support Where You Need It</h3>
              <p>
                Some software issues can be resolved without
                needing your device to be sent anywhere. Where
                suitable, we may be able to arrange support at
                your location.
              </p>
              <p>
                On-site support depends on the type of issue,
                your location and availability. We'll discuss
                the options with you before arranging anything.
              </p>
            </div>

            <div className="software-location__side">
              <span>Flexible Support</span>
              <strong>We'll work out the right approach together.</strong>
            </div>
          </div>

        </section>

        {/* ==================================================
            SOFTWARE SUPPORT REQUEST FORM
        ================================================== */}

        <section className="software-request" id="software-request">

          <div className="software-request__heading">
            <span>GET IN TOUCH</span>
            <h2>Tell Us What's Going On</h2>
            <p>
              Give us as much information as you can. You don't
              need to know exactly what's causing the problem.
            </p>
          </div>

          <form
            className="software-form"
            onSubmit={handleSubmit}
          >

            {/* CUSTOMER DETAILS */}

            <div className="software-form__section">
              <h3>Your Details</h3>

              <div className="software-form__field">
                <label htmlFor="software-name">Your Name</label>
                <input
                  id="software-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>
            </div>

            {/* DEVICE INFORMATION */}

            <div className="software-form__section">
              <h3>What's the Issue?</h3>

              <div className="software-form__field">
                <label htmlFor="software-category">
                  Issue Category
                </label>

                <select
                  id="software-category"
                  name="issueCategory"
                  defaultValue="Software Issue"
                  required
                >
                  <option value="Software Issue">
                    Software Issue
                  </option>
                </select>
              </div>

              <div className="software-form__field">
                <label htmlFor="software-device">
                  Affected Device
                </label>

                <input
                  id="software-device"
                  name="affectedDevice"
                  type="text"
                  placeholder="e.g. Windows PC, laptop, tablet..."
                  required
                />
              </div>

              <div className="software-form__field">
                <label htmlFor="software-description">
                  Describe the Problem
                </label>

                <textarea
                  id="software-description"
                  name="description"
                  rows={7}
                  placeholder="Describe what's happening, what you were trying to do, any error messages you have seen, and anything else that might help us understand the problem..."
                  required
                />

                <small>
                  The more detail you provide, the easier it will
                  be for us to understand the issue.
                </small>
              </div>
            </div>

            {/* SUPPORT PREFERENCE */}

            <div className="software-form__section">
              <h3>How Would You Prefer to Get Support?</h3>

              <div className="software-form__support-options">

                <label
                  className={`software-support-option ${
                    supportMethod === "onsite" ? "is-selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="supportMethod"
                    value="onsite"
                    checked={supportMethod === "onsite"}
                    onChange={(event) =>
                      setSupportMethod(event.target.value)
                    }
                  />

                  <span>
                    <strong>At My Location</strong>
                    <small>
                      I'd prefer someone to come and help me,
                      if available.
                    </small>
                  </span>
                </label>

                <label
                  className={`software-support-option ${
                    supportMethod === "discuss" ? "is-selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="supportMethod"
                    value="discuss"
                    checked={supportMethod === "discuss"}
                    onChange={(event) =>
                      setSupportMethod(event.target.value)
                    }
                  />

                  <span>
                    <strong>Discuss My Options</strong>
                    <small>
                      I'm happy to discuss the best way to
                      resolve the problem.
                    </small>
                  </span>
                </label>

              </div>

              {supportMethod === "onsite" && (
                <div className="software-form__field">
                  <label htmlFor="software-location">
                    Your Town or Area
                  </label>

                  <input
                    id="software-location"
                    name="location"
                    type="text"
                    placeholder="Enter your town or area"
                    required
                  />

                  <small>
                    This helps us check whether on-site support
                    may be available in your area.
                  </small>
                </div>
              )}
            </div>

            {/* PREFERRED CONTACT METHOD */}

            <div className="software-form__section">
              <h3>Preferred Contact Method</h3>

              <div className="software-form__field">
                <label htmlFor="software-contact-method">
                  How would you like us to contact you?
                </label>

                <select
                  id="software-contact-method"
                  name="contactMethod"
                  value={contactMethod}
                  onChange={(event) =>
                    setContactMethod(event.target.value)
                  }
                  required
                >
                  <option value="email">Email</option>
                  <option value="text">Text Message (SMS)</option>
                </select>
              </div>

              {contactMethod === "email" && (
                <div className="software-form__field">
                  <label htmlFor="software-email">
                    Email Address
                  </label>

                  <input
                    id="software-email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              )}

              {contactMethod === "text" && (
                <div className="software-form__field">
                  <label htmlFor="software-phone">
                    Mobile Number
                  </label>

                  <input
                    id="software-phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your mobile number"
                    required
                  />
                </div>
              )}
            </div>

            {/* FORM SUBMISSION */}

            <div className="software-form__submit">
              <button type="submit">
                Send Support Request
              </button>

              {message && (
                <p role="status">
                  {message}
                </p>
              )}
            </div>

          </form>
        </section>

      </main>
    </>
  );
}
