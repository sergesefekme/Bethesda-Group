import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-navy">
      <div className="container-content text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cognac-light">Error 404</p>
        <h1 className="mt-4 text-display font-extrabold text-offwhite">Page not found</h1>
        <p className="mx-auto mt-5 max-w-md text-warmgray">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/" variant="primary">Back to home →</Button>
          <Button href="/contact" variant="light">Contact us</Button>
        </div>
      </div>
    </section>
  );
}
