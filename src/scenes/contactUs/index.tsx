import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import HText from "@/shared/HText"

type Props = {
    setSelectedPage: (value: SelectedPage)=>void
}

const inputStyles = `w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

const{
 register,
 trigger,
 formState: {errors}
} = useForm();

const onSubmit = async (e:any)=>{
    const isValid = await trigger();
    if(!isValid){
        e.preventDefault();
    }
}

const ContactUs = ({setSelectedPage}: Props) => {
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
        <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.ContactUs)}>
            <motion.div
            className="md:w-3/5"
            initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0},
                }}
            >
                <HText>
                    <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
                </HText>
                <p className="my-5">Join now to start your fitness journey with us! Our top-notch trainers and equipment are here to help you reach your goals. Don't wait – sign up today!</p>
            </motion.div>
            <div className="mt-10 justify-between gap-8 md:flex">
                <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, y: 50},
                    visible: {opacity: 1, y: 0},
                }}
                className="mt-10 basis-3/5 md:mt-0">
                    <form target="_blank"
                    onSubmit={onSubmit}
                    action="https://formsubmit.co/el/wovate"
                    method="POST">
                        <input 
                        type="text"
                        placeholder="NAME"
                        {...register("name", {
                            required: true,
                            maxLength: 100,
                        })}
                        className={inputStyles}/>
                        {errors.name &&(
                            <p className="mt-1 text-primary-500">
                                {errors.name.type === 'required' && 'This field is required.'}
                                {errors.name.type === "maxLength" && 'This field is required.'}
                            </p>
                        )}
                    </form>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default ContactUs