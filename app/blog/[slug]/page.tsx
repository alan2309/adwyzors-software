import { blogPosts } from "@/lib/constants";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ChevronRight } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Adwyzors Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // High-quality text content for each blog post slug
  const getContent = (slug: string) => {
    switch (slug) {
      case "why-off-the-shelf-erp-fails-sme":
        return (
          <>
            <p>
              Every week, we meet with founders of SMEs who tell us the same story: 
              <em> &ldquo;We spent months (and a lot of money) implementing an ERP, and now nobody uses it.&rdquo;</em>
            </p>
            <p>
              Off-the-shelf Enterprise Resource Planning (ERP) systems from large legacy vendors are built for a specific type of company. They assume your departments are fully siloed, your administrators are highly certified, and most importantly, they assume you have standard, rigid business processes.
            </p>
            <h2>The "Fit" Problem</h2>
            <p>
              In Indian SMEs, flexibility is the ultimate competitive advantage. You might change pricing on the fly for a loyal customer, source materials from five different suppliers with different credit terms, or adjust production schedules mid-shift to accommodate an urgent export order.
            </p>
            <p>
              A rigid legacy ERP doesn't allow this. It requires 12 steps, 3 approvals, and a supervisor override to edit an active order. What happens? Your team gets frustrated, goes back to writing notes in registers or coordinating on WhatsApp, and the expensive software becomes "shelfware".
            </p>
            <blockquote>
              "Legay software forces your business to adapt to its workflow. But software should adapt to your business, not the other way around."
            </blockquote>
            <h2>What to do instead</h2>
            <ul>
              <li><strong>Map first, code last:</strong> Before selecting or building any software, document your actual workflows on the factory floor or warehouse dock.</li>
              <li><strong>Start small:</strong> Don't try to digitize everything at once. Pick your biggest bottleneck (usually inventory or billing) and resolve that first.</li>
              <li><strong>Prioritize adoption:</strong> If the person on the warehouse floor cannot use the mobile app with one hand while carrying a bundle, they won't use it. Adoptability is the real ROI.</li>
            </ul>
          </>
        );
      case "registers-to-realtime":
        return (
          <>
            <p>
              Moving a business off paper registers and Excel sheets is not a technology challenge. It is a human and process challenge.
            </p>
            <p>
              When operations run on paper, they are incredibly flexible. An operator can scribble an update in the margin, skip a step, or reconcile inventory discrepancies at the end of the week. Software, by default, is literal and unforgiving.
            </p>
            <h2>The First-Time Digitization Playbook</h2>
            <p>
              If your business is currently running on registers and you want to move to real-time software, follow this phased approach:
            </p>
            <h3>1. The Process Audit</h3>
            <p>
              Identify every paper register currently in use. Who writes in it? Why? What decisions are made based on that data? You will often find that 30% of the registers are redundant and can be eliminated entirely before digitizing.
            </p>
            <h3>2. Build for the Operator</h3>
            <p>
              The user interface must be designed for speed. If it takes an operator longer to type an entry into a system than to scribble it in a notebook, the digitization project will fail. Use simple buttons, barcode scans, and drop-downs.
            </p>
            <h3>3. Hypercare Phase</h3>
            <p>
              When you go live, don't disappear. Spend the first two weeks on the floor with your operators. Help them resolve issues in real-time, explain the "why" behind the software, and adapt the UI dynamically based on their live feedback.
            </p>
          </>
        );
      case "inventory-accuracy-99":
        return (
          <>
            <p>
              Most distributors and manufacturers we meet start with an inventory accuracy of around 80% to 85%. This means that for every 10 items the system claims are in stock, 2 are either missing, damaged, or stored in the wrong warehouse.
            </p>
            <p>
              This inaccuracy results in stockouts, delayed dispatches, double-ordering, and wasted warehouse space.
            </p>
            <h2>The 90-Day Blueprint to 99.6% Accuracy</h2>
            <ol>
              <li><strong>Implement Bin Locations:</strong> Every product must have a address. If an item is just "in the warehouse", it is lost. Subdivide your warehouse into zones, aisles, racks, and bins, and label them clearly.</li>
              <li><strong>Enforce Directed Putaway:</strong> When stock arrives at the receiving dock, the system must dictate exactly where it goes based on size and velocity. Pickers should never guess where to put inventory.</li>
              <li><strong>Barcode Scan Every Movement:</strong> Every pick, pack, putaway, and stock transfer must be scanned. No exceptions. If it isn't scanned, it didn't happen.</li>
              <li><strong>Daily Cycle Counting:</strong> Stop doing annual inventory audits. Instead, have a team count 50 random SKUs every morning. Reconcile errors immediately to find the root cause of discrepancies.</li>
            </ol>
          </>
        );
      case "garment-piece-rate-payroll":
        return (
          <>
            <p>
              In garment manufacturing, piece-rate payroll is the standard. Operators are paid based on the exact number of operations (stitching a collar, attaching a sleeve) they perform.
            </p>
            <p>
              However, tracking this manually via coupon books, paper tokens, or supervisors' registers is a logistical nightmare.
            </p>
            <h2>The Costs of Manual Piece-Rate Systems</h2>
            <p>
              We audited 12 garment factories and found that the average factory spends 8 working days per month purely reconciling payroll. The issues are always the same:
            </p>
            <ul>
              <li><strong>Double Claiming:</strong> Two operators claim they stitched the same sleeve bundle. Without tracking, the factory pays both.</li>
              <li><strong>Rate Discrepancies:</strong> Rates for styles change frequently. Reconciling changing style rates with historical production is error-prone.</li>
              <li><strong>Delayed Payouts:</strong> Reconciliations take so long that operator payouts are delayed, leading to high labor turnover.</li>
            </ul>
            <h2>The Digital Bundle Solution</h2>
            <p>
              By attaching a unique QR/barcode bundle tag to each cut part, operators scan the bundle using mobile terminals at the stitching line. The system automatically associates the operation, the operator, and the piece-rate wage in real-time. Reconciliations are automated, double-claims are blocked instantly, and payroll is calculated in hours instead of days.
            </p>
          </>
        );
      case "wholesale-credit-control":
        return (
          <>
            <p>
              In wholesale distribution, cash flow is king. Yet, many distributors struggle with overdue receivables because they apply "soft" credit control.
            </p>
            <p>
              Soft credit control means salesmen are warned of credit limits, but orders are still booked, dispatched, and delivered anyway. The salesman is focused on volume, not collection.
            </p>
            <h2>Hard vs Soft Credit Control</h2>
            <p>
              We analyzed receivables across 18 wholesale distributors. The results showed that distributors enforcing soft controls had an average of 42 days of sales outstanding (DSO) and over ₹2.4 Cr in overdue receivables.
            </p>
            <p>
              Distributors who implemented "hard" credit controls (where the system automatically blocks order booking or warehouse dispatch if a customer exceeds their limit or has invoices overdue by more than 30 days) cut their DSO to under 14 days within two months.
            </p>
            <blockquote>
              "Hard credit control isn't about saying no to sales — it's about shifting the salesman's focus from volume to collections. The system enforces the rule, eliminating personal friction."
            </blockquote>
            <h2>Key Implementation Best Practices</h2>
            <ul>
              <li><strong>Dynamic Overrides:</strong> Allow the management team to override credit blocks instantly via a secure mobile notification.</li>
              <li><strong>Automatic Reminders:</strong> Have the system send automated WhatsApp payment reminders and statements of accounts to clients 3 days before their invoice is due.</li>
            </ul>
          </>
        );
      case "warehouse-slotting":
        return (
          <>
            <p>
              Warehouse slotting refers to where you place items within your warehouse layout. Most WMS implementations recommend "velocity-based slotting" — placing high-rotation items near the dispatch dock and slow-rotation items in the back.
            </p>
            <p>
              While this is a step up from random layout, it misses a massive source of efficiency: affinity.
            </p>
            <h2>The Case for Affinity Slotting</h2>
            <p>
              Affinity slotting analyzes invoice history to group items that are frequently purchased together.
            </p>
            <p>
              For example, if clients who buy item A also buy item B 85% of the time, placing item A at the front of aisle 1 and item B at the back of aisle 5 forces your pickers to walk the entire warehouse length for a single order. Placing them in adjacent bins saves kilometers of walking distance.
            </p>
            <p>
              By implementing affinity-based slotting in a regional 3PL warehouse, picker walk distances were reduced from an average of 11 km to 4.2 km per shift, doubling pick rates without adding extra staff.
            </p>
          </>
        );
      default:
        return <p>Article content coming soon.</p>;
    }
  };

  return (
    <Section narrow className="pt-32 pb-22">
      <div className="mb-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to blog
        </Link>
      </div>

      <article className="prose prose-custom max-w-none">
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted uppercase tracking-wider mb-6">
          <span className="px-2.5 py-1 rounded-full bg-accent/10 text-accent font-semibold">
            {post.category}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime} read
          </span>
        </div>

        <h1 className="font-display text-display-lg font-bold leading-[1.05] tracking-tight mb-8 text-ink">
          {post.title}
        </h1>

        <div className="text-lg text-muted/90 font-medium leading-relaxed border-l-2 border-accent pl-5 mb-10 italic">
          {post.excerpt}
        </div>

        <div className="mt-10 space-y-6 text-ink/80 leading-relaxed text-base md:text-lg border-t border-line pt-10 prose-headings:font-display prose-headings:font-semibold prose-headings:text-ink prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-blockquote:border-l-4 prose-blockquote:border-ink/20 prose-blockquote:pl-5 prose-blockquote:italic prose-blockquote:text-ink/70 prose-blockquote:my-8 prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2 prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2">
          {getContent(post.slug)}
        </div>
      </article>

      {/* CTA Box */}
      <div className="mt-20 p-8 md:p-12 rounded-3xl bg-ink text-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
        <div className="relative max-w-xl">
          <h3 className="font-display text-2xl font-bold mb-3">Want custom software built for your business?</h3>
          <p className="text-bg/60 text-sm leading-relaxed mb-6">
            We don't sell ready-made packages. We design and build systems around how your team actually operates on the floor.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/contact" className="bg-bg text-ink hover:bg-bg/90" arrow>
              Book discovery call
            </Button>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-bg/80 hover:text-bg transition-colors px-5"
            >
              Our solutions
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
