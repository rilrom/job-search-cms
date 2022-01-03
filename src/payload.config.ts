import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Jobs from './collections/Jobs';

export default buildConfig({
  serverURL: process.env.SERVER_URL,
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Jobs,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
});
