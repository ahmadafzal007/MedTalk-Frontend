import { Users } from 'lucide-react' // Icon for the button

const ViewPatientsButton = ({ setShowForm , setShowViewPatients , isExpanded }) => {
  return (
    <div
    onClick={() => {
      setShowForm(false)
      setShowViewPatients(true)
    }
  }
    
    // Trigger the view patients component
      className={`mt-1 rounded-md  hover:border-white border-gray-700  inline-flex h-8 cursor-pointer items-center gap-2 p-3 text-sm text-white font-semibold duration-300 transition-all ease-in-out transform ${
        isExpanded ? 'w-[100%]' : 'w-11' // Stretch to full width when expanded
      } hover:bg-[#1e1e22] hover:scale-105 shadow-md`}
    >
      <Users className='max-w-4 min-w-4  text-gray-300' size={20} />
      <p
        className={`line-clamp-1 text-xs text-white font-normal duration-300 ${
          !isExpanded ? 'opacity-0' : 'opacity-100'
        }`}
      >
        View Patients
      </p>
    </div>
  )
}

export default ViewPatientsButton
