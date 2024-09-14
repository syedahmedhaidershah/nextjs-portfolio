import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import Head from "next/head";
import data from './assets/data/portfolio.json';
import { GoogleAnalytics } from '@next/third-parties/google'


export default function Home() {  
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Head>
        <meta name="robots" content="index,follow" />;
        <meta name="title" content="Ahmed Haider - Backend Engineer, Systems Engineer, DevOps Specialist, Infrastructure Architect, Cloud Architect, Solution Architect" />
        <meta name="description" content="Ahmed Haider is a seasoned Backend, Cloud & Systems Engineer and DevOps Specialist with expertise in microservices, cloud architecture, scalability and software engineering principles." />
        <meta name="keywords" content="Ahmed Haider, Backend Engineer, Systems Engineer, DevOps, Cloud Architecture, Microservices, Software Engineering, Kubernetes, AWS, Ansible, Docker, Terraform, Angular, React, JavaScript, TypeScript, Python, Infrastructure Design, Distributed Computing, Solution Architecture, Data Warehousing, Automation, CI/CD, Node.js, Nest.js, RxJS, MongoDB, MySQL, PostgreSQL, Redis, Graylog, Datadog, Prometheus, Nginx, GitHub, GitLab, Bitbucket, Zabbix, Grafana, AWS EC2, AWS EKS, AWS CloudFormation, AWS Lambda, AWS S3, AWS RDS, AWS DynamoDB, AWS API Gateway, AWS CloudWatch, AWS Route53, AWS SNS, AWS SES, AWS SQS, AWS Fargate, AWS ALB, AWS NLB, AWS WAF, AWS X-Ray, AWS SDK, AWS CLI, Automation, IoT Hobbyist, System Architecture, Product Engineering, System Analysis, System Design, Scalability, Reliability, High Availability, DevOps Practices, Infrastructure as Code, CI/CD Pipelines, Backend Systems, API Development, Cloud Consultancy, Infrastructure Automation, Web Design, Brand Development" />
        <meta name="author" content="Ahmed Haider" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8"></meta>
        <title>{data.name}</title>
      </Head>
      {/* Browser event handlers */}
      <GoogleAnalytics gaId={data.GAID} />
      <Navbar />
      <div className="container mt-24 laptop:mt-16 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
