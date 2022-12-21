import { db } from "../app/utils/db.server";
import { Role, Subject, UserRole } from "@prisma/client";

async function seed() {
  // getAlumni()
  //   .slice(1500, 1600)
  //   .forEach(async (alumni) => {
  //     await db.person.create({ data: alumni }).catch((err) => console.log(err));
  //   });
  // await Promise.all([
  // getUsers().map((user) =>
  //   db.user.create({ data: user }).catch((err) => console.log(err))
  // ),
  // getArticle().map((article) =>
  //   db.article.create({ data: article }).catch((err) => console.log(err))
  // ),
  // ]);
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
      role: UserRole.ADMIN,
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
      role: UserRole.AUTHOR,
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

function getAlumni() {
  return [
    {
      name: "George Zabriskie",
      role: Role.GUEST_FACULTY,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Ossip Zadkine",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Emmy Zastrow",
      role: Role.FACULTY,
      subject: Subject.LANGUAGES,
    },
    {
      name: "Emanuel Zetlin",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "William Edward Zeuch",
      role: Role.FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Eva Carina Zhitlowsky",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Hyalie Esther Yamins",
      role: Role.STUDENT,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Sybil Eleanor Yamins",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Harold Yoshihiro Yanagi",
      role: Role.GUEST,
      subject: Subject.FARM_AND_WORK_PROGRAM,
    },
    {
      name: "Sōetsu Yanagi",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Lana Helen Yarash",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Jose R Yglesias",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Jean Yoemans",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Richard Theodore Yonkers",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Harold Young",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Mary Elizabeth Young",
      role: Role.STUDENT,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Jeanne C. L. Wacker",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Janice Patricia Walker",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Robert Walcott, Jr.",
      role: Role.GUEST_FACULTY,
      subject: Subject.HISTORY,
    },
    {
      name: "Daniel Wallace",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "John Lewis Wallen",
      role: Role.FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Rachel Wallen",
      role: Role.FAMILY,
      subject: Subject.NA,
    },
    {
      name: "Jane Walley",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "John Walley",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Dalhong Wang",
      role: Role.GUEST,
      subject: Subject.FARM_AND_WORK_PROGRAM,
    },
    {
      name: "Cora Kelley Ward",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Margarita Rose Warner-Jones ",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Phyllis Genevieve Warnick",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Don Warrington",
      role: Role.ADMINISTRATOR,
      subject: Subject.NA,
    },
    {
      name: "Mary Parks Washington",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Felix Wassermann",
      role: Role.GUEST,
      subject: Subject.SEMINAR_ON_AMERICA,
    },
    {
      name: "Susanne Wasson-Tucker",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "William Ragland Warkins, III",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "William Watson",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Jay Gilbert Watt",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "David Jacques Way",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Edna Martha Way",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Neva Johnson Webb",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Richard David Weber",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Lou Katherin Weber",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Lily Byrd Webster",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Alexandria Weekes",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Susan Weil",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Lili Weinberger",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Betsy Ann Weinrib",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "David Weinrib",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Florence Weinstein",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Selma H. Weisberger",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Frank Weise",
      role: Role.STUDENT,
      subject: Subject.ARCHITECTURE,
    },
    {
      name: "Jane Ollendorf Weiss",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Rita Ruth Weiss",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Harry William Weitzer, Jr.",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Thomas Porter Wentworth",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Gertrud Wenzel",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Florence Sheila West",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Nancy Clarke West",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Anne C. Weston",
      role: Role.STUDENT,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Neltje Scofield Weston",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Norman Betts Weston",
      role: Role.STUDENT,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Emery Stevens Whipple",
      role: Role.STUDENT,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Frank Madison White",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Gertrude R. White",
      role: Role.STUDENT,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Nathalie White",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Sadie Lee Whitefield",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "John Weiners",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Paul Holme Wiggin",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Don Emerson Wight",
      role: Role.STUDENT,
      subject: Subject.ARCHITECTURE,
    },
    {
      name: "Earlene Ann Wight",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Marguerite Wildenhain",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Emil Joseph Willimetz",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Edward Zeuch William",
      role: Role.FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Alma Stone Williams",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Carroll Warner Williams",
      role: Role.FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Cornelia Few Williams",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Evelyn Jane Williams",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Florence Williams",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "George Williams",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Gerda Helene Williams",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Jonathan Williams",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Margaret Laura Williams",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Ora Marie Williams",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Paul Francis Williams, Jr.",
      role: Role.STUDENT,
      subject: Subject.ARCHITECTURE,
    },
    {
      name: "Robert R. Williams",
      role: Role.ADMINISTRATOR,
      subject: Subject.NA,
    },
    {
      name: "Theodore Williams",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "James Randolph Wilson",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Mary Frances Wilson",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Alain Harry Windholz",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Kenelm Warren Winslow",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Henry Mosle West Winter",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Karl With",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Edwin Judd Woldin",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Diana Woeffler",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Emerson Woeffler",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Mark Wollner",
      role: Role.GUEST,
      subject: Subject.MUSIC,
    },
    {
      name: "Irma Wolpe",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Stefan Wolpe",
      role: Role.FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Jeremiah Frederic Wolpert",
      role: Role.STUDENT,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Emily Wood",
      role: Role.FAMILY,
      subject: Subject.NA,
    },
    {
      name: "Horace McGuire Wood",
      role: Role.STAFF,
      subject: Subject.FARM_AND_WORK_PROGRAM,
    },
    {
      name: "Jane Foster Woodruff",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Doris Woodward",
      role: Role.GUEST_FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Forrest Edward Wright",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Louise Wright",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Helen Grace Wright",
      role: Role.STUDENT,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Nanette Wright",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Nancy Wost",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Eleonora Francziszka Wronowska",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Elinor Wulfekuhler",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "William Robert Wunsch",
      role: Role.FACULTY,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Edward Dean Wyke",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Shirley Tecia Unger",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "John Arthur Urbain",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Martha Louise Vahrenkamp",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Edith Vail",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Willem Valkenier",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Gerald van de Wiele",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Mary O van Deman",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Ruth van Frank",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Neal Roger van Middlesworth",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Edward Stanley Vanderbeek",
      role: Role.STUDENT,
      subject: Subject.ARCHITECTURE,
    },
    {
      name: "John Henry Vanderline",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Jean Varda",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Nataraj Vashi",
      role: Role.GUEST_FACULTY,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "PraVeena Mehta Vashi",
      role: Role.GUEST_FACULTY,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Margaret Tolk Vaughan",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Muffie Vaughan",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Thelma Verner",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Denis Vibert",
      role: Role.GUEST,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Esteban Vicente ",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Mark Vishniak",
      role: Role.GUEST,
      subject: Subject.SEMINAR_ON_AMERICA,
    },
    {
      name: "Mrs. Vishniak",
      role: Role.GUEST,
      subject: Subject.SEMINAR_ON_AMERICA,
    },
    {
      name: "Lou Bernard Voigt",
      role: Role.FACULTY,
      subject: Subject.FARM_AND_WORK_PROGRAM,
    },
    {
      name: "Ilona Dorothea von Karolyi",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Marie-Louise von Franz",
      role: Role.GUEST_FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Willo von Moltke",
      role: Role.GUEST_FACULTY,
      subject: Subject.ARCHITECTURE,
    },
    {
      name: "John Vorenberg",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Peter Voulkous",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "David Tananbaum",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Jacqueline K. Tankersley",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Edgar M. Taschdijan",
      role: Role.GUEST_FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Marie June Tavroges",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "John Brainerd Taylor, Jr.",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Paul Taylor",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Thomas Taylor",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Suzanne Fullbright Teasdale",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Dorice Tentchoff",
      role: Role.STUDENT,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Hilda Terry",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Elaine Freeman Thomas",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Donald Stuart Thrall",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Bedford Thurman",
      role: Role.GUEST_FACULTY,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Stanley Hart Tippett",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "James LeRoy Tite",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Helen J. Topp",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Ray Toubman",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Sarah Carlisle Towery",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Ariel Charlotte Tracy",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Dorothy Trayer",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Raymond Trayer",
      role: Role.STAFF,
      subject: Subject.FARM_AND_WORK_PROGRAM,
    },
    {
      name: "Ann Treichler",
      role: Role.FAMILY,
      subject: Subject.NA,
    },
    {
      name: "Martha Rittenhouse Treichler",
      role: Role.FAMILY,
      subject: Subject.NA,
    },
    {
      name: "Wililam Edmund Treichler",
      role: Role.STAFF,
      subject: Subject.FARM_AND_WORK_PROGRAM,
    },
    {
      name: "Anne Tredick",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Rachael Beam Trexler",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Libbian Trynz",
      role: Role.UNKNOWN,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Yu Ching Tsui ",
      role: Role.FACULTY,
      subject: Subject.PHYSICAL_SCIENCES,
    },
    {
      name: "Evelyn Jackson Tubbs",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "David Tudor",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Robert J. Tucker",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Eloise Turner",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Robert Chapman Turner",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Sue Turner",
      role: Role.FAMILY,
      subject: Subject.NA,
    },
    {
      name: "Helen Norris Tuttle",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Rosamond Tuve",
      role: Role.GUEST_FACULTY,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Audrey K. Tuverson",
      role: Role.UNKNOWN,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Edwin Parker Twombly, Jr.",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Jack Twoekov",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Ralph Winifred Taylor, Jr.",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Alice Tyson",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Simon Vladimir Sadoff",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Marion Sands",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "David Saffer",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Irene Eva Sagan",
      role: Role.STUDENT,
      subject: Subject.PHYSICAL_SCIENCES,
    },
    {
      name: "Phyllis Salaway",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Theodore Michael Sanders, Jr.",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Herbert W. Sanders",
      role: Role.ADMINISTRATOR,
      subject: Subject.NA,
    },
    {
      name: "Johanna C. Sandman",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Zoya Sandomirsky",
      role: Role.GUEST,
      subject: Subject.FARM_AND_WORK_PROGRAM,
    },
    {
      name: "Helen Ruth Sapir",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Cynthia Sargent",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "F. Porter Sargent",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Robert Wilcox Sayles, Jr.",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Concetta Scaravaglione",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Elinore Margaret Schaffle",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Karl Schaffle",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Ellen Georgia Schasberger",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Dora Schwarz",
      role: Role.FAMILY,
      subject: Subject.NA,
    },
    {
      name: "Irene Schawinsky",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Xanti Schawinsky",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Ann Schauffler",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "David Craig Schauffler",
      role: Role.GUEST,
      subject: Subject.NA,
    },
    {
      name: "Katherine Stuart Schauffler",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Manvel Schauffler",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Sue Schauffler",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Samuel Harold Schecter",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Elaine Schecter",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Julius Eli Scheir",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Arnold Theodore Schifrin",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Joel Clayton Schiller",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Mark Schindler ",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Eva Schlein ",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Charlotte Schlesiner",
      role: Role.FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Conrad Victor Schmidtt",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Elaine Louise Schmidtt",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Elizabeth Schmitt",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Rupert Peter Schmitt",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Arthur Julian Schneider",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Mignon Scholl ",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "John P. Scholtz",
      role: Role.GUEST,
      subject: Subject.MATHEMATICS,
    },
    {
      name: "Harold Schomer",
      role: Role.GUEST,
      subject: Subject.HISTORY,
    },
    {
      name: "Elsie Schromer",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Laille Schutz",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Harold Harner Schuyler",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Siegfried Schwartz",
      role: Role.FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Leonard Louis Schwartz",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Lillian Olga Schwartz",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Elizabeth Lloyd Scoville",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "David Sear",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Janet Seasongood",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Janet Benskin Seaton",
      role: Role.GUEST,
      subject: Subject.FARM_AND_WORK_PROGRAM,
    },
    {
      name: "Virginia Claire Seay",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "James Edward Secord",
      role: Role.UNKNOWN,
      subject: Subject.ARCHITECTURE,
    },
    {
      name: "Mary-Averett Seelye",
      role: Role.GUEST_FACULTY,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Harry Seidler",
      role: Role.STUDENT,
      subject: Subject.ARCHITECTURE,
    },
    {
      name: "Louis Hubert Selders",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Carol Rita Serling",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Roger Sessions",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Phyllis Shaffran",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Carl Betz Shapley",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Barbara Taft Sheddon",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Mildred Lanier Sheffeld",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Cicely Chapin Shallhase",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Edwin Holmes Shepard",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Fiola Shepard",
      role: Role.FACULTY,
      subject: Subject.LANGUAGES,
    },
    {
      name: "Arthur Sherman",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Richard Allen Sherman",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Roger Talbot Sherman",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Eudice Jay Shifris",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "William Herbert Shrauger",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Wanda Belle Shult",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Barbara Wieboldt Sieck",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Kathryn Wieboldt Sieck",
      role: Role.STUDENT,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Arthur Siegel",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Ellen Siegel",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Renee Siegel",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Jeannette Siegel",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Eini Irene Sihvonen",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Miriam T. Sihvonen",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Olavi Toivo Sinvonen",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Olivia Silberberg",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Sewell Sillman",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Clara Silvers",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Irene Simon",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Morrie Leon Simon",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Ann Louise Simons",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Carol Harriet Singer",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Jacqueline Singer",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Aaron Siskind",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Elizabeth Jane Slater",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Gerda Louise Slavson",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Mary Jo Slick",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Allan Bernard Sly",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Elizabeth Ware Sly",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Eleanor Robson Smith",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Elizabeth Courts Smith",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Hariet Smith",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Junelaine Smith",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Nancy Alice Smith",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Suzanne Parker Smith",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Will Smith",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Benjamin Sneed",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Kenneth Duane Snelson",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Paul Ellis Snyder",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Harriet Florence Sohmers",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Norman Soloman",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Harriett Sylvia Sones",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Richard Spahn",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Elizabeth Spaulding",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Freda Naomi Spaulding",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Victor Sprague ",
      role: Role.FACULTY,
      subject: Subject.PHYSICAL_SCIENCES,
    },
    {
      name: "Sue Spayth",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "A.J. Spencer",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Carolyn Constance Spencer",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Philip Bradley Spencer",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Douglas Kay Spiegel",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Raymond P. Spillinger",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Isobel Tanya Sprager",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Martin Sprengling",
      role: Role.GUEST_FACULTY,
      subject: Subject.HISTORY,
    },
    {
      name: "Harold Proul",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Joan Shirley Stack",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Theodoros Stamos",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Peter Martin Stander",
      role: Role.UNKNOWN,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Ranette Stander",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Cornelia Howell Starr",
      role: Role.UNKNOWN,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Mona Stea",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Naomi Stea",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Alice Steer",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Barbara Stein",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Donald Harris Stein",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Kathryn W. Stein",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Morton Jerome Steinau",
      role: Role.STUDENT,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Edward Steuermann",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Hope Stevens",
      role: Role.STUDENT,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Bacia R. Stepner",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Emery Stevens",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Don Eugene Stevens",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "David Cleotis Stetzel",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Jean Hoffman Stewart",
      role: Role.GUEST,
      subject: Subject.FARM_AND_WORK_PROGRAM,
    },
    {
      name: "Alicja Steiglitz",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Halina Maria Steiglitz",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Grace Stiles",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Leonard Dale Stiles",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "John Morris Stix",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "James R. Stokely",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Wilma Stokely",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Claude Stoller",
      role: Role.STUDENT,
      subject: Subject.ARCHITECTURE,
    },
    {
      name: "Annette Dabney Stone",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Frederick Mason Stone",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Jane Robinson Stone",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Wallace Gray Stone",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "James Gerard Stranch",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Erwin Walter Straus",
      role: Role.FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Gertrude Straus",
      role: Role.FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Margaret Strauss",
      role: Role.STAFF,
      subject: Subject.PHYSICAL_SCIENCES,
    },
    {
      name: "Edward J. Stresino",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Alexander Stroumillo",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Robert Allen Sultzbach",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Shirley Ann Sultzbach",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Robert Morris Sunley",
      role: Role.STUDENT,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Thomas Whitney Surette",
      role: Role.ADMINISTRATOR,
      subject: Subject.MUSIC,
    },
    {
      name: "Adele Suska",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Deborah Evelyn Sussman",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Risa Heyman Sussman",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Samuel E. Sussman",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Eugene Laird Sutherland",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "William Robert Sutherland",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Inga Svarc",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Egbert Warnderink Swackhamer",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "John Meredith Swackhamer",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Alice Lee Swan",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Verne Sturges Swan",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Jean Phyllis Swanson",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Katherine Ann Swartzbaugh",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Lucy Houghton Swift",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Piet Swierstra",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Sara Natalie",
      role: Role.STUDENT,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Dorothy Elizabeth Raattama",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Verna Edith Raattama",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Hans Rademacher",
      role: Role.GUEST_FACULTY,
      subject: Subject.MATHEMATICS,
    },
    {
      name: "Paul Radin",
      role: Role.FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Thomas Joseph Raleigh",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Arthur Charles Ramier",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Janet Harvey Ramsey",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "George Milton Randall",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Eva Rapaport",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Arthur Raper",
      role: Role.GUEST_FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Robert Milton E. Rauschenberg",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Joseph Hubert Ray",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Harold Bradford Raymond",
      role: Role.STUDENT,
      subject: Subject.HISTORY,
    },
    {
      name: "Rosemary Raymond",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Angelika Reckendorf",
      role: Role.UNKNOWN,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Alexander William F. Reed",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Janet Ferguson Rees",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Else Regensteiner",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Helen Reiche",
      role: Role.GUEST,
      subject: Subject.SEMINAR_ON_AMERICA,
    },
    {
      name: "John James Reiss",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Gabor Rejto",
      role: Role.GUEST,
      subject: Subject.MUSIC,
    },
    {
      name: "Eric Boyd Renner",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Frances U. Repps",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "David Resnik",
      role: Role.STUDENT,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Daniel Rhodes",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Denis Rhodes",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "John H. Rhys",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Barbara Stone Rice",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Daniel Stacey Rice",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Frank Aydelotte Rice",
      role: Role.GUEST_FACULTY,
      subject: Subject.LANGUAGES,
    },
    {
      name: "Jack Edward Rice",
      role: Role.STAFF,
      subject: Subject.FARM_AND_WORK_PROGRAM,
    },
    {
      name: "John Andrew Rice",
      role: Role.ADMINISTRATOR,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "June Ann Rice",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Mary Aydelotte Rice",
      role: Role.FAMILY,
      subject: Subject.NA,
    },
    {
      name: "Nell Aydelotte Rice",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "William Owen Rice",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Bertrand Richard",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Mary Caroline Richards",
      role: Role.FACULTY,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Frank Howard Richardson",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Donald Louis Richter",
      role: Role.STUDENT,
      subject: Subject.ARCHITECTURE,
    },
    {
      name: "Robert Kenneth Richter",
      role: Role.STUDENT,
      subject: Subject.ARCHITECTURE,
    },
    {
      name: "Jack Richtman",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Flora Viola Ricks",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Francis Riddick",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Mary Rose Riegger",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Robert L. Ritchie",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "John Giles Roberts",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Richard Edwin Roberts",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Paula Murray Robertson",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Ronald George Robertson",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Charlotte Robinson",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Sydney Caroline Robinson",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Dorothea Rockburne",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Herbert Calvin Roco",
      role: Role.UNKNOWN,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Elaine Rodbart",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Emelyn N. Rogers",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Alice Katherine Rondthaler",
      role: Role.FACULTY,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Howard Mayro Rondthaler",
      role: Role.FAMILY,
      subject: Subject.NA,
    },
    {
      name: "Theodore Edward Rondthaler",
      role: Role.FACULTY,
      subject: Subject.LANGUAGES,
    },
    {
      name: "Nevalie Anne Ropp",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Nathan Rosen",
      role: Role.GUEST_FACULTY,
      subject: Subject.PHYSICAL_SCIENCES,
    },
    {
      name: "Peter A. Rosenbaum",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Rachel Rosenberger",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Ruth Lenore Rosenbluh",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Helen Joyce Rosenbluh",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Isaac Rosenfeld",
      role: Role.GUEST_FACULTY,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Sylvia Baela Rosenfeld",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Gloria Rosenfeld",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Doris Ann Rosenthal",
      role: Role.UNKNOWN,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Stanley Rosner",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Herbert Harris Ross",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Dorothy Fay Rossen",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Gert Gordon Rothenberg",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Marion Rothman",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Maude Roundtree",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Claire Rubel",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Vita Sari Rudikoff",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Bernard Rudofsky",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Berta Rudofsky",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Dorothy Elizabeth Rugg",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Michael J. Rumaker",
      role: Role.STUDENT,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Catherine Ruminoff",
      role: Role.GUEST,
      subject: Subject.SEMINAR_ON_AMERICA,
    },
    {
      name: "Nancy Russ",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Foster William Russell",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Charles Donald Page",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "James Albert Pait",
      role: Role.GUEST_FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Alexander Stuart Parker",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Elizabeth Parker",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Harley Walter Parker",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Howard Jefferson Parker, Jr.",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Virginia T. Parker",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Patricia Ann Passloff",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Josephine Annette Pater",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Leslie Paul",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Max Paul",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Felix Payant",
      role: Role.GUEST,
      subject: Subject.NA,
    },
    {
      name: "Barbara Payne",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "May de Forest Payne",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Ruth Mary Payne",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Lorna Payson",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Charles William Pearman",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Marjorie Pearman",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Lorna Belle Pearson",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Roscoe Penley",
      role: Role.STAFF,
      subject: Subject.FARM_AND_WORK_PROGRAM,
    },
    {
      name: "Arthur Hiller Penn",
      role: Role.GUEST_FACULTY,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Marion Louise Perkins",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Charles Bryce Perrow",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Joyce Perry",
      role: Role.GUEST,
      subject: Subject.FARM_AND_WORK_PROGRAM,
    },
    {
      name: "Phoebe Elizabeth Perry",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Yella Pessl",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Jean Elizabeth Peterson",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Mardi Mai Peterson",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Marita Pevsner",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Vera Pevsner",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Vernon Harold Phillips",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Claire Deborah Picken",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Rene Constant Pinchuk",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "David Pines",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Bruno Piscitello",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Jennie May Pitcoff",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Louis Witherbee Pitt, Jr.",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "N.O. Pittinger",
      role: Role.ADMINISTRATOR,
      subject: Subject.NA,
    },
    {
      name: "Barbara Emily Pollet",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Elizabeth Smith Pollet",
      role: Role.STUDENT,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Richard Sturgis Pond",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Irene Posner",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Richard Montgomery Sears Porter",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Herminio Portell-Vila",
      role: Role.FACULTY,
      subject: Subject.HISTORY,
    },
    {
      name: "Leah Portell-Vila",
      role: Role.GUEST_FACULTY,
      subject: Subject.LANGUAGES,
    },
    {
      name: "Frances Porfumo",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Frances Zena Prager",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Doris Pratt",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Marianne Preger",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "James Prestini",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Benton Pride",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Margaret Dudley Purcell",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Marian June Nacke",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Frank Eugene Nacke",
      role: Role.STUDENT,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Masato Nakagawa",
      role: Role.STUDENT,
      subject: Subject.ARCHITECTURE,
    },
    {
      name: "Isaac Susumi Nakata",
      role: Role.STUDENT,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Neal Nathanson",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Guy Nedthoff",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Mary Coleman Nee",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Thomas Bacus Nee",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Richard Negro",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Wanda Beatrice Nelles",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Ann Nelson",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Jessie Ann Nelson",
      role: Role.FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Patricia Ann Nelson",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Peter Bjorn Nemenyi",
      role: Role.STUDENT,
      subject: Subject.MATHEMATICS,
    },
    {
      name: "Jay Nelson",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Frederick Neumann",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "J.B. Neumann",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Joan Radley Neumann",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Beaumont Newhall",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Nancy Newhall",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Theresa C. Newhoff",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Karl H. Niebyl",
      role: Role.FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Boonyong Nikrodhananda",
      role: Role.GUEST,
      subject: Subject.FARM_AND_WORK_PROGRAM,
    },
    {
      name: "Ansui Nimmanahaeminda",
      role: Role.GUEST,
      subject: Subject.FARM_AND_WORK_PROGRAM,
    },
    {
      name: "Katharine Louise Nipps",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Jean Nison",
      role: Role.UNKNOWN,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Suzanne D'Oyly Noble",
      role: Role.STUDENT,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Layton Coalscott Noel, Jr.",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Christa Noland",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Harry Casel Noland, Jr.",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Kenneth Clifton Noland",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Lionel Nowak",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Dorothy Quincy Noyes",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Ernst Orho Nukanen",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Lilisn Via Nunn",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Ann Noland",
      role: Role.FAMILY,
      subject: Subject.NA,
    },
    {
      name: "Massen Cornelius Noland",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Andrew Francis Oates, Jr.",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Heinz Peter Oberlander",
      role: Role.STUDENT,
      subject: Subject.ARCHITECTURE,
    },
    {
      name: "Karl Obermann",
      role: Role.GUEST,
      subject: Subject.SEMINAR_ON_AMERICA,
    },
    {
      name: "Eugene O'Brien",
      role: Role.GUEST,
      subject: Subject.FARM_AND_WORK_PROGRAM,
    },
    {
      name: "Stanislaus J. Ogorzalek",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Iris Jocelyn Okun",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Nan Oldenburg",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Sheila Oline",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Betty Kaiser Olson",
      role: Role.FAMILY,
      subject: Subject.NA,
    },
    {
      name: "Charles Olson",
      role: Role.FACULTY,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Constance Olson",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "John Francis O'Neill, Jr.",
      role: Role.GUEST,
      subject: Subject.FARM_AND_WORK_PROGRAM,
    },
    {
      name: "Ruth Helen O'Neill",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Herbert Brand Oppenheimer",
      role: Role.STUDENT,
      subject: Subject.ARCHITECTURE,
    },
    {
      name: "Joel Lester Oppenheimer",
      role: Role.STUDENT,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Geza John Ormai",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Benjamin Oren",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Victor Ornstein",
      role: Role.GUEST,
      subject: Subject.SEMINAR_ON_AMERICA,
    },
    {
      name: "James Robert Orr",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Elizabeth Louisa Osbourne",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Susan Osbourne",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Virginia Denman Osbourne",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Charles Oscar",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Carol Ann Ostrow",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Mary Phellan Outten",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Warren Bell Outten",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Evelyn Oxenberg",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Amedee Ozenfant",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Robert Orr",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Robert C. Orr",
      role: Role.FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Ginger Osbourne",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Archie Abbott",
      role: Role.GUEST,
      subject: Subject.SEMINAR_ON_AMERICA,
    },
    {
      name: "Rita Abbott",
      role: Role.GUEST,
      subject: Subject.SEMINAR_ON_AMERICA,
    },
    {
      name: "Robert Lionel Abell",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Henry Bethune Adams, Jr.",
      role: Role.STUDENT,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Arthur Stanton Adams",
      role: Role.ADMINISTRATOR,
      subject: Subject.NA,
    },
    {
      name: "James Preston Adams",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "John Boman Adams",
      role: Role.FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Edward Nicholas Adamy",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "John Winifred Ager, Jr.",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Isabel Aiken",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Richard L'Appin Albany",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Nancy Leigh Albee",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Anni Albers",
      role: Role.FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Josef Albers",
      role: Role.FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Dorothy Lenoire Albers",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Adele Albert",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Neil Kenneth Albright",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Robert Monroe Alexander",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Bascombe N. Allen",
      role: Role.STAFF,
      subject: Subject.FARM_AND_WORK_PROGRAM,
    },
    {
      name: "Marriette Handy Allen",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Shirley April Allen",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "George Meinhard Alsberg",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Donald Alter",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Harold Altman",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Rodrigo de Toledo Alvarez",
      role: Role.GUEST,
      subject: Subject.SEMINAR_ON_AMERICA,
    },
    {
      name: "Richard William Amero",
      role: Role.STUDENT,
      subject: Subject.ARCHITECTURE,
    },
    {
      name: "Edward Winslow Ames, Jr.",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Leo Amino",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Barbara Ann Anderson",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Harold Henry Anderson",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Richard Lloyd Andrews",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "John Curtis Applegate",
      role: Role.STUDENT,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Charles Archer",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Eleanore Joicely Archer",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Hazel Larsen Archer",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Boris Solomonivick Aronson",
      role: Role.GUEST_FACULTY,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Anne Eastman Arthur",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Ruth Aiko Asawa",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Adam Kissin Atkin",
      role: Role.STUDENT,
      subject: Subject.MATHEMATICS,
    },
    {
      name: "Stuart Atkinson",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Claudia Auerbach",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Alan Gene Auslander",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Leo Austin",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Allie Eugenia Avery",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Rima Marion Axelrod",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Eleanor Fuller Aycock",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Kenneth Richard Ayres",
      role: Role.STUDENT,
      subject: Subject.MATHEMATICS,
    },
    {
      name: "Thomas Owen Ayres, Jr.",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Robert Shillingford Babcock",
      role: Role.FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Ernst Bacon",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Christian Emanuel Baensch",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "John Timon Bagwell, Jr.",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "David Welles Bailey",
      role: Role.STUDENT,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Hilda Margaret Loram Bailey",
      role: Role.FACULTY,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "John Malcolm Bailey, Jr.",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Ruth Bailey",
      role: Role.FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Joan Ruth Baim",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Barbara Biard Baker",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Elizabeth Baker",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Percy Hayes Baker",
      role: Role.GUEST_FACULTY,
      subject: Subject.PHYSICAL_SCIENCES,
    },
    {
      name: "Vera Baker",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Judith Bakker",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Lili Weinberger Balint",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Stella Marie Balderston",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Catherine Y. Baldock",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Dorothy Anne Ball",
      role: Role.STUDENT,
      subject: Subject.LANGUAGES,
    },
    {
      name: "Joy Fleur Ballon",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Margaret A. Balzar",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Barbara Bank",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Anne Furman Banks",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Seymour Barab",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "George Rodgers Barber",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Gerald Barnes",
      role: Role.FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Mary Watson Barnes",
      role: Role.FACULTY,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Walter Carl Barnes",
      role: Role.FACULTY,
      subject: Subject.HISTORY,
    },
    {
      name: "Abby Joy Barnett",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Raymond C. Barnhart",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Eric Barnitz",
      role: Role.STUDENT,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Henrietta Barth",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Jane Fortescue Bartoli",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Lino Bartoli",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Ruth Barton",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "John Frederick Bauder",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Marilyn Jean Bauer",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Alice A.D. Baumgarner",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Mary Stacy Beaman",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Dorothy Bearnson",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Barbara Ann Beatty",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Ralph Becherer",
      role: Role.GUEST,
      subject: Subject.PHYSICAL_SCIENCES,
    },
    {
      name: "Ralph Williams Beckley",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Gloria June Beckman",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Nuvart Bedrossian",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Harrison Begay",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Margaret Grant Beidler",
      role: Role.GUEST_FACULTY,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Paul H Beidler",
      role: Role.GUEST_FACULTY,
      subject: Subject.ARCHITECTURE,
    },
    {
      name: "Barbara Beiswanger",
      role: Role.GUEST_FACULTY,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "George Beiswanger",
      role: Role.GUEST_FACULTY,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Jeanne Andrea Belcher",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Charles Bell",
      role: Role.GUEST_FACULTY,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Avis Rebecca Belt",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Renate Benfey",
      role: Role.STUDENT,
      subject: Subject.LANGUAGES,
    },
    {
      name: "David Benjamin",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Peggy Bennett",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Eric Russell Bentley",
      role: Role.GUEST_FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Maja Tschernjakow Bentley",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Lilian I. Berger",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Henry Porter Bergman",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "John Walter Bergman",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Eleanore Ruth Bergman",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Margot Eisenhardt Bergmann",
      role: Role.GUEST_FACULTY,
      subject: Subject.PHYSICAL_SCIENCES,
    },
    {
      name: "Peter Gabriel Bergmann",
      role: Role.GUEST_FACULTY,
      subject: Subject.PHYSICAL_SCIENCES,
    },
    {
      name: "Bernice Bernstein",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Nancy Ann Bernstein",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "William Charles Berry",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Joseph William Bex",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Leonard Winter Billing",
      role: Role.STUDENT,
      subject: Subject.ARCHITECTURE,
    },
    {
      name: "Laurence Richard Birns",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Doris Marie Birtic",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "James Daniel Boyd Bishop",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Mary Alice Fielitz Bishop",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Richard Samuel Bishop",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Paul Lee Bissell",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Henry Schwarzchild Black",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Lucille Marjorie Blaha",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Roberta Jean Blair",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Page Preston Blakemore",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Winslow Warren Blanchard",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Jane Cooper Bland",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Robert Lewis Bliss",
      role: Role.STUDENT,
      subject: Subject.ARCHITECTURE,
    },
    {
      name: "Charles Bloomstein",
      role: Role.FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Lili Blumenau",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Homer Kingsley Bobilin",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Belle Boas",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Angelica Bodky",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Erwin Bodky",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Lilli Bodky",
      role: Role.GUEST_FACULTY,
      subject: Subject.LANGUAGES,
    },
    {
      name: "Arthur Thacher Boericke",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Richard Jerome Bogart",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Doris Margaret Bollen",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Ilya Bolotowsky",
      role: Role.FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Meta Bolotowsky",
      role: Role.FAMILY,
      subject: Subject.NA,
    },
    {
      name: "Elaine Marie Bonaparte",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Lyle Bonge",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Mollie Day Boring",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Lillian Boschen",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Derek Bovingdon",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Charles Pilkenton Boyce",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "John McKinley Boyd",
      role: Role.STUDENT,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Helen Elizabeth Boyden",
      role: Role.FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Roland William Boyden",
      role: Role.FACULTY,
      subject: Subject.HISTORY,
    },
    {
      name: "Betty Brach",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Nancy Louise Brager",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Robert Braidwood",
      role: Role.GUEST_FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Thomas Hobgood Brame",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Jagna Braunthal",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Addison Sargent Bray",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Aydelyn Breeskin",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Dorothy Breeskin",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Gloria Breeskin",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Josef Breitenbach",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Mary Jane Brennan",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Elizabeth Williams Brett",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Mary Virginia Brett",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Marcel Lajos Breuer",
      role: Role.STAFF,
      subject: Subject.ARCHITECTURE,
    },
    {
      name: "Jean Harlow Brewton",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Carol Brice",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Syril Bright",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Robert Brink",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Zoe Broadwin",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Ether Brodsky",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Albert Patrick Brody",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Warner F. Brook",
      role: Role.GUEST_FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Mary Brooks",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Thomas Ansel Brooks",
      role: Role.STUDENT,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Alan McLeod Brown",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Carolyn Brown",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Margaret Brown",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Richard Dodge Brown",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Sammuel Emmons Brown, Jr.",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Susan Brown",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "William Brown",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Richard Howard Brunell",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Mark Brunswick",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Matilda Brunswick",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Leila Evelyn Bullock",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Bainbridge Bunting",
      role: Role.UNKNOWN,
      subject: Subject.ARCHITECTURE,
    },
    {
      name: "Charles Burchard",
      role: Role.GUEST_FACULTY,
      subject: Subject.ARCHITECTURE,
    },
    {
      name: "Cora Burghard",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Alice Burnette",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Terence Frank Burns",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Katherine Talbott Burnside",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Margaret Burr",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Sue Kay Burton",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Will Burton",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Richard Lynn Bush-Brown",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Herbert Arthur Cable",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "George William Cadmus, Jr.",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "James Lewis Caldwell",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Harry Callahan",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Mary Callery",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Ellen Callman",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "John Harvey Fielder Campbell",
      role: Role.STUDENT,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Genevieve Campbell",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Gertrude Canivet",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "John Granville Cannon",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Jack Rutherford Campbell",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Kathryn Lucinda Carlisle",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Richard J. Carpenter",
      role: Role.FACULTY,
      subject: Subject.PHYSICAL_SCIENCES,
    },
    {
      name: "Cynthia Carr",
      role: Role.STUDENT,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Dorothy Tyron Carr",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Sheila Carr",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Sydney Hobart Carter",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Aurora Cassotta",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Louis J. Caviani",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Nick Cernovich",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "John Angus Chamberlain",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Marcia Russell Chamberlain",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Frances Chandler",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Margaret Patterson Chandler",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Mona Chanin",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Anne Howard Chapin",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Remy Charlip",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Jean Charlot",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Koon Hing Cheang",
      role: Role.GUEST,
      subject: Subject.FARM_AND_WORK_PROGRAM,
    },
    {
      name: "Kirill Chenkin",
      role: Role.FACULTY,
      subject: Subject.LANGUAGES,
    },
    {
      name: "Judith Sybil Chernoff",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Ralph Charles Chernoff",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Kenneth Chorley, Jr.",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Willa Skipwith Christoph",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Margaret MacDonald Clapp",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Jane Mary Clark",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Barbara Clement",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Carl Clement",
      role: Role.GUEST_FACULTY,
      subject: Subject.PHYSICAL_SCIENCES,
    },
    {
      name: "Stephen M. Clement",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Garland Aubrey Clements",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "John Wesley Coggins",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Frederic Cohen",
      role: Role.FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Dorothy Lawrence Cole",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Louise Cotelius Cole",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Margaret Burns Cole",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "William Morse Cole",
      role: Role.ADMINISTRATOR,
      subject: Subject.NA,
    },
    {
      name: "Beverly Preston Coleman",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "John Albert Collett",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Katherine M. Comfort",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Margaret Comins",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Carol Marie Cornstock",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Lily L. Converse",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Stanley Gordon Cooke",
      role: Role.STUDENT,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Frederic S. Coolidge",
      role: Role.GUEST,
      subject: Subject.FARM_AND_WORK_PROGRAM,
    },
    {
      name: "Donald Folsom Cooper",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Rebecca Cooper",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Esther Louise Coppock",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Dyckman Corbet",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Norma Jeanne Cormany",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Lewis Smith Core, Jr.",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "John William Corrington",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "David Corkran",
      role: Role.FACULTY,
      subject: Subject.HISTORY,
    },
    {
      name: "Elanor Marie Cosick",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Ernest Costa",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Joan Couch",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Mignon Couser",
      role: Role.GUEST_FACULTY,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Eleanore Mayfield Cover",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Curtiss Wishon Cowan",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Kendall Boice Cox",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Suzanne Catherine Cragin",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Isaac Doughten Cramer ",
      role: Role.STUDENT,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Lucien Horton Crane",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Elizabeth Crawford",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Robert Creeley",
      role: Role.FACULTY,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Lorraine Creesy",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Mary Irene Cullis",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Merce Cunningham",
      role: Role.GUEST_FACULTY,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Gwendolyn Currier",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Charles Birney Curry",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Thomas Scott-Swaggerty Cutshaw",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Victor D'Amico",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Maude Elizabeth Dabbs",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Donald Francis Daley",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Edward Dahlberg",
      role: Role.GUEST,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Annette Whitney Dall",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Thomas Sparrow Dalton, Jr.",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Marvin Daniels",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Alice Norene Dann",
      role: Role.STUDENT,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Philip Hyde Darling",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Janet Darnell",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Dorothy Darrel",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Judith Davidoff",
      role: Role.GUEST,
      subject: Subject.MUSIC,
    },
    {
      name: "Anne Davis",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "A Wolfe Davis",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Martha Winston Davis",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Norman Elihu Davis",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Guy Fielding Lewis Dawson",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Jose de Creeft",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Elaine de Coonning",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Willem de Kooning",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Agnes de Mille",
      role: Role.GUEST_FACULTY,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Robert Henry De Niro",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Howard Dearstyne",
      role: Role.GUEST_FACULTY,
      subject: Subject.ARCHITECTURE,
    },
    {
      name: "John Virgil Deaver",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Albert Donald DeBois",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Max Wilhelm Dehn",
      role: Role.FACULTY,
      subject: Subject.MATHEMATICS,
    },
    {
      name: "Toni Dehn",
      role: Role.FAMILY,
      subject: Subject.NA,
    },
    {
      name: "Etta Deikman",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Anita Rose Dencks",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Raymond Howard Derbeck",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Mary Lou Derryberry",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Stephen Lucas DeStaebler",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Francis A. Deamore",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Marion Deutsch",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Robert Edward DeVries",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Shirley Gene Dickson",
      role: Role.UNKNOWN,
      subject: Subject.MUSIC,
    },
    {
      name: "Henriette Diebold",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Robert T. Diffendal",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Abelle Dinkowitz",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Roxane Dinkowitz",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Shirley Dinkowitz",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Daniel Rhodes Dixon",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Bernadine Mary DiYulio",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Marjorie Joan Dodge",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Mary Elaine Dodge",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Naomi Doniger",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Edward Merton Dornn",
      role: Role.STUDENT,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Ian Gavin Douglas",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Margaret Dougherty",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Barbara Loines Dreier",
      role: Role.FAMILY,
      subject: Subject.NA,
    },
    {
      name: "Edward Dreier",
      role: Role.FAMILY,
      subject: Subject.NA,
    },
    {
      name: "Mark Dreier",
      role: Role.FAMILY,
      subject: Subject.NA,
    },
    {
      name: "Theodore Dreier",
      role: Role.ADMINISTRATOR,
      subject: Subject.MATHEMATICS,
    },
    {
      name: "Theodore Dreier, Jr.",
      role: Role.FAMILY,
      subject: Subject.NA,
    },
    {
      name: "William Dretzin",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Charles Dreyfus",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Francis Snow Drink",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Donald Edward Droll",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Francine du Plessix",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Larry Dubovik",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Jacqueline Shew Dunaway",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "James Weston Dunaway, II",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Robert Duncan",
      role: Role.GUEST_FACULTY,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Anne South Dunn",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Joseph Francis Dunn, Jr.",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Nancy Crawford Dunn",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Edward DuPuy",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Kendall Lathrop Durant",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Marjorie Dutton",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Hampton Oman Duxbury",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Duncan Dunbar Dwight",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Ellsworth Everett Dwight, Jr.",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Margaret Dwight",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Rachel Dwinell",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Rosalind Edith Dyer",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Bacia Edelman",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Stan Edelman",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Betty Edgar",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "David Edgar",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Patricia Edson",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Russell Edson",
      role: Role.STUDENT,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Irma Ehrman",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Marli Ehrman",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Paula Elise Eicke",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Alfred Einstein",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Frank Alan Eisendrath",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Agathe Maria Elink-Schuurman",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Eleftherakis Eleftherios",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Alexander Eliot",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Sidney Elkin",
      role: Role.GUEST,
      subject: Subject.FARM_AND_WORK_PROGRAM,
    },
    {
      name: "Harvey Brewster Elledge",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Margaret Emery",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Thomas Harrison Emmons",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Harriett Pinkston Engelhardt",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Elizabeth Estill",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Archibald Davis Evans, Jr.",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "John Evan Evans",
      role: Role.GUEST_FACULTY,
      subject: Subject.MATHEMATICS,
    },
    {
      name: "John Evarts",
      role: Role.FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Caroline Burton Ewing",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Louise Amory Ewell",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Jack Bradley Fahy",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Gustave Stephen Falk, Jr.",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Nathalie Jarvis Fallon",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Viola Anna Farber",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Nancy Farrell",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Mark Oakland Fax",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Alice Edgerton Fayen",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Anita Maria Fein",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Lyonel Feininger",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Arthur Fiedler",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Douglas J. Ferguson",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Mary Ferris",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Lorraine Feuer",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Alvin Few",
      role: Role.FAMILY,
      subject: Subject.NA,
    },
    {
      name: "Malrey Few",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Leo Elliot Fitchelberg",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "George Leroy Fick",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Ralph Thomas Field",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Ernestine Fields",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Robert Harold Fine",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Joseph Albert Fiore",
      role: Role.FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Dante Fiorillo",
      role: Role.FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Gabrielle Bermann Fischer",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Liselotte K. Fischer",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Laura Belle Fisher",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Mary Falconer Fitton",
      role: Role.STUDENT,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Jerome Sidney Flax",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Claire B. Florsheim",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Florence Judith Fogelson",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Charles Lewis Forberg",
      role: Role.STUDENT,
      subject: Subject.ARCHITECTURE,
    },
    {
      name: "Stephen Hathaway Forbes",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Clark Howell Foreman",
      role: Role.FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Mairi Foreman",
      role: Role.FAMILY,
      subject: Subject.NA,
    },
    {
      name: "Lillian Louise Forst",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Anne Dunn Foster",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Francis Foster",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Arthur Foster",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Lawrence Fox",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Roberta Fox",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Arlene Floy Franklin",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Phyllis Iris Franklin",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Charles Wertenbaker Freeman",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "John Middleton Freeman",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Alvin Z. Freeman",
      role: Role.FACULTY,
      subject: Subject.HISTORY,
    },
    {
      name: "Margaret W. Freeman",
      role: Role.FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Lorna Freedman",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Audrey Jane Freiheit",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "John R. P. French, Jr.",
      role: Role.FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Caroline French",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Sophie French",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Mimi French",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Miriam Deware French",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Nathaniel Stowers French",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Mary Ann Fretz",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Henry Fuchs",
      role: Role.GUEST_FACULTY,
      subject: Subject.LANGUAGES,
    },
    {
      name: "Oliver Freud",
      role: Role.GUEST_FACULTY,
      subject: Subject.PHYSICAL_SCIENCES,
    },
    {
      name: "Emily Frey",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Doris Jeanne Friedman",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Pearl F. Friedman",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Albert Friscia",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Wilma Gertrude Fuerstenberg",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Buckminster Fuller",
      role: Role.GUEST_FACULTY,
      subject: Subject.ARCHITECTURE,
    },
    {
      name: "Delores Almeta Fullman",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Helen Anne Furnas",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Rena Furlong",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Suzanne Gablik",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Marion Brenda Gair",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Harry Garber",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Kathleen Gardner",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Willie Gardner",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Mirande Roxane Geissbuhler",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Frederick Raymond Georgia",
      role: Role.FACULTY,
      subject: Subject.PHYSICAL_SCIENCES,
    },
    {
      name: "Lolita Georgia",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Elizabeth Cowles Gellhorn",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Clara Gerschkow",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Mrs. Walter Gethman",
      role: Role.GUEST_FACULTY,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Ruby Nina Gevertz",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Henry Gibson",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "John James Gifford",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Katherine Gilbert",
      role: Role.GUEST,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Denver Laredo Gillen",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Merrill Edmund Gillespie",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Errisnola Lombard Ginesi",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Sylvia Ann Girsh",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Elisabeth Gittlen",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Anne Gledhill",
      role: Role.GUEST,
      subject: Subject.FARM_AND_WORK_PROGRAM,
    },
    {
      name: "Rose Jean Glinberg",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Charles Godfrey",
      role: Role.STAFF,
      subject: Subject.FARM_AND_WORK_PROGRAM,
    },
    {
      name: "Eugene H. Godfrey",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Gordon G. Goehring",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Robert Marshall Goehring",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Lenore E. Gold",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Paul Goldberg",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Ruth Goldenberg",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Robert Myar Goldenson",
      role: Role.FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Frances Goldman",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Anna Goldowski",
      role: Role.FACULTY,
      subject: Subject.LANGUAGES,
    },
    {
      name: "Natasha Goldowski",
      role: Role.FACULTY,
      subject: Subject.PHYSICAL_SCIENCES,
    },
    {
      name: "Frederic Willius Goldsmith",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Janet Goldsmith",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Cornelia Goldsmith",
      role: Role.STUDENT,
      subject: Subject.ARCHITECTURE,
    },
    {
      name: "Elena Gomez",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Vera Ellen Gondos",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Jose M. Gonzales y Zayas",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Paul Goodman",
      role: Role.GUEST_FACULTY,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Jacques Gordon",
      role: Role.GUEST,
      subject: Subject.MUSIC,
    },
    {
      name: "Fritz Goro",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Richard Gothe",
      role: Role.FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Elaine Gottlieb",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Zoe Aileen Gould",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Lorrie Helen Goulet",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "John Pike Grady",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Joanna Graudan",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Nikolai Graudan",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Lily Koerber Grave",
      role: Role.GUEST,
      subject: Subject.SEMINAR_ON_AMERICA,
    },
    {
      name: "Judson Clark Gray",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Samuel H. Gray",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Jesse Dawes Green",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Sally Green",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Clement Greenberg",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Margaret Burtis Greene",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Balcomb Greene",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Maccabi Greenfield",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Hope Robson Greer",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Mary Molly Gregory",
      role: Role.FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Anne Lucy Wall Griffith",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Peter Grippe",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Lydia Sanderson Griscom",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Gloria Griscom",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Beate Eveliene Gropius",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Walter Gropius",
      role: Role.GUEST_FACULTY,
      subject: Subject.ARCHITECTURE,
    },
    {
      name: "Phyllis Sylvia Gross",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Sally Gross",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Donald Rae Grover",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Trude Guermonprez",
      role: Role.FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Otto Guth",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Haas, Irene",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Lawrence H. Haas",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Robert Haas",
      role: Role.GUEST,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Rudolph Haase",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "William Medford Hadaway, Jr.",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Gerda Sigrun Hagendorn",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Anne Hannelore Hahn",
      role: Role.GUEST,
      subject: Subject.FARM_AND_WORK_PROGRAM,
    },
    {
      name: "Maxine Haleff",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Elmer James Hall",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Hall, Lucile Lathrop",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Robert Tatnal Hall",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Halper, Lorna Blaine",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Alexander Halpern",
      role: Role.GUEST,
      subject: Subject.FARM_AND_WORK_PROGRAM,
    },
    {
      name: "Meyer William Halpern",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Alberta Halstead",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Shoji Hamada",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "K. Ann Hamann",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Sara Margaret Hamill",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Suzette Morton Hamill",
      role: Role.GUEST,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Alan Graham Hamilton",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "John William Hamilton",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Wilfrid Gardiner Hamlin",
      role: Role.STUDENT,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "William Francis Hanchett, Jr.",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Hanford, John Wadsworth",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Fritz Hansgirg",
      role: Role.FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Maria Hansgirg",
      role: Role.FACULTY,
      subject: Subject.LANGUAGES,
    },
    {
      name: "Grady Hardin",
      role: Role.GUEST_FACULTY,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Barbara Sayre Harmon",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Cliff Franklin Harmon",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Harvey Sample Harmon",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Anthony Hart Harrigan",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "John Arthur Harrigan",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Mary Rice Harrigan",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Wilbur Gordon Harrington",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Hazel Brister Harris",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Dora Harrison",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Lou Harrison",
      role: Role.FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Faith Odelle Hartwig",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Robert David Hartzler",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Lynn Hatcher",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Harold L. Hatt",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Dan Haugaard",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Erik Christian Haugaard",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Eleanor Hawk",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Robert Hawley",
      role: Role.STUDENT,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Roland Hayes",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Nancy Margaret Hays",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Stanley Edward Hebel",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Mark Hamilton Hedden",
      role: Role.STUDENT,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Richard Heib",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Peter Heinemann",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Ulrich Heinermann-Rufer",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Eva Heinetz",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Margaret Helburn",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Robert Cornelius Held",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Janet Chloe Heling",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Barbara Heller",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Joan Elizabeth Heller",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Robert Hellman",
      role: Role.GUEST_FACULTY,
      subject: Subject.LANGUAGES,
    },
    {
      name: "George Windsor Hendrickson",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "James Leo Herlihy",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Jacqueline Hermann",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Ruth Margaret Herschberger",
      role: Role.STUDENT,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Everit Albert Herter",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Gisela Kronenberg Herwitz",
      role: Role.STUDENT,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Ray Hess",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Jordan S. Hess",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Beatrice Heston",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Louise Hetherington",
      role: Role.FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Vollmer Hetherington",
      role: Role.FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Roger Mott Hewlett",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Hella Hilde Heyman",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Hill, Barbara Leigh",
      role: Role.STUDENT,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Peter Jack Robbins Hill",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Elizabeth Chalmers Hillard",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Fannie Hillsmith",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "William Wheeler Hinckley",
      role: Role.FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Theodore Christian Hines",
      role: Role.GUEST,
      subject: Subject.FARM_AND_WORK_PROGRAM,
    },
    {
      name: "Elisabeth Hirschfield",
      role: Role.GUEST,
      subject: Subject.SEMINAR_ON_AMERICA,
    },
    {
      name: "Fanny Hobart",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "David Jay Hochstein",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Allan C. Hoffman",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Anne Hoffman",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Emilio de Hofmannsthal",
      role: Role.GUEST,
      subject: Subject.SEMINAR_ON_AMERICA,
    },
    {
      name: "Maria de Hofmannsthal",
      role: Role.GUEST,
      subject: Subject.SEMINAR_ON_AMERICA,
    },
    {
      name: "Harry William Holl",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Beverly Elizabeth Holmes",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Tolly Wolf Holt",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "E. L. Holtzclaw",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Cynthia Homoire",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Marcia Evert Hopman",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Judith Horowitz",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Margaret Houston",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Howard, Tasker, Jr.",
      role: Role.GUEST_FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Barbara Hoyt",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Helen Huckel",
      role: Role.GUEST,
      subject: Subject.SEMINAR_ON_AMERICA,
    },
    {
      name: "Norma Huff",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Philip A. Hug",
      role: Role.GUEST,
      subject: Subject.SEMINAR_ON_AMERICA,
    },
    {
      name: "Mary Elizabeth Hughes",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Eunice Engle Hull",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Julia Margaret Hull",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Martha Elaine Hult",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Humphrey, Doris",
      role: Role.GUEST_FACULTY,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Martha Jane Elliot Hunt",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Priscilla Huntington",
      role: Role.GUEST,
      subject: Subject.SEMINAR_ON_AMERICA,
    },
    {
      name: "Frank Herbert Hursch, Jr.",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Beatrice Huss",
      role: Role.FAMILY,
      subject: Subject.NA,
    },
    {
      name: "Wesley Huss",
      role: Role.FACULTY,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Ruth Hibbs Hyland",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Robert Imlay",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Sydney Irwin",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Robert Louis Isaacson",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Sondra Carol Israel",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Alice Winslow Jackson",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Luther Porter Jackson, Jr.",
      role: Role.STUDENT,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Margaret Jackson",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Ronald Burton Jackson",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Tommy Jackson",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Leslie Jacobs",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Henry Hastings Jaeger",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Elizabeth Jalowetz",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Heinrich Jalowetz",
      role: Role.FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Johanna Jalowetz",
      role: Role.FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Ann Louise Jamieson",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Edward Boardman Jamieson",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Norman Dickinson Jamieson",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Ione Bertha Janssen",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Dorothy Maud Jeffery",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Edward North Jenks",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Robert Darrah Jenks",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Elizabeth Schmitt Jennerjahn",
      role: Role.FACULTY,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Warren Paul Jennerjahn",
      role: Role.FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Peter Joseph Jepsen",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Anna Christina Jessen",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Susan John",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Bruce Sterling Johns",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Chandler Winslow Johnson",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Doris Martha Johnson",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Raymond Edward Johnson",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Jones, Donald Clinton",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Doyle Jones",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Margaret Seymour Jones",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Jean Elizabeth Jordan",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Richard Dexter Jordan",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "William Wolff Joseph",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Fenia Josefowitz Josephs",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Phyllis Sonya Josephs",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Edmund Lewis Jucevic",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Frieda Julian",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Peter Julian",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Lore Kadden",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Elsa Kahl",
      role: Role.FACULTY,
      subject: Subject.PHYSICAL_SCIENCES,
    },
    {
      name: "Erich Kahler",
      role: Role.GUEST_FACULTY,
      subject: Subject.HISTORY,
    },
    {
      name: "Betty Ann Kaiser",
      role: Role.STUDENT,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Clemens Kalischer",
      role: Role.GUEST,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Victor Kalos",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Maria Kant-Glaser",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Harry Kantor",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Vivian Kantor",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Marjorie R. Karlin",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Karen Karnes",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Bernard Dornin Karp",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "John Joseph Kasik",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Leslie George Katz",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Hugo Kauder",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Edgar, Jr. Kaufmann",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Marian Carol Kaufmann",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Florence Kathryn Kawa",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Edwin Henry Kaye",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Alfred Kazin",
      role: Role.GUEST_FACULTY,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Kenneth Howard Keefer",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Joan Elizabeth Keiser",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "John A.H. Keith",
      role: Role.FACULTY,
      subject: Subject.LANGUAGES,
    },
    {
      name: "Gail FelixKeith-Jones",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Elizabeth Kellogg",
      role: Role.GUEST_FACULTY,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Elizabeth Ferris Kelley",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Alex Kemeny",
      role: Role.STUDENT,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Margaret F. Kennard",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Ernest Everett Kennedy",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Evelyn Bullock Kennedy",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Carl Peter Kent",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Charles Staniford Kessler",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Basil H. King",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "James Gore King, Jr.",
      role: Role.FACULTY,
      subject: Subject.HISTORY,
    },
    {
      name: "Jane King",
      role: Role.GUEST_FACULTY,
      subject: Subject.FARM_AND_WORK_PROGRAM,
    },
    {
      name: "Joseph Jerone King",
      role: Role.GUEST_FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Galway Mills Kinnell",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Sarah Kitchen",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Virginia Smith Kitzmiller",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Jacob Klein",
      role: Role.GUEST_FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Robert Klein",
      role: Role.GUEST_FACULTY,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Karin Renate Klepper",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Franz Kline",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Joanna Kline",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Stava Klipper",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Lieler Hedwig Knepper",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Irving Knickerbocker",
      role: Role.FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Jane Knowles",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Alice Jane Knox",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Alfred Lawrence Kocher",
      role: Role.FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Margaret Kocher",
      role: Role.FAMILY,
      subject: Subject.NA,
    },
    {
      name: "Rudolf Kolisch",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Arthur Joseph Komar",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Edgar Theodore Konsberg",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Ada Gladys Kopetz",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Anatole Kopp",
      role: Role.GUEST_FACULTY,
      subject: Subject.ARCHITECTURE,
    },
    {
      name: "Marianne Bjerke Kopp",
      role: Role.GUEST_FACULTY,
      subject: Subject.MATHEMATICS,
    },
    {
      name: "Lucille Krasne",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Irwin Kremen",
      role: Role.STUDENT,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Mary Byrd Kremer",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Krenek, Ernst",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Mary Kriger",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Leo Krikorian",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Gisella Jeanette Kronenberg",
      role: Role.STUDENT,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Felix Thomas Krowinski",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Ruthabeth Krueger",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Helen E. Kruger",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Robert Hoch Kubie",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Margot Kugelman",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Erma Kulan",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Elisabeth Anne Kulka",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Frances Elizabeth Kuntz",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Annarrah Kurtz",
      role: Role.GUEST_FACULTY,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Kenneth Kurtz",
      role: Role.FACULTY,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Rudolph Paul Kutsche, Jr.",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Michael Kuttner",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Timothy P. Lafarge",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Beatrice Pitney Lamb",
      role: Role.GUEST_FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Jerry Landis",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Anita Landreau",
      role: Role.FAMILY,
      subject: Subject.NA,
    },
    {
      name: "Anthony Landreau",
      role: Role.FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Marvin Louis Lane",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Charles LaNoue Langley, Jr.",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "William Albert Lanier",
      role: Role.STUDENT,
      subject: Subject.ARCHITECTURE,
    },
    {
      name: "Monika Lanyi-Mann",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Gloria Lolita Larsen",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Lois Wilson Lautner",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Gwendolyn Knight Lawrence",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Jacob Lawrence",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Bernard Leach",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Barbara Odette Leeb",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Millicent Leeds",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Ingeborg Leese",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Paula Lenchner",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Anna Lenhart",
      role: Role.GUEST,
      subject: Subject.FARM_AND_WORK_PROGRAM,
    },
    {
      name: "Peter B. Lenhart",
      role: Role.GUEST,
      subject: Subject.GENERAL,
    },
    {
      name: "Mary J. Leo",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Robert Stanley Leon",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Fernando Leon",
      role: Role.STUDENT,
      subject: Subject.LANGUAGES,
    },
    {
      name: "Winifred Leon",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Henry Leonard",
      role: Role.GUEST,
      subject: Subject.SEMINAR_ON_AMERICA,
    },
    {
      name: "Lotte Leonard",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Thomas Lincoln Leonard",
      role: Role.GUEST,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Paul Leser",
      role: Role.FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "James Findlay Leven",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Albert William Levi",
      role: Role.FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Conalee Levine",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Josephine Naomi Levine",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Wilhelm Levinger",
      role: Role.GUEST,
      subject: Subject.SEMINAR_ON_AMERICA,
    },
    {
      name: "Ruth Levinson",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Andre Lazare Levy",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Jerrold Edgar Levy",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Otis Levy",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Dorothy S. Lewis",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Glenn C. Lewis",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Glenn Edwin Lewis",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "John Guy Lewis",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Ursula Lewis",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Suefong Li",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Edith Louise Lichtenberg",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Harvey Lichtenstein",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Norma Lieberman",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Klaus Liepmann",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Julia Rosalie Light",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Marion Ramona Lindblade",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Alan Crawford Lindsay",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Jeffrey Lindsay",
      role: Role.STUDENT,
      subject: Subject.ARCHITECTURE,
    },
    {
      name: "Charles Halsey Lindsley",
      role: Role.FACULTY,
      subject: Subject.PHYSICAL_SCIENCES,
    },
    {
      name: "Frances Lindsley",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Leo Lionni",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Lore Lindenfeld",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Louise Lippold",
      role: Role.UNKNOWN,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Richard Lippold",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Lillian Lipsett",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Andrew Winston Lipsey",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Rubye Marion Johnston Lipsey",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Richard Lischer",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Katherine Litz",
      role: Role.GUEST_FACULTY,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Helen Livingston",
      role: Role.GUEST_FACULTY,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Francesca Livermore",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Richard Harrison Lockwood",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Sarah Wisner Loomis",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Jean Madeline Loop",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Irene Lott",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Ralph Reed Lounsbury",
      role: Role.FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Helen Lounsbury",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Roger Vernon Lovelace",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Ruth Jane Lovett",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Edward Elias Lowinsky",
      role: Role.FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Gretel Lowinsky",
      role: Role.FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Sheila Lubin",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Irwin Arnold Lubroth",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Harold Springer Lund",
      role: Role.GUEST,
      subject: Subject.FARM_AND_WORK_PROGRAM,
    },
    {
      name: "James Marshall Luntz",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Robert A. Luntz",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Alvin Lustig",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Harriette Lyford",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Mary Ruth Lyford",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Patricia Gay Lynch",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Lytle, Gertrude",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Lytle, Jessie",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Lytle, Nathaniel",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Leslie Harry MacEwen",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Trueman Sulzer MacHenry",
      role: Role.GUEST_FACULTY,
      subject: Subject.MATHEMATICS,
    },
    {
      name: "Raymond F. Maciejczyk",
      role: Role.STUDENT,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Warren MacKenzie",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Ann MacKinnon",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Elvine Richard Magruder",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Patricia Elaine Maguire",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Kras Maino",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Bernard Joseph Malek",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Robert Samuel Malkin",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "James Leonard Malloy",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Etta Diane Mandelbaum",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Judith Vivian Mandelbaum",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Marlene Manes",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Nancy Carolyn Manes",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Anne Gilbert Mangold",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Frederick Rogers Mangold",
      role: Role.FACULTY,
      subject: Subject.LANGUAGES,
    },
    {
      name: "Isabel Hollister Mangold",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Joseph C. Manulik",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Louis Fuller Marbury",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Benjamin Marconitz",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Zola Carl Marcus",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Robert Humphrey Marden",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Maryrose Margaretten",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Jene Alif Markoff",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Mendez Adolph Marks, Jr.",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Marley, John",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Lucian Charles Marquis",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Laddie Marshack",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Bela John Martin",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Denise Nina Martin",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "George Martin",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Joseph Walford Martin",
      role: Role.FACULTY,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Marcella Eliott Martin",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Sylvesta Martin",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Ysidore Martin",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Martinson, Joan",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Martz, Karl",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Marx, Josef",
      role: Role.FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Maser, Moreen",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Masurovsky, Gregory",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Paul Mattern",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Dorothy Mattison",
      role: Role.GUEST_FACULTY,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Gorman E. Mattison",
      role: Role.FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Laurel Rose Mattlin",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Jean Helen Maurice",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Sally Ballard Maurice",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Aristide Mavridis",
      role: Role.GUEST,
      subject: Subject.FARM_AND_WORK_PROGRAM,
    },
    {
      name: "Anne Mayer",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Franziska Mayer",
      role: Role.FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Jane Frances Mayhall",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Dorothy Elizabeth Mayhew",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Robert Linne McAllester",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Marie G. McCall",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "John H. McCandless",
      role: Role.FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Alice Maria McCanna",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "William McCleery",
      role: Role.GUEST,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "James Joseph McClure",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Hugh Norman McFadden",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "William Douglas McGee",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Joanne Rae McGee",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "John Gary McGraw",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Robert Graham McGuire",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "William Robert McKee",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Arlyn Cecilia McKenna",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Virginia Alexa McLane",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "McLaughlin, William Richard",
      role: Role.GUEST_FACULTY,
      subject: Subject.FARM_AND_WORK_PROGRAM,
    },
    {
      name: "Martha Ella McMillan",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Sue Alice McNeil",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "William McNeil",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Archie Mabrey McWilliams",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Bess Miller",
      role: Role.FAMILY,
      subject: Subject.NA,
    },
    {
      name: "Shirley Ruth Medcalf",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Virginia Isabelle Meek",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Jo Anne Melscher",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Amy G. Mendelson",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Marilyn Marie Menger",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Elliot Merrick",
      role: Role.GUEST_FACULTY,
      subject: Subject.ENGLISH_AND_WRITING,
    },
    {
      name: "Robert Joseph Metzger",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Maricelle Meyer",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Margaret Elizabeth Midelfort",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Adele Mildred Milhendler",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Doris Harris Miller",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Herbert Adolphus Miller",
      role: Role.FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Mary Ellan Miller",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Mary Jane Miller",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Nancy Hamblett Miller",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Quentin Kyles Miller",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Ruth Caroline Miller",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "William Blackall Miller",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Louise Minster",
      role: Role.STUDENT,
      subject: Subject.PERFORMANCE_ART,
    },
    {
      name: "Arthur Herman Minters",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Abraham Mishkind",
      role: Role.GUEST_FACULTY,
      subject: Subject.MUSIC,
    },
    {
      name: "Marion Mitchell",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Mary Lou Mitchell",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Donald Mixon",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Teri Dick Modlin",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Anna Moellenhoff",
      role: Role.FACULTY,
      subject: Subject.PHYSICAL_SCIENCES,
    },
    {
      name: "Fritz Moellenhoff",
      role: Role.FACULTY,
      subject: Subject.SOCIAL_SCIENCES,
    },
    {
      name: "Marjorie Borden Moench",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Clifford Moles",
      role: Role.FACULTY,
      subject: Subject.FARM_AND_WORK_PROGRAM,
    },
    {
      name: "Shirley Moles",
      role: Role.FAMILY,
      subject: Subject.NA,
    },
    {
      name: "Claude Philippe Monteux",
      role: Role.STUDENT,
      subject: Subject.MUSIC,
    },
    {
      name: "Frances Moore",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Susan Moore",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Emma Gladys Mora",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Margit J. Morand",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Barbara Morgan",
      role: Role.GUEST_FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Charles Taylor Morey",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Jesse Elbert Morgan",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Hilda Morley",
      role: Role.GUEST_FACULTY,
      subject: Subject.LANGUAGES,
    },
    {
      name: "Grace Eloise Morrell",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Alexander Beauregard Morse",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Deborah Charlotte Moscowitz",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Elizabeth Alice Moshier",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Martin Stephen Moskof",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Elizabeth Mosley",
      role: Role.STAFF,
      subject: Subject.NA,
    },
    {
      name: "Esther Myra Moss",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Roy Young Moss",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Robert Motherwell",
      role: Role.FACULTY,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Marie Marton Mulholland",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Roderick Louis Mulholland",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Marie Murelius",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Dan Tiernan Murphy",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Dave James Murphy",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Lelia Mae Murphy",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "Robert Burbank Murphy",
      role: Role.STUDENT,
      subject: Subject.GENERAL,
    },
    {
      name: "Faith Cornish Murray",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Jane Murray",
      role: Role.GUEST,
      subject: Subject.FARM_AND_WORK_PROGRAM,
    },
    {
      name: "Helen Musselman",
      role: Role.UNKNOWN,
      subject: Subject.UNKNOWN,
    },
    {
      name: "A. Nicholas Muzenic",
      role: Role.STUDENT,
      subject: Subject.ART_AND_CRAFT,
    },
    {
      name: "Beatrice Muriel Myers",
      role: Role.STUDENT,
      subject: Subject.SOCIAL_SCIENCES,
    },
  ];
}
