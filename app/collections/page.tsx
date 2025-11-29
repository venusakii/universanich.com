import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CollectionsPage() {
  const collections = [
    {
      title: "Artisan Series",
      description: "Handcrafted pieces from skilled makers",
      image: "/handmade-ceramic-bowls-earth-tones.jpg",
      products: "24 products",
    },
    {
      title: "Modern Minimalist",
      description: "Clean lines and functional beauty",
      image: "/modern-minimalist-home-decor-vase-with-dried-flowe.jpg",
      products: "38 products",
    },
    {
      title: "Copper Collection",
      description: "Warm metallic tones for your kitchen",
      image: "/copper-tea-kettle-on-stovetop-warm-lighting.jpg",
      products: "16 products",
    },
    {
      title: "Natural Elements",
      description: "Earth-inspired materials and textures",
      image: "/natural-linen-table-runner-minimalist.jpg",
      products: "42 products",
    },
    {
      title: "Chef's Choice",
      description: "Professional-grade kitchen tools",
      image: "/professional-chef-knife-damascus-steel.jpg",
      products: "29 products",
    },
    {
      title: "Elegant Dining",
      description: "Create memorable table settings",
      image: "/beautiful-ceramic-plates-and-bowls-table-setting.jpg",
      products: "35 products",
    },
  ]

  return (
    <div className="min-h-screen pt-32 lg:pt-40">
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-light mb-6">Our Collections</h1>
            <p className="text-lg text-muted-foreground">
              Carefully curated selections that bring together complementary pieces for cohesive, beautiful spaces
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {collections.map((collection) => (
              <div key={collection.title} className="group cursor-pointer">
                <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
                  <img
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="secondary" size="sm">
                      View Collection
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-light group-hover:text-primary transition-colors">
                    {collection.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{collection.description}</p>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">{collection.products}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-light mb-6">Can't find what you're looking for?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Browse our complete catalog or contact our team for personalized recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop">
                <Button size="lg">Browse All Products</Button>
              </Link>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
