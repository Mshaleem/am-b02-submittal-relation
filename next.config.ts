import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: [
    '@trimble-oss/moduswebcomponents',
    '@trimble-oss/moduswebcomponents-react',
  ],
  agentRules: false,
};

export default nextConfig;
