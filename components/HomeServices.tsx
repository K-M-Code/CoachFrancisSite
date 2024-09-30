// components/HomeServices.tsx
import Image from 'next/image'
import BoxImage from '@/public/box.svg'
import WalletImage from '@/public/wallet.svg'
import DocumentsImage from '@/public/documents.svg'
import CareerImage from '@/public/career.svg'

const HomeServices = () => {
    const servicesData = [
    { image: BoxImage, title: 'Moving' },
    { image: WalletImage, title: 'Banking' },
    { image: DocumentsImage, title: 'Official Documents' },
    { image: CareerImage, title: 'Career' }
    ]
    return (
    <div>
        <section className='services py-24'>
        <div className='container mx-auto grid grid-cols-1 gap-12 px-8 lg:px-20 2xl:px-0 lg:grid-cols-2'>
            <div>
            <h1 className='mb-4 text-2xl font-bold'>How can I help you?</h1>
            <p className='text-lg'>
                I can help you with your personal and professional goals, and
                I&#39;m here to support you in any way I can. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Ea quidem id, quas aut
                repellat dolores dolore. Hic soluta, corporis dicta nihil quisquam
                temporibus reiciendis nesciunt sapiente, recusandae qui maxime
                magni! Consequatur quas voluptatibus commodi error aspernatur
                doloribus, saepe id, officia amet atque consectetur ea iusto
                deserunt accusantium! A voluptate ducimus, nesciunt, quae
                assumenda nostrum, impedit obcaecati eligendi dolorem sint magni.
            </p>
            </div>
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
            {servicesData.map((service, index) => (
                <div
                key={index}
                className={`flex flex-col items-center justify-center shadow-xl hover:shadow-2xl transform hover:scale-105 duration-300 rounded-xl p-4 ${index % 2 == 5 ? 'mt-20' : ''}`}
                >
                <Image src={service.image} alt='' className='mb-6 h-28 w-28' />
                <h3 className='text-xl font-bold'>{service.title}</h3>
                </div>
            ))}
            </div>
        </div>
        </section>
    </div>
    )
}
export default HomeServices
