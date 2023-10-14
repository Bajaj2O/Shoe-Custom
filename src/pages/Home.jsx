import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../../state'
import  CustomButton  from '../../components/CustomButton';
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../../config/motion';


const Home = () => {
    const snap = useSnapshot(state);

    return (
        <AnimatePresence>
            <AnimatePresence>
                {(snap.intro && !snap.data) && (
                    <motion.section className="home" {...slideAnimation('left')}>
                       

                        <motion.div className="home-content" {...headContainerAnimation}>
                            <motion.div {...headTextAnimation}>
                                <h1 className="head-text">
                                    LET&apos;S <br className="xl:block hidden" />DESIGN.

                                </h1>
                            </motion.div>
                            <motion.div
                                {...headContentAnimation}
                                className="flex flex-col gap-5"
                            >
                                <p className="max-w-md font-normal text-gray-600 text-base">
                                    Create your unique  shoe with our 3D customization tool. <strong>Craft Shoes as Unique as You Are</strong>{" "} .
                                </p>

                                <CustomButton
                                    type="filled"
                                    title="Customize It"
                                    handleClick={() => state.intro = false}
                                    customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                                />
                            </motion.div>
                        </motion.div>
                    </motion.section>
                )}
            </AnimatePresence>
        </AnimatePresence>

    )
}

export default Home