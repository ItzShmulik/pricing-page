import "./App.css";
import DataBox from "./Components/DataBox";

function App() {
  return (
    <>
      <div className="top">
        <h1>Plans & Pricing</h1>
        <h3>Monthly</h3>
        <button></button>
        <h3>Yearly</h3>
      </div>
      <div className="plans">
        {plansData.map((item, i) => (
          <DataBox
            title={item.title}
            price={item.price}
            description={item.description}
            perks={item.perks}
            key={i}
          />
        ))}
      </div>
    </>
  );
}
const plansData = [
  {
    title: "Starter",
    price: "24",
    description: "Ideal for freelancers and contractors just starting out.",
    perks: (
      <ul>
        <li className="perk">All Templates</li>
        <li className="perk">Unlimited Clients & Projects</li>
        <li className="perk">Invoicing & Payments</li>
        <li className="perk">Proposals & Contracts</li>
        <li className="perk">Tasks & Time Tracking</li>
        <li className="perk">Client CRM</li>
        <li className="perk">Expense Tracking</li>
        <li className="perk">Up to 5 Project Collaborators</li>
      </ul>
    ),
  },
  {
    title: "Professional",
    price: "39",
    description: "Everything a growing independent business needs to thrive.",
    perks: (
      <ul>
        <li className="perk">Everything in Starter plus...</li>
        <li className="perk">Custom Branding</li>
        <li className="perk">Forms & Questionnaires</li>
        <li className="perk">Workflow Automations</li>
        <li className="perk">Client Portal</li>
        <li className="perk">QuickBooks Integration</li>
        <li className="perk">Calendly Integration</li>
        <li className="perk">Zapier Integration</li>
        <li className="perk">Up to 15 Project Collaborators</li>
      </ul>
    ),
  },
  {
    title: "Business",
    price: "79",
    description: "The perfect package for small businesses and agencies.",
    perks: (
      <ul>
        <li className="perk">Everything in Starter and Professional plus...</li>
        <li className="perk">Subcontractor Management</li>
        <li className="perk">Hiring Agreement Templates (1099 contracts)</li>
        <li className="perk">Subcontractor Onboarding</li>
        <li className="perk">Talent Pool</li>
        <li className="perk">3 Team Seats (additional seats $9/month)</li>
        <li className="perk">Accountant Access</li>
        <li className="perk">Connect Multiple Bank Accounts</li>
        <li className="perk">Unlimited Subcontractors</li>
        <li className="perk">Unlimited Project Collaborators</li>
      </ul>
    ),
  },
];
const accorData = [
  {
    question: "How does the free trial work?",
    answer:
      "When you start your trial you'll receive full, unlimited access to all of the website's Workflow or Workflow Plus Features! You will need to enter your credit card information to begin your trial, but don't worry - we won't charge you anything until the subscription ends! If you wish to cancel at any time during the trial period, you can do so through your Subscriptions Settings Page.",
  },
  {
    question: "Can I change plans anytime?",
    answer:
      "Yes, you can from within your account. If you have already subscribed to a plan, or want to downgrade or upgrade your current one, you can do this by going to your 'Settings' and 'Subscription'.",
  },
  {
    question: "How do I pause my subscription?",
    answer:
      "We totally understand that with the nature of freelancing, work ebbs and flows so you might not always need your subscription to remain active! The good news is that you can cancel or pause your monthly subscription at any time without penalty. Once cancelled, you'll be able to continue logging in to access all your documents and even continue to use our free features, like Time Tracking! In order to cancel your subscription, login to your account.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "If you contact us within 2 weeks of being charged for your subscription, we will be happy to issue a refund for you! Beyond those 2 weeks, you will need to cancel or modify the subscription from the Subscriptions Tab in Settings to avoid future charges, but refunds will not be issued. This applies to both monthly and annual plans.",
  },
];

export default App;
