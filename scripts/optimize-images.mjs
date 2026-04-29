import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const workspaceRoot = process.cwd();

const jobs = [
  {
    input: path.join(workspaceRoot, "src", "assets", "my_img.png"),
    outputs: [
      {
        format: "webp",
        filename: "my_img.webp",
        width: 900,
        quality: 80,
      },
      {
        format: "avif",
        filename: "my_img.avif",
        width: 900,
        quality: 50,
      },
    ],
  },
];

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const results = [];

  for (const job of jobs) {
    const inputExists = await fileExists(job.input);
    if (!inputExists) {
      console.warn(`Skipping (missing): ${job.input}`);
      continue;
    }

    for (const out of job.outputs) {
      const outputPath = path.join(path.dirname(job.input), out.filename);
      const image = sharp(job.input, { failOn: "none" }).resize({
        width: out.width,
        withoutEnlargement: true,
      });

      if (out.format === "webp") {
        await image.webp({ quality: out.quality }).toFile(outputPath);
      } else if (out.format === "avif") {
        await image.avif({ quality: out.quality }).toFile(outputPath);
      } else {
        throw new Error(`Unsupported format: ${out.format}`);
      }

      results.push({ input: job.input, output: outputPath });
    }
  }

  if (results.length === 0) {
    console.log("No images optimized.");
    return;
  }

  console.log("Optimized images:");
  for (const r of results) {
    console.log(`- ${path.relative(workspaceRoot, r.output)}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

