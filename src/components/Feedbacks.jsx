/* eslint-disable react/prop-types */
import { useState } from 'react'

import { motion } from 'framer-motion'
import { styles } from '../styles'
import SectionWrapper from '../hoc/SectionWrapper'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'

const FeedbackCard = ({ index, testimonial, name, designation, company }) => {
  const [expanded, setExpanded] = useState(false)

  const handleSeeMoreClick = () => {
    setExpanded(!expanded)
  }

  return (
    <motion.div
      variants={fadeIn('', 'spring', index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full h-fit"
    >
      <p className="text-white font-black text-[48px]">&quot;</p>

      <div className="mt-1">
        <div>
          <p
            className={`text-white tracking-wider text-[18px] ${expanded ? 'h-auto' : 'h-20'}`}
            style={
              !expanded
                ? {
                    overflow: 'hidden',
                    whiteSpace: 'normal',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 3
                  }
                : null
            }
          >
            {testimonial}
          </p>

          {!expanded && (
            <button
              type="button"
              onClick={handleSeeMoreClick}
              className="text-blue-500 hover:text-blue-700"
            >
              More
            </button>
          )}
          {expanded && (
            <button
              type="button"
              onClick={handleSeeMoreClick}
              className="text-blue-500 hover:text-blue-700"
            >
              Less
            </button>
          )}
        </div>

        <div className="mt-7 flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, '')
