import config from './webpack.config.base';
import path from 'path';
config['mode'] = 'development';
config.output.path = path.resolve(__dirname, '../../_preview');
export default config;