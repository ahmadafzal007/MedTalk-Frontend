import { Menu } from 'lucide-react'

const SidebarToggle = ({ toggleSidebarExpand }) => {
  return (
    <button
      onClick={toggleSidebarExpand}
      className='grid bg-[#1e1e22] place-items-center rounded-lg p-2 border border-gray-600 hover:bg-black transition-all ease-in-out transform  shadow-lg text-white'
   
    >
      <Menu size={16} />
    </button>
  )
}

export default SidebarToggle
