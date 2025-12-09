export const personalInfo = {
  name: "Jan Miláček",
  location: "Prague, Czech Republic",
  email: "jan.milacek@gmail.com",
  github: "https://github.com/jan-milacek",
  linkedin: "https://www.linkedin.com/in/milacek",
  profilePicture: "/jan_milacek_foto.jpeg",
    heroDescription: [
  "I build analytics solutions that executives actually use - Power BI dashboards for strategic decisions, Grafana monitoring for operational excellence, and data platforms designed to last.",
  "After 20 years across banking, logistics, healthcare, and energy, I know the difference between demos and production systems."
],
};

export const aboutMe = {
  title: "About Me",
  intro: [
  "Business intelligence and data analytics consultant based in Prague, specializing in solutions that work reliably long-term.",
  "I've seen enough trendy 'modern data stacks' fail to know what actually survives in production. My approach: proven tools, clear business value, and systems you can maintain after I'm gone."
],
  differentiators: {
    title: "What Makes My Approach Different",
    items: [
      {
        heading: "Business Value First, Technology Second",
        content: [
          "► I've seen too many \"perfect\" data architectures that nobody uses. Power BI gets enterprise adoption. Grafana shows real-time operations. PostgreSQL runs reliably for years.",
          "► Banking taught me: \"good enough\" beats \"perfect\" every time."
        ]
      },
      {
        heading: "Analytics That Drive Decisions",
        content: [
          "► After 20 years building dashboards for executives, I know the difference between data for data's sake and insights that change business outcomes.",
          "► Your dashboard shouldn't just look good—it should answer: \"What should we do differently Monday morning?\""
        ]
      },
      {
        heading: "Enterprise + Modern Stack Bridge",
        content: [
          "► Azure Solutions Architect Expert meets modern open-source analytics. I speak both Microsoft (Power BI, Fabric, Azure) and open-source (PostgreSQL, Grafana, Python) fluently.",
          "► Most consultants know one world. I bridge both."
        ]
      }
    ]
  }
};

export const workExperience = [
  {
    company: "DHL IT Services",
    location: "Prague, Czechia",
    position: "ITS DSC Solutions Domain Consultant",
    period: "Sep 2021 - Present",
    achievements: [
      "► Delivered business intelligence and data engineering solutions combining technical implementation with strategic consulting",
      "► Built production data pipelines with Python, Apache Airflow, and dbt for reliable daily operations",
      "► Developed Power BI and Grafana dashboards for operational analytics and executive reporting",
      "► Designed data warehouse solutions using PostgreSQL and Microsoft Fabric with dimensional modeling",
      "► Implemented monitoring and observability systems using Grafana and Prometheus",
      "► Security Champion - member of Security implementation group representing DSC Solutions Domain",
    ],
  },
  {
    company: "ČSOB Bank (KBC Group)",
    location: "Prague, Czech Republic",
    position: "Managing Architect - Microsoft 365 & Cloud Solutions",
    period: "Apr 2018 - Aug 2021",
    achievements: [
      "► Led Office 365 operations and architecture for KBC Group banks across Europe",
      "► Designed modern workplace architecture based on Microsoft 365 and Azure services",
      "► Managed security, compliance, and risk management in global banking context",
      "► Office 365 L2 support team management and service delivery",
    ],
  },
  {
    company: "E.ON, Fujitsu, Novartis, Carrier",
    location: "Prague, Czech Republic",
    position: "Technical / Leadership Roles",
    period: "2004 - 2018",
    achievements: [
      "► 14+ years building enterprise IT systems across Fortune 500 companies",
      "► Data analytics, monitoring systems, and service delivery management",
      "► Experience spanning telecommunications, healthcare, logistics, and energy sectors",
    ],
  },
];

export const skills = {
  programmingLanguages: [
    "Power BI",
    "Grafana", 
    "SQL",
    "Excel/Power Query",
    "Data Visualization",
    "DAX",
    "Dashboard Design",
    "Executive Reporting",
  ],
  frontendDevelopment: [
    "Python",
    "PostgreSQL",
    "TimescaleDB",
    "Apache Airflow",
    "dbt",
    "Pandas",
    "ETL Pipelines",
  ],
  backendDevelopment: [
    "Microsoft Azure",
    "Microsoft 365",
    "Microsoft Fabric",
    "Azure Data Platform",
  ],
  databaseAndStorage: [
    "Grafana",
    "Prometheus",
    "Operational Dashboards",
    "Automated Alerting",
  ],
  cloudAndDevOps: [
    "Microsoft Azure (Certified Solutions Architect Expert)",
    "Amazon AWS (Integrations)",
    "Prometheus (Monitoring/Alerting)",
  ],
  toolsAndServices: [
    "Microsoft 365 (Enterprise Integration)",
    "Security & Compliance (Certified Cybersecurity Architect Expert)",
    "Power BI", 
    "Grafana",
  ],
};

export const projects = [
  {
    title: "Modern Data Platform for Integration Monitoring",
    link: "https://github.com/jan-milacek/case_studies/tree/main/modern-data-platform-integration-monitoring",
    description: [
      "Built modern data platform monitoring 672 partner connections processing 2.7M daily messages across 4 geographic regions",
      "Designed Airflow + dbt + PostgreSQL architecture handling billions of records with 95%+ reliability",
      "Created 20 Grafana operational dashboards with automated anomaly detection and alerting",
      "Transformed reactive incident response to proactive monitoring - issues detected in minutes vs hours",
      "Delivered comprehensive visibility across EMEA, Americas, and DFCS regions for global logistics operations",
      "Tech Stack: Airflow • dbt • PostgreSQL • Grafana • Prometheus • Python",
    ],
  },
  {
    title: "Resource Management & Billing Analytics Platform",
    link: "https://github.com/jan-milacek/case_studies/tree/main/resource-management-billing-analytics",
    description: [
      "Power BI platform eliminating 96% of manual reporting effort (2 days → 30 minutes monthly)",
      "Automated integration of Planview capacity planning with e-time actual bookings across 100 resources",
      "Built multi-dashboard suite: utilization tracking, overtime compliance, billing reconciliation",
      "Transformed monthly retrospective reporting to daily operational insights for proactive capacity management",
      "Delivered transparent cost allocation and labor compliance monitoring across 50 projects and 5 departments",
      "Tech Stack: Power BI • Snowflake • Excel • Power Query • DAX",
    ],
  },
  {
    title: "Emergency Incident Root Cause Analysis Platform",
    link: "https://github.com/jan-milacek/case_studies/tree/main/emergency-incident-root-cause-analysis",
    description: [
      "Power BI analytics platform supporting critical integration platform migration to cloud",
      "Combined Azure Synapse ServiceNow data with expert root cause categorization for migration risk assessment",
      "Created transparent incident trend analysis by category and responsible department",
      "Enabled data-driven migration prioritization based on historical stability patterns",
      "High stakeholder adoption - transparency drove accountability and constructive improvement conversations",
      "Tech Stack: Azure Synapse Analytics • Power BI • Power Query • ServiceNow • Excel",
    ],
  },
  {
    title: "ServiceNow IT Operations Monitoring Platform",
    link: "https://github.com/jan-milacek/case_studies/tree/main/servicenow-it-operations-monitoring",
    description: [
      "Built integrated monitoring platform bridging ServiceNow ITSM with infrastructure metrics for 20+ critical services",
      "Implemented dual-frequency Airflow orchestration: hourly standard data + 5-minute emergency incident polling",
      "Created Grafana dashboards correlating ServiceNow incidents with Prometheus infrastructure metrics across 100+ servers",
      "Delivered real-time operational visibility and automated SLA compliance tracking for management",
      "Transformed slow manual problem resolution to proactive monitoring with clear operational context",
      "Tech Stack: ServiceNow • Airflow • MySQL • Prometheus • Grafana • Python",
    ],
  },
  {
    title: "SQL for IoT - Educational Tools Development",
    link: "https://github.com/jan-milacek/case_studies/tree/main/sql-for-iot-tools",
    description: [
      "Built custom Python/Streamlit tools for teaching SQL and IoT data analysis",
      "Created SQL Simulator: web-based SQL learning environment with zero installation",
      "Created MQTT Dashboard: real-time IoT sensor monitoring and simulation tool",
      "Designed and delivered 9-week curriculum: SQL fundamentals → Grafana dashboards → real weather station",
      "Students progressed from zero SQL knowledge to professional Grafana dashboards analyzing real sensor data",
      "Tech Stack: Python • Streamlit • SQLite • MQTT • Pandas • Plotly",
    ],
  }

];


export const awards = [
  {
    name: "Microsoft Fabric Data Engineer Associate",
    issuer: "Microsoft",
    date: "Mar 2025",
    type: "Associate Certification",
    position: null,
  },
  {
    name: "Microsoft Fabric Analytics Engineer Associate",
    issuer: "Microsoft",
    date: "Feb 2025",
    type: "Associate Certification",
    position: null,
  },
  {
    name: "Microsoft Azure Data Engineer Associate",
    issuer: "Microsoft",
    date: "Oct 2024",
    type: "Associate Certification",
    position: null,
  },
    {
    name: "Microsoft Power BI Data Analyst Associate",
    issuer: "Microsoft",
    date: "Dec 2023",
    type: "Associate Certification",
    position: null,
  },
  {
    name: "Microsoft Azure Cybersecurity Architect Expert",
    issuer: "Microsoft",
    date: "Jan 2023",
    type: "Expert Certification",
    position: null,
  },
  {
    name: "Microsoft Azure Developer Associate",
    issuer: "Microsoft",
    date: "Sep 2022",
    type: "Associate Certification",
    position: null,
  },
  {
    name: "Microsoft Azure Security Engineer Associate",
    issuer: "Microsoft",
    date: "Jan 2022",
    type: "Associate Certification",
    position: null,
  },
  {
    name: "Microsoft Azure Solutions Architect Expert",
    issuer: "Microsoft",
    date: "Aug 2021",
    type: "Expert Certification",
    position: null,
  }
];

export const contactInfo = {
  description: "Whether you're building new dashboards, fixing existing BI investments, or need someone who understands both business questions and technical implementation - I'm open to discussing opportunities.",
  email: "jan.milacek@gmail.com",
  linkedin: "https://www.linkedin.com/in/milacek",
  github: "https://github.com/jan-milacek",
  location: "Prague, Czech Republic",
  availability: "Consulting, advisory work, speaking engagements",
  expectation: "I typically respond within 24 hours. First conversation is always free - we'll discuss your challenge and whether I can help."
};