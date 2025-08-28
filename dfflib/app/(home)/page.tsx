import Link from "next/link";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 text-sm text-gray-700 dark:text-gray-300">
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="mb-2 font-semibold">SEPF</div>
            <p className="max-w-md leading-relaxed">FFLIB redefined and rebranded as the Salesforce Enterprise Patterns Framework.</p>
          </div>
          <div className="md:text-right space-y-2">
            <a href="#repo" className="hover:opacity-80 block">Repository</a>
            <a href="#training" className="hover:opacity-80 block">Training (Deloitte)</a>
            <a href="#maturity" className="hover:opacity-80 block">Maturity Assessment</a>
          </div>
        </div>
        <div className="mt-8 text-xs text-gray-500">© {new Date().getFullYear()} SEPF.</div>
      </Container>
    </footer>
  );
}

export default function Home() {
  return (
    <main id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900 text-neutral-900 dark:text-neutral-100">
      {/* ambient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/30 blur-3xl animate-pulse [animation-duration:4s]" />
        <div className="absolute top-40 -left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl animate-pulse [animation-duration:6s]" />
        <div className="absolute -bottom-32 right-10 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl animate-pulse [animation-duration:5s]" />
      </div>

      {/* HERO / HOME */}
      <section id="differentiators" className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_500px_at_50%_-10%,rgba(16,185,129,0.18),transparent_60%)] dark:bg-[radial-gradient(1200px_500px_at_50%_-10%,rgba(16,185,129,0.22),transparent_60%)]" />
        <Container>
          <div className="flex flex-col items-center gap-6 py-16 md:py-24 text-center">
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-balance">
              Enterprise-grade patterns for <span className="bg-gradient-to-r from-emerald-600 via-cyan-500 to-fuchsia-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-shine">Salesforce</span>
            </h1>
            <p className="max-w-3xl text-lg text-gray-700/90 dark:text-gray-300/95">
              FFLIB redefined: a clean, opinionated framework for scalable, testable, and high‑performance Salesforce apps — with modern DX and clear adoption paths.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              <a href="#repo" className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600 to-cyan-600 px-6 py-3 font-semibold text-white shadow-lg">
                <span className="relative z-10">Open Repository</span>
                <span className="absolute inset-[1px] rounded-2xl ring-1 ring-inset ring-white/20" />
              </a>
              <a href="#install" className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/10 px-6 py-3 font-semibold backdrop-blur hover:shadow-md">Install Guides</a>
              <a href="#releases" className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/10 px-6 py-3 font-semibold backdrop-blur hover:shadow-md">Release Notes</a>
            </div>

            {/* 5 differentiators */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 w-full">
              {[
                {t:"Performance", d:"Centralized selectors & DatabaseContext reduce describe/FLS calls and duplicate work."},
                {t:"Testability", d:"Clear boundaries (Selectors, Services, UoW, Triggers) with fast, reliable unit tests."},
                {t:"Consistency", d:"Convention‑over‑configuration naming, foldering, and responsibilities."},
                {t:"Extensibility", d:"Metadata‑driven rules and reusable methods per context (UI, Apex, Integration)."},
                {t:"Adoption Path", d:"Step‑by‑step levels: from FFLIB basics to full SEPF maturity with training."},
              ].map((f)=> (
                <div key={f.t} className="group relative rounded-2xl border border-white/20 bg-white/70 dark:bg-white/5 p-5 shadow-sm backdrop-blur transition hover:shadow-md">
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-emerald-400/0 via-emerald-400/10 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition" />
                  <div className="relative">
                    <div className="mb-2 font-semibold">{f.t}</div>
                    <p className="text-sm text-gray-700/90 dark:text-gray-300/95">{f.d}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Deloitte support */}
            <div className="mt-6 rounded-2xl border border-emerald-300/40 dark:border-emerald-400/20 bg-emerald-50/60 dark:bg-emerald-500/10 p-5 text-sm text-emerald-900 dark:text-emerald-200 w-full">
              <div className="font-semibold">Deloitte is happy to support</div>
              <p className="mt-1">Training, maturity assessments, and guided adoption to move teams from FFLIB familiarity to full SEPF proficiency.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* WHY */}
      <section id="why" className="py-16 md:py-24 border-t border-white/10">
        <Container>
          <h2 className="text-3xl font-bold text-center">Why SEPF</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <div className="text-xl font-semibold mb-2">Business</div>
              <ul className="space-y-2 text-sm text-gray-700/90 dark:text-gray-300/95 list-disc pl-5">
                <li>Predictable delivery through consistent patterns and responsibilities.</li>
                <li>Lower total cost of ownership via shared components and fewer regressions.</li>
                <li>Faster onboarding — developers navigate familiar structures across orgs.</li>
              </ul>
            </div>
            <div>
              <div className="text-xl font-semibold mb-2">Technical</div>
              <ul className="space-y-2 text-sm text-gray-700/90 dark:text-gray-300/95 list-disc pl-5">
                <li>DatabaseContext centralizes access, improves performance, and clarifies ownership.</li>
                <li>Selectors replace ad‑hoc SOQL; enable method reuse per context without duplication.</li>
                <li>UoW (Unit of Work) orchestrates DML with fewer triggers and cleaner transactions.</li>
              </ul>
            </div>
          </div>

          {/* Comparison */}
          <div className="mt-10">
            <div className="text-xl font-semibold">Comparison</div>
            <div className="mt-3 grid gap-3 md:grid-cols-3 text-sm">
              <div className="rounded-xl border border-white/20 bg-white/70 dark:bg-white/5 p-4">
                <div className="font-medium">Ad‑hoc Apex</div>
                <ul className="mt-1 list-disc pl-5">
                  <li>Mixed responsibilities</li>
                  <li>Duplicate validation, slow describes</li>
                  <li>Hard to test</li>
                </ul>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/70 dark:bg-white/5 p-4">
                <div className="font-medium">FFLIB (baseline)</div>
                <ul className="mt-1 list-disc pl-5">
                  <li>Service/Selector/UoW patterns</li>
                  <li>Improved testability</li>
                </ul>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/5 p-4 ring-1 ring-emerald-400/30">
                <div className="font-medium">SEPF (redefined)</div>
                <ul className="mt-1 list-disc pl-5">
                  <li>Metadata‑driven conventions</li>
                  <li>DatabaseContext + simplified Selectors</li>
                  <li>Trigger & Unit Test frameworks bundled</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT */}
      <section id="what" className="py-16 md:py-24 border-t border-white/10">
        <Container>
          <h2 className="text-3xl font-bold text-center">What you’ll get</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[ 
              { t: "FFLIB & Enterprise Design Patterns", d: "Grounded in proven patterns: Service, Selector, UoW, Domain/Trigger." },
              { t: "SEPF — origin & highlights", d: "A pragmatic evolution of FFLIB with performance and maintainability front and center." },
              { t: "Metadata driven", d: "Leverage metadata for configuration over code and consistent rules across contexts." },
              { t: "DatabaseContext", d: "Centralized access: performance, selector test classes, clear class responsibility." },
              { t: "Selector usage", d: "Use DatabaseContext; avoid enforceFLS overhead, reduce duplicates, enable method reuse per UI/API/batch." },
              { t: "UoW usage", d: "Transactional orchestration for DML with fewer triggers and cleaner commits." },
              { t: "Selector simplification", d: "Small, purposeful methods; no cross‑cutting validation inside selectors." },
              { t: "Trigger Framework", d: "Deterministic order, bulk‑safe, minimal branching; per‑object handlers." },
              { t: "Unit Test Framework", d: "Factories, selector stubs, context fixtures for fast, focused tests." },
            ].map((card) => (
              <div key={card.t} className="group relative rounded-2xl border border-white/20 bg-white/70 dark:bg-white/5 p-6 shadow-sm backdrop-blur transition hover:shadow-md">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-emerald-400/0 via-emerald-400/10 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition" />
                <div className="relative">
                  <div className="font-semibold">{card.t}</div>
                  <p className="mt-1 text-sm text-gray-700/90 dark:text-gray-300/95">{card.d}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* HOW */}
      <section id="how" className="py-16 md:py-24 border-t border-white/10">
        <Container>
          <h2 className="text-3xl font-bold text-center">How to adopt SEPF</h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <a id="repo" href="#" className="group relative rounded-2xl border border-white/20 bg-white/70 dark:bg-white/5 p-6 shadow-sm backdrop-blur transition hover:shadow-md">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-emerald-400/0 via-emerald-400/10 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition" />
              <div className="relative">
                <div className="font-semibold">Base page & repo</div>
                <p className="mt-1 text-sm text-gray-700/90 dark:text-gray-300/95">Install guides and release notes. (Link repo here)</p>
              </div>
            </a>
            <a id="training" href="#" className="group relative rounded-2xl border border-white/20 bg-white/70 dark:bg-white/5 p-6 shadow-sm backdrop-blur transition hover:shadow-md">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-emerald-400/0 via-emerald-400/10 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition" />
              <div className="relative">
                <div className="font-semibold">Training (Deloitte)</div>
                <p className="mt-1 text-sm text-gray-700/90 dark:text-gray-300/95">Role‑based paths and team enablement tailored to your org.</p>
              </div>
            </a>
            <a id="maturity" href="#" className="group relative rounded-2xl border border-white/20 bg-white/70 dark:bg-white/5 p-6 shadow-sm backdrop-blur transition hover:shadow-md">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-emerald-400/0 via-emerald-400/10 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition" />
              <div className="relative">
                <div className="font-semibold">Maturity assessment</div>
                <p className="mt-1 text-sm text-gray-700/90 dark:text-gray-300/95">Gap analysis, naming conventions, adoption levels, and roadmap.</p>
              </div>
            </a>
          </div>

          <div className="mt-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/10 p-6 text-sm">
            <div className="font-semibold">Step‑by‑step support</div>
            <ol className="mt-2 list-decimal pl-5 space-y-1">
              <li>Kickoff & assessment (current patterns, pain points, maturity baseline).</li>
              <li>Naming conventions & foldering (agree templates and generators).</li>
              <li>Adoption levels (pilot → core domain → org‑wide roll‑out).</li>
              <li>Training & pairing (selectors, UoW, DatabaseContext, triggers, tests).</li>
              <li>Review & iterate (performance, duplication, test coverage).</li>
            </ol>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
