
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-4rem-10rem)] py-12 text-center">
        <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center mb-6">
          <span className="text-4xl">🔍</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-md">
          We couldn't find the page you were looking for. Let's get you back on track.
        </p>
        <div className="flex gap-4">
          <Button asChild variant="outline">
            <Link to="/">Return Home</Link>
          </Button>
          <Button asChild>
            <Link to="/assessment">Start Assessment</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
