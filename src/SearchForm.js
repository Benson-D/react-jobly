import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchForm.css";

/** Renders search bar
 *
 * props: handleSearch fn
 * state: formData
 *
 * { CompanyList, JobList } --> SearchForm
 *
 */

function SearchForm({ handleSearch }) {
  const [formData, setFormData] = useState("");
  console.log("SearchForm", { formData });

  function handleChange(evt) {
    setFormData(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleSearch(formData);
  }

  return (
    <div className="SearchForm mb-4">
      <form className="SearchForm-form" onSubmit={handleSubmit}>
        <div className="row justify-content-center justify-content-lg-start gx-0">
          <div className="form-outline">
            <input
              className="form-control form-control-lg"
              type="text"
              value={formData}
              placeholder="Enter search term..."
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-primary btn-lg">
            <FaSearch />
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
