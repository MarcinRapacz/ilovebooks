import Html from "../../components/Html";

const Posts = (props) => {
  return (
    <div>
      <Html html={props.html} />
    </div>
  );
};

// Get single data
export async function getStaticProps({ params }) {
  const { attributes, html } = await import(
    `../../content/posts/${params.mdFileName}.md`
  );

  return {
    props: { attributes, html },
  };
}

// Set available routers
export async function getStaticPaths() {
  const fs = require("fs");
  const path = `${process.cwd()}/content/posts`;
  const files = fs.readdirSync(path, "utf-8");
  const markdownFileNames = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""))
    .map((file) => `/posts/${file}`);
  const paths = markdownFileNames;

  return { paths, fallback: false };
}

export default Posts;
