/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:"localhost",
                pathname:"*",
                port:"3000",
                protocol:'http',
            }
        ]
    }
};

export default nextConfig;

// module.exports = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'assets.example.com',
//           port: '',
//           pathname: '/account123/**',
//         },
//       ],
//     },
//   }