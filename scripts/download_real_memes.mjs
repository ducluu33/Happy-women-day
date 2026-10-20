import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

mkdirSync("img/memes", { recursive: true });

const realMemes = [
  { id: 1, name: "Leonardo Cheers", url: "https://i.imgflip.com/39t1o.jpg", ext: "jpg" },
  { id: 2, name: "Woman Yelling At Cat", url: "https://i.imgflip.com/345v97.jpg", ext: "jpg" },
  { id: 3, name: "This Is Fine", url: "https://i.imgflip.com/wxica.jpg", ext: "jpg" },
  { id: 4, name: "Disaster Girl", url: "https://i.imgflip.com/23ls.jpg", ext: "jpg" },
  { id: 5, name: "Distracted Boyfriend", url: "https://i.imgflip.com/1ur9b0.jpg", ext: "jpg" },
  { id: 6, name: "Tuxedo Winnie The Pooh", url: "https://i.imgflip.com/2ybua0.png", ext: "png" },
  { id: 7, name: "Buff Doge vs. Cheems", url: "https://i.imgflip.com/43a45p.png", ext: "png" },
  { id: 8, name: "Sleeping Shaq", url: "https://i.imgflip.com/1nck6k.jpg", ext: "jpg" },
  { id: 9, name: "Hide The Pain Harold", url: "https://i.imgflip.com/gk5el.jpg", ext: "jpg" },
  { id: 10, name: "Success Kid", url: "https://i.imgflip.com/1bhk.jpg", ext: "jpg" },
  { id: 11, name: "Laughing Leo", url: "https://i.imgflip.com/4acd7j.png", ext: "png" },
  { id: 12, name: "Drake Hotline Bling", url: "https://i.imgflip.com/30b1gx.jpg", ext: "jpg" },
  { id: 13, name: "Oprah You Get A", url: "https://i.imgflip.com/gtj5t.jpg", ext: "jpg" },
  { id: 14, name: "Monkey Puppet", url: "https://i.imgflip.com/2gnnjh.jpg", ext: "jpg" },
  { id: 15, name: "Absolute Cinema", url: "https://i.imgflip.com/8d317n.png", ext: "png" },
  { id: 16, name: "Trade Offer", url: "https://i.imgflip.com/54hjww.jpg", ext: "jpg" },
  { id: 17, name: "Left Exit 12 Off Ramp", url: "https://i.imgflip.com/22bdq6.jpg", ext: "jpg" },
  { id: 18, name: "Roll Safe Think About It", url: "https://i.imgflip.com/1h7in3.jpg", ext: "jpg" },
  { id: 19, name: "Epic Handshake", url: "https://i.imgflip.com/28j0te.jpg", ext: "jpg" },
  { id: 20, name: "Expanding Brain", url: "https://i.imgflip.com/1jwhww.jpg", ext: "jpg" },
];

async function downloadMemes() {
  console.log("Starting download of 20 iconic internet memes...");
  for (const item of realMemes) {
    const filename = `meme${item.id}.${item.ext}`;
    const dest = join("img/memes", filename);
    try {
      const res = await fetch(item.url, {
        headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" }
      });
      if (!res.ok) {
        throw new Error(`HTTP ${res.status} for ${item.url}`);
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      writeFileSync(dest, buffer);
      console.log(`[✓] Downloaded #${item.id}: ${item.name} (${buffer.length} bytes) -> ${filename}`);
    } catch (err) {
      console.error(`[✗] Failed to download #${item.id} (${item.name}):`, err.message);
    }
  }
  console.log("Completed meme download!");
}

downloadMemes();
