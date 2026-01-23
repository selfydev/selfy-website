# Project Setup

## New Machine Checklist

When starting on a new machine, ensure the following setup is complete:

### 1. Create `.env.local` file

Create a `.env.local` file in the project root with the following environment variables:

```
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token_here
```

### 2. Get a Mapbox Token

If you don't have a Mapbox token:
1. Go to [Mapbox](https://account.mapbox.com/)
2. Sign up or log in
3. Navigate to your account tokens
4. Create a new public token or use the default public token
5. Copy the token and add it to your `.env.local` file
