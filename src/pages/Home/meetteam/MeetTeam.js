import "./meetteam.css";
import LearnMore from "../../../components/learnmore/LearnMore";
import http1 from "../../variables";


const MeetTeam = ({ image }) => {
  return (
    <section className="meet_sec">
      <svg
        className="corner"
        viewBox="0 0 204 207"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#pixel-top_svg__a)" fill="#02F3A2">
          <path
            opacity="0.3"
            d="M-417.839 206.381v-457.904H40.065v457.904z"
          />
          <path
            opacity="0.4"
            d="M-437.042 165.209v-457.541H80.86v457.541z"
          />
          <path
            opacity="0.5"
            d="M-437.042 124.401V-333.14h558.948v457.541z"
          />
          <path
            opacity="0.6"
            d="M-456.356 83.591v-457.54h619.31V83.59z"
          />
          <path
            opacity="0.7"
            d="M-456.356 42.782v-457.54H204v457.54z"
          />
        </g>
        <defs>
          <clipPath id="pixel-top_svg__a">
            <path
              fill="#fff"
              transform="matrix(0 -1 -1 0 204 206.381)"
              d="M0 0h206.381v204H0z"
            />
          </clipPath>
        </defs>
      </svg>
      <div className="content_sec">
        <div className="content_grid">
          <div className="text_sec">
            <div className="tiny_title_wrap">
              <svg
                width={11}
                height={11}
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2153_465144)">
                  <path
                    d="M0.737305 2.74998L5.50044 -1.68422e-05L10.2636 2.74998L10.2636 8.24998L5.50044 11L0.737305 8.24998L0.737305 2.74998Z"
                    fill="#09182C"
                  />
                  <path
                    d="M5.51741 -0.00557395L10.2559 2.73019L10.2793 8.23166L5.51024 5.47824L5.51741 -0.00557395Z"
                    fill="#02F3A2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2153_465144">
                    <rect
                      width={11}
                      height={11}
                      fill="white"
                      transform="matrix(1 0 0 -1 0 11)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p>Home</p>
            </div>
            <h2>Meet The Team</h2>
            <p className="para"> Meet the experts behind SharePass. Our team is dedicated to keeping your data safe and secure, with a wealth of experience and commitment to providing our clients with the highest level of service and support.</p>
            <LearnMore
              title="Learn More"
              top='20px'
              boxcolor="green"
              textcolor="#fff"
              path="/ourteam"
            />
          </div>
          <div className="image_wrap">
            {/* <img
                                alt="image"
                                src=
                            /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MeetTeam;