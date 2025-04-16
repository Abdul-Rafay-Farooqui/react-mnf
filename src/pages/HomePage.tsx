
import { Link } from "react-router-dom";
import { ArrowRight, Gift, Heart, Share2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Hero from "@/components/ui-components/Hero";
import FeaturedSection from "@/components/ui-components/FeaturedSection";

const featuredProducts = [
  {
    id: "food-basket",
    name: "Essential Food Basket",
    description: "A large basket filled with pantry essentials to keep a family fed for a week.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Food",
  },
  {
    id: "winter-jacket",
    name: "Winter Jacket",
    description: "Stay warm with this insulated winter jacket, essential for cold weather.",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Clothing",
  },
  {
    id: "bedding-set",
    name: "Comforter Bedding Set",
    description: "Cozy bedding set with sheets, pillowcases, and a warm comforter.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1629949009765-28a429ff37f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Household",
  },
  {
    id: "gift-card",
    name: "Grocery Gift Card",
    description: "A gift card for purchasing groceries at major supermarkets.",
    price: 50.00,
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Gift Cards",
  },
];

// How it works steps
const howItWorksSteps = [
  {
    icon: <Gift className="w-10 h-10 text-primary mb-4" />,
    title: "Create a Wishlist",
    description: "Build a wishlist of essential items you or someone you know needs during a difficult time.",
  },
  {
    icon: <Share2 className="w-10 h-10 text-primary mb-4" />,
    title: "Share with Community",
    description: "Share your wishlist with friends, family, and the broader community who want to help.",
  },
  {
    icon: <Heart className="w-10 h-10 text-primary mb-4" />,
    title: "Receive Support",
    description: "Items purchased from your wishlist are sent directly to you or your loved ones in need.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary mb-4" />,
    title: "Track Fulfillment",
    description: "Easily track which items have been fulfilled and those still needed.",
  },
];

const HomePage = () => {
  return (
    <>
      <Hero
        title="Helping People in Need, One Wish List at a Time"
        subtitle="Create and share a wish list to help yourself or loved ones rebuild, start fresh, or get support during tough times."
        background="gradient"
        size="large"
      >
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button asChild size="lg">
            <Link to="/create-wishlist">Create Your Wish List</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </Hero>

      <FeaturedSection
        title="Featured Essential Items"
        subtitle="These are common items people in crisis need. Browse these or add your own specific needs to a wish list."
        centered
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Link 
              key={product.id} 
              to={`/products/${product.id}`}
              className="group"
            >
              <Card className="h-full overflow-hidden transition-all duration-300 border border-border hover:shadow-hover hover:-translate-y-1">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-5">
                  <div className="inline-block px-2 py-1 mb-3 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                    {product.category}
                  </div>
                  <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">${product.price.toFixed(2)}</span>
                    <span className="text-primary text-sm font-medium flex items-center group-hover:underline">
                      View Item <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild size="lg">
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </FeaturedSection>

      <section className="page-section bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-3 animate-slide-in">How MyNeedfully Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in animation-delay-100">
              A simple process to connect people in need with those who want to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-slide-in animation-delay-200">
            {howItWorksSteps.map((step, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl p-6 text-center border border-border hover:shadow-hover transition-all duration-300"
              >
                <div className="flex justify-center">{step.icon}</div>
                <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg mb-6 max-w-2xl mx-auto animate-slide-in animation-delay-300">
              Ready to create a wish list for yourself or someone in need?
            </p>
            <Button asChild size="lg" className="animate-slide-in animation-delay-400">
              <Link to="/create-wishlist">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 animate-slide-in">See a Wish List Example</h2>
            <p className="text-xl text-muted-foreground mb-8 animate-slide-in animation-delay-100">
              Check out an example wish list to understand how MyNeedfully helps connect people in crisis with those who want to support them.
            </p>
            <Button asChild size="lg" className="animate-slide-in animation-delay-200">
              <Link to="/wishlist-example">View Example Wish List</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
