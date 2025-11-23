'use client'

export default function Home() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a href="#" className="logo">🌾 Mithila Makkhana</a>
          <ul className="nav-links">
            <li><a href="#products">Products</a></li>
            <li><a href="#benefits">Benefits</a></li>
            <li><a href="#testimonials">Reviews</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content container">
            <h1>Premium Mithila Makkhana</h1>
            <p className="hero-subtitle">Authentic Fox Nuts from the Heart of Bihar</p>
            <p className="hero-description">
              Experience the finest quality makhana, handpicked from the sacred waters of Mithila.
              Packed with nutrition, perfect for healthy snacking!
            </p>
            <button className="cta-button" onClick={scrollToProducts}>
              Shop Now
            </button>
          </div>
        </section>

        {/* Features */}
        <section className="features">
          <div className="container">
            <h2 className="section-title">Why Choose Mithila Makkhana?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🌿</div>
                <h3>100% Natural</h3>
                <p>Sourced directly from the pristine ponds of Mithila region, completely organic and pesticide-free</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💪</div>
                <h3>Nutrient Rich</h3>
                <p>High in protein, calcium, and antioxidants. Low in calories and perfect for weight management</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔥</div>
                <h3>Expertly Roasted</h3>
                <p>Carefully roasted to perfection for that authentic crispy texture and rich flavor</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">✅</div>
                <h3>Quality Assured</h3>
                <p>Rigorous quality checks and hygienic packaging to ensure freshness in every bite</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="products">
          <div className="container">
            <h2 className="section-title">Our Products</h2>
            <div className="products-grid">
              <div className="product-card">
                <div className="product-image">🥣</div>
                <div className="product-info">
                  <h3>Plain Makhana</h3>
                  <p className="product-weight">500g Pack</p>
                  <p>Pure, unsalted roasted fox nuts. Perfect for fasting or as a healthy snack any time of the day.</p>
                  <div className="product-price">₹299</div>
                  <button className="buy-button">Add to Cart</button>
                </div>
              </div>

              <div className="product-card">
                <div className="product-image">🌶️</div>
                <div className="product-info">
                  <h3>Masala Makhana</h3>
                  <p className="product-weight">500g Pack</p>
                  <p>Deliciously spiced with traditional Indian masala blend. A flavorful twist to your snacking!</p>
                  <div className="product-price">₹349</div>
                  <button className="buy-button">Add to Cart</button>
                </div>
              </div>

              <div className="product-card">
                <div className="product-image">🧂</div>
                <div className="product-info">
                  <h3>Salted Makhana</h3>
                  <p className="product-weight">500g Pack</p>
                  <p>Lightly salted for that perfect balance. Ideal for movie nights and tea-time munching.</p>
                  <div className="product-price">₹319</div>
                  <button className="buy-button">Add to Cart</button>
                </div>
              </div>

              <div className="product-card">
                <div className="product-image">🎁</div>
                <div className="product-info">
                  <h3>Combo Pack</h3>
                  <p className="product-weight">3 x 500g (Variety)</p>
                  <p>Try all three varieties! Plain, Masala, and Salted in one convenient combo pack.</p>
                  <div className="product-price">₹899</div>
                  <button className="buy-button">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits" className="benefits">
          <div className="container">
            <h2 className="section-title">Health Benefits</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">❤️</div>
                <div className="benefit-content">
                  <h3>Heart Healthy</h3>
                  <p>Low in cholesterol and sodium, supports cardiovascular health</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🏃</div>
                <div className="benefit-content">
                  <h3>Weight Management</h3>
                  <p>Low calorie, high fiber snack perfect for weight loss diets</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🦴</div>
                <div className="benefit-content">
                  <h3>Strong Bones</h3>
                  <p>Rich in calcium and phosphorus for bone health</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🧘</div>
                <div className="benefit-content">
                  <h3>Anti-Aging</h3>
                  <p>Packed with antioxidants that fight free radicals</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🩺</div>
                <div className="benefit-content">
                  <h3>Diabetic Friendly</h3>
                  <p>Low glycemic index, helps regulate blood sugar levels</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🌙</div>
                <div className="benefit-content">
                  <h3>Better Sleep</h3>
                  <p>Contains natural compounds that promote restful sleep</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="testimonials">
          <div className="container">
            <h2 className="section-title">What Our Customers Say</h2>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <p className="testimonial-text">
                  The quality of Mithila Makkhana is outstanding! The crunchiness and freshness are unmatched.
                  It's become my go-to snack during fasting days.
                </p>
                <p className="testimonial-author">- Priya Sharma, Delhi</p>
                <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
              </div>
              <div className="testimonial-card">
                <p className="testimonial-text">
                  I've tried many brands, but nothing comes close to the authentic taste of Mithila Makkhana.
                  The masala variant is especially delicious!
                </p>
                <p className="testimonial-author">- Rajesh Kumar, Patna</p>
                <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
              </div>
              <div className="testimonial-card">
                <p className="testimonial-text">
                  Great for my fitness journey! Low calorie, nutritious, and tasty. The combo pack is excellent
                  value for money. Highly recommended!
                </p>
                <p className="testimonial-author">- Anita Verma, Mumbai</p>
                <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2>Ready to Experience the Best?</h2>
            <p>Order now and get FREE shipping on orders above ₹500</p>
            <button className="cta-button-secondary" onClick={scrollToProducts}>
              Order Now
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>About Us</h3>
              <p>
                Mithila Makkhana brings you the finest quality fox nuts directly from the traditional
                farms of Bihar's Mithila region.
              </p>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <p><a href="#products">Products</a></p>
              <p><a href="#benefits">Benefits</a></p>
              <p><a href="#testimonials">Reviews</a></p>
              <p><a href="#contact">Contact</a></p>
            </div>
            <div className="footer-section">
              <h3>Contact Us</h3>
              <p>📧 info@mithilamakkhana.com</p>
              <p>📱 +91 98765 43210</p>
              <p>📍 Darbhanga, Bihar, India</p>
            </div>
            <div className="footer-section">
              <h3>Follow Us</h3>
              <p><a href="#">Facebook</a></p>
              <p><a href="#">Instagram</a></p>
              <p><a href="#">Twitter</a></p>
              <p><a href="#">WhatsApp</a></p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Mithila Makkhana. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
