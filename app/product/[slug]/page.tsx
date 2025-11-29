import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ShoppingCart, Star } from "lucide-react"

const allProducts = [
  {
    name: "Artisan Ceramic Bowl Set",
    price: "$89",
    category: "Dinnerware",
    image: "/handmade-ceramic-bowls-earth-tones.jpg",
    slug: "artisan-ceramic-bowl-set",
    amazonLink: "https://www.amazon.com/s?k=artisan+ceramic+bowl+set",
    description:
      "Handcrafted ceramic bowls featuring earthy tones and unique textures. Each piece is individually made by skilled artisans, ensuring no two sets are exactly alike. Perfect for everyday meals or special occasions.",
    features: ["Set of 4 bowls", "Handmade ceramic", "Microwave & dishwasher safe", "Unique earth-tone glaze"],
    materials: "High-fired stoneware clay with food-safe glaze",
    dimensions: "6 inches diameter, 3 inches height",
  },
  {
    name: "Premium Chef Knife",
    price: "$149",
    category: "Cookware",
    image: "/professional-chef-knife-damascus-steel.jpg",
    slug: "premium-chef-knife",
    amazonLink: "https://www.amazon.com/s?k=damascus+steel+chef+knife",
    description:
      "Professional-grade Damascus steel chef knife with exceptional edge retention and beautiful wave pattern. Ergonomically designed handle provides perfect balance and comfort for extended use.",
    features: ["67-layer Damascus steel", "8-inch blade", "Full tang construction", "Ergonomic pakkawood handle"],
    materials: "VG-10 Damascus steel, Pakkawood",
    dimensions: "13 inches total length, 8 inch blade",
  },
  {
    name: "Linen Table Runner",
    price: "$45",
    category: "Home Decor",
    image: "/natural-linen-table-runner-minimalist.jpg",
    slug: "linen-table-runner",
    amazonLink: "https://www.amazon.com/s?k=linen+table+runner",
    description:
      "Natural linen table runner with minimalist design. Made from premium European linen that softens beautifully with each wash. Adds an elegant, understated touch to any table setting.",
    features: ["100% European linen", "Pre-washed for softness", "Natural stone-washed finish", "Machine washable"],
    materials: "100% European flax linen",
    dimensions: "14 x 72 inches",
  },
  {
    name: "Copper Tea Kettle",
    price: "$125",
    category: "Cookware",
    image: "/copper-tea-kettle-on-stovetop-warm-lighting.jpg",
    slug: "copper-tea-kettle",
    amazonLink: "https://www.amazon.com/s?k=copper+tea+kettle",
    description:
      "Stunning copper tea kettle that heats water quickly and evenly. Features a comfortable stay-cool handle and melodious whistle. A beautiful and functional addition to any kitchen.",
    features: ["Pure copper construction", "2-quart capacity", "Whistle spout", "Heat-resistant handle"],
    materials: "Copper with tin lining",
    dimensions: "8 inches height, 6 inches diameter",
  },
  {
    name: "Marble Cutting Board",
    price: "$78",
    category: "Cookware",
    image: "/marble-cutting-board-kitchen.jpg",
    slug: "marble-cutting-board",
    amazonLink: "https://www.amazon.com/s?k=marble+cutting+board",
    description:
      "Elegant marble cutting board perfect for serving cheese, charcuterie, or as a stylish prep surface. Natural veining ensures each piece is unique. Cool surface is ideal for pastry work.",
    features: ["Natural white marble", "Non-slip rubber feet", "Polished smooth surface", "Easy to clean"],
    materials: "Natural marble stone",
    dimensions: "12 x 16 inches, 0.75 inch thick",
  },
  {
    name: "Glass Storage Containers",
    price: "$65",
    category: "Storage",
    image: "/glass-storage-containers-kitchen.jpg",
    slug: "glass-storage-containers",
    amazonLink: "https://www.amazon.com/s?k=glass+storage+containers",
    description:
      "Premium borosilicate glass storage containers with airtight lids. Perfect for meal prep, leftovers, and pantry organization. Stackable design saves space while keeping food fresh.",
    features: ["Set of 5 containers", "Borosilicate glass", "Airtight bamboo lids", "Oven, microwave & freezer safe"],
    materials: "Borosilicate glass, bamboo lids",
    dimensions: "Various sizes from 8oz to 34oz",
  },
  {
    name: "Brass Candlesticks",
    price: "$92",
    category: "Home Decor",
    image: "/brass-candlesticks-home-decor.jpg",
    slug: "brass-candlesticks",
    amazonLink: "https://www.amazon.com/s?k=brass+candlesticks",
    description:
      "Elegant brass candlesticks with a warm, antique-inspired finish. Hand-polished for a beautiful sheen that develops character over time. Creates a warm, inviting ambiance in any room.",
    features: ["Solid brass construction", "Hand-polished finish", "Weighted base", "Fits standard taper candles"],
    materials: "Solid brass",
    dimensions: "10 inches height",
  },
  {
    name: "Woven Placemats Set",
    price: "$38",
    category: "Dinnerware",
    image: "/woven-natural-placemats.jpg",
    slug: "woven-placemats-set",
    amazonLink: "https://www.amazon.com/s?k=woven+jute+placemats",
    description:
      "Natural woven placemats crafted from sustainable materials. Adds texture and warmth to your table while protecting surfaces. Easy to clean and maintain for everyday use.",
    features: ["Set of 4 placemats", "Natural jute fiber", "Heat resistant", "Wipeable surface"],
    materials: "Natural jute fiber",
    dimensions: "15 x 12 inches",
  },
  {
    name: "Elegant Copper Cookware",
    price: "$299",
    category: "Cookware",
    image: "/elegant-copper-cookware-set-on-marble-counter.jpg",
    slug: "elegant-copper-cookware",
    amazonLink: "https://www.amazon.com/s?k=copper+cookware+set",
    description:
      "Premium copper cookware set with exceptional heat conductivity for precise cooking control. Professional-grade quality with elegant design. Includes essential pots and pans for complete kitchen setup.",
    features: ["5-piece set", "Copper construction", "Stainless steel interior", "Oven safe to 500°F"],
    materials: "Copper exterior, stainless steel interior",
    dimensions: 'Set includes 8", 10", 12" pans, 2qt & 4qt pots',
  },
  {
    name: "Ceramic Plates Set",
    price: "$120",
    category: "Dinnerware",
    image: "/beautiful-ceramic-plates-and-bowls-table-setting.jpg",
    slug: "ceramic-plates-set",
    amazonLink: "https://www.amazon.com/s?k=ceramic+dinnerware+set",
    description:
      "Beautiful ceramic dinnerware set with organic shapes and artisan glazing. Each piece features unique reactive glaze patterns. Complete service for four that elevates every meal.",
    features: ["16-piece set (service for 4)", "Reactive glaze finish", "Chip-resistant", "Dishwasher safe"],
    materials: "High-fired ceramic with reactive glaze",
    dimensions: 'Dinner plate: 11", salad plate: 8", bowl: 6"',
  },
  {
    name: "Minimalist Vase",
    price: "$55",
    category: "Home Decor",
    image: "/modern-minimalist-home-decor-vase-with-dried-flowe.jpg",
    slug: "minimalist-vase",
    amazonLink: "https://www.amazon.com/s?k=minimalist+ceramic+vase",
    description:
      "Modern minimalist vase with clean lines and matte finish. Perfect for fresh or dried flowers, or stunning as a standalone sculptural piece. Versatile size works in any room.",
    features: ["Matte ceramic finish", "Minimalist design", "Water-tight", "Scratch-resistant base"],
    materials: "Ceramic with matte glaze",
    dimensions: "12 inches height, 4 inches diameter",
  },
]

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = allProducts.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-32 lg:pt-40 pb-16 lg:pb-24">
      <div className="container mx-auto px-4 lg:px-8">
        <Link
          href="/shop"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">{product.category}</p>
              <h1 className="text-4xl lg:text-5xl font-serif font-light mb-4">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">(48 reviews)</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">{product.description}</p>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div>
                <h4 className="font-medium mb-2">Materials</h4>
                <p className="text-sm text-muted-foreground">{product.materials}</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Dimensions</h4>
                <p className="text-sm text-muted-foreground">{product.dimensions}</p>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <Button size="lg" className="flex-1 group" asChild>
                <a href={product.amazonLink} target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Buy on Amazon
                </a>
              </Button>
            </div>

            <div className="pt-6 space-y-4 border-t border-border">
              <div className="flex items-start gap-3">
                <div className="text-primary">✓</div>
                <div>
                  <p className="font-medium">Easy Returns</p>
                  <p className="text-sm text-muted-foreground">30-day return policy</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-primary">✓</div>
                <div>
                  <p className="font-medium">Secure Payment</p>
                  <p className="text-sm text-muted-foreground">Your information is protected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
