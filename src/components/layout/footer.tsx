import { Container } from "@/components/layout/container";
import { Button } from "../ui/button";
import { DOCS_URL } from "@/constants/urls";

export const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-base-300/50 py-6 text-sm">
        <a href={DOCS_URL} className="shrink-0 md:flex-1" target="_blank" rel="noreferrer">
          <p>TalentLayer Labs OU, 2023</p>
        </a>
        <a href="https://docs.talentlayer.org/quick-start-integration-guide" className="flex items-center justify-end md:flex-1" target="_blank" rel="noreferrer">
          <Button color="neutral"
                variant="outline"
                className="whitespace-nowrap"
                size="lg"
                block>
            ☎️  Contact Us
          </Button>
        </a>
        </div>
      </Container>
    </footer>
  );
};
