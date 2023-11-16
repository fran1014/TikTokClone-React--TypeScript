/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config,{isServer})=>{
        //Add a rule to handle the canvas.node binary moddule 
        config.module.rules.push({test:/\.node$/,use: 'raw-loader'})

        //Exclude canvas from being processed by Next.js in the browser
        if(!isServer) config.externals.push('');
        return config;
    }
}

module.exports = nextConfig
