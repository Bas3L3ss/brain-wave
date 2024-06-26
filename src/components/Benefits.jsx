import Heading from "./Heading";
import Section from "./design/Section";
import { benefits } from "../constants";

const Benefits = () => {
  return (
    <Section id="feature">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md  lg:max-w-xl"
          title="Char Smarter, Not Harder With Brain Wave"
        />
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] "
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="z-2 relative flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h2 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3 ">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
