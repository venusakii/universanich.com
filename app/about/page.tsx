import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Leaf, Users } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Craftsmanship",
      description: "We partner with skilled artisans who pour their expertise and passion into every piece",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Committed to eco-friendly materials and ethical production practices",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building relationships with makers and customers who value quality and design",
    },
  ]

  return (
    <div className="min-h-screen pt-32 lg:pt-40">
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-light mb-6">About universanich</h1>
            <p className="text-xl text-muted-foreground">
              Creating timeless home and kitchen essentials for mindful living
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="/cozy-kitchen-scene-person-cooking-with-natural-lig.jpg"
                alt="Our story"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-serif font-light">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                universanich was founded on the belief that the objects we use every day should bring joy and enhance
                our daily rituals. From preparing morning coffee to hosting evening gatherings, we believe every moment
                at home matters.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We travel the world to discover makers who share our commitment to quality, sustainability, and timeless
                design. Each piece in our collection is chosen for its ability to become a cherished part of your home
                for years to come.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Based in the heart of the English countryside, we work directly with artisans and small manufacturers to
                bring you products that blend traditional craftsmanship with contemporary aesthetics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-light mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-serif font-light">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-serif font-light">Join Our Community</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Become part of a community that values quality, design, and mindful living. Share your space, discover
                inspiration, and connect with others who appreciate beautiful, functional home goods.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="group">
                  Follow on Instagram
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  Subscribe to Newsletter
                </Button>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden order-1 lg:order-2">
              <img
                src="/cozy-living-room-with-home-decor-instagram.jpg"
                alt="Community"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-accent-soft">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-serif font-light">Visit Our Showroom</h2>
            <p className="text-lg text-muted-foreground">
              Experience our collection in person at our Cotswolds showroom. Open by appointment.
            </p>
            <Button size="lg" className="group">
              Book an Appointment
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
