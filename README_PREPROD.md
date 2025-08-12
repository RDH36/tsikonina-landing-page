# Tsikonina - Configuration Pré-Production

## 🚧 Site en Développement

Ce site est actuellement en phase de pré-production et **ne doit pas être indexé** par les moteurs de recherche.

## Mesures de Protection Mises en Place

### 1. Configuration Robots
- **robots.txt** : Interdit l'accès à tous les robots d'indexation
- **Meta robots** : Balises `noindex, nofollow, noarchive, nosnippet, noimageindex, nocache`
- **Metadata** : Configuration Next.js avec `robots: { index: false, follow: false }`

### 2. Banner de Pré-Production
- Banner jaune visible en haut de toutes les pages
- Indique clairement que le site est en développement
- Automatiquement masqué en production

### 3. Configuration Environnement
- Fichier `env.preprod.example` avec les variables spécifiques
- Variable `NEXT_PUBLIC_ENVIRONMENT=preprod` pour identifier l'environnement
- Variable `NEXT_PUBLIC_ROBOTS_NOINDEX=true` pour forcer la non-indexation

## Déploiement en Pré-Production

### 1. Configuration des Variables d'Environnement
```bash
# Copier le fichier de configuration
cp env.preprod.example .env.local

# Modifier les valeurs selon votre environnement
# - NEXT_PUBLIC_APP_URL : URL de votre domaine de pré-prod
# - SUPABASE_SERVICE_ROLE_KEY : Clé de service Supabase
# - RESEND_API_KEY : Clé API Resend
```

### 2. Build et Déploiement
```bash
# Installation des dépendances
pnpm install

# Build pour la production
pnpm build

# Démarrage en mode production
pnpm start
```

### 3. Vérification de la Protection
Après déploiement, vérifiez que :
- [ ] Le banner de pré-production est visible
- [ ] Le fichier `/robots.txt` est accessible et contient `Disallow: /`
- [ ] Les balises meta `noindex` sont présentes dans le HTML
- [ ] Google Search Console ne reçoit pas de nouvelles pages

## Passage en Production

Quand le site sera prêt pour la production :

1. **Supprimer les protections** :
   - Modifier `robots.txt` pour autoriser l'indexation
   - Changer `robots: { index: true, follow: true }` dans `layout.tsx`
   - Retirer les balises meta `noindex`

2. **Configurer l'environnement de production** :
   - `NODE_ENV=production`
   - `NEXT_PUBLIC_ENVIRONMENT=production`
   - `NEXT_PUBLIC_ROBOTS_NOINDEX=false`

3. **Activer les outils SEO** :
   - Soumettre le sitemap à Google Search Console
   - Configurer Google Analytics
   - Activer les réseaux sociaux

## Fonctionnalités Actuelles

✅ **Implémentées** :
- Page d'accueil avec hero section
- Newsletter avec intégration Supabase + Resend
- Formulaire de contact avec emails automatiques
- Pages Contact et Support
- Design responsive avec Tailwind CSS
- Police Roboto configurée

🔧 **En développement** :
- Optimisations SEO pour la production
- Tests de performance
- Validation finale des fonctionnalités

## Support

Pour toute question sur la configuration de pré-production :
- Email : contact@tsikonina.com
- Documentation : README.md et README_SUPABASE_SETUP.md
