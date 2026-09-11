import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { useState } from "react";
import ContactItem from "../ContactItem/ContactItem";

function FavoriteContacts() {
  // navigate to home since back button in header
  const navigate = useNavigate();

  const [contacts, setContacts] = useState([
    {
      lastName: "Martin",
      firstName: "Michel",
      phone: "0674879485",
      isFavorite: false,
    },
    {
      lastName: "Dubois",
      firstName: "Claire",
      phone: "0612345678",
      isFavorite: false,
    },
    {
      lastName: "Bernard",
      firstName: "Lucas",
      phone: "0698765432",
      isFavorite: true,
    },
    {
      lastName: "Petit",
      firstName: "Sophie",
      phone: "0755512345",
      isFavorite: false,
    },
  ]);

  // this function update the contacts when user click on star button
  function updateFavorite(key) {
    const updateContacts = contacts.map((contact) => {
      if (contact.phone === key) {
        return { ...contact, isFavorite: !contact.isFavorite };
      } else {
        return contact;
      }
    });
    setContacts(updateContacts);
  }

  const countFavoriteContacts = contacts.filter(
    (contact) => contact.isFavorite,
  ).length;

  const noFavoriteContacts = contacts.filter(
    (contact) => (contact.isFavorite === false),
  );

  const favoriteContacts = contacts.filter(
    (contact) => (contact.isFavorite === true),
  );

  return (
    <>
      <Header
        cssClass="from-blue-300 to-red-400"
        onClick={() => navigate("/")}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M12 2l2.939 6.545 7.061.61-5.5 4.795 1.694 6.93L12 17.28l-6.194 3.6 1.694-6.93L2 9.155l7.061-.61z" />
          </svg>
        }
        title="Favorite contacts"
      />

      <main className="w-full flex flex-col gap-8 p-9 max-w-4xl mx-auto">
        <span className="w-full text-center text-lg font-medium text-slate-500">
          <span className="text-2xl font-semibold text-slate-700">
            {countFavoriteContacts}
          </span>{" "}
          / {contacts.length} contact(s) favoris
        </span>

        <div className="w-full flex flex-col sm:flex-row gap-8 sm:gap-6 justify-between">
          {/* non-favorite contacts container */}
          <div className="flex-1 flex flex-col items-center gap-3">
            <span className="text-lg font-semibold text-slate-600 tracking-wide">
              Contacts
            </span>
            <ul className="w-full flex flex-col gap-3">
              {noFavoriteContacts.map((contact) => (
                <ContactItem
                  key={contact.phone}
                  lastName={contact.lastName}
                  firstName={contact.firstName}
                  phone={contact.phone}
                  isFavorite={contact.isFavorite}
                  onClick={updateFavorite}
                />
              ))}
            </ul>
          </div>

          {/* favorite contacts container */}
          <div className="flex-1 flex flex-col items-center gap-3">
            <span className="text-lg font-semibold text-slate-600 tracking-wide">
              Contacts favoris
            </span>
            <ul className="w-full flex flex-col gap-3">
              {favoriteContacts.map((contact) => (
                <ContactItem
                  key={contact.phone}
                  lastName={contact.lastName}
                  firstName={contact.firstName}
                  phone={contact.phone}
                  isFavorite={contact.isFavorite}
                  onClick={updateFavorite}
                />
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default FavoriteContacts;
