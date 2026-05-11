import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Accordion, Documents, Form, Header, SmallButton } from "../UI";
import mockData from "../../assets/mock-data/application.json";
import { createFormField, resetFieldIdCounter } from "../../utils/formFields";

const Application: React.FC = () => {
  const { applicationID } = useParams<{ applicationID: string }>();
  const application = mockData[0];

  resetFieldIdCounter();

  const [personalData, setPersonalData] = useState([
    createFormField("First Name", application.first_name, { divClass: "col-span-6 md:col-span-3" }),
    createFormField("Last Name", application.last_name, { divClass: "col-span-6 md:col-span-3 md:pl-4" }),
    createFormField("Date of birth", application.date_of_birth, { divClass: "col-span-2 md:col-start-1 col-span-1" }),
    createFormField("Gender", application.gender, { divClass: "col-span-1 pl-4" }),
    createFormField("Social security number", application.social_security_number, { divClass: "col-span-3 pl-4" }),
    createFormField("Citizenship", application.citizenship, { divClass: "col-span-6" }),
    createFormField("Marital status", application.marital_status, { divClass: "col-span-3" }),
    createFormField("Residential status", application.residential_status, { divClass: "col-span-3 pl-4" }),
  ]);

  const [address, setAddress] = useState([
    createFormField(
      "Address",
      `${application.postal_code}, ${application.city}, ${application.street_name}, ${application.house_no}`,
      { divClass: "col-span-6" },
    ),
    createFormField("Phone number", application.phone_number, { divClass: "col-span-6 md:col-span-2" }),
    createFormField("Mobile number", application.mobile_number, { divClass: "col-span-6 md:col-span-2 md:pl-4" }),
    createFormField("Email", application.email_id, { divClass: "col-span-6 md:col-span-2 md:pl-4" }),
  ]);

  const [employmentStatus, setEmploymentStatus] = useState([
    createFormField("Employment status", application.employment_status, { divClass: "col-span-6 md:col-span-2" }),
    createFormField("Annual income (Euro)", application.annual_income, {
      divClass: "col-span-3 md:col-span-2 md:pl-4",
    }),
    createFormField("Employed years", application.employed_years, { divClass: "col-span-3 md:col-span-2 pl-4" }),
    createFormField("Position", application.position, { divClass: "col-span-6 md:col-span-3" }),
    createFormField("Company employed", application.company_employed, { divClass: "col-span-6 md:col-span-3 md:pl-4" }),
  ]);

  const [creditInfo, setCreditInfo] = useState([
    createFormField("Credit amount requested", application.credit_amount, { divClass: "col-span-3 md:col-span-2" }),
    createFormField("Interest rate", application.interest_rate, { divClass: "col-span-3 md:col-span-1 pl-4" }),
    createFormField("Planned emi", application.planned_emi, { divClass: "col-span-3 md:col-span-1 md:pl-4" }),
    createFormField("Duration in months", application.duration_in_months, {
      divClass: "col-span-3 md:col-span-2 pl-4",
    }),
  ]);

  const [openAll, setOpenAll] = useState(1);

  return (
    <div className="flex-grow mb-4">
      <Header>Application ID: {applicationID}</Header>
      <div className="grid grid-cols-6 mb-2 text-sm">
        <div className="col-span-3">Creation date: {application.created_date}</div>
        <div className="col-span-3 text-right">
          <SmallButton text="open all" handler={() => setOpenAll(openAll > 0 ? openAll + 1 : openAll * -1)} active />
          <SmallButton
            text="close all"
            handler={() => setOpenAll(openAll > 0 ? openAll * -1 : openAll - 1)}
            active
            extraClass="ml-2"
          />
        </div>
      </div>
      <Accordion label="Personal data" color="pacific" open={openAll}>
        <Form elements={personalData} setForm={() => setPersonalData} />
      </Accordion>
      <Accordion label="Address" color="pacific" open={openAll}>
        <Form elements={address} setForm={() => setAddress} />
      </Accordion>
      <Accordion label="Employment status" color="pacific" open={openAll}>
        <Form elements={employmentStatus} setForm={() => setEmploymentStatus} />
      </Accordion>
      <Accordion label="Credit information" color="pacific" open={openAll}>
        <Form elements={creditInfo} setForm={() => setCreditInfo} />
      </Accordion>
      <Accordion label="Documents" color="pacific" open={openAll}>
        <Documents documents={application.files} />
      </Accordion>
    </div>
  );
};

export default Application;
