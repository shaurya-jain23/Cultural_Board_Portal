import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#7BB9C4]"></div>
        </div>
        <Footer />
      </>
    );
  }
  if (error) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
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
        </div>
        <Footer />
      </>
    );
  }

  const contacts = data?.contacts || [];
  const imgdata = data?.homepage[0]?.contactpageimgurl || [];

  return (
    <>
      <Header />
      <div className="overflow-hidden font-poppins flex flex-col">
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
            {contacts?.map((contact, index) => (
              <section className="mb-20">
                <SectionHeader
                  title={contact.title}
                  icon={FaUsers}
                  description={contact.description}
                />
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {contact.members.map((member) => (
                  <ContactCard
                    key={member.id}
                    contact={member}
                    isLarge={true}
                  />
                ))}
              </div>
              </section>
            ))}

            {/* Emergency & Ragging Contact Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Emergency Contact Section */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-red-800 mb-4">
                  Emergency Contact
                </h3>
                <p className="text-red-700 mb-4">
                  For urgent student welfare matters, please contact our
                  emergency helpline:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="tel:+919876543210"
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
                  >
                    <FaPhone />
                    Emergency Helpline: +91 7396799357
                  </a>
                  <span className="text-red-600 font-medium">
                    Available 24/7
                  </span>
                </div>
              </div>

              {/* Anti-Ragging Contact Section */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">
                  Anti-Ragging Helpline
                </h3>
                <p className="text-blue-700 mb-4">
                  If you face or witness any ragging incident, please reach out
                  immediately for confidential support:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="tel:+9118001805522"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
                  >
                    <FaPhone />
                    Helpline: 1800-180-5522
                  </a>
                  <span className="text-blue-600 font-medium">
                    24/7 Confidential Support
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    <Footer />
    </>
  );
}

export default ContactsPage;
