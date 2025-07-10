# PHPxCODER Portfolio

A modern, interactive portfolio website built with SvelteKit, featuring real-time Discord presence, Spotify integration, and dynamic background effects.

## ✨ Features

- **Real-time Discord Status**: Display your current Discord activity and status
- **Spotify Integration**: Show currently playing music and top tracks
- **Weather Information**: Display current weather based on your location
- **Interactive Background**: Particle system with mouse interaction
- **Responsive Design**: Works seamlessly on all devices

## 🚀 Tech Stack

- **Framework**: SvelteKit
- **Styling**: TailwindCSS + PostCSS
- **Deployment**: Vercel
- **APIs**: Spotify Web API, OpenWeatherMap, Lanyard
- **Language**: TypeScript

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js 18+ installed
- A Spotify account
- A Discord account
- An OpenWeatherMap API key
- Basic knowledge of environment variables

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PHPxCODER/svelte-portfolio.git
   cd svelte-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   ```

## ⚙️ Environment Setup

### 1. Spotify Integration

#### Get Spotify Credentials
1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Click "Create App"
3. Fill in the details:
   - **App Name**: Your Portfolio
   - **App Description**: Personal portfolio website
   - **Redirect URI**: `http://localhost:3000/callback` (for development)
4. Copy the **Client ID** and **Client Secret**

#### Get Spotify Refresh Token
1. Replace `YOUR_CLIENT_ID` in this URL and visit it:
   ```
   https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=http://localhost:3000/callback&scope=user-read-currently-playing%20user-read-recently-played%20user-top-read
   ```

2. Authorize the app and copy the `code` from the redirect URL

3. Get your refresh token by running this curl command (replace the values):
   ```bash
   curl -H "Authorization: Basic BASE64_ENCODED_CLIENT_ID:CLIENT_SECRET" \
        -d grant_type=authorization_code \
        -d code=YOUR_CODE \
        -d redirect_uri=http://localhost:3000/callback \
        https://accounts.spotify.com/api/token
   ```

4. To encode your credentials to Base64:
   ```bash
   echo -n "CLIENT_ID:CLIENT_SECRET" | base64
   ```

5. The response will contain your `refresh_token`

### 2. Lanyard Setup (Discord Presence)

This project supports multiple Lanyard instances for Discord presence tracking. **For new users, we recommend using the official public API.**

#### Option A: Use the Public Lanyard API (Recommended for new users)
1. Join the [official Lanyard Discord server](https://discord.gg/lanyard)
2. The bot will automatically start tracking your Discord presence
3. Update your `.env` file:
   ```env
   LANYARD_ENDPOINT=https://api.lanyard.rest/v1/users
   ```

#### Option B: Use My Self-Hosted Instance
This project uses a **self-hosted Lanyard instance** running at `https://api.phpxcoder.in` by default.
1. Join the [self-hosted Lanyard Discord server](https://discord.com/invite/GNPydYVRgP) for presence tracking
2. Keep the default endpoint in `.env`:
   ```env
   LANYARD_ENDPOINT=https://api.phpxcoder.in/v1/users
   ```

#### Option C: Self-Host Your Own Lanyard Instance
1. Fork and deploy the [Lanyard repository](https://github.com/phpxcoder/lanyard)
2. Set up your own Lanyard server following the repository instructions
3. Update the `LANYARD_ENDPOINT` in your `.env` file to point to your instance
4. Join the appropriate Discord server for presence tracking

#### Get Your Discord User ID
1. Enable Developer Mode in Discord (User Settings → Advanced → Developer Mode)
2. Right-click your profile and select "Copy User ID"

#### Set Your City for Weather Data
The weather feature uses a dynamic city value stored in Lanyard's KV (Key-Value) store:

1. **For Public Lanyard API users**: Join [discord.gg/lanyard](https://discord.gg/lanyard) and use the bot command:
   ```
   .set city YourCityName
   ```
   Example: `.set city Delhi`

2. **For Self-Hosted Instance users**: Join [the self-hosted server](https://discord.com/invite/GNPydYVRgP) and use:
   ```
   .set city YourCityName
   ```
   Example: `.set city Delhi`

3. **Available anywhere**: You can update your city anytime using the bot command, and the weather will automatically update to your new location.

> **Note**: The city KV value is used by the weather API to fetch location-specific weather data. Make sure to set it to a city name that OpenWeatherMap recognizes.

### Weather API Setup

The weather feature dynamically fetches your location from Lanyard's KV store, so you don't need to hardcode your city.

1. Sign up at [OpenWeatherMap](https://openweathermap.org/api)
2. Get your free API key from the dashboard
3. Add it to your `.env` file
4. Set your city using the Lanyard bot (see Lanyard setup section above)

The weather will automatically update based on the city value you set in Lanyard's KV store.

### 4. Complete .env File

Fill in your `.env` file with all the required values:

```env
# Spotify Configuration
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_REFRESH_TOKEN=your_spotify_refresh_token

# Weather API
WEATHER_API_KEY=your_openweathermap_api_key

# Discord Configuration
DISCORD_USER_ID=your_discord_user_id

# Lanyard Configuration
# Option A: Public Lanyard API (Recommended for new users)
LANYARD_ENDPOINT=https://api.lanyard.rest/v1/users
# Option B: PHPxCODER's Self-Hosted Instance
# LANYARD_ENDPOINT=https://api.phpxcoder.in/v1/users
# Option C: Your own self-hosted instance
# LANYARD_ENDPOINT=https://your-lanyard-instance.com/v1/users
```

## 🎯 Customization

### Personal Information
Update the following files with your information:

1. **src/routes/(home)/+page.svelte**: 
   - Change name, age, and location
   - Update social media links
   - Modify the birthday date

2. **src/routes/projects/+page.svelte**:
   - Add your own projects
   - Update project descriptions and links

3. **src/lib/components/Meta.svelte**:
   - Update the favicon link
   - Modify meta descriptions

### Styling
- Colors and themes can be modified in `src/app.postcss`
- Tailwind configuration is in `tailwind.config.cjs`
- Font configurations are in `src/fonts.postcss`

### Background Effect
The interactive particle background can be customized in `src/routes/BackgroundEffect.svelte`:
- Change particle count, colors, and behavior
- Modify mouse interaction effects
- Adjust animation parameters

## 🚀 Development

1. **Start the development server**
   ```bash
   npm run dev
   ```

2. **Open your browser**
   Navigate to `http://localhost:5173`

3. **Make changes**
   The app will automatically reload when you save files

## 📦 Building for Production

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Preview the build**
   ```bash
   npm run preview
   ```

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add all environment variables in the Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
This project uses `@sveltejs/adapter-vercel` by default. For other platforms:
1. Change the adapter in `svelte.config.js`
2. Follow the respective platform's deployment guide

## 🔧 Troubleshooting

### Spotify Issues
- **Not showing current track**: Check if your Spotify refresh token is valid
- **API errors**: Ensure your Spotify app has the correct scopes
- **Rate limiting**: The app caches requests to avoid hitting rate limits

### Discord/Lanyard Issues
- **Status not updating**: Make sure you're in the appropriate Lanyard Discord server:
  - Public API: [discord.gg/lanyard](https://discord.gg/lanyard)
  - Self-hosted instance: [discord.com/invite/GNPydYVRgP](https://discord.com/invite/GNPydYVRgP)
- **Weather not showing**: Ensure you've set your city using `.set city YourCityName` in the Lanyard Discord server
- **Custom status not showing**: Some activities might not be supported
- **API endpoint errors**: If using a custom Lanyard instance, verify the endpoint is accessible
- **Self-hosted instance**: If self-hosting, ensure your Lanyard server is running and properly configured

### Build Issues
- **Module not found**: Run `npm install` to ensure all dependencies are installed
- **Type errors**: Check TypeScript configuration in `tsconfig.json`

## 📝 License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [Lanyard](https://github.com/Phineas/lanyard) for Discord presence API
- [PHPxCODER's Self-Hosted Lanyard](https://github.com/phpxcoder/lanyard) - Custom Lanyard instance used in this project
- [Spotify Web API](https://developer.spotify.com/documentation/web-api/) for music integration
- [OpenWeatherMap](https://openweathermap.org/) for weather data
- [Svelte](https://svelte.dev/) and [SvelteKit](https://kit.svelte.dev/) for the amazing framework

## 📞 Support

If you encounter any issues or have questions:
1. Check the troubleshooting section above
2. Open an issue on GitHub
3. Join the discussions in the repository

---

Made with ❤️ by [PHPxCODER](https://github.com/PHPxCODER)
