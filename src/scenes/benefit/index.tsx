import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";


const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Facilities",
        description: "Nor is coaching a hobby. Let the pain fly for the leaven in the bed of the children. Any body and..."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description:
        "I really need that smile, because it's always time for someone to trigger it. And it's not easy to follow and poison. It's necessary and ugly."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description:
        "Fix some of the vestibule for tomorrow. As long as the bed is as good as it needs to be, the children will have a lake. They will give birth to homework."
    },
];

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div 
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            {/* header */}
            <motion.div
                className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                 hidden: { opacity: 0, x: -50 },
                 visible: { opacity: 1, x: 0 },
                }}
            >  
                <HText>MORE THAN JUST GYM.</HText>
                <p className="my-5 text-sm">
                 We provide world class fitness equipment, trainers and classes to
                 get you to your ultimate fitness goals with ease. We provide true
                 care into each and every member.
                </p>
            </motion.div>
            {/* benefits */}
            <motion.div className="mt-5 items-center justify-between gap-8 md:flex"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit
                     key={benefit.title}
                     icon= {benefit.icon}
                     title={benefit.title}
                     description={benefit.description}
                     setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>
            {/*graphics and description */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex"></div>
            <div>
                {/*graphic */}
                <img
                    className="mx-auto"
                    alt="benefits-page"
                    src={BenefitsPageGraphic}
                /> 
                {/* description */}
                <div>
                    {/* title */}
                    <div className="relative">
                     <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                        <HText>
                        MILLIONS OF HAPPY MEMBERS GETTING{" "}
                        <span className="text-primary-500">FIT</span>
                    </HText>
                    </motion.div>
                </div>
                </div>
                {/*description */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
               <p className="my-5">
                 An iron mass will be born, the author of tincidunt. A lot of powerful shots
                 the need for education will be followed by education. I am a pillow
                 Who is hungry for life? Quis amet vulputate tincidunt at in
                 neither But let it be easy to follow the need of basketball
                 land Ullamcorper arcu that price wise for the whole players.
                 I hate clinical cats.
                </p>
                <p className="mb-5">
                 Fringilla was suspended for the weekend. It is a hoarse voice
                 country than the airline. Mauris does not want an element of euismod
                 easy Amet semper tortor facilisis nibh nibh. Let it be a hoarse voice
                 for the estate is now in a state of laughter.
                </p>
                </motion.div>
                {/*button */}
                <div className="relative mt-16">
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

export default Benefits;