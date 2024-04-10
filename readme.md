This page understands document and heading all these things because of browser as browser brings all these methods to code.

But for react, its not inbuilt into browser so to bring react to code we need to include it using cdn.

All applicationa having so many files need to be bundled/compresed to be able to run in production.

Even, create-react-app be default uses webpack as bundler. For now, in this application we will use Parcel as bundler.

Note: There are two kinda of dependencies in any application- dev dependencies and normal dependencies. Dev dependencies are only required for development mode while the latter is used in prod too. 

# Parcel [It is a beast🐻]
 - Creates a dev build
 - Creates a local server
 - HMR- Hot Module Replacement
 - Uses file watching algorithm to implement HMR. This algorithm is written in C++
 - Caching- faster builds. Uses .parcel-cache file for this
 - Image Optimization
 - Minify and bundle code in production
 - Compress the code