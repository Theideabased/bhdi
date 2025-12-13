import { DefaultSeo } from "next-seo";

export default function GlobalMetaTags() {
  return (
    <DefaultSeo
      defaultTitle="Inclusive Care Foundation - Supporting Children with Special Needs"
      description="Inclusive Care Foundation is a non-profit organization dedicated to improving the lives of children with special needs through inclusive education, therapy, and community support."
      canonical="http://icfc.vercel.app/"
      additionalMetaTags={[
        {
          name: "keywords",
          content:
            "child care NGO, special needs children, disability support, inclusive education, autism awareness, therapy programs, community care, child development, non-profit organization, Inclusive Care Foundation",
        },
        {
          name: "charset",
          content: "utf-8",
        },
      ]}
      additionalLinkTags={[
        {
          rel: "preload",
          href: "/fonts/poppins-regular.woff2",
          as: "font",
          type: "font/woff2",
          crossOrigin: "anonymous",
        },
        {
          rel: "preload",
          href: "/fonts/poppins-semibold.woff2",
          as: "font",
          type: "font/woff2",
          crossOrigin: "anonymous",
        },
        {
          rel: "preload",
          href: "/fonts/roboto-bold.woff2",
          as: "font",
          type: "font/woff2",
          crossOrigin: "anonymous",
        },
        {
          rel: "preload",
          href: "/fonts/roboto-regular.woff2",
          as: "font",
          type: "font/woff2",
          crossOrigin: "anonymous",
        },
      ]}
      openGraph={{
        type: "website",
        url: "http://icfc.vercel.app/",
        title:
          "Inclusive Care Foundation - Supporting Children with Special Needs",
        description:
          "Join Inclusive Care Foundation in creating a world where every child with special needs receives love, care, and access to education, therapy, and empowerment.",
        locale: "en_NG",
        images: [
          {
            url: "http://icfc.vercel.app/hero-img.webp",
            width: 1200,
            height: 630,
            alt: "Inclusive Care Foundation - Child Care with Special Needs",
          },
          {
            url: "http://icfc.vercel.app/hero-img.webp",
            width: 2400,
            height: 1260,
            alt: "Inclusive Care Foundation - Child Care with Special Needs",
          },
        ],
        site_name: "Inclusive Care Foundation",
      }}
    />
  );
}
