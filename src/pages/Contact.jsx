
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setMessage(`Thank you, ${name}! Your form was submitted.`);
  }

  return (
    <main className="mx-auto max-w-xl px-6 py-16">
      <h1 className="mb-6 text-3xl font-bold">Contact Us</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          className="w-full rounded-lg border p-3"
        />

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-5 py-3 text-white"
        >
          Submit
        </button>
      </form>

      {message && <p className="mt-4">{message}</p>}
    </main>
  );
}
