import "./App.css";
import ContactForm from "./components/forms/contact";
import FeedbackForm from "./components/forms/feedback";
import LoginForm from "./components/forms/login";
import RegisterForm from "./components/forms/register";

function App() {
  return (
    <main className="w-full min-h-screen bg-black flex flex-wrap 2xl:flex-col">
      <div className="px-16 w-full min-h-screen flex flex-row items-center justify-center">
        <LoginForm />
      </div>
      <div className="px-16 w-full min-h-screen flex flex-row items-center justify-center">
        <RegisterForm />
      </div>
      <div className="px-16 w-full min-h-screen flex flex-row items-center justify-center">
        <FeedbackForm />
      </div>
      <div className="px-16 w-full min-h-screen flex flex-row items-center justify-center">
        <ContactForm />
      </div>
    </main>
  );
}

export default App;
