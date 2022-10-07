import React from "react";
import CenterData from "./CenterData";
import "./CenterReports.css";

import { Link } from "react-router-dom"

function CenterReports() {
  return (
    <>
      <div className='center-reports'>
        <h3>Center Reports</h3>
        <p>
          Get reports that provide center-wide data about children and
          classrooms.
        </p>

        <div className='center-tabs'>
          <div className='tabs-1'>
            <Link to="/HappyChild7" className="Link">
              <CenterData
                title='Active Enrollment >'
                desc='Report of each actively enrolled child’s DOB, enroll date, grad date, rotation and schedule.'
              />
            </Link>
          </div>
          <div className='tabs-1'>
            <CenterData
              title='Food Summary >'
              desc='Report of each actively enrolled child’s DOB, enroll date, grad date, rotation and schedule.'
            />
          </div>
        </div>

        <div className='center-tabs-two'>
          <div className='tabs-1'>
            <CenterData
              title='Active Enrollment >'
              desc='Report of each actively enrolled child’s DOB, enroll date, grad date, rotation and schedule.'
            />
          </div>
          <div className='tabs-1'>
            <CenterData
              title='Active Enrollment >'
              desc='Report of each actively enrolled child’s DOB, enroll date, grad date, rotation and schedule.'
            />
          </div>
        </div>

        <div className='center-tabs-three'>
          <div className='tabs-1'>
            <CenterData
              title='Active Enrollment >'
              desc='Report of each actively enrolled child’s DOB, enroll date, grad date, rotation and schedule.'
            />
          </div>
          <div className='tabs-1'>
            <CenterData
              title='Active Enrollment >'
              desc='Report of each actively enrolled child’s DOB, enroll date, grad date, rotation and schedule.'
            />
          </div>
        </div>

        <div className='center-tabs-four'>
          <div className='tabs-1'>
            <CenterData
              title='Active Enrollment >'
              desc='Report of each actively enrolled child’s DOB, enroll date, grad date, rotation and schedule.'
            />
          </div>
          <div className='tabs-1'>
            <CenterData
              title='Active Enrollment >'
              desc='Report of each actively enrolled child’s DOB, enroll date, grad date, rotation and schedule.'
            />
          </div>
        </div>

        <div className='center-tabs-five'>
          <div className='tabs-1'>
            <CenterData
              title='Active Enrollment >'
              desc='Report of each actively enrolled child’s DOB, enroll date, grad date, rotation and schedule.'
            />
          </div>
          <div className='tabs-1'>
            <CenterData
              title='Active Enrollment >'
              desc='Report of each actively enrolled child’s DOB, enroll date, grad date, rotation and schedule.'
            />
          </div>
        </div>

        <div className='center-tabs-six'>
          <div className='tabs-1'>
            <CenterData
              title='Active Enrollment >'
              desc='Report of each actively enrolled child’s DOB, enroll date, grad date, rotation and schedule.'
            />
          </div>
          <div className='tabs-1'>
            <CenterData
              title='Active Enrollment >'
              desc='Report of each actively enrolled child’s DOB, enroll date, grad date, rotation and schedule.'
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CenterReports;
