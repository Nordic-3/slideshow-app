# Slideshow App

A digital photo frame application built with Angular that displays photos in a slideshow format. This hobby project is designed to create a homemade digital photo frame from an old laptop LCD screen with a Raspberry Pi, with the added feature of generating episode numbers for the Friends TV show.

## Features

- **Photo Slideshow**: Display uploaded photos in an automated slideshow
- **Photo Management**: Upload and manage photos through a user-friendly interface
- **Watch Mode**: Monitor and control slideshow playback
- **Friends Episode Generator**: Generate random or specific Friends TV show episode numbers
- **Authentication**: Secure login system with Firebase integration

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (v9 or higher)
- [Angular CLI](https://angular.io/cli) (v18 or higher)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd slideshow-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase** 
   - Update your Firebase configuration in the appropriate configuration file
   - Ensure Firebase credentials are properly set up

## Project Structure

```
src/
├── app/
│   ├── pages/
│   │   ├── login/           # User authentication
│   │   ├── slideshow/       # Main slideshow component
│   │   ├── watch/           # Watch/control slideshow
│   │   ├── dialogbody/      # Dialog/modal components
│   │   └── redirect/        # Route redirection
│   ├── services/
│   │   ├── auth/            # Authentication and guards
│   │   ├── images/          # Image management service
│   │   ├── datasend/        # Data transmission service
│   │   └── redirect/        # Redirection guards
│   ├── app-routing.module.ts
│   └── app.module.ts
├── assets/                   # Static assets
│   └── images/              # Slideshow images (see Image Setup below)
└── styles.scss              # Global styles
```

## Image Setup

The slideshow component requires images to be organized in a specific location and naming convention:

### Image Location
- **Path**: `src/assets/images/`

### Image Count from Firestore
The total number of images displayed in the slideshow is fetched from **Firestore** at startup:
- **Collection**: `images`
- **Field**: `imageNumber`

The application retrieves the `imageNumber` value from Firestore, which tells the slideshow how many images to expect and display. Update this value in Firestore whenever you add or remove images.

### Image Naming Convention
- Images must be named sequentially as numbers: `1.jpg`, `2.jpg`, `3.jpg`, etc.
- All images must be in **JPG format**
- Start numbering from `1` 
- The total count should match the `imageNumber` value in Firestore

### Example Structure
```
src/
└── assets/
    └── images/
        ├── 1.jpg
        ├── 2.jpg
        ├── 3.jpg
        ├── 4.jpg
        └── ... 
```

### Adding or Removing Images
1. Add or remove JPG images in `src/assets/images/`
2. Rename them sequentially starting from `1.jpg`
3. **Update the `imageNumber` field in Firestore** to match the total count
4. Rebuild and restart the application
5. You can control the delay between image transitions through the Watch interface

## Technologies Used

- **Angular**: v18.0.0 - Frontend framework
- **Angular Material**: v18.0.5 - UI component library
- **Angular CDK**: v18.0.5 - Component development kit
- **Firebase**: Real-time database and authentication
- **RxJS**: v7.8.0 - Reactive programming library
- **TypeScript**: v5.4.2 - Programming language
- **SCSS**: Styling

