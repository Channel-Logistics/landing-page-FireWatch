
import { FileUser, Mail, Phone, MapPin, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { useSendEmail } from "../../../hooks/useMail"
import { buildContactHtml } from "../../../utils/emailTemplates/contactHtml";

export default function ContactUs() {

  const sendEmail = useSendEmail();

  const { handleSubmit, register, reset } = useForm({
    criteriaMode: 'firstError',
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      name: '',
      country: 'Colombia',
      company: '',
      email: '',
      phone: '',
      help: '',
      message: ''
    }
  });

  const onSubmit = async (data) => {

    const formattedData = {
      from: data.email,
      to: "Luis@space-eyes.com",
      subject: `New Contact Us Message from ${data.name}`,
      html: buildContactHtml(data, { accent: "#f97316" }),
      replyTo: data.email,
    };

    try {
      const response = await sendEmail(formattedData);
      reset();
      
    } catch (error) {
      console.error("Error sending email:", error);
    }
  }

  return (
    <section className="w-full">

      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-16 flex items-center gap-4">
        <div className="border-2 bg-orange-500 border-orange-500 p-3 rounded-lg flex items-center">
          <FileUser className="h-6 w-6 text-white" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold">Contact Us</h1>
      </div>


      <div className="mx-auto max-w-7xl px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <div className="mb-6">
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">
                SEND US MESSAGE
              </h2>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >

              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-medium text-slate-700">
                  Your Name
                </label>
                <input
                  {...register("name", { required: true })}
                  id="name"
                  name="name"
                  type="text"
                  placeholder=""
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>


              <div className="flex flex-col">
                <label htmlFor="country" className="text-sm font-medium text-slate-700">
                  Country
                </label>
                <div className="mt-2 relative">
                  <select
                    {...register("country", { required: true })}
                    id="country"
                    name="country"
                    defaultValue="Colombia"
                    className="w-full appearance-none rounded-lg border border-slate-300 bg-white px-4 py-3 pr-8 text-slate-900 outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option>Colombia</option>
                    <option>United States</option>
                    <option>Mexico</option>
                    <option>Argentina</option>
                    <option>Spain</option>
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
                    ▾
                  </span>
                </div>
              </div>


              <div className="flex flex-col">
                <label htmlFor="company" className="text-sm font-medium text-slate-700">
                  Company
                </label>
                <input
                  {...register("company", { required: true })}
                  id="company"
                  name="company"
                  type="text"
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>


              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">
                  Your Email
                </label>
                <input
                  {...register("email", { required: true })}
                  id="email"
                  name="email"
                  type="email"
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>


              <div className="md:col-span-2 flex flex-col">
                <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                  Your Phone
                </label>
                <input
                  {...register("phone", { required: true })}
                  id="phone"
                  name="phone"
                  type="tel"
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>


              <div className="md:col-span-2 flex flex-col">
                <label htmlFor="help" className="text-sm font-medium text-slate-700">
                  How can we help?
                </label>
                <input
                  {...register("help", { required: true })}
                  id="help"
                  name="help"
                  type="text"
                  placeholder="Brief description of your project or inquiry"
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>


              <div className="md:col-span-2 flex flex-col">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">
                  Your Message
                </label>
                <textarea
                  {...register("message", { required: true })}
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us more about your project, goals, and how we can help you achieve them..."
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>


              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 font-semibold text-white shadow-md hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-300"
                >
                  Submit Form
                </button>
              </div>
            </form>
          </div>


          <aside className="rounded-3xl bg-gradient-to-b from-orange-500 to-orange-600 p-7 sm:p-9 text-white shadow-lg">
            <h3 className="text-2xl font-extrabold tracking-tight">CONTACT INFO</h3>


            <div className="mt-8 space-y-1">
              <p className="text-xs uppercase tracking-wider opacity-90">Address:</p>
              <div className="mt-1 flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0" />
                <p className="leading-relaxed">
                  888 Biscayne Blvd. Suite 505,
                  <br />
                  Miami, FL 33132, USA
                </p>
              </div>
            </div>


            <div className="mt-6 space-y-1">
              <p className="text-xs uppercase tracking-wider opacity-90">Phone:</p>
              <div className="mt-1 flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <p>+1 856 614 5441</p>
              </div>
            </div>


            <div className="mt-6 space-y-1">
              <p className="text-xs uppercase tracking-wider opacity-90">Email:</p>
              <div className="mt-1 flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <p>Support@Space-Eyes.com</p>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </section>
  );
}
