import React, { useEffect, useState } from "react";
import ContactCard from "../components/ContactCard";
import { FaPhone, FaUsers } from "react-icons/fa";
import { useContactPageData } from "../hooks/useContactPageData";

const SectionHeader = ({ title, icon: Icon, description }) => (
  <div className="text-center mb-12">
    <div className="flex items-center justify-center gap-3 mb-4">
      <Icon className="text-[#7BB9C4] text-3xl" />
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
    </div>
    {description && (
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">{description}</p>
    )}
  </div>
);

function ContactsPage() {
  const { data, loading, error } = useContactPageData();

  if (loading) {
    return (
      <>
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#7BB9C4]"></div>
      </>
    );
  }
  if (error) {
    return (
      <>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Error Loading Contacts
            </h2>
            <p className="text-gray-600 mb-4">
              Unable to load contacts at this time.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#7BB9C4] text-white px-6 py-2 rounded-lg hover:bg-[#6aa8b3] transition-colors"
            >
              Try Again
            </button>
          </div>
      </>
    );
  }

  const contacts = data?.contacts || [];
  const imgdata = data?.homepage[0]?.contactpageimgurl || [];

  return (
    <>
      <div className="w-full font-poppins">
        {/* Hero Section */}
        <div
          className="w-full h-[865px] bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center gap-5 text-white relative"
          style={{ backgroundImage: `url(${imgdata})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center">
            <p className="text-4xl md:text-7xl font-bold tracking-tight text-center drop-shadow-2xl mb-4">
              GET IN TOUCH
            </p>
            <p className="text-lg md:text-xl tracking-tight text-center opacity-90 max-w-2xl mx-auto">
              In case you have any queries, don't hesitate to reach out to us.
              Our dedicated team is here to help you.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {contacts?.sort((a, b) => a?.order - b?.order).map((contact, index) => (
              <section className="mb-20" key={contact.id}>
                <SectionHeader
                  title={contact.title}
                  icon={FaUsers}
                  description={contact.description}
                />
                <div className={` gap-8 mx-auto ${
                  (contact?.members?.length || 0) <= 4 ? 'flex flex-row justify-center flex-wrap' : 
                  'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                }`}>
                  {(contact?.members || []).slice().sort((a, b) => (a?.order || 0) - (b?.order || 0)).map((member) => (
                    <ContactCard
                      key={member.id}
                      contact={member}
                      isLarge={(contact?.order || 0) <= 1 && (member?.order || 0) <= 3}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactsPage;