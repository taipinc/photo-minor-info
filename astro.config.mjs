import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
const base = process.env.BASE_PATH || '/photo-minor-info';
// Keep public image paths valid on both the homepage and the archive.
function publicImagePaths() {
  return tree => {
    function visit(node) {
      if (node.type === 'image' && typeof node.url === 'string') {
        const src = node.url.replace(/^\.\//, '');
        if (src.startsWith('images/')) node.url = `${base.replace(/\/$/, '')}/${src}`;
      }
      node.children?.forEach(visit);
    }
    visit(tree);
  };
}
export default defineConfig({
  site: process.env.SITE_URL || 'https://taipinc.github.io',
  base,
  markdown: { processor: unified({ remarkPlugins: [publicImagePaths] }) },
  output: 'static',
  trailingSlash: 'always',
});
