"use client";

import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useState } from "react";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const business = formData.get("business") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, business, service, message }),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        if (e.currentTarget) {
          e.currentTarget.reset();
        }
      } else {
        const data = await response.json();
        throw new Error(data.message);
      }
    } catch (error: unknown) {
  console.error("Error sending message:", error);
  if (error instanceof Error) {
    toast.error(error.message || "An unexpected error occurred.");
  } else {
    toast.error("An unexpected error occurred.");
  }
} finally {
  setLoading(false);
}

  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 scroll-animation">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-12 text-center text-cyan-300 uppercase"
          data-text="Connect with the Future"
        >
          Ready to Transform Your Business Idea?
        </h2>
        <form
          className="max-w-xl mx-auto bg-white/5 backdrop-blur-lg border border-cyan-500/20 rounded-2xl shadow-xl p-6 sm:p-8 space-y-6 transition-all hover:shadow-cyan-500/20"
          onSubmit={handleSubmit}
        >
          {/* Heading */}
          <h3 className="text-2xl font-semibold text-center text-cyan-300 mb-2">
            Get in Touch
          </h3>
          <p className="text-center text-sm text-muted-foreground mb-4">
            Let&apos;s discuss how we can build the future together.
          </p>

          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              required
              placeholder=" "
              className="peer w-full bg-transparent border border-cyan-400 rounded-lg px-4 pt-5 pb-2 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-2 text-sm text-cyan-300 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-300"
            >
              Your Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              required
              placeholder=" "
              className="peer w-full bg-transparent border border-cyan-400 rounded-lg px-4 pt-5 pb-2 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-2 text-sm text-cyan-300 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-300"
            >
              Your Email
            </label>
          </div>

          {/* Business Name */}
          <div className="relative">
            <input
              type="text"
              name="business"
              placeholder=" "
              className="peer w-full bg-transparent border border-cyan-400 rounded-lg px-4 pt-5 pb-2 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <label
              htmlFor="business"
              className="absolute left-4 top-2 text-sm text-cyan-300 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-300"
            >
              Business Name (optional)
            </label>
          </div>

          {/* Dropdown */}
          <div className="relative">
            <select
              name="service"
              required
              defaultValue=""
              className="appearance-none w-full bg-black/20 text-white border border-cyan-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-300 transition-all duration-300 shadow-md hover:shadow-cyan-500/20 cursor-pointer"
            >
              <option value="" disabled className="text-gray-400">
                Service Interested In
              </option>
              <option value="Blockchain Infrastructure">
                Blockchain Infrastructure
              </option>
              <option value="Smart Contract Development">
                Smart Contract Development
              </option>
              <option value="AI Agent Integration">AI Agent Integration</option>
              <option value="Enterprise Integration">
                Enterprise Integration
              </option>
              <option value="Custom Solution">Custom Solution</option>
            </select>

            {/* Down arrow indicator */}
            <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-cyan-300">
              ▼
            </div>
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full mb-6 p-3 bg-transparent border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground transition-all duration-300 hover:glow"
            rows={4}
            required
          ></textarea>

          {loading ? (
            <p className="text-center text-primary-foreground">Sending...</p>
          ) : (
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover-glow"
            >
              Send Message
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
