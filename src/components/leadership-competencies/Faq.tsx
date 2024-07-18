import React, { useState } from "react";
import { faq } from "../../util/faq";

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
      <h2>FAQ</h2>
      {faq.map((faq) => {
        return (
          <div key={faq.id}>
            <p onClick={() => handleOpen(faq.id)}>{faq.question}</p>
            {faq.id === faqId && open ? <p>{faq.answer}</p> : ""}
          </div>
        );
      })}
    </div>
  );
};

export default Faq;
