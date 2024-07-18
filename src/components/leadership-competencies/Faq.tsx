import React, { useState } from "react";
import { faq } from "../../util/faq";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";

const Faq = () => {
  const [open, setOpen] = useState(false);
  const [faqId, setFaqId] = useState(0);
  const handleOpen = (id: number) => {
    setFaqId(id);
    if (id === faqId) {
      setOpen(!open);
    }
  };

  return (
    <div>
      <h3 className="text-h3 my-5">FAQ</h3>
      {faq.map((faq) => {
        return (
          <div key={faq.id} className="mb-5">
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleOpen(faq.id)}>
              {faq.id === faqId && open ? <FaChevronUp /> : <FaChevronDown />}
              <p className="text-h5">{faq.question}</p>
            </div>
            {faq.id === faqId && open ? (
              <p className="pl-8">{faq.answer}</p>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Faq;
