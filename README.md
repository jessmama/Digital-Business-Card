# Digital Business Card

### Demo Site

https://digital-business-card-vite.netlify.app/

### Use Vite:

1. start the development server:
   `npm install`
   `npm run dev`
2. Building the application for production:
   `npm run build`
   The build command should create a new dist folder in your base directory which will contain the files needed to serve your static site.
3. Manual Netlify Deployment:
   Drop the “dist” folder which got created after running the “npm run build” command and you are good to go.
4. Use Netlify CLI:
   `npm install -g netlify-cli`
   `ntl init`

Manual Deployment using Netlify CLI:
`ntl deploy`

If everything looks good on your draft URL, deploy it to your main site URL with the --prod flag:
`ntl deploy --prod`

5. Git and Github as version control in Netlify CLI:
   `netlify init`

Manual Deployment using Netlify CLI:
`ntl deploy`

If everything looks good on your draft URL, deploy it to your main site URL with the --prod flag:
`ntl deploy --prod`
