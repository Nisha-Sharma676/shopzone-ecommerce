function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Thank you! Your message has been received.")
  }

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Have questions? We would love to hear from you.</p>

      <div className="contact-info">
        <h3>Get in Touch</h3>
        <p>Email: support@shopzone.com</p>
        <p>Website: ShopZone E-Commerce</p>
      </div>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}

export default Contact