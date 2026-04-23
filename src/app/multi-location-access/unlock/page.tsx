"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Nav from "@/components/portfolio/Nav";

export default function UnlockPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const res = await fetch("/api/unlock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.replace("/multi-location-access");
    } else {
      setError(true);
      setLoading(false);
    }
  }

  return (
    <>
      <Nav />
      <main className="min-h-[80vh] flex items-center justify-center bg-[var(--color-jz-bg)] px-6">
        <div className="w-full max-w-sm">
          <p className="font-body text-sm uppercase tracking-widest text-[var(--color-jz-text-muted)] mb-3">
            Protected Case Study
          </p>
          <h1 className="font-display text-3xl font-bold text-[var(--color-jz-text)] mb-2 leading-tight">
            Multi-Location Access
          </h1>
          <p className="font-body text-base text-[var(--color-jz-text-secondary)] mb-8">
            This case study is password protected. Enter the password to continue.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="font-body text-base px-4 py-3 border border-[var(--color-jz-border)] bg-[var(--color-jz-surface)] text-[var(--color-jz-text)] placeholder:text-[var(--color-jz-text-muted)] focus:outline-none focus:border-[var(--color-jz-text)] transition-colors"
            />
            {error && (
              <p className="font-body text-sm text-red-500">
                Incorrect password. Try again.
              </p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="font-body text-sm font-semibold px-6 py-3 border border-[var(--color-jz-text)] text-[var(--color-jz-text)] hover:bg-[var(--color-jz-text)] hover:text-[var(--color-jz-bg)] transition-colors duration-200 disabled:opacity-50"
            >
              {loading ? "Checking..." : "Enter →"}
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
