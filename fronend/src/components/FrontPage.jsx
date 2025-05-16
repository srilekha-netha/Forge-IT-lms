import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/FrontPage.css';
import heroImage from '../assets/hero-image.jpg';
import feature1 from '../assets/feature1.jpg';
import feature2 from '../assets/feature2.jpg';
import feature3 from '../assets/feature3.jpg';

const FrontPage = () => {
  const navigate = useNavigate();

  return (
    <div className="front-page">
      {/* Header Section */}
      <header className="header">
        <div className="logo">Forge <span className="it">IT</span></div>
        <nav className="nav-links">
          <button onClick={() => window.scrollTo(0, 0)}>Home</button>
          <button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>Features</button>
          <button onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}>Categories</button>
          <button onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}>Testimonials</button>
          <button onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}>Join</button>
        </nav>
        <div className="header-actions">
          <input type="text" placeholder="Search courses" className="search-bar" />
          <button onClick={() => navigate('/login')} className="btn header-btn">Log in</button>
          <button onClick={() => navigate('/signup')} className="btn header-btn primary">Sign up</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Welcome to <span className="brand">Forge <span className="it">IT</span></span>
          </h1>
          <p>Empower your future with top-notch courses taught by industry experts.</p>
          <div className="hero-buttons">
            <button onClick={() => navigate('/role')}>Get Started</button>
            <button onClick={() => navigate('/role')}>Explore Courses</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Hero" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" id="features">
        <h2>Why Choose Forge IT?</h2>
        <div className="features">
          <div className="feature">
            <img src={feature1} alt="Expert Instructors" />
            <h3>Expert Instructors</h3>
            <p>Learn from professionals with real-world experience.</p>
          </div>
          <div className="feature">
            <img src={feature2} alt="Flexible Learning" />
            <h3>Flexible Learning</h3>
            <p>Access courses anytime, anywhere, on any device.</p>
          </div>
          <div className="feature">
            <img src={feature3} alt="Affordable Prices" />
            <h3>Affordable Prices</h3>
            <p>High-quality education at a price you can afford.</p>
          </div>
        </div>
      </section>

      {/* Top Categories Section */}
      <section className="categories-section" id="categories">
        <h2>Top Categories</h2>
        <div className="categories">
          <div className="category">Development</div>
          <div className="category">Business</div>
          <div className="category">Finance & Accounting</div>
          <div className="category">IT & Software</div>
          <div className="category">Office Productivity</div>
          <div className="category">Personal Development</div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section" id="testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"Forge IT has transformed my career. The courses are comprehensive and easy to follow."</p>
            <h4>- Alex Johnson</h4>
          </div>
          <div className="testimonial">
            <p>"The flexibility to learn at my own pace made all the difference."</p>
            <h4>- Maria Garcia</h4>
          </div>
          <div className="testimonial">
            <p>"Affordable and high-quality education. Highly recommend Forge IT!"</p>
            <h4>- Li Wei</h4>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section" id="cta">
        <h2>Ready to Start Learning?</h2>
        <button onClick={() => navigate('/role')}>Join Now</button>
      </section>
    </div>
  );
};

export default FrontPage;
