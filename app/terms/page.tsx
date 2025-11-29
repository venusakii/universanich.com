import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-8 -ml-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl lg:text-5xl font-serif font-light mb-4 text-balance">Terms & Conditions</h1>
        <p className="text-muted-foreground mb-12">Last updated: January 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-serif font-light mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using universanich.com, you accept and agree to be bound by the terms and provision of
              this agreement. If you do not agree to these terms, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4">Use License</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Permission is granted to temporarily access the materials on universanich's website for personal,
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under
              this license you may not:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or public display</li>
              <li>Attempt to reverse engineer any software on the website</li>
              <li>Remove any copyright or proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4">Product Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We strive to provide accurate product descriptions and pricing. However, we do not warrant that product
              descriptions, pricing, or other content is accurate, complete, reliable, current, or error-free. We
              reserve the right to correct any errors or omissions and to change or update information at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4">Orders and Payment</h2>
            <p className="text-muted-foreground leading-relaxed">
              By placing an order, you warrant that you are legally capable of entering into binding contracts and that
              all information you provide is true and accurate. We reserve the right to refuse or cancel any order for
              any reason, including availability, errors in pricing or product information, or suspected fraud.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4">Shipping and Delivery</h2>
            <p className="text-muted-foreground leading-relaxed">
              We will ship products to the address you provide during checkout. Shipping times are estimates and not
              guaranteed. Risk of loss and title for items purchased pass to you upon delivery to the carrier.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4">Returns and Refunds</h2>
            <p className="text-muted-foreground leading-relaxed">
              We accept returns within 30 days of delivery for most items in their original condition. Custom or
              personalized items may not be returnable. Refunds will be processed to the original payment method within
              7-10 business days of receiving the return.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              In no event shall universanich or its suppliers be liable for any damages (including, without limitation,
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability
              to use the materials on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4">Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction
              in which universanich operates, and you irrevocably submit to the exclusive jurisdiction of the courts in
              that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to revise these terms at any time. By continuing to use the website after changes are
              posted, you agree to be bound by the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms & Conditions, please contact us at legal@universanich.com or
              write to us at our mailing address.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
