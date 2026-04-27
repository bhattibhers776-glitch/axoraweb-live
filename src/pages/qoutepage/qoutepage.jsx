"use client"; // Agar Next.js use kar rahe hain to top par lazmi likhen

import QuoteHero from "../../component/qoutecomponents/qouteHero";
import QuotingProcess from "../../component/qoutecomponents/QuotingProcess";

function QoutePage() {
  return (
    <main>
      <QuoteHero />
      <QuotingProcess />
    </main>
  );
}

export default QoutePage;