import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <div className="font-mono text-sm text-muted mb-6">404</div>
        <h1 className="font-display text-display-lg font-semibold mb-5">
          This page doesn't exist.
        </h1>
        <p className="text-muted text-lg mb-10">
          Maybe it was moved, renamed, or never existed. Let's get you back on track.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button href="/" size="lg" arrow>
            Back to home
          </Button>
          <Button href="/contact" size="lg" variant="secondary">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}