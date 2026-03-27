import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCard from "../Certificates/CertificateCard";
import Particle from "../Particle";

// 👉 Add your certificate images here
import cert1 from "../../Assets/Certificates/AWS.jpg";
import cert2 from "../../Assets/Certificates/Coursera.jpg";
import cert3 from "../../Assets/Certificates/Imt.jpg";
import cert4 from "../../Assets/Certificates/Excel.jpg";
import cert5 from "../../Assets/Certificates/FullStack.jpg";
import cert6 from "../../Assets/Certificates/Product management.jpg";
import cert7 from "../../Assets/Certificates/SQL.jpg";
import cert8 from "../../Assets/Certificates/FSD.jpg";
import cert9 from "../../Assets/Certificates/Analyst.jpg";
import cert10 from "../../Assets/Certificates/OR.jpg";
import cert11 from "../../Assets/Certificates/GCN.jpg";
import cert12 from "../../Assets/Certificates/DB.jpg";
import cert13 from "../../Assets/Certificates/Deloitte.jpg";
import cert14 from "../../Assets/Certificates/Pwc.jpg";
import cert15 from "../../Assets/Certificates/Siemens.jpg";
import cert16 from "../../Assets/Certificates/JPMC.jpg";
import cert17 from "../../Assets/Certificates/Mastercard.jpg";
import cert18 from "../../Assets/Certificates/EA.jpg";


function Certificates() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificates</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some certifications I have earned.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert1}
              title="AWS Cloud Practitioner"
              description = "AWS Cloud Practitioner Certification delivering the basics of IAM and Cloud Security"
              certLink="https://aws.amazon.com/verification"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert2}
              title="Operating Systems and Security"
              description="Microsoft's Operating systems and security certification delivering knowledge on data security and computer operations"
              certLink="https://coursera.org/verify/KFXNE4B5ZA8E"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert3}
              title="Digital Business: Understanding the digital world"
              description="Covered a comprehensive understanding of digital business and digital business principles"
              certLink="https://coursera.org/verify/WXVXZHHSDVGP"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert4}
              title="Excel: Beginner to Advanced with AI"
              description="Covers all basics to advanced skills with AI in microsoft Excel"
              certLink="https://ude.my/UC-e7be21d6-ecbf-4819-87d2-94a195ac0312"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert5}
              title="FullStack Web Development Certification"
              description="Covered full stack development including major frontend technologies."
              certLink="https://ude.my/UC-fea970cd-6cee-4622-952d-957a350f14a7"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert6}
              title="Product Management Certification"
              description="Covered full basics to advanced rationales of product management and the associated softwares"
              certLink="https://ude.my/UC-345ea083-2ac3-4056-a794-0701e2b80743"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert7}
              title="SQL Advanced Certification"
              description="Covered SQL basics and advanced technologies in totality."
              certLink="https://www.oneroadmap.io/skills/sql/certificate/CERT-6C5CF19B"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert8}
              title="Web Development Certification"
              description="Covered full stack development including frontend and backend technologies."
              certLink="https://www.oneroadmap.io/skills/fs/certificate/CERT-AA7EA027"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert9}
              title="Data Analyst - Big 4 Ready"
              description="Covered the basics of consultancy and data analytics in Big 4s"
              certLink="https://www.oneroadmap.io/skills/data-analyst-big4/certificate/CERT-CA6A0A94"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert10}
              title="Operations Research: Optimization Algorithms"
              description="Covered engineering optimisation algorithms that are used by modern day businesses"
              certLink="https://coursera.org/verify/5RXJUF7WKO3Q"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert11}
              title="Google Computer Networks Certification"
              description="Covered advanced computer networks and security systems that operate throughout the web."
              certLink="https://coursera.org/verify/GGGHC2M6UFKA"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert12}
              title="Digital Business: Act on Digital World"
              description="Covered Business management, business techniques and project understanding."
              certLink="https://coursera.org/verify/MUA6NKV72FH7"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert13}
              title="Deloitte: Data Analytics Job Simulation"
              description="Completed a virtual simulation focused on building core project management competencies."
              certLink="https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_69c56e62669756a324aacf6b_1774548374729_completion_certificate.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert14}
              title="PWC: Management Consulting Simulation"
              description="Drafted core deliverables including business summaries, a divestiture interview guide, and a qualitative synergy presentation."
              certLink="https://www.theforage.com/completion-certificates/CA4pBqsy4b4PdyaBP/douE8ih9jWMQ2P7sS_CA4pBqsy4b4PdyaBP_69c56e62669756a324aacf6b_1774548191313_completion_certificate.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert15}
              title="Siemens: Project Manager Job Simulation "
              description="Completed a virtual simulation focused on building core project management competencies."
              certLink="https://www.theforage.com/completion-certificates/YtWaumzWHmKiqP63y/zSefEeEKvojiQqiaH_YtWaumzWHmKiqP63y_69c56e62669756a324aacf6b_1774549220186_completion_certificate.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert16}
              title="JP Morgan and Chase: Software Engineering Job Simulation"
              description="Executed enterprise-grade backend development, including Kafka and H2 database integrations."
              certLink="https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_69c56e62669756a324aacf6b_1774547055017_completion_certificate.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert17}
              title="Mastercard: Advisors & Consulting Services Job Simulation"
              description="Refined strategic advisory skills through practical exercises in promotion optimisation."
              certLink="https://www.theforage.com/completion-certificates/mfxGwGDp6WkQmtmTf/DZxgGgvMB6cEtEyJg_mfxGwGDp6WkQmtmTf_69c56e62669756a324aacf6b_1774549025716_completion_certificate.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert18}
              title="Electronic Arts: Product Management Job Simulation"
              description="Evaluated key performance indicators to better understand product strategy."
              certLink="https://www.theforage.com/completion-certificates/j43dGscQHtJJ57N54/5genWYpfo5b57G7yv_j43dGscQHtJJ57N54_69c56e62669756a324aacf6b_1774548542388_completion_certificate.pdf"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;