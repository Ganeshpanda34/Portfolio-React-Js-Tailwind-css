import React, { useState } from 'react';

const contactInfo = [
  {
    icon: 'fa-solid fa-location-dot',
    title: 'Location',
    text: 'Bhadrak, Odisha, India',
    href: 'https://www.google.com/maps/place/Buddha+Vihar,+Bhadrak,+Odisha+756100',
  },
  {
    icon: 'fa-solid fa-envelope',
    title: 'Email',
    text: 'roy862452@gmail.com',
    href: 'mailto:roy862452@gmail.com',
  },
  {
    icon: 'fa-solid fa-phone',
    title: 'Phone',
    text: '+91 8249873663',
    href: 'tel:+918249873663',
  },
];

const socialLinks = [
  { icon: 'fa-brands fa-github', href: 'https://github.com/GaneshPanda34' },
  { icon: 'fa-brands fa-linkedin', href: 'https://www.linkedin.com/in/dev-roy-81319a378' },
  { icon: 'fa-brands fa-twitter', href: 'https://twitter.com/@GaneshPanda34' },
  { icon: 'fa-brands fa-instagram', href: 'https://www.instagram.com/ganesh_panda69' },
  { icon: 'fa-brands fa-whatsapp', href: 'https://wa.me/8249873663' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    form_subject: '',
    message: '',
  });
  const [result, setResult] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear the error for the field being edited
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid. Please enter a valid email address.';
    }
    if (!formData.form_subject.trim()) newErrors.form_subject = 'Subject is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setResult('Sending...');
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });

      const json = await response.json();

      if (json.success) {
        setResult('Form submitted successfully!');
        form.reset();
        setFormData({ name: '', email: '', form_subject: '', message: '' });
        setErrors({});
      } else {
        console.log('Error from web3forms:', json);
        setResult(json.message);
      }
    } catch (error) {
      console.log('Fetch error:', error);
      setResult('Something went wrong!');
    } finally {
      setIsSubmitting(false);
    }

    setTimeout(() => {
      setResult('');
    }, 5000);
  };

  return (
    <section id="contact" className="bg-gray-900/70 py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-12 sm:mb-16 text-3xl sm:text-4xl font-bold text-white font-heading" data-aos="fade-down">
          Contact <span className="text-cyan-400">Me</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5 lg:col-start-2" data-aos="fade-right">
            <h4 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-heading">Get in Touch</h4>
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-4 mb-6">
                <i className={`${item.icon} text-cyan-400 text-2xl mt-1`}></i>
                <div>
                  <h5 className="text-lg font-semibold text-white font-heading">{item.title}</h5>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    {item.text}
                  </a>
                </div>
              </div>
            ))}
            <div className="mt-8">
              <h5 className="text-xl font-semibold text-white mb-4 font-heading">Follow Me</h5>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, index) => (
                  <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 text-2xl hover:text-cyan-400 transition-all duration-300 hover:scale-110">
                    <i className={link.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-5 mt-12 lg:mt-0" data-aos="fade-left" data-aos-delay="200">
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value="de117e27-5032-423e-849e-d50b911a7af2" />
              <input type="hidden" name="subject" value="New Contact Form Submission from Portfolio" />
              <input type="hidden" name="from_name" value="Ganesh's Portfolio" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 text-sm font-medium">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. John Doe" required className={`w-full bg-gray-800/50 border rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 ${errors.name ? 'border-red-500' : 'border-gray-700'}`} />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 text-sm font-medium">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="e.g. john.doe@example.com" required className={`w-full bg-gray-800/50 border rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 ${errors.email ? 'border-red-500' : 'border-gray-700'}`} />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="form_subject" className="block text-gray-300 mb-2 text-sm font-medium">Subject</label>
                  <input type="text" id="form_subject" name="form_subject" value={formData.form_subject} onChange={handleChange} placeholder="e.g. Project Inquiry" required className={`w-full bg-gray-800/50 border rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 ${errors.form_subject ? 'border-red-500' : 'border-gray-700'}`} />
                  {errors.form_subject && <p className="text-red-500 text-sm mt-1">{errors.form_subject}</p>}
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-gray-300 mb-2 text-sm font-medium">Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="Hello, I'd like to discuss..." required className={`w-full bg-gray-800/50 border rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 ${errors.message ? 'border-red-500' : 'border-gray-700'}`}></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                <div className="md:col-span-2">
                  <button type="submit" disabled={isSubmitting} className="inline-flex items-center justify-center gap-3 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-500/20 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed">
                    {isSubmitting ? (
                      <>
                        <i className="fa-solid fa-spinner fa-spin"></i>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <i className="fa-solid fa-paper-plane"></i>
                      </>
                    )}
                  </button>
                </div>
              </div>
              {result && <div className="mt-4 text-white">{result}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;