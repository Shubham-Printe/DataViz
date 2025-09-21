# DataViz - Deployment Guide

## Production Deployment

### Prerequisites

- Node.js 18+ and npm 8+
- Git repository set up
- Domain name (optional but recommended)

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# App Configuration
NEXT_PUBLIC_APP_URL=https://your-domain.com
NEXT_PUBLIC_APP_NAME="DataViz"

# SEO & Analytics (Optional)
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-google-site-verification-code
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# Performance Monitoring (Optional)
NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn
```

### Deployment Options

#### 1. Vercel (Recommended)

1. **Connect Repository**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel
   ```

2. **Configure Environment Variables**
   - Go to Vercel Dashboard → Project Settings → Environment Variables
   - Add all required environment variables

3. **Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain

#### 2. Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Environment Variables**
   - Add in Site Settings → Environment Variables

#### 3. Docker Deployment

```dockerfile
# Dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Performance Optimization

#### 1. Build Optimization

```bash
# Type check before build
npm run type-check

# Build with optimization
npm run build

# Analyze bundle size
npm run build:analyze
```

#### 2. SEO Optimization

- ✅ Meta tags configured
- ✅ Sitemap generated automatically
- ✅ Robots.txt configured
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Structured data ready

#### 3. Performance Features

- ✅ Image optimization
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Compression enabled
- ✅ Security headers
- ✅ Error boundaries
- ✅ Loading states

### Monitoring & Analytics

#### 1. Google Analytics (Optional)

Add your Google Analytics ID to environment variables:
```bash
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

#### 2. Error Monitoring (Optional)

Configure Sentry for error tracking:
```bash
NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn
```

### Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All charts render properly
- [ ] Navigation works
- [ ] Mobile responsiveness
- [ ] SEO meta tags present
- [ ] Error pages work
- [ ] Performance score > 90
- [ ] Accessibility score > 90
- [ ] Security headers configured

### Troubleshooting

#### Build Issues

```bash
# Clear cache and rebuild
npm run clean
npm run build
```

#### Performance Issues

```bash
# Analyze bundle
npm run build:analyze
```

#### Type Errors

```bash
# Check types
npm run type-check
```

### Maintenance

#### Regular Updates

```bash
# Update dependencies
npm update

# Security audit
npm audit
npm audit fix
```

#### Monitoring

- Monitor Core Web Vitals
- Check error rates
- Monitor bundle size
- Review performance metrics

### Support

For deployment issues, check:
1. Environment variables are set correctly
2. Build completes without errors
3. All dependencies are installed
4. Node.js version compatibility

---

**Ready for Production!** 🚀

Your DataViz application is now production-ready with:
- ⚡ Optimized performance
- 🔒 Security headers
- 📱 Mobile-first design
- ♿ Accessibility compliance
- 🔍 SEO optimization
- 🚨 Error handling
- 📊 Analytics ready 