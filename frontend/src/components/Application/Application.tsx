import React, { useState } from "react";
import { Accordion, Documents, Form, Header, SmallButton } from "../UI";
import mockData from "../../assets/mock-data/application.json";
import { createFormField } from "../../utils/formFieldHelpers";

interface ApplicationType {
  applicationID: string;
}

const toStr = (val: string | number | null | undefined): string => (val != null ? `${val}` : "");

const Application: React.FC<ApplicationType> = properties => {
  const { applicationID } = properties;
  const application = mockData[0];
  const [personalData, setPersonalData] = useState([
    createFormField({
      id: 1,
      label: "First Name",
      value: application.first_name,
      divClass: "col-span-6 md:col-span-3",
    }),
    createFormField({
      id: 2,
      label: "Last Name",
      value: application.last_name,
      divClass: "col-span-6 md:col-span-3 md:pl-4",
    }),
    createFormField({
      id: 3,
      label: "Date of birth",
      value: application.date_of_birth,
      divClass: "col-span-2 md:col-start-1 col-span-1",
    }),
    createFormField({ id: 4, label: "Gender", value: application.gender, divClass: "col-span-1 pl-4" }),
    createFormField({
      id: 5,
      label: "Social security number",
      value: toStr(application.social_security_number),
      divClass: "col-span-3 pl-4",
    }),
    createFormField({ id: 6, label: "Citizenship", value: toStr(application.citizenship), divClass: "col-span-6" }),
    createFormField({
      id: 7,
      label: "Marital status",
      value: toStr(application.marital_status),
      divClass: "col-span-3",
    }),
    createFormField({
      id: 8,
      label: "Residential status",
      value: toStr(application.residential_status),
      divClass: "col-span-3 pl-4",
    }),
  ]);
  const [address, setAddress] = useState([
    createFormField({
      id: 1,
      label: "Address",
      value: `${application.postal_code}, ${application.city}, ${application.street_name}, ${application.house_no}`,
      divClass: "col-span-6",
    }),
    createFormField({
      id: 2,
      label: "Phone number",
      value: toStr(application.phone_number),
      divClass: "col-span-6 md:col-span-2",
    }),
    createFormField({
      id: 3,
      label: "Mobile number",
      value: toStr(application.mobile_number),
      divClass: "col-span-6 md:col-span-2 md:pl-4",
    }),
    createFormField({
      id: 4,
      label: "Email",
      value: toStr(application.email_id),
      divClass: "col-span-6 md:col-span-2 md:pl-4",
    }),
  ]);
  const [employmentStatus, setEmploymentStatus] = useState([
    createFormField({
      id: 1,
      label: "Employment status",
      value: toStr(application.employment_status),
      divClass: "col-span-6 md:col-span-2",
    }),
    createFormField({
      id: 2,
      label: "Annual income (Euro)",
      value: toStr(application.annual_income),
      divClass: "col-span-3 md:col-span-2 md:pl-4",
    }),
    createFormField({
      id: 3,
      label: "Employed years",
      value: toStr(application.employed_years),
      divClass: "col-span-3 md:col-span-2 pl-4",
    }),
    createFormField({
      id: 4,
      label: "Position",
      value: toStr(application.position),
      divClass: "col-span-6 md:col-span-3",
    }),
    createFormField({
      id: 5,
      label: "Company employed",
      value: toStr(application.company_employed),
      divClass: "col-span-6 md:col-span-3 md:pl-4",
    }),
  ]);
  const [creditInfo, setCreditInfo] = useState([
    createFormField({
      id: 1,
      label: "Credit amount requested",
      value: toStr(application.credit_amount),
      divClass: "col-span-3 md:col-span-2",
    }),
    createFormField({
      id: 2,
      label: "Interest rate",
      value: toStr(application.interest_rate),
      divClass: "col-span-3 md:col-span-1 pl-4",
    }),
    createFormField({
      id: 3,
      label: "Planned emi",
      value: toStr(application.planned_emi),
      divClass: "col-span-3 md:col-span-1 md:pl-4",
    }),
    createFormField({
      id: 4,
      label: "Duration in months",
      value: toStr(application.duration_in_months),
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
