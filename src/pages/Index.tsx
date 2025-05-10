
import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import AIFeatures from "@/components/sections/AIFeatures";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <AIFeatures />
      <FeaturedProducts limit={8} />
      <Testimonials />
      <CTA />
    </Layout>
  );
};

export default Index;
