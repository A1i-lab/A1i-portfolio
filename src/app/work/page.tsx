import { work } from "@/resources/content";
import { Heading, Text, Column, Card, Button } from "@once-ui-system/core";

export default function WorkPage() {
  return (
    <Column gap="xl">
      <Heading variant="display-strong-l">{work.title}</Heading>
      <Text variant="body-default-m">{work.description}</Text>

      {work.experiences.map((project, index) => (
        <Card key={index} padding="l">
          <Heading variant="heading-strong-m">{project.role}</Heading>
          <Text variant="body-default-s">{project.timeframe}</Text>

          <ul>
            {project.achievements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          {project.links?.map((link, i) => (
            <Button key={i} href={link.href} variant="primary">
              {link.label}
            </Button>
          ))}
        </Card>
      ))}
    </Column>
  );
}
