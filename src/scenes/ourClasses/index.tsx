import { SelectedPage, ClassType } from '@/shared/types'
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Class from './Class'

const classes: Array<ClassType> = [
    {
        name: 'Weight Training Classes',
        description: "Our intensive weight training class, led by expert trainers, is designed to sculpt and strengthen your body. Whether you're a beginner or seasoned lifter, get ready to sweat and see results.",
        image: image1,
    },
    {
        name: 'Yoga Classes',
        description: "Experience yoga's transformative power in our welcoming classes led by expert instructors. Suitable for all levels, these sessions focus on breath, movement, and mindfulness for inner peace and strength.",
        image: image2,
    },
    {
        name: 'Ab Core Classes',
        description: "Get ready to strengthen and sculpt your core with our targeted abs classes. Led by expert trainers, these classes focus on building abdominal strength and toning your midsection.",
        image: image3,
    },
    {
        name: 'Adventure Classes',
        description: "Explore our exhilarating adventure classes, led by experienced guides, for a thrilling fitness experience. From outdoor hikes to obstacle courses, our classes offer exciting challenges in unique settings.",
        image: image4,
    },
    {
        name: 'Fitness Classes',
        description: "Embark on a fitness journey with our wide range of classes, led by certified instructors. From cardio to flexibility, our classes offer something for everyone.",
        image: image5,
    },
    {
        name: 'Training Classes',
        description: "Dive into our diverse training classes, led by expert instructors, for a full-body workout experience. From cardio to strength training, our classes cater to all fitness levels. Join us to sweat, push your limits, and achieve your fitness goals.",
        image: image6,
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage)=>void
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id='ourclasses' className='w-full bg-primary-500 py-40'>
        <motion.div
        onViewportEnter={()=>setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
                hidden: {opacity: 0, x: -50},
                visible: {opacity: 1, x: 0},
            }}
            className='mx-auto w-5/6'
            >
                <div className='md:w-3/5'>
                    <HText>OUR CLASSES</HText>
                    <p className='py-5'>
                    Explore diverse fitness classes led by experienced instructors, offering options for all levels and interests. With over a hundred choices available, find the perfect fit for your schedule and goals. Join us for an energizing group experience, whether you're aiming to build strength, enhance flexibility, or simply unwind.
                    </p>
                </div>
            </motion.div>
            <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                <ul className='w-[2800px] whitespace-nowrap'>
                    {classes.map((item: ClassType, index)=>(
                        <Class
                        key={`${item.name}-${index}`}
                        name={item.name}
                        description={item.description}
                        image={item.image}
                        />
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses