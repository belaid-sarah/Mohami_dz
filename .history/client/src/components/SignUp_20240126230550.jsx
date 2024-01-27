import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";
import axios from "axios";

const SignUp = () => {
  const handleCancel = (resetForm) => {
    resetForm();
  };

  return (
    <div className="flex flex-col w-full bg-lightBrown py-5">
      <div className="bg-white flex flex-col mx-[4rem] px-[3rem] py-[1.5rem]">
        <SignupForm onCancel={handleCancel} />
      </div>
    </div>
  );
};

const SignupForm = ({ onCancel }) => {
  return (
    <div className="mx-auto w-[75%]">
      <h3 className="text-3xl tracking-wide font-semibold recursive">
        S'inscrire
      </h3>

      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          confirmPassword: "",
          telephone: "",
          ville: "",
          region: "",
          codepostal: "",
          siteweb: "",
          photo: null,
          id_speciality: 0, // Assuming the default value for id_speciality
        }}
        validationSchema={Yup.object({
          first_name: Yup.string().required("Required"),
          last_name: Yup.string().required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .min(8, "Must be at least 8 characters")
            .required("Required"),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Required"),
          telephone: Yup.string().required("Required"),
          ville: Yup.string().required("Required"),
          region: Yup.string().required("Required"),
          codepostal: Yup.string().required("Required"),
          siteweb: Yup.string().notRequired(),
          photo: Yup.mixed().required("Required"),
          id_speciality: Yup.number().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          axios
            .post("http://192.168.1.127:8000/avocat/register_avocat", {
              avocat: values,
            })
            .then((response) => {
              alert("Avocat created successfully!");
              setSubmitting(false);
            })
            .catch((error) => {
              console.error("Error creating avocat:", error);
              setSubmitting(false);
            });
        }}
      >
        {({ isSubmitting, resetForm }) => (
          <Form className="space-y-8">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <Field
                  as={TextField}
                  type="text"
                  name="nom"
                  label="Nom"
                  className="mt-1 w-full"
                  variant="standard"
                />
                <ErrorMessage
                  name="nom"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="w-1/2">
                <Field
                  as={TextField}
                  type="text"
                  name="prenom"
                  label="Prénom"
                  className="mt-1 w-full"
                  variant="standard"
                />
                <ErrorMessage
                  name="prenom"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>

            <div>
              <Field
                as={TextField}
                type="email"
                name="email"
                label="Email"
                className="mt-1 w-full"
                variant="standard"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <Field
                as={TextField}
                type="password"
                name="password"
                label="Mot de passe"
                className="mt-1 w-full"
                variant="standard"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <Field
                as={TextField}
                type="password"
                name="confirmPassword"
                label="Confirmer le mot de passe"
                className="mt-1 w-full"
                variant="standard"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="flex space-x-4">
              <div className="w-1/3">
                <Field
                  as={TextField}
                  type="text"
                  name="ville"
                  label="Ville"
                  className="mt-1 w-full"
                  variant="standard"
                />
                <ErrorMessage
                  name="ville"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="w-1/3">
                <Field
                  as={TextField}
                  type="text"
                  name="region"
                  label="Région"
                  className="mt-1 w-full"
                  variant="standard"
                />
                <ErrorMessage
                  name="region"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="w-1/3">
                <Field
                  as={TextField}
                  type="text"
                  name="codePostal"
                  label="Code postal"
                  className="mt-1 w-full"
                  variant="standard"
                />
                <ErrorMessage
                  name="codePostal"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>

            <div>
              <Field
                as={TextField}
                type="tel"
                name="telephone"
                label="Numéro de téléphone"
                className="mt-1 w-full"
                variant="standard"
              />
              <ErrorMessage
                name="telephone"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <Field
                as={TextField}
                type="text"
                name="siteWeb"
                label="Site web (optional)"
                className="mt-1 w-full"
                variant="standard"
              />
              <ErrorMessage
                name="siteWeb"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-gray-700"
              >
                Photo de profil (importer)
              </label>
              <Field
                type="file"
                name="photo"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
              <ErrorMessage name="photo" className="text-red-500 text-sm" />
            </div>
            <div>
              <Field
                as={TextField}
                type="text"
                name="id_speciality"
                label="Spécialité"
                className="mt-1 w-full"
                variant="standard"
              />
              <ErrorMessage
                name="id_speciality"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="flex justify-between">
              <Button
                type="submit"
                disabled={isSubmitting}
                variant="contained"
                style={{
                  backgroundColor: "#D4AD6B",
                }}
              >
                S'inscrire
              </Button>
              <Button
                type="button"
                disabled={isSubmitting}
                onClick={() => {
                  onCancel(resetForm);
                }}
                variant="outlined"
                color="primary"
                style={{
                  backgroundColor: "white",
                  borderColor: "#D4AD6B",
                  color: "#D4AD6B",
                }}
              >
                Annuler
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
