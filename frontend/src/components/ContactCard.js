import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
 const ContactCard = ({ contact, key,isLarge = false }) => (
    <div className={`bg-white max-w-md rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`} key={key}>
      <div className="relative">
        <img 
          src={contact.image} 
          alt={contact.name}
          className={`w-full object-cover ${isLarge ? 'h-80' : 'h-64'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className={`font-bold ${isLarge ? 'text-2xl' : 'text-xl'} mb-1`}>{contact.name}</h3>
          <p className={`${isLarge ? 'text-base' : 'text-sm'} opacity-90 font-medium`}>{contact.designation}</p>
          <p className={`${isLarge ? 'text-sm' : 'text-xs'} opacity-75`}>{contact.department}</p>
        </div>
      </div>
      
      <div className="p-6">
        {contact.description && (
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            {contact.description}
          </p>
        )}
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-gray-600">
            <FaPhone className="text-[#7BB9C4] flex-shrink-0" />
            <a href={`tel:${contact.phone}`} className="text-sm hover:text-[#7BB9C4] transition-colors">
              {contact.phoneNo}
            </a>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <MdEmail className="text-[#7BB9C4] flex-shrink-0" />
            <a href={`mailto:${contact.email}`} className="text-sm hover:text-[#7BB9C4] transition-colors break-all">
              {contact.mailId}
            </a>
          </div>
          {contact.linkedin && (
            <div className="flex items-center gap-3 text-gray-600">
              <FaLinkedin className="text-[#7BB9C4] flex-shrink-0" />
              <a 
                href={contact.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm hover:text-[#7BB9C4] transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>
          )}
        </div>
        
        <div className="flex gap-3">
          <a
            href={`tel:${contact.phone}`}
            className="flex-1 bg-[#7BB9C4] hover:bg-[#6ba8b3] text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm"
          >
            <FaPhone className="text-xs" />
            Call
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm"
          >
            <FaEnvelope className="text-xs" />
            Email
          </a>
        </div>
      </div>
    </div>
  );

  export default ContactCard;