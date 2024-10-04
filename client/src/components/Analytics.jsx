import '../index.css'
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const AnimatedNumbers = ({value}) =>{
    const ref = useRef();
  
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue,{ duration:3000 });
    const isInView = useInView(ref,{once:true});
  
    useEffect(()=>{
      if(isInView){
        motionValue.set(value);
      }
    },[isInView,value,motionValue]);
  
    useEffect(() => {
      springValue.on("change",(latest)=>{
        if(ref.current && latest.toFixed(0)<=value){
          ref.current.textContent = latest.toFixed(0);
        }
      })
    }, [springValue,value])
    
  
    return <span ref={ref}></span>
  }

export const Analytics = () => {
    return (
        <section className="section-analytics mt-[9.6rem] mb-[5rem]">
            <div className="container grid grid-cols-4 gap-4 bg-gray-200 rounded-lg p-4">
                <div className="flex flex-col items-end justify-center xl:items-center">
                    <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl"><AnimatedNumbers value={50}/>+</span>
                    <h2 className="text-4xl md:text-3xl sm:text-2xl xs:text-xl font-medium text-dark/75 capitalize dark:text-light/75 xl:text-center">Registered Companies</h2>
                </div>
                <div className="relative flex flex-col items-end justify-center xl:items-center">
                    <div className="absolute inset-y-0 left-0 w-px bg-gray-800 transform -translate-x-51"></div>
                    <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl"><AnimatedNumbers value={500}/>+</span>
                    <h2 className="text-4xl md:text-3xl sm:text-2xl xs:text-xl font-medium text-dark/75 capitalize dark:text-light/75 xl:text-center">Effective Courses</h2>    
                </div>
                <div className="relative flex flex-col items-end justify-center xl:items-center">
                    <div className="absolute inset-y-0 left-0 w-px bg-gray-800 transform -translate-x-51"></div>
                    <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl"><AnimatedNumbers value={200}/>+</span>
                    <h2 className="text-4xl md:text-3xl sm:text-2xl xs:text-xl font-medium text-dark/75 capitalize dark:text-light/75 xl:text-center">Well Known Developers</h2>   
                </div>
                <div className="relative flex flex-col items-end justify-center xl:items-center">
                    <div className="absolute inset-y-0 left-0 w-px bg-gray-800 transform -translate-x-51"></div>
                    <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">24/7</span>
                    <h2 className="text-4xl md:text-3xl sm:text-2xl xs:text-xl font-medium text-dark/75 capitalize dark:text-light/75 xl:text-center">Service</h2>
                </div>
            </div>
        </section>
    )
}
