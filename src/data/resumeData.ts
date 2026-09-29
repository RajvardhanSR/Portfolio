import { Project, ExperienceItem, SkillCategory, EducationItem, CertificationItem } from '../types/portfolio';

export const personalInfo = {
  name: "RAJVARDHAN SINGH RATHORE",
  firstName: "RAJVARDHAN",
  title: "AI / ML • DATA SCIENCE • AGENTIC AI",
  roleHeadline: "I BUILD INTELLIGENT SYSTEMS.",
  summary:
    "Final-year B.Tech CSE (Data Science) student at Bennett University with hands-on experience building and deploying full-stack ML systems — from data cleaning and model training through to production deployment with FastAPI, Docker, and AWS. Most recently designed and built a self-correcting agentic RAG pipeline, going beyond standard retrieval into agent orchestration, evaluation, and benchmarking. Earned the AWS Certified AI Practitioner certification.",
  location: "Greater Noida, India",
  phone: "+91 8965000002",
  email: "rajvardhanrathore@icloud.com",
  linkedin: "https://linkedin.com/in/rajvardhan-singh-rathore-286355251",
  linkedinDisplay: "linkedin.com/in/rajvardhan-singh-rathore-286355251",
  statusBadge: "Available for Full-time Roles • 2025/2026/2027",
  university: "Bennett University, Greater Noida",
  degree: "B.Tech in Computer Science Engineering (Data Science)",
  expectedGraduation: "2027",
  cgpa: "7.14"
};

export const projects: Project[] = [
  {
    id: "clausewise",
    number: "01",
    title: "ClauseWise",
    subtitle: "Agentic RAG for Regulatory Compliance Q&A",
    category: "Hero Project // Agentic AI & RAG",
    summary:
      "A self-correcting agentic RAG pipeline that evaluates retrieval context sufficiency, triggers query reformulation when context is inadequate, and caps retries to decline gracefully rather than hallucinate.",
    technologies: ["Python", "OpenAI API", "ChromaDB", "Streamlit"],
    bulletPoints: [
      "Built a self-correcting agentic RAG pipeline on top of a baseline RAG system: a sufficiency-check step evaluates whether retrieved context can answer a question, triggers query reformulation when it can't, and caps retries so the system declines gracefully instead of hallucinating.",
      "Benchmarked the agentic pipeline against a single-pass baseline on real RBI regulatory circulars (242 chunks across 3 documents), surfacing genuine multi-hop and cross-document dependency cases where self-correction showed a measurable advantage.",
      "Built a multi-page Streamlit application to demo baseline vs. agentic answers side-by-side, with groundedness scoring, hallucination flags, and an expandable trace of the agent's self-correction steps."
    ],
    pipelineSteps: [
      { name: "USER QUERY", description: "Complex regulatory compliance query received", type: "input" },
      { name: "RETRIEVAL", description: "ChromaDB vector search across RBI regulatory circulars", type: "process" },
      { name: "SUFFICIENCY CHECK", description: "Agent evaluates if retrieved context answers query completely", type: "decision" },
      { name: "QUERY REFORMULATION", description: "Reformulates query with missing entity/context parameters", type: "loop" },
      { name: "RETRIEVAL", description: "Targeted second-pass search over cross-document references", type: "process" },
      { name: "GROUNDED ANSWER", description: "Synthesizes verified response with groundedness scoring", type: "output" }
    ],
    caseStudy: {
      problem:
        "Standard single-pass RAG frequently fails on complex regulatory compliance questions because real-world regulatory circulars contain dense cross-document dependencies, conditional clauses, and multi-hop queries. When standard vector retrieval yields partial or ambiguous context, standard systems hallucinate or output confident falsehoods.",
      approach:
        "Engineered an autonomous agentic loop wrapped around ChromaDB and OpenAI LLM endpoints. Instead of treating first-pass retrieval as final, a dedicated sufficiency-check module inspects context completeness. If deficient, query reformulation is invoked to retrieve missing circular references, backed by strict retry caps to gracefully refuse unanswerable queries rather than hallucinating.",
      architecture: [
        "ChromaDB Vector Store indexing 242 regulatory chunks from 3 real RBI circulars",
        "Sufficiency Evaluator agent assessing semantic coverage against user intent",
        "Dynamic Query Reformulation agent generating targeted multi-hop search strings",
        "Self-Correction & Fallback Guardrails with capped retry budget",
        "Groundedness Scoring & Hallucination Flagging engine",
        "Streamlit Multi-Page Interface for side-by-side comparative inspection"
      ],
      implementation: [
        "Language & Core: Python",
        "Embeddings & Vector Store: ChromaDB vector collection",
        "Reasoning & Orchestration: OpenAI API (multi-step agent orchestration & sufficiency checking)",
        "Application Interface: Multi-page Streamlit dashboard with interactive trace graphs"
      ],
      results: [
        "Evaluated on real RBI regulatory circulars spanning 242 chunks across 3 documents",
        "Demonstrated clear, measurable advantage in multi-hop and cross-document dependency cases over single-pass baselines",
        "Eliminated uncontrolled hallucinations on out-of-context queries via strict retry capping and graceful decline mechanisms",
        "Delivered full explainability with expandable step-by-step traces of the agent's internal reformulations"
      ]
    }
  },
  {
    id: "customer-churn",
    number: "02",
    title: "Customer Churn Prediction",
    subtitle: "Machine Learning + Explainability + Cloud Deployment",
    category: "ML & Production Deployment // MLOps",
    summary:
      "A production-ready machine learning pipeline featuring real-time Scikit-learn inference served via FastAPI, integrated with a GPT-2 explanation layer for plain-language reasoning, and containerized with Docker on AWS EC2 with S3 artifact storage.",
    technologies: ["Scikit-learn", "FastAPI", "Hugging Face Transformers", "AWS (EC2, S3)", "Docker"],
    bulletPoints: [
      "Trained a churn prediction model in Scikit-learn and wrapped it in a FastAPI service so it could return predictions in real time.",
      "Added a GPT-2 based layer that explains each prediction in plain language, so non-technical users can understand why the model flagged a customer.",
      "Set up basic MLOps practices like model versioning and input validation, then deployed on AWS EC2 with model artifacts in S3 and Docker for a consistent environment."
    ],
    pipelineSteps: [
      { name: "DATA", description: "Structured customer features & behavioral attributes", type: "input" },
      { name: "MODEL", description: "Trained Scikit-learn classifier with model versioning", type: "process" },
      { name: "API", description: "FastAPI asynchronous service with input validation", type: "process" },
      { name: "EXPLANATION", description: "Hugging Face GPT-2 layer translating scores into plain language", type: "decision" },
      { name: "AWS DEPLOYMENT", description: "Docker container on AWS EC2 with model artifacts in S3", type: "output" }
    ],
    caseStudy: {
      problem:
        "High customer churn directly degrades recurring revenue, but traditional black-box classification models output raw probability percentages without actionable rationale. Business stakeholders cannot determine why a specific customer is predicted to churn, leading to hesitation in intervention.",
      approach:
        "Designed an end-to-end ML system that pairs a high-performance Scikit-learn classifier with a localized generative explanation layer powered by Hugging Face GPT-2. The model flags at-risk customers, while the language model interprets the dominant behavioral features and synthesizes an executive summary in plain English.",
      architecture: [
        "Scikit-learn classification engine with strict preprocessing and model versioning",
        "FastAPI REST microservice providing sub-100ms real-time inference and Pydantic validation",
        "Hugging Face Transformers (GPT-2) explanation module for natural language rationale",
        "AWS S3 bucket for persistent model weights, artifact versioning, and feature encoders",
        "Docker containerization ensuring environment reproducibility across development and AWS EC2"
      ],
      implementation: [
        "ML Modeling: Scikit-learn",
        "API Framework: FastAPI with schema validation",
        "Explainability: Hugging Face Transformers (GPT-2)",
        "Cloud & Infrastructure: AWS EC2, AWS S3, Docker"
      ],
      results: [
        "Real-time prediction endpoint delivering instant churn probability",
        "Plain-language narrative reasoning generated per customer profile for non-technical stakeholders",
        "Robust MLOps lifecycle with automated input validation and centralized S3 artifact versioning",
        "Production-tested cloud deployment running on AWS EC2 inside isolated Docker containers"
      ]
    }
  },
  {
    id: "network-anomaly",
    number: "03",
    title: "Real-Time Network Traffic Anomaly Detection",
    subtitle: "Real-Time Stream Analytics & Statistical Thresholding",
    category: "Data Engineering & Stream Analytics",
    summary:
      "A real-time streaming analytics pipeline that monitors continuous network packets, applies statistical thresholding to detect traffic spikes while minimizing false positives, and feeds a MySQL-backed analytics layer.",
    technologies: ["Python", "Pandas", "NumPy", "Seaborn", "Node.js", "MySQL"],
    bulletPoints: [
      "Built a pipeline that watches streaming data in real time and flags unusual traffic patterns as they happen, with the full flow from raw data stream to a MySQL-backed analytics layer.",
      "Used statistical thresholding to catch spikes, which cut down false positives compared to a simple rule-based approach.",
      "Tuned the queries and processing steps to keep response times low even under continuous data flow."
    ],
    pipelineSteps: [
      { name: "RAW STREAM", description: "Continuous streaming packet metrics & network logs", type: "input" },
      { name: "PANDAS & NUMPY", description: "Real-time rolling window computation & feature extraction", type: "process" },
      { name: "STATISTICAL THRESHOLDING", description: "Dynamic statistical deviations isolating true spikes", type: "decision" },
      { name: "NODE.JS INGESTION", description: "Low-latency streaming ingestion bridge", type: "process" },
      { name: "MYSQL ANALYTICS", description: "Optimized indexed persistence and query layer", type: "output" }
    ],
    caseStudy: {
      problem:
        "Modern enterprise networks generate massive volumes of continuous telemetry. Rigid, hard-coded rule-based alerting generates overwhelming false positive rates during natural traffic surges, causing alert fatigue and masking genuine security anomalies or infrastructure failures.",
      approach:
        "Built a streaming detection pipeline incorporating statistical thresholding across sliding data windows. By dynamically evaluating standard deviations rather than static thresholds, the pipeline isolates genuine surges while absorbing legitimate high-traffic volume fluctuations.",
      architecture: [
        "Raw network telemetry simulation and ingestion layer",
        "Node.js streaming socket pipeline for rapid event handling",
        "NumPy and Pandas computation layer executing rolling statistical aggregations",
        "Statistical thresholding engine filtering background variance and catching genuine spikes",
        "MySQL analytics database with optimized indexing and tuned SQL queries for low latency",
        "Seaborn visualization suite for exploratory analysis and anomaly pattern profiling"
      ],
      implementation: [
        "Languages: Python, Node.js",
        "Data & Statistics: NumPy, Pandas, statistical thresholding",
        "Storage & Querying: MySQL (tuned queries for continuous stream response)",
        "Visualization: Seaborn"
      ],
      results: [
        "Substantially reduced false positives compared to standard rule-based thresholds",
        "Maintained low query and processing latencies under sustained streaming data pressure",
        "Created an end-to-end audit trail from raw telemetry stream to structured MySQL analytics"
      ]
    }
  }
];

export const experience: ExperienceItem[] = [
  {
    role: "Data Analyst Intern",
    company: "Infynas Learning Solutions",
    location: "Raipur",
    period: "Jun 2025 – Jul 2025",
    workflowSteps: [
      "RAW DATA",
      "CLEANING",
      "EDA",
      "FEATURES",
      "MODEL TRAINING",
      "EVALUATION",
      "PRESENTATION"
    ],
    details: [
      "Took a predictive modelling project from a defined problem statement to a working model, then presented the findings back to the team.",
      "Cleaned and prepped structured datasets in Python (Pandas), fixing missing and inconsistent values before they could throw off the models.",
      "Explored the data to find patterns and relationships that shaped which features went into the final model.",
      "Trained and compared a few different models in Scikit-learn, picked the best performer on a held-out test set, and wrote up the results with charts for the team."
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages & Databases",
    description: "Core programming and structured querying fundamentals",
    skills: ["Python", "C++", "SQL (queries, joins, aggregations)"]
  },
  {
    category: "ML / Data",
    description: "Data analysis, statistical modeling, and distributed compute",
    skills: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib/Seaborn",
      "EDA",
      "Statistical thinking",
      "Hadoop/Spark (foundational)"
    ]
  },
  {
    category: "Agentic AI / GenAI",
    description: "Self-correcting workflows, LLM orchestration, and prompt systems",
    skills: [
      "Agentic RAG design",
      "Multi-step agent orchestration",
      "Prompt engineering",
      "Hugging Face Transformers",
      "OpenAI/LLM APIs"
    ]
  },
  {
    category: "Deployment & Tooling",
    description: "Production containerization, APIs, and cloud infrastructure",
    skills: [
      "FastAPI",
      "Docker",
      "AWS (EC2, S3)",
      "Git",
      "Linux/Bash scripting"
    ]
  }
];

export const education: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science Engineering (Data Science)",
    institution: "Bennett University",
    location: "Greater Noida",
    year: "Expected 2027",
    cgpa: "7.14",
    field: "Computer Science Engineering with Specialization in Data Science"
  },
  {
    degree: "Class XII (PCM)",
    institution: "Gyan Ganga Educational Academy",
    location: "Raipur",
    year: "2023",
    field: "Physics, Chemistry, Mathematics"
  }
];

export const certifications: CertificationItem[] = [
  {
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    inProgress: false,
    badgeUrl: "/aws-ai-practitioner-badge.png",
    verificationUrl: "https://www.credly.com/badges/f28a4d87-4588-44e3-8a13-c097b5d8392c/public_url"
  },
  {
    title: "Getting Started with Accelerated Computing in Modern CUDA C++",
    issuer: "NVIDIA",
    inProgress: false
  },
  {
    title: "PySpark & AWS: Master Big Data with PySpark and AWS",
    issuer: "Specialized Training",
    inProgress: false
  },
  {
    title: "Machine Learning Using Python",
    issuer: "Infosys Springboard",
    inProgress: false
  },
  {
    title: "Time Series Analysis using Python",
    issuer: "Infosys Springboard",
    inProgress: false
  },
  {
    title: "Data Science & Analytics Mentorship Program",
    issuer: "Pregrad",
    period: "Jun–Sep 2024",
    inProgress: false
  }
];
