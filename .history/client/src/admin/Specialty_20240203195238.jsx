import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../components/super/Footer";
import Loading from "../components/Loading";
import axios from "axios";
import { useMutation, useQuery } from "react-query";

const Specialty = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [nomSpecialite, setNomSpecialite] = useState("");
  const [description, setDescription] = useState("");

  const { data: specialities, isLoading, refetch } = useQuery(
    "specialities",
    async () => {
      const response = await axios.get(
        "http://192.168.137.210:8000/speciality/speciality_list"
      );
      return response.data;
    }
  );
  const addSpecialtyMutation = useMutation(
    (newSpecialty) =>
      axios.post(
        "http://192.168.137.210:8000/speciality/create_speciality",
        newSpecialty
      ),
    {
      onSuccess: () => {
        // Once the mutation is successful, refetch the data to update the list
        refetch();
        // Clear the form fields
        setNomSpecialite("");
        setDescription("");
        setShowModal(false);
      },
    }
  );

  

  const handleAddSpecialite = () => {
    const newSpecialty = {
      name: nomSpecialite,
      description: description,
    };

    addSpecialtyMutation.mutate(newSpecialty);
  };

  return (
    <div className="flex flex-col w-full pt-5 ">
      <div className="mx-[4rem] flex mb-4 phone:max-lg:flex-col phone:max-lg:items-start justify-between items-center">
        <h2 className="recursive flex-shrink-0">{t("list spec")}</h2>
        <button
          className="flex items-center gap-2 hover:bg-opacity-70 h-max px-6 py-1 text-base bg-primary text-white"
          onClick={() => setShowModal(true)}
        >
          <span>+</span> {t("ajouter spec")}
        </button>
      </div>

      {/* Modal/Dialog */}
      {showModal && (
        <div className="fixed inset-0 flex z-50 justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">{t("add spec")}</h2>
            <div className="mb-4">
              <label htmlFor="nomSpecialite" className="block mb-1">
                {t("nom spec")}
              </label>
              <input
                type="text"
                id="nomSpecialite"
                value={nomSpecialite}
                onChange={(e) => setNomSpecialite(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block mb-1">
                {t("description")}
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
            </div>
            <div className="flex gap-3 justify-end">
              <button
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-70"
                onClick={handleAddSpecialite}
              >
                {t("add")}
              </button>
              <button
                className="px-4 py-2 ml-4 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                onClick={() => setShowModal(false)}
              >
                {t("cancel")}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className=" min-h-screen flex flex-col bg-lightBrown px-[3rem] py-[1.5rem] mx-[4rem]">
        {isLoading ? (
          <Loading />
        ) : (
          specialities?.map((spec) => <SpecialtyCard spec={spec} />)
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Specialty;

function SpecialtyCard({ spec }) {
  return <>{spec.name}</>;
}
