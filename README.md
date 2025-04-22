# SlavBros Content Management System

A headless CMS built with Strapi that enables clients to manage their website content through a secure, multi-tenant system. Each client has their own account with access to manage only their specific content types and data.

## 🚀 Features

- Multi-tenant architecture with client-specific access control
- Secure user authentication and permissions management
- AWS S3 integration for media storage
- TypeScript support for enhanced development experience
- Docker support for easy deployment
- Cloud deployment ready with Fly.io configuration

## 🛠️ Development

### Prerequisites

- Node.js >= 18.0.0
- npm >= 6.0.0
- Docker (optional, for containerized development)

### Local Development

Start your Strapi application with autoReload enabled:

```bash
npm run develop
```

### Docker Development

```bash
docker-compose -f docker-compose.dev.yml up
```

## ⚙️ Deployment

The application is configured for deployment on Fly.io, but can be deployed to other platforms as well.

```bash
flyctl deploy
```

## 🔒 Security

- Client data isolation through role-based access control
- Secure API endpoints with proper authentication
- Environment-based configuration management

## 📚 Learn more

- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general  improvements.


## ✨ Community

- [Discord](https://discord.strapi.io) - Strapi community
- [Forum](https://forum.strapi.io/) - Strapi forum

---

<sub>Built with ❤️ by SlavBros</sub>
