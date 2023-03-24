import React from 'react'
import { Pasta } from '../components/Pasta'
import { Popular } from '../components/Popular'
import { motion } from 'framer-motion'

export const Home = () => {
  return (
    <motion.div
        animate={{ opacity: 1}}
        initial={{ opacity: 0}}
        exit={{ opacity: 0}}
        transition={{ dutaion : 2.5}}
        >
        <Popular/>
        <Pasta />
    </motion.div>
  )
}
