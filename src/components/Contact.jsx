

export default function Contact() {
  return (
    <>
      <h1 className="title-one">Contact Me</h1>

      <div className="contact-form-container">
        <div className="contact-form-wrapper">
          <form>
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}
