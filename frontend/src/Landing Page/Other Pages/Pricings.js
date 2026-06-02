import React, { useState } from 'react';

const PricingSection = () => 
    {
  const [isYearly, setIsYearly] = useState(false);

  const sectionStyle = 
  {
    padding: "80px 20px",
    background: "linear-gradient(to bottom, #F2B1B5 0%, #571397 100%)",
    color: "white",
    width: "100%",
  };

  const containerStyle = 
  {
    maxWidth: "1200px",
    margin: "0 auto"
  };

  const headerStyle = 
  {
    textAlign: "center",
    marginBottom: "50px"
  };

  const titleStyle = 
  {
    fontSize: "2.5rem",
    marginBottom: "20px",
    textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
  };

  const subtitleStyle = 
  {
    fontSize: "1.2rem",
    maxWidth: "700px",
    margin: "0 auto",
    opacity: "0.9"
  };

  const toggleContainerStyle = 
  {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "40px",
    gap: "15px"
  };

  const toggleStyle = 
  {
    position: "relative",
    display: "inline-block",
    width: "60px",
    height: "30px"
  };

  const toggleInputStyle = 
  {
    opacity: "0",
    width: "0",
    height: "0"
  };

  const toggleSliderStyle = 
  {
    position: "absolute",
    cursor: "pointer",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: "34px",
    transition: "0.4s"
  };

  const sliderBeforeStyle = 
  {
    position: "absolute",
    content: '""',
    height: "22px",
    width: "22px",
    left: isYearly ? "32px" : "4px",
    bottom: "4px",
    backgroundColor: "white",
    borderRadius: "50%",
    transition: "0.4s"
  };

  const toggleTextStyle = 
  {
    fontSize: "1rem",
    fontWeight: isYearly ? "normal" : "bold"
  };

  const toggleTextYearlyStyle = 
  {
    fontSize: "1rem",
    fontWeight: isYearly ? "bold" : "normal"
  };

  const cardsContainerStyle = 
  {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
    marginBottom: "50px"
  };

  const oneTimeStyle = 
  {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: "25px",
    borderRadius: "10px",
    marginBottom: "40px",
    textAlign: "center",
    maxWidth: "600px",
    margin: "0 auto 40px auto"
  };

  const oneTimeIconStyle = 
  {
    fontSize: "1.5rem",
    marginRight: "10px",
    color: "#add8e6"
  };

  const oneTimeTitleStyle = 
  {
    fontSize: "1.4rem",
    marginBottom: "15px"
  };

  const oneTimePriceStyle = 
  {
    fontSize: "1.8rem",
    fontWeight: "bold",
    marginBottom: "15px"
  };

  const oneTimeButtonStyle = 
  {
    backgroundColor: "#add8e6",
    color: "#333",
    border: "none",
    padding: "10px 25px",
    borderRadius: "50px",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginTop: "10px"
  };

  const trustElementsStyle = 
  {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "30px",
    marginTop: "50px"
  };

  const trustItemStyle = 
  {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: "15px 20px",
    borderRadius: "8px"
  };

  const trustIconStyle = 
  {
    fontSize: "1.3rem"
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>Pricing Plans</h2>
          <p style={subtitleStyle}>
            Choose the perfect plan to accelerate your career journey with Resume Coach
          </p>
        </div>

        <div style={toggleContainerStyle}>
          <span style={toggleTextStyle}>Monthly</span>
          <label style={toggleStyle}>
            <input 
              type="checkbox" 
              style={toggleInputStyle}
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
            />
            <span style={toggleSliderStyle}>
              <span style={sliderBeforeStyle}></span>
            </span>
          </label>
          <span style={toggleTextYearlyStyle}>Yearly <b>(20% off)</b></span>
        </div>

        <div style={cardsContainerStyle}>
          <PricingCard
            title="Free Plan"
            price={0}
            isYearly={isYearly}
            features={[
              "Basic CV Analysis",
              "Limited Job Suggestions",
              "General Course Recommendations"
            ]}
            buttonText="Get Started"
            buttonColor="#4CAF50" // green
            isHighlighted={false}
          />

          <PricingCard
            title="Pro Plan"
            price={9.99}
            isYearly={isYearly}
            features={[
              "Advanced CV Analysis with ATS Optimization",
              "Unlimited Job & Course Recommendations",
              "Resume-Job Matching Score",
              "Detailed Skill Gap Analysis"
            ]}
            buttonText="Upgrade Now"
            buttonColor="#2196F3" // blue
            isHighlighted={true}
            trialText="Try Pro Free for 7 Days"
          />

          <PricingCard
            title="Premium Plan"
            price={19.99}
            isYearly={isYearly}
            features={[
              "All Pro Features + AI Resume Rewrite",
              "Priority Job Alerts",
              "Personalized Career Consultation",
              "Exclusive Industry Reports"
            ]}
            buttonText="Go Premium"
            buttonColor="#FFD700" // gold
            isHighlighted={false}
          />
        </div>

        <div style={oneTimeStyle}>
          <h3 style={oneTimeTitleStyle}>
            <span style={oneTimeIconStyle}>🔹</span>
            One-time Resume Review
          </h3>
          <p>Get a detailed resume review for those who don't want a monthly plan.</p>
          <div style={oneTimePriceStyle}>£4.99</div>
          <button style={oneTimeButtonStyle}>Purchase Now</button>
        </div>

        <div style={trustElementsStyle}>
          <div style={trustItemStyle}>
            <span style={trustIconStyle}>✅</span>
            <span>Money-Back Guarantee – Cancel anytime within 7 days for a full refund.</span>
          </div>
          <div style={trustItemStyle}>
            <span style={trustIconStyle}>✅</span>
            <span>90% of users land a job within 3 months!</span>
          </div>
          <div style={trustItemStyle}>
            <span style={trustIconStyle}>✅</span>
            <span>Secure Payment via Stripe & PayPal.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ title, price, isYearly, features, buttonText, buttonColor, isHighlighted, trialText }) => 
{
  const yearlyPrice = (price * 0.8).toFixed(2);
  const displayPrice = isYearly ? yearlyPrice : price;

  const cardStyle = 
  {
    backgroundColor: isHighlighted ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)",
    borderRadius: "12px",
    padding: "40px 30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    boxShadow: isHighlighted ? "0 10px 30px rgba(0,0,0,0.2)" : "0 5px 15px rgba(0,0,0,0.1)",
    transform: isHighlighted ? "scale(1.05)" : "scale(1)",
    transition: "all 0.3s ease",
    position: "relative",
    overflow: "hidden"
  };

  const popularBadgeStyle = 
  {
    position: "absolute",
    top: "20px",
    right: "-35px",
    backgroundColor: buttonColor,
    transform: "rotate(45deg)",
    padding: "8px 40px",
    fontSize: "0.8rem",
    fontWeight: "bold",
    display: isHighlighted ? "block" : "none"
  };

  const titleStyle = 
  {
    fontSize: "1.8rem",
    fontWeight: "bold",
    marginBottom: "20px"
  };

  const priceContainerStyle = 
  {
    marginBottom: "30px"
  };

  const priceStyle = 
  {
    fontSize: "3rem",
    fontWeight: "bold",
    lineHeight: "1"
  };

  const periodStyle = 
  {
    fontSize: "1rem",
    opacity: "0.8"
  };

  const featureListStyle = 
  {
    listStyle: "none",
    padding: "0",
    margin: "0 0 30px 0",
    width: "100%"
  };

  const featureItemStyle = 
  {
    padding: "12px 0",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    textAlign: "left"
  };

  const checkmarkStyle = 
  {
    color: "#4CAF50",
    fontSize: "1.1rem",
    marginTop: "2px"
  };

  const buttonStyle = 
  {
    backgroundColor: buttonColor,
    color: "#000",
    border: "none",
    borderRadius: "50px",
    padding: "12px 30px",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginTop: "auto",
    width: "100%"
  };

  const trialTextStyle = 
  {
    marginTop: "15px",
    fontSize: "0.9rem",
    opacity: "0.9"
  };

  return (
    <div style={cardStyle}>
      {isHighlighted && <div style={popularBadgeStyle}>BEST VALUE</div>}
      <h3 style={titleStyle}>{title}</h3>
      <div style={priceContainerStyle}>
        <div style={priceStyle}>
          £{displayPrice === 0 ? "0" : displayPrice}
        </div>
        <div style={periodStyle}>
          {displayPrice === 0 ? "" : `/${isYearly ? "year" : "mo"}`}
        </div>
      </div>
      <ul style={featureListStyle}>
        {features.map((feature, index) => (
          <li key={index} style={featureItemStyle}>
            <span style={checkmarkStyle}>✅</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button style={buttonStyle}>{buttonText}</button>
      {trialText && <div style={trialTextStyle}>{trialText}</div>}
    </div>
  );
};

export default PricingSection;