import { Container } from "./layout/container";
import { Button } from "./ui/button";

export const NewsletterSection = () => {
  return (
    <section className="bg-base-content py-24 text-center text-base-100 relative">
      <Container className="flex flex-col items-center gap-10">
      <div className="flex flex-col gap-10 order-2">
        <h3 className="text-5xl font-bold">📰 TalentLayer in the news</h3>
        <p className="max-w-[40rem] text-xl text-base-100/80 sm:max-w-[40rem]">
        what have we been up to this month? read our latest newsletter.
        </p>
        <a href="https://medium.com/talentlayer" target="_blank" rel="noreferrer">
          <Button className="whitespace-nowrap" size="lg" block>
            read the newsletter
          </Button>
        </a>
      </div>
      </Container>
    </section>
  );
};
