import React, { useState } from "react";

export default function Pricing() {
  const [activeTab, setActiveTab] = useState(0);
  const userPlans = [
    { name: "Free", price: 0 },
    { name: "Pro", price: 499 },
    { name: "Elite", price: 999 },
  ];
  const teamPlans = [
    {
      name: "Starter",
      price: 999,
      users: "5 users",
      features: ["Core features", "Email support"],
    },
    {
      name: "Pro",
      price: 1999,
      users: "10 users",
      features: ["All Starter features", "Priority support", "Analytics"],
    },
    {
      name: "Enterprise",
      price: "Custom",
      users: "Unlimited",
      features: [
        "Everything in Pro",
        "Custom integrations",
        "24/7 phone support",
      ],
    },
  ];
  return (
    <div>
      <h1>Pricing</h1>

      <button onClick={() => setActiveTab(0)}>User</button>
      <button onClick={() => setActiveTab(1)}>Team</button>

      {activeTab === 0 &&
        userPlans.map((plan, index) => (
          <div key={index}>
            {plan.name} - ₹{plan.price}
          </div>
        ))}
      {activeTab === 1 &&
        teamPlans.map((plan, index) => (
          <div key={index}>
            {plan.name} - ₹{plan.price}
          </div>
        ))}
        
    </div>
    
  );
}
