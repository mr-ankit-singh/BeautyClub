import React from 'react'
import css from "./Hero.module.css"
import HeroImg from "../../assets/hero.png"
import {RiShoppingBagFill} from "react-icons/ri"
import {BsArrowRight} from "react-icons/bs"
import {motion} from "framer-motion"

const Hero = () => {
  return (
    <div className={css.container}>
      
      {/* Left Side */}
      <div className={css.h_side}>
        <span className={css.text1}> Skin Protection Cream</span>
        <div className={css.text2}>
            <span>Trendy Collection</span>
            <span>
				{" "}
				Seedily say has suitable disposal and boy. Exercise joy man children rejoiced</span>
        </div>
      </div>

	  {/* Middle Side */}
	  <div className={css.wrapper}>

		{/* blue circle */}
		<motion.div
		initial={{bottom:"2rem"}}
		whileInView={{bottom:"0rem"}}
		transition={{duration:3,type:"spring"}}
		className={css.blueCircle}
		></motion.div>

		<motion.img 
		initial={{bottom:"2rem"}}
		whileInView={{bottom:"0rem"}}
		transition={{duration:3,type:"spring"}}
		src={HeroImg} 
		alt="" 
		width={600} 
		/>
		<motion.div 
		initial={{right:"4%"}}
		whileInView={{right:"2%"}}
		transition={{duration:3,type:"spring"}}
		className={css.cart2}>
			<RiShoppingBagFill />
			<div className={css.signup}>
				<span>Best Signup Offers</span>
				<div> <BsArrowRight /> </div>
			</div>
		</motion.div>
	  </div>

	  {/* Right Side */}
	  <div className={css.h_sides}>
		<div className={css.traffic}>
			<span>1.5m</span>
			<span>Monthly Traffic</span>
		</div>
		<div className={css.customers}>
			<span>100k</span>
			<span>Happy Customer</span>
		</div>
	  </div>
    </div>
  )
}

export default Hero
