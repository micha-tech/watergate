import { faqs } from "@/lib/content";

export function FAQAccordion() {
  return (
    <div className="mx-auto grid max-w-4xl gap-3">
      {faqs.map((faq) => (
        <details key={faq.question} className="group rounded-md border border-slate-200 bg-white p-5 shadow-sm">
          <summary className="cursor-pointer list-none text-base font-bold text-charcoal">
            {faq.question}
          </summary>
          <p className="mt-3 text-sm leading-7 text-mutedText">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
