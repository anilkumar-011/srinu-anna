// pages/_app.js
import '../styles/globals.css'; 
import Navbar from '../components/navbar';
// import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-['Inter'] antialiased bg-gray-50 text-gray-900 min-h-screen">
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default MyApp;