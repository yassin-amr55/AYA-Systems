import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 text-blue-600 dark:text-orange-500 hover:text-blue-700 dark:hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-blue-600 dark:text-orange-500 border-b-4 border-blue-600 dark:border-orange-500 pb-4 mb-6">
            Privacy Policy for AYA Systems
          </h1>
          
          <p className="text-gray-600 dark:text-gray-400 italic mb-8">
            Last Updated: March 11, 2026
          </p>

          <section className="space-y-6 mb-8">
            <h2 className="text-3xl font-bold text-blue-800 dark:text-orange-400 mt-8 mb-4">1. Introduction</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Welcome to AYA Systems ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and services.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              AYA Systems is a comprehensive school management platform designed to facilitate communication and administration between supervisors, teachers, parents, and students. By using our application, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section className="space-y-6 mb-8">
            <h2 className="text-3xl font-bold text-blue-800 dark:text-orange-400 mt-8 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-2xl font-semibold text-blue-700 dark:text-orange-300 mt-6 mb-3">2.1 Personal Information</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">We collect the following types of personal information:</p>
            <ul className="list-disc ml-8 space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>Account Information:</strong> Email addresses for supervisors, usernames and passwords for teachers, parents, and students</li>
              <li><strong>Profile Information:</strong> Names, grades (for students), school affiliations, and user roles</li>
              <li><strong>Contact Information:</strong> Email addresses and any contact details provided during registration</li>
            </ul>

            <h3 className="text-2xl font-semibold text-blue-700 dark:text-orange-300 mt-6 mb-3">2.2 Usage Information</h3>
            <ul className="list-disc ml-8 space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>Messages:</strong> Content of messages sent between users within the application</li>
              <li><strong>Reports:</strong> Student reports created by teachers, including academic performance and behavioral information</li>
              <li><strong>Activity Logs:</strong> Login times, feature usage, and interaction patterns within the app</li>
              <li><strong>Device Information:</strong> Device type, operating system version, unique device identifiers</li>
            </ul>

            <h3 className="text-2xl font-semibold text-blue-700 dark:text-orange-300 mt-6 mb-3">2.3 Camera and Media Access</h3>
            <ul className="list-disc ml-8 space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>Camera Feeds:</strong> Access to school security cameras connected through the AYA Device (for authorized supervisors only)</li>
              <li><strong>Camera Reports:</strong> Incident reports and recordings generated from camera monitoring</li>
            </ul>
          </section>

          <section className="space-y-6 mb-8">
            <h2 className="text-3xl font-bold text-blue-800 dark:text-orange-400 mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">We use the collected information for the following purposes:</p>
            <ul className="list-disc ml-8 space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>Service Delivery:</strong> To provide and maintain our school management services</li>
              <li><strong>Communication:</strong> To enable messaging between supervisors, teachers, parents, and students</li>
              <li><strong>Account Management:</strong> To create, manage, and authenticate user accounts</li>
              <li><strong>Report Generation:</strong> To create and distribute student reports to authorized parties</li>
              <li><strong>Security Monitoring:</strong> To provide camera monitoring and incident reporting capabilities</li>
              <li><strong>Service Improvement:</strong> To analyze usage patterns and improve our application features</li>
              <li><strong>Support:</strong> To respond to user inquiries and provide customer support</li>
              <li><strong>Compliance:</strong> To comply with legal obligations and protect our rights</li>
            </ul>
          </section>

          <section className="space-y-6 mb-8">
            <h2 className="text-3xl font-bold text-blue-800 dark:text-orange-400 mt-8 mb-4">4. Data Sharing and Disclosure</h2>
            
            <h3 className="text-2xl font-semibold text-blue-700 dark:text-orange-300 mt-6 mb-3">4.1 Within the School Community</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">Information is shared within your school community as follows:</p>
            <ul className="list-disc ml-8 space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>Supervisors:</strong> Can access information about students, parents, and teachers within their school</li>
              <li><strong>Teachers:</strong> Can access information about their assigned students and communicate with parents</li>
              <li><strong>Parents:</strong> Can access information about their own children and communicate with teachers</li>
              <li><strong>Students:</strong> Can access their own reports and messages</li>
            </ul>

            <h3 className="text-2xl font-semibold text-blue-700 dark:text-orange-300 mt-6 mb-3">4.2 Third-Party Service Providers</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">We may share information with trusted third-party service providers who assist us in:</p>
            <ul className="list-disc ml-8 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Cloud hosting and data storage (Supabase)</li>
              <li>Application infrastructure and maintenance</li>
              <li>Analytics and performance monitoring</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">These providers are contractually obligated to protect your information and use it only for the purposes we specify.</p>

            <h3 className="text-2xl font-semibold text-blue-700 dark:text-orange-300 mt-6 mb-3">4.3 Legal Requirements</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., court orders, subpoenas).</p>
          </section>

          <section className="space-y-6 mb-8">
            <h2 className="text-3xl font-bold text-blue-800 dark:text-orange-400 mt-8 mb-4">5. Data Security</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">We implement appropriate technical and organizational security measures to protect your personal information, including:</p>
            <ul className="list-disc ml-8 space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>Encryption:</strong> Data transmission is encrypted using industry-standard protocols</li>
              <li><strong>Access Controls:</strong> Role-based access controls ensure users can only access authorized information</li>
              <li><strong>Authentication:</strong> Secure password requirements and authentication mechanisms</li>
              <li><strong>Regular Updates:</strong> Regular security updates and vulnerability assessments</li>
              <li><strong>Data Backup:</strong> Regular backups to prevent data loss</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.</p>
          </section>

          <section className="space-y-6 mb-8">
            <h2 className="text-3xl font-bold text-blue-800 dark:text-orange-400 mt-8 mb-4">6. Data Retention</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">We retain your personal information for as long as necessary to:</p>
            <ul className="list-disc ml-8 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Provide our services to you</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes and enforce our agreements</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">When you delete your account or when a school relationship ends, we will delete or anonymize your personal information within a reasonable timeframe, unless we are required to retain it for legal purposes.</p>
          </section>

          <section className="space-y-6 mb-8">
            <h2 className="text-3xl font-bold text-blue-800 dark:text-orange-400 mt-8 mb-4">7. Children's Privacy</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">AYA Systems is designed for use in educational settings and may be used by minors under the age of 13. We comply with the Children's Online Privacy Protection Act (COPPA) and similar regulations:</p>
            <ul className="list-disc ml-8 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Student accounts are created by authorized school supervisors, not by children themselves</li>
              <li>We collect only the minimum information necessary to provide our services</li>
              <li>Parents have the right to review, modify, or delete their child's information</li>
              <li>We do not use children's information for marketing purposes</li>
              <li>We do not share children's information with third parties except as necessary to provide our services</li>
            </ul>
          </section>

          <section className="space-y-6 mb-8">
            <h2 className="text-3xl font-bold text-blue-800 dark:text-orange-400 mt-8 mb-4">8. Your Rights and Choices</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc ml-8 space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Objection:</strong> Object to certain processing of your information</li>
              <li><strong>Withdrawal of Consent:</strong> Withdraw consent where processing is based on consent</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">To exercise these rights, please contact your school administrator or reach out to us directly using the contact information below.</p>
          </section>

          <section className="space-y-6 mb-8">
            <h2 className="text-3xl font-bold text-blue-800 dark:text-orange-400 mt-8 mb-4">9. AYA Device Integration</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">Our application integrates with the AYA Device, a hardware system connected to school infrastructure including security cameras and attendance systems. When using camera monitoring features:</p>
            <ul className="list-disc ml-8 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Only authorized supervisors can access camera feeds</li>
              <li>Camera access is logged and monitored</li>
              <li>Recordings are stored securely and retained according to school policies</li>
              <li>Camera data is used solely for school security and safety purposes</li>
            </ul>
          </section>

          <div className="bg-blue-50 dark:bg-slate-700 rounded-xl p-6 mt-8">
            <h2 className="text-3xl font-bold text-blue-800 dark:text-orange-400 mb-4">Contact Us</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>AYA Systems - Daily Apps</strong><br />
              Email: support@ayasystems.com
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-4">For school-specific inquiries, please contact your school administrator first.</p>
          </div>

          <hr className="my-8 border-gray-300 dark:border-slate-600" />
          
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
            © 2026 AYA Systems - Daily Apps. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
