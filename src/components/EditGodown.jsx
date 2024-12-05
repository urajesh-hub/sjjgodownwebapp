import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import './EditGodown.css';

const EditGodown = () => {
  const [formData, setFormData] = useState({
    godownName: '',
    lotNumber: '',
    inwardDate: '',
    ginning: '',
    noOfBales: '',
  });
  const navigate = useNavigate();

  // Load existing data from localStorage on component mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('godownData'));
    if (storedData) {
      setFormData(storedData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save updated data to localStorage
    localStorage.setItem('godownData', JSON.stringify(formData));
    navigate("/"); // Redirect to the ReadGodown page
  };

  return (
    <div className="container mt-5">
      <div className="card - bg-info">
        <h1 className="text-center bg-info text-white">GODOWN FORM</h1>
        <div className="card-body bg-light">
          <form onSubmit={handleSubmit} className="needs-validation" noValidate>
            <div className="mb-3">
              <label className="form-label fw-bold">Godown Name:</label>
              <input
                type="text"
                className="form-control"
                name="godownName"
                value={formData.godownName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Lot Number:</label>
              <input
                type="number"
                className="form-control"
                name="lotNumber"
                value={formData.lotNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Inward Date:</label>
              <input
                type="text"
                className="form-control"
                name="inwardDate"
                value={formData.inwardDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Ginning:</label>
              <input
                type="text"
                className="form-control"
                name="ginning"
                value={formData.ginning}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">No of Bales:</label>
              <input
                type="number"
                className="form-control"
                name="noOfBales"
                value={formData.noOfBales}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditGodown;
