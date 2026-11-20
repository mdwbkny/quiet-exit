# Quiet Exit

A self-contained early-access landing page for Quiet Exit. Edit copy in index.html, colors and layout in styles.css, and the signup endpoint in waitlist.js. There is no build step.

## Turn on early access

1. Create a form at [Formspree](https://formspree.io/) and set the destination inbox.
2. Copy its endpoint, such as `https://formspree.io/f/YOUR_FORM_ID`, into the first setting in `waitlist.js`. Use the public endpoint only. Keep passwords and API keys out of GitHub.
3. Submit a test signup from the deployed site. Check both the on-page confirmation and the entry in Formspree. Enable spam filtering and review the provider’s settings before sharing the link.
4. The button stays disabled until you add an endpoint. There are no document uploads or payments. The provider receives name, email, position count, and ownership type.

## Publish on GitHub Pages

1. Create a public repository named `quiet-exit` and add the extracted files directly at its root. Keep `.nojekyll` if you use Git locally.
2. Go to **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, then choose **main** and **/(root)**. Save and open the address GitHub shows once the deployment finishes.
3. To preview locally, open index.html or run `python3 -m http.server 8000` from the project folder and visit `http://localhost:8000`.

[GitHub Pages publishing instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Connect getquietexit.com

1. Verify domain ownership in your GitHub account’s Pages settings and enter `getquietexit.com` as the custom domain in the repository’s Pages settings.
2. At your DNS provider, follow GitHub’s apex-domain instructions for `getquietexit.com`. If using A records, copy the current GitHub Pages IPs from the documentation below. For the www version, add a `www` CNAME pointing to `YOUR-GITHUB-USERNAME.github.io` without a repository path.
3. When the DNS check passes, enable **Enforce HTTPS** and test both addresses.

[GitHub custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
