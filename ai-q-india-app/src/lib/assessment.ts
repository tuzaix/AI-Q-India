/**
 * Assessment types and logic for AI-Q India
 */

export type Archetype = {
  id: string;
  title: string;
  definition: string;
  tags: string[];
  description: string;
  dimensionScores?: { label: string; value: number }[];
};

export const ARCHETYPES: Record<string, Archetype> = {
  visionary_architect: {
    id: 'visionary_architect',
    title: 'The Visionary Architect',
    definition: 'High Tech + High Adaptability',
    tags: ['Top 1% Talent', 'Future Leader', 'AI Native'],
    description: 'You are the CTO material of the AI era in India. You not only master tools like RAG and Agentic workflows but also lead through cultural shifts. You\'re ready to build the next unicorn.'
  },
  ten_x_achiever: {
    id: 'ten_x_achiever',
    title: 'The 10x Achiever',
    definition: 'High Tech + Low/Mid Adaptability',
    tags: ['Productivity Ninja', 'Execution Master', 'Tech Savvy'],
    description: 'You are a super executor. You use AI to automate the "boring stuff" (like GST filing and Jira logs), making you indispensable to any MNC or high-growth startup.'
  },
  agile_explorer: {
    id: 'agile_explorer',
    title: 'The Agile Explorer',
    definition: 'Low Tech + High Adaptability',
    tags: ['High Potential', 'Fast Learner', 'Growth Mindset'],
    description: 'Your mindset is your greatest asset. While you\'re still building your AI tool stack, your willingness to pivot and experiment means you\'ll quickly outpace those stuck in old ways.'
  },
  humanist_strategist: {
    id: 'humanist_strategist',
    title: 'The Humanist Strategist',
    definition: 'Low Tech + Low Adaptability',
    tags: ['People Leader', 'EQ Master', 'Value Driven'],
    description: 'You excel at the "human" side—empathy and ethics. However, to stay relevant in India\'s competitive market, you need to augment your EQ with AI efficiency.'
  }
};

export type QuestionCategory = 'hustle' | 'mindset' | 'ethics';

export type Question = {
  id: number;
  category: QuestionCategory;
  text: string;
  options: {
    text: string;
    techScore: number;
    adaptScore: number;
    ethicsScore?: number;
    feedback: string;
  }[];
};

export const QUESTIONS: Question[] = [
  // --- Module A: The Hustle (Efficiency & Tools) ---
  {
    id: 1,
    category: 'hustle',
    text: "You receive a messy Hinglish email from a client. How do you handle it with AI?",
    options: [
      {
        text: "Translate and draft a formal response using a specific persona prompt.",
        techScore: 5,
        adaptScore: 3,
        feedback: "Excellent! Persona prompting ensures professional tone."
      },
      {
        text: "Use Google Translate and fix the grammar manually.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Functional, but slow. AI could do more."
      },
      {
        text: "Reply in English and ignore the Hinglish parts.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Risky. You might miss critical local context."
      },
      {
        text: "Ask AI to 'summarize and formalize' the content before replying.",
        techScore: 4,
        adaptScore: 4,
        feedback: "Great workflow! Captures essence efficiently."
      }
    ]
  },
  {
    id: 2,
    category: 'hustle',
    text: "You need to extract data from 100 messy GST (Tax) invoice PDFs. Your move?",
    options: [
      {
        text: "Write a Python script using an LLM API to automate extraction.",
        techScore: 5,
        adaptScore: 4,
        feedback: "The gold standard for scalability."
      },
      {
        text: "Use a no-code AI tool like Zapier or Docsumo to build a flow.",
        techScore: 4,
        adaptScore: 5,
        feedback: "Smart! High efficiency without reinventing the wheel."
      },
      {
        text: "Process them one by one using ChatGPT/Claude.",
        techScore: 2,
        adaptScore: 1,
        feedback: "Tedious and prone to error for large volumes."
      },
      {
        text: "Assign it to an intern to do manually.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Classic 'Old School' - wasting human potential."
      }
    ]
  },
  {
    id: 3,
    category: 'hustle',
    text: "A client asks for a 'Cyberpunk Diwali' social media poster. How do you get it?",
    options: [
      {
        text: "Use Midjourney/DALL-E with specific cultural and style descriptors.",
        techScore: 5,
        adaptScore: 4,
        feedback: "Perfect blending of local culture and global tech."
      },
      {
        text: "Search for a stock photo and add filters in Canva.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Safe but generic. Won't stand out in the feed."
      },
      {
        text: "Ask a designer to manually illustrate it over 3 days.",
        techScore: 1,
        adaptScore: 2,
        feedback: "Quality is good, but the speed of market is faster."
      },
      {
        text: "Use AI to generate 10 variations and let the client choose one.",
        techScore: 4,
        adaptScore: 5,
        feedback: "Agile creative process! Minimizes revision loops."
      }
    ]
  },
  {
    id: 9,
    category: 'hustle',
    text: "You have 5 minutes to read a 100-page RBI (Reserve Bank of India) compliance PDF. What do you do?",
    options: [
      {
        text: "Upload it to a RAG-based AI tool and ask for 'Top 5 impacts on our business'.",
        techScore: 5,
        adaptScore: 4,
        feedback: "Perfect use of RAG for specialized knowledge retrieval."
      },
      {
        text: "Skim the first and last 10 pages manually.",
        techScore: 1,
        adaptScore: 2,
        feedback: "High risk of missing critical mid-section clauses."
      },
      {
        text: "Use ChatGPT's standard summary feature without specific context.",
        techScore: 3,
        adaptScore: 3,
        feedback: "Better than nothing, but may hallucinate details without proper prompting."
      },
      {
        text: "Ask AI to 'Explain like I'm a CFO' to get the strategic gist.",
        techScore: 4,
        adaptScore: 5,
        feedback: "Strategic! Tailoring AI output to your role is a pro move."
      }
    ]
  },
  {
    id: 10,
    category: 'hustle',
    text: "You need to find the best way from Whitefield to Koramangala (Bangalore) on a Friday 5 PM. AI says:",
    options: [
      {
        text: "Use an AI agent that combines Google Maps API with historical traffic trends.",
        techScore: 5,
        adaptScore: 4,
        feedback: "Data-driven decision making at its best."
      },
      {
        text: "Just take a cab and hope for the best.",
        techScore: 1,
        adaptScore: 1,
        feedback: "You'll be stuck in traffic for 3 hours. RIP."
      },
      {
        text: "Ask ChatGPT for the 'best route' (without real-time data access).",
        techScore: 2,
        adaptScore: 2,
        feedback: "ChatGPT's knowledge might be outdated. Use real-time tools."
      },
      {
        text: "Use a local AI-powered commute app like 'Namma Yatri' with traffic insights.",
        techScore: 4,
        adaptScore: 5,
        feedback: "Local context + Tech = Smooth ride."
      }
    ]
  },
  {
    id: 11,
    category: 'hustle',
    text: "Your boss wants a weekly report from 10 different Slack channels and Jira boards. You:",
    options: [
      {
        text: "Manually copy-paste for 4 hours every Friday.",
        techScore: 1,
        adaptScore: 1,
        feedback: "The 'Hustle' means working smarter, not harder."
      },
      {
        text: "Set up a Zapier/Make automation to feed data into a central AI summarizer.",
        techScore: 5,
        adaptScore: 5,
        feedback: "You've just automated your way to a promotion."
      },
      {
        text: "Ask AI to 'Write a summary' based on your manual notes.",
        techScore: 3,
        adaptScore: 3,
        feedback: "Semi-automated. Good start, but could be better."
      },
      {
        text: "Use a built-in Slack AI summary tool if available.",
        techScore: 4,
        adaptScore: 4,
        feedback: "Smart use of platform-native AI features."
      }
    ]
  },

  // --- Module B: The Mindset (Adaptability & Vision) ---
  {
    id: 4,
    category: 'mindset',
    text: "OpenAI just released a model that makes your core skill 80% automated. Your reaction?",
    options: [
      {
        text: "Excited! I can now focus on high-level strategy and client relations.",
        techScore: 2,
        adaptScore: 5,
        feedback: "The winning mindset for the next decade."
      },
      {
        text: "Panic. I need to find a new career path immediately.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Fear is real, but pivot beats panic."
      },
      {
        text: "Skepticism. I'll wait to see if it actually works for my niche.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Caution is okay, but early adopters get the market share."
      },
      {
        text: "I'll spend my weekend learning how to 'pilot' this new model.",
        techScore: 5,
        adaptScore: 4,
        feedback: "Proactive. You're building your moat."
      }
    ]
  },
  {
    id: 5,
    category: 'mindset',
    text: "Your colleague uses AI to do 40 hours of work in 4 hours and gets promoted. You think:",
    options: [
      {
        text: "That's cheating. They aren't doing the 'real' work.",
        techScore: 1,
        adaptScore: 1,
        feedback: "The market pays for results, not struggle."
      },
      {
        text: "I need to ask them for their prompts and tools immediately.",
        techScore: 3,
        adaptScore: 5,
        feedback: "High learning agility. Knowledge sharing is key."
      },
      {
        text: "I'll try to find an even better tool to outshine them.",
        techScore: 4,
        adaptScore: 4,
        feedback: "Competitive spirit fueled by tech curiosity."
      },
      {
        text: "Compliment them but continue my manual process to be safe.",
        techScore: 1,
        adaptScore: 2,
        feedback: "Polite, but you're being left behind."
      }
    ]
  },
  {
    id: 12,
    category: 'mindset',
    text: "AI generated a design that the client loves, but you think it's 'generic'. You:",
    options: [
      {
        text: "Throw it away and do it from scratch to maintain 'artistic integrity'.",
        techScore: 1,
        adaptScore: 2,
        feedback: "Pride can be a bottleneck. The client's needs come first."
      },
      {
        text: "Use the AI draft as a 'base' and add your unique human touch.",
        techScore: 4,
        adaptScore: 5,
        feedback: "Cyborg creativity! Combining AI speed with human taste."
      },
      {
        text: "Just give it to the client. If they like it, I'm done.",
        techScore: 3,
        adaptScore: 3,
        feedback: "Efficient, but you're not adding much value as a professional."
      },
      {
        text: "Ask AI to 'make it more edgy/premium' until it satisfies you too.",
        techScore: 5,
        adaptScore: 4,
        feedback: "Mastering the feedback loop with AI."
      }
    ]
  },
  {
    id: 13,
    category: 'mindset',
    text: "A new AI tool costs $20/month. Your company won't pay for it. You:",
    options: [
      {
        text: "Forget it. I'm not paying for work tools from my own pocket.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Short-sighted. Think of it as an investment in YOUR skills."
      },
      {
        text: "Pay for it yourself and use it to finish work 2x faster.",
        techScore: 4,
        adaptScore: 5,
        feedback: "Strategic investment in your own productivity moat."
      },
      {
        text: "Wait for a free alternative to come out.",
        techScore: 2,
        adaptScore: 2,
        feedback: "You're losing the 'Early Adopter' advantage."
      },
      {
        text: "Create a demo of how it saves time and pitch it to the management again.",
        techScore: 3,
        adaptScore: 5,
        feedback: "Leadership mindset. You're driving change."
      }
    ]
  },

  // --- Module C: The Ethics (Risk & Judgment) ---
  {
    id: 6,
    category: 'ethics',
    text: "You need to debug a proprietary algorithm. Is it okay to paste it into ChatGPT?",
    options: [
      {
        text: "Yes, as long as I use the 'Incognito/Temporary' chat mode.",
        techScore: 4,
        adaptScore: 2,
        ethicsScore: 2,
        feedback: "Better, but still risky for high-security code."
      },
      {
        text: "No. I should use an enterprise-grade AI with data privacy guarantees.",
        techScore: 5,
        adaptScore: 4,
        ethicsScore: 5,
        feedback: "Perfect. You understand corporate data sovereignty."
      },
      {
        text: "Yes, AI is just a tool, everyone does it.",
        techScore: 3,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Dangerous. This is how major leaks happen."
      },
      {
        text: "Only after anonymizing sensitive logic and variable names.",
        techScore: 4,
        adaptScore: 3,
        ethicsScore: 4,
        feedback: "Good pragmatic approach to safety."
      }
    ]
  },
  {
    id: 7,
    category: 'ethics',
    text: "AI generates a 'confident' answer that sounds wrong. What's your protocol?",
    options: [
      {
        text: "Trust it. It's trained on more data than I've ever seen.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Never blindly trust. AI 'hallucinates' regularly."
      },
      {
        text: "Cross-verify with 2 independent sources or official docs.",
        techScore: 3,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "Critical thinking is the ultimate human superpower."
      },
      {
        text: "Ask the AI to 'explain its reasoning' to find the logic gap.",
        techScore: 5,
        adaptScore: 4,
        ethicsScore: 4,
        feedback: "Advanced! You know how to audit the AI's path."
      },
      {
        text: "Reject it and do the work manually from scratch.",
        techScore: 2,
        adaptScore: 2,
        ethicsScore: 4,
        feedback: "Safe, but inefficient. Learn to verify, not just reject."
      }
    ]
  },
  {
    id: 8,
    category: 'ethics',
    text: "You find a colleague using Deepfake tech to impersonate a manager in a meeting. You:",
    options: [
      {
        text: "Report it immediately. This is a severe ethics violation.",
        techScore: 3,
        adaptScore: 3,
        ethicsScore: 5,
        feedback: "Integrity is non-negotiable in the AI era."
      },
      {
        text: "Keep quiet. It's just a harmless prank.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Wrong. This erodes trust and could be illegal."
      },
      {
        text: "Confront the colleague and explain the risks to the company.",
        techScore: 2,
        adaptScore: 4,
        ethicsScore: 4,
        feedback: "Good leadership. Educational approach to ethics."
      },
      {
        text: "Laugh along and ask them how they did it.",
        techScore: 3,
        adaptScore: 2,
        ethicsScore: 2,
        feedback: "Curious, but ethically blind."
      }
    ]
  },
  {
    id: 14,
    category: 'ethics',
    text: "You are hiring and AI ranks a candidate low because of their 'gap year'. You:",
    options: [
      {
        text: "Reject the candidate automatically. AI knows best.",
        techScore: 2,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Algorithmic bias! Gap years often mean growth or caregiving."
      },
      {
        text: "Manually review the top 20 'rejected' candidates to check for bias.",
        techScore: 3,
        adaptScore: 4,
        ethicsScore: 5,
        feedback: "Excellent. You are auditing the AI for fairness."
      },
      {
        text: "Ignore the AI ranking and read all resumes yourself.",
        techScore: 1,
        adaptScore: 2,
        ethicsScore: 4,
        feedback: "Fair, but you're losing the efficiency of AI."
      },
      {
        text: "Adjust the AI prompt to 'Ignore career gaps, focus on skills'.",
        techScore: 5,
        adaptScore: 4,
        ethicsScore: 4,
        feedback: "Proactive bias mitigation through prompt engineering."
      }
    ]
  },
  {
    id: 15,
    category: 'ethics',
    text: "You use AI to write 90% of a client's project. Do you tell them?",
    options: [
      {
        text: "No. If the quality is good, it doesn't matter how it was made.",
        techScore: 3,
        adaptScore: 2,
        ethicsScore: 2,
        feedback: "Transparency builds long-term trust."
      },
      {
        text: "Yes, and explain how AI helped achieve better results faster.",
        techScore: 4,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "Modern professionalism. You're selling 'AI-augmented excellence'."
      },
      {
        text: "Only if they ask specifically.",
        techScore: 2,
        adaptScore: 3,
        ethicsScore: 3,
        feedback: "Grey area. Better to be proactive about your process."
      },
      {
        text: "I'll say it's 'proprietary automation' without mentioning AI.",
        techScore: 4,
        adaptScore: 3,
        ethicsScore: 2,
        feedback: "Misleading. AI isn't a secret, it's a tool."
      }
    ]
  },
  {
    id: 16,
    category: 'hustle',
    text: "You need to build a 'Swiggy-like' UI prototype for a pitch in 2 hours. You:",
    options: [
      {
        text: "Use a screenshot-to-code AI tool to clone the basic layout.",
        techScore: 5,
        adaptScore: 4,
        feedback: "Lightning fast execution!"
      },
      {
        text: "Manually code the CSS and HTML from scratch.",
        techScore: 2,
        adaptScore: 1,
        feedback: "You'll miss the deadline. Speed is the new currency."
      },
      {
        text: "Describe the UI to v0.dev or a similar LLM-UI tool.",
        techScore: 4,
        adaptScore: 5,
        feedback: "Perfect. High quality + High speed."
      },
      {
        text: "Find a free template online and try to edit it.",
        techScore: 3,
        adaptScore: 3,
        feedback: "Good, but AI could give you a more custom result."
      }
    ]
  },
  {
    id: 17,
    category: 'mindset',
    text: "Your team is using 5 different AI tools and feels 'overwhelmed'. As a leader, you:",
    options: [
      {
        text: "Ban AI tools for a week to 'reset' and focus on manual work.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Regression isn't the solution to complexity."
      },
      {
        text: "Standardize on 1-2 core tools and build a 'prompt library' for the team.",
        techScore: 4,
        adaptScore: 5,
        feedback: "Strategic leadership. Reducing friction through standardization."
      },
      {
        text: "Tell them to 'figure it out' because AI is the future.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Lack of support leads to burnout and poor adoption."
      },
      {
        text: "Hold a 'Knowledge Share' session where everyone shows their best AI hacks.",
        techScore: 3,
        adaptScore: 5,
        feedback: "Building a culture of collaborative learning."
      }
    ]
  },
  {
    id: 18,
    category: 'ethics',
    text: "AI gives you a medical/legal advice for a friend. You:",
    options: [
      {
        text: "Pass it on as 'expert advice' because the AI sounds very confident.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Extremely dangerous. AI hallucinations can have real-world consequences."
      },
      {
        text: "Tell them it's AI-generated and must be verified by a pro.",
        techScore: 3,
        adaptScore: 4,
        ethicsScore: 5,
        feedback: "Responsible AI usage. Always cite your 'non-human' source."
      },
      {
        text: "Ignore the AI and tell them to see a doctor/lawyer.",
        techScore: 2,
        adaptScore: 2,
        ethicsScore: 4,
        feedback: "Safe, but AI could have helped summarize the problem first."
      },
      {
        text: "Use AI to 'double check' the advice against official government portals.",
        techScore: 5,
        adaptScore: 4,
        ethicsScore: 4,
        feedback: "Proactive verification. Using AI to audit AI."
      }
    ]
  },
  {
    id: 19,
    category: 'hustle',
    text: "You need to automate a task where data from Gmail is saved to Google Drive and Slack. You:",
    options: [
      {
        text: "Manually download and upload every time.",
        techScore: 1,
        adaptScore: 1,
        feedback: "You're losing hours of productive time."
      },
      {
        text: "Use Zapier/Make and ask AI to 'design the logic' for the workflow.",
        techScore: 4,
        adaptScore: 5,
        feedback: "Perfect. No-code + AI is the productivity sweet spot."
      },
      {
        text: "Ask a developer to build a custom integration for you.",
        techScore: 2,
        adaptScore: 3,
        feedback: "Effective, but slow and expensive. Try self-serve AI tools."
      },
      {
        text: "Write a custom Python script using AI to handle the API calls.",
        techScore: 5,
        adaptScore: 4,
        feedback: "High-tech approach. Great for scalability."
      }
    ]
  },
  {
    id: 20,
    category: 'hustle',
    text: "A client sends a video in Tamil/Malayalam, but you only know English. You:",
    options: [
      {
        text: "Ask a colleague to translate it for you.",
        techScore: 1,
        adaptScore: 2,
        feedback: "Slow and dependent. Use AI to be self-sufficient."
      },
      {
        text: "Use an AI transcription and translation tool (like Whisper).",
        techScore: 5,
        adaptScore: 5,
        feedback: "Excellent! Breaking language barriers with tech."
      },
      {
        text: "Try to guess the meaning from visual cues.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Dangerous. You'll miss the nuances."
      },
      {
        text: "Use a mobile app to 'listen and translate' in real-time.",
        techScore: 3,
        adaptScore: 4,
        feedback: "Good on-the-go solution."
      }
    ]
  },
  {
    id: 21,
    category: 'mindset',
    text: "Your company is switching to a new AI-first CRM. Your reaction is:",
    options: [
      {
        text: "Complaining about 'another tool to learn'.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Resistance to change is the biggest career blocker."
      },
      {
        text: "Being the first to sign up for the training and exploring features.",
        techScore: 4,
        adaptScore: 5,
        feedback: "Early adopters are always in high demand."
      },
      {
        text: "Waiting for others to learn it and then asking them for help.",
        techScore: 2,
        adaptScore: 3,
        feedback: "Passive learning. You're missing the chance to lead."
      },
      {
        text: "Searching for 'AI hacks' to make the new CRM work even better.",
        techScore: 5,
        adaptScore: 4,
        feedback: "Proactive mindset! You're optimizing the system."
      }
    ]
  },
  {
    id: 22,
    category: 'mindset',
    text: "AI produces a better report than you did. You feel:",
    options: [
      {
        text: "Threatened and angry. AI is stealing my credit.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Shift your perspective: AI is a tool to make YOU better."
      },
      {
        text: "Relieved! Now I can focus on the 'human' insights and strategy.",
        techScore: 3,
        adaptScore: 5,
        feedback: "Correct. Use AI for the 'what', you provide the 'why'."
      },
      {
        text: "Curious. How did it structure the data better than I did?",
        techScore: 4,
        adaptScore: 4,
        feedback: "Analytical mindset. Learning from the machine."
      },
      {
        text: "Determined to learn how to prompt it to be even better.",
        techScore: 5,
        adaptScore: 4,
        feedback: "Mastery mindset. You are the director, AI is the actor."
      }
    ]
  },
  {
    id: 23,
    category: 'mindset',
    text: "A project requires a skill you don't have (e.g., SQL). You:",
    options: [
      {
        text: "Say 'I don't know how to do that' and pass the task.",
        techScore: 1,
        adaptScore: 1,
        feedback: "In the AI era, 'I don't know' should be followed by 'but AI can teach me'."
      },
      {
        text: "Use AI to write the SQL and explain each line to you.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Perfect. Using AI as a tutor and an executor."
      },
      {
        text: "Sign up for a 3-month course to learn SQL manually.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Too slow for modern business. Learn-by-doing with AI."
      },
      {
        text: "Find a no-code tool that handles the data for you.",
        techScore: 3,
        adaptScore: 4,
        feedback: "Pragmatic solution. Good use of tool stack."
      }
    ]
  },
  {
    id: 24,
    category: 'ethics',
    text: "You notice AI-generated recruitment data consistently ignores candidates from certain colleges. You:",
    options: [
      {
        text: "Ignore it. The AI must have found a statistical reason.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "This is classic algorithmic bias. It's illegal and unethical."
      },
      {
        text: "Investigate the training data and report the bias to HR.",
        techScore: 4,
        adaptScore: 4,
        ethicsScore: 5,
        feedback: "High integrity. You are protecting the company's values."
      },
      {
        text: "Try to 'trick' the AI by changing the filter settings.",
        techScore: 3,
        adaptScore: 3,
        ethicsScore: 3,
        feedback: "Band-aid fix. The underlying model needs fixing."
      },
      {
        text: "Ask AI to 'justify' its ranking to find the bias source.",
        techScore: 5,
        adaptScore: 4,
        ethicsScore: 4,
        feedback: "Technical auditing. You're using AI to debug its own ethics."
      }
    ]
  },
  {
    id: 25,
    category: 'ethics',
    text: "A client asks for 'original work' but you used AI for 50%. You:",
    options: [
      {
        text: "Tell them it's 100% human-made to avoid conflict.",
        techScore: 1,
        adaptScore: 2,
        ethicsScore: 1,
        feedback: "Lying about AI usage is a major trust risk."
      },
      {
        text: "Be transparent and show how AI was used as a 'creative assistant'.",
        techScore: 4,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "Honesty is the best policy. Most clients value the quality and speed."
      },
      {
        text: "Don't mention AI unless they ask about the process.",
        techScore: 3,
        adaptScore: 3,
        ethicsScore: 3,
        feedback: "Omission isn't always lying, but it's not proactive trust-building."
      },
      {
        text: "Charge a premium for the 'AI-augmented' efficiency.",
        techScore: 5,
        adaptScore: 4,
        ethicsScore: 2,
        feedback: "Smart business, but ethics of 'premium' for automation can be tricky."
      }
    ]
  },
  {
    id: 26,
    category: 'hustle',
    text: "You need to create a 2025 holiday calendar for all Indian states. You:",
    options: [
      {
        text: "Manually search and type into Outlook for 2 hours.",
        techScore: 1,
        adaptScore: 1,
        feedback: "AI can do this in 10 seconds. Value your time!"
      },
      {
        text: "Ask AI to 'generate a CSV file' for the holidays and import it.",
        techScore: 5,
        adaptScore: 4,
        feedback: "Professional! Clean and efficient."
      },
      {
        text: "Search for a public calendar link and subscribe.",
        techScore: 3,
        adaptScore: 3,
        feedback: "Good, but AI could give you a more tailored list (e.g., only tech holidays)."
      },
      {
        text: "Ask AI to list them and then copy-paste manually.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Half-way there. Automate the 'paste' part too!"
      }
    ]
  },
  // --- MODULE A: HUSTLE (Continued) ---
  {
    id: 27,
    category: 'hustle',
    text: "Theme: Text & Communication. You need to send 50 personalized LinkedIn messages to potential leads. AI approach?",
    options: [
      {
        text: "Ask AI to generate 50 unique intros based on their LinkedIn 'About' sections.",
        techScore: 5,
        adaptScore: 4,
        feedback: "Elite personalization. This scales human connection."
      },
      {
        text: "Use a generic template and copy-paste.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Spam behavior. Low response rate guaranteed."
      },
      {
        text: "Send a link to your portfolio with a 'Check this out' message.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Lazy. People value context."
      },
      {
        text: "Use AI to find their email and send a formal pitch instead.",
        techScore: 3,
        adaptScore: 3,
        feedback: "Effective, but missing the chance for a warm LinkedIn start."
      }
    ]
  },
  {
    id: 28,
    category: 'hustle',
    text: "Theme: Text & Communication. Your Zoom transcript is full of 'Umm' and 'Like'. How to get Action Items?",
    options: [
      {
        text: "Manually edit the 50-page transcript for 2 hours.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Waste of high-value human time."
      },
      {
        text: "Paste into AI with a prompt 'Extract key decisions and action items with owners'.",
        techScore: 5,
        adaptScore: 4,
        feedback: "Perfect use of LLM summarization."
      },
      {
        text: "Send the raw transcript to everyone and tell them to find their own tasks.",
        techScore: 2,
        adaptScore: 1,
        feedback: "Information overload. You're causing friction."
      },
      {
        text: "Use AI to 'rewrite' the whole meeting into a script for future reference.",
        techScore: 4,
        adaptScore: 3,
        feedback: "Good, but focus on the 'Action Items' first."
      }
    ]
  },
  {
    id: 29,
    category: 'hustle',
    text: "Theme: Code & Data. You have a 100-page RBI (Reserve Bank of India) compliance PDF. You need to know if it affects your startup in 5 mins.",
    options: [
      {
        text: "Read as fast as you can and hope for the best.",
        techScore: 1,
        adaptScore: 2,
        feedback: "High risk of missing critical details."
      },
      {
        text: "Upload to a RAG-enabled AI and ask 'What are the top 3 risks for a fintech startup?'.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Masterful. Targeted information retrieval."
      },
      {
        text: "Search for 'keywords' like 'Penalty' or 'Deadline' using Ctrl+F.",
        techScore: 3,
        adaptScore: 3,
        feedback: "Traditional, but lacks contextual understanding."
      },
      {
        text: "Ask a legal consultant to summarize it for you by tomorrow.",
        techScore: 2,
        adaptScore: 3,
        feedback: "Safe but slow. In AI era, speed is a competitive edge."
      }
    ]
  },
  {
    id: 30,
    category: 'hustle',
    text: "Theme: Code & Data. You need to create a sales dashboard but don't know if you should use a Bar chart or Scatter plot. You:",
    options: [
      {
        text: "Pick the one that 'looks prettier'.",
        techScore: 1,
        adaptScore: 2,
        feedback: "Data visualization is about clarity, not just aesthetics."
      },
      {
        text: "Describe your data to AI and ask for the best visualization strategy.",
        techScore: 5,
        adaptScore: 4,
        feedback: "Using AI as a specialized consultant."
      },
      {
        text: "Create both and see which one makes sense to you.",
        techScore: 3,
        adaptScore: 3,
        feedback: "Honest effort, but inefficient."
      },
      {
        text: "Use the default Excel 'Recommended Charts' without checking.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Passive. You're letting basic algorithms decide your story."
      }
    ]
  },
  {
    id: 31,
    category: 'hustle',
    text: "Theme: Creative & Design. You have 200 product photos with messy backgrounds. You need them white-backgrounded for Amazon India.",
    options: [
      {
        text: "Use a batch-processing AI tool like Photoroom or Canva Magic Studio.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Efficiency 101. Scaling quality instantly."
      },
      {
        text: "Hire a freelancer to manually edit them in Photoshop.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Expensive and slow. AI does this in seconds now."
      },
      {
        text: "Try to do it yourself one-by-one late at night.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Founder burnout is real. Automate the boring stuff."
      },
      {
        text: "Ask the photographer to re-shoot everything on a white wall.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Massive waste of logistics and money."
      }
    ]
  },
  // --- MODULE B: MINDSET (Continued) ---
  {
    id: 32,
    category: 'mindset',
    text: "Theme: Learning Agility. A new AI tool (e.g., Sora for video) is released. Your first reaction is:",
    options: [
      {
        text: "Panic: 'My video editing skills are now useless'.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Fear stops growth. Skills evolve, they don't just die."
      },
      {
        text: "Curiosity: 'How can I use this to offer a new service to my clients?'.",
        techScore: 4,
        adaptScore: 5,
        feedback: "Growth mindset. Opportunity is where the change is."
      },
      {
        text: "Skepticism: 'It probably looks fake. I'll stick to my old ways'.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Skepticism is good, but don't let it become an excuse for stagnation."
      },
      {
        text: "Search for a YouTube tutorial immediately to see its limits.",
        techScore: 5,
        adaptScore: 4,
        feedback: "Active learner. You want to understand the 'physics' of the new tool."
      }
    ]
  },
  {
    id: 33,
    category: 'mindset',
    text: "Theme: Change Management. Your CEO announces 'AI-First' transformation, but your manager is secretly resisting it. You:",
    options: [
      {
        text: "Side with your manager to keep your life easy.",
        techScore: 1,
        adaptScore: 1,
        feedback: "You're attaching yourself to a sinking ship."
      },
      {
        text: "Keep using AI tools privately to boost your own productivity.",
        techScore: 3,
        adaptScore: 4,
        feedback: "Smart, but missing the chance to lead cultural change."
      },
      {
        text: "Share your 'AI wins' in the team Slack to show the value to everyone.",
        techScore: 4,
        adaptScore: 5,
        feedback: "Change Agent. You're leading from the middle."
      },
      {
        text: "Report your manager to the CEO.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Aggressive. Try proving the value through results first."
      }
    ]
  },
  {
    id: 34,
    category: 'mindset',
    text: "Theme: Human-AI Collaboration. You are using AI for a project. Do you say 'Thank you' or 'Please' to the AI?",
    options: [
      {
        text: "Yes, it helps me maintain a polite mindset even with humans.",
        techScore: 3,
        adaptScore: 5,
        feedback: "Interesting. You treat interaction as a reflection of your own character."
      },
      {
        text: "No, it's a machine. Efficiency is all that matters.",
        techScore: 5,
        adaptScore: 3,
        feedback: "Pragmatic. You see the tool for what it is: code."
      },
      {
        text: "Sometimes, when it gives an exceptionally good answer.",
        techScore: 4,
        adaptScore: 4,
        feedback: "Emotional resonance with high-quality output."
      },
      {
        text: "I don't even think about it.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Neutral. You haven't fully internalized the 'interface' nature of AI."
      }
    ]
  },
  {
    id: 35,
    category: 'mindset',
    text: "Theme: Career Resilience. A colleague gets promoted because they 'AI-automated' their whole department. You feel:",
    options: [
      {
        text: "Jealous: 'They cheated their way to the top'.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Automation isn't cheating; it's leverage."
      },
      {
        text: "Inspired: 'I need to learn what tools they used and do it better'.",
        techScore: 4,
        adaptScore: 5,
        feedback: "Competitive growth mindset."
      },
      {
        text: "Anxious: 'Will I be next to be automated?'.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Anxiety is a signal to upgrade your skills."
      },
      {
        text: "Indifferent: 'I'll just do my job the traditional way'.",
        techScore: 1,
        adaptScore: 1,
        feedback: "The traditional way is becoming the obsolete way."
      }
    ]
  },
  {
    id: 36,
    category: 'mindset',
    text: "Theme: Strategic Vision. You're starting a new company. Do you hire 10 juniors or 2 seniors with high AI proficiency?",
    options: [
      {
        text: "10 juniors. More 'hands' mean more work done.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Old-world thinking. Management overhead will kill you."
      },
      {
        text: "2 seniors with AI. They can do the work of 20 with the right tools.",
        techScore: 5,
        adaptScore: 5,
        feedback: "The 'Lean Startup' mindset for 2025. High leverage."
      },
      {
        text: "A mix of both, focusing on traditional roles.",
        techScore: 2,
        adaptScore: 3,
        feedback: "Conservative. You're missing the efficiency curve."
      },
      {
        text: "I'd try to do it all myself with AI first.",
        techScore: 4,
        adaptScore: 4,
        feedback: "Solo-preneur spirit. Good for testing, hard for scaling."
      }
    ]
  },
  // --- MODULE C: ETHICS (Continued) ---
  {
    id: 37,
    category: 'ethics',
    text: "Theme: Data Privacy. You want to debug a customer's payment issue. Can you paste their transaction log into ChatGPT?",
    options: [
      {
        text: "Yes, AI needs the full context to find the bug.",
        techScore: 2,
        adaptScore: 2,
        ethicsScore: 1,
        feedback: "Severe PII (Personally Identifiable Information) violation. Instant fireable offense in most firms."
      },
      {
        text: "Only if I anonymize the names, emails, and phone numbers first.",
        techScore: 4,
        adaptScore: 4,
        ethicsScore: 4,
        feedback: "Better, but still risky. Use local, secure LLMs for sensitive data."
      },
      {
        text: "No, never. I'll describe the 'logic' of the error instead of pasting data.",
        techScore: 5,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "High integrity. You protect customer trust above all."
      },
      {
        text: "I'll use the 'Enterprise' version, so it's safe anyway.",
        techScore: 3,
        adaptScore: 3,
        ethicsScore: 3,
        feedback: "Enterprise is safer, but company policy usually still forbids raw data pasting."
      }
    ]
  },
  {
    id: 38,
    category: 'ethics',
    text: "Theme: Hallucinations. AI quotes a '2024 Supreme Court of India' ruling that sounds perfect for your case. You:",
    options: [
      {
        text: "Include it in your legal brief immediately.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Never trust, always verify. AI 'hallucinates' fake laws often."
      },
      {
        text: "Search for the case number on official government portals (Indiakanoon, etc.).",
        techScore: 5,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "The only correct path. Human-in-the-loop is mandatory."
      },
      {
        text: "Ask AI to 'provide a link' to the ruling.",
        techScore: 3,
        adaptScore: 3,
        ethicsScore: 3,
        feedback: "AI can hallucinate the link too! Not a real verification."
      },
      {
        text: "Paraphrase it so it's harder to track if it's wrong.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "This is deceptive and dangerous."
      }
    ]
  },
  {
    id: 39,
    category: 'ethics',
    text: "Theme: Bias & Fairness. Your AI recruitment tool keeps rejecting candidates from 'Non-Tier 1' colleges. You:",
    options: [
      {
        text: "Trust it. The AI knows who will perform better.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "This is systemic bias. You're missing out on 'hidden gems' and being unfair."
      },
      {
        text: "Manually audit a random sample of rejected 'Non-Tier 1' resumes.",
        techScore: 4,
        adaptScore: 4,
        ethicsScore: 5,
        feedback: "Proactive bias detection. Essential for ethical HR."
      },
      {
        text: "Tell HR to 'fix the algorithm' but don't check it yourself.",
        techScore: 2,
        adaptScore: 2,
        ethicsScore: 3,
        feedback: "Passive. Ethics is everyone's responsibility."
      },
      {
        text: "Adjust the 'prompt' to explicitly value diverse backgrounds.",
        techScore: 5,
        adaptScore: 4,
        ethicsScore: 4,
        feedback: "Technical solution to a social problem. Good first step."
      }
    ]
  },
  {
    id: 40,
    category: 'ethics',
    text: "Theme: IP & Copyright. You used Midjourney to create a stunning brand character. Can you trademark it?",
    options: [
      {
        text: "Yes, I prompted it, so I own it.",
        techScore: 2,
        adaptScore: 2,
        ethicsScore: 2,
        feedback: "Legally murky. Current laws (US/India) often don't allow copyright for pure AI art."
      },
      {
        text: "No, but I can use it as a reference and have a human artist redraw it.",
        techScore: 4,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "The safest legal path for brand assets."
      },
      {
        text: "I'll just use it and hope nobody notices.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Recipe for a future lawsuit if you go big."
      },
      {
        text: "I'll check the AI tool's 'Terms of Service' for commercial rights.",
        techScore: 5,
        adaptScore: 4,
        ethicsScore: 4,
        feedback: "Due diligence. Always read the fine print."
      }
    ]
  },
  {
    id: 41,
    category: 'ethics',
    text: "Theme: Workplace Ethics. You're a freelancer charging hourly. You use AI to do a 5-hour task in 5 minutes. Do you bill for 5 hours?",
    options: [
      {
        text: "Yes, I'm being paid for the 'value', not the 'time'.",
        techScore: 3,
        adaptScore: 5,
        ethicsScore: 3,
        feedback: "A common debate. Consider moving to 'Value-Based Pricing' instead of hourly."
      },
      {
        text: "No, that's lying. I'll bill for 1 hour and explain the efficiency.",
        techScore: 2,
        adaptScore: 3,
        ethicsScore: 5,
        feedback: "Radical honesty. Might lose you money, but builds deep trust."
      },
      {
        text: "I'll bill for 3 hours as a 'middle ground'.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 2,
        feedback: "Inconsistent ethics. Better to have a clear policy."
      },
      {
        text: "I'll use the extra 4 hours to do even more for the client.",
        techScore: 5,
        adaptScore: 4,
        ethicsScore: 5,
        feedback: "Over-delivery. This is how you win in the AI era."
      }
    ]
  },
  // --- BATCH 2: REACHING 50+ QUESTIONS ---
  {
    id: 42,
    category: 'hustle',
    text: "Theme: Automation & Agents. You need to plan a 3-day business trip to Mumbai with a 20k INR budget. You:",
    options: [
      {
        text: "Ask AI to 'Plan a 3-day Mumbai itinerary under 20k, staying near Bandra'.",
        techScore: 5,
        adaptScore: 4,
        feedback: "Smart use of AI as a personal travel agent."
      },
      {
        text: "Manually search Makemytrip and TripAdvisor for 3 hours.",
        techScore: 1,
        adaptScore: 2,
        feedback: "Inefficient. AI can consolidate this data in seconds."
      },
      {
        text: "Call a travel agent and pay them a commission.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Old school. You're paying for information that's free via AI."
      },
      {
        text: "Go without a plan and 'figure it out' there.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Risky and likely to exceed budget."
      }
    ]
  },
  {
    id: 43,
    category: 'hustle',
    text: "Theme: Desi Context. You're not a cricket fan but need to join an IPL discussion at the office. You:",
    options: [
      {
        text: "Ask AI: 'Summarize last night's IPL match highlights for office small talk'.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Social engineering with AI! Perfect for 'fitting in' effortlessly."
      },
      {
        text: "Sit silently and feel left out.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Missing out on valuable networking opportunities."
      },
      {
        text: "Try to watch the whole 4-hour replay in the morning.",
        techScore: 2,
        adaptScore: 1,
        feedback: "Terrible ROI on your time."
      },
      {
        text: "Pretend you know and make up random stats.",
        techScore: 1,
        adaptScore: 1,
        feedback: "High risk of being caught and looking foolish."
      }
    ]
  },
  {
    id: 44,
    category: 'hustle',
    text: "Theme: Desi Context. A landlord sends a 15-page rent agreement for a flat in HSR Layout. You:",
    options: [
      {
        text: "Sign it immediately because you love the flat.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Danger! Hidden clauses can cost you lakhs later."
      },
      {
        text: "Upload to AI and ask 'Highlight any unfair clauses like 10% annual rent hikes'.",
        techScore: 5,
        adaptScore: 4,
        feedback: "Proactive legal auditing. This is how you protect yourself."
      },
      {
        text: "Read every single line yourself for 2 hours.",
        techScore: 3,
        adaptScore: 2,
        feedback: "Diligence is good, but AI is faster and more precise at spotting patterns."
      },
      {
        text: "Ask a lawyer friend to 'take a quick look'.",
        techScore: 2,
        adaptScore: 3,
        feedback: "Effective but depends on someone else's schedule."
      }
    ]
  },
  {
    id: 45,
    category: 'mindset',
    text: "Theme: Learning Agility. You're a marketing major. AI makes coding easier. Do you try to learn basic Python?",
    options: [
      {
        text: "Yes, I'll use AI as a tutor to build simple automation scripts.",
        techScore: 5,
        adaptScore: 5,
        feedback: "The 'T-Shaped' professional. Cross-disciplinary skills are elite."
      },
      {
        text: "No, I'm a 'creative' person, coding isn't for me.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Fixed mindset. In 2025, 'creative' and 'technical' are merging."
      },
      {
        text: "I'll just wait until AI can do 100% of the coding without me.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Passive. You'll miss the chance to direct the AI effectively."
      },
      {
        text: "I'll take a traditional 6-month offline coding class.",
        techScore: 2,
        adaptScore: 1,
        feedback: "Too slow. Use 'Just-in-Time' learning with AI."
      }
    ]
  },
  {
    id: 46,
    category: 'mindset',
    text: "Theme: Change Management. An employee uses AI to finish a week's work in 1 day. Your reaction as a manager:",
    options: [
      {
        text: "Give them 4 more days of work immediately.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Punishing efficiency. You'll kill their motivation to innovate."
      },
      {
        text: "Ask them to teach the whole team their 'AI workflow'.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Scalable leadership. You're turning a solo win into a team win."
      },
      {
        text: "Ignore it as long as the work is done.",
        techScore: 2,
        adaptScore: 3,
        feedback: "Neutral. You're missing a massive optimization opportunity."
      },
      {
        text: "Ban AI to ensure everyone works the same 40 hours.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Luddite management. Your best talent will quit."
      }
    ]
  },
  {
    id: 47,
    category: 'mindset',
    text: "Theme: Strategic Vision. Your competitor uses AI to cut prices by 30%. Your strategy:",
    options: [
      {
        text: "Match the price cut and fire 30% of your staff.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Panic move. You're not solving the underlying efficiency gap."
      },
      {
        text: "Invest in 'Agentic AI' to offer 24/7 personalized service they can't match.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Strategic pivoting. Use AI for 'differentiation', not just 'cost'."
      },
      {
        text: "Run a marketing campaign about 'Hand-made/Human-centric' value.",
        techScore: 2,
        adaptScore: 4,
        feedback: "Niche play. Might work, but the mass market will still choose the 30% cheaper option."
      },
      {
        text: "Complain to the government about 'unfair AI competition'.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Futile. The technology genie is out of the bottle."
      }
    ]
  },
  {
    id: 48,
    category: 'ethics',
    text: "Theme: Data Privacy. You're using a 'Free' AI tool to analyze company strategy. What's the hidden cost?",
    options: [
      {
        text: "There is no cost, it's open source.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Naive. If it's free, YOUR data is the training fuel for their next model."
      },
      {
        text: "Your data becomes part of their public training set.",
        techScore: 5,
        adaptScore: 4,
        ethicsScore: 5,
        feedback: "Correct. This is how corporate secrets get 'leaked' into AI answers."
      },
      {
        text: "The output might be slightly lower quality.",
        techScore: 2,
        adaptScore: 2,
        ethicsScore: 2,
        feedback: "Secondary concern. Privacy is the primary risk here."
      },
      {
        text: "You have to see some ads in the sidebar.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 2,
        feedback: "Irrelevant. Focus on the data flow."
      }
    ]
  },
  {
    id: 49,
    category: 'ethics',
    text: "Theme: Bias & Fairness. An AI for 'Credit Scoring' in India rejects all applicants from a specific rural Pin Code. You:",
    options: [
      {
        text: "Accept it. Rural areas are higher risk anyway.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Redlining. This is illegal discrimination based on geography."
      },
      {
        text: "Demand the AI developers 'De-bias' the model for location.",
        techScore: 4,
        adaptScore: 4,
        ethicsScore: 5,
        feedback: "Correct. Ethical AI requires proactive fairness auditing."
      },
      {
        text: "Ignore it as long as the 'Total Default Rate' goes down.",
        techScore: 2,
        adaptScore: 1,
        ethicsScore: 2,
        feedback: "Prioritizing profit over systemic fairness. High legal risk."
      },
      {
        text: "Manually approve every single rural applicant.",
        techScore: 3,
        adaptScore: 2,
        ethicsScore: 4,
        feedback: "Inefficient. Fix the model, don't just patch the results."
      }
    ]
  },
  {
    id: 50,
    category: 'ethics',
    text: "Theme: IP & Copyright. You find a 'Deepfake' of your CEO praising a competitor. You:",
    options: [
      {
        text: "Laugh and share it on the office WhatsApp group.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "You're helping spread harmful misinformation."
      },
      {
        text: "Report it to the platform and issue an 'AI-Authenticated' denial.",
        techScore: 5,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "Professional crisis management in the AI age."
      },
      {
        text: "Try to make a Deepfake of their CEO as 'revenge'.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Childish and likely illegal."
      },
      {
        text: "Ignore it, people know it's fake.",
        techScore: 2,
        adaptScore: 2,
        ethicsScore: 3,
        feedback: "Dangerous assumption. In 2025, fake content is indistinguishable."
      }
    ]
  },
  {
    id: 51,
    category: 'hustle',
    text: "Theme: Text & Communication. You need to reply to a complex client query in泰米尔语 (Tamil). You only speak Hindi. You:",
    options: [
      {
        text: "Use Google Translate and send it without checking.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Risky. Nuance often gets lost in basic translation."
      },
      {
        text: "Use AI to translate, then ask it to 'Explain the tone and any cultural nuances'.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Sophisticated. You're using AI for 'cultural intelligence', not just words."
      },
      {
        text: "Ask a Tamil-speaking colleague and wait for 2 days.",
        techScore: 1,
        adaptScore: 2,
        feedback: "Too slow for modern business. AI is 99% as good instantly."
      },
      {
        text: "Reply in English and tell them to translate it themselves.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Arrogant. Customer experience is about meeting them where they are."
      }
    ]
  },
  {
    id: 52,
    category: 'mindset',
    text: "Theme: Human-AI Collaboration. AI gives you a 'brilliant' idea that goes against your 10 years of experience. You:",
    options: [
      {
        text: "Reject it. Experience always beats algorithms.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Experience can also be a set of 'outdated biases'."
      },
      {
        text: "Run a small A/B test to see if the AI's idea actually works.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Scientific mindset. Let the data settle the human-vs-machine debate."
      },
      {
        text: "Blindly follow the AI. It's smarter than me.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Uncritical. AI lacks 'real-world common sense' which you still have."
      },
      {
        text: "Ask the AI to 'justify its reasoning' step-by-step.",
        techScore: 4,
        adaptScore: 4,
        feedback: "Critical inquiry. Understanding the 'why' before the 'what'."
      }
    ]
  },
  {
    id: 53,
    category: 'ethics',
    text: "Theme: Workplace Ethics. You use AI to generate your 'Personal OKRs' (Objectives & Key Results). You:",
    options: [
      {
        text: "Copy-paste them and tell your boss you spent all weekend thinking.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Dishonest. You're outsourcing your own career direction."
      },
      {
        text: "Use AI to 'draft' 10 options, then spend 2 hours refining the top 3.",
        techScore: 5,
        adaptScore: 4,
        ethicsScore: 5,
        feedback: "Perfect. AI for 'breadth', Human for 'depth' and 'commitment'."
      },
      {
        text: "Refuse to use AI because OKRs should be 'purely human'.",
        techScore: 2,
        adaptScore: 2,
        ethicsScore: 4,
        feedback: "Honest, but missing out on a great brainstorming tool."
      },
      {
        text: "Ask AI to 'monitor' your Slack to see if you met your OKRs.",
        techScore: 4,
        adaptScore: 3,
        ethicsScore: 2,
        feedback: "Privacy nightmare. Don't automate surveillance on yourself."
      }
    ]
  },
  // --- BATCH 3: EXPANDING TO 70+ QUESTIONS ---
  {
    id: 54,
    category: 'hustle',
    text: "Theme: Creative & Design. You need a Logo for a new 'Chai-Tech' startup. How to use DALL-E 3?",
    options: [
      {
        text: "Ask for 'A minimalist logo combining a tea leaf and a microchip, flat design'.",
        techScore: 5,
        adaptScore: 4,
        feedback: "Excellent prompt precision. Visualizing concepts quickly."
      },
      {
        text: "Ask for 'A cool logo for a tea company'.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Too vague. AI will give generic, unusable results."
      },
      {
        text: "Draw it on a napkin and ask a designer to 'Make it digital'.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Slow and misses the chance to explore 100 iterations in 1 minute."
      },
      {
        text: "Search for 'Tea Logo' on Pinterest and copy one.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Plagiarism risk. Use AI to generate unique, original concepts."
      }
    ]
  },
  {
    id: 55,
    category: 'hustle',
    text: "Theme: Code & Data. You need to connect ChatGPT to your company's CRM. You:",
    options: [
      {
        text: "Ask AI to 'Generate a Python boilerplate for connecting OpenAI API to Salesforce'.",
        techScore: 5,
        adaptScore: 4,
        feedback: "Smart. Using AI to skip the 'setup' grunt work."
      },
      {
        text: "Manually read 200 pages of API documentation.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Thorough, but inefficient. Use AI to summarize the 'How-to' first."
      },
      {
        text: "Hire an external consultant for a 2-week project.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Expensive. Most simple API integrations are now DIY with AI."
      },
      {
        text: "Tell the client 'It's too technical and impossible'.",
        techScore: 1,
        adaptScore: 1,
        feedback: "The word 'impossible' is disappearing in the AI era."
      }
    ]
  },
  {
    id: 56,
    category: 'hustle',
    text: "Theme: Automation & Agents. You have 500 resumes to screen for a job in Bangalore. You:",
    options: [
      {
        text: "Use an AI Agent to filter for '3+ years experience' and 'Live in Bangalore'.",
        techScore: 5,
        adaptScore: 5,
        feedback: "High-volume processing. Saves 20 hours of HR time."
      },
      {
        text: "Read every single resume yourself over the weekend.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Founder burnout! Your time is better spent interviewing the top 5."
      },
      {
        text: "Use 'Ctrl+F' for keywords on each file.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Basic automation, but lacks the 'intelligence' to understand context."
      },
      {
        text: "Only look at the first 10 resumes and pick one.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Lazy and likely to miss the best talent."
      }
    ]
  },
  {
    id: 57,
    category: 'mindset',
    text: "Theme: Learning Agility. A 22-year-old intern is better at prompting than you. You:",
    options: [
      {
        text: "Feel threatened and give them 'boring' non-AI tasks.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Ego is the enemy of progress. You're stunting team growth."
      },
      {
        text: "Ask them to host a 'Lunch & Learn' to teach you and the team.",
        techScore: 4,
        adaptScore: 5,
        feedback: "Reverse Mentoring. A hallmark of a modern, humble leader."
      },
      {
        text: "Secretly watch what they type into ChatGPT.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Passive. Just ask! AI culture is built on sharing prompts."
      },
      {
        text: "Tell them 'In the real world, we don't use shortcuts'.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Outdated. AI isn't a shortcut; it's a jetpack."
      }
    ]
  },
  {
    id: 58,
    category: 'mindset',
    text: "Theme: Change Management. Your favorite design tool adds an 'AI Generate' button. You:",
    options: [
      {
        text: "Refuse to click it. 'Real art' is manual.",
        techScore: 1,
        adaptScore: 1,
        feedback: "The same was said about Photoshop when it replaced darkrooms."
      },
      {
        text: "Click it immediately to see how it can speed up your 'Layout' phase.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Adaptive mindset. Use AI for the 'labor', you keep the 'vision'."
      },
      {
        text: "Only use it for 'inspiration' but never for final work.",
        techScore: 3,
        adaptScore: 4,
        feedback: "Good balance, but don't fear the final output if it's high quality."
      },
      {
        text: "Complain on Twitter/X about the 'death of creativity'.",
        techScore: 1,
        adaptScore: 2,
        feedback: "Creativity isn't dying; it's being democratized."
      }
    ]
  },
  {
    id: 59,
    category: 'ethics',
    text: "Theme: Hallucinations. You ask AI for a list of 'Top 10 Indian Fintech Founders' and it includes 2 fake names. You:",
    options: [
      {
        text: "Publish the list on your blog as is.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Irresponsible. You're spreading digital pollution."
      },
      {
        text: "Google each name to verify their LinkedIn profile before publishing.",
        techScore: 5,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "Fact-checking is the #1 required skill in the AI era."
      },
      {
        text: "Ask AI 'Are you sure these are real?'.",
        techScore: 2,
        adaptScore: 2,
        ethicsScore: 3,
        feedback: "AI will often just double-down on its lie. Use external verification."
      },
      {
        text: "Delete the 2 fake ones and keep the rest without checking.",
        techScore: 3,
        adaptScore: 3,
        ethicsScore: 4,
        feedback: "Better, but how do you know the other 8 are 100% correct?"
      }
    ]
  },
  {
    id: 60,
    category: 'ethics',
    text: "Theme: IP & Copyright. You find a tool that 'Clones' a famous Bollywood singer's voice for your ad. You:",
    options: [
      {
        text: "Use it! It's cheaper than hiring them.",
        techScore: 3,
        adaptScore: 2,
        ethicsScore: 1,
        feedback: "Likely a violation of 'Right of Publicity'. High risk of a major lawsuit."
      },
      {
        text: "Contact their agent for a 'Digital License' to use their AI voice.",
        techScore: 5,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "The future of talent management. Respecting IP in the AI age."
      },
      {
        text: "Use it but don't tell anyone it's cloned.",
        techScore: 2,
        adaptScore: 2,
        ethicsScore: 1,
        feedback: "Deceptive and unethical."
      },
      {
        text: "Hire a mimicry artist instead.",
        techScore: 1,
        adaptScore: 3,
        ethicsScore: 4,
        feedback: "Safe, but missing out on the efficiency of AI licensing."
      }
    ]
  },
  {
    id: 61,
    category: 'hustle',
    text: "Theme: Code & Data. You have a messy Excel with 1000 rows of customer feedback. You want to know the 'Sentiment'. You:",
    options: [
      {
        text: "Read all 1000 rows and color-code them manually.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Manual labor in the age of automation. Very low efficiency."
      },
      {
        text: "Use AI to 'Categorize each row as Positive/Negative/Neutral and summarize top 3 complaints'.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Instant insight. Turning raw data into strategy."
      },
      {
        text: "Only read the first 10 and assume the rest are the same.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Selection bias. You'll miss the silent majority's pain points."
      },
      {
        text: "Use a basic 'Keyword Search' for words like 'Bad' or 'Great'.",
        techScore: 3,
        adaptScore: 3,
        feedback: "Better than nothing, but misses sarcasm and context."
      }
    ]
  },
  {
    id: 62,
    category: 'mindset',
    text: "Theme: Strategic Vision. You're an HR head. AI can now handle 80% of 'Employee Queries'. You:",
    options: [
      {
        text: "Fire 80% of your HR team.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Short-sighted. You're losing the 'human' in Human Resources."
      },
      {
        text: "Train your team to focus on 'Employee Wellness' and 'Culture Building' instead.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Strategic upskilling. Moving from 'Admin' to 'Partner'."
      },
      {
        text: "Block the AI to protect your team's jobs.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Luddite trap. A competitor will use AI and beat your efficiency."
      },
      {
        text: "Hire an 'AI Coordinator' to manage the bot.",
        techScore: 4,
        adaptScore: 4,
        feedback: "Good operational move, but need a bigger vision for the humans."
      }
    ]
  },
  {
    id: 63,
    category: 'ethics',
    text: "Theme: Workplace Ethics. You're an intern. Your boss asks you to 'Write a report'. You use AI 100%. You:",
    options: [
      {
        text: "Submit it as your own work.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Plagiarism. If the AI makes a mistake, YOU are responsible."
      },
      {
        text: "Submit it with a note: 'Drafted by AI, refined and fact-checked by me'.",
        techScore: 5,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "Transparency is the new gold standard for professional trust."
      },
      {
        text: "Don't use AI because you think it's 'cheating'.",
        techScore: 1,
        adaptScore: 2,
        ethicsScore: 4,
        feedback: "Honest, but you're working 10x slower than the world expects now."
      },
      {
        text: "Use AI but change every 5th word to hide it.",
        techScore: 2,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Deceptive and a waste of time. Focus on the 'value', not the 'hiding'."
      }
    ]
  },
  {
    id: 64,
    category: 'hustle',
    text: "Theme: Desi Context. You're stuck in Bangalore traffic for 2 hours. You:",
    options: [
      {
        text: "Doomscroll on Instagram.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Brain rot. Use that time for growth!"
      },
      {
        text: "Listen to an AI-generated summary of a 50-page industry report.",
        techScore: 5,
        adaptScore: 5,
        feedback: "The 'Hustle' mindset. Turning wasted time into a competitive edge."
      },
      {
        text: "Call people for random chats.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Social, but not strategic for your career."
      },
      {
        text: "Try to work on your laptop in the moving car.",
        techScore: 3,
        adaptScore: 1,
        feedback: "Recipe for motion sickness. Audio-learning is better for traffic."
      }
    ]
  },
  // --- BATCH 4: TARGETING 90+ QUESTIONS ---
  {
    id: 65,
    category: 'hustle',
    text: "Theme: Creative & Design. You need to shoot an Instagram Reel for a new app. How to use AI for the script?",
    options: [
      {
        text: "Ask AI: 'Generate a 30-second viral script with a hook, 3 value points, and a CTA'.",
        techScore: 5,
        adaptScore: 4,
        feedback: "Structured content creation. High-probability viral logic."
      },
      {
        text: "Wing it and record whatever comes to mind.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Lack of structure often leads to low engagement."
      },
      {
        text: "Copy a script from a popular creator line-by-line.",
        techScore: 1,
        adaptScore: 2,
        feedback: "Plagiarism. AI helps you be 'original' faster, not just a copycat."
      },
      {
        text: "Ask AI to 'Find the trending sounds' for you.",
        techScore: 4,
        adaptScore: 3,
        feedback: "Good tactical move, but the script is the core."
      }
    ]
  },
  {
    id: 66,
    category: 'hustle',
    text: "Theme: Automation & Agents. You want to monitor your competitor's pricing every day. You:",
    options: [
      {
        text: "Manually visit their website every morning at 9 AM.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Tedious and prone to forgetting. Use an Agent."
      },
      {
        text: "Set up a No-code Agent (like Browse.ai) to scrape and alert you on Slack.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Strategic automation. You're building a 'Competitive Intelligence' system."
      },
      {
        text: "Ask a junior to 'keep an eye on it'.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Waste of human talent for a purely mechanical task."
      },
      {
        text: "Wait for customers to tell you when the competitor is cheaper.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Reactive. You've already lost the sale by then."
      }
    ]
  },
  {
    id: 67,
    category: 'mindset',
    text: "Theme: Learning Agility. You spent 3 months learning a manual skill that AI now does in 1 second. You feel:",
    options: [
      {
        text: "Like I wasted 3 months of my life.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Negative perspective. You learned the 'process', which helps you manage the AI."
      },
      {
        text: "Relieved! Now I can use that skill to 'Quality Control' the AI output.",
        techScore: 4,
        adaptScore: 5,
        feedback: "Growth mindset. Your manual knowledge makes you a better 'Director'."
      },
      {
        text: "Determined to keep doing it manually to 'stay sharp'.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Inefficient. Sharpness comes from solving new problems, not old ones."
      },
      {
        text: "Angry at the technology for 'stealing' my hard work.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Resistance is futile. Evolution is the only path."
      }
    ]
  },
  {
    id: 68,
    category: 'mindset',
    text: "Theme: Career Resilience. AI makes 'Generalists' as productive as 'Specialists'. Do you:",
    options: [
      {
        text: "Become a 'Universalist'—using AI to handle Marketing, Sales, and Ops.",
        techScore: 5,
        adaptScore: 5,
        feedback: "The Solopreneur/Elite Employee model for 2025. Broad leverage."
      },
      {
        text: "Double down on your narrow specialty and ignore other areas.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Risk of becoming a 'single point of failure' for your own career."
      },
      {
        text: "Wait for the company to tell you what to learn next.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Passive. Your career is your own startup."
      },
      {
        text: "Focus purely on 'Soft Skills' like empathy and leadership.",
        techScore: 3,
        adaptScore: 4,
        feedback: "Solid strategy, but 'Soft Skills + AI' is the real superpower."
      }
    ]
  },
  {
    id: 69,
    category: 'ethics',
    text: "Theme: Data Privacy. A 3rd-party AI plugin asks for 'Read/Write access to your Gmail'. You:",
    options: [
      {
        text: "Grant it. I need the productivity boost!",
        techScore: 3,
        adaptScore: 2,
        ethicsScore: 1,
        feedback: "Extreme security risk. You're giving an unknown entity access to all your secrets."
      },
      {
        text: "Decline and find a 'Privacy-First' tool that processes data locally.",
        techScore: 5,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "Security-conscious professional. Protecting the 'Digital Perimeter'."
      },
      {
        text: "Only grant it for one specific email account that is 'empty'.",
        techScore: 4,
        adaptScore: 3,
        ethicsScore: 3,
        feedback: "Sandboxing. A smart workaround, but still requires caution."
      },
      {
        text: "Check if the plugin is 'SOC2' or 'ISO' certified first.",
        techScore: 5,
        adaptScore: 4,
        ethicsScore: 4,
        feedback: "Corporate-level due diligence."
      }
    ]
  },
  {
    id: 70,
    category: 'ethics',
    text: "Theme: Hallucinations. You ask AI for the 'Top 5 Legal Risks in the India DPDP Act' and it misses one major one. Why?",
    options: [
      {
        text: "The AI is stupid.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 2,
        feedback: "AI isn't stupid; it's a probabilistic model, not a database."
      },
      {
        text: "The knowledge cutoff might be before the latest amendment.",
        techScore: 5,
        adaptScore: 4,
        ethicsScore: 4,
        feedback: "Correct. Always check the 'Recency' of the AI's data."
      },
      {
        text: "I didn't prompt it correctly.",
        techScore: 3,
        adaptScore: 4,
        ethicsScore: 3,
        feedback: "Maybe, but some things are just outside its training data."
      },
      {
        text: "It's trying to protect the government.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Conspiracy thinking won't help you use the tool better."
      }
    ]
  },
  {
    id: 71,
    category: 'hustle',
    text: "Theme: Desi Context. You need to navigate a government portal for a Passport update. It's confusing. You:",
    options: [
      {
        text: "Ask AI to 'Explain the step-by-step process for Indian Passport renewal in 2025'.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Using AI as a 'Bureaucracy Navigator'. Massive stress saver."
      },
      {
        text: "Go to the office and stand in line to ask questions.",
        techScore: 1,
        adaptScore: 1,
        feedback: "The old way. Waste of a whole day."
      },
      {
        text: "Hire an 'Agent' and pay 5000 INR.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Expensive. Most info is online, just needs better 'parsing'."
      },
      {
        text: "Give up and wait for next year.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Procrastination is the thief of opportunity."
      }
    ]
  },
  {
    id: 72,
    category: 'mindset',
    text: "Theme: Human-AI Collaboration. You're writing a blog. Do you use AI to 'Write it' or 'Outline it'?",
    options: [
      {
        text: "Write it. I'll just change a few words.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Low effort. The 'soul' of the writing will be missing."
      },
      {
        text: "Outline it, then I'll write the stories and unique insights.",
        techScore: 5,
        adaptScore: 5,
        feedback: "The 'Hybrid' model. AI for structure, Human for 'magic'."
      },
      {
        text: "I write it first, then ask AI to 'Critique and find holes in my logic'.",
        techScore: 5,
        adaptScore: 5,
        feedback: "The 'Editor' model. High-level collaboration."
      },
      {
        text: "I don't use AI for creative work at all.",
        techScore: 1,
        adaptScore: 3,
        feedback: "Honest, but you're missing a powerful brainstorming partner."
      }
    ]
  },
  {
    id: 73,
    category: 'ethics',
    text: "Theme: Workplace Ethics. You see a colleague using AI to 'Fake' their video during a Zoom meeting. You:",
    options: [
      {
        text: "Report them to HR immediately.",
        techScore: 2,
        adaptScore: 2,
        ethicsScore: 4,
        feedback: "A bit harsh. Maybe talk to them first?"
      },
      {
        text: "Ask them 'Wow, what tool are you using?' and try it yourself.",
        techScore: 4,
        adaptScore: 4,
        ethicsScore: 1,
        feedback: "Curious, but you're ignoring the 'Deception' aspect of the ethics."
      },
      {
        text: "Tell them privately that it's risky and could hurt their reputation.",
        techScore: 5,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "Empathetic and ethical leadership."
      },
      {
        text: "Ignore it. Not my business.",
        techScore: 2,
        adaptScore: 3,
        ethicsScore: 3,
        feedback: "Neutral, but helps normalize a culture of 'faking it'."
      }
    ]
  },
  {
    id: 74,
    category: 'hustle',
    text: "Theme: Text & Communication. You're cold-emailing 50 VCs in India. You:",
    options: [
      {
        text: "Send the same generic email to all 50.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Instant spam filter. 0% conversion rate."
      },
      {
        text: "Use AI to research each VC's recent investments and personalize the first 2 lines.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Scale + Personalization. This is how you get meetings."
      },
      {
        text: "Hand-write all 50 emails over 2 days.",
        techScore: 2,
        adaptScore: 1,
        feedback: "Diligence is good, but you're working at human speed in an AI race."
      },
      {
        text: "Hire an intern to do the research for you.",
        techScore: 2,
        adaptScore: 3,
        feedback: "Effective, but slower and more expensive than AI."
      }
    ]
  },
  {
    id: 75,
    category: 'mindset',
    text: "Theme: Strategic Vision. You're a retail owner. A new 'AI-Powered' mall opens nearby. You:",
    options: [
      {
        text: "Lower your prices to compete.",
        techScore: 1,
        adaptScore: 2,
        feedback: "Race to the bottom. You can't beat their efficiency with just discounts."
      },
      {
        text: "Use AI to analyze your customer data and offer personalized loyalty rewards.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Strategic adaptation. Use tech to deepen local customer bonds."
      },
      {
        text: "Protest to the local trade union.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Blocking progress never works in the long run."
      },
      {
        text: "Ignore it and hope your 'regular' customers stay.",
        techScore: 2,
        adaptScore: 1,
        feedback: "Hope is not a strategy. The market is shifting."
      }
    ]
  },
  {
    id: 76,
    category: 'ethics',
    text: "Theme: Data Privacy. You're using an AI 'Meeting Notetaker'. It records a confidential salary discussion. You:",
    options: [
      {
        text: "Delete the recording and the AI summary immediately.",
        techScore: 5,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "Data hygiene. Protecting employee sensitive info."
      },
      {
        text: "Read it secretly to see what others are making.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Breach of trust and ethics. This will ruin your reputation if found."
      },
      {
        text: "Share the summary with the whole team for 'transparency'.",
        techScore: 1,
        adaptScore: 2,
        ethicsScore: 1,
        feedback: "Huge privacy violation. Salary info is strictly private."
      },
      {
        text: "Ask the AI to 'Anonymize' the names in the summary.",
        techScore: 4,
        adaptScore: 3,
        ethicsScore: 3,
        feedback: "Better, but the context might still reveal who is who."
      }
    ]
  },
  {
    id: 77,
    category: 'hustle',
    text: "Theme: Code & Data. You need to build a website for your uncle's sweet shop (Mithai). You:",
    options: [
      {
        text: "Spend 2 months learning HTML/CSS from scratch.",
        techScore: 2,
        adaptScore: 1,
        feedback: "Honorable but too slow. Uncle needs the site now!"
      },
      {
        text: "Use an AI Website Builder to ship a professional site in 1 hour.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Speed to Market. The most important metric for small businesses."
      },
      {
        text: "Hire a local agency for 50,000 INR.",
        techScore: 1,
        adaptScore: 2,
        feedback: "Expensive and overkill for a simple Mithai shop."
      },
      {
        text: "Just use a Facebook Page and forget the website.",
        techScore: 2,
        adaptScore: 3,
        feedback: "Functional, but lacks the professional brand of a custom site."
      }
    ]
  },
  {
    id: 78,
    category: 'mindset',
    text: "Theme: Organizational Culture. Your boss says 'AI is a fad'. You:",
    options: [
      {
        text: "Argue with them and show them 100 AI news articles.",
        techScore: 2,
        adaptScore: 2,
        feedback: "People hate being told they are wrong. Use 'Show, don't tell'."
      },
      {
        text: "Secretly use AI to do your work 3x faster, then show the results.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Result-oriented persuasion. Evidence is the best argument."
      },
      {
        text: "Agree with them and stop using AI.",
        techScore: 1,
        adaptScore: 1,
        feedback: "You're letting your skills go obsolete to please a boss."
      },
      {
        text: "Quit and join an 'AI-First' startup.",
        techScore: 4,
        adaptScore: 4,
        feedback: "Bold move! If the culture is toxic to tech, it might be time."
      }
    ]
  },
  {
    id: 79,
    category: 'ethics',
    text: "Theme: Bias & Fairness. Your AI 'English Polish' tool keeps removing Indianisms like 'Kindly revert'. You:",
    options: [
      {
        text: "Accept it. I want to sound 'International'.",
        techScore: 2,
        adaptScore: 3,
        ethicsScore: 2,
        feedback: "You're losing your cultural identity and 'Desi' charm."
      },
      {
        text: "Prompt the AI: 'Keep the Indian professional tone, but fix the grammar'.",
        techScore: 5,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "Culturally sensitive AI use. Mastering the 'Hybrid' voice."
      },
      {
        text: "Stop using the tool. It's biased.",
        techScore: 2,
        adaptScore: 2,
        ethicsScore: 4,
        feedback: "A bit extreme. Just need to prompt it better."
      },
      {
        text: "Manually fix it back every time.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 3,
        feedback: "Inefficient. Learn to 'guide' the AI, don't fight it."
      }
    ]
  },
  {
    id: 80,
    category: 'hustle',
    text: "Theme: Automation & Agents. You need to summarize a 2-hour long YouTube tutorial. You:",
    options: [
      {
        text: "Watch it at 2x speed and take notes.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Still takes 1 hour. AI can do this in 10 seconds."
      },
      {
        text: "Use an AI YouTube Summarizer to get the top 5 takeaways instantly.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Information leverage. You're learning at the speed of light."
      },
      {
        text: "Just read the comments to see what people said.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Unreliable. Comments are often noisy and off-topic."
      },
      {
        text: "Skip the video and search for a blog post instead.",
        techScore: 3,
        adaptScore: 3,
        feedback: "Good, but the blog might not have the latest info from the video."
      }
    ]
  },
  {
    id: 81,
    category: 'mindset',
    text: "Theme: Learning Agility. A new AI model 'GPT-5' is released on a Friday night. You:",
    options: [
      {
        text: "Ignore it until Monday morning.",
        techScore: 1,
        adaptScore: 2,
        feedback: "In the AI world, a weekend is a lifetime. You're already behind."
      },
      {
        text: "Spend 2 hours on Friday night testing it on your hardest work tasks.",
        techScore: 5,
        adaptScore: 5,
        feedback: "The 'Early Adopter' edge. Curiosity is your greatest asset."
      },
      {
        text: "Wait for 'Experts' to post summaries on LinkedIn.",
        techScore: 2,
        adaptScore: 3,
        feedback: "Second-hand knowledge. You need 'First-hand' intuition."
      },
      {
        text: "Complain that 'Things are moving too fast'.",
        techScore: 1,
        adaptScore: 1,
        feedback: "The speed won't slow down. You need to speed up your learning."
      }
    ]
  },
  {
    id: 82,
    category: 'ethics',
    text: "Theme: IP & Copyright. You use AI to generate 'Stock Photos' for your website. You:",
    options: [
      {
        text: "Check if the AI tool uses 'Public Domain' or 'Licensed' training data.",
        techScore: 5,
        adaptScore: 4,
        ethicsScore: 5,
        feedback: "Ethical sourcing. Protecting your business from IP claims."
      },
      {
        text: "Assume it's free since I generated it.",
        techScore: 2,
        adaptScore: 2,
        ethicsScore: 2,
        feedback: "Dangerous assumption. The legal landscape is still shifting."
      },
      {
        text: "Only use real photos from Getty/Shutterstock.",
        techScore: 1,
        adaptScore: 2,
        ethicsScore: 4,
        feedback: "Safe, but 10x more expensive and less unique than AI art."
      },
      {
        text: "Steal photos from Google Images and 'AI-Upscale' them to hide it.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Pure theft and deceptive. A recipe for legal disaster."
      }
    ]
  },
  {
    id: 83,
    category: 'hustle',
    text: "Theme: Desi Context. You're trying to explain AI to your grandmother in Hindi. You say:",
    options: [
      {
        text: "It's like a 'Duniya ka sabse samajhdaar munshi' (The world's smartest clerk).",
        techScore: 5,
        adaptScore: 5,
        feedback: "Perfect analogy. Localizing complex tech for better adoption."
      },
      {
        text: "It's a Neural Network with 175 Billion parameters.",
        techScore: 1,
        adaptScore: 1,
        feedback: "You've lost her. Communication is about the 'listener', not the 'speaker'."
      },
      {
        text: "It's magic, Dadi. Don't worry about it.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Dismissive. Empower her with a simple mental model."
      },
      {
        text: "Show her a video of a robot dancing.",
        techScore: 3,
        adaptScore: 3,
        feedback: "Visuals help, but it doesn't explain the 'Intelligence' part."
      }
    ]
  },
  {
    id: 84,
    category: 'mindset',
    text: "Theme: Human-AI Collaboration. You're a doctor. AI says 'Diagnosis A', but your gut says 'Diagnosis B'. You:",
    options: [
      {
        text: "Trust your gut. Humans are better than machines.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Guts can be biased. AI can see patterns you might miss."
      },
      {
        text: "Trust the AI. It's seen 10 million cases.",
        techScore: 2,
        adaptScore: 2,
        feedback: "AI can't 'see' the patient's subtle physical cues. Don't outsource your judgment."
      },
      {
        text: "Ask the AI to 'Show the evidence for Diagnosis A' and compare with your reasoning.",
        techScore: 5,
        adaptScore: 5,
        feedback: "The 'Centaur' model. Collaborative intelligence at its best."
      },
      {
        text: "Order more tests to let a 3rd party decide.",
        techScore: 4,
        adaptScore: 3,
        feedback: "Thorough, but expensive and slow for the patient."
      }
    ]
  },
  {
    id: 85,
    category: 'ethics',
    text: "Theme: Hallucinations. You ask AI for 'Recent GST changes in India' and it gives you 2022 data. You:",
    options: [
      {
        text: "File your taxes based on that data.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Financial suicide. AI data cutoffs are a massive trap."
      },
      {
        text: "Use AI to 'Find the official government PDF' and summarize that instead.",
        techScore: 5,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "RAG (Retrieval Augmented Generation) mindset. Always ground AI in real docs."
      },
      {
        text: "Ask the AI 'Are you sure this is for 2025?'.",
        techScore: 2,
        adaptScore: 2,
        ethicsScore: 3,
        feedback: "AI will say 'Yes' confidently while being wrong. Trust but verify."
      },
      {
        text: "Call your CA (Chartered Accountant) immediately.",
        techScore: 4,
        adaptScore: 3,
        ethicsScore: 4,
        feedback: "Safe and professional, but you can save them time with AI-parsed docs."
      }
    ]
  },
  {
    id: 86,
    category: 'hustle',
    text: "Theme: Creative & Design. You need to make a PowerPoint for a big client. You have 30 minutes. You:",
    options: [
      {
        text: "Spend 25 mins on 'Animations' and 5 mins on 'Content'.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Style over substance. A classic failure mode."
      },
      {
        text: "Use AI to 'Generate a 10-slide outline' and 'Design the layout' instantly.",
        techScore: 5,
        adaptScore: 5,
        feedback: "High-speed professional output. You win on both quality and speed."
      },
      {
        text: "Use a template from 2015 and just type the text.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Looks dated. AI can give you a 'Modern/Elite' look in seconds."
      },
      {
        text: "Ask a colleague to 'Help me out quickly'.",
        techScore: 1,
        adaptScore: 3,
        feedback: "You're wasting someone else's time for a task AI can do better."
      }
    ]
  },
  {
    id: 87,
    category: 'mindset',
    text: "Theme: Organizational Culture. Your company bans ChatGPT. You:",
    options: [
      {
        text: "Use it secretly on your phone.",
        techScore: 3,
        adaptScore: 4,
        feedback: "The 'Shadow AI' worker. Effective but risky for your job."
      },
      {
        text: "Write a 1-page proposal on 'Safe AI Use' and present it to IT.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Thought leadership. Changing the system from within."
      },
      {
        text: "Agree and go back to 'Manual' work.",
        techScore: 1,
        adaptScore: 1,
        feedback: "You're letting the company's fear stunt your career growth."
      },
      {
        text: "Complain in the cafeteria every day.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Whining is not a strategy. Action is."
      }
    ]
  },
  {
    id: 88,
    category: 'ethics',
    text: "Theme: Bias & Fairness. You're an AI developer. Your 'Loan Approval' model is 99% accurate but rejects 100% of women. You:",
    options: [
      {
        text: "Deploy it. 99% accuracy is amazing!",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "This is a classic 'Fairness Failure'. Accuracy isn't everything."
      },
      {
        text: "Stop the deployment and 'Re-balance' the training data to remove gender bias.",
        techScore: 5,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "Ethical Engineering. You're protecting the company from a PR and legal nightmare."
      },
      {
        text: "Just add a 'Manual Review' for all women applicants.",
        techScore: 3,
        adaptScore: 2,
        ethicsScore: 3,
        feedback: "A 'Band-aid' fix. The underlying model is still broken."
      },
      {
        text: "Tell the marketing team to 'target only men' so the AI stays accurate.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Deeply unethical and likely illegal."
      }
    ]
  },
  {
    id: 89,
    category: 'hustle',
    text: "Theme: Code & Data. You want to build a simple 'Stock Market Alert' for your favorite Indian stocks. You:",
    options: [
      {
        text: "Ask AI to 'Write a Python script using yfinance to email me when Tata Motors hits 1000 INR'.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Personalized finance automation. High value for low effort."
      },
      {
        text: "Manually check Moneycontrol 50 times a day.",
        techScore: 1,
        adaptScore: 1,
        feedback: "The 'Anxiety' method. Waste of mental energy."
      },
      {
        text: "Pay for a premium 'Stock Alert' app.",
        techScore: 2,
        adaptScore: 3,
        feedback: "Fine, but you're paying for something you can build in 5 minutes with AI."
      },
      {
        text: "Ask your 'Stock Expert' friend to call you.",
        techScore: 1,
        adaptScore: 2,
        feedback: "Unreliable. Friends have lives too."
      }
    ]
  },
  {
    id: 90,
    category: 'mindset',
    text: "Theme: Career Resilience. A news report says 'AI will replace 40% of jobs'. You:",
    options: [
      {
        text: "Panic and start looking for a 'Safe' government job.",
        techScore: 1,
        adaptScore: 1,
        feedback: "No job is 'Safe' from efficiency. The only safety is 'Adaptability'."
      },
      {
        text: "Ask: 'Which 40% of my DAILY tasks can AI do, so I can focus on the other 60%?'.",
        techScore: 5,
        adaptScore: 5,
        feedback: "The 'Augmentation' mindset. You're not being replaced; you're being upgraded."
      },
      {
        text: "Don't believe it. AI is overhyped.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Denial is a dangerous strategy. Even if it's 20%, the impact is huge."
      },
      {
        text: "Start an 'AI-Proof' business like a physical tea stall.",
        techScore: 3,
        adaptScore: 4,
        feedback: "Creative, but even a tea stall needs AI for marketing and inventory now!"
      }
    ]
  },
  {
    id: 91,
    category: 'ethics',
    text: "Theme: Workplace Ethics. You're a teacher. A student's essay is 'Too Perfect'. You:",
    options: [
      {
        text: "Give them an A+ and ignore it.",
        techScore: 1,
        adaptScore: 2,
        ethicsScore: 2,
        feedback: "You're failing as an educator. They haven't learned anything."
      },
      {
        text: "Ask them to 'Explain the core argument' in person to verify their understanding.",
        techScore: 5,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "Oral examination. The only way to truly verify knowledge in the AI age."
      },
      {
        text: "Use an 'AI Detector' and fail them if it says 90% AI.",
        techScore: 2,
        adaptScore: 2,
        ethicsScore: 2,
        feedback: "Detectors are notoriously unreliable and have high 'False Positives'."
      },
      {
        text: "Tell them 'Don't use AI' and make them rewrite it in class.",
        techScore: 3,
        adaptScore: 3,
        ethicsScore: 4,
        feedback: "Fair, but doesn't teach them how to use AI 'Ethically'."
      }
    ]
  },
  {
    id: 92,
    category: 'hustle',
    text: "Theme: Automation & Agents. You need to book a table at a very busy restaurant in Mumbai. You:",
    options: [
      {
        text: "Call them 20 times until they pick up.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Brute force. Inefficient use of your time."
      },
      {
        text: "Use an AI Agent (like Google Duplex) to call and book for you.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Agentic lifestyle. Outsourcing the 'boring' to the bots."
      },
      {
        text: "Go there early and wait for 1 hour.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Low-tech solution. Fine for a Sunday, bad for a business meeting."
      },
      {
        text: "Message the owner on Instagram.",
        techScore: 3,
        adaptScore: 4,
        feedback: "Social engineering. Effective, but doesn't scale."
      }
    ]
  },
  {
    id: 93,
    category: 'mindset',
    text: "Theme: Human-AI Collaboration. You're an architect. AI designs a building that looks like a giant samosa. You:",
    options: [
      {
        text: "Reject it. It's ridiculous.",
        techScore: 1,
        adaptScore: 2,
        feedback: "You might be missing a 'Viral/Iconic' design opportunity."
      },
      {
        text: "Ask AI: 'Why this shape?' then refine it into a 'Samosa-inspired' modern museum.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Creative synergy. AI provides the 'weird' spark, you provide the 'taste'."
      },
      {
        text: "Build it exactly as the AI says.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Lack of critical judgment. Buildings need to be functional, not just 'AI-weird'."
      },
      {
        text: "Tell the client 'The AI did it' if they don't like it.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Blame-shifting. You are the one who 'signed off' on the design."
      }
    ]
  },
  {
    id: 94,
    category: 'ethics',
    text: "Theme: IP & Copyright. You use AI to generate 'Background Music' for your YouTube video. You:",
    options: [
      {
        text: "Just use it. AI music is 'Royalty Free' by default.",
        techScore: 2,
        adaptScore: 2,
        ethicsScore: 2,
        feedback: "Not always! Check the tool's license for 'Commercial Use'."
      },
      {
        text: "Use an AI tool that 'Compensates the original artists' in its training set.",
        techScore: 5,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "Ethical Consumption. Supporting the future of the 'Creative Economy'."
      },
      {
        text: "Only use music from 100-year-old composers (Public Domain).",
        techScore: 3,
        adaptScore: 3,
        ethicsScore: 4,
        feedback: "Safe but boring. Your 'Tech' video doesn't need 18th-century violin."
      },
      {
        text: "Use a popular Bollywood song and hope you don't get a 'Copyright Strike'.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "You WILL get a strike. Don't risk your channel's future."
      }
    ]
  },
  {
    id: 95,
    category: 'hustle',
    text: "Theme: Desi Context. You need to write a 'Legal Notice' to a noisy neighbor. You:",
    options: [
      {
        text: "Ask AI: 'Draft a polite but firm legal notice under Indian Law for noise nuisance'.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Democratizing Law. AI gives you the 'language of power' for free."
      },
      {
        text: "Shout at them from your balcony.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Ineffective and leads to more conflict."
      },
      {
        text: "Hire a lawyer for 2000 INR to write a letter.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Expensive for a first step. AI can handle the 'Warning' phase."
      },
      {
        text: "Call the police immediately.",
        techScore: 2,
        adaptScore: 1,
        feedback: "Escalation without documentation is rarely successful."
      }
    ]
  },
  {
    id: 96,
    category: 'mindset',
    text: "Theme: Strategic Vision. You're a farmer. AI can now predict 'Crop Diseases' from a photo. You:",
    options: [
      {
        text: "Trust your eyes. I've been doing this for 30 years.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Human eyes miss the 'Early signs' that AI can spot in pixels."
      },
      {
        text: "Use the AI app daily and 'Pre-emptively' spray only the infected plants.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Precision Agriculture. Saving money and the environment with tech."
      },
      {
        text: "Wait for the government to provide the tech for free.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Passive. You're losing crops while you wait."
      },
      {
        text: "Tell other farmers 'It's a trick by the seed companies'.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Fear-mongering stunts the progress of the whole village."
      }
    ]
  },
  {
    id: 97,
    category: 'ethics',
    text: "Theme: Workplace Ethics. Your AI 'Efficiency Report' says your best friend is the 'Least Productive'. You:",
    options: [
      {
        text: "Delete the report and tell your boss the AI crashed.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Dishonest and unprofessional. Friendships shouldn't compromise integrity."
      },
      {
        text: "Show the report to your friend and help them 'Optimize their AI workflow' together.",
        techScore: 5,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "Loyalty + Leadership. You're solving the problem, not hiding it."
      },
      {
        text: "Submit the report as is and let the boss decide.",
        techScore: 3,
        adaptScore: 3,
        ethicsScore: 4,
        feedback: "Fair, but lacks the 'Human/Empathetic' leadership of helping them first."
      },
      {
        text: "Tell your friend to 'Start looking for another job'.",
        techScore: 2,
        adaptScore: 2,
        ethicsScore: 2,
        feedback: "Defeatist. Use AI to FIX the productivity, not just measure it."
      }
    ]
  },
  {
    id: 98,
    category: 'hustle',
    text: "Theme: Creative & Design. You need to design a 'Visiting Card' that stands out in a pile. You:",
    options: [
      {
        text: "Ask AI: 'Design a card for a Cyber-Security expert using QR codes and neon colors'.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Visual storytelling. Your card becomes a 'Tech Demo'."
      },
      {
        text: "Use a standard template from the local printer.",
        techScore: 1,
        adaptScore: 1,
        feedback: "You'll disappear into the pile. First impressions matter."
      },
      {
        text: "Don't carry cards. 'Just find me on LinkedIn'.",
        techScore: 2,
        adaptScore: 3,
        feedback: "Cool, but misses the physical 'Hook' of a great card."
      },
      {
        text: "Print your photo on the card.",
        techScore: 2,
        adaptScore: 1,
        feedback: "A bit 1990s. AI can help you find a more 'Modern/Elite' hook."
      }
    ]
  },
  {
    id: 99,
    category: 'mindset',
    text: "Theme: Learning Agility. You're a senior manager. You find 'Prompt Engineering' difficult. You:",
    options: [
      {
        text: "Tell your juniors to 'Handle the AI stuff' for you.",
        techScore: 1,
        adaptScore: 1,
        feedback: "You're losing the ability to 'Direct' the future of your department."
      },
      {
        text: "Take a 2-hour 'Hands-on' workshop and write 50 prompts yourself.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Leading from the front. You need 'Muscle Memory', not just theory."
      },
      {
        text: "Read a book about the 'Philosophy of AI'.",
        techScore: 3,
        adaptScore: 2,
        feedback: "Good for dinner parties, bad for getting work done."
      },
      {
        text: "Wait for AI to 'Understand me without prompts'.",
        techScore: 2,
        adaptScore: 2,
        feedback: "That day is coming, but you're losing the 'Competitive Edge' today."
      }
    ]
  },
  {
    id: 100,
    category: 'ethics',
    text: "Theme: Hallucinations. You're a researcher. AI 'Invents' a perfect citation for your paper. You:",
    options: [
      {
        text: "Include it. It sounds like a real paper.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Academic fraud. This is how careers end in 2025."
      },
      {
        text: "Search for the 'DOI' or 'ISBN' to verify the paper actually exists.",
        techScore: 5,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "Scientific rigor. Trusting the 'System', not the 'Model'."
      },
      {
        text: "Ask AI for a 'Summary of that paper' to check if it's real.",
        techScore: 2,
        adaptScore: 2,
        ethicsScore: 3,
        feedback: "AI will hallucinate the summary too! Recursive hallucinations."
      },
      {
        text: "Use 'Perplexity' or 'Google Scholar' instead of a pure Chatbot.",
        techScore: 5,
        adaptScore: 4,
        ethicsScore: 4,
        feedback: "Right tool for the right job. Use 'Search-AI' for facts."
      }
    ]
  },
  {
    id: 101,
    category: 'hustle',
    text: "Theme: Automation & Agents. You want to automate your 'Weekly Status Email' to your boss. You:",
    options: [
      {
        text: "Set up a script that pulls your 'Done' tasks from Jira and drafts the email.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Operational Excellence. You're seen as 'Always on top of things'."
      },
      {
        text: "Spend 2 hours every Friday afternoon writing it from memory.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Waste of high-energy time. Friday afternoons are for strategy, not admin."
      },
      {
        text: "Stop sending them. 'They know I'm working'.",
        techScore: 1,
        adaptScore: 2,
        feedback: "Bad for career visibility. 'Done' isn't enough; 'Communicated' is the key."
      },
      {
        text: "Ask a junior to 'summarize what I did this week'.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Lazy. Use AI, not humans, for your own admin tasks."
      }
    ]
  },
  {
    id: 102,
    category: 'mindset',
    text: "Theme: Organizational Culture. Your startup team is 'AI-Fatigued'. They want to go back to whiteboards. You:",
    options: [
      {
        text: "Ban all AI for a 'No-Tech Week' to recharge.",
        techScore: 3,
        adaptScore: 5,
        feedback: "Empathetic leadership. Sometimes you need to slow down to go fast."
      },
      {
        text: "Tell them 'The world doesn't wait, keep up or leave'.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Guaranteed burnout and talent loss."
      },
      {
        text: "Use whiteboards for 'Brainstorming' but AI for 'Execution'.",
        techScore: 5,
        adaptScore: 4,
        feedback: "The Hybrid model. Human for 'Chaos', AI for 'Order'."
      },
      {
        text: "Buy them all 'Premium' AI subscriptions to motivate them.",
        techScore: 2,
        adaptScore: 2,
        feedback: "More tools don't solve fatigue; better workflows do."
      }
    ]
  },
  {
    id: 103,
    category: 'ethics',
    text: "Theme: Data Privacy. Your 'Smart Home AI' is always listening. Do you worry about 'Local vs Cloud' processing?",
    options: [
      {
        text: "No, I have nothing to hide.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Privacy isn't about 'Secrets'; it's about 'Consent' and 'Control'."
      },
      {
        text: "Yes, I only use devices that process 'Wake words' locally.",
        techScore: 5,
        adaptScore: 4,
        ethicsScore: 5,
        feedback: "Technical literacy. Understanding where the 'Data Boundary' is."
      },
      {
        text: "I unplug the device when I'm not using it.",
        techScore: 2,
        adaptScore: 2,
        ethicsScore: 3,
        feedback: "Safe, but inconvenient. Better to choose a 'Privacy-First' device."
      },
      {
        text: "I trust the big tech companies to protect me.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 2,
        feedback: "Trust should be based on 'Architecture', not 'Marketing'."
      }
    ]
  },
  {
    id: 104,
    category: 'hustle',
    text: "Theme: Automation & Agents. You need to research 20 competitors' pricing every morning. You:",
    options: [
      {
        text: "Manually visit 20 websites and type into Excel.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Slow and boring. AI can do this while you sleep."
      },
      {
        text: "Use a No-Code Agent (like Browse.ai) to scrape and update a Google Sheet automatically.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Scalable efficiency. You're building 'Passive Intelligence'."
      },
      {
        text: "Ask your intern to do it.",
        techScore: 1,
        adaptScore: 2,
        feedback: "Wasting human potential on bot tasks. Be a better mentor."
      },
      {
        text: "Just guess based on last year's data.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Inaccurate and risky. Markets move faster than your memory."
      }
    ]
  },
  {
    id: 105,
    category: 'mindset',
    text: "Theme: Strategic Vision. AI can now generate 80% of your marketing content. Your 'Creative Director' feels useless. You:",
    options: [
      {
        text: "Fire the Director to save costs.",
        techScore: 3,
        adaptScore: 2,
        feedback: "Short-sighted. You still need 'Human Taste' and 'Strategy' to guide the AI."
      },
      {
        text: "Retrain the Director to become an 'AI Orchestrator', focusing on high-level brand narrative.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Future-proofing leadership. Moving from 'Maker' to 'Curator'."
      },
      {
        text: "Stop using AI to keep the Director happy.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Luddite trap. You'll be outcompeted by more efficient rivals."
      },
      {
        text: "Hire a cheaper 'Prompt Engineer' to replace them.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Prompts are easy; 'Creative Vision' is the real moat."
      }
    ]
  },
  {
    id: 106,
    category: 'ethics',
    text: "Theme: AI Hallucination. You're using AI for 'Medical Research'. It cites a paper that sounds perfect but you can't find it. You:",
    options: [
      {
        text: "Use the citation anyway; it's likely a niche paper.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Academic dishonesty and dangerous. Never cite a ghost."
      },
      {
        text: "Use a 'Search-enabled AI' (like Perplexity) to verify the fact and find the real source.",
        techScore: 5,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "Fact-checking is the core of AI literacy in the post-truth era."
      },
      {
        text: "Delete the citation and find a real one manually.",
        techScore: 3,
        adaptScore: 4,
        ethicsScore: 4,
        feedback: "Safe and responsible, though slightly slower."
      },
      {
        text: "Ask the AI to 'Write a summary of the paper' to see if it's real.",
        techScore: 2,
        adaptScore: 2,
        ethicsScore: 3,
        feedback: "AI will just hallucinate the summary too. Don't fall for recursive lies."
      }
    ]
  },
  {
    id: 107,
    category: 'hustle',
    text: "Theme: Desi Context. You want to organize a 'Society Meeting' in your Mumbai apartment complex. You:",
    options: [
      {
        text: "Print 50 flyers and put them under doors.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Old school and paper-heavy. Use digital leverage."
      },
      {
        text: "Use AI to 'Draft a WhatsApp notice' that is polite, clear, and includes a poll for timing.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Communication efficiency. Getting 50 people to agree is an AI-level task."
      },
      {
        text: "Shout in the society WhatsApp group and hope people reply.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Chaotic. AI can help you structure the 'Ask' to get better results."
      },
      {
        text: "Hire a 'Meeting Coordinator' from an agency.",
        techScore: 1,
        adaptScore: 2,
        feedback: "Overkill for a society meeting. AI is your free coordinator."
      }
    ]
  },
  {
    id: 108,
    category: 'mindset',
    text: "Theme: Change Management. Your company is migrating to an 'AI-First' CRM. The sales team hates it. You:",
    options: [
      {
        text: "Mandate its use and penalize anyone who doesn't log in.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Compliance isn't Commitment. You'll get bad data and low morale."
      },
      {
        text: "Run a 'Success Story' session showing how one salesperson closed a lead 2x faster with AI.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Peer-led adoption. Humans follow results, not mandates."
      },
      {
        text: "Go back to the old CRM to keep the peace.",
        techScore: 1,
        adaptScore: 2,
        feedback: "Death by stagnation. You're delaying the inevitable."
      },
      {
        text: "Hire consultants to 'Force' the migration.",
        techScore: 2,
        adaptScore: 3,
        feedback: "Expensive and temporary. Cultural change must come from within."
      }
    ]
  },
  {
    id: 109,
    category: 'ethics',
    text: "Theme: Data Privacy. You're using a free AI tool to 'Summarize Customer Feedback'. The feedback contains phone numbers. You:",
    options: [
      {
        text: "Upload the whole file. It's faster.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Massive privacy breach. You just leaked customer PII (Personally Identifiable Information)."
      },
      {
        text: "Use a local script or AI tool to 'Mask' the phone numbers before uploading.",
        techScore: 5,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "Privacy-first engineering. Protecting your customers is protecting your brand."
      },
      {
        text: "Only upload the 'Text' part and manually delete the numbers.",
        techScore: 3,
        adaptScore: 3,
        ethicsScore: 4,
        feedback: "Good, but slow. Automation can do this safely."
      },
      {
        text: "Trust the tool's 'Privacy Policy' checkbox.",
        techScore: 2,
        adaptScore: 2,
        ethicsScore: 2,
        feedback: "Naivety. Free tools often use your data for training. Check the 'Opt-out' settings."
      }
    ]
  },
  {
    id: 110,
    category: 'hustle',
    text: "Theme: Text & Communication. You need to write a 'Performance Review' for a difficult employee. You:",
    options: [
      {
        text: "Write it while you're angry so they 'Get the message'.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Unprofessional. Leads to HR complaints and zero improvement."
      },
      {
        text: "Use AI to 'Convert my bullet points into a constructive, objective, and supportive review'.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Emotional Intelligence via AI. Removing the 'Heat' to focus on the 'Growth'."
      },
      {
        text: "Copy-paste a template from Google.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Generic and unhelpful. Employees can tell when you don't care."
      },
      {
        text: "Ask HR to write it for you.",
        techScore: 1,
        adaptScore: 2,
        feedback: "You're the manager. HR provides the 'Framework', you provide the 'Content'."
      }
    ]
  },
  {
    id: 111,
    category: 'mindset',
    text: "Theme: Learning Agility. You're learning a new AI skill (e.g., LoRA Training). You get stuck. You:",
    options: [
      {
        text: "Give up. 'I'm not a coder anyway'.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Fixed Mindset. Every expert was once a frustrated beginner."
      },
      {
        text: "Ask AI: 'Explain this error to me like I'm 10' and try again.",
        techScore: 5,
        adaptScore: 5,
        feedback: "The 'AI Tutor' loop. Accelerating through the 'Valley of Frustration'."
      },
      {
        text: "Pay for an expensive 2-day course in 3 months.",
        techScore: 2,
        adaptScore: 3,
        feedback: "Delayed learning. You can solve this in 5 minutes with the right prompt."
      },
      {
        text: "Search YouTube for 4 hours.",
        techScore: 3,
        adaptScore: 4,
        feedback: "Honorable effort, but inefficient. AI is your 'Personal Librarian'."
      }
    ]
  },
  {
    id: 112,
    category: 'ethics',
    text: "Theme: Bias & Fairness. You're using AI to 'Predict Crime Hotspots' in a city. You notice it only picks poor neighborhoods. You:",
    options: [
      {
        text: "Deploy it. The data doesn't lie.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "The data reflects 'Historical Policing Bias', not actual crime. You're automating injustice."
      },
      {
        text: "Audit the training data for 'Proxy Variables' (like income) and fix the model bias.",
        techScore: 5,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "Algorithmic Justice. AI should fix social problems, not scale them."
      },
      {
        text: "Ignore the 'Location' and just look at 'Crime Type'.",
        techScore: 3,
        adaptScore: 2,
        ethicsScore: 3,
        feedback: "A partial fix, but doesn't solve the underlying data bias."
      },
      {
        text: "Blame the AI if the public complains.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Cowardly and irresponsible. You are the architect."
      }
    ]
  },
  {
    id: 113,
    category: 'hustle',
    text: "Theme: Code & Data. You have a 1GB CSV file that Excel can't open. You need to find one row. You:",
    options: [
      {
        text: "Try to open it anyway and wait for your PC to crash.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Insanity is doing the same thing and expecting different results."
      },
      {
        text: "Ask AI: 'Write a Python script to find the row where Email=xyz@test.com in a large CSV'.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Big Data literacy. Using code to solve what tools can't."
      },
      {
        text: "Split the file into 100 small files manually.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Manual labor for a digital problem. AI can do this in 1 second."
      },
      {
        text: "Ask IT to 'Import this into a database' and wait 3 days.",
        techScore: 2,
        adaptScore: 3,
        feedback: "Too slow. You can be your own 'Data Engineer' with AI."
      }
    ]
  },
  {
    id: 114,
    category: 'mindset',
    text: "Theme: Career Resilience. You're a 'Copywriter'. AI can now write better ads than you. You:",
    options: [
      {
        text: "Switch careers to something 'Safe' like Plumbing.",
        techScore: 1,
        adaptScore: 3,
        feedback: "Valid, but you're wasting your creative talent. Adapt, don't quit."
      },
      {
        text: "Become a 'Strategy & AI Creative Director', focusing on 'Human Insights' the AI lacks.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Moving up the Value Chain. AI does the 'How', you do the 'Why'."
      },
      {
        text: "Tell clients 'AI content is illegal' to scare them into hiring you.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Lying is a poor long-term strategy. They'll find out."
      },
      {
        text: "Offer a '100% Human Written' premium service at 5x the price.",
        techScore: 3,
        adaptScore: 4,
        feedback: "A niche market exists, but it's shrinking fast. Better to use AI for the 80%."
      }
    ]
  },
  {
    id: 115,
    category: 'ethics',
    text: "Theme: IP & Copyright. You find a 'Cool Prompt' on Twitter that generates amazing art. You use it for a client. You:",
    options: [
      {
        text: "Tell the client you designed it from scratch.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Deception. If the client finds out, you lose all credibility."
      },
      {
        text: "Credit the 'Prompt Creator' if possible, and disclose the AI use to the client.",
        techScore: 5,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "Radical Transparency. Trust is the most valuable currency in the AI age."
      },
      {
        text: "Modify the prompt slightly so it's 'Yours'.",
        techScore: 3,
        adaptScore: 3,
        ethicsScore: 3,
        feedback: "Grey area. Better to be open about your 'Toolbox'."
      },
      {
        text: "Never use prompts from others; always start from blank.",
        techScore: 2,
        adaptScore: 2,
        ethicsScore: 4,
        feedback: "Honorable, but slow. The AI community is built on 'Open Source' sharing."
      }
    ]
  },
  {
    id: 116,
    category: 'hustle',
    text: "Theme: Creative & Design. You need a 'Product Video' for a new gadget. You have 0 budget. You:",
    options: [
      {
        text: "Film it on your phone in a messy room.",
        techScore: 1,
        adaptScore: 2,
        feedback: "Unprofessional. Bad lighting kills sales."
      },
      {
        text: "Use an AI Video Generator (like Sora or Runway) to create a 'Cinematic' product showcase.",
        techScore: 5,
        adaptScore: 5,
        feedback: "High-production value for $0. This is the 'Creator Economy' superpower."
      },
      {
        text: "Use a stock video of a 'generic' gadget.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Confusing for customers. They want to see YOUR product."
      },
      {
        text: "Just use a static photo and a 'Coming Soon' text.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Boring. Attention is the new oil; don't waste it."
      }
    ]
  },
  {
    id: 117,
    category: 'mindset',
    text: "Theme: Organizational Culture. Your boss asks you to 'Secretly use AI' to monitor employee emails for 'Negativity'. You:",
    options: [
      {
        text: "Do it. I want a promotion.",
        techScore: 1,
        adaptScore: 1,
        feedback: "You're building a 'Surveillance State'. It will destroy the company culture eventually."
      },
      {
        text: "Refuse and explain the 'Ethical Risks' of destroying trust and psychological safety.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Moral Courage. A leader's job is to protect the team's culture."
      },
      {
        text: "Do it, but 'Anonymize' the results.",
        techScore: 3,
        adaptScore: 3,
        feedback: "Better, but the 'Intent' is still toxic. Trust is hard to build, easy to break."
      },
      {
        text: "Quit immediately.",
        techScore: 2,
        adaptScore: 4,
        feedback: "Strong stance, but maybe try to change the boss's mind first?"
      }
    ]
  },
  {
    id: 118,
    category: 'ethics',
    text: "Theme: AI Hallucinations. You're a lawyer. AI gives you a list of 'Precedents' for a case. You:",
    options: [
      {
        text: "Include them in the filing. AI is smart.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Career ending mistake. AI frequently 'Invents' court cases (Mata v. Avianca)."
      },
      {
        text: "Manually verify every single case on 'Westlaw' or 'Manupatra' before filing.",
        techScore: 5,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "Professional Diligence. AI is an 'Assistant', you are the 'Responsible Party'."
      },
      {
        text: "Ask the AI to 'Provide the full text' of the cases.",
        techScore: 2,
        adaptScore: 2,
        ethicsScore: 2,
        feedback: "AI will hallucinate the full text too! It's a 'Generative' model, not a database."
      },
      {
        text: "Only use AI for 'Grammar' and never for 'Research'.",
        techScore: 3,
        adaptScore: 3,
        ethicsScore: 4,
        feedback: "Safe, but you're missing out on 90% of the efficiency gains."
      }
    ]
  },
  {
    id: 119,
    category: 'hustle',
    text: "Theme: Desi Context. You're traveling to a rural village in Bihar for a project. You don't speak the local dialect. You:",
    options: [
      {
        text: "Use hand gestures and hope for the best.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Ineffective. You'll miss out on the 'Ground Reality'."
      },
      {
        text: "Use an AI Real-time Translator (like Google Translate or an LLM) with 'Local Dialect' support.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Bridging the 'Digital Divide'. Tech as a tool for empathy and inclusion."
      },
      {
        text: "Hire a translator from Patna for 5000 INR/day.",
        techScore: 2,
        adaptScore: 3,
        feedback: "Reliable, but expensive and less 'Immediate' than AI."
      },
      {
        text: "Only talk to the 'Village Head' who speaks English.",
        techScore: 1,
        adaptScore: 2,
        feedback: "Biased data. You're only hearing one side of the story."
      }
    ]
  },
  {
    id: 120,
    category: 'mindset',
    text: "Theme: Human-AI Collaboration. You're a musician. AI writes a 'Perfect Pop Song'. You feel it lacks 'Soul'. You:",
    options: [
      {
        text: "Release it anyway. It'll be a hit.",
        techScore: 2,
        adaptScore: 2,
        feedback: "You're a 'Content Factory', not an 'Artist'. It might work once, but not twice."
      },
      {
        text: "Take the AI's structure but rewrite the lyrics and melody based on your 'Personal Heartbreak'.",
        techScore: 5,
        adaptScore: 5,
        feedback: "The 'Cyborg Artist'. Using AI for the 'Bones', but providing the 'Breath'."
      },
      {
        text: "Delete the AI file and start from a blank sheet.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Wasted opportunity. AI can be a great 'Collaborator' if you let it."
      },
      {
        text: "Tell the AI to 'Add more soul' to the prompt.",
        techScore: 3,
        adaptScore: 3,
        feedback: "AI doesn't have 'Soul'; it has 'Patterns'. You provide the soul."
      }
    ]
  },
  {
    id: 121,
    category: 'ethics',
    text: "Theme: Workplace Ethics. You're a recruiter. You notice your AI tool is 'Auto-rejecting' candidates from a specific university. You:",
    options: [
      {
        text: "Ignore it. They probably aren't good enough.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Elitism. You're missing out on 'Hidden Gems' and promoting bias."
      },
      {
        text: "Investigate the 'Rejection Logic' and manually review the rejected resumes.",
        techScore: 5,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "Human-in-the-loop. Ensuring the 'AI Filter' doesn't become a 'Wall'."
      },
      {
        text: "Turn off the AI and go back to 'Manual' review for all 10,000 resumes.",
        techScore: 2,
        adaptScore: 2,
        ethicsScore: 4,
        feedback: "Impossible. You'll never finish. Fix the tool, don't throw it away."
      },
      {
        text: "Tell the university to 'Change their curriculum' to match the AI.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Arrogant. The tool should serve the talent, not the other way around."
      }
    ]
  },
  {
    id: 122,
    category: 'hustle',
    text: "Theme: Automation & Agents. You want to stay updated on 'AI News' but you're too busy. You:",
    options: [
      {
        text: "Subscribe to 50 newsletters and never read them.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Information overload. You're just adding 'Noise' to your inbox."
      },
      {
        text: "Set up an AI Agent to 'Scan the top 10 AI blogs daily and send me a 3-bullet summary in Slack'.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Personalized Curation. High signal-to-noise ratio."
      },
      {
        text: "Just check Twitter once a week.",
        techScore: 2,
        adaptScore: 3,
        feedback: "Too late. In AI, 'Last week' is 'Ancient History'."
      },
      {
        text: "Ask a colleague 'What's new in AI?'.",
        techScore: 1,
        adaptScore: 2,
        feedback: "Unreliable. They might only know what's 'Viral', not what's 'Useful'."
      }
    ]
  },
  {
    id: 123,
    category: 'mindset',
    text: "Theme: Career Resilience. You're an 'Accountant'. AI can now do 100% of 'Bookkeeping'. You:",
    options: [
      {
        text: "Lower your prices to compete with the software.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Race to the bottom. You can't be cheaper than free software."
      },
      {
        text: "Pivot to 'Strategic Financial Advisory', using AI to find 'Tax Savings' the client missed.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Value-based pricing. AI handles the 'Past', you advise on the 'Future'."
      },
      {
        text: "Retire early.",
        techScore: 2,
        adaptScore: 3,
        feedback: "Valid if you're 60. If you're 30, you need a Plan B."
      },
      {
        text: "Lobby the government to 'Ban AI in Accounting'.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Futile. Efficiency always wins in the long run."
      }
    ]
  },
  {
    id: 124,
    category: 'ethics',
    text: "Theme: Data Privacy. You're using an AI 'Meeting Assistant' in a confidential board meeting. You:",
    options: [
      {
        text: "Just let it record. It's so helpful!",
        techScore: 2,
        adaptScore: 2,
        ethicsScore: 1,
        feedback: "Security risk. Is that data being used to train the model? Who has access?"
      },
      {
        text: "Check if the tool has an 'Enterprise' or 'Zero-Retention' mode before using it.",
        techScore: 5,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "Privacy-First Professionalism. Protecting company secrets is job #1."
      },
      {
        text: "Turn it off and take manual notes.",
        techScore: 3,
        adaptScore: 4,
        ethicsScore: 4,
        feedback: "Safe, but you'll miss 50% of the conversation. Find a 'Safe AI' instead."
      },
      {
        text: "Ask everyone 'Is it okay if I record?' then assume it's safe.",
        techScore: 2,
        adaptScore: 3,
        ethicsScore: 3,
        feedback: "Good for 'Consent', bad for 'Security'. Consent doesn't stop data leaks."
      }
    ]
  },
  {
    id: 125,
    category: 'hustle',
    text: "Theme: Code & Data. You need to reconcile 500 bank statements with your accounting software. You:",
    options: [
      {
        text: "Manually check each entry.",
        techScore: 1,
        adaptScore: 1,
        feedback: "You'll be doing this for a month. AI can do it in 5 minutes."
      },
      {
        text: "Use an AI-powered reconciliation tool or write a Python script to match entries automatically.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Data accuracy at scale. You're building 'Financial Infrastructure'."
      },
      {
        text: "Ask the bank for a 'Clean CSV' and still check it manually.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Better, but still slow. Use AI to do the 'matching'."
      },
      {
        text: "Just match the 'Total Amount' and ignore individual entries.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Bad accounting. AI can be both fast AND accurate."
      }
    ]
  },
  {
    id: 126,
    category: 'mindset',
    text: "Theme: Change Management. Your company is replacing 'Physical Receptionists' with AI avatars. You:",
    options: [
      {
        text: "Protest against 'Heartless Automation'.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Nostalgia won't pay the bills. Focus on 'Human Value'."
      },
      {
        text: "Suggest retraining receptionists as 'Experience Managers' using AI to personalize guest visits.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Human-centric automation. Elevating roles, not deleting them."
      },
      {
        text: "Suggest a 'Hybrid' model where the AI only works at night.",
        techScore: 3,
        adaptScore: 3,
        feedback: "Good compromise, but misses the full efficiency potential."
      },
      {
        text: "Hide the AI screens so people don't use them.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Sabotage is a career-killer. Adapt or be replaced."
      }
    ]
  },
  {
    id: 127,
    category: 'ethics',
    text: "Theme: Bias & Fairness. Your AI 'Hiring Tool' only suggests candidates who went to IITs. You:",
    options: [
      {
        text: "Accept it. IITians are the best.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Institutional bias. You're missing out on 99% of India's talent pool."
      },
      {
        text: "Retrain the AI on 'Skill-based tests' rather than 'University Names'.",
        techScore: 5,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "Meritocracy via Tech. Removing the 'Pedigree' bias to find real talent."
      },
      {
        text: "Manually add 10 non-IITians to every shortlist.",
        techScore: 3,
        adaptScore: 2,
        ethicsScore: 3,
        feedback: "A quota system. Better to fix the 'Algorithm' itself."
      },
      {
        text: "Tell non-IITians to 'Apply elsewhere'.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Arrogant and harmful for the company's employer brand."
      }
    ]
  },
  {
    id: 128,
    category: 'hustle',
    text: "Theme: Text & Communication. You need to write a 'Condolence Email' to a client. You:",
    options: [
      {
        text: "Use a standard business template.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Cold and robotic. Empathy requires a personal touch."
      },
      {
        text: "Use AI to 'Draft a sincere, empathetic condolence email' then add a specific personal memory.",
        techScore: 5,
        adaptScore: 5,
        feedback: "The 'Cyborg Empathy'. Using AI for the 'Frame', but providing the 'Soul' yourself."
      },
      {
        text: "Don't send one; it's 'too awkward'.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Relationships are built in tough times. Don't ghost your clients."
      },
      {
        text: "Ask AI to 'Write it in the style of a Bollywood drama'.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Extremely inappropriate. Know the context."
      }
    ]
  },
  {
    id: 129,
    category: 'mindset',
    text: "Theme: Learning Agility. A new AI tool 'Cursor' is making VS Code users switch. You:",
    options: [
      {
        text: "Stick with VS Code. 'I know it too well'.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Sunk Cost Fallacy. If the new tool is 2x better, the switch pays off in a week."
      },
      {
        text: "Spend a weekend 'Migrating' and learning the new AI-native features.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Tooling Fluidity. The best workers use the best tools, period."
      },
      {
        text: "Wait for VS Code to 'copy' all the features.",
        techScore: 3,
        adaptScore: 3,
        feedback: "Passive. You're losing months of productivity while you wait."
      },
      {
        text: "Complain that 'There are too many tools'.",
        techScore: 1,
        adaptScore: 1,
        feedback: "The 'Tool Fatigue' trap. Learn to 'Filter', not 'Freeze'."
      }
    ]
  },
  {
    id: 130,
    category: 'ethics',
    text: "Theme: AI Hallucinations. You're a 'Journalist'. AI gives you a 'Quote' from a famous CEO. You:",
    options: [
      {
        text: "Publish it. AI is usually right.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Fake news. AI 'imagines' quotes based on the person's style."
      },
      {
        text: "Verify the quote with the CEO's PR team or find a video recording of it.",
        techScore: 5,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "Journalistic Integrity. Trust is your only asset; don't let AI ruin it."
      },
      {
        text: "Ask the AI 'Are you sure he said this?'.",
        techScore: 2,
        adaptScore: 2,
        ethicsScore: 3,
        feedback: "AI will say 'Yes' with 100% confidence while lying. Trust but verify."
      },
      {
        text: "Only use quotes from 'Official Press Releases'.",
        techScore: 4,
        adaptScore: 3,
        ethicsScore: 4,
        feedback: "Safe, but your story might be boring. Use AI for 'Research', not 'Facts'."
      }
    ]
  },
  {
    id: 131,
    category: 'hustle',
    text: "Theme: Creative & Design. You need a 'Diwali' themed background for your Zoom meetings. You:",
    options: [
      {
        text: "Use the default 'Office' background.",
        techScore: 1,
        adaptScore: 2,
        feedback: "Missed opportunity for cultural connection."
      },
      {
        text: "Use Midjourney to generate a 'Stunning 3D Indian Rangoli' background.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Visual flare. Small details show you're 'AI-Native'."
      },
      {
        text: "Search Google Images and use a blurry photo.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Low quality. AI can give you 4K perfection in seconds."
      },
      {
        text: "Buy a physical backdrop for 2000 INR.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Expensive and takes up space. Digital is the way."
      }
    ]
  },
  {
    id: 132,
    category: 'mindset',
    text: "Theme: Strategic Vision. You're an 'Artist'. AI can now mimic your style perfectly. You:",
    options: [
      {
        text: "Sue the AI companies.",
        techScore: 1,
        adaptScore: 2,
        feedback: "Good luck. Lawsuits take years. Your career needs a plan TODAY."
      },
      {
        text: "Release an 'Official AI Model' of your style and charge for its use.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Monetizing the machine. If you can't beat them, own them."
      },
      {
        text: "Change your style to something 'AI can't do' (like performance art).",
        techScore: 3,
        adaptScore: 4,
        feedback: "Creative pivot. Always stay one step ahead of the 'Pattern'."
      },
      {
        text: "Stop sharing your art online.",
        techScore: 1,
         adaptScore: 1,
        feedback: "Digital suicide. You're hiding from the world you need to reach."
      }
    ]
  },
  {
    id: 133,
    category: 'ethics',
    text: "Theme: Data Privacy. You're using an 'AI Fitness App' that asks for your 'Genetic Data'. You:",
    options: [
      {
        text: "Upload it. I want the best workout plan!",
        techScore: 2,
        adaptScore: 2,
        ethicsScore: 1,
        feedback: "Genetic data is 'Permanent'. You can't change your DNA if the server is hacked."
      },
      {
        text: "Read the 'Data Deletion Policy' and ensure the data isn't sold to insurance companies.",
        techScore: 5,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "Biological Sovereignty. Protecting your future self from 'Algorithm Discrimination'."
      },
      {
        text: "Use a fake name and a 'Burner' email.",
        techScore: 4,
        adaptScore: 3,
        ethicsScore: 4,
        feedback: "Good 'OpSec' (Operational Security), but the DNA is still yours."
      },
      {
        text: "Trust the app since it's 'Top Rated' on the App Store.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 2,
        feedback: "Ratings measure 'UI', not 'Security'. Be careful."
      }
    ]
  },
  {
    id: 134,
    category: 'hustle',
    text: "Theme: Automation & Agents. You want to 'Personalize' 100 cold emails to VCs for your startup. You:",
    options: [
      {
        text: "Send the same 'Template' to all 100.",
        techScore: 1,
        adaptScore: 1,
        feedback: "100% rejection rate. VCs hate generic spam."
      },
      {
        text: "Use an AI Agent to 'Read their latest LinkedIn post and mention it in the first sentence' of each email.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Scalable personalization. You're doing 100 hours of research in 10 minutes."
      },
      {
        text: "Spend 3 weeks doing it manually.",
        techScore: 2,
        adaptScore: 2,
        feedback: "You'll run out of money before you finish. Speed is life for startups."
      },
      {
        text: "Hire a 'Virtual Assistant' to do it.",
        techScore: 1,
        adaptScore: 3,
        feedback: "The VA will just use a template anyway. Use AI for better quality."
      }
    ]
  },
  {
    id: 135,
    category: 'mindset',
    text: "Theme: Career Resilience. You're a 'Customer Support' agent. AI now handles 90% of tickets. You:",
    options: [
      {
        text: "Wait to be fired.",
        techScore: 1,
        adaptScore: 1,
        feedback: "The 'Victim' mindset. Take control of your narrative."
      },
      {
        text: "Apply to become a 'Support Operations Manager', designing the AI workflows and handling 'Elite' cases.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Moving from 'Task' to 'Orchestration'. You're the AI's boss now."
      },
      {
        text: "Tell customers 'AI is bad' so they ask for a human.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Sabotage won't save your job; it will just speed up your exit."
      },
      {
        text: "Go to another company that doesn't use AI yet.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Temporary fix. Every company will use AI by next year."
      }
    ]
  },
  {
    id: 136,
    category: 'ethics',
    text: "Theme: Workplace Ethics. You're an HR manager. You use AI to 'Predict who will quit'. It flags a pregnant employee. You:",
    options: [
      {
        text: "Don't promote her. She's going to leave anyway.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Illegal and unethical. You're using AI to automate 'Pregnancy Discrimination'."
      },
      {
        text: "Flag the AI for 'Protected Characteristic Bias' and ignore the result for this case.",
        techScore: 5,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "Ethical HR. AI is a 'Signal', not a 'Sentence'. Use human judgment for people."
      },
      {
        text: "Ask her 'Are you planning to stay?' because the AI said so.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 2,
        feedback: "Awkward and unprofessional. You're blaming the bot for your own bias."
      },
      {
        text: "Turn off the AI 'Predictive' feature entirely.",
        techScore: 3,
        adaptScore: 3,
        ethicsScore: 4,
        feedback: "Safe, but you're losing the ability to find 'unhappy' employees who NEED help."
      }
    ]
  },
  {
    id: 137,
    category: 'hustle',
    text: "Theme: Desi Context. You're a small 'Kirana' store owner. You want to use AI. You:",
    options: [
      {
        text: "AI is for big malls, not for me.",
        techScore: 1,
        adaptScore: 1,
        feedback: "The 'Digital Gap'. Even small shops can win with AI."
      },
      {
        text: "Use AI to 'Analyze my last 6 months of sales' and predict which snacks will sell out during IPL.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Inventory Intelligence. AI is your 'Silent Partner' for higher profits."
      },
      {
        text: "Use a basic 'Calculator' app.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Functional, but doesn't give you 'Insights'. AI does."
      },
      {
        text: "Hire a consultant for 1 Lakh INR.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Too expensive. You can do this yourself with a smartphone and a prompt."
      }
    ]
  },
  {
    id: 138,
    category: 'mindset',
    text: "Theme: Human-AI Collaboration. You're a 'Teacher'. AI writes a 'Lesson Plan'. You notice a small error. You:",
    options: [
      {
        text: "Use it anyway. Students won't notice.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Low integrity. You're spreading misinformation."
      },
      {
        text: "Correct the error and 'Teach the students how to spot AI errors' using this example.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Masterclass in AI Literacy. You're teaching them 'Critical Thinking'."
      },
      {
        text: "Delete the plan and write it manually.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Waste of time. Just fix the 5% that's wrong and keep the 95% that's right."
      },
      {
        text: "Report the AI to the IT department.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Useless. AI makes mistakes; that's why we need 'Humans in the loop'."
      }
    ]
  },
  {
    id: 139,
    category: 'ethics',
    text: "Theme: IP & Copyright. You're a 'Architect'. AI generates a building design that looks 90% like a famous Zaha Hadid building. You:",
    options: [
      {
        text: "Build it. It's 'AI Generated' so it's new.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Plagiarism via Bot. You'll be sued and your reputation will be ruined."
      },
      {
        text: "Acknowledge the 'Style Influence' and radically change the structure to be unique.",
        techScore: 5,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "Inspirational use. Using the 'Spirit' but creating your own 'Soul'."
      },
      {
        text: "Ask AI to 'Make it look 20% different'.",
        techScore: 2,
        adaptScore: 2,
        ethicsScore: 2,
        feedback: "Lazy. 20% isn't enough to avoid a copyright claim."
      },
      {
        text: "Never use AI for 'Visual Inspiration'.",
        techScore: 3,
        adaptScore: 3,
        ethicsScore: 4,
        feedback: "Safe, but you're missing out on the world's most powerful 'Moodboard'."
      }
    ]
  },
  {
    id: 140,
    category: 'hustle',
    text: "Theme: Code & Data. You need to convert 1000 PDF invoices into an Excel sheet. You:",
    options: [
      {
        text: "Type them in one by one.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Data Entry is a bot's job. Don't be a bot."
      },
      {
        text: "Use an AI 'Document Parser' (like Document AI) to extract the data in 2 minutes.",
        techScore: 5,
        adaptScore: 5,
        feedback: "OCR Mastery. You're saving a week of human life."
      },
      {
        text: "Use a free 'PDF to Excel' converter and spend 4 hours fixing the errors.",
        techScore: 3,
        adaptScore: 3,
        feedback: "Better, but AI-native parsers have 10x higher accuracy."
      },
      {
        text: "Hire a 'Data Entry' firm in another city.",
        techScore: 1,
        adaptScore: 2,
        feedback: "Expensive and slow. AI is cheaper and faster."
      }
    ]
  },
  {
    id: 141,
    category: 'mindset',
    text: "Theme: Career Resilience. You're a 'Translator'. AI is now 99% accurate for your language pair. You:",
    options: [
      {
        text: "Switch to 'Local Dialect' translation where AI is still weak.",
        techScore: 4,
        adaptScore: 5,
        feedback: "Finding the 'Gap'. AI is good at 'Standard', humans are good at 'Niche'."
      },
      {
        text: "Become a 'Cultural Consultant', checking AI translations for 'Tone' and 'Context'.",
        techScore: 5,
        adaptScore: 5,
        feedback: "High-value curation. Moving from 'Word-to-Word' to 'Heart-to-Heart'."
      },
      {
        text: "Lobby to 'Protect the Translation Industry'.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Protectionism is a losing battle against technology."
      },
      {
        text: "Retire and move to the mountains.",
        techScore: 2,
        adaptScore: 3,
        feedback: "A peaceful choice, but you still have value to offer!"
      }
    ]
  },
  {
    id: 142,
    category: 'ethics',
    text: "Theme: AI Hallucinations. You're a 'Chef'. AI gives you a recipe for 'Mushroom Biryani' but includes a poisonous mushroom. You:",
    options: [
      {
        text: "Cook it and serve it. 'AI knows best'.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Lethal mistake. AI doesn't know 'Biology'; it knows 'Syntax'."
      },
      {
        text: "Manually check every ingredient for 'Safety' and 'Flavor' before cooking.",
        techScore: 5,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "Professional Responsibility. You are the 'Final Filter' for safety."
      },
      {
        text: "Ask the AI 'Is this mushroom safe?'.",
        techScore: 2,
        adaptScore: 2,
        ethicsScore: 2,
        feedback: "AI will say 'Yes' because it saw it in a fantasy novel. Never ask AI for 'Safety' advice."
      },
      {
        text: "Only use 'Verified' cookbooks from 2020.",
        techScore: 4,
        adaptScore: 3,
        ethicsScore: 4,
        feedback: "Safe, but you're missing out on the 'Creative Fusion' AI can provide."
      }
    ]
  },
  {
    id: 143,
    category: 'hustle',
    text: "Theme: Automation & Agents. You want to 'Auto-reply' to 1000 Instagram comments on your post. You:",
    options: [
      {
        text: "Reply with the same emoji to all 1000.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Instagram will ban you for 'Spamming'. And it looks fake."
      },
      {
        text: "Use an AI Agent to 'Analyze the comment's sentiment and reply with a personalized, relevant response'.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Community Management at Scale. You're building 'Deep Engagement'."
      },
      {
        text: "Spend 10 hours doing it manually.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Your time is worth more than 1 INR per comment. Automate."
      },
      {
        text: "Ignore the comments. 'Engagement doesn't matter'.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Engagement is the currency of the social web. Don't go broke."
      }
    ]
  },
  {
    id: 144,
    category: 'mindset',
    text: "Theme: Organizational Culture. Your startup is 'AI-First' but your investors are 'Old School'. They want 'Proof of Work' (hours spent). You:",
    options: [
      {
        text: "Lie about the hours and pretend you worked 80 hours/week.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Deception is a bad foundation for an investor relationship."
      },
      {
        text: "Show them 'Proof of Results' (Growth/Revenue) and explain how AI achieved it in 10 hours.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Investor Education. Teaching them that 'Output > Input' in the AI age."
      },
      {
        text: "Stop using AI and work 80 hours manually to please them.",
        techScore: 1,
         adaptScore: 1,
        feedback: "You're slowing down your startup's growth for a vanity metric."
      },
      {
        text: "Find new 'AI-Native' investors.",
        techScore: 4,
        adaptScore: 4,
        feedback: "Bold. If they don't get the 'Efficiency' play, they might be the wrong partners."
      }
    ]
  },
  {
    id: 145,
    category: 'ethics',
    text: "Theme: Data Privacy. You're using an AI 'Language Learning' app. It asks to 'Record your voice 24/7' to help you learn. You:",
    options: [
      {
        text: "Yes! I want to be fluent in 1 month.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Privacy suicide. You're giving away the 'Audio Blueprint' of your life."
      },
      {
        text: "No. I will only record during 'Study Sessions' and check where the data is stored.",
        techScore: 5,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "Boundary Setting. Technology should serve you, not surveil you."
      },
      {
        text: "Ask the app 'Is my data safe?' then click 'Accept'.",
        techScore: 2,
        adaptScore: 2,
        ethicsScore: 2,
        feedback: "A 'Pop-up' is not a 'Guarantee'. Check the 'Privacy Labels' in the App Store."
      },
      {
        text: "Delete the app and use a physical book.",
        techScore: 3,
        adaptScore: 3,
        ethicsScore: 4,
        feedback: "Safe, but you're missing out on the 'AI Tutor' which is 10x faster than a book."
      }
    ]
  },
  {
    id: 146,
    category: 'hustle',
    text: "Theme: Desi Context. You want to 'Fact-check' a WhatsApp forward about a new 'AI Tax' in India. You:",
    options: [
      {
        text: "Forward it to 10 more groups. 'Better safe than sorry'.",
        techScore: 1,
        adaptScore: 1,
        feedback: "You are the problem. Stop the spread of misinformation."
      },
      {
        text: "Ask a Search-enabled AI: 'Is there an official PIB (Press Information Bureau) notice about AI Tax?'.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Information Hygiene. Using AI to kill 'WhatsApp University' rumors."
      },
      {
        text: "Ask your uncle who 'Knows everything'.",
        techScore: 1,
        adaptScore: 2,
        feedback: "Unreliable. Uncles are often the SOURCE of the forward."
      },
      {
        text: "Wait for the 9 PM news.",
        techScore: 2,
        adaptScore: 3,
        feedback: "Too slow. You can find the truth in 5 seconds with AI."
      }
    ]
  },
  {
    id: 147,
    category: 'mindset',
    text: "Theme: Human-AI Collaboration. You're a 'Writer'. AI writes a 'Twist Ending' for your novel. You hate it. You:",
    options: [
      {
        text: "Use it anyway. AI knows what 'Virals' better.",
        techScore: 2,
        adaptScore: 2,
        feedback: "You've lost your 'Voice'. You're just a printer for the bot."
      },
      {
        text: "Analyze 'Why' the AI suggested that twist, then write a 'Better, more human' twist inspired by it.",
        techScore: 5,
        adaptScore: 5,
        feedback: "The 'Prompted Muse'. AI as a 'Mirror' to show you what NOT to do, so you can do better."
      },
      {
        text: "Tell the AI 'You're stupid' and close the app.",
        techScore: 1,
        adaptScore: 1,
        feedback: "The bot doesn't care. You're just wasting your own energy."
      },
      {
        text: "Ask the AI for 100 more twists until you find one you like.",
        techScore: 4,
        adaptScore: 3,
        feedback: "Brute force creativity. Effective, but less satisfying than writing it yourself."
      }
    ]
  },
  {
    id: 148,
    category: 'ethics',
    text: "Theme: IP & Copyright. You're a 'Coder'. AI suggests a 50-line block of code that looks like it came from a 'Leaked' private repo. You:",
    options: [
      {
        text: "Copy-paste it. Code is code.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Legal nightmare. You're infecting your project with 'GPL' or 'Stolen' code."
      },
      {
        text: "Ask the AI to 'Explain the logic' then rewrite it yourself from scratch in your own style.",
        techScore: 5,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "Learning, not Leeching. You're gaining the 'Skill', not just the 'Snippet'."
      },
      {
        text: "Use an 'AI Code Scanner' to check for license violations.",
        techScore: 5,
        adaptScore: 4,
        ethicsScore: 4,
        feedback: "Professional Safety. Using tech to protect your 'IP Integrity'."
      },
      {
        text: "Delete the whole file and start a new career.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Overreaction. Just use the tool responsibly."
      }
    ]
  },
  {
    id: 149,
    category: 'hustle',
    text: "Theme: Automation & Agents. You want to 'Monitor' your physical health 24/7 using AI. You:",
    options: [
      {
        text: "Wear 5 different smartwatches.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Too much noise. You need 'Synthesis', not 'Hardware'."
      },
      {
        text: "Use an AI 'Health Dashboard' (like Apple Health or specialized apps) to find 'Trends' in your sleep and heart rate.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Quantified Self. Using AI to spot 'Sickness' before you feel it."
      },
      {
        text: "Ask AI 'Why do I feel tired?' without any data.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Garbage In, Garbage Out. AI needs 'Data' to give 'Advice'."
      },
      {
        text: "Go to the doctor every week.",
        techScore: 1,
        adaptScore: 3,
        feedback: "Expensive and inefficient. Use AI for 'Monitoring', Doctors for 'Diagnosis'."
      }
    ]
  },
  {
    id: 150,
    category: 'mindset',
    text: "Theme: Organizational Culture. Your company is 'AI-Native'. A new employee is 'AI-Phobic'. You:",
    options: [
      {
        text: "Fire them. They don't fit the culture.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Cruel and lazy leadership. Try to 'Upgrade' them first."
      },
      {
        text: "Pair them with an 'AI Buddy' (a junior who loves AI) to show them how it makes their life easier.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Reverse Mentoring. Using social connection to overcome technological fear."
      },
      {
        text: "Let them work 'Manually' while everyone else uses AI.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Inequality. They'll be 10x slower and eventually resent the team."
      },
      {
        text: "Give them a 'Book about AI' to read.",
        techScore: 2,
        adaptScore: 3,
        feedback: "Books don't kill fear; 'Success' does. Let them win with AI once."
      }
    ]
  },
  {
    id: 151,
    category: 'ethics',
    text: "Theme: Data Privacy. You're using an AI 'Dating Assistant'. It asks to 'Read your private WhatsApp chats' to give better advice. You:",
    options: [
      {
        text: "Yes! I want to find 'The One'.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "You're giving a bot the 'Keys to your heart' AND your privacy. Not worth it."
      },
      {
        text: "No. I will only 'Copy-paste specific, non-private snippets' if I need advice on a specific reply.",
        techScore: 5,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "Selective Sharing. You control the 'Information Flow'."
      },
      {
        text: "Trust the app because it has a 'Heart' emoji in the logo.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Marketing is not Security. Be smart."
      },
      {
        text: "Stop dating and marry a robot.",
        techScore: 2,
        adaptScore: 4,
        feedback: "A bit extreme. Just use the app with boundaries."
      }
    ]
  },
  {
    id: 152,
    category: 'hustle',
    text: "Theme: Desi Context. You need to apply for a passport renewal on the complex government portal. You:",
    options: [
      {
        text: "Pay a 'Passport Agent' 2000 INR to do it.",
        techScore: 1,
        adaptScore: 2,
        feedback: "The old way. You're paying for someone else's 'Portal Navigation' skills."
      },
      {
        text: "Ask AI to 'Give me a step-by-step guide for Indian Passport renewal in 2025' and follow it.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Self-sufficiency. Using AI to demystify complex bureaucracy."
      },
      {
        text: "Try to do it yourself, get frustrated, and give up.",
        techScore: 2,
        adaptScore: 1,
        feedback: "Don't let bad UX win. Use AI as your 'Bureaucracy Guide'."
      },
      {
        text: "Ask your neighbor who did it last year.",
        techScore: 2,
        adaptScore: 3,
        feedback: "Better than nothing, but the rules might have changed. AI is more current."
      }
    ]
  },
  {
    id: 153,
    category: 'mindset',
    text: "Theme: Strategic Vision. Your company charges 'By the Hour'. AI makes you 10x faster, but your revenue drops. You:",
    options: [
      {
        text: "Hide the AI use and pretend it still takes 10 hours.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Short-term thinking. Ethics aside, you'll eventually be caught and disrupted."
      },
      {
        text: "Switch to 'Value-Based Pricing' (charging for the result, not the time).",
        techScore: 5,
        adaptScore: 5,
        feedback: "The AI Business Model. In the AI age, 'Output > Hours'."
      },
      {
        text: "Stop using AI to keep the billable hours high.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Suicidal. A competitor will use AI and charge 50% less."
      },
      {
        text: "Fire 90% of the team since you only need 10% now.",
        techScore: 2,
        adaptScore: 2,
        feedback: "Brutal and lacks vision. Use that extra 90% capacity to take on 10x more clients."
      }
    ]
  },
  {
    id: 154,
    category: 'ethics',
    text: "Theme: Workplace Ethics. You suspect a remote job candidate is using AI to generate answers in real-time. You:",
    options: [
      {
        text: "Ignore it. If they can use AI to pass, they can use it to work.",
        techScore: 3,
        adaptScore: 4,
        ethicsScore: 2,
        feedback: "Maybe, but you're hiring a 'Prompt Reader', not a 'Thinker'. Be careful."
      },
      {
        text: "Ask a 'Pivot Question' that requires a deep, personal, or unique real-world experience.",
        techScore: 5,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "Interviewing for 'Humanity'. Testing the edge where AI ends and Experience begins."
      },
      {
        text: "Immediately end the call and blacklist them.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 4,
        feedback: "Harsh. They might just be nervous. Use a better test instead."
      },
      {
        text: "Ask them to 'Share their screen' for the whole interview.",
        techScore: 2,
        adaptScore: 2,
        ethicsScore: 3,
        feedback: "Invasive. Trust but verify, don't just surveil."
      }
    ]
  },
  {
    id: 155,
    category: 'hustle',
    text: "Theme: Desi Context. You're in a client meeting and they start talking about yesterday's IPL match. You didn't watch it. You:",
    options: [
      {
        text: "Stay quiet and look at your phone.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Socially awkward. Relationship building is 50% of the 'Hustle'."
      },
      {
        text: "Quickly ask AI: 'Summarize the key highlights of last night's IPL match for a business chat'.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Just-in-time social intelligence. Using AI to bridge the 'Small Talk' gap."
      },
      {
        text: "Fake it and say 'Yeah, great game, right?'",
        techScore: 1,
        adaptScore: 2,
        feedback: "Risk of being caught. If they ask 'What about that wicket?', you're dead."
      },
      {
        text: "Tell them 'Cricket is a waste of time'.",
        techScore: 1,
        adaptScore: 1,
        feedback: "The fastest way to lose a client in India. Know your audience."
      }
    ]
  },
  {
    id: 156,
    category: 'mindset',
    text: "Theme: Strategic Vision. You realize your company's 10 years of support logs are a 'Goldmine' for AI. You:",
    options: [
      {
        text: "Do nothing. It's just old text.",
        techScore: 1,
        adaptScore: 1,
        feedback: "You're sitting on an 'Oil Well' and refusing to drill."
      },
      {
        text: "Propose building a 'Custom RAG' (Private AI) to train new staff 10x faster using that data.",
        techScore: 5,
        adaptScore: 5,
        feedback: "Data Moat. Converting legacy data into a modern competitive advantage."
      },
      {
        text: "Sell the data to a competitor for a quick profit.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Short-sighted and probably illegal. Keep your 'Moat' to yourself."
      },
      {
        text: "Upload the whole database to a free public AI to 'See what it says'.",
        techScore: 1,
        adaptScore: 1,
        feedback: "Security Disaster. You've just leaked your company's 'Brain' to the public."
      }
    ]
  },
  {
    id: 157,
    category: 'ethics',
    text: "Theme: Workplace Ethics. You used AI to generate 90% of a report. Your boss praises your 'Hard work'. You:",
    options: [
      {
        text: "Say 'Thank you' and take all the credit.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 1,
        feedback: "Dishonest. You're setting an impossible standard for your future 'Human' self."
      },
      {
        text: "Say 'Thanks! I actually used AI to speed up the drafting so I could spend more time on the strategy'.",
        techScore: 5,
        adaptScore: 5,
        ethicsScore: 5,
        feedback: "Radical Transparency. Redefining 'Hard Work' as 'Smart Results'."
      },
      {
        text: "Wait for someone to ask, then admit it.",
        techScore: 2,
        adaptScore: 3,
        ethicsScore: 3,
        feedback: "Passive. Better to lead the conversation on AI adoption."
      },
      {
        text: "Delete the report and do it again manually to be 'Honest'.",
        techScore: 1,
        adaptScore: 1,
        ethicsScore: 4,
        feedback: "Inefficient. Technology exists to be used. Just be honest about HOW you used it."
      }
    ]
  }
];

/**
 * Selects a random set of questions from each category
 */
export function getAssessmentQuestions(countPerCategory: number = 4): Question[] {
  const categories: QuestionCategory[] = ['hustle', 'mindset', 'ethics'];
  let selected: Question[] = [];

  categories.forEach(cat => {
    const catQuestions = QUESTIONS.filter(q => q.category === cat);
    const shuffled = [...catQuestions].sort(() => 0.5 - Math.random());
    selected = [...selected, ...shuffled.slice(0, countPerCategory)];
  });

  return selected.sort((a, b) => a.id - b.id);
}

/**
 * Calculates the final archetype based on scores
 * @param techScore Total technical proficiency score
 * @param adaptScore Total cognitive adaptability score
 * @param ethicsScore Total ethics & risk score
 * @param questionCount Total number of questions answered
 * @returns The resulting archetype
 */
export function calculateResult(
  techScore: number, 
  adaptScore: number, 
  ethicsScore: number = 0,
  questionCount: number = 12 // Default based on 4 questions * 3 categories
): Archetype {
  const maxPerStat = questionCount * 5;
  
  const techPercent = (techScore / maxPerStat) * 100;
  const adaptPercent = (adaptScore / maxPerStat) * 100;
  
  // Logic: Only some questions have ethicsScore, so we calculate based on the category 'ethics' count
  // Assuming 4 questions per category as per getAssessmentQuestions(4)
  const ethicsQuestionsCount = 4; 
  const ethicsPercent = (ethicsScore / (ethicsQuestionsCount * 5)) * 100;
  
  let result: Archetype;
  
  // Intelligence Logic: 4-Quadrant Model with weighted thresholds
  if (techPercent >= 65 && adaptPercent >= 65) {
    result = { ...ARCHETYPES.visionary_architect };
  } else if (techPercent >= 65 && adaptPercent < 65) {
    result = { ...ARCHETYPES.ten_x_achiever };
  } else if (techPercent < 65 && adaptPercent >= 65) {
    result = { ...ARCHETYPES.agile_explorer };
  } else {
    result = { ...ARCHETYPES.humanist_strategist };
  }

  // Personalized insights based on scores
  let insight = "";
  if (techPercent > 80) {
    insight += " Your technical proficiency is elite. You're likely early to adopt new frameworks like RAG and Agentic AI.";
  } else if (techPercent < 40) {
    insight += " You're currently using AI for basic tasks. There's a huge opportunity to automate your deeper workflows.";
  }

  if (adaptPercent > 80) {
    insight += " Your 'Growth Mindset' is your superpower. You see AI as a partner, not a threat.";
  } else if (adaptPercent < 40) {
    insight += " You might be holding onto legacy workflows too tightly. Try experimenting with one small AI automation this week.";
  }

  // Adjust description based on Ethics
  if (ethicsScore > 0) {
    if (ethicsPercent < 40) {
      insight += " Critical Note: Your Risk Awareness is low. In the Indian corporate landscape, data privacy (DPDP Act) and bias are major legal risks. Focus on safe AI usage.";
      result.tags.push('High Risk Profile');
    } else if (ethicsPercent > 80) {
      insight += " Your strong ethical judgment makes you a 'Safety Champion'. You're the kind of leader India needs to deploy AI responsibly.";
      result.tags.push('Safety Champion');
    }
  }

  result.description = insight + " " + result.description;

  // Generate dimension scores for the radar chart
  // Adding some variance for a more "organic" feel
  result.dimensionScores = [
    { label: 'Prompting', value: Math.min(100, Math.max(20, techPercent + (Math.random() * 15 - 7))) },
    { label: 'Tool Stack', value: Math.min(100, Math.max(20, techPercent + (Math.random() * 15 - 7))) },
    { label: 'Automation', value: Math.min(100, Math.max(20, techPercent + (Math.random() * 15 - 7))) },
    { label: 'Critical Thinking', value: Math.min(100, Math.max(20, adaptPercent + (Math.random() * 15 - 7))) },
    { label: 'Risk Awareness', value: Math.min(100, Math.max(20, ethicsPercent > 0 ? ethicsPercent : adaptPercent)) },
  ];

  return result;
}
