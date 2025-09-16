import { Calendar, ReceiptText } from 'lucide-react';

export default function TermsConditions() {
  const lastUpdated = '16/09/2025';

  return (
    <section className="w-full h-full">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-16 text-start flex flex-row items-center gap-6">
        <div className='border-2 bg-orange-500 border-r-4 border-orange-500 p-4 rounded-lg flex items-center gap-4'>
          <ReceiptText className='h-6 w-6 text-white' />
        </div>
        <h1 className='text-2xl sm:text-3xl font-bold'>Terms & Conditions</h1>
      </div>

      <div className="mx-auto px-4 pb-6 sm:pb-8">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Calendar className='h-4 w-4 text-orange-600' />
          <span>
            Last updated: <span className='font-semibold text-slate-800'>{lastUpdated}</span>
          </span>
        </div>
      </div>

      <div className="mx-auto px-4 pb-10 sm:pb-16 text-start space-y-8">
        <div className="rounded-3xl border border-orange-200 bg-orange-50 p-6 sm:p-8">
          <h2 className="text-lg font-semibold mb-3">Summary</h2>
          <p className="text-slate-700 leading-relaxed">
            By accessing or using the Space-Eyes website (the “Website”), you agree to be bound by these terms and conditions (“Terms”).
            If you do not agree to these Terms, please refrain from using the Website.
          </p>
        </div>

        <nav className="rounded-2xl border border-slate-200 p-4 sm:p-5 bg-white">
          <h3 className="text-sm font-semibold text-slate-700 mb-2">Contenido</h3>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-600">
            <li><a className="hover:text-orange-600" href="#acceptance">1. Acceptance of Terms</a></li>
            <li><a className="hover:text-orange-600" href="#accounts">2. User Accounts</a></li>
            <li><a className="hover:text-orange-600" href="#responsibilities">3. User Responsibilities</a></li>
            <li><a className="hover:text-orange-600" href="#minors">4. Minors</a></li>
            <li><a className="hover:text-orange-600" href="#ip-rights">5. Intellectual Property Rights</a></li>
            <li><a className="hover:text-orange-600" href="#privacy">6. Privacy Policy</a></li>
            <li><a className="hover:text-orange-600" href="#third-party">7. Third-Party Links and Services</a></li>
            <li><a className="hover:text-orange-600" href="#disputes-law">8. Dispute Resolution and Governing Law</a></li>
            <li><a className="hover:text-orange-600" href="#liability">9. Limitation of Liability</a></li>
            <li><a className="hover:text-orange-600" href="#changes">10. Changes to the Terms and Conditions</a></li>
            <li><a className="hover:text-orange-600" href="#termination">11. Termination of User Access</a></li>
          </ul>
        </nav>

        <article className="prose prose-slate max-w-none">
          <section id="acceptance" className="not-prose space-y-3">
            <h3 className="text-xl font-bold">1. Acceptance of Terms</h3>
            <p className="text-slate-700">
              By accessing or using the Space-Eyes website (the “Website”), you agree to be bound by these terms and conditions (“Terms”).
              If you do not agree to these Terms, please refrain from using the Website. These Terms constitute a legally binding agreement between you and Space-Eyes.
            </p>
          </section>

          <section id="accounts" className="not-prose space-y-3 mt-8">
            <h3 className="text-xl font-bold">2. User Accounts</h3>
            <ul className="list-disc pl-5 text-slate-700 space-y-1">
              <li>Users may create accounts on the Website, subject to our account creation and management guidelines.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>We reserve the right to terminate or suspend user accounts for violations of these Terms.</li>
            </ul>
          </section>

          <section id="responsibilities" className="not-prose space-y-3 mt-8">
            <h3 className="text-xl font-bold">3. User Responsibilities</h3>
            <ul className="list-disc pl-5 text-slate-700 space-y-1">
              <li>Comply with all applicable laws and regulations.</li>
              <li>Refrain from engaging in any illegal, abusive, or harassing behavior on the Website.</li>
              <li>Not use the Website for unauthorized advertising or spamming.</li>
              <li>Respect the intellectual property rights of Space-Eyes and third parties.</li>
            </ul>
          </section>

          <section id="minors" className="not-prose space-y-3 mt-8">
            <h3 className="text-xl font-bold">4. Minors</h3>
            <p className="text-slate-700">
              Space-Eyes does not knowingly collect personal information from minors under the age of 18.
              If you are a parent or legal guardian and believe that your child has provided their information to us,
              please contact us at <a className="text-orange-600 hover:underline" href="mailto:support@space-eyes.com">support@space-eyes.com</a> to have their information removed.
            </p>
          </section>

          <section id="ip-rights" className="not-prose space-y-3 mt-8">
            <h3 className="text-xl font-bold">5. Intellectual Property Rights</h3>
            <p className="text-slate-700">
              The content on the Website, including but not limited to text, images, logos, and trademarks,
              is protected by copyright and other intellectual property laws. Users are not permitted to reproduce,
              distribute, or use this content without explicit permission from Space-Eyes.
            </p>
          </section>

          <section id="privacy" className="not-prose space-y-3 mt-8">
            <h3 className="text-xl font-bold">6. Privacy Policy</h3>
            <p className="text-slate-700">
              Your use of the Website is also governed by our Privacy Policy, which outlines how we collect, use, and protect your data.
            </p>
          </section>

          <section id="third-party" className="not-prose space-y-3 mt-8">
            <h3 className="text-xl font-bold">7. Third-Party Links and Services</h3>
            <p className="text-slate-700">
              The Website may contain links to third-party websites or services. Space-Eyes is not responsible for the content,
              practices, or policies of these external sites or services. Your interactions with third parties through the Website
              are solely at your own risk.
            </p>
          </section>

          <section id="disputes-law" className="not-prose space-y-3 mt-8">
            <h3 className="text-xl font-bold">8. Dispute Resolution and Governing Law</h3>
            <p className="text-slate-700">
              Any disputes arising from your use of the Website shall be resolved through arbitration in Miami, Florida,
              in accordance with the rules of the American Arbitration Association. These Terms shall be governed by and
              construed in accordance with the laws of the State of Florida.
            </p>
          </section>

          <section id="liability" className="not-prose space-y-3 mt-8">
            <h3 className="text-xl font-bold">9. Limitation of Liability</h3>
            <p className="text-slate-700">
              The Website is provided “as is” and “as available.” Space-Eyes makes no warranties or representations regarding
              the accuracy, reliability, or availability of the Website.
            </p>
            <p className="text-slate-700">
              To the extent permitted by applicable law, Space-Eyes shall not be liable for any direct, indirect, incidental,
              consequential, or punitive damages resulting from your use of the Website.
            </p>
          </section>

          <section id="changes" className="not-prose space-y-3 mt-8">
            <h3 className="text-xl font-bold">10. Changes to the Terms and Conditions</h3>
            <p className="text-slate-700">
              Space-Eyes reserves the right to update these Terms at any time. Any changes will be posted on the Website,
              and your continued use of the Website constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section id="termination" className="not-prose space-y-3 mt-8">
            <h3 className="text-xl font-bold">11. Termination of User Access</h3>
            <p className="text-slate-700">
              Space-Eyes reserves the right to terminate or suspend user access for violations of these Terms.
            </p>
          </section>
        </article>
      </div>
    </section>
  );
}