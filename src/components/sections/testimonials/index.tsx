import React from "react";
import TestimonialsClient from "@/components/sections/testimonials/client";
import { getFeedbacks } from "@/lib/case-studies-data";


const Testimonials = async () => {
  const feedbacks = await getFeedbacks()

  return <TestimonialsClient items={feedbacks}/>;
};

export default Testimonials;
