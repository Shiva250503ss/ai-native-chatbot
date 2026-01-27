'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Cpu, PenTool, Users, Database, Cloud } from 'lucide-react';

const Skills = () => {
  const skillsData = [
    {
      category: 'Programming Languages',
      icon: <Code className="h-5 w-5" />,
      skills: [
        'Python',
        'SQL',
        'PySpark',
        'R',
        'Java',
        'Scala',
      ],
      color: 'bg-blue-50 text-blue-600 border border-blue-200',
    },
    {
      category: 'AI/ML & NLP',
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        'PyTorch',
        'TensorFlow',
        'scikit-learn',
        'LangChain',
        'RAG Pipelines',
        'Hugging Face',
        'XGBoost',
        'LightGBM',
        'OpenAI API',
        'Prompt Engineering',
      ],
      color: 'bg-emerald-50 text-emerald-600 border border-emerald-200',
    },
    {
      category: 'Data Visualization & BI',
      icon: <PenTool className="h-5 w-5" />,
      skills: [
        'Tableau',
        'Power BI',
        'Plotly',
        'Streamlit',
        'Matplotlib',
        'Seaborn',
        'Looker Studio',
      ],
      color: 'bg-purple-50 text-purple-600 border border-purple-200',
    },
    {
      category: 'Cloud & Infrastructure',
      icon: <Cloud className="h-5 w-5" />,
      skills: [
        'AWS (SageMaker, S3, EC2)',
        'GCP (BigQuery, Vertex AI)',
        'Azure ML',
        'Docker',
        'Kubernetes',
        'CI/CD Pipelines',
      ],
      color: 'bg-orange-50 text-orange-600 border border-orange-200',
    },
    {
      category: 'Data Engineering',
      icon: <Database className="h-5 w-5" />,
      skills: [
        'Apache Spark',
        'Apache Kafka',
        'Apache Airflow',
        'Databricks',
        'Snowflake',
        'Delta Lake',
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'Pinecone',
        'ChromaDB',
      ],
      color: 'bg-indigo-50 text-indigo-600 border border-indigo-200',
    },
    {
      category: 'Soft Skills',
      icon: <Users className="h-5 w-5" />,
      skills: [
        'A/B Testing',
        'Statistical Analysis',
        'Problem Solving',
        'Stakeholder Management',
        'Technical Writing',
        'Agile/Scrum',
        'Quick Learner',
      ],
      color: 'bg-amber-50 text-amber-600 border border-amber-200',
    },
  ];

  return (
    <div className="mx-auto w-full max-w-5xl rounded-4xl animate-in fade-in zoom-in-98 duration-500">
      <Card className="w-full border-none bg-transparent px-0 pb-12 text-black shadow-none dark:text-white">
        <CardHeader className="px-0 pb-1">
          <CardTitle className="text-primary px-0 text-4xl font-bold">
            Skills & Expertise 🛠️
          </CardTitle>
        </CardHeader>

        <CardContent className="px-0">
          <div className="space-y-8 px-0">
            {skillsData.map((section, index) => (
              <div
                key={index}
                className="space-y-3 px-0"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-2">
                  {section.icon}
                  <h3 className="text-accent-foreground text-lg font-semibold">
                    {section.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {section.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      className="border px-3 py-1.5 font-normal hover:scale-105 transition-transform duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Skills;
