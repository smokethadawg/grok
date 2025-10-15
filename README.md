# Modular Website

A customizable, modular website built with Next.js that integrates GitHub for storage and authentication.

## Features

- **Modular Design**: Enable/disable different website modules
- **GitHub Authentication**: Login with GitHub OAuth
- **GitHub Storage**: Store data using GitHub as a backend
- **Dashboard**: Manage modules and settings
- **Responsive Design**: Built with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- GitHub account with OAuth app

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd grok
```

2. Install dependencies:
```bash
npm install
```

3. Set up GitHub OAuth:
   - Go to [GitHub Settings > Developer settings > OAuth Apps](https://github.com/settings/applications/new)
   - Create a new OAuth app
   - Set Authorization callback URL to `http://localhost:3000/api/auth/callback/github`
   - Copy the Client ID and Client Secret

4. Configure environment variables:
   - Copy `.env.local` and fill in your GitHub credentials:
   ```bash
   GITHUB_CLIENT_ID=your_github_client_id
   GITHUB_CLIENT_SECRET=your_github_client_secret
   NEXTAUTH_SECRET=your_random_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
├── app/
│   ├── dashboard/     # Dashboard page
│   ├── globals.css    # Global styles
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Home page
├── components/
│   ├── Header.tsx     # Navigation header
│   └── Providers.tsx  # Context providers
├── pages/api/auth/    # NextAuth API routes
└── public/            # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **NextAuth.js** - Authentication
- **Octokit** - GitHub API integration

## Deployment

Deploy to Vercel, Netlify, or any platform supporting Next.js:

1. Push your code to GitHub
2. Connect your repository to your deployment platform
3. Set environment variables in your deployment settings
4. Deploy!

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License
