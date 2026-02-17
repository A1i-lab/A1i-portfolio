import {
  Avatar,
  Button,
  Column,
  Heading,
  IconButton,
  Row,
  Tag,
  Text,
  Meta,
  Schema,
} from "@once-ui-system/core";
import { baseURL, home, person, social, about } from "@/resources";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(home.title)}`,
    path: home.path,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" fillWidth>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={home.title}
        description={home.description}
        path={home.path}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* ========================================= */}
      {/* SECTION 1 : HERO                          */}
      {/* ========================================= */}
      <Column
        fillWidth
        horizontal="center"
        paddingY="104"
        gap="24"
      >
        <Avatar src={person.avatar} size="xl" />

        <Column horizontal="center" gap="8">
          <Heading as="h1" variant="display-strong-l" align="center">
            {person.name}
          </Heading>
          <Text
            variant="heading-default-l"
            onBackground="neutral-weak"
            align="center"
          >
            {person.role}
          </Text>
        </Column>

        <Column horizontal="center" maxWidth="s">
          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            align="center"
          >
            Je transforme les données en décisions stratégiques. Data Science,
            Machine Learning et Économétrie appliquée.
          </Text>
        </Column>

        {social.length > 0 && (
          <Row gap="8" wrap horizontal="center" paddingTop="8">
            {social.map(
              (item) =>
                item.link && (
                  <IconButton
                    key={item.name}
                    href={item.link}
                    icon={item.icon}
                    variant="ghost"
                    size="s"
                    tooltip={item.name}
                  />
                )
            )}
          </Row>
        )}

     <Row gap="12" wrap horizontal="center" paddingTop="16">
  <Button href="/about" variant="primary">
    Mon parcours
  </Button>
  <Button href="/work" variant="secondary" suffixIcon="arrowRight">
    Voir mes projets
  </Button>
  <Button
    href="mailto:ali.abdelhamid@etud.univ-angers.fr"
    variant="tertiary"
  >
    Me contacter
  </Button>
</Row>

      </Column>

      {/* ========================================= */}
      {/* SECTION 2 : CE QUE JE FAIS               */}
      {/* ========================================= */}
      <Column fillWidth paddingY="64" gap="40">
        <Heading as="h2" variant="display-strong-s" align="center">
          Ce que je fais
        </Heading>

        <Row fillWidth gap="24" wrap horizontal="center">
          <Column
            padding="24"
            radius="l"
            border="neutral-medium"
            background="surface"
            gap="12"
            minWidth={260}
            style={{ flex: "1 1 260px" }}
          >
            <Text variant="heading-strong-m">Data Analysis</Text>
            <Text variant="body-default-s" onBackground="neutral-weak">
              Exploration, nettoyage et visualisation de données avec Python, R
              et Streamlit.
            </Text>
          </Column>

          <Column
            padding="24"
            radius="l"
            border="neutral-medium"
            background="surface"
            gap="12"
            minWidth={260}
            style={{ flex: "1 1 260px" }}
          >
            <Text variant="heading-strong-m">Machine Learning</Text>
            <Text variant="body-default-s" onBackground="neutral-weak">
              Modèles prédictifs (XGBoost, SVM, LSTM), NLP, pipelines ML et
              déploiement.
            </Text>
          </Column>

          <Column
            padding="24"
            radius="l"
            border="neutral-medium"
            background="surface"
            gap="12"
            minWidth={260}
            style={{ flex: "1 1 260px" }}
          >
            <Text variant="heading-strong-m">Économétrie</Text>
            <Text variant="body-default-s" onBackground="neutral-weak">
              Panel data, séries temporelles, ARIMA, tests statistiques avec R
              et Stata.
            </Text>
          </Column>

          <Column
            padding="24"
            radius="l"
            border="neutral-medium"
            background="surface"
            gap="12"
            minWidth={260}
            style={{ flex: "1 1 260px" }}
          >
            <Text variant="heading-strong-m">Déploiement Web</Text>
            <Text variant="body-default-s" onBackground="neutral-weak">
              Streamlit, Gradio, Hugging Face Spaces, GitHub Pages, APIs
              FastAPI.
            </Text>
          </Column>
        </Row>
      </Column>

      {/* ========================================= */}
      {/* SECTION 3 : STAGE (AVANT les projets)     */}
      {/* ========================================= */}
      <Column
        fillWidth
        paddingY="64"
        gap="24"
        horizontal="center"
      >
        <Tag size="l">Disponible dès avril 2026</Tag>
        <Heading as="h2" variant="display-strong-s" align="center">
          En recherche de stage de fin d'études
        </Heading>
        <Column horizontal="center" maxWidth="s" gap="16">
          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            align="center"
          >
            Actuellement en Master 2 Ingénierie des Données et Évaluations
            Économétriques à l'Université d'Angers, je recherche un stage de 4
            à 6 mois à partir d'avril 2026.
          </Text>
          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            align="center"
          >
            Je souhaite mettre en pratique mes compétences en Data Science,
            Machine Learning et Économétrie au sein d'une équipe data. Curieux,
            rigoureux et autonome, je suis à l'aise aussi bien sur la
            modélisation que sur le déploiement de solutions.
          </Text>
          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            align="center"
          >
            Ouvert à tous les secteurs d'activité — finance, santé, conseil,
            industrie, tech — en France comme à l'international.
          </Text>
        </Column>
        <Row gap="12" wrap horizontal="center" paddingTop="16">
          <Button
            href="mailto:ali.abdelhamid@etud.univ-angers.fr"
            variant="primary"
          >
            Me contacter
          </Button>
          <Button
            href="/cv-ali-abdelhamid.pdf"
            variant="secondary"
            suffixIcon="arrowRight"
          >
            Télécharger mon CV
          </Button>
          <Button href="/about" variant="tertiary" suffixIcon="arrowRight">
            Mon parcours complet
          </Button>
        </Row>
      </Column>

      {/* ========================================= */}
      {/* SECTION 4 : PROJETS PHARES (les 2 vrais)  */}
      {/* ========================================= */}
      <Column fillWidth paddingY="64" gap="40">
        <Heading as="h2" variant="display-strong-s" align="center">
          Projets phares
        </Heading>

        <Row fillWidth gap="24" wrap horizontal="center">
          {/* PROJET 1 : Dette publique */}
          <Column
            padding="24"
            radius="l"
            border="neutral-medium"
            background="surface"
            gap="12"
            minWidth={300}
            style={{ flex: "1 1 300px" }}
          >
            <Tag size="l">Machine Learning / Streamlit</Tag>
            <Text variant="heading-strong-m">
              Analyse et prédiction de la dette publique — OCDE
            </Text>
            <Text variant="body-default-s" onBackground="neutral-weak">
              Modèle prédictif de la dette publique pour les pays de l'OCDE.
              Collecte de données, feature engineering, entraînement de
              plusieurs algorithmes (Random Forest, XGBoost, Ridge), sélection
              du meilleur modèle et déploiement d'un dashboard interactif sur
              Hugging Face Spaces.
            </Text>
            <Row gap="8" wrap>
              <Button
                href="https://huggingface.co/spaces/A1i-lab/analyse-dette-ocde"
                variant="tertiary"
                size="s"
                suffixIcon="arrowRight"
              >
                Voir le dashboard
              </Button>
              
            </Row>
          </Column>

          {/* PROJET 2 : Maladie cardiovasculaire */}
          <Column
            padding="24"
            radius="l"
            border="neutral-medium"
            background="surface"
            gap="12"
            minWidth={300}
            style={{ flex: "1 1 300px" }}
          >
            <Tag size="l">Machine Learning / Santé</Tag>
            <Text variant="heading-strong-m">
              Prédiction de maladies cardiovasculaires
            </Text>
            <Text variant="body-default-s" onBackground="neutral-weak">
              Classification binaire pour prédire le risque de maladie
              cardiovasculaire à partir de données cliniques. Comparaison de
              plusieurs modèles (Logistic Regression, Random Forest, SVM,
              XGBoost), optimisation des hyperparamètres et déploiement d'une
              interface de prédiction interactive sur Hugging Face Spaces.
            </Text>
            <Row gap="8" wrap>
              <Button
                href="https://huggingface.co/spaces/A1i-lab/HeartDisease"
                variant="tertiary"
                size="s"
                suffixIcon="arrowRight"
              >
                Voir l'application
              </Button>
              
            </Row>
          </Column>
        </Row>

        <Row horizontal="center">
          <Button href="/work" variant="secondary" suffixIcon="arrowRight">
            Voir tous mes projets
          </Button>
        </Row>
      </Column>
    </Column>
  );
}
