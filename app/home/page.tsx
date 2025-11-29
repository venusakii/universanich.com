import Link from "next/link"

export default function HomeDepartmentPage() {
  const homeCategories = [
    {
      title: "Living Room",
      description: "Create a welcoming space for gathering",
      image: "/modern-living-room.png",
      itemCount: "120+ items",
    },
    {
      title: "Bedroom",
      description: "Your personal sanctuary for rest",
      image: "/cozy-minimalist-bedroom.jpg",
      itemCount: "95+ items",
    },
    {
      title: "Dining Room",
      description: "Elegant settings for memorable meals",
      image: "/elegant-dining-room-table-setting.jpg",
      itemCount: "85+ items",
    },
    {
      title: "Home Decor",
      description: "Accents that reflect your style",
      image: "/modern-minimalist-home-decor-vase-with-dried-flowe.jpg",
      itemCount: "150+ items",
    },
    {
      title: "Textiles",
      description: "Linens, throws, and soft furnishings",
      image: "/natural-linen-table-runner-minimalist.jpg",
      itemCount: "78+ items",
    },
    {
      title: "Lighting",
      description: "Illuminate your space beautifully",
      image: "/brass-candlesticks-home-decor.jpg",
      itemCount: "62+ items",
    },
  ]

  return (
    <div className="min-h-screen pt-32 lg:pt-40">
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-light mb-6">Home Collection</h1>
            <p className="text-lg text-muted-foreground">
              Discover beautiful pieces to transform every room in your home into a space that truly reflects your
              personal style
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16 lg:mb-24">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="/cozy-reading-nook-with-throw-pillows-instagram.jpg"
                alt="Cozy home interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="/cozy-living-room-with-home-decor-instagram.jpg"
                alt="Modern living space"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {homeCategories.map((category) => (
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
