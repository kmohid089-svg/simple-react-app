
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function getUser() {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );

      setUser(response.data);
    } catch {
      setError("User data load nahi hua.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-20 text-center">
      <h1 className="mb-5 text-4xl font-bold text-blue-600">
        My Simple React App!
      </h1>

      <p className="mb-8 text-lg text-gray-600">
        Welcome to our basic React application. Start your journey
        with modern web development using React.
      </p>

      <button
        onClick={getUser}
        disabled={loading}
        className="rounded-full bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
      >
        {loading ? "Loading..." : "Learn React ⚛"}
      </button>

      {error && <p className="mt-4 text-red-600">{error}</p>}

      {user && (
        <div className="mx-auto mt-8 max-w-md rounded-xl bg-white p-6 text-left shadow">
          <h2 className="mb-3 text-xl font-bold">User Information</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>City: {user.address.city}</p>
        </div>
      )}
    </main>
  );
}
