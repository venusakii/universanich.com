"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const allProducts = [
    {
      name: "Artisan Ceramic Bowl Set",
      price: "$89",
      category: "Dinnerware",
      image: "/handmade-ceramic-bowls-earth-tones.jpg",
      slug: "artisan-ceramic-bowl-set",
    },
    {
      name: "Premium Chef Knife",
      price: "$149",
      category: "Cookware",
      image: "/professional-chef-knife-damascus-steel.jpg",
      slug: "premium-chef-knife",
    },
    {
      name: "Linen Table Runner",
      price: "$45",
      category: "Home Decor",
      image: "/natural-linen-table-runner-minimalist.jpg",
      slug: "linen-table-runner",
    },
    {
      name: "Copper Tea Kettle",
      price: "$125",
      category: "Cookware",
      image: "/copper-tea-kettle-on-stovetop-warm-lighting.jpg",
      slug: "copper-tea-kettle",
    },
    {
      name: "Marble Cutting Board",
      price: "$78",
      category: "Cookware",
      image: "/marble-cutting-board-kitchen.jpg",
      slug: "marble-cutting-board",
    },
    {
      name: "Glass Storage Containers",
      price: "$65",
      category: "Storage",
      image: "/glass-storage-containers-kitchen.jpg",
      slug: "glass-storage-containers",
    },
    {
      name: "Brass Candlesticks",
      price: "$92",
      category: "Home Decor",
      image: "/brass-candlesticks-home-decor.jpg",
      slug: "brass-candlesticks",
    },
    {
      name: "Woven Placemats Set",
      price: "$38",
      category: "Dinnerware",
      image: "/woven-natural-placemats.jpg",
      slug: "woven-placemats-set",
    },
    {
      name: "Elegant Copper Cookware",
      price: "$299",
      category: "Cookware",
      image: "/elegant-copper-cookware-set-on-marble-counter.jpg",
      slug: "elegant-copper-cookware",
    },
    {
      name: "Ceramic Plates Set",
      price: "$120",
      category: "Dinnerware",
      image: "/beautiful-ceramic-plates-and-bowls-table-setting.jpg",
      slug: "ceramic-plates-set",
    },
    {
      name: "Minimalist Vase",
      price: "$55",
      category: "Home Decor",
      image: "/modern-minimalist-home-decor-vase-with-dried-flowe.jpg",
      slug: "minimalist-vase",
    },
  ]

  const categories = ["All", "Cookware", "Dinnerware", "Home Decor", "Storage"]

  const filteredProducts =
    selectedCategory === "All" ? allProducts : allProducts.filter((product) => product.category === selectedCategory)

  return (
    <div className="min-h-screen pt-32 lg:pt-40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h1 className="text-4xl lg:text-5xl font-serif font-light mb-6">Shop All</h1>
          <p className="text-lg text-muted-foreground">
            Browse our complete collection of thoughtfully curated home and kitchen essentials
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === selectedCategory ? "default" : "outline"}
              className="rounded-full"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-16 lg:mb-24">
          {filteredProducts.map((product) => (
            <Link key={product.name} href={`/product/${product.slug}`} className="group cursor-pointer">
              <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">{product.category}</p>
                <h3 className="font-medium group-hover:text-primary transition-colors">{product.name}</h3>
                
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
