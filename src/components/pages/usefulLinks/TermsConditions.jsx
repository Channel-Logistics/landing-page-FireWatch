import { Calendar, FileText } from 'lucide-react';

export default function TermsConditions() {
  const lastUpdated = '16/09/2025';

  return (
    <section className="w-full h-full">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-16 text-start flex flex-row items-center gap-6">
        <div className='border-2 bg-orange-500 border-r-4 border-orange-500 p-4 rounded-lg flex items-center gap-4'>
          <FileText className='h-6 w-6 text-white' />
        </div>
        <h1 className='text-2xl sm:text-3xl font-bold'>Términos y Condiciones</h1>
      </div>

      <div className="mx-auto max-w-3xl px-4 pb-6 sm:pb-8">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Calendar className='h-4 w-4 text-orange-600' />
          <span>
            Última actualización: <span className='font-semibold text-slate-800'>{lastUpdated}</span>
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 pb-10 sm:pb-16 text-start space-y-8">
        <div className="rounded-3xl border border-orange-200 bg-orange-50 p-6 sm:p-8">
          <h2 className="text-lg font-semibold mb-3">Resumen</h2>
          <p className="text-slate-700 leading-relaxed">
            Este documento establece los términos bajo los cuales se ofrece y utiliza la
            plataforma FireWatch. Al acceder o utilizar nuestros servicios, aceptas estos
            Términos y Condiciones. Si no estás de acuerdo, por favor no utilices la
            plataforma.
          </p>
        </div>

        <nav className="rounded-2xl border border-slate-200 p-4 sm:p-5 bg-white">
          <h3 className="text-sm font-semibold text-slate-700 mb-2">Contenido</h3>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-600">
            <li><a className="hover:text-orange-600" href="#introduccion">1. Introducción</a></li>
            <li><a className="hover:text-orange-600" href="#aceptacion">2. Aceptación de los términos</a></li>
            <li><a className="hover:text-orange-600" href="#servicio">3. Descripción del servicio</a></li>
            <li><a className="hover:text-orange-600" href="#cuentas">4. Cuentas y seguridad</a></li>
            <li><a className="hover:text-orange-600" href="#pagos">5. Suscripciones y pagos</a></li>
            <li><a className="hover:text-orange-600" href="#uso-aceptable">6. Uso aceptable</a></li>
            <li><a className="hover:text-orange-600" href="#propiedad">7. Propiedad intelectual</a></li>
            <li><a className="hover:text-orange-600" href="#privacidad">8. Privacidad</a></li>
            <li><a className="hover:text-orange-600" href="#responsabilidad">9. Limitación de responsabilidad</a></li>
            <li><a className="hover:text-orange-600" href="#modificaciones">10. Modificaciones</a></li>
            <li><a className="hover:text-orange-600" href="#contacto">11. Contacto</a></li>
          </ul>
        </nav>

        <article className="prose prose-slate max-w-none">
          <section id="introduccion" className="not-prose space-y-3">
            <h3 className="text-xl font-bold">1. Introducción</h3>
            <p className="text-slate-700">
              FireWatch ofrece herramientas de monitoreo, análisis y alerta relacionadas con
              incendios y condiciones ambientales. Estos términos rigen la relación entre tú y
              nosotros respecto al uso de la plataforma y sus funcionalidades.
            </p>
          </section>

          <section id="aceptacion" className="not-prose space-y-3 mt-8">
            <h3 className="text-xl font-bold">2. Aceptación de los términos</h3>
            <p className="text-slate-700">
              Al registrarte, acceder o utilizar los servicios, declaras que has leído y
              aceptas estos Términos y que cuentas con la capacidad legal para hacerlo.
            </p>
          </section>

          <section id="servicio" className="not-prose space-y-3 mt-8">
            <h3 className="text-xl font-bold">3. Descripción del servicio</h3>
            <p className="text-slate-700">
              Brindamos visualización de datos, alertas y reportes. Las funcionalidades
              específicas pueden variar según el plan contratado y pueden actualizarse con el
              tiempo para mejorar el servicio.
            </p>
          </section>

          <section id="cuentas" className="not-prose space-y-3 mt-8">
            <h3 className="text-xl font-bold">4. Cuentas y seguridad</h3>
            <ul className="list-disc pl-5 text-slate-700 space-y-1">
              <li>Eres responsable de la confidencialidad de tus credenciales.</li>
              <li>Debes notificarnos ante cualquier acceso no autorizado.</li>
              <li>Podemos suspender cuentas por actividad sospechosa o incumplimientos.</li>
            </ul>
          </section>

          <section id="pagos" className="not-prose space-y-3 mt-8">
            <h3 className="text-xl font-bold">5. Suscripciones y pagos</h3>
            <p className="text-slate-700">
              En caso de planes de pago, los cargos se realizan de manera periódica según el
              ciclo elegido. Los impuestos aplicables y condiciones específicas se indicarán en
              el proceso de contratación.
            </p>
          </section>

          <section id="uso-aceptable" className="not-prose space-y-3 mt-8">
            <h3 className="text-xl font-bold">6. Uso aceptable</h3>
            <ul className="list-disc pl-5 text-slate-700 space-y-1">
              <li>No realizar ingeniería inversa, extracción masiva o uso fraudulento.</li>
              <li>No interferir con la seguridad o disponibilidad del servicio.</li>
              <li>Respetar la legislación vigente y derechos de terceros.</li>
            </ul>
          </section>

          <section id="propiedad" className="not-prose space-y-3 mt-8">
            <h3 className="text-xl font-bold">7. Propiedad intelectual</h3>
            <p className="text-slate-700">
              El software, marca, contenidos y documentación asociados a FireWatch son
              propiedad de sus respectivos titulares y están protegidos por leyes de propiedad
              intelectual. No se concede ninguna licencia salvo lo expresamente indicado.
            </p>
          </section>

          <section id="privacidad" className="not-prose space-y-3 mt-8">
            <h3 className="text-xl font-bold">8. Privacidad</h3>
            <p className="text-slate-700">
              El tratamiento de datos personales se rige por nuestra Política de Privacidad.
              Te recomendamos revisarla para comprender cómo recopilamos, usamos y protegemos
              tu información.
            </p>
          </section>

          <section id="responsabilidad" className="not-prose space-y-3 mt-8">
            <h3 className="text-xl font-bold">9. Limitación de responsabilidad</h3>
            <p className="text-slate-700">
              La plataforma se ofrece "tal cual" y "según disponibilidad". En la medida que
              la ley lo permita, no nos hacemos responsables por daños indirectos, incidentales
              o consecuentes derivados del uso o imposibilidad de uso del servicio.
            </p>
          </section>

          <section id="modificaciones" className="not-prose space-y-3 mt-8">
            <h3 className="text-xl font-bold">10. Modificaciones</h3>
            <p className="text-slate-700">
              Podemos actualizar estos Términos cuando sea necesario. Publicaremos la versión
              revisada indicando la fecha de actualización. El uso continuado del servicio
              implica la aceptación de los cambios.
            </p>
          </section>

          <section id="contacto" className="not-prose space-y-3 mt-8">
            <h3 className="text-xl font-bold">11. Contacto</h3>
            <p className="text-slate-700">
              Si tienes preguntas sobre estos Términos, contáctanos en
              <a className="text-orange-600 hover:underline ml-1" href="mailto:contact@firewatch.app">contact@firewatch.app</a>.
            </p>
          </section>
        </article>
      </div>
    </section>
  );
}


