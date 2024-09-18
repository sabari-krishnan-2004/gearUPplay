// src/pages/FormPage.jsx
import React from 'react';
import './form.css';

function FormPage() {
    return (
        <div className='mainform'>
            <h1 className="gradient__text">Fill in the Details to Book</h1>
            
            <form className='form-container'>
                <label>
                    Student Name:
                    <input type="text" name="studentName" required />
                </label>
                <br />
                <label>
                    Registration Number:
                    <input type="text" name="registrationNumber" required />
                </label>
                <br />
                <div className='side-by-side'>
                    <label>
                        Phone Number:
                        <input type="tel" name="phoneNumber" pattern="[0-9]{10}" required />
                    </label>
                    <label>
                        Total Number of Persons:
                        <input type="number" name="totalNumberOfPersons" min="1" required />
                    </label>
                </div>
                <br />
                
                <label>
                    Event Date and Time:
                    <input type="datetime-local" name="eventDateTime" required />
                </label>
                <br />
                <label>
                    Slot:
                    <input type="text" name="slot" required />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default FormPage;
