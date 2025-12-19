"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroOverlayBottomSplit from '@/components/sections/hero/HeroOverlayBottomSplit';
import MediaSplitAbout from '@/components/sections/about/MediaSplitAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import ContactText from '@/components/sections/contact/ContactText';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="small"
      sizing="mediumSizeExtraLargeTitles"
      background="dotGrid"
      cardStyle="spotlight"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="glass"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "home" },
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Reserve", id: "contact" },
            { name: "Contact", id: "footer" }
          ]}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766139811510-n9knt0v0.jpg"
          logoAlt="Nyam Dnyam Restaurant"
          brandName="Nyam Dnyam"
          bottomLeftText="Fine Dining Experience"
          bottomRightText="hello@nyamdnyam.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlayBottomSplit
          title="Culinary Excellence Awaits"
          description="Experience exquisite cuisine crafted with passion and precision. Reserve your table for an unforgettable dining journey at Nyam Dnyam."
          imageSrc=""
          imageAlt="Elegant restaurant dining room"
          showDimOverlay={true}
          buttons={[
            { text: "Reserve Table", href: "contact" },
            { text: "View Menu", href: "menu" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <MediaSplitAbout
          title="Our Story"
          description="At Nyam Dnyam, we believe exceptional food is more than just flavors on a plate. It's a celebration of tradition, innovation, and passion. Our chef-driven kitchen sources the finest ingredients to create dishes that tell a story. Every meal is crafted with meticulous attention to detail, ensuring every guest experiences culinary artistry."
          imageSrc=""
          imageAlt="Chef preparing signature dish"
          imagePosition="right"
          useInvertedBackground="noInvert"
          buttons={[
            { text: "Explore Menu", href: "menu" }
          ]}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardThree
          title="Signature Dishes"
          description="Discover our most beloved creations"
          products={[
            {
              id: "1",
              name: "Handmade Pappardelle",
              price: "$32",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140582188-yc2eq6jt.jpg",
              imageAlt: "Handmade pappardelle pasta with wild boar ragù"
            },
            {
              id: "2",
              name: "Prime Rib Eye Steak",
              price: "$48",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140582188-yc2eq6jt.jpg",
              imageAlt: "Grilled prime rib eye with seasonal vegetables"
            },
            {
              id: "3",
              name: "Pan-Seared Branzino",
              price: "$42",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140582188-yc2eq6jt.jpg",
              imageAlt: "Pan-seared branzino with lemon and herbs"
            },
            {
              id: "4",
              name: "Chocolate Truffle Cake",
              price: "$14",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140578361-gg270zk8.jpg",
              imageAlt: "Rich chocolate truffle cake with gold leaf"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
          gridVariant="two-columns-alternating-heights"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766137145255-i5mln4iu.jpg"
            },
            {
              id: "2",
              name: "James Richardson",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766137145255-i5mln4iu.jpg"
            },
            {
              id: "3",
              name: "Emma Johnson",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766137145255-i5mln4iu.jpg"
            },
            {
              id: "4",
              name: "Michael Chen",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766137145255-i5mln4iu.jpg"
            }
          ]}
          cardTitle="Over 500 guests trust us for their most special moments"
          cardTag="Highly Rated Experience"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to reserve your table? Contact us today to book your culinary experience."
          animationType="reveal-blur"
          useInvertedBackground="noInvert"
          buttons={[
            { text: "Make Reservation", href: "mailto:reservations@nyamdnyam.com" },
            { text: "Call Us", href: "tel:+1-555-0123" }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Nyam Dnyam"
          copyrightText="© 2025 Nyam Dnyam Restaurant. All rights reserved."
          columns={[
            {
              title: "Hours",
              items: [
                { label: "Lunch: 12pm - 3pm" },
                { label: "Dinner: 6pm - 11pm" },
                { label: "Closed Mondays" }
              ]
            },
            {
              title: "Location",
              items: [
                { label: "123 Culinary Lane", href: "#" },
                { label: "Fine Dining District" },
                { label: "Phone: (555) 0123" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Reserve Table", href: "contact" },
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Email", href: "mailto:hello@nyamdnyam.com" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}