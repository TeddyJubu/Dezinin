import { defineConfig, LocalAuthProvider } from "tinacms";
import { TinaUserCollection, UsernamePasswordAuthJSProvider } from "tinacms-authjs/dist/tinacms";
import { installDezininBrand } from "./admin-brand";
import { SectionToggle } from "./section-toggle";

const sectionToggle = (name: string, label: string) =>
  [
    {
      type: "boolean",
      name,
      label,
      ui: { component: SectionToggle },
    },
    {
      type: "boolean",
      name: name.replace(/^show/, "lock"),
      label: `${label} locked`,
      ui: { component: null },
    },
  ] as any;

const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default defineConfig({
  branch,
  contentApiUrlOverride: "/api/tina/gql",
  cmsCallback: installDezininBrand,
  authProvider: isLocal ? new LocalAuthProvider() : new UsernamePasswordAuthJSProvider(),
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      TinaUserCollection,
      {
        name: "site",
        label: "Site",
        path: "content/site",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
        },
        fields: [
          { type: "string", name: "metaTitle", label: "Meta title", required: true },
          { type: "string", name: "metaDescription", label: "Meta description", ui: { component: "textarea" } },
          { type: "image", name: "logo", label: "Logo" },
          { type: "image", name: "logoCompact", label: "Compact logo" },
          {
            type: "object",
            name: "navLinks",
            label: "Center navigation",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label }) },
            fields: [
              { type: "string", name: "label", label: "Label", required: true },
              { type: "string", name: "href", label: "Link", required: true },
            ],
          },
          { type: "string", name: "ctaLabel", label: "Header button label" },
          { type: "string", name: "ctaHref", label: "Header button link" },
          { type: "string", name: "footerBlurb", label: "Footer description", ui: { component: "textarea" } },
          {
            type: "object",
            name: "footerColumns",
            label: "Footer columns",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title }) },
            fields: [
              { type: "string", name: "title", label: "Title" },
              {
                type: "object",
                name: "links",
                label: "Links",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label }) },
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "href", label: "Link" },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "socials",
            label: "Social links",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label }) },
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "href", label: "Link" },
              {
                type: "string",
                name: "icon",
                label: "Icon",
                options: ["tiktok", "instagram", "facebook", "youtube", "linkedin"],
              },
            ],
          },
          { type: "string", name: "copyright", label: "Copyright" },
        ],
      },
      {
        name: "home",
        label: "Home",
        path: "content/home",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
        },
        fields: [
          ...sectionToggle("showHero", "Hero"),
          { type: "image", name: "heroVideo", label: "Hero video" },
          ...sectionToggle("showLookbook", "Lookbook"),
          {
            type: "object",
            name: "headlines",
            label: "Moodboard headlines",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title }) },
            fields: [
              { type: "string", name: "title", label: "Title", required: true },
              { type: "string", name: "subtitle", label: "Subtitle" },
            ],
          },
          ...sectionToggle("showPartners", "Partners"),
          { type: "string", name: "experienceTitle", label: "Experience heading" },
          { type: "image", name: "partners", label: "Partner logos", list: true },
          ...sectionToggle("showProjects", "Projects"),
          { type: "string", name: "filters", label: "Project filters", list: true },
          {
            type: "object",
            name: "projects",
            label: "Projects",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title }) },
            fields: [
              { type: "string", name: "number", label: "Number" },
              { type: "string", name: "title", label: "Title", required: true },
              { type: "string", name: "categories", label: "Categories", list: true },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "summary", label: "Summary", ui: { component: "textarea" } },
            ],
          },
          ...sectionToggle("showGallery", "Gallery"),
          { type: "string", name: "galleryTitle", label: "Gallery heading" },
          {
            type: "object",
            name: "videos",
            label: "Gallery videos",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title }) },
            fields: [
              {
                type: "string",
                name: "youtubeId",
                label: "YouTube link",
                description: "Paste a full YouTube link. A video id still works.",
                required: true,
              },
              { type: "string", name: "title", label: "Title" },
            ],
          },
          ...sectionToggle("showFaq", "FAQ"),
          { type: "string", name: "faqTitle", label: "FAQ heading" },
          {
            type: "object",
            name: "faqs",
            label: "FAQs",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.question }) },
            fields: [
              { type: "string", name: "question", label: "Question", required: true },
              { type: "string", name: "answer", label: "Answer", ui: { component: "textarea" }, required: true },
            ],
          },
          ...sectionToggle("showContact", "Contact"),
          {
            type: "object",
            name: "contact",
            label: "Contact",
            fields: [
              { type: "string", name: "kicker", label: "Kicker" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "email", label: "Email" },
              { type: "string", name: "formTitle", label: "Form title" },
              { type: "string", name: "interestLabel", label: "Interest label" },
              { type: "string", name: "interests", label: "Interests", list: true },
              { type: "string", name: "submitLabel", label: "Submit label" },
              { type: "string", name: "namePlaceholder", label: "Name placeholder" },
              { type: "string", name: "companyPlaceholder", label: "Company placeholder" },
              { type: "string", name: "emailPlaceholder", label: "Email placeholder" },
              { type: "string", name: "phonePlaceholder", label: "Phone placeholder" },
              { type: "string", name: "messagePlaceholder", label: "Message placeholder" },
            ],
          },
        ],
      },
      {
        name: "newsletter",
        label: "Newsletters",
        path: "content/newsletters",
        format: "json",
        ui: {
          router: ({ document }) => `/newsletters/${document._sys.filename}`,
          filename: {
            slugify: (values) => slugify(values?.title || "newsletter"),
          },
        },
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "number", name: "order", label: "Order" },
          { type: "image", name: "cover", label: "Cover" },
          { type: "image", name: "pdf", label: "PDF" },
          { type: "string", name: "summary", label: "Summary", ui: { component: "textarea" } },
        ],
      },
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "json",
        ui: {
          router: ({ document }) => `/${document._sys.filename}`,
        },
        fields: [
          { type: "string", name: "kicker", label: "Kicker" },
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "string", name: "body", label: "Body", ui: { component: "textarea" } },
          { type: "image", name: "image", label: "Background image" },
          { type: "string", name: "primaryCtaLabel", label: "Primary button" },
          { type: "string", name: "primaryCtaHref", label: "Primary link" },
          { type: "string", name: "secondaryCtaLabel", label: "Secondary button" },
          { type: "string", name: "secondaryCtaHref", label: "Secondary link" },
        ],
      },
    ],
  },
});
