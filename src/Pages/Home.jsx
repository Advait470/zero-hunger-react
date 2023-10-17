import React from "react";
import backgroundImage from "../assets/noodles.png";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="row align-items-center  pt-5 justify-content-center">
        <div className="col-12 col-md-6 pt-5">
          <p className="p-0 m-0 g-0 text-muted">Eliminating Hunger</p>
          <p className="display-3 pb-4" style={{ fontWeight: "400" }}>
           Your Donation may make thousands of street children smile.{" "}
            <span className="text-primary">Option</span> for it
          </p>
          <p>Based on UNESCO's Goal 2: Zero Hunger</p>
          <div className="d-flex gap-sm-4 mt-5 gap-2">
            <button
              className="btn btn-primary py-3 px-5"
              onClick={() => navigate("/send")}
            >
              Donate item
            </button>
            <button
              className="btn shadow-sm border border-muted py-3 px-5"
              onClick={() => navigate("/request")}
            >
              Request item
            </button>
          </div>
        </div>
        <div
          className="col-12 col-sm-6 mx-auto text-center d-flex justify-content-center align-items-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "40rem",
            height: "40rem",
          }}
        ></div>
      </div>

      <section className={"middle"}>
      <h1 className={"center"}>
        "With Your help look what we can do together"
      </h1>

      <div className={"images-middle"}>
        <img src="https://kishor-23.github.io/food-donate/img/p4.jpeg" alt="" />
        <img src="https://kishor-23.github.io/food-donate/img/p3.jpeg" alt="" />
        <img src="https://kishor-23.github.io/food-donate/img/p1.jpeg" alt="" />
      </div>
      </section>

      <hr />



      <section className={"features"}>
        <h1>Features</h1>

        <div class="articles">
          <article>
            <div class="article-wrapper">
              <figure>
                <img src="/fdc1.jpg" alt="" />
              </figure>
              <div class="article-body">
                <h2>#1 User-Friendly Interface</h2> 
                <p>
                  Our consistent layout and easily recognizable icons provide a sense of comfort, guiding you seamlessly from one task to another.
                  No matter the device you choose, our website adapts flawlessly, embracing you with its responsive design.
                </p>
                <a>
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  {/* </svg> */}
                </a>
              </div>
            </div>
          </article>


          <article>
            <div class="article-wrapper">
              <figure>
                <img src="./images/location.jpg" alt="" />
              </figure>
              <div class="article-body">
                <h2>#2 Location Tracking</h2>
                <p>
                  Imagine the ability to pinpoint food donors' locations in real time, allowing for swift and efficient collection of surplus meals. This innovative feature not only streamlines the donation process but also ensures that food reaches those in need promptly.
                </p>
                
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  {/* </svg> */}
                {/* </a> */}
              </div>
            </div>
          </article>



              
          <article>
            <div class="article-wrapper">
              <figure>
                <img src="./images/usr-friend.jpg" alt="" />
              </figure>
              <div class="article-body">
                <h2>#1 User-Friendly Interface</h2> 
                <p>
                  Our consistent layout and easily recognizable icons provide a sense of comfort, guiding you seamlessly from one task to another.
                  No matter the device you choose, our website adapts flawlessly, embracing you with its responsive design.
                </p>
                
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  {/* </svg> */}
                {/* </a> */}
              </div>
            </div>
          </article>
        

          <article>
            <div class="article-wrapper">
              <figure>
                <img src="./images/collab2.jpeg" alt="" />
              </figure>
              <div class="article-body">
                <h2>#3 Collaboration Responsibilty</h2>
                <p>
                  Uniting minds and talents, our platform ignites the spark of teamwork, providing a fertile ground for diverse perspectives to flourish. Seamlessly connecting individuals across distances.Uniting minds and talents, our platform ignites the spark of teamwork, providing a fertile ground for diverse perspectives
                </p>
                
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  {/* </svg> */}
                {/* </a> */}
              </div>
            </div>
          </article>
        </div>
      </section>

    </div>
  );
};

export default Home;
