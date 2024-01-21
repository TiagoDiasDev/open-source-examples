import Image from "next/image";
import LoginForm from "../components/form/LoginForm.js";

export default function Home() {
  return (
    <main className="bg-gray-600">
      <LoginForm />
    </main>
  );
}
