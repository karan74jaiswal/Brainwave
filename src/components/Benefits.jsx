import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
function Benefits() {
  return (
    <Section id="features" className="" customPaddings="">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder &nbsp;with&nbsp;Brainwave"
        />
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((benefit) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${benefit.backgroundUrl})`,
              }}
              key={benefit.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p=[2.4rem] pointer-events-none">
                <h5 className="h2 mb-5">{benefit.title}</h5>
                <p className="body-2 mb-6 text-n-3">{benefit.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={benefit.iconUrl}
                    alt={benefit.title}
                    width={48}
                    height={48}
                  />
                  <p>Explore more</p>
                  <Arrow />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Benefits;
