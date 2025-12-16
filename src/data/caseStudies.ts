import telecomImg from "@/assets/case-study-telecom.jpg";
import scrapingImg from "@/assets/case-study-scraping.jpg";
import assistantImg from "@/assets/case-study-assistant.jpg";
import voiceImg from "@/assets/case-study-voice.jpg";
import emailImg from "@/assets/case-study-email.jpg";
import ordersImg from "@/assets/case-study-orders.jpg";

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  image: string;
  problem: string;
  action: string;
  result: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-agents-us-telecom",
    title: "AI Agents for US Telecom",
    description: "Deploying intelligent agents to automate network monitoring and customer issue resolution.",
    image: telecomImg,
    problem: "A major US telecom provider faced mounting pressure from network outages and slow customer issue resolution. Their legacy monitoring systems couldn't keep pace with the complexity of modern infrastructure, leading to prolonged downtime and customer churn.",
    action: "We deployed a fleet of custom AI agents powered by advanced LLMs to continuously monitor network health, predict potential failures, and automatically resolve common customer issues. The agents integrate with existing ticketing systems and can escalate complex problems to human operators with full context.",
    result: "Reduced mean time to resolution (MTTR) by 65%. Automated 80% of Tier-1 customer issues without human intervention. Achieved 99.95% network uptime, saving the client an estimated $12M annually in prevented outages and reduced support costs."
  },
  {
    slug: "ai-data-scraping-platform",
    title: "AI-Powered Data Scraping Platform",
    description: "Building a scalable, intelligent platform to extract and structure complex web data.",
    image: scrapingImg,
    problem: "A market research firm needed to collect and structure data from thousands of disparate web sources daily. Manual scraping was error-prone, slow, and couldn't adapt to constantly changing website layouts.",
    action: "We built an intelligent scraping platform using custom AI agents that understand page semantics rather than relying on brittle CSS selectors. The system uses vision models to interpret layouts and LLMs to extract and normalize data into structured formats automatically.",
    result: "Increased data extraction accuracy to 99.5% across dynamic websites. Scaled from 500 to 50,000 pages processed daily. Reduced manual data cleaning effort by 90%, enabling the team to focus on analysis rather than data wrangling."
  },
  {
    slug: "collaborative-ai-assistant",
    title: "Collaborative Conversational AI Assistant",
    description: "Creating an internal assistant that automates workflows through natural language commands.",
    image: assistantImg,
    problem: "A Fortune 500 company struggled with siloed tools and manual processes across departments. Employees spent hours navigating multiple systems to complete routine tasks, leading to inefficiency and frustration.",
    action: "We developed a conversational AI assistant that integrates with the company's entire tool ecosystem—from CRM to ERP to HR systems. Employees can issue natural language commands to query data, generate reports, schedule meetings, and trigger multi-step workflows across systems.",
    result: "Reduced time spent on administrative tasks by 60%. Achieved 85% adoption rate within 3 months. Enabled cross-departmental collaboration that previously required manual coordination, saving an estimated 15,000 employee-hours per quarter."
  },
  {
    slug: "llm-voice-assistant-call-centers",
    title: "LLM Voice Assistant for Call Centers",
    description: "Implementing a voice AI to handle Tier-1 support, reducing wait times and agent load.",
    image: voiceImg,
    problem: "A national insurance company's call center was overwhelmed with volume, resulting in 20+ minute wait times and high agent turnover. Customer satisfaction scores were plummeting.",
    action: "We implemented an LLM-powered voice assistant capable of natural conversation, policy lookups, claim status updates, and payment processing. The system uses real-time speech recognition and synthesis with sub-second latency, seamlessly handing off complex cases to human agents.",
    result: "Reduced average wait time from 22 minutes to under 2 minutes. Automated 70% of inbound calls end-to-end. Improved customer satisfaction scores by 35% while reducing operational costs by 45%."
  },
  {
    slug: "rag-automated-email-response",
    title: "RAG for Automated Email Response",
    description: "Automating personalized, knowledge-based email responses using Retrieval-Augmented Generation.",
    image: emailImg,
    problem: "A B2B SaaS company received thousands of support and sales emails daily. Response times averaged 48 hours, and quality varied significantly based on which agent handled the inquiry.",
    action: "We built a RAG pipeline that indexes the company's entire knowledge base—documentation, past tickets, product specs, and policies. The system drafts contextually accurate, personalized email responses that agents can review and send with one click.",
    result: "Reduced average response time from 48 hours to 4 hours. Improved response accuracy to 95%, reducing follow-up emails by 60%. Enabled the support team to handle 3x the volume without additional headcount."
  },
  {
    slug: "ai-agent-order-recommendations",
    title: "AI Agent for Order Recommendations",
    description: "An autonomous agent that analyzes behavior to recommend and complete purchase journeys.",
    image: ordersImg,
    problem: "An e-commerce retailer had low conversion rates and high cart abandonment. Generic product recommendations failed to engage customers, and manual follow-ups couldn't scale.",
    action: "We deployed an AI agent that analyzes real-time browsing behavior, purchase history, and contextual signals to deliver hyper-personalized product recommendations. The agent can proactively engage via chat, email, or SMS to guide customers through the purchase journey.",
    result: "Increased conversion rates by 40%. Reduced cart abandonment by 55%. Lifted average order value by 25% through intelligent upselling and cross-selling, generating an additional $8M in annual revenue."
  }
];
