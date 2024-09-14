import './globals.css'
import { Inter } from 'next/font/google';
import data from './assets/data/portfolio.json';
import { AOSInit } from './components/Aos';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: data.name,
  robots: "index,follow",
  description: data.metadata.description,
  keywords: "Syed Ahmed Haider,Ahmed Haider,Full-Stack Engineer,Web Engineer,Backend Engineer,Cloud Engineer & Architect,Software Achitect Systems Engineer,DevOps,Cloud Architecture,Microservices,Software Engineering,Kubernetes,AWS,Ansible,Docker,Terraform,Angular,React,JavaScript,TypeScript,Python,Infrastructure Design,Distributed Computing,Solution Architecture,Data Warehousing,Automation,CI/CD,Node.js,Nest.js,RxJS,MongoDB,MySQL,PostgreSQL,Redis,Graylog,Datadog,Prometheus,Nginx,GitHub,GitLab,Bitbucket,Zabbix,Grafana,AWS EC2,AWS EKS,AWS CloudFormation,AWS Lambda,AWS S3,AWS RDS,AWS DynamoDB,AWS API Gateway,AWS CloudWatch,AWS Route53,AWS SNS,AWS SES,AWS SQS,AWS Fargate,AWS ALB,AWS NLB,AWS WAF,AWS X-Ray,AWS SDK,AWS CLI,Automation,IoT Hobbyist,System Architecture,Product Engineering,System Analysis,System Design,Scalability,Reliability,High Availability,DevOps Practices,Infrastructure as Code,CI/CD Pipelines,Backend Systems,API Development,Cloud Consultancy,Infrastructure Automation,Web Design,Brand Development",
  author: data.name,
  viewport: "width=device-width, initial-scale=1.0",
  charset: "UTF-8"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
