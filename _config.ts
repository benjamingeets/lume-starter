import lume from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";
import metas from "lume/plugins/metas.ts";
import robots from "lume/plugins/robots.ts";
import sitemap from "lume/plugins/sitemap.ts";
import lightningCss from "lume/plugins/lightningcss.ts";

const site = lume({
    location: new URL('https://example.org')
});

site.use(esbuild());
site.use(metas());
site.use(robots());
site.use(lightningCss({
    includes:'_styles'
}));
site.use(sitemap());

site.copy('_public','.')
site.copy('_api')
site.copy('.htaccess', '.htaccess')

export default site;