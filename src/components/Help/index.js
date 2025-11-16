import "./index.css";
import { useState } from "react";

const HelpList = [
  {
    id: "PROGRAM-RELATED",
    name: "Program Structure & Policies",
    description:
      "Details on course timelines, program duration, and re-activation policies, and progress requirements.",
    number: "9347202330",
  },
  {
    id: "COURSE-LEARNING",
    name: "Course & Learning Journey",
    description:
      "Cover all queries related to accessing courses, understanding your learning path, completing projects",
    number: "8688578505",
  },
  {
    id: "TECHNICAL-SUPPORT",
    name: "Technical Support",
    description:
      "Solutions for platform issues such as loading errors, video playback problems, quiz",
    number: "9652530489",
  },
  {
    id: "PAYMENTS",
    name: "Payments & EMIs",
    description:
      "Information related EMI plans, payment status, receipts, efunds, and resolving issues with EMI Brokers",
    number: "9989550883",
  },
];

const Help = () => {
  const [inputEl, setInputEl] = useState("");
  const [activeList, setActiveList] = useState(HelpList);

  const onChangeInput = (event) => {
    const value = event.target.value;
    setInputEl(value);

    const q = value.trim().toLowerCase();
    if (!q) {
      setActiveList(HelpList);
      return;
    }

    const filtered = HelpList.filter((item) => {
      const haystack = `${item.id} ${item.name} ${item.description}`.toLowerCase();
      return haystack.includes(q);
    });
    setActiveList(filtered);
  };

  const onClickList = (phoneNumber) => {
    const digits = (phoneNumber || "").replace(/\D/g, "");
    const withCode = digits.length === 10 ? `91${digits}` : digits;
    const url = `https://wa.me/${withCode}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const onKeyList = (e, phoneNumber) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClickList(phoneNumber);
    }
  };

  return (
    <div className="help-container">
      <h1 className="each-container-main-heading">Help Section</h1>
      <p className="help-section-main-paragraph">
        If you have any queries, please choose your issue accordingly
      </p>

      <div className="glow-search-box" role="search">
        <input
          type="text"
          className="glow-input"
          placeholder="Search for your query..."
          value={inputEl}
          onChange={onChangeInput}
          aria-label="Search help topics"
        />
      </div>

      {activeList.length === 0 ? (
        <div className="mt-4 alert alert-warning text-center" role="alert">
          Nothing found for <strong>{inputEl}</strong>. Try different keywords.
        </div>
      ) : (
        <ul className="help-section-list-container" aria-label="Help topics">
          {activeList.map((each) => (
            <li
              key={each.id}
              className="help-section-each-list-container"
              onClick={() => onClickList(each.number)}
              onKeyDown={(e) => onKeyList(e, each.number)}
              tabIndex={0}
              role="button"
              aria-label={`${each.name}. Tap to open WhatsApp`}
            >
              <h2 className="help-section-each-list-heading">{each.name}</h2>
              <p className="help-section-each-list-paragraph">
                {each.description}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Help;
