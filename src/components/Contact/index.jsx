import ContactCard from "./ContactCard"
import ContactHeading from "./ContactHeading"

const Contact = () => {
  return (
    <div className="bg-primaryDark min-h-[100vh] py-[80px] text-[#FFFFFF] flex flex-col gap-[40px] items-center">
    <ContactHeading/>
    <ContactCard/>
    </div>
  )
}

export default Contact
