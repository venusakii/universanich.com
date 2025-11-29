import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Package, Shield, Truck } from "lucide-react"

export default function HomePage() {
  const categories = [
    {
      title: "Cookware",
      image: "/elegant-copper-cookware-set-on-marble-counter.jpg",
      description: "Premium pots and pans",
    },
    {
      title: "Dinnerware",
      image: "/beautiful-ceramic-plates-and-bowls-table-setting.jpg",
      description: "Elegant table settings",
    },
    {
      title: "Home Decor",
      image: "/modern-minimalist-home-decor-vase-with-dried-flowe.jpg",
      description: "Curated home accents",
    },
  ]

  const featuredProducts = [
    {
      name: "Artisan Ceramic Bowl Set",
      price: "$89",
      image: "/handmade-ceramic-bowls-earth-tones.jpg",
    },
    {
      name: "Premium Chef Knife",
      price: "$149",
      image: "/professional-chef-knife-damascus-steel.jpg",
    },
    {
      name: "Linen Table Runner",
      price: "$45",
      image: "/natural-linen-table-runner-minimalist.jpg",
    },
    {
      name: "Copper Tea Kettle",
      price: "$125",
      image: "/copper-tea-kettle-on-stovetop-warm-lighting.jpg",
    },
  ]

  const newArrivals = [
    { name: "Marble Cutting Board", price: "$78", image: "/marble-cutting-board-kitchen.jpg" },
    { name: "Glass Storage Containers", price: "$65", image: "/glass-storage-containers-kitchen.jpg" },
    { name: "Brass Candlesticks", price: "$92", image: "/brass-candlesticks-home-decor.jpg" },
    { name: "Woven Placemats Set", price: "$38", image: "/woven-natural-placemats.jpg" },
  ]

  const rooms = [
    { name: "Living Room", count: "120+ items", image: "/modern-living-room.png" },
    { name: "Dining Room", count: "85+ items", image: "/elegant-dining-room-table-setting.jpg" },
    { name: "Kitchen", count: "200+ items", image: "/modern-kitchen-with-copper-accents.jpg" },
    { name: "Bedroom", count: "95+ items", image: "/cozy-minimalist-bedroom.jpg" },
  ]

  const testimonials = [
    {
      text: "The quality is exceptional. Every piece feels like it was made with care and attention to detail.",
      author: "Sarah Johnson",
      role: "Interior Designer",
    },
    {
      text: "I've transformed my entire kitchen with universanich. Beautiful products that are actually functional.",
      author: "Michael Chen",
      role: "Home Chef",
    },
    {
      text: "Finally found a brand that understands timeless design. These pieces will last for years.",
      author: "Emma Williams",
      role: "Homeowner",
    },
  ]

  const features = [
    { icon: Truck, title: "Free Shipping", description: "On orders over $100" },
    { icon: Shield, title: "Quality Guarantee", description: "30-day returns" },
    { icon: Package, title: "Carefully Packaged", description: "Protected delivery" },
    { icon: Star, title: "Curated Selection", description: "Hand-picked items" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-tight text-balance">
              Elevate your everyday living
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover thoughtfully curated home and kitchen essentials that blend timeless design with exceptional
              quality
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/shop">
                <Button size="lg" className="group">
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="#story">
                <Button size="lg" variant="outline">
                  Learn Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative aspect-[16/9] lg:aspect-[21/9] rounded-2xl overflow-hidden">
            <img
              src="/beautiful-modern-kitchen-with-natural-light-wooden.jpg"
              alt="Featured kitchen interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-light mb-4">Shop by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our carefully selected collections designed to transform your space
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((category) => (
              <Link
                key={category.title}
                href={`#${category.title.toLowerCase()}`}
                className="group relative aspect-[4/5] rounded-xl overflow-hidden"
              >
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-serif font-light mb-2">{category.title}</h3>
                  <p className="text-sm text-white/90">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-end justify-between mb-12 lg:mb-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-light mb-4">Featured Products</h2>
              <p className="text-muted-foreground max-w-xl">
                Hand-picked essentials that combine beauty with functionality
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredProducts.map((product) => (
              <div key={product.name} className="group cursor-pointer">
                <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-muted">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium group-hover:text-primary transition-colors">{product.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 sm:hidden">
            <Button variant="ghost" className="group">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-light mb-4">Shop by Room</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find everything you need for each space in your home
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {rooms.map((room) => (
              <Link
                key={room.name}
                href={`#${room.name.toLowerCase().replace(" ", "-")}`}
                className="group relative aspect-[16/10] rounded-2xl overflow-hidden"
              >
                <img
                  src={room.image || "/placeholder.svg"}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-serif font-light mb-2">{room.name}</h3>
                  <p className="text-sm text-white/90">{room.count}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section id="story" className="py-16 lg:py-24 bg-accent-soft">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-serif font-light leading-tight text-balance">
                Design that enhances your daily rituals
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At universanich, we believe your home should be a sanctuary. Every piece in our collection is selected
                for its ability to bring joy to everyday moments—from morning coffee to evening gatherings.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We partner with artisans and makers who share our commitment to quality, sustainability, and timeless
                design.
              </p>
              <Link href="/about">
                <Button size="lg" className="group">
                  Discover Our Values
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="/cozy-kitchen-scene-person-cooking-with-natural-lig.jpg"
                alt="Lifestyle"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                  {feature.icon && <feature.icon className="h-7 w-7" />}
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-serif font-light">Stay inspired</h2>
            <p className="text-lg text-muted-foreground">
              Join our community for design tips, new arrivals, and exclusive offers
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button type="submit" size="lg">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
