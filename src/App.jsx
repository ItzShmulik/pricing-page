import "./App.css";
import DataBox from "./Components/DataBox";

function App() {
  return (
    <>
      <div>
        <h1>Plans & Pricing</h1>
        <h3>Monthly</h3>
        <button></button>
        <h3>Yearly</h3>
      </div>
      <div>
        <DataBox title="Starter" price="24" />
        <DataBox title="Professioanl" price="39" />
        <DataBox title="Business" price="79" />
      </div>
    </>
  );
}
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
