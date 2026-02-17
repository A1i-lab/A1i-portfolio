import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text, Flex, Button, Column, Heading, Badge } from "@once-ui-system/core";

const person: Person = {
    firstName: "Ali",
    lastName: "Abdelhamid",
    name: `Ali Abdelhamid`,
    role: "Data Scientist | ML Engineer | Économètre",
    avatar: "/images/aliphoto1.jpeg",
    email: "ali.abdelhamid@etud.univ-angers.fr",
    location: "Europe/Paris",
    languages: ["Français", "English", "Español", "العربية"],
};

const newsletter: Newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>My weekly newsletter about data and AI</>,
};

const social: Social = [
    {
        name: "GitHub",
        icon: "github",
        link: "https://github.com/A1i-lab",
        essential: true,
    },
    {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/in/ali-abdelhamid-833a8a2b9/",
        essential: true,
    },
    {
        name: "Hugging Face",
        icon: "globe",
        link: "https://huggingface.co/A1i-lab",
        essential: true,
    },
    {
        name: "Email",
        icon: "email",
        link: `mailto:${person.email}`,
        essential: true,
    },
];

const home: Home = {
    path: "/",
    image: "/images/og/home.jpg",
    label: "Accueil",
    title: `${person.name} — Data Scientist & ML Engineer`,
    description: `Portfolio professionnel de ${person.name} — Spécialiste en Data Science, Machine Learning et Économétrie appliquée`,

    headline: <>Data Scientist</>,

    subline: (
        <>
            De l'extraction API à la production, je conçois des{" "}
            <Text as="span" weight="strong" onBackground="brand-strong">
                pipelines end-to-end
            </Text>{" "}
            qui transforment la donnée brute en insights stratégiques exploitables.
        </>
    ),

    featured: {
        display: true,
        title: "Projets phares",
        href: "/work",
    },
};

const about: About = {
    path: "/about",
    label: "À propos",
    title: `À propos — ${person.name}`,
    description: `Parcours de ${person.name} : du Soudan à la Data Science, un voyage marqué par la détermination et l'autonomie`,
    tableOfContent: {
        display: true,
        subItems: false,
    },
    avatar: {
        display: true,
    },
    calendar: {
        display: false,
        link: "https://cal.com",
    },
    intro: {
        display: true,
        title: "Mon parcours",
        description: (
            <>
                <Text as="p" variant="body-default-m" marginBottom="16" style={{ lineHeight: '1.7' }}>
                    Je suis arrivé en France en 2011, à l'âge de neuf ans, avec mes parents, fuyant la guerre au Soudan. Ce nouveau départ à Saumur a marqué le début d'un parcours fondé sur l'adaptation et la détermination. Très vite, j'ai appris la langue, trouvé ma place à l'école et découvert, à travers le football, l'importance de l'esprit d'équipe, de la discipline et de la responsabilité.
                </Text>

                <Text as="p" variant="body-default-m" marginBottom="16" style={{ lineHeight: '1.7' }}>
                    Adolescent, j'ai commencé à travailler en parallèle de mes études : agriculture, manutention, préparation de commandes, industrie. Ces expériences m'ont appris la rigueur, la gestion de la pression et le sens de l'effort. Elles ont surtout construit une éthique de travail solide, que j'applique aujourd'hui dans mes projets data.
                </Text>

                <Text as="p" variant="body-default-m" marginBottom="16" style={{ lineHeight: '1.7' }}>
                    En Licence d'Économie Appliquée puis en Master d'Ingénierie des Données et Évaluations Économétriques à l'Université d'Angers, j'ai découvert la puissance des modèles pour comprendre les systèmes complexes. Économétrie, Machine Learning, visualisation, déploiement d'applications : j'ai progressivement orienté mon parcours vers la data science, avec une approche à la fois analytique et opérationnelle.
                </Text>

                <Text as="p" variant="body-default-m" marginBottom="16" style={{ lineHeight: '1.7' }}>
                    Aujourd'hui, je conçois des dashboards interactifs, développe des modèles économétriques et des pipelines ML, et déploie des applications sur le web. Ce qui m'anime n'est pas seulement de produire des analyses, mais de transformer les données en outils décisionnels clairs et utiles.
                </Text>

                <Text as="p" variant="body-default-m" marginBottom="24" style={{ lineHeight: '1.7' }}>
                    Mon parcours m'a appris une chose essentielle : derrière chaque difficulté se cache une structure à comprendre. Et derrière chaque donnée, une histoire à révéler.
                </Text>

                <Flex gap="12" wrap marginTop="32">
                    <Button href="/work" variant="primary" suffixIcon="arrowRight">
                        Voir mes projets
                    </Button>
                    <Button href="/cv-ali-abdelhamid.pdf" variant="secondary" suffixIcon="download">
                        Télécharger mon CV
                    </Button>
                    <Button href="mailto:ali.abdelhamid@etud.univ-angers.fr" variant="tertiary" suffixIcon="email">
                        Me contacter
                    </Button>
                </Flex>
            </>
        ),
    },
    work: {
        display: true,
        title: "Expérience Professionnelle",
        experiences: [
            {
                company: "Kuehne+Nagel / Synchro",
                timeframe: "2022 – 2026",
                role: "Préparateur de commandes (Intérim, job étudiant)",
                achievements: [
                    <>Gestion de flux logistiques sous contrainte de temps (préparation 200+ commandes/jour)</>,
                    <>Résolution d'anomalies opérationnelles en temps réel (gestion stocks, erreurs de picking)</>,
                    <>Missions diverses : manutention, conditionnement, inventaires pour clients industriels</>,
                ],
                images: [],
            },
            {
                company: "Missions diverses (Intérim)",
                timeframe: "2020 – 2022",
                role: "Emplois étudiants — Financement autonome des études",
                achievements: [
                    <>Déchèterie d'Angers — Gestion et tri des flux de déchets, accueil public</>,
                    <>Médicom — Fabrication de masques d'hygiène (période COVID-19), chaîne de production</>,
                    <>Cueilleur de melons à Épieds (49) — Premier emploi à 17 ans, travail saisonnier agricole</>,
                ],
                images: [],
            },
        ],
    },
    studies: {
        display: true,
        title: "Formation",
        institutions: [
            {
                name: "Université d'Angers — Master 2 IDEE",
                description: (
                    <>
                        <Text weight="strong">Master Ingénierie des Données et Évaluations Économétriques</Text> (2024-2026)
                        <br />Machine Learning, Deep Learning, Data Mining, SQL avancé, Big Data (Spark),
                        Économétrie avancée (panel data, séries temporelles), Python, R, Git/GitHub.
                        <br /><Text as="span" onBackground="brand-medium" weight="medium">
                            Stage de fin d'études : 6 mois dès avril 2026
                        </Text>
                    </>
                ),
            },
            {
                name: "Université d'Angers — Licence Économie Appliquée",
                description: (
                    <>
                        Licence Économie Appliquée (2021-2024)
                        <br />Microéconomie, macroéconomie, statistiques, économétrie,
                        mathématiques appliquées, informatique (initiation Python/R).
                    </>
                ),
            },
            {
                name: "Lycée Duplessis-Mornay — Saumur",
                description: (
                    <>
                        Baccalauréat général (2021)
                        <br />Spécialités : Mathématiques, Sciences Économiques et Sociales (SES).
                    </>
                ),
            },
        ],
    },
    technical: {
        display: true,
        title: "Compétences Techniques",
        skills: [
            {
                title: "Data Science & Machine Learning",
                description: (
                    <>
                        <Flex gap="8" wrap marginBottom="12">
                            <Badge>Python (Scikit-learn, Pandas, NumPy)</Badge>
                            <Badge>Machine Learning (RF, XGBoost, SVM)</Badge>
                            <Badge>Deep Learning (TensorFlow, Keras)</Badge>
                            <Badge>NLP (spaCy, Transformers, LDA)</Badge>
                            <Badge>Feature Engineering</Badge>
                            <Badge>Validation croisée / Tuning</Badge>
                        </Flex>
                        <Text variant="body-default-s" onBackground="neutral-weak">
                            Pipelines ML complets : extraction, nettoyage, modélisation, évaluation,
                            déploiement. Expérience sur datasets réels (1000+ à 70000+ observations).
                        </Text>
                    </>
                ),
                images: [],
            },
            {
                title: "Économétrie & Statistiques",
                description: (
                    <>
                        <Flex gap="8" wrap marginBottom="12">
                            <Badge>R (tidyverse, plm, forecast)</Badge>
                            <Badge>Séries temporelles (ARIMA, VAR)</Badge>
                            <Badge>Données de panel (Fixed/Random Effects)</Badge>
                            <Badge>Tests statistiques (ADF, Hausman, Breusch-Pagan)</Badge>
                            <Badge>Économétrie spatiale</Badge>
                            <Badge>Modèles à équations simultanées</Badge>
                        </Flex>
                        <Text variant="body-default-s" onBackground="neutral-weak">
                            Modélisation économétrique rigoureuse avec tests de robustesse,
                            diagnostic des résidus et interprétation économique des résultats.
                        </Text>
                    </>
                ),
                images: [],
            },
            {
                title: "Data Engineering & Visualisation",
                description: (
                    <>
                        <Flex gap="8" wrap marginBottom="12">
                            <Badge>SQL (PostgreSQL, requêtes complexes)</Badge>
                            <Badge>APIs REST (OCDE, FMI, Banque Mondiale)</Badge>
                            <Badge>Web Scraping (BeautifulSoup, Selenium)</Badge>
                            <Badge>Gradio / Streamlit (dashboards)</Badge>
                            <Badge>Matplotlib / Seaborn / Plotly</Badge>
                            <Badge>Hugging Face Spaces (déploiement)</Badge>
                        </Flex>
                        <Text variant="body-default-s" onBackground="neutral-weak">
                            Extraction multi-sources, pipelines ETL, dashboards interactifs
                            déployés en production. Expérience API SDMX et formats données internationaux.
                        </Text>
                    </>
                ),
                images: [],
            },
            {
                title: "Outils & Environnement",
                description: (
                    <>
                        <Flex gap="8" wrap marginBottom="12">
                            <Badge>Git/GitHub (CI/CD)</Badge>
                            <Badge>LaTeX (Overleaf)</Badge>
                            <Badge>Notion (gestion projet)</Badge>
                            <Badge>Slack/Discord</Badge>
                        </Flex>
                        <Text variant="body-default-s" onBackground="neutral-weak">
                            Environnement de développement moderne, versionning Git, déploiement cloud,
                            documentation technique en LaTeX.
                        </Text>
                    </>
                ),
                images: [],
            },
            {
                title: "Langues",
                description: (
                    <>
                        <Flex gap="8" wrap>
                            <Badge>Français (C2, bilingue)</Badge>
                            <Badge>Anglais (C1, technique)</Badge>
                            <Badge>Espagnol (A2)</Badge>
                            <Badge>Arabe (langue maternelle)</Badge>
                        </Flex>
                    </>
                ),
                images: [],
            },
        ],
    },
};

const blog: Blog = {
    path: "/blog",
    label: "Blog",
    title: "Articles & Insights Data Science",
    description: `Analyses techniques et réflexions sur la Data par ${person.name}`,
};

const work: Work = {
    path: "/work",
    label: "Projets",
    title: `Projets Data Science & ML — ${person.name}`,
    description: `Portfolio de projets end-to-end : extraction API, modélisation ML, déploiement production`,
    experiences: [
        {
            company: "Machine Learning & Économie Publique",
            timeframe: "Décembre 2024 – Janvier 2025",
            role: "Dashboard Dette Publique OCDE — Pipeline End-to-End",
            achievements: [
                <>Extraction et harmonisation de <strong>1330+ observations</strong> via API multi-sources (OCDE SDMX, FMI WEO, Banque Mondiale)</>,
                <>Modèle <strong>Random Forest optimisé (R²=0.91, MAE=4.2 points)</strong> pour prédire l'évolution Dette/PIB de 38 pays</>,
                <>Dashboard interactif <strong>6 modules</strong> déployé sur Hugging Face Spaces : stats descriptives, comparaisons pays, corrélations, ML, simulations</>,
                <>Feature engineering : création de 14 variables explicatives (croissance, chômage, inflation, solde budgétaire, démographie...)</>,
                <>Analyse d'impact crises : COVID-19 (+15 points dette moyenne OCDE), crise 2008 (+20 points zone euro)</>,
                <>Simulation de scénarios économiques : projection dette sous hypothèses de chocs (récession, inflation, plans de relance)</>,
            ],
            images: [
                {
                    src: "/images/projects/dette-publique/dette-publique-1.png",
                    alt: "Dashboard OCDE - Module Statistiques Descriptives et Comparaisons Pays",
                    width: 16,
                    height: 9,
                },
                {
                    src: "/images/projects/dette-publique/dette-publique-2.png",
                    alt: "Modèle ML Random Forest - Feature Importance et Prédictions Dette/PIB",
                    width: 16,
                    height: 9,
                },
            ],
            links: [
                {
                    label: "Demo Live",
                    href: "https://huggingface.co/spaces/A1i-lab/dette-publique-ocde",
                },
        
            ],
        },
        {
            company: "NLP & Analyse du Marché de l'Emploi",
            timeframe: "Janvier 2025 – Mars 2025",
            role: "Analyse NLP du Marché Data en France — Web Scraping & Topic Modeling",
            achievements: [
                <>Scraping de <strong>1 000+ offres d'emploi</strong> Data via BeautifulSoup/Selenium sur plusieurs plateformes (Indeed, Welcome to the Jungle)</>,
                <>Pipeline NLP complet : tokenisation, lemmatisation (spaCy français), suppression stopwords, TF-IDF vectorization</>,
                <>Topic Modeling LDA identifiant <strong>8 clusters thématiques</strong> du marché Data français (ML Engineer, Data Analyst, BI, etc.)</>,
                <>Analyse des compétences les plus demandées : Python (78%), SQL (65%), Spark (34%), Cloud AWS/GCP (28%)</>,
                <>Dashboard Gradio interactif : exploration par région, salaire, niveau d'expérience, stack technique</>,
                <>Insights stratégiques : identification des gaps de compétences et recommandations de formation ciblées</>,
            ],
            images: [
                {
                    src: "/images/projects/nlp-emploi/nlp-emploi-1.png",
                    alt: "Pipeline NLP - Analyse Textuelle et Topic Modeling LDA",
                    width: 16,
                    height: 9,
                },
                {
                    src: "/images/projects/nlp-emploi/nlp-emploi-2.png",
                    alt: "Dashboard Gradio - Visualisation Marché Data France",
                    width: 16,
                    height: 9,
                },
            ],
            links: [
                {
                    label: "Demo Live",
                    href: "https://huggingface.co/spaces/A1i-lab/nlp-job-market",
                },
                
            ],
        },
        {
            company: "Machine Learning & Santé",
            timeframe: "Novembre 2024 – Décembre 2024",
            role: "CardioGuard — Prédiction de Risques Cardiovasculaires par ML",
            achievements: [
                <>Modèle ML prédisant les <strong>risques cardiovasculaires avec 96% de précision</strong> (Random Forest optimisé, validation croisée 5-fold)</>,
                <>Interface patient intuitive avec <strong>design médical</strong> : scores de confiance, recommandations personnalisées</>,
                <>Analyse détaillée par facteur de risque : âge, tabac, tension artérielle, cholestérol, glycémie, activité physique, IMC</>,
                <>Déploiement production sur <strong>Hugging Face Spaces</strong> avec temps de réponse &lt;2s</>,
                <>Visualisations interactives : graphiques radar multi-facteurs, importance des features, analyse comparative population</>,
                <>Dataset : 70 000 observations nettoyées, feature engineering (ratios tension, indices métaboliques), gestion déséquilibre classes</>,
            ],
            images: [
                {
                    src: "/images/projects/cardio/cardio-1.png",
                    alt: "Interface CardioGuard - Formulaire Patient et Design Médical",
                    width: 16,
                    height: 9,
                },
                {
                    src: "/images/projects/cardio/cardio-2.png",
                    alt: "Résultats Prédiction - Score de Risque et Analyse Facteurs",
                    width: 16,
                    height: 9,
                },
            ],
            links: [
                {
                    label: "Tester l'Application",
                    href: "https://huggingface.co/spaces/A1i-lab/HeartDisease",
                },
                
            ],
        },
    ],
};

const gallery: Gallery = {
    path: "/gallery",
    label: "Galerie",
    title: `Galerie Visuelle — ${person.name}`,
    description: `Collection de visualisations et projets graphiques`,
    images: [
        {
            src: "/images/gallery/horizontal-1.jpg",
            alt: "Visualisation dashboard économétrie",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/vertical-4.jpg",
            alt: "Graphique corrélation ML",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/horizontal-3.jpg",
            alt: "Pipeline ETL architecture",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/vertical-1.jpg",
            alt: "Feature importance Random Forest",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/vertical-2.jpg",
            alt: "Série temporelle ARIMA",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/horizontal-2.jpg",
            alt: "Dashboard Gradio production",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/horizontal-4.jpg",
            alt: "Matrice confusion modèle classification",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/vertical-3.jpg",
            alt: "Heatmap corrélations variables",
            orientation: "vertical",
        },
    ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
