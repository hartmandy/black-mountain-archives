import { db } from "../app/utils/db.server";
import { Role } from "@prisma/client";

async function seed() {
  await Promise.all([
    getUsers().map((user) =>
      db.user.create({ data: user }).catch((err) => console.log(err))
    ),
    getArticle().map((article) =>
      db.article.create({ data: article }).catch((err) => console.log(err))
    ),
  ]);
}

seed();

function getUsers() {
  return [
    {
      name: "Robert Martin",
      email: "Rob@virtu.studio",
      bio: "Dog dad, partner, and software engineer.",
      organization: "Virtu Studio",
      location: "Asheville, NC",
      title: "Software Engineer",
      profileImageUrl:
        "https://ucarecdn.com/ddd3e021-b784-4a0c-a4ee-73c8493b28c7/",
      password: "126",
      role: Role.ADMIN,
    },
    {
      id: "ef5de94a-a657-4eb6-918b-5e998f0d6778",
      name: "Amanda Hartman, MLIS, MAE",
      email: "mhartmanarchivist@gmail.com",
      bio: "Amanda is an archivist, scholar, and museum professional with over a decade in the museum-sphere, working to make art, history, and information more accessible through digitization projects, digital curation, and educational programming in the WNC area.",
      organization: "Black Mountain Archives",
      location: "Asheville, NC",
      title: "Lead Researcher",
      profileImageUrl:
        "https://ucarecdn.com/40634118-745f-463f-b59c-1832662ebd57/",
      password: "123456",
      role: Role.AUTHOR,
    },
  ];
}

function getArticle() {
  return [
    {
      title: "Black Mountain College, A Love Letter",
      slug: "black-mountain-college-a-love-letter",
      imageUrl: "https://ucarecdn.com/7b60a8dd-08dc-4d9a-8bd5-c00869e44098/",
      content: JSON.stringify({
        time: 1670819523373,
        blocks: [
          { type: "header", data: { text: "Editor.js", level: 2 } },
          {
            type: "paragraph",
            data: {
              text: "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.",
            },
          },
          { type: "header", data: { text: "Key features", level: 3 } },
          {
            type: "list",
            data: {
              style: "unordered",
              items: [
                "It is a block-styled editor",
                "It returns clean data output in JSON",
                "Designed to be extendable and pluggable with a simple API",
              ],
            },
          },
          {
            type: "header",
            data: { text: "What does it mean «block-styled editor»", level: 3 },
          },
          {
            type: "paragraph",
            data: {
              text: 'Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class="cdx-marker">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor\'s Core.',
            },
          },
          {
            type: "paragraph",
            data: {
              text: 'There are dozens of <a href="https://github.com/editor-js">ready-to-use Blocks</a> and the <a href="https://editorjs.io/creating-a-block-tool">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games.',
            },
          },
          {
            type: "header",
            data: { text: "What does it mean clean data output", level: 3 },
          },
          {
            type: "paragraph",
            data: {
              text: "Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below",
            },
          },
          {
            type: "paragraph",
            data: {
              text: 'Given data can be used as you want: render with HTML for <code class="inline-code">Web clients</code>, render natively for <code class="inline-code">mobile apps</code>, create markup for <code class="inline-code">Facebook Instant Articles</code> or <code class="inline-code">Google AMP</code>, generate an <code class="inline-code">audio version</code> and so on.',
            },
          },
          {
            type: "paragraph",
            data: {
              text: "Clean data is useful to sanitize, validate and process on the backend.",
            },
          },
          { type: "delimiter", data: {} },
          {
            type: "paragraph",
            data: {
              text: "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏",
            },
          },
          {
            type: "image",
            data: {
              file: {
                url: "https://codex.so/upload/redactor_images/o_e48549d1855c7fc1807308dd14990126.jpg",
              },
              caption: "",
              withBorder: true,
              stretched: false,
              withBackground: false,
            },
          },
        ],
        version: "2.18.0",
      }),
      summary: "Test article",
      authorId: "ef5de94a-a657-4eb6-918b-5e998f0d6778",
      published: true,
    },
    {
      title: "Black Mountain College, A History",
      slug: "black-mountain-college-a-history",
      imageUrl: "https://ucarecdn.com/7b60a8dd-08dc-4d9a-8bd5-c00869e44098/",
      content: JSON.stringify({
        time: 1670819523373,
        blocks: [
          { type: "header", data: { text: "Editor.js", level: 2 } },
          {
            type: "paragraph",
            data: {
              text: "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.",
            },
          },
          { type: "header", data: { text: "Key features", level: 3 } },
          {
            type: "list",
            data: {
              style: "unordered",
              items: [
                "It is a block-styled editor",
                "It returns clean data output in JSON",
                "Designed to be extendable and pluggable with a simple API",
              ],
            },
          },
          {
            type: "header",
            data: { text: "What does it mean «block-styled editor»", level: 3 },
          },
          {
            type: "paragraph",
            data: {
              text: 'Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class="cdx-marker">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor\'s Core.',
            },
          },
          {
            type: "paragraph",
            data: {
              text: 'There are dozens of <a href="https://github.com/editor-js">ready-to-use Blocks</a> and the <a href="https://editorjs.io/creating-a-block-tool">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games.',
            },
          },
          {
            type: "header",
            data: { text: "What does it mean clean data output", level: 3 },
          },
          {
            type: "paragraph",
            data: {
              text: "Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below",
            },
          },
          {
            type: "paragraph",
            data: {
              text: 'Given data can be used as you want: render with HTML for <code class="inline-code">Web clients</code>, render natively for <code class="inline-code">mobile apps</code>, create markup for <code class="inline-code">Facebook Instant Articles</code> or <code class="inline-code">Google AMP</code>, generate an <code class="inline-code">audio version</code> and so on.',
            },
          },
          {
            type: "paragraph",
            data: {
              text: "Clean data is useful to sanitize, validate and process on the backend.",
            },
          },
          { type: "delimiter", data: {} },
          {
            type: "paragraph",
            data: {
              text: "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏",
            },
          },
          {
            type: "image",
            data: {
              file: {
                url: "https://codex.so/upload/redactor_images/o_e48549d1855c7fc1807308dd14990126.jpg",
              },
              caption: "",
              withBorder: true,
              stretched: false,
              withBackground: false,
            },
          },
        ],
        version: "2.18.0",
      }),
      summary: "Test article unpublished",
      authorId: "ef5de94a-a657-4eb6-918b-5e998f0d6778",
      published: false,
    },
  ];
}
