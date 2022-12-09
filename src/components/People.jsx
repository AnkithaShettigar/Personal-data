import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const People = () => {
  return (
    <div id="people">
      <h1 className="pp1" style={{ color: '#105652', textAlign: 'center' }}>
        What People say about me
      </h1>
      <hr className="hrp" />
      <div className="peoplemain">
        <div className="peoplepage">
          <div className="people">
            <div className="people1"></div>
            <p className="des" style={{ fontWeight: '500' }}>
              Elizabeth Martin
            </p>
            <p
              className="des"
              style={{ fontSize: '13px', color: 'grey', marginTop: '-13px' }}
            >
              SaveSpace Inc.
            </p>
            <p className="des" style={{ color: 'grey' }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </p>
          </div>
          <div className="people">
            <div className="people2"></div>
            <p className="des" style={{ fontWeight: '500' }}>
              Alberto Donko
            </p>
            <p
              className="des"
              style={{ fontSize: '13px', color: 'grey', marginTop: '-13px' }}
            >
              ScreepApp
            </p>
            <p className="des" style={{ color: 'grey' }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </p>
          </div>
          <div className="people">
            <div className="people3"></div>
            <p className="des" style={{ fontWeight: '500' }}>
              Elizabeth Martin
            </p>
            <p
              className="des"
              style={{ fontSize: '13px', color: 'grey', marginTop: '-13px' }}
            >
              SaveSpace Inc.
            </p>
            <p className="des" style={{ color: 'grey' }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </p>
          </div>
        </div>
        <div className="bottompp">
          <p
            style={{
              color: '#FCA738',
              textAlign: 'center',
              paddingTop: '20px',
            }}
          >
            View more testimonials <BsArrowRight />
          </p>
        </div>
      </div>
    </div>
  );
};

export default People;
