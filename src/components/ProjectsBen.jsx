import Heading from "./Heading";
import Section from "./Section";
import { benefits } from "../constants";

const ProjectsBen = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Curiosity is the biggest inspiration."
        />
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
              //ya burada bir sorun var anlamadım
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ProjectsBen;
