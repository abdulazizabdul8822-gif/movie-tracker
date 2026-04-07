# 🎬 CineTrack

<div align="center">

![CineTrack Banner](https://img.shields.io/badge/CineTrack-Movie%20Tracker-red?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48dGV4dCB5PSIuOWVtIiBmb250LXNpemU9IjkwIj7wn2esPC90ZXh0Pjwvc3ZnPg==)

**তোমার পছন্দের মুভি ও সিরিজ ট্র্যাক করার সেরা প্ল্যাটফর্ম**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38BDF8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-Latest-5A0EF8?style=flat-square)](https://daisyui.com)
[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-Visit%20Now-brightgreen?style=flat-square)](https://cinetrack-az0.netlify.app)

</div>

---

## 🚀 Live Demo

🔗 **[https://cinetrack-az0.netlify.app](https://cinetrack-az0.netlify.app)**

---

## 📸 Preview

> 🎬 CineTrack — মুভি খোঁজো, WatchList বানাও, ট্রেন্ডিং দেখো।

---

## ✨ Features

- 🔍 **Smart Search** — Real-time movie search with autocomplete suggestions
- 🕐 **Search History** — সাম্প্রতিক সার্চ মনে রাখে (৫টি পর্যন্ত)
- 🎬 **Movies & Series** — সব ধরনের কন্টেন্ট এক জায়গায়
- ➕ **WatchList** — পছন্দের মুভি WatchList এ যোগ করো
- 🏷️ **Tags & Ratings** — Popular, Top Rated, New ট্যাগ সহ রেটিং দেখো
- 📱 **Responsive Design** — মোবাইল, ট্যাবলেট, ডেস্কটপ সব ডিভাইসে কাজ করে
- 🎭 **Trending Section** — ট্রেন্ডিং মুভি ও সিরিজ আলাদাভাবে দেখো
- 🎥 **Lottie Animation** — সুন্দর অ্যানিমেশন সহ ব্যানার

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI Framework (Suspense, use hook) |
| **Vite** | Build Tool |
| **Tailwind CSS** | Styling |
| **DaisyUI** | UI Components |
| **React Icons** | Icon Library |
| **Lottie Player** | Banner Animation |
| **React Toastify** | Toast Notifications |

---

## 📁 Project Structure

```
CineTrack/
├── public/
│   └── movieData.json          # মুভির ডেটা (15টি মুভি ও সিরিজ)
├── src/
│   ├── assets/                 # লোগো, অ্যানিমেশন ফাইল
│   ├── component/
│   │   ├── NavBar/
│   │   │   ├── NavBar.jsx      # সার্চ + নেভিগেশন
│   │   │   └── Banner/
│   │   │       └── Banner.jsx  # Hero Section
│   │   ├── MovieCart/
│   │   │   └── MovieCart.jsx   # মুভি গ্রিড
│   │   ├── MovieModelCart/
│   │   │   └── MovieModelCart.jsx  # Single মুভি কার্ড
│   │   ├── Cart/
│   │   │   └── Cart.jsx        # WatchList
│   │   ├── Filter/
│   │   │   └── Filter.jsx      # ফিল্টার সেকশন
│   │   ├── Trending/
│   │   │   └── Trending.jsx    # ট্রেন্ডিং সেকশন
│   │   ├── WorkSection/
│   │   │   └── WorkSection.jsx # How It Works
│   │   ├── Cta/
│   │   │   └── Cta.jsx         # Call To Action
│   │   ├── Rating/
│   │   │   └── Rating.jsx      # Stats Bar
│   │   └── Footer/
│   │       └── Footer.jsx      # Footer
│   ├── App.jsx                 # Main App Component
│   └── main.jsx                # Entry Point
├── index.html
├── package.json
└── README.md
```

---

## 🚀 Installation & Setup

### ১. Repository Clone করো

```bash
git clone https://github.com/your-username/cinetrack.git
cd cinetrack
```

### ২. Dependencies Install করো

```bash
npm install
```

### ৩. Development Server চালাও

```bash
npm run dev
```

### ৪. Browser এ দেখো

```
http://localhost:5173
```

---

## 📦 Build for Production

```bash
npm run build
```

Build হলে `dist/` ফোল্ডারে পাবে।

---

## 🎬 Movie Data

`public/movieData.json` এ ১৫টি মুভি ও সিরিজ আছে:

| # | Title | Genre | Type | Rating |
|---|---|---|---|---|
| 1 | Inception | Sci-Fi | Movie | ⭐ 8.8 |
| 2 | Interstellar | Sci-Fi | Movie | ⭐ 8.7 |
| 3 | The Dark Knight | Action | Movie | ⭐ 9.0 |
| 4 | Breaking Bad | Crime | Series | ⭐ 9.5 |
| 5 | Game of Thrones | Fantasy | Series | ⭐ 9.2 |
| 6 | Attack on Titan | Animation | Series | ⭐ 9.0 |
| ... | এবং আরো ৯টি | — | — | — |

---

## 🔧 Dependencies

```json
{
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-icons": "latest",
  "@lottiefiles/react-lottie-player": "latest",
  "react-toastify": "latest",
  "tailwindcss": "^3.x",
  "daisyui": "latest"
}
```

---

## 📱 Responsive Breakpoints

| Device | Breakpoint | Layout |
|---|---|---|
| Mobile | `< 640px` | Single Column |
| Tablet | `640px - 1024px` | 2 Columns |
| Desktop | `> 1024px` | 4 Columns |

---

## 🎨 Color Theme

| Color | Hex | Usage |
|---|---|---|
| Red | `#c01805` | Primary / Gradient Start |
| Blue | `#2800f3` | Secondary / Gradient End |
| White | `#ffffff` | Background / Text |

---

## 👨‍💻 Author

**Md Azizul Islam**
- GitHub: [@abdulazizabdul8822-gif](https://github.com/abdulazizabdul8822-gif/movie-tracker)
- Live: [cinetrack-az0.netlify.app](https://cinetrack-az0.netlify.app)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  Made with ❤️ and 🎬 by CineTrack
</div>
