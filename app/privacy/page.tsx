import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-8 -ml-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl lg:text-5xl font-serif font-light mb-4 text-balance">Privacy Policy</h1>
        <p className="text-muted-foreground mb-12">Last updated: January 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-serif font-light mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              At universanich, we take your privacy seriously. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website or make a purchase from us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4">Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Name and contact information (email address, phone number, shipping address)</li>
              <li>Payment information (processed securely through our payment providers)</li>
              <li>Order history and preferences</li>
              <li>Communication preferences</li>
              <li>Reviews and feedback you provide</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders and our products</li>
              <li>Improve our website and customer service</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Prevent fraud and enhance security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4">Information Sharing</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell or rent your personal information to third parties. We may share your information with
              service providers who assist us in operating our website and conducting our business, such as payment
              processors, shipping companies, and email service providers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4">Cookies and Tracking</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our website and hold certain
              information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
              sent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal
              information. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to processing of your information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at privacy@universanich.com or
              write to us at our mailing address.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
