import React from 'react';

const Resume = () => {
  return (
    <div className="main1" id="resume">
      <h1
        className="resumetext"
        style={{ color: '#105652', textAlign: 'center' }}
      >
        Resume
      </h1>
      <hr className="hr4" />
      <div className="resumepage">
        <div className="resumeleft">
          <p style={{ color: '#105652', fontSize: '20px' }}>
            <b>Work Experience</b>
          </p>
          <hr style={{ color: '#105652' }} />
          <div className="r1">
            <div className="bubble"></div>
            <div className="vertical"></div>

            <p
              style={{
                color: '#105652',
                fontWeight: '700',
                paddingLeft: '15px',
              }}
            >
              GIS Trainee Engineer- FULLTIME
            </p>
            <p
              style={{
                color: '#105652',
                fontWeight: '700',
                fontSize: '13px',
                paddingLeft: '15px',
              }}
            >
              Atlaspoint Tech(OPC)Pvt.Ltd
            </p>
            <button className="btnyr">2021-2022</button>
          </div>
          <p style={{ color: '#105652', fontSize: '20px' }}>
            <b>Education</b>
          </p>
          <hr style={{ color: '#105652' }} />
          <div className="bubble1"></div>

          <div className="vertical1"></div>
          <p
            style={{ color: '#105652', fontWeight: '700', paddingLeft: '20px' }}
          >
            Sahyadri College of Engineering And Management
          </p>
          <p
            style={{
              color: '#105652',
              fontWeight: '700',
              fontSize: '13px',
              paddingLeft: '20px',
            }}
          >
            B.E Electronics and Communication Engineer
          </p>
          <button className="btnyr">2017-2020</button>
          <p style={{ fontSize: '13px', paddingLeft: '20px' }}>
            Reference site about Lorem Ipsum, giving information on its origins,
            as well as a random Lipsum generator
          </p>
        </div>
        <div className="resumeright">
          <div className="resumesecond">
            <div className="resumefirst"></div>
          </div>
          <div className="resumesecond1">
            <div className="reumepic">
              <div className="res1"></div>
              <div className="res2"></div>
              <div className="res3"></div>
              <div className="res4"></div>
              <div className="res5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
