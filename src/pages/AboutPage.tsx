
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Users, Gift, MoveUpRight } from "lucide-react";
import Hero from "@/components/ui-components/Hero";
import FeaturedSection from "@/components/ui-components/FeaturedSection";

const values = [
  {
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: "Compassion",
    description: "We believe in the power of empathy and kindness in helping people through difficult times.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Community",
    description: "We foster connections between those in need and those who want to help, strengthening communities.",
  },
  {
    icon: <Gift className="h-10 w-10 text-primary" />,
    title: "Direct Support",
    description: "We enable direct, tangible assistance that meets immediate needs in times of crisis.",
  },
];

const AboutPage = () => {
  return (
    <>
      <Hero
        title="About MyNeedfully"
        subtitle="Our mission is to connect people in crisis with the community support they need."
        background="light"
      />

      <section className="page-section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in">
              <h2 className="mb-6">Our Story</h2>
              <p className="text-lg mb-6">
                MyNeedfully.com was born from a simple observation: when people face crises like natural disasters, domestic violence, or homelessness, they often need specific items to rebuild their lives – but it's hard for friends, family, and community members to know exactly what to provide.
              </p>
              <p className="text-lg mb-6">
                We created a platform that makes it easy for individuals in need to create wishlists of essential items, and for others to directly fulfill these needs. By connecting people in crisis with those who want to help, we enable communities to provide targeted, meaningful support.
              </p>
              <p className="text-lg mb-6">
                Our vision is a world where no one faces crisis alone, where communities respond effectively to individuals' needs, and where the path to recovery is made smoother through direct, tangible support.
              </p>
              <Button asChild className="mt-2">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
            
            <div className="bg-secondary rounded-2xl p-8 shadow-subtle animate-scale-in">
              <h3 className="text-2xl font-medium mb-6">Our Mission</h3>
              <p className="text-lg mb-6">
                MyNeedfully.com helps individuals and families in crisis receive the support they need from their community.
              </p>
              <ul className="space-y-4">
                <li className="flex">
                  <MoveUpRight className="h-6 w-6 text-primary shrink-0 mr-3 mt-1" />
                  <p>We create a bridge between people in need and those with resources to share.</p>
                </li>
                <li className="flex">
                  <MoveUpRight className="h-6 w-6 text-primary shrink-0 mr-3 mt-1" />
                  <p>We facilitate direct, meaningful assistance that addresses specific needs.</p>
                </li>
                <li className="flex">
                  <MoveUpRight className="h-6 w-6 text-primary shrink-0 mr-3 mt-1" />
                  <p>We empower communities to respond effectively in times of crisis.</p>
                </li>
                <li className="flex">
                  <MoveUpRight className="h-6 w-6 text-primary shrink-0 mr-3 mt-1" />
                  <p>We believe in the collective power of small acts of kindness.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FeaturedSection title="Our Values" centered background="secondary">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 text-center border border-border transition-all duration-300 hover:shadow-hover"
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-medium mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </FeaturedSection>

      <section className="page-section bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="mb-6 animate-slide-in">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-slide-in animation-delay-100">
            Whether you're in need or want to help someone else, MyNeedfully makes it easy to create and share wishlists for essential items.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in animation-delay-200">
            <Button asChild size="lg" variant="secondary">
              <Link to="/create-wishlist">Create a Wishlist</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/resources">Find Resources</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
