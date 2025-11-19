# Deploy Guide - Texfy on Vercel

Complete guide to deploy the Texfy landing page to Vercel.

## Prerequisites

- [x] GitHub account
- [x] Vercel account (sign up at https://vercel.com)
- [x] Gmail account with App Password configured
- [x] Code pushed to a GitHub repository

## Step 1: Configure Gmail App Password

The application sends emails via Gmail SMTP. You need a Gmail App Password (not your regular password).

### Creating Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security**
3. Enable **2-Step Verification** (required for App Passwords)
4. Go to **App Passwords** (https://myaccount.google.com/apppasswords)
5. Select app: **Mail**
6. Select device: **Other (Custom name)** - enter "Texfy Vercel"
7. Click **Generate**
8. Copy the 16-character password (format: `xxxx xxxx xxxx xxxx`)
9. **Save this password securely** - you'll need it for Vercel environment variables

### Alternative: Use a Dedicated Email Account

For production, consider creating a dedicated Gmail account for sending emails:
- Example: `texfy.contato@gmail.com`
- This separates personal email from application email
- Easier to manage and monitor

## Step 2: Push Code to GitHub

If you haven't already:

```bash
git init
git add .
git commit -m "Initial commit - Vercel-ready"
git remote add origin https://github.com/YOUR_USERNAME/texfy.git
git push -u origin main
```

## Step 3: Import Project to Vercel

### Via Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Click **Add New...** → **Project**
3. Import your GitHub repository
4. Vercel will auto-detect Next.js
5. **Do NOT deploy yet** - configure environment variables first

### Project Settings

- **Framework Preset:** Next.js (auto-detected)
- **Root Directory:** `./` (default)
- **Build Command:** `npm run build` (auto-detected)
- **Output Directory:** `.next` (auto-detected)
- **Install Command:** `npm install` (auto-detected)

## Step 4: Configure Environment Variables

Before deploying, add these environment variables in Vercel:

1. In your project settings, go to **Settings** → **Environment Variables**
2. Add the following variables:

### Required Variables

| Variable Name | Value | Example |
|--------------|-------|---------|
| `EMAIL_USER` | Your Gmail address | `texfy.contato@gmail.com` |
| `EMAIL_PASS` | Your Gmail App Password | `abcd efgh ijkl mnop` |

### Configuration

- **Environment:** Production, Preview, Development (select all)
- Click **Save** after adding each variable

## Step 5: Deploy

1. Click **Deploy** button
2. Wait 1-2 minutes for build to complete
3. Vercel will provide a deployment URL: `https://texfy-xxx.vercel.app`

## Step 6: Test Deployment

1. Visit your deployment URL
2. Navigate to the waitlist form
3. Fill out the form with test data
4. Submit the form
5. Check email inbox at `contatovhg@hotmail.com`
6. Verify email was received with correct formatting

### Testing Checklist

- [ ] Page loads correctly
- [ ] Animations work smoothly
- [ ] Form validation works (try invalid email)
- [ ] Form submission succeeds
- [ ] Email is received at `contatovhg@hotmail.com`
- [ ] Email formatting looks professional
- [ ] Mobile responsive design works

## Step 7: Configure Custom Domain (Optional)

### Add Domain to Vercel

1. Go to **Settings** → **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `texfy.com.br` or `www.texfy.com.br`)
4. Follow Vercel's DNS configuration instructions

### DNS Configuration

Add these DNS records at your domain registrar:

**For root domain (texfy.com.br):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

Wait 5-60 minutes for DNS propagation.

## Step 8: Continuous Deployment

Vercel automatically deploys:
- **Production:** Every push to `main` branch → `https://texfy.com` (your domain)
- **Preview:** Every push to other branches → `https://texfy-git-branch.vercel.app`
- **Pull Requests:** Automatic preview deployments for each PR

### Deployment Workflow

```bash
# Make changes
git add .
git commit -m "Update landing page"
git push origin main

# Vercel automatically deploys in ~1-2 minutes
```

## Monitoring and Logs

### Vercel Dashboard

- **Deployments:** View all deployment history and status
- **Logs:** Real-time function logs for debugging
- **Analytics:** Traffic and performance metrics
- **Speed Insights:** Core Web Vitals monitoring

### Accessing Logs

1. Go to your project in Vercel dashboard
2. Click on a deployment
3. Go to **Functions** tab
4. Click on any API route to see logs
5. Look for `/api/waitlist` logs to debug email issues

## Troubleshooting

### Email Not Sending

**Problem:** Form submits but email not received

**Solutions:**

1. **Check Environment Variables**
   ```bash
   # In Vercel dashboard
   Settings → Environment Variables
   Verify EMAIL_USER and EMAIL_PASS are set correctly
   ```

2. **Verify Gmail App Password**
   - Must be 16 characters
   - No spaces (or spaces between 4-char groups)
   - Must have 2FA enabled on Gmail account

3. **Check Gmail Security**
   - Go to https://myaccount.google.com/security
   - Check for "Suspicious sign-in prevented" alerts
   - Allow access if blocked

4. **Check Function Logs**
   - Go to Vercel dashboard → Functions → `/api/waitlist`
   - Look for error messages
   - Common errors:
     - `Invalid login` = wrong email or password
     - `Timeout` = Gmail SMTP blocked connection

5. **Test Gmail Credentials Locally**
   ```bash
   # Run locally with same credentials
   npm run dev
   # Submit form and check console logs
   ```

### Build Failures

**Problem:** Deployment fails during build

**Solutions:**

1. **Check Build Logs**
   - View detailed build logs in Vercel dashboard
   - Look for TypeScript or ESLint errors

2. **Test Build Locally**
   ```bash
   npm run build
   # Fix any errors that appear
   ```

3. **Verify Dependencies**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

### Performance Issues

**Problem:** Slow page load times

**Solutions:**

1. **Check Vercel Region**
   - Verify `vercel.json` has `"regions": ["gru1"]` for Brazil
   - Redeploy if region changed

2. **Optimize Images**
   - Use Next.js `<Image>` component
   - Compress images before uploading

3. **Check Analytics**
   - Vercel dashboard → Analytics
   - Identify slow pages or functions

### Domain Configuration Issues

**Problem:** Custom domain not working

**Solutions:**

1. **Check DNS Propagation**
   ```bash
   # Check if DNS has propagated
   nslookup texfy.com.br
   dig texfy.com.br
   ```

2. **Verify DNS Records**
   - Must match Vercel's required values exactly
   - Wait up to 48 hours for full propagation (usually 5-60 min)

3. **Check SSL Certificate**
   - Vercel auto-generates SSL certificates
   - May take 5-10 minutes after DNS propagation

## Environment-Specific Configuration

### Production vs Development

The app automatically detects the environment:

- **Production:** `process.env.NODE_ENV === 'production'`
- **Development:** Local `npm run dev`

### Testing Preview Deployments

1. Create a new branch: `git checkout -b feature/test`
2. Push changes: `git push origin feature/test`
3. Vercel creates preview: `https://texfy-git-feature-test.vercel.app`
4. Test changes before merging to `main`

## Security Best Practices

### Protecting Environment Variables

- Never commit `.env` file to git
- Use Vercel dashboard to manage secrets
- Rotate Gmail App Password periodically
- Use different credentials for staging/production

### Rate Limiting

Gmail SMTP has rate limits:
- **~20 emails/minute** for free accounts
- **~100 emails/minute** for Workspace accounts

If you expect high traffic, consider:
- SendGrid (99,000 emails/month free)
- Resend (3,000 emails/month free)
- AWS SES (62,000 emails/month free)

### CORS and Security Headers

Next.js automatically handles:
- CORS configuration
- Security headers
- XSS protection
- Content Security Policy

No additional configuration needed for basic security.

## Updating the Application

### Making Changes

1. Edit files locally
2. Test with `npm run dev`
3. Commit and push to GitHub
4. Vercel automatically deploys

### Rolling Back

If a deployment has issues:

1. Go to Vercel dashboard → Deployments
2. Find previous working deployment
3. Click **...** → **Promote to Production**
4. Previous version is instantly restored

## Cost Estimates

### Vercel Pricing

**Hobby Plan (Free):**
- Perfect for Texfy landing page
- 100 GB bandwidth/month
- Unlimited deployments
- Custom domains included
- SSL certificates included

**Pro Plan ($20/month):**
- Only needed for:
  - Multiple team members
  - More than 100 GB bandwidth
  - Advanced analytics
  - Password protection

For a landing page, **Hobby plan is sufficient**.

### Email Service Costs

**Gmail (Free):**
- Current setup
- Good for <100 leads/day
- No cost

**SendGrid (Free tier):**
- 100 emails/day free
- Upgrade to paid if needed

## Support and Resources

### Vercel Documentation
- Docs: https://vercel.com/docs
- Next.js on Vercel: https://vercel.com/docs/frameworks/nextjs
- Environment Variables: https://vercel.com/docs/environment-variables

### Community Support
- Vercel Discord: https://vercel.com/discord
- Next.js Discussions: https://github.com/vercel/next.js/discussions

### Monitoring Tools
- Vercel Analytics (included)
- Google Analytics (add if needed)
- Sentry for error tracking (optional)

## Deployment Checklist

Before going live:

- [ ] Gmail App Password configured and tested
- [ ] Environment variables set in Vercel
- [ ] Test deployment successful
- [ ] Email delivery working
- [ ] Form submission working
- [ ] Mobile responsive verified
- [ ] Animations working smoothly
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active
- [ ] Analytics configured (optional)
- [ ] Update metadata in layout.tsx (remove Z.ai branding, add Texfy)

## Next Steps After Deployment

1. **Monitor Email Deliverability**
   - Check if emails go to spam
   - Consider adding SPF/DKIM records
   - Test with different email providers

2. **Set Up Analytics**
   - Enable Vercel Analytics
   - Add Google Analytics (optional)
   - Track conversion rates

3. **Performance Optimization**
   - Review Vercel Speed Insights
   - Optimize images if needed
   - Monitor Core Web Vitals

4. **Lead Management**
   - Currently leads only go to email
   - Consider adding database later for lead tracking
   - Options: Vercel Postgres, Supabase, PlanetScale

---

**Deployment Complete!** Your Texfy landing page is now live on Vercel. 🚀
