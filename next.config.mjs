/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "media.api-sports.io",
                port: "",
                pathname: "/american-football/**"
            },
            {
                protocol: "https",
                hostname: "a.espncdn.com",
                port: "",
                pathname: "/combiner/**"
            },
            {
                protocol: "https",
                hostname: "media.bleacherreport.com",
                port: "",
                pathname: "/image/**"
            }
        ]
    }
};

export default nextConfig;
