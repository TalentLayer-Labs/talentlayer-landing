import { Container } from "./layout/container";

export const BuilderPlaceSection = () => {
  return (
    <section className="relative bg-base-content py-16 sm:py-24 text-center text-base-100">
      <Container className="flex flex-col items-center gap-10">
        <div className="order-2 flex flex-col gap-10">
          <h3 className="text-5xl font-bold">
            Our open<span className="text-primary"> gigs</span>
          </h3>
          <p className="text-xl text-base-100/80">want to help?</p>
          <iframe
            src="https://talentlayer.builder.place/embed/work"
            width="800"
            height="600"
            className="max-w-full"
          ></iframe>
        </div>
      </Container>
    </section>
  );
};
