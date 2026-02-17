import { Brain, Leaf, Shield, Zap, BarChart3, Globe } from 'lucide-react'
import type { ComponentType } from 'react'

type IconComponent = ComponentType<{ className?: string }>

export const siteConfig = {
  name: 'AetherLabs',
  tagline: 'Where Intelligence Meets Nature',
}

export const navigation = [
  { label: 'Features', href: '#features' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#faq' },
]

export const heroData = {
  badge: 'Powered by AI',
  headlineTop: 'Intelligence',
  headlineBottom: 'Meets Nature.',
  subline: 'AetherLabs harnesses the power of artificial intelligence to create sustainable, human-centred solutions for tomorrow\u2019s challenges.',
  primaryCTA: { label: 'Explore Platform', href: '#features' },
  secondaryCTA: { label: 'Watch Demo', href: '#solutions' },
  stats: [
    { value: '10K+', label: 'Users' },
    { value: '99.9%', label: 'Uptime' },
    { value: '150ms', label: 'Latency' },
  ],
}

export const logoCloud = ['TechCorp', 'GreenAI', 'DataFlow', 'NeuralNet', 'EcoSync', 'QuantumIO']

export interface Feature {
  icon: IconComponent
  title: string
  description: string
}

export const features: Feature[] = [
  { icon: Brain, title: 'Neural Processing', description: 'Advanced neural networks that learn and adapt to your unique operational patterns in real time.' },
  { icon: Leaf, title: 'Sustainable Tech', description: 'Carbon-neutral infrastructure powered by renewable energy sources and optimised algorithms.' },
  { icon: Shield, title: 'Zero-Trust Security', description: 'Enterprise-grade protection with end-to-end encryption and continuous threat monitoring.' },
  { icon: Zap, title: 'Real-Time Analytics', description: 'Instant insights from streaming data with sub-millisecond processing capabilities.' },
  { icon: BarChart3, title: 'Predictive Intelligence', description: 'Machine learning models that forecast trends and automate strategic decisions.' },
  { icon: Globe, title: 'Global Edge Network', description: 'Distributed computing across 40+ regions ensuring low latency worldwide.' },
]

export interface Solution {
  name: string
  subtitle: string
  description: string
  features: string[]
  icon: IconComponent
  image: string
}

export const solutions: Solution[] = [
  {
    name: 'AetherMind',
    subtitle: 'AI Analytics',
    description: 'Deep analytics platform that transforms raw data into actionable intelligence.',
    features: ['Real-time dashboards', 'Custom ML models', 'Automated reporting'],
    icon: Brain,
    image: '/solutions/aethermind.svg',
  },
  {
    name: 'AetherShield',
    subtitle: 'Security Suite',
    description: 'Comprehensive security platform protecting your digital infrastructure 24/7.',
    features: ['Threat detection', 'Incident response', 'Compliance automation'],
    icon: Shield,
    image: '/solutions/aethershield.svg',
  },
  {
    name: 'AetherFlow',
    subtitle: 'Workflow Automation',
    description: 'Intelligent automation that streamlines operations and eliminates bottlenecks.',
    features: ['Process orchestration', 'Smart routing', 'Integration hub'],
    icon: Zap,
    image: '/solutions/aetherflow.svg',
  },
]

export interface PricingPlan {
  name: string
  price: { monthly: string; yearly: string }
  description: string
  features: string[]
  highlighted: boolean
  cta: string
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Seed',
    price: { monthly: 'Free', yearly: 'Free' },
    description: 'For individuals exploring AI-powered solutions.',
    features: ['5 Projects', 'Basic Analytics', 'Community Support', '1GB Storage'],
    highlighted: false,
    cta: 'Start Free',
  },
  {
    name: 'Growth',
    price: { monthly: '\u00a379', yearly: '\u00a3758' },
    description: 'For growing teams that need advanced capabilities.',
    features: ['Unlimited Projects', 'Advanced Analytics', 'Priority Support', '100GB Storage', 'Custom Models', 'API Access'],
    highlighted: true,
    cta: 'Start Growing',
  },
  {
    name: 'Enterprise',
    price: { monthly: 'Custom', yearly: 'Custom' },
    description: 'For organisations requiring dedicated infrastructure.',
    features: ['Everything in Growth', 'Dedicated Cluster', '24/7 SLA', 'Custom Integrations', 'On-premise Option', 'Security Audit', 'Account Manager'],
    highlighted: false,
    cta: 'Contact Sales',
  },
]

export interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
}

export const testimonials: Testimonial[] = [
  {
    quote: 'AetherLabs transformed how we process and understand our data. The AI models are incredibly accurate and the platform is a joy to use.',
    name: 'Dr. Sarah Chen',
    role: 'CTO',
    company: 'BioGenesis',
  },
  {
    quote: 'The sustainability-first approach aligned perfectly with our values. We reduced our computing carbon footprint by 60% after switching.',
    name: 'Marcus Webb',
    role: 'Head of Engineering',
    company: 'EcoTech Solutions',
  },
  {
    quote: 'Their security suite caught threats our previous provider missed entirely. AetherShield is now a core part of our infrastructure.',
    name: 'Priya Patel',
    role: 'CISO',
    company: 'FinanceForward',
  },
]

export interface FAQItem {
  question: string
  answer: string
}

export const faqItems: FAQItem[] = [
  { question: 'How does AetherLabs ensure data privacy?', answer: 'We employ end-to-end encryption, zero-knowledge architecture, and are fully GDPR compliant. Your data never leaves your designated region without explicit consent.' },
  { question: 'What makes your AI models different?', answer: 'Our models are trained on curated, ethically sourced datasets and optimised for energy efficiency. They deliver state-of-the-art accuracy while using 40% less compute resources.' },
  { question: 'Can I integrate with my existing tools?', answer: 'Yes, we offer 200+ native integrations and a comprehensive REST API. Our webhook system enables real-time data synchronisation with virtually any platform.' },
  { question: 'What support options are available?', answer: 'Seed users get community support. Growth includes priority email and chat support with 4-hour response times. Enterprise customers receive 24/7 dedicated support with a named account manager.' },
  { question: 'Is there a free trial for paid plans?', answer: 'Absolutely. All paid plans include a 14-day free trial with full feature access. No credit card required to start.' },
  { question: 'How do you handle scaling?', answer: 'Our platform auto-scales based on demand. Whether you are processing 100 or 100 million requests, the infrastructure adapts seamlessly without any configuration changes.' },
]

export const footerSections = [
  { title: 'Product', links: ['Platform', 'Solutions', 'Integrations', 'API Docs'] },
  { title: 'Company', links: ['About', 'Careers', 'Blog', 'Press'] },
  { title: 'Resources', links: ['Documentation', 'Tutorials', 'Community', 'Status'] },
  { title: 'Legal', links: ['Privacy', 'Terms', 'Cookies', 'Licences'] },
]

export const socialLinks = [
  { label: 'Twitter', href: '#' },
  { label: 'GitHub', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'YouTube', href: '#' },
]
