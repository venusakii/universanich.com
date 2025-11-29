import Link from "next/link"

export default function KitchenPage() {
  const kitchenCategories = [
    {
      title: "Cookware",
      description: "Premium pots, pans, and cooking essentials",
      image: "/elegant-copper-cookware-set-on-marble-counter.jpg",
      itemCount: "45+ items",
    },
    {
      title: "Cutlery & Knives",
      description: "Professional-grade cutting tools",
      image: "/professional-chef-knife-damascus-steel.jpg",
      itemCount: "32+ items",
    },
    {
      title: "Kitchen Tools",
      description: "Essential utensils and gadgets",
      image: "/marble-cutting-board-kitchen.jpg",
      itemCount: "58+ items",
    },
    {
      title: "Storage Solutions",
      description: "Keep your kitchen organized",
      image: "/glass-storage-containers-kitchen.jpg",
      itemCount: "41+ items",
    },
    {
      title: "Appliances",
      description: "Small appliances for modern kitchens",
      image: "/copper-tea-kettle-on-stovetop-warm-lighting.jpg",
      itemCount: "28+ items",
    },
  ]

  return (
    <div className="min-h-screen pt-32 lg:pt-40">
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-light mb-6">Kitchen Essentials</h1>
            <p className="text-lg text-muted-foreground">
              Transform your kitchen with our curated selection of premium cookware, tools, and accessories designed for
              both professional chefs and home cooks
            </p>
          </div>

          <div className="relative aspect-[16/9] lg:aspect-[21/9] rounded-2xl overflow-hidden mb-16 lg:mb-24">
            <img
              src="/modern-kitchen-with-copper-accents.jpg"
              alt="Modern kitchen"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {kitchenCategories.map((category) => (
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-xs uppercase tracking-wide mb-2 text-white/80">{category.itemCount}</p>
                  <h3 className="text-2xl font-serif font-light mb-2">{category.title}</h3>
                  <p className="text-sm text-white/90">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
