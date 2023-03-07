import React from "react";

const Profile = () => {
  return (
    <div className="profile_container">
      <div className="profile">
        <div className="image">
          <img src="" alt="" />
        </div>
        <p className="email">diana.cooper@example.com</p>
        <div className="past">
          <p>15</p>
          <p>Past</p>
        </div>
        <div className="upcoming">
          <p>02</p>
          <p>Upcoming</p>
        </div>
      </div>

      <div className="details">
        <div className="section1">
          <div>
            <p>Gender</p>
            <h5>Female</h5>
          </div>

          <div>
            <p>Birthday</p>
            <h5>Feb 24th, 1997</h5>
          </div>

          <div>
            <p>Phone Number</p>
            <h5>(239) 555 -0108</h5>
          </div>

          <div>
            <p>Registered Date</p>
            <h5>Feb 24th, 1997</h5>
          </div>
        </div>

        <div className="section2">
          <div>
            <p>Street Address</p>
            <h5>JL. Diponegoro No. 21</h5>
          </div>

          <div>
            <p>City</p>
            <h5>Cilacap</h5>
          </div>
          <div>
            <p>Zip Code</p>
            <h5>655849</h5>
          </div>

          <div>
            <p>Member Status</p>
            <h5>Active Member</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
