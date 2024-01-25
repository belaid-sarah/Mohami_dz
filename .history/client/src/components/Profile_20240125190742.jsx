import React from "react";
import msg from "../assets/icons/contact/msg.svg";
import phone from "../assets/icons/contact/phone.svg";
import NavBar from "./super/NavBar";

const Profile = () => {
  const navLinks = [
    { label: "A propos", id: "about", offset: -50 },
    { label: "Catégories", id: "categories", offset: 0 },
    { label: "Avis", id: "reviews", offset: 50 },
    { label: "Localisation", id: "location", offset: -100 },
  ];
  return (
    <div className=" mx-4 py-3 px-12 bg-lightBrown min-h-max">
      <Coords />
      <NavBar links={navLinks} landing={false} />
      <About />
      <Categories />
    </div>
  );
};

export default Profile;

function Coords() {
  return (
    <div className="flex  items-center">
      <div className=" basis-[70%] flex flex-col gap-4 ">
        <div className="flex flex-col gap-2">
          {" "}
          <h2>William King</h2>
          <h4>Region, Ville, 11000</h4>
        </div>
        <div className="flex gap-8 ">
          <div className=" bg-gray-300 h-64 w-56"></div>
          <div className="flex flex-col gap-3">
            Rating here
            <p>
              <span className=" font-semibold">Spécialité:</span>{" "}
              <span className=" font-light">Droits administratifs </span>
              <a href="" className=" text-primary underline">
                Voir plus
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className=" flex flex-col basis-[30%] border-l border-l-primary gap-6 pl-8">
        <div className=" flex items-center gap-4 ">
          {" "}
          <img src={msg} alt="" />
          Email :email_81194@gmail.com{" "}
        </div>
        <div className=" flex items-center gap-4 ">
          {" "}
          <img src={phone} alt="" />
          Numéro de téléphone : 000-000-000{" "}
        </div>
        <p className="text-primary underline">HP Law, PLLC</p>
        <div className="flex flex-col h-full">
          {" "}
          <button className="bg-primary text-white px-4 py-3 place-self-end">
            Prendre Rendez-Vous
          </button>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div id="about" className=" w-[90%] gap-[2rem] flex flex-col">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      <p>
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  );
}

function Categories() {
  const lawyerCategories = [
    "Personal Injury Law",
    "Criminal Law",
    "Family Law",
    "Employment Law",
    "Real Estate Law",
    "Business Law",
    "Immigration Law",
    "Estate Planning Law",
    "Intellectual Property Law",
    "Bankruptcy Law",
    "Tax Law",
    "Environmental Law",
    "Civil Rights Law",
    "Health Care Law",
    "International Law",
    "Media Law",
    "Entertainment Law",
    "Education Law",
    "Sports Law",
    "Insurance Law",
  ];

  return (
    <div id="categories" className=" my-[3rem] border-t border-t-lightTypo pt-4">
      <h3 className="font-semibold tracking-wide text-lightTypo">Catégories</h3>
      <ul className=" flex flex-wrap ">
        {lawyerCategories.map((category, index) => (
          <li key={index} className="mr-6 my-5">
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
