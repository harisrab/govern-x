import React from 'react'
import ExampleSection from '../ExampleSection';

const Healthcare = () => {
  return (
    <ExampleSection  
      title={"Healthcare"}
      desc={
        "Hospitals, clinics, and pharmacies have significant customer interaction as they provide medical services and products. They need to generate analysis reports to monitor patient outcomes, track inventories, manage billings, and much more."
      }
      bullets={[
        {
          heading: "Appointment scheduling and cancellations",
          image: "/convos/healthcare/appointments.png",
        },
        {
          heading: "Prescription refills and medication inquiries",
          image: "/convos/healthcare/refills.png",
        },
        {
          heading: "Insurance coverage and claims processing",
          image: "/convos/healthcare/claims.png",
        },
        {
          heading: "Patient records and data management",
          image: "/convos/healthcare/management.png",
        },
      ]}
    />
  );
}

export default Healthcare