
export default function Docs() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-6 text-3xl font-bold">React Documentation</h1>

      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold">Components</h2>
          <p>Components UI ko reusable parts mein divide karte hain.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">JSX</h2>
          <p>JSX React mein HTML jaisa syntax likhne deta hai.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Props</h2>
          <p>Props ek component se doosre component ko data dete hain.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">State</h2>
          <p>State component ka changing data manage karti hai.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Axios</h2>
          <p>Axios API requests bhejne aur data receive karne ke liye use hota hai.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Async/Await</h2>
          <p>Async/await asynchronous operations ko handle karne mein madad karta hai.</p>
        </section>
      </div>
    </main>
  );
}
