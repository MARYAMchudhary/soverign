import { useEffect } from "react";
import { useState, useRef } from "react";
import "./manifesto.styles.scss";

//GETTING MIDDLE POINT OF ON ELEMENT
const getDimensions = (ele) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

//SCROLL ON SPECIFIC SECTION
const scrollTo = (ele) => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const getdata = () => {
  window.addEventListener("scroll", () => {
    console.log("abc");
  });
};

const Manifesto = ({ DarkMood }) => {
  const [visibleSection, setVisibleSection] = useState();
  const [mainheading, setmainheading] = useState("Foreword");
  const [dropdownDisplay, setdropdownDisplay] = useState("hide-content");
  const [isOpen, setisOpen] = useState(false);
  const headerRef = useRef(null);
  const [selectedOne, setselectedOne] = useState({
    num1: false,
    num2: false,
    num3: false,
    num4: false,
    num5: false,
  });

  // EACH SECTION REFERENCE
  const forewordRef = useRef(null);
  const theVisionRef = useRef(null);
  const noStoryJustRealityRef = useRef(null);
  const designRarityRef = useRef(null);
  const BTCNFTLicenseRef = useRef(null);
  const theDAORef = useRef(null);
  const DAOPlatformInterfaceRef = useRef(null);
  const ideasRef = useRef(null);
  const proposalsRef = useRef(null);
  const governanceScheduleRef = useRef(null);
  const DAOModerationRef = useRef(null);
  const discussionRef = useRef(null);
  const votingRef = useRef(null);
  const executiveActionRef = useRef(null);
  const sovereignDAORef = useRef(null);
  const sovereignAcademyRef = useRef(null);
  const sovereignGrantRef = useRef(null);
  const decentralizedSocialPlatformRef = useRef(null);
  const decentralizedNewsNetworkRef = useRef(null);
  const conclusionRef = useRef(null);

  const menuRef = useRef();

  const sectionRefs = [
    { section: "foreword", ref: forewordRef },
    { section: "theVision", ref: theVisionRef },
    { section: "noStoryJustReality", ref: noStoryJustRealityRef },
    { section: "designRarity", ref: designRarityRef },
    { section: "BTCNFTLicense", ref: BTCNFTLicenseRef },
    { section: "theDAO", ref: theDAORef },
    { section: "DAOPlatformInterface", ref: DAOPlatformInterfaceRef },
    { section: "ideas", ref: ideasRef },
    { section: "proposals", ref: proposalsRef },
    { section: "governanceSchedule", ref: governanceScheduleRef },
    { section: "DAOModeration", ref: DAOModerationRef },
    { section: "discussion", ref: discussionRef },
    { section: "voting", ref: votingRef },
    { section: "executiveAction", ref: executiveActionRef },
    { section: "sovereignDAO", ref: sovereignDAORef },
    { section: "sovereignAcademy", ref: sovereignAcademyRef },
    { section: "sovereignGrant", ref: sovereignGrantRef },
    {
      section: "decentralizedSocialPlatform",
      ref: decentralizedSocialPlatformRef,
    },
    { section: "decentralizedNewsNetwork", ref: decentralizedNewsNetworkRef },
    { section: "conclusion", ref: conclusionRef },
  ];

  useEffect(() => {
    document.addEventListener("mouseover", () => {
      setisOpen(false);
    });
  });

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);

  // console.log( 'visible section', visibleSection );

  const changeTheVision = () => {
    const currentScrollPosition = window.pageYOffset;
    let elementID = "theVision";
    const elementOffsetTop = document.getElementById(elementID).offsetTop;
    console.log("abc1", elementOffsetTop);

    if (currentScrollPosition === elementOffsetTop) {
      console.log("element offset:", elementOffsetTop);
      console.log("current scroll position:", currentScrollPosition);
    } else {
      // setmainheading("The Vision");
      console.log("current scroll position:", currentScrollPosition);
    }
  };

  window.addEventListener("scroll", changeTheVision, true);

  //  const changeForewordHeading = () => {
  //   const currentScrollPosition = window.pageYOffset;
  //    let elementID = 'foreword';
  //   const elementOffsetTop = document.getElementById(elementID).offsetTop

  //   if ( currentScrollPosition >= elementOffsetTop){
  //     console.log( 'reached foreword' );
  //     setmainheading( 'Foreword' );
  //   } else {
  //     console.log( 'outside forword' );
  //   }
  // }

  // window.addEventListener( 'scroll', changeForewordHeading, true );

  return (
    <>
      <div onScroll={getdata} className="manifesto_container">
        <div className="manifesto_body">
          <div className="manifesto_sidebar">
            <div class="accordion mt-3" id="accordionExample">
              {/* MANIFESTO TITLE NUMBER ONE STARTS */}
              <div className="mb-3">
                <div
                  class="accordion-item manifesto-title-container"
                  type="button"
                  onClick={() => {
                    scrollTo(forewordRef.current);
                  }}
                >
                  <h3
                    class="accordion-header"
                    id="headingOne"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    type="button"
                    aria-controls="collapseOne"
                  >
                    Foreword
                  </h3>
                </div>
              </div>

              {/* MANIFESTO TITLE NUMBER ONE END */}

              {/* MANIFESTO TITLE NUMBER TWO STARTS */}
              <div className="mb-3">
                <div
                  class="accordion-item manifesto-title-container"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  type="button"
                  onClick={() => {
                    scrollTo(theVisionRef.current);
                  }}
                >
                  <h3
                    class={`accordion-header ${
                      visibleSection === "theVision" ? "selected" : ""
                    }`}
                    id="headingTwo"
                  >
                    The Vision
                  </h3>
                </div>
              </div>

              {/* MANIFESTO TITLE NUMBER TWO ENDS */}

              {/* MANIFESTO TITLE NUMBER THREE STARTS */}
              <div className="mb-3">
                <div
                  class="accordion-item manifesto-title-container"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  type="button"
                >
                  <h3 class="accordion-header" id="headingThree" >
                    Behind The Curtain - The Art
                  </h3>
                </div>
                <div
                  class="accordion-item"
                  style={{ background: "none", border: "none" }}
                >
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body p-0">
                      {/*  */}
                      <div hidden class="accordion-item manifest_section">
                        <h3 class="accordion-header" id="flush-headingThree">
                          <span
                            type="button"
                            onClick={() => {
                              scrollTo(noStoryJustRealityRef.current);
                            }}
                          >
                            The Art
                          </span>
                        </h3>
                      </div>
                      <div class="accordion-item manifest_section">
                        <h3 class="accordion-header" id="flush-headingThree">
                          <span
                            type="button"
                            onClick={() => {
                              scrollTo(noStoryJustRealityRef.current);
                            }}
                          >
                            No Story, Just Reality
                          </span>
                        </h3>
                      </div>
                      <div class="accordion-item manifest_section">
                        <h3 class="accordion-header" id="flush-headingThree">
                          <span
                            type="button"
                            onClick={() => {
                              scrollTo(designRarityRef.current);
                            }}
                          >
                            Design and Rarity
                          </span>
                        </h3>
                      </div>
                      <div class="accordion-item manifest_section">
                        <h3 class="accordion-header" id="flush-headingThree">
                          <span
                            type="button"
                            onClick={() => {
                              scrollTo(BTCNFTLicenseRef.current);
                            }}
                          >
                            Behind The Curtain NFT License
                          </span>
                        </h3>

                        {/* <div
                          id="flush-collapseThree"
                          class="accordion-collapse collapse"
                          aria-labelledby="flush-headingThree"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div class="accordion-body manifesto_subsection">
                            <div class="card card-body">
                              <button
                                onClick={() => {
                                  scrollTo(noStoryJustRealityRef.current);
                                }}
                              >
                                No Story, Just Reality
                              </button>
                            </div>
                            <div class="card card-body">
                              <button
                                onClick={() => {
                                  scrollTo(designRarityRef.current);
                                }}
                              >
                                Design and Rarity
                              </button>
                            </div>
                            <div class="card card-body">
                              <button
                                onClick={() => {
                                  scrollTo(BTCNFTLicenseRef.current);
                                }}
                              >
                                Behind The Curtain NFT License
                              </button>
                            </div>
                          </div>
                        </div> */}
                      </div>
                      {/*  */}
                      {/* <div className="manifest_section">
                      <p>
                        <button
                          class="manifesto_section_1_btn"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseone"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                        >
                          The Art
                        </button>
                      </p>

                      <div
                        class="collapse manifesto_subsection p-0"
                        id="collapseone"
                      >
                        <div class="card card-body">
                          <button>No Story, Just Reality</button>
                        </div>
                      </div>
                    </div> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* MANIFESTO TITLE NUMBER THREE ENDS */}

              {/* MANIFESTO TITLE NUMBER FOUR STARTS */}
              <div className="mb-3">
                <div
                  class="accordion-item manifesto-title-container"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsefour"
                  aria-expanded="false"
                  aria-controls="collapsefour"
                  type="button"
                >
                  <h3 class="accordion-header" id="headingfour">
                    Sovereign
                  </h3>
                </div>
                <div
                  class="accordion-item"
                  style={{ background: "none", border: "none" }}
                >
                  <div
                    id="collapsefour"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingfour"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body p-0">
                      <div class="accordion-item manifest_section">
                        <h3 class="accordion-header" id="flush-headingThree">
                          <span
                            type="button"
                            onClick={() => {
                              scrollTo(theDAORef.current);
                            }}
                          >
                            The DAO
                          </span>
                        </h3>
                      </div>
                      <div class="accordion-item manifest_section">
                        <h3 class="accordion-header" id="flush-headingThree">
                          <span
                            type="button"
                            onClick={() => {
                              scrollTo(DAOPlatformInterfaceRef.current);
                            }}
                          >
                            DAO Platform and Interface
                          </span>
                        </h3>
                      </div>
                      <div class="accordion-item manifest_section">
                        <h3 class="accordion-header" id="flush-headingThree">
                          <span
                            type="button"
                            onClick={() => {
                              scrollTo(ideasRef.current);
                            }}
                          >
                            Ideas
                          </span>
                        </h3>
                      </div>
                      <div class="accordion-item manifest_section">
                        <h3 class="accordion-header" id="flush-headingThree">
                          <span
                            type="button"
                            onClick={() => {
                              scrollTo(proposalsRef.current);
                            }}
                          >
                            Proposals
                          </span>
                        </h3>
                      </div>
                      <div class="accordion-item manifest_section">
                        <h3 class="accordion-header" id="flush-headingThree">
                          <span
                            type="button"
                            onClick={() => {
                              scrollTo(governanceScheduleRef.current);
                            }}
                          >
                            Governance Schedule
                          </span>
                        </h3>
                      </div>
                      <div class="accordion-item manifest_section">
                        <h3 class="accordion-header" id="flush-headingThree">
                          <span
                            type="button"
                            onClick={() => {
                              scrollTo(DAOModerationRef.current);
                            }}
                          >
                            DAO Moderation
                          </span>
                        </h3>
                      </div>
                      <div class="accordion-item manifest_section">
                        <h3 class="accordion-header" id="flush-headingThree">
                          <span
                            type="button"
                            onClick={() => {
                              scrollTo(discussionRef.current);
                            }}
                          >
                            Discussion
                          </span>
                        </h3>
                      </div>
                      <div class="accordion-item manifest_section">
                        <h3 class="accordion-header" id="flush-headingThree">
                          <span
                            type="button"
                            onClick={() => {
                              scrollTo(votingRef.current);
                            }}
                          >
                            Voting
                          </span>
                        </h3>
                      </div>
                      <div class="accordion-item manifest_section">
                        <h3 class="accordion-header" id="flush-headingThree">
                          <span
                            type="button"
                            onClick={() => {
                              scrollTo(executiveActionRef.current);
                            }}
                          >
                            Executive Action
                          </span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* MANIFESTO TITLE NUMBER FOUR ENDS */}

              {/* MANIFESTO TITLE NUMBER FIVE STARTS */}
              <div className="mb-3">
                <div
                  class="accordion-item manifesto-title-container"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsefive"
                  aria-expanded="false"
                  aria-controls="collapsefive"
                  type="button"
                >
                  <h3 class="accordion-header" id="headingfive">
                    Ecosystem and Utility
                  </h3>
                </div>
                <div
                  class="accordion-item"
                  style={{ background: "none", border: "none" }}
                >
                  <div
                    id="collapsefive"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingfive"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body p-0">
                      <div class="accordion-item manifest_section">
                        <h3 class="accordion-header" id="flush-headingThree">
                          <span
                            type="button"
                            onClick={() => {
                              scrollTo(sovereignDAORef.current);
                            }}
                          >
                            SovereignDAO
                          </span>
                        </h3>
                      </div>
                      <div class="accordion-item manifest_section">
                        <h3 class="accordion-header" id="flush-headingThree">
                          <span
                            type="button"
                            onClick={() => {
                              scrollTo(sovereignAcademyRef.current);
                            }}
                          >
                            Sovereign Academy
                          </span>
                        </h3>
                      </div>
                      <div class="accordion-item manifest_section">
                        <h3 class="accordion-header" id="flush-headingThree">
                          <span
                            type="button"
                            onClick={() => {
                              scrollTo(sovereignGrantRef.current);
                            }}
                          >
                            Sovereign Grant
                          </span>
                        </h3>
                      </div>
                      <div class="accordion-item manifest_section">
                        <h3 class="accordion-header" id="flush-headingThree">
                          <span
                            type="button"
                            onClick={() => {
                              scrollTo(decentralizedSocialPlatformRef.current);
                            }}
                          >
                            Decentralized Social Platform
                          </span>
                        </h3>
                      </div>
                      <div class="accordion-item manifest_section">
                        <h3 class="accordion-header" id="flush-headingThree">
                          <span
                            type="button"
                            onClick={() => {
                              scrollTo(decentralizedNewsNetworkRef.current);
                            }}
                          >
                            Decentralized News Network
                          </span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* MANIFESTO TITLE NUMBER FIVE ENDS */}

              {/* MANIFESTO TITLE NUMBER SIX STARTS */}
              <div
                class="accordion-item manifesto-title-container"
                data-bs-toggle="collapse"
                data-bs-target="#collapsesix"
                aria-expanded="false"
                aria-controls="collapsesix"
                type="button"
                onClick={() => {
                  scrollTo(conclusionRef.current);
                }}
              >
                <h3 class="accordion-header" id="headingsix">
                  Conclusion
                </h3>
              </div>

              {/* MANIFESTO TITLE NUMBER SIX ENDS */}
            </div>
          </div>
          <div class="accordion mobile_select_sections" id="accordionExample">
            <div class="accordion-item bg-dark text-light">
              <h2
                class="accordion-header"
                id="headingOne"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                type="button"
              >
                Foreword
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">Hello</div>
              </div>
            </div>
          </div>
          <div className="manifesto_content" ref={headerRef}>
            <div
              className="manifesto_content_sec"
              id="foreword"
              ref={forewordRef}
            >
              <h3 style={{ color: DarkMood === false ? "#000" : "" }}>
                Foreword
              </h3>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                Blockchain technology is changing the landscape of cyberspace,
                and it’s causing shifts and rebalances of power across the graph
                of entities connected by our internet, whether they be
                corporations or individuals. We’ve seen massive amounts of
                capital pour into initiatives and teams across the Web3
                ecosystem with hopes of changing our fiduciary and banking
                systems, our democratic and governmental systems, and how we
                think about digital ownership. At the same time, comparable
                amounts of capital have been injected into projects based on
                little more than conceptual regurgitation enshrouded within a
                dizzying cacophony of hype.
              </p>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                But Value is artificial; it’s a construct of our collective
                imagination, and regardless of how public opinion may ebb or
                flow, it doesn’t change something’s inherent usefulness. We’ve
                seen coins and tokens with next to no use meteorically rise and
                fall after falling from the lips of public figures, and we’ve
                seen global communities form around gaggles of comedically
                dressed, anthropomorphized animals with the hope of maybe one
                day being able to run around as them in some game world. We can
                do better.
              </p>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                Our simulations are progressing quickly, and the divide between
                what’s real and what’s digital is dissolving fast. We can see
                all the freedom and promise virtuality has to offer, but we’re
                not there yet, and it’s important to recognize that we’re all
                still breathing - respirating and living together in a very
                intimately connected physical world. In this world, we don’t
                have the option to be a different species, toggle the color of
                our skin, or equip a different sex organ. It’s easy to get
                caught up in the rat race of the day-to-day trying to inflate
                our bank accounts, feed ourselves and our children, attract
                mates, and generally not die, but no matter how great of a job
                any of us are doing maintaining our own well-being and avoiding
                the pains of reality, it’s in this world where people are
                suffering; it’s here where people are mistreated for things
                literally skin deep. It’s here where women are stripped of
                control over their own bodies. It’s here where we slave away our
                time and our lives for corporations that see us as expendable.
                It’s here where we’re treated like lab mice, subjected to
                streams of content from algorithms designed to keep us
                scrolling, clicking, liking, and buying. It’s here where we can
                see the widening chasm between the haves and the have-nots. It’s
                here where many of us are left behind like roadkill amidst the
                skid marks of capitalistic progress, and it’s here where we’re
                hurting and where we need help. But, it’s also here where love
                is felt. It’s here we can shake hands; here we can catch the
                full frequency spectrum of someone’s laugh and all the body
                language that comes with it. It’s here we can be intimate and
                make eye contact. Here we can begin to hear and understand one
                another unmediated by capitalized ethernet or airwaves. Here we
                can start to make a difference, and that’s exactly what
                Sovereign plans to do.
              </p>

              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                As one of the world’s first decentralized organizations,
                Anonymous spans the entire globe. Despite how they may have been
                portrayed, Anonymous is not some hacker organization; they are a
                collective of individuals that utilize modern tools to pull back
                the veil on a variety of social injustices and exploitation
                happening around the world and then try to galvanize a response
                to bring those injustices to an end. Anonymous is a movement and
                an activist organization, and they’re not all sitting at some
                terminal staring at a blinking cursor. They’re in our movie
                theaters and our grocery stores. They sit next to us on
                airplanes and warm the milk for our lattes. And, the important
                thing to note is that “they” are no different than you or I.
                They are made up of individuals just like you and I. They’re us,
                and together we serve almost like a house of representatives,
                except our only agenda is the Human agenda. We want everyone on
                the planet, regardless of race, gender, or national borders to
                enjoy the unalienable rights of Life, Liberty, and the pursuit
                of Happiness, except from our perspective, the pursuit of
                Happiness shouldn’t be done in a system where the goal is put at
                the end of an ever-hastening treadmill.
              </p>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                Before we continue, we’d first like to thank you - and
                congratulate you - for making it at least this far. We know it’s
                taking a lot of mental effort to ignore the notifications
                crawling across every screen and device of yours, so, needless
                to say, we’re impressed and glad to have you still with us.
              </p>

              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                It is our intention that this whitepaper elucidates our vision
                as clearly as we see it and as well as we can. Though letters on
                a page can only communicate so much, we hope that with your
                support we can bring to fruition a constellation of projects and
                endeavors aimed and elevating people, shaping the future of our
                internet, and having a real-world impact. Thank you for taking
                the time to read this manifesto and to understand our intention.
              </p>
            </div>

            <div
              className="manifesto_content_sec"
              id="theVision"
              ref={theVisionRef}
            >
              <h3 style={{ color: DarkMood === false ? "#000" : "" }}>
                The Vision
              </h3>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                Sadly, capital is one very powerful way to make things happen in
                the world, and Anonymous doesn’t take entering the NFT space
                lightly. It’s easy for NFTs to have left you with a bad taste in
                your mouth after a near endless stream of surface-level art and
                evaporative promises, but we believe in blockchain technology
                and the systems and interactions it engenders. We knew that if
                we were to do an NFT project, there were three important aspects
                it needed to fulfill: first, it needed to break new ground; we
                wouldn’t have been happy humanizing yet another species or even
                our iconic, stalwart suit and giving it an accessory makeover.
                Secondly, it needed to say something. We think the most powerful
                art tries to wake people up to various aspects of the human
                condition and provide some point-of-view on the current state of
                the world. Lastly, any NFT project we produced needed to fund
                the development of something aimed at fundamentally helping
                people. Following extensive consideration and debate, we settled
                on a two-pronged approach.
              </p>

              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                Human beings have been collaboratively reshaping the world since
                before written history, and now, in our modern Information Age,
                where everything is becoming computerized and metricized, group
                thinking and collective action are starting to see the
                formalization of digital rules and interfaces, and, in many
                respects, decentralized autonomous organizations (DAOs) are
                leading the charge. Being one of the largest, digitally
                interlinked communities on the planet, the first prong of our
                efforts will be to establish a DAO interface we expect to serve
                as an evolutionary step in how we join forces and coproduce over
                the internet. This DAO is named, “SovereignDAO.”
              </p>

              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                The second segment of our endeavor is to educate people through
                something we’re calling the “Sovereign Academy,” a new model for
                online education. We believe education equips us with the
                capacity to change our situation and pull ourselves out of
                whatever dire straights we may find ourselves in, and, more
                importantly, we believe a well-rounded education arms our minds
                with the capacity to see the world through a variety of
                different and often conflicting lenses. In other words,
                education can lay the groundwork for empathy, something the
                world can use a lot more of. We don’t think education should
                ever get locked behind a daunting financial barrier, whether
                that barrier be a back-breaking tuition or a highly coveted NFT.
                The academy will be open to everyone, though owning a Behind The
                Curtain NFT will give you enrollment priority along with free
                access to one of our upcoming instructorled courses. Additional
                information about the utility and usefulness of both our NFT and
                the ecosystem we’re building can be found in the Ecosystem and
                Utility section later in this paper.
              </p>
            </div>

            <div
              className="manifesto_content_sec"
              id="noStoryJustReality"
              ref={noStoryJustRealityRef}
            >
              <h3 style={{ color: DarkMood === false ? "#000" : "" }}>
                Behind The Curtain
              </h3>
              <h4 style={{ marginTop: 20 ,color: DarkMood === false ? "#000" : "" }}>The Art</h4>
              <h5 style={{ color: DarkMood === false ? "#000" : "" }} >No Story, Just Reality</h5>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                With so many projects centered on developing the characters of
                their own fictional universes, we wanted to focus on the
                characters in this universe, you and the rest of us. With our
                Behind The Curtain NFTs, there are no imaginary places - no
                magical artifacts or otherworldly resources. Instead, in every
                Behind The Curtain you’ll find glimpses into cold, hard reality
                - evocative graphics designed to bring the spotlight of your
                attention to a myriad of concerns, issues, and injustices
                happening today in your country, your city, street, and maybe
                even household. Humans may or may not be creatures of habit, but
                the architecture of modern society has certainly forced us to be
                through our merry-go-round of nine-to-fives and mechanized
                billing systems, and as we grip the rails of our steeds and
                unicorns to prevent ourselves from being flung from this
                ceaseless machine, it wouldn’t be out of the ordinary to miss
                the blur and flurry of events that streak by on a daily basis.
                This art is intended to serve as a reminder of all the victories
                that have yet to be won for humanity.
              </p>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                We did the best we could in the time we had to touch upon a wide
                array of human issues. If you believe you or a subset of people
                are underrepresented or misrepresented by the imagery in Behind
                The Curtain, please let the team know, and we will make an
                effort to amplify your and their voices in any future projects
                the team may undertake.
              </p>

              <h4 id="designRarity" ref={designRarityRef} style={{ color: DarkMood === false ? "#000" : "" }}>
                Design and Rarity
              </h4>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                When we started this project, we knew we had to stand out from
                what is now an extremely large herd (herd indeed). Obviously, it
                had crossed our minds to do a humanoid bust wearing the iconic
                Guy Fawkes mask, but that didn’t feel like either an interesting
                or meaningful way for Anonymous to step into the NFT space. One
                of the early mock-ups we’d received from the multimedia artist,
                The Virtunaut was an image portraying a Guy Fawkes mask
                discarded to a city street gutter while the camera stared up at
                a brick wall of graffiti. The erratic, energetic, and
                boundarybreaking nature of graffiti art felt like the perfect
                way to visually approach an art project meant to communicate the
                human condition. Needless to say, it was the kernel from which
                we eventually arrived at the final design. In the end, the style
                we’d arrived at is a unique blend of digital with analog
                inspiration: wavering vertical striations meant to represent the
                effect of gravity on physical, liquid mediums run into
                sharp-edged brush strokes that would be difficult to achieve
                with a spray can. These digital marks collide with the feathered
                and textural to produce Behind The Curtain’s unique visual
                style.
              </p>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                An immense amount of thought was put into both the art and
                underlying algorithms that generate each unique Behind The
                Curtain NFT, and the team invested a ton of time into generating
                lists of social issues, media instances, perspectives, empathic
                points of view, realist perspectives, and Anonymous history that
                could be encapsulated into single graphics - things like police
                brutality, child labor, or human inequality. These graphics we
                refer to as “Symbols,” and they make up the lifeblood of the
                project.
              </p>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                Each piece contains somewhere between two to five symbols, and
                our favorite aspect of the art stems from the mental and
                conceptual relationships that form when looking at any
                composition. By placing multiple politically or emotionally
                charged images side by side, we enable owners and viewers to
                form associations and breathe their own narrative and
                interpretation into the piece, allowing each NFT to serve as a
                different social commentary entirely. Also, with the majority of
                other NFT projects, people mostly tend to gravitate toward what
                looks cool, which makes sense, but human beings can only relate
                to laser eyes, 3D glasses, or German pike helmets so much. We’re
                confident that, regardless of rarity, there will be dozens of
                pieces from the Behind The Curtain collection you can personally
                relate to - pieces depicting movements and perspectives you may
                support or can philosophically get behind.
              </p>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                Many generative collections either toggle or swap out pieces of
                statically placed art, but graffiti, like our messy physical
                world, is unpredictable; we wanted a system where components
                could overlap or bleed into one another. We didn’t want to lose
                the aspects of what is a very raw and emotional art form, so we
                did our best to balance the chaotic with the goal of providing
                our supporters with well-composed pieces. Behind The Curtain
                NFTs can have art existing in a variety of places, and two NFTs
                may share a certain attribute yet display it in wildly different
                locations.
              </p>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                In addition to Symbols, we have “Icons,” small, contained images
                used to augment or add a bit of conceptual coloring to the
                pieces as a whole. Like Symbols, Icons can exist in a wide array
                of locations and a spread of different colors, giving them a
                whole other axis along which to define their rarity.
              </p>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                The central and most obvious attribute is the mask.
                Intentionally fractured, yet always present, an outline of the
                iconic Guy Fawkes mask encapsulates evocative colors and
                patterns meant to coax our minds across a swath of cultural and
                human mentality. The brightened left eye is meant to
                characterize the biological human organism that exists behind
                every mask, the underlying attribute we all share.
              </p>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                The world is a complex and messy place, and as physically
                limited organisms, it’s currently impossible to escape the
                microcosmic experience of our own subjectivity. In order to gain
                a more accurate and comprehensive picture of reality, we turn to
                others whose words and images show us things from a different
                angle, another perspective. Unfortunately, we’re too often
                content enough with our own, but the only way we’ll ever make a
                society worth living in is by doing our best to listen to,
                absorb, and understand the perspectives of others. With the
                ubiquity of misinformation and toxic worldviews, it is pivotal
                for us to take into account multiple stories and crossreference
                sources to dig up the tiniest of details so we can have the best
                chance of reconstructing the archeological skeleton of history
                and empathizing with the present body of lived human experience.
              </p>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                This project is designed with this in mind. Symbols and graphics
                can overlap or be positioned in a way where part of them is
                obscured. It is our intention for you to cross-reference and
                check multiple NFTs to ensure you’ve seen the whole picture and
                all the details.
              </p>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                As with any good game design, one player’s fun does not balance
                out with another player’s frustration. The game’s systems should
                be built in a way that allow all players to be having fun,
                regardless of game state; they’re playing a game after all.
                Although Behind The Curtain is not a game, we want everyone who
                supports the project to be happy with the piece or pieces they
                receive. One may automatically assume a piece with two Symbols
                isn’t as valuable as a piece with three or more, but we actually
                tuned the algorithm to make two-Symbol images more rare as a
                means of balancing out the community’s perception of their
                “value.” There is a fairly high likelihood for at least one Icon
                to be present within each piece, and, with the additional axis
                of Icon color, there is a widened opportunity for pieces to
                contain something definitively very rare.
              </p>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                Besides systematically defined rarity, there are a couple
                ancillary attributes we are deliberately not adding to the
                metadata. Art shouldn’t always be seen through the lens of
                commerciality. We want you to see some elements and want them
                simply because you like them, not because the system tells you
                you should want them.
              </p>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                Finally, and arguably the most important aspect of the whole
                thing, is to not let a rigid framework defined in computer code
                tell you how you should value something; instead, let yourself
                and the world tell you what’s valuable. The issues depicted
                throughout the entire Behind The Curtain collection will
                unfortunately not be going away anytime soon. Your piece may not
                have “rare” Symbols in it, but people might literally be on the
                street outside your window fighting for what your piece
                represents. Who’s to say your piece isn’t worth more then?
              </p>
              <h4 id="BTCNFTLicense" ref={BTCNFTLicenseRef} style={{ color: DarkMood === false ? "#000" : "" }}>
                Behind The Curtain NFT License
              </h4>
              <h5 style={{ color: DarkMood === false ? "#000" : "" }}>Attribution 4.0 International (CC BY 4.0)</h5>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                Behind The Curtain utilizes the Creative Commons 4.0 License.
                More information can be found here:
                https://creativecommons.org/licenses/by/4.0/
              </p>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                You are free to:
                <ul>
                  <li style={{ color: DarkMood === false ? "#000" : "" }}>
                    Share
                    <ul>
                      <li style={{ color: DarkMood === false ? "#000" : "" }}>
                        Copy and redistribute the material in any medium or
                        format.
                      </li>
                    </ul>
                  </li>
                  <li style={{ color: DarkMood === false ? "#000" : "" }}>
                    Adapt
                    <ul>
                      <li style={{ color: DarkMood === false ? "#000" : "" }}>
                        Remix, transform, and build upon the material for any
                        purpose, even commercially.
                      </li>
                    </ul>
                  </li>
                </ul>
              </p>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                The licensor cannot revoke these freedoms as long as you follow
                the license terms.
              </p>
              <span style={{ color: DarkMood === false ? "#000" : "" }}>
                <strong style={{ color: DarkMood === false ? "#000" : "" }}>
                  License Terms
                </strong>
              </span>
              <ul>
                <li style={{ color: DarkMood === false ? "#000" : "" }}>
                  Attribution
                  <ul>
                    <li style={{ color: DarkMood === false ? "#000" : "" }}>
                      You must give appropriate credit, provide a link to the
                      license, and indicate if changes were made. You may do so
                      in any reasonable manner, but not in any way that suggests
                      the licensor endorses you or your use.
                    </li>
                  </ul>
                </li>
                <li style={{ color: DarkMood === false ? "#000" : "" }}>
                  No Hate or Prejudice
                  <ul>
                    <li style={{ color: DarkMood === false ? "#000" : "" }}>
                      You may NOT remix or add imagery that celebrates hate or
                      the marginalization of a certain demographic. This
                      includes, but is not limited to, the celebration of things
                      like: Racism, Sexism, Genderism, Heterosexualism,
                      Classism, Ageism, or Ableism.
                    </li>
                  </ul>
                </li>
                <li style={{ color: DarkMood === false ? "#000" : "" }}>
                  No Additional Restrictions
                  <ul>
                    <li style={{ color: DarkMood === false ? "#000" : "" }}>
                      You may not apply legal terms or technological measures
                      that legally restrict others from doing anything the
                      license permits.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="manifesto_content_sec" id="theDAO" ref={theDAORef}>
              <h3 style={{ color: DarkMood === false ? "#000" : "" }}>
                Sovereign
              </h3>
              <h4 style={{ color: DarkMood === false ? "#000" : "" }}>
                The DAO
              </h4>

              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                Law and order are how we’ve managed to civilize the human
                animal. And although the news maintains an ever-streaming flow
                of war, murder, and plight, we are actually living in the most
                peaceful time our species has ever seen. Many of us have the
                freedom to drive or walk to a local grocery store where we have
                a dizzying mess of products with which we can fill our carts. We
                have libraries of content so deep that a single human life could
                not even come close to experiencing all the books, movies, and
                games that fill their shelves. Modern governmental systems upon
                which nation states operate were designed in a pre-internet era.
                The historic individuals who had put their minds together to
                define democracy had created a marvel of human imagination, an
                invention that undoubtedly enabled us to flourish and create all
                the comforts we now take for granted. But, like any complex
                structure or piece of machinery, components wear down; paint
                chips and screws loosen, and the once pristine and luminous
                façade has begun to fade. The conversations and debates that
                once roared within the machine’s raucous halls, where every
                voice could clearly echo off the walls, have quieted and quieted
                into whispers behind closed doors and agreements on upper
                floors. More and more people are feeling that the flavor du jour
                of democracy isn’t working for them, and it’s likely because it
                isn’t. Corporate spend on political lobbying loomingly
                overshadows how much unions and public interest groups spend on
                influencing policy, and with so much of people’s time being
                vampirically siphoned off by employers paying them meager wages,
                who’s going to have the time or energy to go out and try to
                influence policymakers or get involved in their local
                government?
              </p>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                We are stuck in a ship whose course is set by few while we’re
                relegated to the engine room. This is why unqualified egoists
                have made it into the highest seats of power and why civil
                dissatisfaction is as grossly apprehensible as it is; people are
                no longer okay with the status quo. We’ve been given an amazing
                tool, capable of restoring not order and peace, as people are
                still miserable with those, but genuine human happiness, and
                we’ve let it fall to the wayside. Being at the cutting edge of
                human chronology, we should be experiencing the present as a
                harmonious crescendo, but instead it’s feeling more and more
                like a depressing denouement. It’s time to do something about
                it.
              </p>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                In actuality, it’s been time to do something about it for a
                while now, but only recently have digital tools become available
                that make internet transparency and group decision making as
                accessible as they are today. Anonymous has always stood for and
                strived to represent the voice of the people, but through our
                collective which we’ve named, “SovereignDAO” is how we plan on
                giving a voice to the people. DAO governed, Sovereign aims to
                give every digitally connected individual the ability to be
                heard and have a say in collectively shaping the future of our
                internet, helping to evolve how we coordinate and cooperate. It
                is also our hope that the waves of influence we start to emanate
                manage to seep out from our webwork of ethernet and spill into
                the real world, influencing our experienced lives and local
                governments in ways we can actually feel.
              </p>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                Access to SovereignDAO can be gained by owning Sovereign tokens
                or a Behind The Curtain NFT. This isn’t intended to be an
                exclusive club; we want the voices of everyone, not just the
                affluent, to shape the decisions Sovereign makes. The world
                needs improvement, and we can’t do it without you.
              </p>
              <h4 id="DAOPlatformInterface" ref={DAOPlatformInterfaceRef} style={{ color: DarkMood === false ? "#000" : "" }}>
                DAO Platform and Interface
              </h4>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                As stated, earnings from this project will go towards funding a
                custom interface and application that attempts to clearly
                organize and streamline group efforts done by Sovereign.
                Although popular in the blockchain space, DAOs and how they
                operate still have a long way to go. Many rely too heavily on
                token distribution, putting a disproportionate amount of
                influence into the hands of a few. This undermines the entire
                purpose of a DAO as it creates centralization. In addition to
                the uneven distribution of voice, it’s easy for many DAOs to
                lose their sense of direction and forget why they came into
                existence in the first place. Many DAO interfaces are so
                minimalistic that they fail to even come close to how a group
                would or should make a decision, and, with so many ideas coming
                from a wide assortment of people and backgrounds, it’s easy to
                see why the output of so many DAO’s feel random.
              </p>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                The application we’re building is by no means a final
                destination for DAO interfaces, but we do believe this project
                can play an important, evolutionary step in showcasing how a
                distributed collection of human brains can make things happen.
                This part of the paper will provide an overview of the lifecycle
                of proposals within SovereignDAO.
              </p>
              <h4 id="ideas" ref={ideasRef} style={{ color: DarkMood === false ? "#000" : "" }}>
                Ideas
              </h4>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                Anything that’s ever been built has started as an idea in
                someone’s head, and there is no set process for how best to
                translate something from the world of our imagination to
                something physical; some ideas get scribbled onto napkins at
                diners, while others start as amorphous collections of some
                malleable material. Despite an overwhelming number of ways to
                actualize what we see in our mind’s eye, all the processes do
                have one thing in common: they start out rough and are
                continually hewn to refinement as more time, effort, and
                perspectives are infused into it. Our interface is meant to
                facilitate this sort of process, allowing members to posit
                Ideas, which, after gaining traction within the community, have
                the opportunity to become Proposals.
              </p>
              <ul style={{ color: DarkMood === false ? "#000" : "" }}>
                <li style={{ color: DarkMood === false ? "#000" : "" }}>
                  Idea Formulation
                  <ul style={{ color: DarkMood === false ? "#000" : "" }}>
                    <li style={{ color: DarkMood === false ? "#000" : "" }}>
                      Much like a post on modern social platforms, users create
                      and put forth an “Idea.”
                    </li>
                    <li style={{ color: DarkMood === false ? "#000" : "" }}>
                      Technically, Ideas could be anything. It could be the idea
                      to create a YouTube video that attempts to end hate or
                      change the public’s opinion on something. It could be the
                      idea to make a game that engenders empathy. It’s up to
                      you. Whatever your idea is, within the interface, the Idea
                      will serve as a locus for conversation and debate.
                    </li>
                  </ul>
                </li>
                <li style={{ color: DarkMood === false ? "#000" : "" }}>
                  Intention
                  <p style={{ color: DarkMood === false ? "#000" : "" }}>
                    As a means to maintain a sense of direction and purpose for
                    SovereignDAO, all Ideas must be given what we call an
                    ‘Intention.’ This is really just a way of categorizing the
                    high-level goal of the effort in question. The interface
                    will provide you with a dropdown menu displaying the
                    available Intentions. The following list is not final, but
                    it should give you a sense of what Sovereign will and should
                    try to accomplish.
                  </p>
                  <ul>
                    <li style={{ color: DarkMood === false ? "#000" : "" }}>
                      World Impact
                      <ul>
                        <li style={{ color: DarkMood === false ? "#000" : "" }}>
                          Can this effort actually help people? There is still a
                          ton of suffering in the world. Can this make life a
                          little bit better for someone out there? How about a
                          community? A nation?
                        </li>
                        <li style={{ color: DarkMood === false ? "#000" : "" }}>
                          Technically, Ideas could be anything. It could be the
                          idea to create a YouTube video that attempts to end
                          hate or change the public’s opinion on something. It
                          could be the idea to make a game that engenders
                          empathy. It’s up to you. Whatever your idea is, within
                          the interface, the Idea will serve as a locus for
                          conversation and debate.
                        </li>
                      </ul>
                    </li>

                    <li style={{ color: DarkMood === false ? "#000" : "" }}>
                      DAO App Improvement
                      <ul>
                        <li style={{ color: DarkMood === false ? "#000" : "" }}>
                          Digital interfaces are never perfect. How are you
                          proposing we improve Sovereign’s user experience?
                        </li>
                      </ul>
                    </li>

                    <li style={{ color: DarkMood === false ? "#000" : "" }}>
                      Governance
                      <ul>
                        <li style={{ color: DarkMood === false ? "#000" : "" }}>
                          It’s hard enough getting people to agree, let alone
                          govern themselves. Will this change the rules and
                          systems by which Sovereign operates?
                        </li>
                      </ul>
                    </li>
                    <li style={{ color: DarkMood === false ? "#000" : "" }}>
                      DAO Court
                      <ul>
                        <li style={{ color: DarkMood === false ? "#000" : "" }}>
                          Court proposals are meant to handle primarily human
                          issues. Is there a social problem within Sovereign
                          that needs to be remedied? Have you or someone from
                          the DAO community been treated unfairly or
                          disrespectfully? Has a Proposal that’s gone completely
                          off course still being funded?
                        </li>
                      </ul>
                    </li>

                    <li style={{ color: DarkMood === false ? "#000" : "" }}>
                      Markets
                      <ul>
                        <li style={{ color: DarkMood === false ? "#000" : "" }}>
                          Are you suggesting Sovereign either buy or trade
                          certain assets out there in the world? Cows? Water?
                          NFTs?
                        </li>
                      </ul>
                    </li>

                    <li style={{ color: DarkMood === false ? "#000" : "" }}>
                      Allied Project
                      <ul>
                        <li style={{ color: DarkMood === false ? "#000" : "" }}>
                          Do you have a separate product, service, or effort
                          that can also elevate Sovereign? Does your project
                          expand on the capacity of Sovereign’s ecosystem and
                          community?
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <li style={{ color: DarkMood === false ? "#000" : "" }}>
                    Validation
                    <ul>
                      <li style={{ color: DarkMood === false ? "#000" : "" }}>
                        Members of the community review and substantiate your
                        Idea, allowing it to metamorphose into a more formal
                        Proposal.
                      </li>
                      <li style={{ color: DarkMood === false ? "#000" : "" }}>
                        Although anyone from the community can leave comments
                        and feedback on your Idea, a number of randomly selected
                        members of Sovereign will be chosen to either validate
                        or invalidate it.
                      </li>
                      <li style={{ color: DarkMood === false ? "#000" : "" }}>
                        Feedback is provided much like comments on other social
                        platforms.
                      </li>
                    </ul>
                  </li>
                </li>
              </ul>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                If more than half of the randomly chosen validators validate
                your idea, the interface will present you with the option to
                turn your Idea into a formal Proposal.
              </p>
              <h4 id="proposals" ref={proposalsRef} style={{ color: DarkMood === false ? "#000" : "" }}>
                Proposals
              </h4>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                Good work. They say, “ideas are a dime a dozen,” but yours is
                definitely worth at least a quarter. You’ve managed to help
                members of the community comprehend the value of your vision,
                and they want you to be successful in seeing it through. It’s
                one thing to have a great idea, but it’s completely another to
                understand the human orchestration needed to make that idea a
                reality. Here is where the platform and interface convert your
                Idea into a Proposal, and here you’ll be prompted to provide
                additional information on the specifics of how your Idea gets
                actualized.
              </p>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                You will find various input fields into which you’ll enter the
                details and technicalities of the effort you’re proposing.
                You’ll enter obvious things like a title and short description,
                but you’ll also find a series of more important sections to fill
                out. These sections are as follows:
              </p>
              <ul>
                <li style={{ color: DarkMood === false ? "#000" : "" }}>
                  Scope
                  <ul>
                    <li style={{ color: DarkMood === false ? "#000" : "" }}>
                      Arguably the most important part, this is where you will
                      define the specifics of what exactly needs to get done to
                      accomplish the task. There is no correct way to fill out
                      this section. Detailing how you plan to construct another
                      particle accelerator would likely dwarf the necessary
                      components of producing a marketing video. Each project
                      will likely require a unique breakdown.
                    </li>
                    <li style={{ color: DarkMood === false ? "#000" : "" }}>
                      This is where you need to put on your Project Manager cap
                      and break the problem down into granular, bite-sized
                      pieces of actionable things a person or a group of people
                      can feasibly accomplish.
                    </li>
                    <li style={{ color: DarkMood === false ? "#000" : "" }}>
                      Do what feels right, and don’t let yourself get too bogged
                      down by this section. If you’re building an application or
                      3D experience, it’s too early to tell what models and
                      textures you may need, and if you’re making video content,
                      you may not know all the shots you need to get, but you
                      can at least approximate. Showing you’re capable of
                      breaking larger efforts down into smaller ones will go a
                      long way in giving others confidence in the Proposal and
                      its execution.
                    </li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li style={{ color: DarkMood === false ? "#000" : "" }}>
                  Team
                  <ul>
                    <li style={{ color: DarkMood === false ? "#000" : "" }}>
                      In this section you’ll list all the individuals
                      contributing to the project and in what capacity. Are they
                      the team leader? Are they an artist, designer, or
                      engineer? What kind of prior experience do they have?
                    </li>
                    <li style={{ color: DarkMood === false ? "#000" : "" }}>
                      This is where you can demonstrate that the project has the
                      right people working on it.
                    </li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li style={{ color: DarkMood === false ? "#000" : "" }}>
                  Technical Specification
                  <ul>
                    <li style={{ color: DarkMood === false ? "#000" : "" }}>
                      Here you should delineate the technical details of your
                      project. Does it require the use of software that already
                      exists? Are you building software or hardware? What kind
                      of technology stack or components does it require? Is
                      there a target platform? Mobile? Desktop? File type?
                    </li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li style={{ color: DarkMood === false ? "#000" : "" }}>
                  Required Funds
                  <ul>
                    <li style={{ color: DarkMood === false ? "#000" : "" }}>
                      Unfortunately, the majority of us are still living in a
                      system which requires capital for us to simply exist; rent
                      knocks on the door every month, and nutrients, like
                      batteries, are not included and are required every day.
                      What are the estimated total funds needed to support the
                      people and pay for any services required to accomplish
                      this task?
                    </li>
                    <li style={{ color: DarkMood === false ? "#000" : "" }}>
                      This is meant to provide a high-level cost analysis, and,
                      if your project has Milestones, which we’ll get into in
                      the next section, you’ll be able to provide a more
                      detailed cost breakdown per Milestone.
                    </li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li style={{ color: DarkMood === false ? "#000" : "" }}>
                  Milestones
                  <ul>
                    <li style={{ color: DarkMood === false ? "#000" : "" }}>
                      The physical world is a complex and unpredictable place,
                      and the longer a project goes on, the more opportunities
                      there will be for something to get in the way of its
                      completion. Milestones serve as a means to maintain
                      Sovereign’s conviction in a project and delegate the
                      required funds at each step along the way
                    </li>
                    <li style={{ color: DarkMood === false ? "#000" : "" }}>
                      Projects can also vary in size and scope. Some projects
                      can be accomplished in a day or a week, while others can
                      take months or years. It would be a little irresponsible
                      for Sovereign to provide all the required funding for
                      complex projects up front.
                    </li>
                    <li style={{ color: DarkMood === false ? "#000" : "" }}>
                      You will utilize Milestones to segment your project into
                      what is functionally a series of goal posts. If you’re
                      building an application, the first Milestone may be a
                      paper prototype you can get community members to test out.
                      If the community likes it, then maybe you move into your
                      second Milestone where the goal is to create a digital
                      prototype. If you’re making video content, the first
                      Milestone could be a rough storyboard. It’s up to you.
                    </li>
                    <li style={{ color: DarkMood === false ? "#000" : "" }}>
                      Adequately breaking an endeavor into a sensible amount of
                      Milestones will not only make the DAO members feel more
                      involved in the development process, it will allow for you
                      and your team to experience positive reinforcement as you
                      move from Milestone to Milestone.
                    </li>
                    <li style={{ color: DarkMood === false ? "#000" : "" }}>
                      Each Milestone will allow you and your team to specify how
                      the required funds get divided.
                    </li>
                    <li style={{ color: DarkMood === false ? "#000" : "" }}>
                      Milestones will also allow their teams to enter Key
                      Performance Indicators or “KPIs.” These are considered
                      important metrics that can be used to determine how
                      “successful” each milestone is. If your team is designing
                      a game, the first KPI may be measuring survey submissions
                      from playtesters that rate aspects of the game on a one
                      through five scale. If the project is moving into being a
                      live service, a KPI could be the number of users.
                    </li>
                    <li style={{ color: DarkMood === false ? "#000" : "" }}>
                      When a team believes they have completed a milestone, they
                      can submit a Milestone Review Request. This will trigger
                      the associated Proposal to appear for review during the
                      Milestones Check Phase of the Governance Schedule we
                      discuss in the next section.
                    </li>
                  </ul>
                </li>
              </ul>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                After submitting your Proposal, the community will be able to
                engage with it in a variety of ways; they’ll be able to leave
                comments and discuss its various components, hopefully helping
                you tune up any parts that could use clarification or
                improvement. In addition, members will also be able to vote in
                favor of or against your proposal. If the supportive votes hit a
                certain threshold, your Proposal will be considered accepted,
                allowing you and your team to start making it all happen. If the
                vote is against your proposal, there’s nothing stopping you from
                making changes and resubmitting a revised version of the
                proposal after carefully considering what the community had to
                say.
              </p>

              <h4 id="governanceSchedule" ref={governanceScheduleRef} style={{ color: DarkMood === false ? "#000" : "" }}>
                Governance Schedule
              </h4>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                Now that you have an overview of how Proposals work within
                Sovereign, we’d like to elucidate the high-level governance
                schedule for how we envision this DAO operating and processing
                the flow of Ideas and Proposals. With so many contributors
                scattered all across the globe, we want to do our best to create
                a sense of order in what could very easily be considered a
                chaotic system. We hope this schedule helps this community
                operate like a well-oiled machine. The following cycle repeats
                every two weeks:
              </p>
              <ul>
                <li style={{ color: DarkMood === false ? "#000" : "" }}>
                  Review
                </li>
                <ul>
                  <li style={{ color: DarkMood === false ? "#000" : "" }}>
                    Sovereign moderators ensure all new Ideas and Proposals
                    provide a sufficient amount of information and hit a
                    publicly shared standard of quality for what the author aims
                    to accomplish.
                  </li>
                  <li style={{ color: DarkMood === false ? "#000" : "" }}>
                    If an author submits an Idea for a fund-raising event but
                    forgets to include how funds will actually be raised, more
                    information may be requested through the interface before
                    the Idea moves to validation. The review process is intended
                    to be very transparent, allowing all members of Sovereign to
                    see any review
                  </li>
                </ul>
              </ul>
              <ul>
                <li style={{ color: DarkMood === false ? "#000" : "" }}>
                  Proposal Voting
                </li>
                <ul>
                  <li style={{ color: DarkMood === false ? "#000" : "" }}>
                    Any Proposals that have passed Review are considered active,
                    and, over the course of seven days, members of Sovereign
                    will be allowed to readover, provide their own comments, and
                    vote in-favor of or against the Proposal in question
                  </li>
                  <li style={{ color: DarkMood === false ? "#000" : "" }}>
                    Voting uses a unique sybil-resistant voting mechanism
                    designed by the Sovereign team allowing voters to
                    communicate how “strongly” they feel about their vote. The
                    details of this system will be outlined in a technical
                    document currently being written.
                  </li>
                  <li style={{ color: DarkMood === false ? "#000" : "" }}>
                    We know everyone has their own lives and schedules, and it’s
                    easy to get swept up by the day-to-day, but we hope that by
                    maintaining a predictable window for voting we make it much
                    easier for people’s voices to be heard and to feel as if
                    they’re contributing. Without a schedule, we feel it would
                    be too easy to overlook Proposals you would have otherwise
                    been interested in.
                  </li>
                </ul>
              </ul>
              <ul>
                <li style={{ color: DarkMood === false ? "#000" : "" }}>
                  Proposal Execution
                </li>
                <ul>
                  <li style={{ color: DarkMood === false ? "#000" : "" }}>
                    Any Proposals that have been communally approved will have
                    their first Milestone funds released to the wallet address
                    or addresses contained in the proposal.
                  </li>
                </ul>
              </ul>
              <ul>
                <li style={{ color: DarkMood === false ? "#000" : "" }}>
                  Milestone Checks
                </li>
                <ul>
                  <li style={{ color: DarkMood === false ? "#000" : "" }}>
                    Similar to the Review phase, Sovereign moderators will look
                    over all Proposals requesting to move on to their next
                    Milestone. If moderators and the community believe the
                    project has successfully delivered on the current Milestone,
                    the project moves on to the next and the respective funds
                    are then released to the team.
                  </li>
                </ul>
              </ul>
              <ul>
                <li style={{ color: DarkMood === false ? "#000" : "" }}>
                  Platform Maintenance
                </li>
                <ul>
                  <li style={{ color: DarkMood === false ? "#000" : "" }}>
                    As the worlds of both software and hardware continue to
                    evolve, it’s important for the technical team to confirm
                    everything with the Sovereign platform is operating as
                    intended. During this time, the technical team and DAO
                    moderators will perform an array of system scans and
                    integrity checks to ensure the platform is secure and
                    running smoothly.
                  </li>
                </ul>
              </ul>
              <ul>
                <li style={{ color: DarkMood === false ? "#000" : "" }}>
                  Update Funding Cycle
                </li>
                <ul>
                  <li style={{ color: DarkMood === false ? "#000" : "" }}>
                    During this final phase, Sovereign moderators ensure the
                    DAO's multisig wallets are secure and functioning as
                    intended by checking for problems and reporting them. As
                    volume increases and more capital flows through Sovereign,
                    the frequency of this phase will increase.
                  </li>
                </ul>
              </ul>
              <h4 id="DAOModeration" ref={DAOModerationRef} style={{ color: DarkMood === false ? "#000" : "" }}>
                DAO Moderation
              </h4>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                To ensure that every Idea and Proposal has a fair shot at being
                actualized, Sovereign moderators and a group of randomly
                selected Sovereign members will review the item in question to
                confirm that it’s author has included all the necessary
                information and that the information meets a set of quality
                standards. These standards will be easy to find and clearly
                presented for all those interested in postulating their own Idea
                or Proposal; we want to avoid as much guess and check and back
                and forth as possible.
              </p>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                If the combined majority of both the selected members and
                moderators believe more information is required or that the
                quality standards have not been met, the author will be notified
                to submit a revised version of the Idea or Proposal.
              </p>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                Sovereign moderators will also be in charge of preventing toxic
                behavior across the platform and they will work to assure that
                Sovereign is a community where people feel welcome, accepted,
                and safe. It is important to note this social moderation is done
                collectively and not based on the whim of a single moderator.
              </p>
              <h4 id="discussion" ref={discussionRef} style={{ color: DarkMood === false ? "#000" : "" }}>
                Discussion
              </h4>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                The design of the entire DAO platform is extremely intentional;
                it is not designed for people to share photos of what they ate
                for lunch or where they were hanging out during the weekend. The
                areas and interfaces you’ll interact with are meant to
                facilitate discussion and discourse around the most important
                elements of the system: the community itself, Ideas, Proposals,
                and the execution of active Proposals by their affiliated team.
                As both the team and community grow, so too will the methods and
                avenues for communication and collaboration. Below you’ll find
                the initial ways by which members can interact:
              </p>
              <ul>
                <li style={{ color: DarkMood === false ? "#000" : "" }}>
                  Community Chat
                </li>
                <ul>
                  <li style={{ color: DarkMood === false ? "#000" : "" }}>
                    Realtime chat for the entire community. Here you are free to
                    converse with the other members of Sovereign.
                  </li>
                </ul>
              </ul>
              <ul>
                <li style={{ color: DarkMood === false ? "#000" : "" }}>
                  Idea Comments
                </li>
                <ul>
                  <li style={{ color: DarkMood === false ? "#000" : "" }}>
                    Sovereign moderators and community members can provide their
                    input on any Ideas just like a post or video on other social
                    platforms. Whether the Idea is Formulating or waiting for
                    Validation, you’ll be able to leave your feedback.
                  </li>
                </ul>
              </ul>
              <ul>
                <li style={{ color: DarkMood === false ? "#000" : "" }}>
                  Proposal Comments
                </li>
                <ul>
                  <li style={{ color: DarkMood === false ? "#000" : "" }}>
                    Just like Idea Comments, members will have the opportunity
                    to provide their feedback or insight on a Proposal or
                    Milestone regardless of what phase the Proposal is in.
                  </li>
                </ul>
              </ul>
              <ul>
                <li style={{ color: DarkMood === false ? "#000" : "" }}>
                  Team Chat
                </li>
                <ul>
                  <li style={{ color: DarkMood === false ? "#000" : "" }}>
                    Of course teams are free to communicate using whatever
                    software or service works best for them, but, for any given
                    Proposal, all DAO member contributors will be given a
                    private channel to discuss whatever they may need.
                  </li>
                </ul>
              </ul>
              <h4 id="voting" ref={votingRef} style={{ color: DarkMood === false ? "#000" : "" }}>
                Voting
              </h4>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                Modern Homo Sapiens have been around for approximately three
                hundred thousand years, and, if we had to guess, tallying up
                individual opinions to understand the general consensus has
                likely been around for just as long. Over the years, humanity
                has speciated dozens of voting systems, all with varying
                strengths and weaknesses. Aside from the Validation of Ideas,
                Proposals serve as the primary locus of attention for
                Sovereign’s voting processes. Over time, the types of Proposals
                that are seen to fruition will come to constitute the behavior
                and identity of SovereignDAO. We plan to do our best to see that
                this DAO maintains balance and order and becomes a source of
                good for many people across both cyberspace and physical space.
              </p>
              <h4 id="executiveAction" ref={executiveActionRef} style={{ color: DarkMood === false ? "#000" : "" }}>
                Executive Action
              </h4>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                Sovereign will encounter certain actions and activities it needs
                to perform or complete in to function properly. These can
                include the release of funds to teams, managing multisig wallets
                or blockchain assets, buying goods from various marketplaces, or
                handling underlying technical issues with the platform. Until
                all these operations can be completely automated and controlled
                by a trustless method, Sovereign’s founders will execute the
                will of the community.
              </p>
            </div>
            <div
              className="manifesto_content_sec"
              id="sovereignDAO"
              ref={sovereignDAORef}
            >
              <h3 style={{ color: DarkMood === false ? "#000" : "" }}>
                Ecosystem and Utility
              </h3>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                As blockchain technology continues to mature and more
                organizations discover its usefulness, a myriad of use cases and
                applications will spark to life across the still widening
                spectrum of NFTs. As mentioned earlier in this paper, we’re
                dedicated to improving lives through governance and education.
                these are the aims of the DAO we’re creating and why we’ve
                decided to pursue building the Sovereign Academy. Dozens of
                other NFT projects are working on whisking you away into their
                fantasy worlds, but as great as it is to be able to distract
                ourselves from the world’s harshness or the jobs many of us
                hate, we want to level you up, and although you may not be able
                to clearly see your experience bar or stats, we believe your
                invisible attributes are the most important ones you’ll ever
                have. We want to help you self actualize.
              </p>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                There are a ton of important topics from governance to finance
                and politics that could equip people with the knowledge to
                improve the world for both themselves and others, and we wish we
                had the capacity to do it all at once, but the reality is we
                have to start small. As our internet matures to become more
                transparent, open, and communally defined, we felt giving people
                the skills to not only comprehend its evolution but to have a
                say and engage in the development of that evolution would be a
                great place to begin. This is why the first course we’ll be
                offering through the Sovereign Academy will be one focused on
                blockchain development. The course will be blockchain agnostic,
                and just as learning the fundamentals of programming can apply
                to an assortment of languages, the knowledge and know-how you’ll
                pick up in this course will be applicable to any blockchain,
                whether it be Ethereum, Bitcoin, Polkadot, or some other chain
                existing out over the horizon. It’s time to level the playing
                field and take back control over our time, data, and future.
                This first course will also serve as a pilot for us to learn if
                the systems we build are working, and if not, how they need to
                be tinkered with. Once we’re confident in the platform’s
                implementation and its capacity to scale, we’ll expand our
                course listing across as many realms of human thought as we can.
              </p>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                The following sections will outline the value and utility one
                can expect to find from both the NFT as well as the ecosystem of
                platforms and applications currently being planned and
                developed.
              </p>
              <h4 style={{ color: DarkMood === false ? "#000" : "" }}>
                SovereignDAO
              </h4>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                SovereignDAO is the platform we provided you with details on
                above, and it’s our intention that it become a collection of
                individuals dedicated to improving the status quo. Anyone who
                owns Sovereign tokens or a Behind The Curtain NFT will be
                considered part of Sovereign and will have the capacity to
                suggest ideas and proposals to the community at large.
              </p>
              <span>
                <strong style={{ color: DarkMood === false ? "#000" : "" }}>
                  Value
                </strong>
              </span>
              <ul>
                <li style={{ color: DarkMood === false ? "#000" : "" }}>
                  Interface directly and intuitively with a large audience to
                  see the materialization of your imagination and the
                  imagination of others.
                </li>
                <li style={{ color: DarkMood === false ? "#000" : "" }}>
                  Earn income and define your own workday. If you have skills
                  and haven’t managed to find a fulfilling way to utilize them
                  or if you’re tired of the inane and monotonous work being
                  given to you by your current manager, you may very well find a
                  project you believe in to showcase your skills and gain
                  experience with.
                </li>
                <li style={{ color: DarkMood === false ? "#000" : "" }}>
                  Many NFT communities turn into waiting around for something to
                  be announced. Now you don’t have to wait for anything. “Be the
                  change you wish to see in the world.”
                </li>
              </ul>
              <span>
                <strong style={{ color: DarkMood === false ? "#000" : "" }}>
                  NFT Utility
                </strong>
              </span>
              <ul>
                <li style={{ color: DarkMood === false ? "#000" : "" }}>
                  Owning a Behind The Curtain NFT imbues its containing wallet
                  with the capacity to engage in all the innerworkings of the
                  DAO as well as have the right to vote.
                </li>
                <li style={{ color: DarkMood === false ? "#000" : "" }}>
                  Get a visual callout on your profile image on the DAO platform
                  for owning an NFT.
                </li>
              </ul>
              <h4 id="sovereignAcademy" ref={sovereignAcademyRef} style={{ color: DarkMood === false ? "#000" : "" }}>
                Sovereign Academy
              </h4>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                The Sovereign Academy will be an online, educational platform
                that will attempt to change some of the rules around how virtual
                courses and curriculums work. In order for our design to stay
                relevant, we've decided to save sharing details on how the
                platform operates for a future time.
              </p>
              <span>
                <strong style={{ color: DarkMood === false ? "#000" : "" }}>
                  Value
                </strong>
              </span>
              <ul>
                <li style={{ color: DarkMood === false ? "#000" : "" }}>
                  Education
                </li>
                <p style={{ color: DarkMood === false ? "#000" : "" }}>
                  Unequivocally the most value you can extract from the academy
                  will be the skills and knowledge you acquire.
                </p>
                <ul>
                  <li style={{ color: DarkMood === false ? "#000" : "" }}>
                    Gain proficiency in the internet’s most cutting-edge
                    technologies.
                  </li>
                  <li style={{ color: DarkMood === false ? "#000" : "" }}>
                    Rank up your invisible, real-world attribute points.
                  </li>
                </ul>
              </ul>
              <ul>
                <li style={{ color: DarkMood === false ? "#000" : "" }} >
                  Student Network
                </li>
                <p style={{ color: DarkMood === false ? "#000" : "" }}>
                  Given the relative newness of blockchain development, initial
                  access to the academy and its interface will automatically
                  integrate you into a network of developers from a wide range
                  of backgrounds. Individuals that have been programming for
                  decades are showing curiosity in blockchain, and others still
                  new to programmatic thinking are also diving in. Regardless of
                  where you fall amidst the spectrum of experience, chances are
                  you’ll find others much like yourself. And, as the curriculum
                  of offered courses expands, you may find an opportunity for
                  you to be the instructor.
                </p>
                <ul>
                  <li style={{ color: DarkMood === false ? "#000" : "" }}>
                    Communicate with other students, build relationships, and
                    facilitate partnerships.
                  </li>
                  <li style={{ color: DarkMood === false ? "#000" : "" }}>
                    Direct access to instructors, allowing you to easily get
                    professional help and feedback.
                  </li>
                  <li style={{ color: DarkMood === false ? "#000" : "" }}>
                    Garner career and portfolio crafting advice from people with
                    first-hand experience building software and leading
                    companies.
                  </li>
                </ul>
              </ul>
              <span>
                <strong style={{ color: DarkMood === false ? "#000" : "" }}>
                  NFT Utility
                </strong>
              </span>
              <ul>
                <li style={{ color: DarkMood === false ? "#000" : "" }}>
                  Free access to one course from the academy.{" "}
                </li>
                <li style={{ color: DarkMood === false ? "#000" : "" }}>
                  Discounted access to future courses.
                </li>
                <li style={{ color: DarkMood === false ? "#000" : "" }}>
                  Learn to Earn - earn Sovereign tokens by completing courses
                  and programs offered by the academy.
                </li>
                <li style={{ color: DarkMood === false ? "#000" : "" }}>
                  NFT Pass
                </li>
                <ul>
                  <li style={{ color: DarkMood === false ? "#000" : "" }}>
                    Entry to live events.
                  </li>
                  <li style={{ color: DarkMood === false ? "#000" : "" }}>
                    Priority access to physical goods.
                  </li>
                  <li style={{ color: DarkMood === false ? "#000" : "" }}>
                    We will continue to explore interesting ways to infuse value
                    into the NFTs.
                  </li>
                </ul>
              </ul>
              <h4 id="sovereignGrant" ref={sovereignGrantRef} style={{ color: DarkMood === false ? "#000" : "" }}>
                Sovereign Grant
              </h4>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                Once per year, students of the Sovereign Academy will have the
                opportunity to pitch a project to the entire Sovereign
                community. The voting mechanisms under construction will allow
                for Sovereign members to decide which project to kickstart with
                the grant.
              </p>
              <ul>
                <li style={{ color: DarkMood === false ? "#000" : "" }}>
                  Being part of the academy will make receiving this grant a
                  possibility for you.
                </li>
                <li style={{ color: DarkMood === false ? "#000" : "" }}>
                  You will have a say in kickstarting a project you believe in
                  with funds from the grant.
                </li>
                <li style={{ color: DarkMood === false ? "#000" : "" }}>
                  The grant will be available to any Sovereign Academy student
                  or team to pitch a product or service that fits within the
                  purview of the academy’s offered courses and subject matter.
                  Provided we will be starting with blockchain development, it
                  will be expected that pitched projects fall under this
                  category.
                </li>
                <li style={{ color: DarkMood === false ? "#000" : "" }}>
                  It is our aim for any blockchain-centric grants to fund
                  applications that push the boundaries of blockchain
                  applications. NFT collection projects or simple coin and
                  tokens will NOT be eligible.
                </li>
              </ul>
              <h4
                id="decentralizedSocialPlatform"
                ref={decentralizedSocialPlatformRef}
                style={{ color: DarkMood === false ? "#000" : "" }}
              >
                Decentralized Social Platform
              </h4>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                Much of the functionality we’re building for the DAO is being
                done in a way to make it extensible, allowing it expand and
                catalyze a variety of blockchain-enabled social interaction. By
                immediately building off of Sovereign’s functionality, it will
                foster the development and growth of a diverse set of
                blockchain-based products and services whose reach and influence
                will extend beyond Sovereign itself.
              </p>
              <h4
                id="decentralizedNewsNetwork"
                ref={decentralizedNewsNetworkRef}
                style={{ color: DarkMood === false ? "#000" : "" }}
              >
                Decentralized News Network
              </h4>
              <p style={{ color: DarkMood === false ? "#000" : "" }}>
                Also built on top of the Sovereign’s systems will be a way to
                reward both breaking and accurate recounts of what’s happening
                around the world. With the amount of misinformation poisoning
                our communication channels, it is paramount to ensure articles
                written for the platform are factual. Mechanisms will be put in
                placed to support the validity of content as well as reward both
                those who create the content and those who verify its
                authenticity
              </p>
              <div
                className="manifesto_content_sec"
                id="conclusion"
                ref={conclusionRef}
              >
                <h3 style={{ color: DarkMood === false ? "#000" : "" }}>
                  Conclusion
                </h3>
                <p style={{ color: DarkMood === false ? "#000" : "" }}>
                  Our society is poised precariously on the precipice of its
                  digital future, and we have a choice: we can either let the
                  corporations that have productized and hypnotized us with
                  their capitalist algorithms continue to define the web we live
                  in and the rules we play by or we can collectively come
                  together and shape the internet to be more than just another
                  marketplace, more than something that relegates our value to a
                  follower count. We have the capacity to architect systems that
                  bring real value to our online and offline existences, ones
                  that don’t leave us feeling ashamed about who we are or who we
                  aren’t - one’s that don’t make us feel as if we need to
                  capitalize on every moment of our human lives to be happy.
                  You’re more than a number in a machine. Thanks for taking the
                  time to read this manifesto. We hope you feel as capable of
                  making a difference as we do, and we hope to do it with you.
                  Even an avalanche can begin with a single pebble; come be a
                  pebble alongside us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Drop-down menu */}

      <ul
        ref={menuRef}
        id="drop-down-menu-11"
        onClick={() => {
          // if ( dropdownDisplay === 'hide-content' ) {
          //   setdropdownDisplay('show-content' );
          // }
          // else if ( dropdownDisplay === 'show-content' ) {
          //   setdropdownDisplay( 'hide-content' );
          // }
          setisOpen(!isOpen);
        }}
        className="dropdown"
      >
        <li className="selected-option">
          {mainheading}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="dropdown-icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
          <ul
            className={`${isOpen === true ? "show-content" : "hide-content"}`}
          >
            <li
              onClick={() => {
                scrollTo(forewordRef.current);
                setmainheading("Foreword");
                setisOpen(false);
              }}
            >
              Foreword
            </li>
            <li
              onClick={() => {
                scrollTo(theVisionRef.current);
                setmainheading("The Vision");
                setdropdownDisplay("hide-content");
              }}
            >
              The Vision
            </li>
            <li>
              Behind The Curtain - The Art
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="dropdown-icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
              <ul>
                <li
                  onClick={() => {
                    scrollTo(noStoryJustRealityRef.current);
                    setmainheading("No Story, Just Reality");
                    setdropdownDisplay("hide-content");
                  }}
                >
                  No Story, Just Reality
                </li>
                <li
                  onClick={() => {
                    scrollTo(designRarityRef.current);
                    setmainheading("Design and Rarity");
                    setdropdownDisplay("hide-content");
                  }}
                >
                  Design and Rarity
                </li>
                <li
                  onClick={() => {
                    scrollTo(BTCNFTLicenseRef.current);
                    setmainheading("Behind The Curtain NFT License");
                    setdropdownDisplay("hide-content");
                  }}
                >
                  Behind The Curtain NFT License
                </li>
              </ul>
            </li>
            <li>
              Sovereign
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="dropdown-icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
              <ul>
                <li
                  onClick={() => {
                    scrollTo(theDAORef.current);
                    setmainheading("The DAO");
                    setdropdownDisplay("hide-content");
                  }}
                >
                  The DAO
                </li>
                <li
                  onClick={() => {
                    scrollTo(DAOPlatformInterfaceRef.current);
                    setmainheading("DAO Platform and Interface");
                    setdropdownDisplay("hide-content");
                  }}
                >
                  DAO Platform and Interface
                </li>
                <li
                  onClick={() => {
                    scrollTo(ideasRef.current);
                    setmainheading("Ideas");
                    setdropdownDisplay("hide-content");
                  }}
                >
                  Ideas
                </li>
                <li
                  onClick={() => {
                    scrollTo(proposalsRef.current);
                    setmainheading("Proposals");
                    setdropdownDisplay("hide-content");
                  }}
                >
                  Proposals
                </li>
                <li
                  onClick={() => {
                    scrollTo(governanceScheduleRef.current);
                    setmainheading("Governance Schedule");
                    setdropdownDisplay("hide-content");
                  }}
                >
                  Governance Schedule
                </li>
                <li
                  onClick={() => {
                    scrollTo(DAOModerationRef.current);
                    setmainheading("DAO Moderation");
                    setdropdownDisplay("hide-content");
                  }}
                >
                  DAO Moderation
                </li>
                <li
                  onClick={() => {
                    scrollTo(discussionRef.current);
                    setmainheading("Discussion");
                    setdropdownDisplay("hide-content");
                  }}
                >
                  Discussion
                </li>
                <li
                  onClick={() => {
                    scrollTo(votingRef.current);
                    setmainheading("Voting");
                    setdropdownDisplay("hide-content");
                  }}
                >
                  Voting
                </li>
                <li
                  onClick={() => {
                    scrollTo(executiveActionRef.current);
                    setmainheading("Executive Action");
                    setdropdownDisplay("hide-content");
                  }}
                >
                  Executive Action
                </li>
              </ul>
            </li>
            <li>
              Ecosystem and Utility
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="dropdown-icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
              <ul>
                <li
                  onClick={() => {
                    scrollTo(sovereignDAORef.current);
                    setmainheading("Sovereign DAO");
                    setdropdownDisplay("hide-content");
                  }}
                >
                  Sovereign DAO
                </li>
                <li
                  onClick={() => {
                    scrollTo(sovereignAcademyRef.current);
                    setmainheading("Sovereign Academy");
                    setdropdownDisplay("hide-content");
                  }}
                >
                  Sovereign Academy
                </li>
                <li
                  onClick={() => {
                    scrollTo(sovereignGrantRef.current);
                    setmainheading("Sovereign Grant");
                    setdropdownDisplay("hide-content");
                  }}
                >
                  Sovereign Grant
                </li>
                <li
                  onClick={() => {
                    scrollTo(decentralizedSocialPlatformRef.current);
                    setmainheading("Decentralized Social Platform");
                    setdropdownDisplay("hide-content");
                  }}
                >
                  Decentralized Social Platform
                </li>
                <li
                  onClick={() => {
                    scrollTo(decentralizedNewsNetworkRef.current);
                    setmainheading("Decentralized News Network");
                    setdropdownDisplay("hide-content");
                  }}
                >
                  Decentralized News Network
                </li>
              </ul>
            </li>
            <li
              onClick={() => {
                scrollTo(conclusionRef.current);
                setmainheading("Conclusion");
                setdropdownDisplay("hide-content");
              }}
            >
              Conclusion
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Manifesto;
