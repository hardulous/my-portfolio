import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import S from "./Experience.module.css";
import Icons from "./Icons";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className={`container ${S.expContainer}`}>
        <div className={`${S.expFrontend}`}>
          <h3>Frontend Development</h3>
          <div className={`${S.expContent}`}>
            <article className={`${S.expDetails}`}>
              <BsPatchCheckFill className={`${S.expDetailIcon}`} />
              <div>
                <h4>
                  Html <Icons.Html width="25" height="25" />{" "}
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className={`${S.expDetails}`}>
              <BsPatchCheckFill className={`${S.expDetailIcon}`} />
              <div>
                <h4>
                  Css <Icons.Css width="25" height="25" />
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className={`${S.expDetails}`}>
              <BsPatchCheckFill className={`${S.expDetailIcon}`} />
              <div>
                <h4>
                  JavaScript <Icons.Js width="25" height="25" />
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className={`${S.expDetails}`}>
              <BsPatchCheckFill className={`${S.expDetailIcon}`} />
              <div>
                <h4>
                  ReactJS <Icons.Jsx width="25" height="25" />
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className={`${S.expDetails}`}>
              <BsPatchCheckFill className={`${S.expDetailIcon}`} />
              <div>
                <h4>
                  TypeScript <Icons.Ts width="25" height="25" />
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className={`${S.expDetails}`}>
              <BsPatchCheckFill className={`${S.expDetailIcon}`} />
              <div>
                <h4>
                  Next.Js <Icons.NextJs width="25" height="25" />
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className={`${S.expBackend}`}>
          <h3>Backend Development</h3>
          <div className={`${S.expContent}`}>
            <article className={`${S.expDetails}`}>
              <BsPatchCheckFill className={`${S.expDetailIcon}`} />
              <div>
                <h4>
                  Nodejs <Icons.Node width="25" height="25" />
                </h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className={`${S.expDetails}`}>
              <BsPatchCheckFill className={`${S.expDetailIcon}`} />
              <div>
                <h4>
                  MongoDB <Icons.Mongo width="25" height="25" />
                </h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className={`${S.expDetails}`}>
              <BsPatchCheckFill className={`${S.expDetailIcon}`} />
              <div>
                <h4>
                  Express <Icons.Express width="25" height="25" />
                </h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className={`${S.expDetails}`}>
              <BsPatchCheckFill className={`${S.expDetailIcon}`} />
              <div>
                <h4>
                  MySql <Icons.MySql width="25" height="25" />
                </h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
