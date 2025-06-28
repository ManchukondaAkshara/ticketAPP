import React, { useState } from 'react'
import { dummyBookingData } from '../assets/assets/assets'
import BlurCircle from '../components/BlurCircle'
import { useEffect } from 'react'
import Loading from '../components/Loading'
const MyBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY
  const [bookings, setBookings] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const getMyBookings = async () => {
    setBookings(dummyBookingData)
    setIsLoading(false)
  }
  useEffect(() => {
    getMyBookings()
  }, [])
  return !isLoading ? (
    <div className='relative px-6 md:px-16 lg:px-40 pt-30 md:pt-40 min-h-[80vh]'>
      <BlurCircle top = "100px" left = "100px"/>
      <div>
        <BlurCircle bottom='0px' left = "600px"/>
      </div>
      <h1 className='text-lg font-semibold mb-4'>My Bookings</h1>
      {bookings.map((item,index) => (
        <div key = {index} className='flex flex-col md:flex-row justify-between bg-primary/8 border border-primary/20 rounded-lg p-2 mt-4 max-w-3xl'>
          <div className='flex flex-col md:flex-row'>
            <img src = {""} alt = ""/>
            
          </div>
        </div>
      ))}

    </div>
  ) : (
    <Loading /> 
  )
}

export default MyBookings