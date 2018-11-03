import path from 'path';
const dev = path.resolve(__dirname, '../../../_develop');
const pre = path.resolve(__dirname, '../../../_preview');
//const dist = path.resolve(__dirname, '../../../_dist');
export default {
  develop: {
    cssSrc: `${dev}/css/**/!(_)*.styl`,
    pugSrc: `${dev}/html/index.pug`,
    watchPug: `${dev}/html/index.pug`,
    watchCss: `${dev}/css/**/*.styl`,
    cssOutput: `${pre}/css`,
    pugOutput: `${pre}`,
    staticsSrc: `${dev}/assets/**/*.*`,
    staticsOutput: `${pre}/assets`,
  }
}