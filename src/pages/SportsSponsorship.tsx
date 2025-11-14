import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, ArrowRight, Download, MessageCircle, Award, Users, TrendingUp, Target, Briefcase } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import sponsorshipHero from "@/assets/sponsorship-hero.jpg";
import mentorImage from "@/assets/mentor-sagar.jpeg";

const SportsSponsorship = () => {
  const [stickyVisible, setStickyVisible] = useState(false);
  const [eligibilityForm, setEligibilityForm] = useState({
    name: "",
    email: "",
    phone: "",
    status: "",
    reason: "",
    startDate: "",
  });
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setStickyVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleEligibilitySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Submission Received!",
      description: "Our program advisor will contact you within 24 hours to discuss your eligibility.",
    });
    setEligibilityForm({
      name: "",
      email: "",
      phone: "",
      status: "",
      reason: "",
      startDate: "",
    });
  };

  const handleDownloadBrochure = () => {
    toast({
      title: "Brochure Download Started",
      description: "The program brochure will be downloaded shortly.",
    });
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={sponsorshipHero}
            alt="The Art & Science of Sports Sponsorship"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-accent text-accent-foreground text-sm font-bold rounded-full mb-4">
                  Cohort 01 · 16 Weeks · Applications Open
                </div>
                <h1 className="mb-6">The Art & Science of Sports Sponsorship</h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Master pitching, negotiating, and executing sponsorship deals with live mentorship and a 16-week guided journey.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Cohort-based learning + real projects + paid internship opportunity via KIBI Sports.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent hover:bg-accent-hover shadow-accent"
                    data-event="apply_now_clicked"
                  >
                    <a href="https://payments.cashfree.com/forms/khelpreneurscohort1" target="_blank" rel="noopener noreferrer">
                      Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2"
                    data-event="download_brochure_clicked"
                    onClick={handleDownloadBrochure}
                  >
                    <Download className="w-5 h-5" />
                    Download Brochure
                  </Button>
                </div>

                <a
                  href="#eligibility"
                  className="text-primary hover:underline font-semibold"
                  data-event="check_eligibility_clicked"
                >
                  Check Eligibility Before You Apply →
                </a>
              </div>

              <Card className="shadow-strong">
                <CardContent className="p-8">
                  <h3 className="font-bold text-xl mb-6">Quick Facts</h3>
                  <div className="space-y-4">
                    {[
                      { label: "Duration", value: "16 weeks (8 live + 8 internship)" },
                      { label: "Format", value: "Live online + recordings + masterclasses" },
                      { label: "Mentor", value: "Sagar Rai, CEO KIBI Sports" },
                      { label: "Seats", value: "50 (first-come basis)" },
                      { label: "Type", value: "Cohort-based, not pre-recorded" },
                    ].map((fact) => (
                      <div key={fact.label} className="flex justify-between items-start">
                        <span className="text-muted-foreground">{fact.label}:</span>
                        <span className="font-semibold text-right max-w-[60%]">{fact.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-12 text-center">What You'll Get</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Users />,
                  title: "Live mentorship from industry practitioners",
                },
                {
                  icon: <Target />,
                  title: "Build a full sponsorship pitch deck",
                },
                {
                  icon: <Briefcase />,
                  title: "Work on real sponsorship opportunities",
                },
                {
                  icon: <Award />,
                  title: "Masterclasses with brand & league executives",
                },
                {
                  icon: <TrendingUp />,
                  title: "Career support, PPO pathways, and community",
                },
                {
                  icon: <CheckCircle2 />,
                  title: "2-month applied internship with KIBI Sports",
                },
              ].map((highlight, index) => (
                <Card key={index} className="shadow-medium border-none text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4">
                      {highlight.icon}
                    </div>
                    <p className="font-semibold">{highlight.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Sports Sponsorship, Why Now */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-6 text-center">Why Sports Sponsorship, and Why Now?</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Sports sponsorship is booming in India across digital, OTT, and grassroots sports. Brands are actively looking for ways to connect with fans through leagues, athletes, and venues. There's a gap between academic theory and real execution talent—this cohort is designed to fill that gap with practical, real-world training.
            </p>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { value: "15,000+", label: "Athletes in KIBI Network" },
                { value: "800+", label: "Sports Institutions" },
                { value: "5,000+", label: "Venues for Branding" },
                { value: "1,000+", label: "Brand Campaigns Led" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Your Mentor */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-12 text-center">Meet Your Mentor – Sagar Rai</h2>
            <Card className="shadow-strong overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-5">
                  <div className="md:col-span-2">
                    <img
                      src={mentorImage}
                      alt="Sagar Rai - Founder & CEO, KIBI Sports"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-3 p-8 md:p-12">
                    <h3 className="text-2xl font-bold mb-2">Sagar Rai</h3>
                    <p className="text-primary font-bold text-lg mb-6">
                      Founder & CEO, KIBI Sports
                    </p>
                    <ul className="space-y-3 mb-6">
                      {[
                        "National Startup Award winner",
                        "Felicitated by Hon. Prime Minister Narendra Modi",
                        "Led 1000+ sponsorship campaigns across cricket, kabaddi, running events",
                        "Engineer and former national-level athlete",
                        "Academic speaker & mentor in sports entrepreneurship",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline">View Mentor Profile</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-center">What You'll Learn Over 16 Weeks</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  weeks: "Weeks 1-2",
                  title: "Foundations",
                  content: "Sponsorship ecosystem & stakeholders. Brand objectives, KPIs, and evaluation frameworks.",
                },
                {
                  weeks: "Weeks 3-4",
                  title: "Athlete Sponsorships",
                  content: "Talent scouting, rights management, contracts, and deliverables. Building athlete brands & creator collaborations.",
                },
                {
                  weeks: "Weeks 5-6",
                  title: "Teams, Leagues & Venues",
                  content: "League and team sponsorship models. Jersey/title sponsorships. Venue branding & on-ground activations.",
                },
                {
                  weeks: "Weeks 7-8",
                  title: "Digital & CSR Sponsorships",
                  content: "OTT, streaming, and social media sponsorships. Influencer-led campaigns. CSR-driven sports partnerships & community impact.",
                },
                {
                  weeks: "Weeks 9-10",
                  title: "Pitching & Deck Creation",
                  content: "Storytelling for brands. Structuring high-conversion sponsorship proposals.",
                },
                {
                  weeks: "Weeks 11-12",
                  title: "Pricing, Budget & ROI",
                  content: "How to price sponsorship assets. Budget planning. Measuring ROI and using tools/dashboards.",
                },
                {
                  weeks: "Weeks 13-14",
                  title: "Internship Onboarding",
                  content: "Orientation to KIBI Sports ecosystem. Tools, processes, and project planning.",
                },
                {
                  weeks: "Week 15",
                  title: "Industry Masterclass",
                  content: "Live session with a brand/league executive.",
                },
                {
                  weeks: "Week 16",
                  title: "Capstone Project",
                  content: "Final sponsorship strategy deck. Presentation to mentors and feedback.",
                },
              ].map((module, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-xl px-6 shadow-soft">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0">
                        {index + 1}
                      </div>
                      <div className="text-left">
                        <div className="text-sm text-primary font-semibold">{module.weeks}</div>
                        <div className="font-bold">{module.title}</div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4 pb-2">
                    {module.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Paid Internship Highlight */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 text-center">2-Month Applied Internship with KIBI Sports</h2>
            <Card className="shadow-strong border-none">
              <CardContent className="p-8 md:p-12">
                <p className="text-lg text-muted-foreground mb-6">
                  After live sessions, learners get a structured internship opportunity within the KIBI Sports ecosystem. They work on real sponsorships for brands, athletes, leagues, or venues. They get hands-on experience executing what they learned in the cohort.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Top performers may receive performance-based PPO opportunities or referrals.
                </p>
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                  <p className="text-muted-foreground italic">
                    <strong>Note:</strong> Compensation and benefits are discussed individually with selected candidates during the internship onboarding process.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-12 text-center">Where This Cohort Can Take You</h2>

            <div className="mb-12">
              <h3 className="font-bold text-xl mb-6 text-center">Potential Job Roles</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Sports Marketing Executive",
                  "Sponsorship Coordinator",
                  "Brand Partnerships Associate",
                  "Athlete Manager (Trainee)",
                  "Business Development (Sports)",
                  "Freelance Sponsorship Consultant",
                ].map((role, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold"
                  >
                    {role}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-medium border-none">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg mb-4">What You'll Build</h3>
                  <ul className="space-y-3">
                    {[
                      "Portfolio of real sponsorship pitches and decks",
                      "Experience working with real brands and sports properties",
                      "Confidence to approach leagues, teams, and brands",
                      "Network of mentors, peers, and industry professionals",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-none">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg mb-4">Career Pathways</h3>
                  <ul className="space-y-3">
                    {[
                      "Full-time roles at agencies, leagues, or brands",
                      "Freelancing as sponsorship consultant",
                      "Sports entrepreneurship opportunities",
                      "Transition from athlete/coach to business role",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Join */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-12 text-center">Is This Cohort Right For You?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  emoji: "🎓",
                  title: "Students & Fresh Graduates",
                  description: "Final year or recent grads in sports management, marketing, business, or media.",
                },
                {
                  emoji: "💼",
                  title: "Freelancers & Early Professionals",
                  description: "Marketers or sales professionals looking to specialise in sports.",
                },
                {
                  emoji: "🔄",
                  title: "Career Switchers & Sports Enthusiasts",
                  description: "Working professionals who want to transition into sports sponsorship.",
                },
                {
                  emoji: "⚽",
                  title: "Athletes, Coaches & Creators",
                  description: "Those who want to monetize their sports presence and network.",
                },
                {
                  emoji: "🏢",
                  title: "Agency & Team Staff",
                  description: "Junior staff at agencies/teams who handle brand deals or marketing.",
                },
                {
                  emoji: "🚀",
                  title: "Aspiring Entrepreneurs",
                  description: "Those exploring sports business ventures and partnerships.",
                },
              ].map((persona, index) => (
                <Card key={index} className="shadow-medium border-none">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{persona.emoji}</div>
                    <h3 className="font-bold mb-2">{persona.title}</h3>
                    <p className="text-sm text-muted-foreground">{persona.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Khelpreneurs */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-12 text-center">Why Choose Khelpreneurs Cohorts?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Users />,
                  title: "Live Experts",
                  description: "Learn directly from practitioners, not just faculty.",
                },
                {
                  icon: <Target />,
                  title: "Hands-On Learning",
                  description: "Work on real projects, decks, and sponsorship deals.",
                },
                {
                  icon: <Award />,
                  title: "Network & Community",
                  description: "Access to mentors, alumni, and industry professionals.",
                },
                {
                  icon: <TrendingUp />,
                  title: "Career Support",
                  description: "Guidance for internships, PPOs, and freelance opportunities.",
                },
              ].map((item, index) => (
                <Card key={index} className="shadow-medium border-none text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4">
                      {item.icon}
                    </div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Check Eligibility Form */}
      <section id="eligibility" className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6 text-center">Check Your Eligibility Before You Apply</h2>
            <p className="text-lg text-muted-foreground text-center mb-8">
              Fill out this quick form and our program advisor will reach out to discuss your fit for the cohort
            </p>

            <Card className="shadow-strong border-none">
              <CardContent className="p-8">
                <form onSubmit={handleEligibilitySubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <Input
                      type="text"
                      placeholder="Your full name"
                      value={eligibilityForm.name}
                      onChange={(e) => setEligibilityForm({ ...eligibilityForm, name: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={eligibilityForm.email}
                      onChange={(e) => setEligibilityForm({ ...eligibilityForm, email: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone *</label>
                    <Input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={eligibilityForm.phone}
                      onChange={(e) => setEligibilityForm({ ...eligibilityForm, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Current Status *</label>
                    <Select
                      value={eligibilityForm.status}
                      onValueChange={(value) => setEligibilityForm({ ...eligibilityForm, status: value })}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your current status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="fresher">Fresher</SelectItem>
                        <SelectItem value="working">Working Professional</SelectItem>
                        <SelectItem value="freelancer">Freelancer</SelectItem>
                        <SelectItem value="athlete">Athlete</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Why do you want to join this cohort? *</label>
                    <Textarea
                      placeholder="Tell us about your interest in sports sponsorship..."
                      value={eligibilityForm.reason}
                      onChange={(e) => setEligibilityForm({ ...eligibilityForm, reason: e.target.value })}
                      className="min-h-[100px]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">When are you planning to start? *</label>
                    <Select
                      value={eligibilityForm.startDate}
                      onValueChange={(value) => setEligibilityForm({ ...eligibilityForm, startDate: value })}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your preferred start time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediately">Immediately</SelectItem>
                        <SelectItem value="this-month">This Month</SelectItem>
                        <SelectItem value="later">Later</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent hover:bg-accent-hover"
                    data-event="submit_eligibility_form"
                  >
                    Submit & Talk to a Program Advisor
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "What is the weekly time commitment?",
                  a: "The live cohort sessions require 2-3 hours per week for 8 weeks, plus self-paced work. The internship phase can be part-time or full-time based on your availability.",
                },
                {
                  q: "Are all sessions live? Are recordings available?",
                  a: "Yes, all sessions are conducted live for better interaction. However, recordings are available for participants who miss sessions or want to review content.",
                },
                {
                  q: "Is this program suitable for beginners?",
                  a: "Absolutely! This cohort is designed for anyone passionate about sports, regardless of prior experience in sponsorship. We cover fundamentals before diving into advanced topics.",
                },
                {
                  q: "How does the internship selection work?",
                  a: "All cohort participants who complete the live sessions successfully get the internship opportunity at KIBI Sports. Performance during the cohort determines project assignments.",
                },
                {
                  q: "Is placement guaranteed?",
                  a: "While we don't guarantee placements, we provide comprehensive career support including internship experience, portfolio building, PPO eligibility, and referrals to our hiring network.",
                },
                {
                  q: "What if I miss a session?",
                  a: "No worries! All sessions are recorded. You can catch up by watching the recording and reach out to mentors during office hours if you have questions.",
                },
                {
                  q: "How is this different from a regular sports management course?",
                  a: "This is cohort-based learning from a practitioner (not academic faculty), focused specifically on sponsorship. You work on real projects, get internship experience, and join a professional community—not just lectures and exams.",
                },
                {
                  q: "How will I know the fee and payment options?",
                  a: "Once you apply, download the brochure, or speak to a program advisor, we'll share detailed fee, payment plans, and scholarship options based on your profile. We do this to ensure you first understand the value, outcomes, and fit before deciding.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border rounded-xl px-6 shadow-soft">
                  <AccordionTrigger className="hover:no-underline font-semibold text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pb-2">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary-light to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6 text-primary-foreground">Ready to Start Your Sports Sponsorship Journey?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Applications for Cohort 01 are open. Limited seats. Eligibility and details shared after you apply.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent-hover text-lg px-8 py-6"
                data-event="apply_now_bottom_clicked"
              >
                <a href="https://payments.cashfree.com/forms/khelpreneurscohort1" target="_blank" rel="noopener noreferrer">
                  Apply Now
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                data-event="talk_to_advisor_clicked"
              >
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Talk to a Program Advisor
                </a>
              </Button>
            </div>
            <button
              onClick={handleDownloadBrochure}
              className="text-primary-foreground/90 hover:text-primary-foreground underline text-sm"
              data-event="download_brochure_bottom_clicked"
            >
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      {stickyVisible && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border shadow-strong z-40">
          <div className="flex gap-2">
            <Button
              asChild
              size="lg"
              className="flex-1 bg-accent hover:bg-accent-hover"
            >
              <a href="https://payments.cashfree.com/forms/khelpreneurscohort1" target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="flex-1"
            >
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default SportsSponsorship;
