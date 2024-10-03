import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-12 text-center">About CryptoStake</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            At CryptoStake, our mission is to empower individuals and institutions to participate in the Ethereum ecosystem through secure and profitable staking strategies.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Our Team</CardTitle>
          </CardHeader>
          <CardContent>
            Our team consists of blockchain experts, financial analysts, and cybersecurity professionals, all dedicated to providing the best staking consultancy services.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Our Approach</CardTitle>
          </CardHeader>
          <CardContent>
            We combine cutting-edge technology with deep industry knowledge to create personalized staking strategies that maximize returns while minimizing risks.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Our Commitment</CardTitle>
          </CardHeader>
          <CardContent>
            We are committed to transparency, security, and continuous innovation in the ever-evolving world of cryptocurrency staking.
          </CardContent>
        </Card>
      </div>
    </div>
  )
}