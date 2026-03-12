import type { Metadata } from "next";
import PreviewClient from "./PreviewClient";

const SITE_URL = "https://og-preview-ochre.vercel.app";

type Props = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams;

  const name = params.name || "Amritansh Rai";
  const handle = params.handle || "@amritanshr";
  const pnl = params.pnl || "+₹2.45L";
  const winRate = params.winRate || "68.3%";
  const trades = params.trades || "1,204";

  // OG image URL carries data params — t is NOT passed here (image content is what matters)
  const ogImageParams = new URLSearchParams({ name, handle, pnl, winRate, trades });
  const ogImageUrl = `${SITE_URL}/api/og?${ogImageParams.toString()}`;

  const title = `${name}'s Verified P&L`;
  const description = `${name} made ${pnl} — verified on 915 by Groww. Real, broker-verified performance.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: SITE_URL,
      siteName: "915 by Groww",
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: title }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
      site: "@915_trade",
    },
    robots: "index,follow,max-image-preview:large",
  };
}

export default function Page() {
  return <PreviewClient />;
}
