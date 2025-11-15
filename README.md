# 🎬 Netflix GPT - AI-Powered Movie Discovery Platform

<div align="center">

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2.9.2-764ABC?logo=redux&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-12.4.0-FFCA28?logo=firebase&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.18-38B2AC?logo=tailwind-css&logoColor=white)
![TMDB API](https://img.shields.io/badge/TMDB_API-3.0-01D277?logo=themoviedatabase&logoColor=white)

**A modern, full-stack Netflix-inspired streaming platform enhanced with AI-powered movie recommendations, built with React, Redux, and Firebase.**

[Live Demo](#) • [Features](#-key-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [React & Redux Implementation](#-react--redux-implementation)
- [Firebase Integration](#-firebase-integration)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
- [Screenshots](#-screenshots)
- [Future Enhancements](#-future-enhancements)

---

## 🎯 Overview

Netflix GPT is a sophisticated movie streaming platform that combines the power of **React 19**, **Redux Toolkit**, and **Firebase** to deliver a seamless user experience. The application features AI-powered movie recommendations, multi-language support, and a modern, responsive UI built with Tailwind CSS.

### What Makes This Project Stand Out?

- ✅ **Modern React Architecture** - Built with React 19 and functional components
- ✅ **Advanced State Management** - Redux Toolkit for predictable state management
- ✅ **Firebase Authentication** - Secure user authentication and session management
- ✅ **Firebase Hosting** - Production-ready deployment on Firebase
- ✅ **AI Integration** - OpenAI API integration for intelligent movie suggestions
- ✅ **Multi-language Support** - Internationalization with language switching
- ✅ **Real-time Data** - Integration with TMDB API for live movie data
- ✅ **Custom Hooks** - Reusable custom hooks for data fetching and state management
- ✅ **Responsive Design** - Mobile-first design with Tailwind CSS

---

## ✨ Key Features

### 🔐 Authentication & User Management
- **Firebase Authentication** with email/password
- Secure sign-up and sign-in flows
- User profile management with display names and avatars
- Protected routes with authentication guards
- Automatic session persistence
- Real-time authentication state monitoring

### 🎬 Movie Discovery
- **Now Playing Movies** - Latest releases
- **Popular Movies** - Trending content
- **Top Rated Movies** - Critically acclaimed films
- **TV Shows** - Television series collection
- **Movie Trailers** - Embedded YouTube video trailers
- **Movie Details** - Comprehensive movie information

### 🤖 AI-Powered Search
- **GPT Search Integration** - AI-driven movie recommendations
- Natural language movie queries
- Intelligent content suggestions
- Search history and preferences

### 🌍 Internationalization
- **Multi-language Support** - English, Hindi, Spanish
- Dynamic language switching
- Localized UI components
- Language-specific content

### 🎨 User Interface
- **Netflix-inspired Design** - Modern, sleek interface
- **Responsive Layout** - Mobile, tablet, and desktop support
- **Video Backgrounds** - Immersive movie trailers
- **Smooth Animations** - Enhanced user experience
- **Dark Theme** - Eye-friendly dark mode

### 📱 Navigation & Routing
- **React Router DOM** - Client-side routing
- Protected routes for authenticated users
- Seamless navigation between pages
- Browser history management

---

## 🛠 Tech Stack

### Frontend Framework & Libraries
- **React 19.2.0** - Latest React with modern hooks and features
- **React Router DOM 7.9.4** - Client-side routing and navigation
- **Redux Toolkit 2.9.2** - State management with modern Redux patterns
- **React Redux 9.2.0** - React bindings for Redux

### Styling & UI
- **Tailwind CSS 3.4.18** - Utility-first CSS framework
- **Responsive Design** - Mobile-first approach
- **Custom Components** - Reusable UI components

### Backend & Services
- **Firebase 12.4.0** - Backend-as-a-Service
  - Firebase Authentication
  - Firebase Hosting
- **OpenAI API** - AI-powered recommendations
- **TMDB API** - The Movie Database integration

### Development Tools
- **React Scripts 5.0.1** - Create React App tooling
- **Web Vitals** - Performance monitoring

---

## ⚛️ React & Redux Implementation

### React Features Demonstrated

#### 1. **Functional Components & Hooks**
```javascript
// Modern functional components with hooks
const Browser = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  useNowPlayingMovies();
  useTvshows();
  usePopularMovies();
  useTopRatedMovies();
  // ...
};
```

#### 2. **Custom Hooks for Data Fetching**
- `useNowPlayingMovies()` - Fetches currently playing movies
- `usePopularMovies()` - Retrieves popular movie data
- `useTopRatedMovies()` - Gets top-rated movies
- `useTvShows()` - Fetches TV show data
- `useMoviesTrailer()` - Fetches movie trailer videos

**Example Custom Hook:**
```javascript
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  
  const getNowPlayingMoviesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );
    const nowPlayingMoviesData = await data.json();
    dispatch(addNowPlayingMovies(nowPlayingMoviesData.results));
  };
  
  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMoviesData();
  }, []);
};
```

#### 3. **React Hooks Used**
- `useState` - Component state management
- `useEffect` - Side effects and lifecycle management
- `useRef` - DOM references and form inputs
- `useSelector` - Redux state selection
- `useDispatch` - Redux action dispatching
- `useNavigate` - React Router navigation
- `useAuthStateChanged` - Firebase auth state monitoring

#### 4. **Component Architecture**
- **Container Components** - `Browser`, `MainContainer`, `SecondaryContainer`
- **Presentational Components** - `MovieCard`, `MovieList`, `VideoTitle`
- **Layout Components** - `Header`, `Body`
- **Feature Components** - `Login`, `GPTSearchBar`, `VideoBackground`

#### 5. **React Router Implementation**
```javascript
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browser />,
  },
]);
```

### Redux Implementation

#### 1. **Redux Store Configuration**
```javascript
import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    tvShows: tvShowsReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});
```

#### 2. **Redux Slices (State Management)**

##### **User Slice** - Authentication State
```javascript
const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});
```

##### **Movies Slice** - Movie Data Management
```javascript
const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    videoTrailer: null,
    popularMovies: null,
    topRatedMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addVideoTrailer: (state, action) => {
      state.videoTrailer = action.payload;
    },
    // ... more reducers
  },
});
```

##### **GPT Slice** - AI Search State
```javascript
const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
  },
  reducers: {
    toggleGPTSearchView: (state, action) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
  },
});
```

##### **Config Slice** - Application Configuration
```javascript
const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});
```

#### 3. **Redux Patterns Used**
- **Redux Toolkit** - Modern Redux with simplified syntax
- **createSlice** - Simplified reducer and action creation
- **Immer Integration** - Automatic immutable updates
- **Provider Pattern** - App-wide state access
- **Selector Pattern** - Efficient state selection
- **Action Dispatching** - Centralized state updates

#### 4. **State Management Flow**
```
Component → useDispatch → Action → Reducer → Store → useSelector → Component
```

---

## 🔥 Firebase Integration

### Firebase Authentication

#### 1. **Firebase Configuration**
```javascript
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKlY7XWfn2_9fDSjeH7Dhcl7J12RphR9k",
  authDomain: "netflix-gpt-e767f.firebaseapp.com",
  projectId: "netflix-gpt-e767f",
  // ... other config
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

#### 2. **Authentication Features Implemented**

##### **User Sign Up**
```javascript
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    updateProfile(auth.currentUser, {
      displayName: email,
      photoURL: defaultAvatar,
    });
  });
```

##### **User Sign In**
```javascript
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // User signed in successfully
  });
```

##### **User Sign Out**
```javascript
signOut(auth)
  .then(() => {
    // User signed out successfully
  });
```

##### **Authentication State Monitoring**
```javascript
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(addUser({ uid, displayName, photoURL }));
      navigate("/browse");
    } else {
      dispatch(removeUser());
      navigate("/");
    }
  });
  return () => unsubscribe();
}, []);
```

#### 3. **Authentication Flow**
1. User signs up/signs in via Firebase Auth
2. Authentication state is monitored in real-time
3. User data is stored in Redux store
4. Protected routes are automatically handled
5. Session persists across page refreshes

### Firebase Hosting

#### 1. **Firebase Hosting Configuration**
```json
{
  "hosting": {
    "public": "build",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ]
  }
}
```

#### 2. **Deployment Process**
- Build optimized production bundle
- Deploy to Firebase Hosting
- Automatic SSL certificates
- Global CDN distribution
- Custom domain support

#### 3. **Firebase Services Used**
- ✅ **Firebase Authentication** - User management
- ✅ **Firebase Hosting** - Web hosting
- ✅ **Firebase SDK** - Client-side integration

---

## 📁 Project Structure

```
netflix-gpt/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── Body.js         # Main router component
│   │   ├── Browser.js      # Browse page container
│   │   ├── Header.js       # Navigation header
│   │   ├── Login.js        # Authentication component
│   │   ├── MainContainer.js    # Hero section
│   │   ├── SecondaryContainer.js  # Movie lists
│   │   ├── MovieList.js    # Movie list component
│   │   ├── MovieCard.js    # Individual movie card
│   │   ├── VideoBackground.js  # Trailer player
│   │   ├── VideoTitle.js   # Movie title overlay
│   │   ├── GPTsearch.js    # GPT search container
│   │   ├── GPTSearchBar.js # Search input
│   │   └── GPTMovieSuggetions.js  # AI suggestions
│   ├── hooks/              # Custom React hooks
│   │   ├── useNowPlayingMovies.js
│   │   ├── usePopularMovies.js
│   │   ├── useTopRatedMovies.js
│   │   ├── useTvShows.js
│   │   └── useMoviesTrailer.js
│   ├── redux/              # Redux store and slices
│   │   ├── appStore.js     # Store configuration
│   │   ├── userSlice.js    # User state
│   │   ├── moviesSlice.js  # Movies state
│   │   ├── tvShowsSlice.js # TV shows state
│   │   ├── GPTSlice.js     # GPT search state
│   │   └── configSlcie.js   # App config state
│   ├── utils/              # Utility functions
│   │   ├── constant.js     # Constants and configs
│   │   ├── firebase.js     # Firebase setup
│   │   ├── openAI.js       # OpenAI integration
│   │   ├── validation.js   # Form validation
│   │   └── languageContant.js  # i18n constants
│   ├── App.js              # Root component
│   └── index.js            # Entry point
├── firebase.json           # Firebase config
├── tailwind.config.js      # Tailwind configuration
└── package.json            # Dependencies
```

---

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Firebase account
- TMDB API key
- OpenAI API key (optional)

### Step 1: Clone the Repository
```bash
git clone https://github.com/yourusername/netflix-gpt.git
cd netflix-gpt
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Configure Environment Variables
Create a `.env` file in the root directory:
```env
REACT_APP_TMDB_TOKEN=your_tmdb_api_token
REACT_APP_OPENAI_KEY=your_openai_api_key
```

### Step 4: Start Development Server
```bash
npm start
```

The application will open at `http://localhost:3000`

### Step 5: Build for Production
```bash
npm run build
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# TMDB API Token
REACT_APP_TMDB_TOKEN=your_tmdb_api_token_here

# OpenAI API Key (Optional - for GPT features)
REACT_APP_OPENAI_KEY=your_openai_api_key_here
```

### Getting API Keys

1. **TMDB API Key**
   - Visit [The Movie Database](https://www.themoviedb.org/)
   - Create an account and generate an API key
   - Add it to your `.env` file

2. **OpenAI API Key** (Optional)
   - Visit [OpenAI Platform](https://platform.openai.com/)
   - Create an account and generate an API key
   - Add it to your `.env` file

---

## 🌐 Deployment

### Firebase Hosting Deployment

#### 1. **Install Firebase CLI**
```bash
npm install -g firebase-tools
```

#### 2. **Login to Firebase**
```bash
firebase login
```

#### 3. **Initialize Firebase** (if not already done)
```bash
firebase init hosting
```

#### 4. **Build the Project**
```bash
npm run build
```

#### 5. **Deploy to Firebase**
```bash
firebase deploy
```

Your application will be live at: `https://netflix-gpt-e767f.web.app`

### Deployment Features
- ✅ **Automatic SSL** - Secure HTTPS connection
- ✅ **Global CDN** - Fast content delivery worldwide
- ✅ **Custom Domain** - Support for custom domains
- ✅ **Version Control** - Rollback to previous versions
- ✅ **Performance Optimization** - Automatic optimization

---

## 📸 Screenshots

### Login Page
- Modern authentication interface
- Sign up/Sign in toggle
- Form validation
- Firebase authentication integration

### Browse Page
- Hero section with movie trailer
- Multiple movie categories
- Horizontal scrolling movie lists
- Responsive design

### GPT Search
- AI-powered search interface
- Multi-language support
- Intelligent movie recommendations

---

## 🎯 Future Enhancements

- [ ] Complete OpenAI GPT integration for movie recommendations
- [ ] User watchlist and favorites
- [ ] Movie detail pages with cast and crew
- [ ] Search functionality with filters
- [ ] User reviews and ratings
- [ ] Video playback integration
- [ ] Social features (sharing, comments)
- [ ] Advanced filtering and sorting
- [ ] Dark/Light theme toggle
- [ ] Progressive Web App (PWA) support
- [ ] Unit and integration tests
- [ ] Performance optimization
- [ ] Accessibility improvements

---

## 🛡️ Security Features

- ✅ **Firebase Authentication** - Secure user authentication
- ✅ **Protected Routes** - Route guards for authenticated users
- ✅ **Input Validation** - Form validation for email and password
- ✅ **Environment Variables** - Secure API key management
- ✅ **HTTPS** - Secure connections via Firebase Hosting

---

## 📊 Performance Optimizations

- ✅ **Code Splitting** - Lazy loading of components
- ✅ **Memoization** - Optimized re-renders
- ✅ **Efficient State Management** - Redux for predictable updates
- ✅ **Image Optimization** - CDN-hosted images from TMDB
- ✅ **Production Build** - Optimized bundle size

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Subodh Kedare**

- GitHub: [@subodhskedare]([https://github.com/yourusername](https://github.com/subodhskedare?tab=repositories))
- LinkedIn: [Subodh Kedare](https://www.linkedin.com/in/subodh-kedare-170665170/)

---

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for movie data API
- [OpenAI](https://openai.com/) for AI capabilities
- [Firebase](https://firebase.google.com/) for authentication and hosting
- [Netflix](https://www.netflix.com/) for design inspiration

---

<div align="center">

**Built with ❤️ using React, Redux, and Firebase**

⭐ Star this repo if you find it helpful!

</div>
