import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message. I'll get back to you shortly.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-[120px] pb-24 flex items-center">
      <div className="max-w-[600px] mx-auto px-6 w-full">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-text-secondary">Let’s talk stories, not just destinations.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-text-tertiary">Name</label>
            <input 
              type="text" 
              id="name"
              required
              className="w-full bg-surface border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-accent transition-colors"
              placeholder="Your name"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-text-tertiary">Email</label>
            <input 
              type="email" 
              id="email"
              required
              className="w-full bg-surface border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-accent transition-colors"
              placeholder="your@email.com"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-text-tertiary">Message</label>
            <textarea 
              id="message"
              required
              rows={6}
              className="w-full bg-surface border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-accent transition-colors resize-none"
              placeholder="Tell me about your project or story..."
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-accent text-[#070709] font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(201,166,107,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Send Message</span>
            <Send size={18} />
          </button>
        </form>

        <div className="mt-16 text-center text-text-tertiary text-sm">
          <p>For collaborations, you can also email directly at</p>
          <a href="mailto:hello@storysir.com" className="text-accent hover:underline mt-1 block">hello@storysir.com</a>
        </div>

      </div>
    </div>
  );
};

export default Contact;