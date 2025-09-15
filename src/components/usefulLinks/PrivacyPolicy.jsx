import { Calendar } from 'lucide-react';

export default function PrivacyPolicy({

}) {
    return (
        <section className="w-full h-full">
            <div className="mx-auto max-w-7xl px-4 py-10 sm:py-16 text-start flex flex-row items-center gap-6">
                <div className='border-2 bg-orange-500 border-r-4 border-orange-500 p-4 rounded-lg flex items-center gap-4'>
                    <Calendar className='h-6 w-6' />
                </div>
                <h2 className='text-lg font-semibold'>Terminos y condiciones</h2>
            </div>

            <div className="mx-auto max-w-3xl px-4 pb-10 sm:pb-16 text-start flex flex-col rounded-3xl border-orange-500 bg-orange-50 ">
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                    <span className="text-orange-500"> Ultima actualizacion: 01/01/2023</span>

                </h2>
            </div>
        </section>
    );
}
