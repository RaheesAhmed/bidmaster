import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Bot,
  FileText,
  Gauge,
  Globe2,
  LightbulbIcon,
  Sparkles,
  Target,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-secondary">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Craft Winning Proposals with
                  <span className="text-primary"> AI-Powered</span> Precision
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Transform your Upwork proposals into high-converting
                  masterpieces. BidMaster uses advanced AI to help you win more
                  projects and stand out from the competition.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="rounded-full">
                    Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full">
                    Watch Demo
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] hidden md:block"></div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Powerful Features for Freelance Success
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need to create compelling proposals and win more
                clients on Upwork.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-primary transition-colors"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-secondary">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="p-6">
                  <p className="text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Win More Projects?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of successful freelancers who are already using
                BidMaster to transform their Upwork proposals.
              </p>
              <Button size="lg" className="rounded-full">
                Start Creating Winning Proposals{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

const features = [
  {
    icon: <Bot className="w-6 h-6 text-primary" />,
    title: "AI-Powered Writing",
    description:
      "Smart suggestions and auto-completion to craft compelling proposals faster.",
  },
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: "Client-Specific Targeting",
    description:
      "Customize proposals based on client history and project requirements.",
  },
  {
    icon: <Gauge className="w-6 h-6 text-primary" />,
    title: "Success Metrics",
    description:
      "Track your proposal performance and improve your success rate.",
  },
  {
    icon: <FileText className="w-6 h-6 text-primary" />,
    title: "Template Library",
    description:
      "Access proven proposal templates for different project types.",
  },
  {
    icon: <LightbulbIcon className="w-6 h-6 text-primary" />,
    title: "Smart Suggestions",
    description: "Get real-time recommendations to improve your proposals.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-primary" />,
    title: "Instant Polish",
    description: "Perfect grammar and tone with one-click refinements.",
  },
];

const stats = [
  {
    value: "85%",
    label: "Higher Response Rate",
  },
  {
    value: "2.5x",
    label: "More Projects Won",
  },
  {
    value: "50%",
    label: "Less Time Writing",
  },
];
