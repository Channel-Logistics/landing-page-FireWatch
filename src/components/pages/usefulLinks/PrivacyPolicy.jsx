  import { Calendar, FileText } from 'lucide-react';

  export default function PrivacyPolicy() {
    const lastUpdated = '16/09/2025';

    return (
      <section className="w-full h-full">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:py-16 text-start flex flex-row items-center gap-6">
          <div className="border-2 bg-orange-500 border-r-4 border-orange-500 p-4 rounded-lg flex items-center gap-4">
            <FileText className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold">Privacy Policy</h1>
        </div>

        <div className="mx-auto  px-4 pb-6 sm:pb-8">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Calendar className="h-4 w-4 text-orange-600" />
            <span>
              Last updated: <span className="font-semibold text-slate-800">{lastUpdated}</span>
            </span>
          </div>
        </div>

        <div className="mx-auto  px-2 pb-10 sm:pb-16 text-start space-y-8 gap-5"> 
          <div className="rounded-3xl border border-orange-200 bg-orange-50 p-6 sm:p-8">
            <h2 className="text-lg font-semibold mb-3">Overview</h2>
            <p className="text-slate-700 leading-relaxed">
              This Privacy Policy describes what personal information we collect, how we use it, who we share it with, and your rights.
              We may update this policy periodically. Your continued use of this site indicates your agreement to the updated terms.
            </p>
          </div>

          <nav className="rounded-2xl border border-slate-200 p-4 sm:p-5 bg-white">
            <h3 className="text-sm font-semibold text-slate-700 mb-2">Contents</h3>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-600">
              <li><a className="hover:text-orange-600" href="#introduction">1. Introduction</a></li>
              <li><a className="hover:text-orange-600" href="#what-we-collect">2. What personal information do we collect?</a></li>
              <li><a className="hover:text-orange-600" href="#how-we-collect">3. How do we collect personal information?</a></li>
              <li><a className="hover:text-orange-600" href="#how-we-use">4. How and why do we use personal information?</a></li>
              <li><a className="hover:text-orange-600" href="#disclosure">5. With whom do we disclose personal information?</a></li>
              <li><a className="hover:text-orange-600" href="#protection">6. How do we protect personal information?</a></li>
              <li><a className="hover:text-orange-600" href="#rights">7. Your privacy rights</a></li>
              <li><a className="hover:text-orange-600" href="#children">8. Children’s privacy</a></li>
              <li><a className="hover:text-orange-600" href="#retention">9. Data retention</a></li>
              <li><a className="hover:text-orange-600" href="#third-party">10. Third-party websites</a></li>
              <li><a className="hover:text-orange-600" href="#changes">11. Changes to this privacy policy</a></li>
              <li><a className="hover:text-orange-600" href="#contact">12. Contact information</a></li>
              <li><a className="hover:text-orange-600" href="#governing-law">13. Governing law and jurisdiction</a></li>
              <li><a className="hover:text-orange-600" href="#consent">14. Your consent</a></li>
              <li><a className="hover:text-orange-600" href="#additional-notices">15. Additional privacy notices</a></li>
            </ul>
          </nav>

          <article className="prose prose-slate max-w w-full">
            <section id="introduction" className="not-prose mt-8">
              <h3 className="text-xl font-bold">1. Introduction</h3>
              <p className="text-slate-700">
                We don’t knowingly sell your personal information, but we still have to tell you what we collect from you and how we use it.
                We may update this policy from time to time. Your continued use of this site indicates your agreement to the updated terms.
              </p>
            </section>

            <section id="what-we-collect" className="not-prose mt-8 scroll-mt-24 md:scroll-mt-28">
              <h3 className="text-xl font-bold">2. What personal information do we collect?</h3>
              <p className="text-slate-700">
                Depending on how you interact with our website, we may collect the following personal information about you:
              </p>
              <ul className="list-disc pl-5 text-slate-700 space-y-1">
                <li><span className="font-semibold">Identity Data</span>: first name, last name, title.</li>
                <li><span className="font-semibold">Contact Data</span>: postal address, email address, telephone numbers.</li>
                <li><span className="font-semibold">Profile Data</span>: username and password, purchases, customer service requests.</li>
                <li><span className="font-semibold">Financial Data</span>: payment card details, billing address.</li>
                <li><span className="font-semibold">Transaction Data</span>: details about payments and purchases.</li>
                <li><span className="font-semibold">Technical Data</span>: IP address, browser type/version, time zone, general location, plug-ins, OS/platform, and site usage.</li>
                <li><span className="font-semibold">Marketing and Communications Data</span>: preferences for receiving communications.</li>
                <li><span className="font-semibold">Employment Data</span>: if you apply to Space-Eyes, information in your application (education, work history, contact info, demographics).</li>
              </ul>
            </section>

            <section id="how-we-collect" className="not-prose mt-8 scroll-mt-24 md:scroll-mt-28">
              <h3 className="text-xl font-bold">3. How do we collect personal information?</h3>
              <ul className="list-disc pl-5 text-slate-700 space-y-1">
                <li><span className="font-semibold">From you</span>: e.g., subscriptions, purchases, requests, promotions, surveys, or correspondence. We also automatically collect Technical Data via cookies, server logs, and similar technologies.</li>
                <li><span className="font-semibold">From publicly available sources</span>: information you or your organization make publicly available online.</li>
              </ul>
            </section>

            <section id="how-we-use" className="not-prose mt-8 scroll-mt-24 md:scroll-mt-28">
              <h3 className="text-xl font-bold">4. How and why do we use personal information?</h3>
              <ul className="list-disc pl-5 text-slate-700 space-y-1">
                <li>For specific business purposes related to the goods and services we provide.</li>
                <li>To process and deliver customer orders.</li>
                <li>To manage payments, fees, and charges.</li>
                <li>To manage our relationship with you and provide customer service.</li>
                <li>To administer and protect our business and services.</li>
                <li>To detect, prevent, or address fraud, security, or technical issues.</li>
                <li>To defend our interests in the event of a dispute.</li>
                <li>To comply with applicable laws, legal processes, and lawful government requests.</li>
                <li>To understand your interests and deliver relevant content.</li>
                <li>To ask and enable you to take a survey.</li>
                <li>To use data analytics to improve products, services, and experiences.</li>
                <li>To intake and assess your employment application and contact you about hiring.</li>
              </ul>
            </section>

            <section id="disclosure" className="not-prose mt-8 scroll-mt-24 md:scroll-mt-28">
              <h3 className="text-xl font-bold">5. With whom do we disclose personal information?</h3>
              <p className="text-slate-700">
                We may disclose your personal information with:
              </p>
              <ul className="list-disc pl-5 text-slate-700 space-y-1">
                <li><span className="font-semibold">Our Service Providers</span>: hosting, backups, payments, debt collection, customer service, communications, delivery, analytics.</li>
                <li><span className="font-semibold">Government Agencies, Regulators, and Professional Advisors</span>: as required by law or to defend our legal interests.</li>
                <li><span className="font-semibold">Organizations Involved in Business Transfers</span>: in the event of a sale, merger, or reorganization, subject to applicable law.</li>
              </ul>
            </section>

            <section id="protection" className="not-prose mt-8 scroll-mt-24 md:scroll-mt-28">
              <h3 className="text-xl font-bold">6. How do we protect personal information?</h3>
              <p className="text-slate-700">
                We implement technological, physical, and administrative safeguards appropriate to the risks and the nature of the personal information.
                Although we endeavor to keep information secure, we cannot guarantee against every unauthorized attempt to access, use, or disclose personal information.
                We maintain procedures to address suspected breaches and will notify you and regulators where legally required.
              </p>
            </section>

            <section id="rights" className="not-prose mt-8 scroll-mt-24 md:scroll-mt-28">
              <h3 className="text-xl font-bold">7. Your privacy rights</h3>
              <p className="text-slate-700">
                Under applicable laws, you may have rights to access, update, correct, port, erase, restrict, or object to our use of certain personal information.
                If applicable and your request meets legal requirements, we will honor your request as required by law.
              </p>
            </section>

            <section id="children" className="not-prose mt-8 scroll-mt-24 md:scroll-mt-28">
              <h3 className="text-xl font-bold">8. Children’s privacy</h3>
              <p className="text-slate-700">
                We do not knowingly collect personal information from children under 16. If we learn we have collected such information, we will delete it.
                Parents or guardians may contact us at <a className="text-orange-600 hover:underline" href="mailto:support@space-eyes.com">support@space-eyes.com</a>.
              </p>
            </section>

            <section id="retention" className="not-prose mt-8 scroll-mt-24 md:scroll-mt-28">
              <h3 className="text-xl font-bold">9. Data retention</h3>
              <p className="text-slate-700">
                We retain personal information only as long as necessary for the purposes collected or as required by law.
              </p>
            </section>

            <section id="third-party" className="not-prose mt-8 scroll-mt-24 md:scroll-mt-28">
              <h3 className="text-xl font-bold">10. Third-party websites</h3>
              <p className="text-slate-700">
                We are not responsible for the practices of websites linked to or from our website. Your use of those sites is subject to their policies, including their privacy policies.
              </p>
            </section>

            <section id="changes" className="not-prose mt-8 scroll-mt-24 md:scroll-mt-28">
              <h3 className="text-xl font-bold">11. Changes to this privacy policy</h3>
              <p className="text-slate-700">
                We may update this Privacy Policy periodically to reflect changes in our practices or for legal or regulatory reasons. We will post the revised policy on the website.
              </p>
            </section>

            <section id="contact" className="not-prose mt-8 scroll-mt-24 md:scroll-mt-28">
              <h3 className="text-xl font-bold">12. Contact information</h3>
              <p className="text-slate-700">
                If you have questions or concerns about this Privacy Policy, contact us at
                <a className="text-orange-600 hover:underline ml-1" href="mailto:support@space-eyes.com">support@space-eyes.com</a>.
              </p>
            </section>

            <section id="governing-law" className="not-prose mt-8 scroll-mt-24 md:scroll-mt-28">
              <h3 className="text-xl font-bold">13. Governing law and jurisdiction</h3>
              <p className="text-slate-700">
                This Privacy Policy is governed by the laws of the State of Florida, United States.
                Any disputes are subject to the exclusive jurisdiction of the state and federal courts in Miami-Dade County, Florida.
              </p>
            </section>

            <section id="consent" className="not-prose mt-8 scroll-mt-24 md:scroll-mt-28">
              <h3 className="text-xl font-bold">14. Your consent</h3>
              <p className="text-slate-700">
                By using the Space-Eyes website, you consent to the terms of this Privacy Policy.
              </p>
            </section>

            <section id="additional-notices" className="not-prose mt-8 scroll-mt-24 md:scroll-mt-28">
              <h3 className="text-xl font-bold">15. Additional privacy notices</h3>
              <p className="text-slate-700">
                We may provide additional or different privacy notices in specific instances describing how your personal information is collected and used for a particular service.
              </p>
            </section>
          </article>
        </div>
      </section>
    );
  }