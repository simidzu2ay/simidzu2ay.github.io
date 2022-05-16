import { minify } from 'html-minifier';
import { prerendering } from '$app/env';
import type { Handle } from '@sveltejs/kit';
 
const minification_options = {
  collapseBooleanAttributes: true,
  collapseWhitespace: true,
  conservativeCollapse: true,
  decodeEntities: true,
  html5: true,
  // Done by tailwind
  minifyCSS: false,
  minifyJS: false,
  removeAttributeQuotes: true,
  removeComments: false,
  removeOptionalTags: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
};
 
export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);
 
  if (prerendering && response.headers.get('content-type') === 'text/html') {
    return new Response(minify(await response.text(), minification_options), {
      status: response.status,
      headers: response.headers
    });
  }
 
  return response;
}