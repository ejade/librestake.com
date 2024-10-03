import Link from 'next/link'
import { Button } from "../components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card"
import { CheckCircle, TrendingUp, Shield, Award } from 'lucide-react'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to librestake</h1>
        <p className="text-xl mb-8 text-muted-foreground">Your trusted partner in Ethereum staking consultancy</p>
        <Button asChild size="lg">
          <Link href="/contact">Get Started</Link>
        </Button>
      </section>

      <section className="py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Choose librestake?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="mr-2" />
                Expertise
              </CardTitle>
            </CardHeader>
            <CardContent>
              Our team consists of blockchain experts with years of experience in Ethereum staking.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2" />
                Maximized Returns
              </CardTitle>
            </CardHeader>
            <CardContent>
              We employ advanced strategies to maximize your staking rewards while minimizing risks.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2" />
                Security First
              </CardTitle>
            </CardHeader>
            <CardContent>
              Your assets' security is our top priority. We implement industry-leading security measures.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="mr-2" />
                Personalized Service
              </CardTitle>
            </CardHeader>
            <CardContent>
              We offer tailored solutions to meet your specific needs and goals in Ethereum staking.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Start Staking?</h2>
        <p className="text-xl mb-8 text-muted-foreground">Let us help you navigate the world of Ethereum staking.</p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </section>
    </div>
  )
}