
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
// REPAIR FORM OPTIONS
// ======================================================

const itemCategories = [
  "Mobile Phone",
  "Tablet",
  "Laptop",
  "Desktop Computer",
  "Gaming Console",
  "Controller",
  "Other",
];

const repairTypes = [
  "Screen Damage",
  "Battery Replacement",
  "Charging Problem",
  "Water Damage",
  "Camera Problem",
  "Software Problem",
  "Hardware Problem",
  "Overheating",
  "Data Recovery",
  "General Diagnostics",
  "Other",
];

// ======================================================
// REPAIRS PAGE
// ======================================================

export default function Repairs() {
  const [contactMethod, setContactMethod] = useState("email");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage(
      "The repair request form is ready, but email submission has not been connected yet."
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
          REPAIRS PAGE CONTENT
      ================================================== */}

      <main className="repairs-page">

        {/* PAGE HEADING */}

        <section className="repairs-intro">
          <h1>Repairs</h1>
          <p>
            Need something repaired? Tell us what's wrong and we'll help
            you work out the next steps.
          </p>
        </section>

        {/* ==================================================
            HOW THE REPAIR PROCESS WORKS
        ================================================== */}

        <section className="repair-process">
          <h2>How It Works</h2>

          <div className="repair-process__steps">

            <article className="repair-step">
              <span className="repair-step__number">01</span>
              <h3>Send Your Request</h3>
              <p>
                Fill in the repair request form below with details about
                your device and the problem you're experiencing.
              </p>
            </article>

            <article className="repair-step">
              <span className="repair-step__number">02</span>
              <h3>Receive an Estimate</h3>
              <p>
                We'll review your information and get back to you with
                an estimated repair cost before you commit to anything.
              </p>
            </article>

            <article className="repair-step">
              <span className="repair-step__number">03</span>
              <h3>Arrange the Repair</h3>
              <p>
                You can send your device to us by post, or arrange a
                paid collection if you're within our collection area.
              </p>
            </article>

            <article className="repair-step">
              <span className="repair-step__number">04</span>
              <h3>Repair Updates</h3>
              <p>
                If an inspection reveals anything that changes the
                estimated price or repair, we'll contact you first.
                We'll use your preferred contact method to keep you
                updated.
              </p>
            </article>

          </div>

          <div className="repair-process__note">
            <h3>No unexpected changes</h3>
            <p>
              We won't proceed with additional work or a changed repair
              cost without contacting you and getting your approval.
            </p>
          </div>
        </section>

        {/* ==================================================
            REPAIR REQUEST FORM
        ================================================== */}

        <section className="repair-request" id="repair-request">

          <div className="repair-request__heading">
            <h2>Request a Repair</h2>
            <p>
              Complete the form below and we'll get back to you
              regarding your repair.
            </p>
          </div>

          <form
            className="repair-form"
            onSubmit={handleSubmit}
          >

            {/* CUSTOMER DETAILS */}

            <div className="repair-form__section">
              <h3>Your Details</h3>

              <div className="repair-form__field">
                <label htmlFor="customer-name">Your Name</label>
                <input
                  id="customer-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>
            </div>

            {/* DEVICE DETAILS */}

            <div className="repair-form__section">
              <h3>Device Information</h3>

              <div className="repair-form__field">
                <label htmlFor="item-category">Item Category</label>
                <select
                  id="item-category"
                  name="itemCategory"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select your device
                  </option>

                  {itemCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="repair-form__field">
                <label htmlFor="repair-type">Type of Repair</label>
                <select
                  id="repair-type"
                  name="repairType"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select the problem
                  </option>

                  {repairTypes.map((repair) => (
                    <option key={repair} value={repair}>
                      {repair}
                    </option>
                  ))}
                </select>
              </div>

              <div className="repair-form__field">
                <label htmlFor="repair-information">
                  Additional Information
                </label>
                <textarea
                  id="repair-information"
                  name="additionalInformation"
                  rows={5}
                  placeholder="Tell us more about the device, the problem, or anything else we should know..."
                />
              </div>
            </div>

            {/* COLLECTION OR POSTAL REPAIR */}

            <div className="repair-form__section">
              <h3>How Would You Like to Send Your Device?</h3>

              <div className="repair-form__radio-group">
                <label className="repair-form__radio-option">
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="Mail-in"
                    defaultChecked
                  />
                  <span>
                    <strong>Mail-in</strong>
                    <small>Send your device to us by post.</small>
                  </span>
                </label>

                <label className="repair-form__radio-option">
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="Collection"
                  />
                  <span>
                    <strong>Collection</strong>
                    <small>
                      Request a paid collection if you're within our
                      collection area.
                    </small>
                  </span>
                </label>
              </div>

              <p className="repair-form__hint">
                Collection availability and cost will be confirmed
                when we respond to your request.
              </p>
            </div>

            {/* PREFERRED CONTACT METHOD */}

            <div className="repair-form__section">
              <h3>Preferred Contact Method</h3>

              <div className="repair-form__field">
                <label htmlFor="contact-method">
                  How would you like us to contact you?
                </label>

                <select
                  id="contact-method"
                  name="contactMethod"
                  value={contactMethod}
                  onChange={(event) => setContactMethod(event.target.value)}
                  required
                >
                  <option value="email">Email</option>
                  <option value="text">Text Message (SMS)</option>
                </select>
              </div>

              {contactMethod === "email" && (
                <div className="repair-form__field">
                  <label htmlFor="customer-email">Email Address</label>
                  <input
                    id="customer-email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              )}

              {contactMethod === "text" && (
                <div className="repair-form__field">
                  <label htmlFor="customer-phone">Mobile Number</label>
                  <input
                    id="customer-phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your mobile number"
                    required
                  />
                </div>
              )}
            </div>

            {/* FORM SUBMISSION */}

            <div className="repair-form__submit">
              <button type="submit">
                Send Repair Request
              </button>

              {message && (
                <p className="repair-form__message" role="status">
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
