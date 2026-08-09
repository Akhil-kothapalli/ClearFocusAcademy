import {
  Blocks,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Globe2,
  GraduationCap,
  LayoutDashboard,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  PenTool,
  Store,
  Target,
  TestTube2,
  Trophy,
  UserRoundCheck,
  Users,
  Workflow,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

export type IconItem = {
  title: string
  description: string
  icon: LucideIcon
}

export const processSteps: IconItem[] = [
  { title: 'Understand', description: 'Real-world requirements', icon: BrainCircuit },
  { title: 'Build', description: 'Develop real projects/products', icon: Blocks },
  { title: 'Test', description: 'Improve with AI assistance', icon: TestTube2 },
  { title: 'Deploy', description: 'Make the product usable', icon: Rocket },
  { title: 'Showcase', description: 'Build your portfolio', icon: Trophy },
  { title: 'Grow', description: 'Prepare for career opportunities', icon: ChartNoAxesCombined },
]

export const projectCards: IconItem[] = [
  { title: 'AI-Powered Web Applications', description: 'Build intelligent web applications using modern AI tools.', icon: Bot },
  { title: 'E-Commerce Platforms', description: 'Build complete shopping platforms with real business workflows.', icon: Store },
  { title: 'SaaS Products', description: 'Understand how real SaaS products are designed and developed.', icon: Cloud },
  { title: 'Dashboards & Analytics', description: 'Build professional dashboards and data-driven applications.', icon: LayoutDashboard },
  { title: 'Mobile & Web Applications', description: 'Create responsive applications for real-world use cases.', icon: Smartphone },
  { title: 'API-Integrated Systems', description: 'Build applications using APIs, integrations and external services.', icon: Workflow },
  { title: 'More Real-World Projects', description: 'Explore additional sample product/project categories as skills grow.', icon: Sparkles },
]

export const differentiators: IconItem[] = [
  { title: 'Real Projects', description: 'Build instead of only watching lectures.', icon: Code2 },
  { title: 'AI-Assisted Development', description: 'Learn how modern developers use AI tools responsibly.', icon: Bot },
  { title: 'Target-Oriented Learning', description: 'Every activity connects to a practical outcome.', icon: Target },
  { title: 'Industry-Relevant Skills', description: 'Focus on skills used in modern software development.', icon: ShieldCheck },
  { title: 'Portfolio Building', description: 'Create demonstrable projects.', icon: BriefcaseBusiness },
  { title: 'Career Focus', description: 'Build skills and confidence for real opportunities.', icon: UserRoundCheck },
]

export const tools = [
  { name: 'React', icon: Code2 },
  { name: 'Java', icon: Code2 },
  { name: 'Python', icon: Code2 },
  { name: 'Node.js', icon: Server },
  { name: 'Angular', icon: Blocks },
  { name: 'JavaScript', icon: Code2 },
  { name: 'TypeScript', icon: CheckCircle2 },
  { name: 'SQL', icon: Database },
  { name: 'Git', icon: GitBranch },
  { name: 'GitHub', icon: GitBranch },
  { name: 'Docker', icon: Blocks },
  { name: 'AWS', icon: Cloud },
  { name: 'Figma', icon: PenTool },
  { name: 'AI tools', icon: Sparkles },
  { name: 'Claude', icon: BrainCircuit },
  { name: 'OpenAI / ChatGPT', icon: Bot },
]

export const aiWorkflow = ['Problem', 'Architecture', 'AI Assistance', 'Code', 'Review', 'Test', 'Improve', 'Deploy']

export const learningTimeline = [
  ['01', 'Understand', 'Understand the problem.'],
  ['02', 'Plan', 'Design the solution.'],
  ['03', 'Build', 'Develop the product.'],
  ['04', 'Test', 'Find and fix issues.'],
  ['05', 'Deploy', 'Take the product live.'],
  ['06', 'Showcase', 'Build a portfolio and demonstrate your work.'],
]

export const audience: IconItem[] = [
  { title: 'Students', description: 'Start with product-building habits early.', icon: GraduationCap },
  { title: 'Freshers', description: 'Turn learning into demonstrable work.', icon: Users },
  { title: 'Working Professionals', description: 'Upgrade practical full stack capability.', icon: BriefcaseBusiness },
  { title: 'Career Switchers', description: 'Build confidence through guided outcomes.', icon: Globe2 },
  { title: 'Developers', description: 'Gain practical product-building experience.', icon: Wrench },
]

export const faqs = [
  ['Is this classroom-based training?', 'No. The program is designed around target-oriented learning, practical development and real project/product building.'],
  ['What is the Full Stack program duration?', '6 months.'],
  ['What is the Fast Track duration?', '3 Months.'],
  ['What is the inaugural Full Stack fee?', '₹29,999 for the first 10 students.'],
  ['What is the Fast Track offer fee?', '₹14,999 for the first 10 students.'],
  ['Do I need my own laptop?', 'Yes.'],
  ['Do I need a Claude subscription?', 'Yes.'],
  ['Will I build real projects?', 'The program is strongly focused on practical projects and product development.'],
  ['Is placement guaranteed?', 'No. Placement assistance is provided, but employment cannot be guaranteed.'],
]
