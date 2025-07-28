import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  MessageCircle,
  Video,
  Bot,
  BarChart3,
  Zap,
  Star,
  ArrowRight,
  Instagram,
  CheckCircle,
  Users,
  TrendingUp,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SmoothScroll } from './smooth-scroll';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-black via-purple-950 to-black">
      <SmoothScroll />

      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-purple-800/30 bg-black/90 backdrop-blur-xl supports-[backdrop-filter]:bg-black/70">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 shadow-lg shadow-purple-500/25">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Laminarflow</span>
            </div>
          </div>
          <nav className="hidden items-center space-x-8 md:flex">
            <Link
              href="#features"
              className="nav-underline text-sm font-medium text-gray-300 transition-all duration-300 hover:scale-105 hover:text-purple-400"
            >
              Features
            </Link>
            <Link
              href="#benefits"
              className="nav-underline text-sm font-medium text-gray-300 transition-all duration-300 hover:scale-105 hover:text-purple-400"
            >
              Benefits
            </Link>
            <Link
              href="#testimonials"
              className="nav-underline text-sm font-medium text-gray-300 transition-all duration-300 hover:scale-105 hover:text-purple-400"
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="nav-underline text-sm font-medium text-gray-300 transition-all duration-300 hover:scale-105 hover:text-purple-400"
            >
              Pricing
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-300 transition-all duration-300 hover:bg-purple-900/50 hover:text-white"
            >
              Sign In
            </Button>
            <Button
              size="sm"
              className="btn-shimmer bg-gradient-to-r from-purple-600 to-purple-700 shadow-lg shadow-purple-500/25 transition-all duration-300 hover:scale-105 hover:from-purple-700 hover:to-purple-800"
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Header Section */}
        <section
          id="hero"
          className="animate-fade-in relative w-full overflow-hidden py-12 md:py-24 lg:py-32"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-950/30"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_70%)]"></div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="animate-slide-in-left flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge
                    variant="secondary"
                    className="animate-scale-in animate-delay-200 w-fit border-purple-700/50 bg-purple-900/50 text-purple-300"
                  >
                    <Instagram className="mr-1 h-3 w-3" />
                    Instagram Automation Platform
                  </Badge>
                  <h1 className="animate-fade-in-up animate-delay-300 text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                    Turn Instagram Engagement Into{' '}
                    <span className="animate-pulse bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                      Opportunity
                    </span>
                  </h1>
                  <p className="animate-fade-in-up animate-delay-400 max-w-[600px] text-gray-300 md:text-xl">
                    Automate your Instagram interactions with AI-powered responses to DMs and
                    comments. Transform every engagement into a potential business opportunity with
                    Laminarflow.
                  </p>
                </div>
                <div className="animate-fade-in-up animate-delay-500 flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="btn-shimmer bg-gradient-to-r from-purple-600 to-purple-700 shadow-lg shadow-purple-500/25 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:from-purple-700 hover:to-purple-800"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-purple-600 bg-transparent text-purple-400 transition-all duration-300 hover:scale-105 hover:bg-purple-900/50"
                  >
                    Watch Demo
                  </Button>
                </div>
                <div className="animate-fade-in-up animate-delay-500 flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>14-day free trial</span>
                  </div>
                </div>
              </div>
              <div className="animate-slide-in-right animate-delay-300 flex items-center justify-center">
                <div className="animate-float relative">
                  <div className="animate-pulse-glow absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-purple-800 opacity-30 blur-2xl"></div>
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Instagram+Dashboard+Preview"
                    width="600"
                    height="400"
                    alt="Laminarflow Dashboard"
                    className="relative mx-auto aspect-video overflow-hidden rounded-xl border border-purple-800/30 object-cover shadow-2xl transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Section - DM Automation */}
        <section className="relative w-full py-12 md:py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-950/50 to-black/50"></div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="animate-fade-in-up space-y-4">
                <Badge
                  variant="outline"
                  className="animate-scale-in w-fit border-purple-600/50 bg-purple-900/20 text-purple-400"
                >
                  <MessageCircle className="mr-1 h-3 w-3" />
                  DM Automation
                </Badge>
                <h2 className="animate-fade-in-up animate-delay-100 text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                  Automatic Responses to DMs with Specific Keywords
                </h2>
                <p className="animate-fade-in-up animate-delay-200 text-gray-300 md:text-lg">
                  Set up intelligent keyword triggers that automatically respond to direct messages.
                  Never miss a potential lead or customer inquiry again with our AI-powered response
                  system.
                </p>
                <ul className="space-y-2">
                  <li className="animate-fade-in-up animate-delay-300 flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                    <span className="text-gray-300">Custom keyword detection</span>
                  </li>
                  <li className="animate-fade-in-up animate-delay-400 flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                    <span className="text-gray-300">Personalized response templates</span>
                  </li>
                  <li className="animate-fade-in-up animate-delay-500 flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                    <span className="text-gray-300">24/7 automated engagement</span>
                  </li>
                </ul>
              </div>
              <div className="animate-fade-in-up animate-delay-200 flex items-center justify-center">
                <div className="hover-lift relative">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-purple-800 opacity-20 blur-xl"></div>
                  <Image
                    src="/placeholder.svg?height=400&width=500&text=DM+Automation+Interface"
                    width="500"
                    height="400"
                    alt="DM Automation Feature"
                    className="relative mx-auto aspect-video overflow-hidden rounded-xl border border-purple-800/30 object-cover shadow-lg transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Section - Comment Automation */}
        <section className="relative w-full py-12 md:py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-l from-purple-950/30 to-black/70"></div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="animate-fade-in-up animate-delay-200 flex items-center justify-center lg:order-first">
                <div className="hover-lift relative">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-purple-800 opacity-20 blur-xl"></div>
                  <Image
                    src="/placeholder.svg?height=400&width=500&text=Comment+Automation+Dashboard"
                    width="500"
                    height="400"
                    alt="Comment Automation Feature"
                    className="relative mx-auto aspect-video overflow-hidden rounded-xl border border-purple-800/30 object-cover shadow-lg transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
              <div className="animate-fade-in-up space-y-4">
                <Badge
                  variant="outline"
                  className="animate-scale-in w-fit border-purple-600/50 bg-purple-900/20 text-purple-400"
                >
                  <Video className="mr-1 h-3 w-3" />
                  Comment Automation
                </Badge>
                <h2 className="animate-fade-in-up animate-delay-100 text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                  Automations Triggered by Video Comments
                </h2>
                <p className="animate-fade-in-up animate-delay-200 text-gray-300 md:text-lg">
                  Engage with your audience instantly when they comment on your videos. Our smart
                  automation detects relevant comments and triggers appropriate responses or
                  actions.
                </p>
                <ul className="space-y-2">
                  <li className="animate-fade-in-up animate-delay-300 flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                    <span className="text-gray-300">Real-time comment monitoring</span>
                  </li>
                  <li className="animate-fade-in-up animate-delay-400 flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                    <span className="text-gray-300">Intelligent response matching</span>
                  </li>
                  <li className="animate-fade-in-up animate-delay-500 flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                    <span className="text-gray-300">Automated follow-up sequences</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features List Section */}
        <section id="features" className="relative w-full scroll-mt-20 py-12 md:py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-black to-purple-900/20"></div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="animate-fade-in-up flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">
                  Powerful Features for Instagram Success
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to automate and optimize your Instagram engagement in one
                  comprehensive platform.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              <Card className="animate-fade-in-up animate-delay-100 relative overflow-hidden border-purple-800/30 bg-gradient-to-br from-purple-950/50 to-black/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-purple-600/50 hover:shadow-2xl hover:shadow-purple-500/20">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center space-x-2">
                    <div className="rounded-lg border border-purple-700/30 bg-purple-900/50 p-2">
                      <Bot className="h-6 w-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">AI-Driven Messaging</h3>
                  </div>
                  <p className="text-gray-300">
                    Leverage advanced AI to craft personalized responses that feel natural and
                    engaging, maintaining your brand voice across all interactions.
                  </p>
                </CardContent>
              </Card>
              <Card className="animate-fade-in-up animate-delay-200 relative overflow-hidden border-purple-800/30 bg-gradient-to-br from-purple-950/50 to-black/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-purple-600/50 hover:shadow-2xl hover:shadow-purple-500/20">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center space-x-2">
                    <div className="rounded-lg border border-purple-700/30 bg-purple-900/50 p-2">
                      <MessageCircle className="h-6 w-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Seamless Comment Replies</h3>
                  </div>
                  <p className="text-gray-300">
                    Automatically respond to comments with contextually relevant replies, keeping
                    your audience engaged and building stronger relationships.
                  </p>
                </CardContent>
              </Card>
              <Card className="animate-fade-in-up animate-delay-300 relative overflow-hidden border-purple-800/30 bg-gradient-to-br from-purple-950/50 to-black/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-purple-600/50 hover:shadow-2xl hover:shadow-purple-500/20">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center space-x-2">
                    <div className="rounded-lg border border-purple-700/30 bg-purple-900/50 p-2">
                      <BarChart3 className="h-6 w-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Engagement Tracking</h3>
                  </div>
                  <p className="text-gray-300">
                    Monitor and analyze your automation performance with detailed analytics, helping
                    you optimize your strategy for maximum impact.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="relative w-full scroll-mt-20 py-12 md:py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-purple-950/50 to-black"></div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="animate-fade-in-up space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                  Turn Engagement Into Opportunity
                </h2>
                <p className="animate-fade-in-up animate-delay-100 text-gray-300 md:text-lg">
                  Streamline your Instagram interactions and never miss a potential customer again.
                  Laminarflow transforms every comment and DM into a business opportunity.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="animate-fade-in-up animate-delay-200 flex items-start space-x-3">
                    <div className="rounded-lg border border-purple-700/30 bg-purple-900/50 p-2">
                      <TrendingUp className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Increase Conversions</h4>
                      <p className="text-sm text-gray-400">
                        Convert more followers into customers with timely, relevant responses.
                      </p>
                    </div>
                  </div>
                  <div className="animate-fade-in-up animate-delay-300 flex items-start space-x-3">
                    <div className="rounded-lg border border-purple-700/30 bg-purple-900/50 p-2">
                      <Users className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Build Relationships</h4>
                      <p className="text-sm text-gray-400">
                        Maintain consistent engagement to build stronger audience relationships.
                      </p>
                    </div>
                  </div>
                  <div className="animate-fade-in-up animate-delay-400 flex items-start space-x-3">
                    <div className="rounded-lg border border-purple-700/30 bg-purple-900/50 p-2">
                      <Zap className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Save Time</h4>
                      <p className="text-sm text-gray-400">
                        Automate repetitive tasks and focus on creating great content.
                      </p>
                    </div>
                  </div>
                  <div className="animate-fade-in-up animate-delay-500 flex items-start space-x-3">
                    <div className="rounded-lg border border-purple-700/30 bg-purple-900/50 p-2">
                      <BarChart3 className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Scale Efficiently</h4>
                      <p className="text-sm text-gray-400">
                        Handle thousands of interactions without compromising quality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="animate-fade-in-up animate-delay-200 flex items-center justify-center">
                <div className="hover-lift relative">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-purple-800 opacity-20 blur-xl"></div>
                  <Image
                    src="/placeholder.svg?height=400&width=500&text=Benefits+Illustration"
                    width="500"
                    height="400"
                    alt="Benefits Illustration"
                    className="relative mx-auto aspect-video overflow-hidden rounded-xl border border-purple-800/30 object-cover shadow-lg transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section id="testimonials" className="relative w-full scroll-mt-20 py-12 md:py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-black to-purple-900/40"></div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="animate-fade-in-up flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">
                  What Our Customers Say
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See how Laminarflow has transformed Instagram engagement for businesses of all
                  sizes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              <Card className="animate-fade-in-up animate-delay-100 border-purple-800/30 bg-gradient-to-br from-purple-950/50 to-black/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-purple-400 text-purple-400" />
                    ))}
                  </div>
                  <p className="mb-4 text-gray-300">
                    Laminarflow increased our Instagram engagement by 300% and converted 40% more
                    followers into customers. The automation is seamless and feels completely
                    natural.
                  </p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/placeholder.svg?height=40&width=40&text=Sarah"
                      width="40"
                      height="40"
                      alt="Sarah Johnson"
                      className="rounded-full border border-purple-700/30"
                    />
                    <div>
                      <p className="font-semibold text-white">Sarah Johnson</p>
                      <p className="text-sm text-gray-400">Marketing Director, FashionCo</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="animate-fade-in-up animate-delay-200 border-purple-800/30 bg-gradient-to-br from-purple-950/50 to-black/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-purple-400 text-purple-400" />
                    ))}
                  </div>
                  <p className="mb-4 text-gray-300">
                    &quot;The AI responses are incredibly smart and on-brand. We&apos;ve saved 20
                    hours per week while maintaining better customer relationships than ever
                    before.&quot;
                  </p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/placeholder.svg?height=40&width=40&text=Mike"
                      width="40"
                      height="40"
                      alt="Mike Chen"
                      className="rounded-full border border-purple-700/30"
                    />
                    <div>
                      <p className="font-semibold text-white">Mike Chen</p>
                      <p className="text-sm text-gray-400">Founder, TechStartup</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="animate-fade-in-up animate-delay-300 border-purple-800/30 bg-gradient-to-br from-purple-950/50 to-black/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-purple-400 text-purple-400" />
                    ))}
                  </div>
                  <p className="mb-4 text-gray-300">
                    &quot;Game-changer for our social media strategy. The comment automation alone
                    has helped us capture leads we would have otherwise missed.&quot;
                  </p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/placeholder.svg?height=40&width=40&text=Emma"
                      width="40"
                      height="40"
                      alt="Emma Rodriguez"
                      className="rounded-full border border-purple-700/30"
                    />
                    <div>
                      <p className="font-semibold text-white">Emma Rodriguez</p>
                      <p className="text-sm text-gray-400">Social Media Manager, FitnessBrand</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="relative w-full scroll-mt-20 py-12 md:py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/30 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_70%)]"></div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="animate-fade-in-up mb-12 flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">
                  Choose Your Plan
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start free and upgrade when you&apos;re ready to unlock the full power of
                  Instagram automation.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-4xl items-start gap-8 lg:grid-cols-2">
              {/* Free Plan */}
              <Card className="animate-fade-in-up animate-delay-100 relative overflow-hidden border-purple-800/30 bg-gradient-to-br from-purple-950/30 to-black/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-purple-600/50 hover:shadow-2xl hover:shadow-purple-500/20">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white">Free Plan</h3>
                      <p className="text-gray-400">
                        Perfect for getting started with Instagram automation
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-4xl font-bold text-white">$0</span>
                        <span className="text-gray-400">/month</span>
                      </div>
                      <p className="text-sm text-gray-500">Forever free</p>
                    </div>

                    <Button
                      className="btn-shimmer w-full border border-purple-600/50 bg-gradient-to-r from-purple-600/80 to-purple-700/80 transition-all duration-300 hover:scale-105 hover:from-purple-600 hover:to-purple-700"
                      size="lg"
                    >
                      Get Started Free
                    </Button>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-white">What&apos;s included:</h4>
                      <ul className="space-y-3">
                        <li className="animate-fade-in-up animate-delay-200 flex items-start space-x-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-400" />
                          <div>
                            <span className="text-gray-300">Basic DM automation</span>
                            <p className="text-sm text-gray-500">Up to 3 keyword triggers</p>
                          </div>
                        </li>
                        <li className="animate-fade-in-up animate-delay-300 flex items-start space-x-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-400" />
                          <div>
                            <span className="text-gray-300">Comment replies</span>
                            <p className="text-sm text-gray-500">Up to 50 responses per month</p>
                          </div>
                        </li>
                        <li className="animate-fade-in-up animate-delay-400 flex items-start space-x-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-400" />
                          <div>
                            <span className="text-gray-300">Basic analytics</span>
                            <p className="text-sm text-gray-500">View engagement metrics</p>
                          </div>
                        </li>
                        <li className="animate-fade-in-up animate-delay-500 flex items-start space-x-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-400" />
                          <div>
                            <span className="text-gray-300">1 Instagram account</span>
                            <p className="text-sm text-gray-500">Connect one account</p>
                          </div>
                        </li>
                        <li className="animate-fade-in-up animate-delay-500 flex items-start space-x-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-400" />
                          <span className="text-gray-300">Email support</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Smart AI Plan */}
              <Card className="animate-fade-in-up animate-delay-200 relative overflow-hidden border-purple-600/50 bg-gradient-to-br from-purple-900/50 to-purple-950/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-purple-500/70 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-purple-500 to-purple-600"></div>
                <div className="absolute right-4 top-4">
                  <Badge className="animate-pulse border-0 bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                    Most Popular
                  </Badge>
                </div>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white">Smart AI</h3>
                      <p className="text-gray-300">
                        Advanced AI-powered automation for serious growth
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-4xl font-bold text-white">$29</span>
                        <span className="text-gray-400">/month</span>
                      </div>
                      <p className="text-sm text-purple-300">14-day free trial</p>
                    </div>

                    <Button
                      className="btn-shimmer group w-full bg-gradient-to-r from-purple-600 to-purple-700 shadow-lg shadow-purple-500/25 transition-all duration-300 hover:scale-105 hover:from-purple-700 hover:to-purple-800"
                      size="lg"
                    >
                      Start Free Trial
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-white">Everything in Free, plus:</h4>
                      <ul className="space-y-3">
                        <li className="animate-fade-in-up animate-delay-300 flex items-start space-x-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-400" />
                          <div>
                            <span className="text-gray-300">Unlimited DM automation</span>
                            <p className="text-sm text-gray-500">
                              Unlimited keyword triggers & responses
                            </p>
                          </div>
                        </li>
                        <li className="animate-fade-in-up animate-delay-400 flex items-start space-x-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-400" />
                          <div>
                            <span className="text-gray-300">Advanced AI messaging</span>
                            <p className="text-sm text-gray-500">
                              Personalized, context-aware responses
                            </p>
                          </div>
                        </li>
                        <li className="animate-fade-in-up animate-delay-500 flex items-start space-x-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-400" />
                          <div>
                            <span className="text-gray-300">Video comment automation</span>
                            <p className="text-sm text-gray-500">Auto-respond to video comments</p>
                          </div>
                        </li>
                        <li className="animate-fade-in-up animate-delay-500 flex items-start space-x-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-400" />
                          <div>
                            <span className="text-gray-300">Advanced analytics</span>
                            <p className="text-sm text-gray-500">
                              Conversion tracking & ROI insights
                            </p>
                          </div>
                        </li>
                        <li className="animate-fade-in-up animate-delay-500 flex items-start space-x-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-400" />
                          <div>
                            <span className="text-gray-300">Multiple accounts</span>
                            <p className="text-sm text-gray-500">
                              Connect up to 5 Instagram accounts
                            </p>
                          </div>
                        </li>
                        <li className="animate-fade-in-up animate-delay-500 flex items-start space-x-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-400" />
                          <div>
                            <span className="text-gray-300">Custom response templates</span>
                            <p className="text-sm text-gray-500">Brand-specific messaging</p>
                          </div>
                        </li>
                        <li className="animate-fade-in-up animate-delay-500 flex items-start space-x-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-400" />
                          <div>
                            <span className="text-gray-300">Lead capture integration</span>
                            <p className="text-sm text-gray-500">Connect with CRM & email tools</p>
                          </div>
                        </li>
                        <li className="animate-fade-in-up animate-delay-500 flex items-start space-x-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-400" />
                          <span className="text-gray-300">Priority support & onboarding</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="animate-fade-in-up animate-delay-300 mt-12 space-y-4 text-center">
              <p className="text-gray-400">
                All plans include SSL security, 99.9% uptime, and GDPR compliance
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  <span>30-day money back guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative w-full overflow-hidden py-12 md:py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.3),transparent_70%)]"></div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="animate-fade-in-up flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Transform Your Instagram Engagement?
                </h2>
                <p className="max-w-[600px] text-purple-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of businesses already using Laminarflow to automate their Instagram
                  success. Start your free trial today and experience the difference.
                </p>
              </div>
              <div className="animate-fade-in-up animate-delay-200 flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  variant="secondary"
                  className="btn-shimmer group bg-white text-purple-900 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-100"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-300 bg-transparent text-purple-100 transition-all duration-300 hover:scale-105 hover:bg-purple-800/30"
                >
                  Schedule Demo
                </Button>
              </div>
              <div className="animate-fade-in-up animate-delay-300 flex items-center space-x-4 text-sm text-purple-200">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-purple-800/30 bg-black/80 py-6">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-gradient-to-br from-purple-500 to-purple-700 shadow-lg shadow-purple-500/25">
                  <Zap className="h-3 w-3 text-white" />
                </div>
                <span className="font-bold text-white">Laminarflow</span>
              </div>
              <p className="text-sm text-gray-400">
                Automate your Instagram engagement and turn every interaction into an opportunity.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white">Product</h4>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 transition-colors duration-300 hover:text-purple-400"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 transition-colors duration-300 hover:text-purple-400"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 transition-colors duration-300 hover:text-purple-400"
                  >
                    API
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 transition-colors duration-300 hover:text-purple-400"
                  >
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white">Company</h4>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 transition-colors duration-300 hover:text-purple-400"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 transition-colors duration-300 hover:text-purple-400"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 transition-colors duration-300 hover:text-purple-400"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 transition-colors duration-300 hover:text-purple-400"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white">Support</h4>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 transition-colors duration-300 hover:text-purple-400"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 transition-colors duration-300 hover:text-purple-400"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 transition-colors duration-300 hover:text-purple-400"
                  >
                    Status
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 transition-colors duration-300 hover:text-purple-400"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex w-full shrink-0 flex-col items-center gap-2 border-t border-purple-800/30 py-6 sm:flex-row">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} Laminarflow. All rights reserved.
            </p>
            <nav className="flex gap-4 sm:ml-auto sm:gap-6">
              <Link
                href="#"
                className="text-xs text-gray-400 transition-colors duration-300 hover:text-purple-400"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-xs text-gray-400 transition-colors duration-300 hover:text-purple-400"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
