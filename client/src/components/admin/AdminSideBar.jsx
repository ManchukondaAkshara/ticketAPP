import React from 'react'
import { assets } from '../../assets/assets/assets'
import { LayoutDashboardIcon, ListCollapseIcon, ListIcon, PlusSquare } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const AdminSideBar = () => {
    const user = {
        firstName :'Admin',
        lastName : 'User',
        imageUrl : assets.profile,
    }
    const adminNavlinks = [
        {name: 'Dashboard', path : '/admin',icon : LayoutDashboardIcon},
        {name: 'Add Shows', path : '/admin/add-shows',icon : PlusSquare},
        {name: 'List Shows', path : '/admin/list-shows',icon : ListIcon},
        {name: 'List Bookings', path : '/admin/list-bookings',icon : ListCollapseIcon}
    ]

  return (
    <div className='h-[calc(100vh-64px)] md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r border-gray-300/20 text-sm'>
        <img className='h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto' src = {user.imageUrl} alt = "sidebar"/>
        <p className='mt-2 text-base max-md:hidden'>{user.firstName}{user.lastName}</p>
        <div className='w-full'>
            {adminNavlinks.map((link,index) => (
                <NavLink>

                </NavLink>
            ))}

        </div>
    </div>
  )
}

export default AdminSideBar