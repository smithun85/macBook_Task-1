import React from "react";
import girl from "../../Assets/girl1.jpg";
import { ImFileText } from "react-icons/im";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <div className="home">
      <div className="profile_container">
        <div className="profile">
          <div className="image">
            <img src={girl} alt="profile" />
          </div>
          <h2>Diane Cooper</h2>
          <p className="email">diana.cooper@example.com</p>
          <div className="line">
            <div className="past">
              <p>15</p>
              <p>Past</p>
            </div>
            <div className="h_line"></div>
            <div className="upcoming">
              <p>02</p>
              <p>Upcoming</p>
            </div>
          </div>
        </div>

        <div className="part-2">
          <button>Send Message</button>
          <h3>Files / Documents</h3>

          <div className="report">
            <div className="pdf">
              <ImFileText className="note" />
              <h4>Check Up Results.pdf</h4>
            </div>
            <div className="pdf">
              <ImFileText className="note" />
              <h4>Check Up Results.pdf</h4>
            </div>
            <div className="pdf">
              <ImFileText className="note" />
              <h4>Medical Prescription.pdf</h4>
            </div>
            <div className="pdf">
              <ImFileText className="note" />
              <h4>Dental X-Ray Result.pdf</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="details">
        <div className="section1">
          <div>
            <p>Gender</p>
            <h5>Female</h5>
            <div className="v_line"></div>
          </div>

          <div>
            <p>Birthday</p>
            <h5>Feb 24th, 1997</h5>
            <div className="v_line"> </div>
          </div>

          <div>
            <p>Phone Number</p>
            <h5>(239) 555-0108</h5>
            <div className="v_line"></div>
          </div>

          <div>
            <p>Registered Date</p>
            <h5>Feb 24th, 1997</h5>
            <div className="v_line"></div>
          </div>

          <div>
            <p>Street Address</p>
            <h5>JL.Diponegoro No.21</h5>
            <div className="v_line"></div>
          </div>

          <div>
            <p>City</p>
            <h5>Cilacap</h5>
            <div className="v_line"></div>
          </div>
          <div>
            <p>Zip Code</p>
            <h5>655849</h5>
            <div className="v_line"></div>
          </div>

          <div>
            <p>Member Status</p>
            <h5>Active Member</h5>
            <div className="v_line"></div>
          </div>
        </div>

        <div className="section2">
          <Link>Upcoming Appointments</Link>
          <p>Past Appointments</p>
          <p>Medical Records</p>
        </div>

        <div className="treatment">
          <div className="previous">
            <p>Root Canal Treatment</p>
            <p className="show">Show Previous Treatments</p>
          </div>
          <div className="date">
            <div className="h_line">
              <h2>26 Nov ‘19</h2>
              <p>09.00 - 10.00</p>
              
            </div>
            <div className="h_line">
              <p>Treatment</p>
              <h4>Open Access</h4>
              
            </div>
            <div>
              <p>Dentist</p>
              <h4>Drg. Adam H.</h4>
            </div>
            <div>
              <p>Nurse</p>
              <h4>Jessicamila</h4>
            </div>
            <div className="note_report">
              <ImFileText className="note" />
              <p>note</p>
            </div>
          </div>
          <div className="date">
            <div className="h_line">
              <h2>12 Nov ‘19</h2>
              <p>09.00 - 10.00</p>
  
            </div>
            <div className="h_line">
              <p>Treatment</p>
              <h4>Open Access</h4>
            
            </div>
            <div>
              <p>Dentist</p>
              <h4>Drg. Adam H.</h4>
            </div>
            <div>
              <p>Nurse</p>
              <h4>Jessicamila</h4>
            </div>
            <div className="note_report">
              <ImFileText className="note" />
              <p>note</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
