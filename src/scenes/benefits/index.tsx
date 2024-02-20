import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Experience unparalleled excellence with our state-of-the-art facilities, meticulously designed to elevate your every moment."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: "Dive into a world of endless possibilities with our diverse array of over a hundred classes tailored to ignite your passion and unlock your potential."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: "Embark on your journey to excellence with our team of expert trainers, dedicated to guiding you towards mastery and success."
    },
]

const container = {
    hidden: {},
    visible: {
        transition:{staggerChildren: 0.2}
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage)=>void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id='benefits' className="mx-auto min-h-full w-5/6 py-20">
        <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}>
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
                hidden: {opacity: 0, x: -50},
                visible: {opacity: 1, x: 0},
            }}
             className="md:my-5 md:w-3/5">
                <HText>MORE THAN JUST A GYM.</HText>
                <p className="my-5 text-sm">
                    We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.
                </p>
            </motion.div>
            <motion.div className="md:flex items-center justify-between gap-8 mt-5"
            initial='hidden'
            whileInView='visible'
            viewport={{once: true, amount: 0.5}}
            variants={container}
            >
                {benefits.map((benefit: BenefitType)=>(
                    <Benefit
                    key={benefit.title} 
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>

            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                <img 
                className="mx-auto"
                src={BenefitsPageGraphic} alt="benefits-page-graphic" />
                <div>
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                            <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.5}}
                            transition={{duration: 0.5}}
                            variants={{
                                hidden: {opacity: 0, x: 50},
                                visible: {opacity: 1, x: 0},
                            }}>
                                <HText>
                                    MILLIONS OF HAPPY MEMBER GETTING{' '}
                                    <span className="text-primary-500">FIT</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>

                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay: 0.2, duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: 50},
                        visible: {opacity: 1, x: 0},
                    }}
                    >
                        <p className="my-5">At our gym, we pride ourselves on our diverse community of members who have found joy and success in their fitness journeys. With millions of happy individuals achieving their fitness goals, our gym stands as a beacon of empowerment and transformation. From weight loss milestones to strength gains, our members experience a myriad of benefits that extend far beyond physical appearance. Our supportive environment fosters camaraderie, ensuring that everyone feels welcomed and encouraged to push their limits.</p>
                        <p className="mb-5">Joining our gym means becoming a part of a dynamic network of individuals who share a common goal: improving their health and well-being. With access to state-of-the-art facilities and expert guidance from our certified trainers, our members embark on a path of self-discovery and personal growth. Whether it's shedding pounds, building muscle, or enhancing overall wellness, our gym provides the resources and support needed to make fitness a fulfilling and sustainable lifestyle. Experience the satisfaction of joining millions of happy members who are not just getting fit, but thriving in every aspect of their lives.</p>
                    </motion.div>

                    <div className="relative my-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>

                </div>
            </div>

        </motion.div>
    </section>
  )
}

export default Benefits