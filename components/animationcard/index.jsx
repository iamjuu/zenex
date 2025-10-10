import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { useMobileMenu } from '../../../context/MobileMenuContext';
// Import images from assets
import Logo from "./../../../assets/pictures/ezebithome/logo1.webp";
// Tech Icons
import PhotoshopIcon from "./../../../assets/pictures/ezebithome/photoshop.webp";
import FlutterIcon from "./../../../assets/pictures/ezebithome/flutter.webp";
import ReactIcon from "./../../../assets/pictures/ezebithome/react.webp";
import FigmaIcon from "./../../../assets/pictures/ezebithome/figma.webp";
import HtmlIcon from "./../../../assets/pictures/ezebithome/html5.webp";
import IllustratorIcon from "./../../../assets/pictures/ezebithome/illustrator.webp";
import XdIcon from "./../../../assets/pictures/ezebithome/xd.webp";
import JavascriptIcon from "./../../../assets/pictures/ezebithome/javascript.webp";
import CssIcon from "./../../../assets/pictures/ezebithome/css.webp";
import TailwindIcon from "./../../../assets/pictures/ezebithome/tailwind.webp";
import Angular from "./../../../assets/pictures/ezebithome/Angular.webp";

// Memoize the services array
const services = [
  "Digital Marketing",
  "App & Website Development",
  "Custom Software Solutions",
  "UI/UX Design",
  "B2B E-Commerce",
  "Cloud Solutions",
  "IT Consulting"
];

// Memoize the tech icons array
const techIcons = [
  { src: TailwindIcon, alt: "Tailwind CSS", delay: 0, floatOffset: 10, zIndex: 30, rotateDir: 1, rotateSpeed: 9, color: "#06B6D4" },
  { src: PhotoshopIcon, alt: "Photoshop", delay: 200, floatOffset: 5, zIndex: 20, rotateDir: 1, rotateSpeed: 7, color: "#31A8FF" },
  { src: FlutterIcon, alt: "Flutter", delay: 400, floatOffset: 10, zIndex: 21, rotateDir: -1, rotateSpeed: 8, color: "#02569B" },
  { src: ReactIcon, alt: "React", delay: 600, floatOffset: 8, zIndex: 22, rotateDir: 1, rotateSpeed: 10, color: "#61DAFB" },
  { src: FigmaIcon, alt: "Figma", delay: 800, floatOffset: 12, zIndex: 23, rotateDir: -1, rotateSpeed: 9, color: "#F24E1E" },
  { src: HtmlIcon, alt: "HTML5", delay: 1000, floatOffset: 6, zIndex: 24, rotateDir: 1, rotateSpeed: 7, color: "#E34F26" },
  { src: IllustratorIcon, alt: "Illustrator", delay: 1200, floatOffset: 9, zIndex: 25, rotateDir: -1, rotateSpeed: 8, color: "#FF9A00" },
  { src: XdIcon, alt: "XD", delay: 1400, floatOffset: 7, zIndex: 26, rotateDir: 1, rotateSpeed: 9, color: "#FF61F6" },
  { src: JavascriptIcon, alt: "JavaScript", delay: 1600, floatOffset: 11, zIndex: 27, rotateDir: -1, rotateSpeed: 7, color: "#F7DF1E" },
  { src: CssIcon, alt: "CSS", delay: 1800, floatOffset: 9, zIndex: 28, rotateDir: 1, rotateSpeed: 8, color: "#1572B6" },
  { src: Angular, alt: "Angular", delay: 1800, floatOffset: 7, zIndex: 29, rotateDir: -1, rotateSpeed: 8, color: "#DD0031" },
];

// Full text object for typing animation
const fullText = {
  line1: 'Bringing Innovations ',
  line2: 'to Your Business with',
  line3: 'Smart IT Solutions'
};

// Memoized helper functions
const getRadius = (stage, isMobile = false) => {
  const baseRadius = stage === 0 || stage === 4 ? 40 : 180;
  return isMobile ? baseRadius * 0.6 : baseRadius;
};

const getIconScale = (stage) => {
  return stage === 0 || stage === 4 ? 0.6 : 1;
};

const getColorCircleOpacity = (stage) => {
  return stage === 0 || stage === 4 ? 0.7 : 0;
};

// Memoized TechIcon component
// Update the TechIcon component's image sizing
const TechIcon = React.memo(({ 
  icon, 
  index, 
  totalIcons, 
  animationStage, 
  orbitAngle, 
  isMobile 
}) => {
  // Calculate positions in a circle
  const baseAngle = (index * (360 / totalIcons)) * (Math.PI / 180);
  
  // Modify angle for orbiting stage
  const angle = animationStage === 3 
    ? baseAngle + (orbitAngle * (Math.PI / 180))
    : baseAngle;
  
  // Adjust radius based on screen size
  const radius = getRadius(animationStage, isMobile);
  
  const xOffset = Math.cos(angle) * radius;
  const yOffset = Math.sin(angle) * radius;
  
  // Calculate floating effect for stage 2 - gentler floating
  const floatX = animationStage === 2 ? Math.cos(angle) * (icon.floatOffset / 3) : 0;
  const floatY = animationStage === 2 ? Math.sin(angle) * (icon.floatOffset / 3) : 0;
  
  // Apply rotation class - only during floating and shrinking
  const rotateClass = (animationStage === 2 || animationStage === 4) ? 
      rotate-${icon.rotateDir > 0 ? 'cw' : 'ccw'}-${icon.rotateSpeed} : '';
  
  // Dynamically set animation properties by stage
  const isFloating = animationStage === 2;
  const isOrbiting = animationStage === 3;
  const isShrinking = animationStage === 4;
  
  // Significantly slower transition for shrinking phase
  let transitionDuration = isOrbiting ? '0ms' : '3000ms';
  if (isShrinking) {
    transitionDuration = '4500ms'; // Much slower shrinking
  }
  
  return (
    <div
      className={absolute ${isFloating ? 'floating-icon' : ''}}
      style={{
        transform: translate(${xOffset + floatX}px, ${yOffset + floatY}px) scale(${isMobile ? 0.8 : 1}),
        opacity: animationStage === 0 ? 0.5 : 1,
        transitionProperty: isOrbiting ? 'none' : 'transform, opacity',
        transitionDuration: transitionDuration,
        transitionDelay: !isOrbiting && !isShrinking ? ${icon.delay}ms : isShrinking ? '200ms' : '0ms',
        transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)', // Smoother easing
        '--x': ${xOffset}px,
        '--y': ${yOffset}px,
        zIndex: icon.zIndex,
      }}
    >
      <img 
        src={icon.src} 
        alt={icon.alt} 
        className={w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 rounded-lg shadow-lg hover:scale-110 transition-transform ${rotateClass}}
        style={{
          filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.25))',
          background: 'transparent',
          transition: isShrinking ? 'transform 4500ms ease-in-out, opacity 4500ms ease-in-out' : 
                                  'transform 1200ms ease-in-out, opacity 1200ms ease-in-out',
          transform: scale(${getIconScale(animationStage)}),
        }}
      />
      
      {/* Colored circles that appear during shrinking - with slower transition */}
      {(animationStage === 0 || animationStage === 4) && (
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            backgroundColor: icon.color,
            opacity: getColorCircleOpacity(animationStage),
            zIndex: -1,
            transition: 'opacity 4000ms ease-in-out', // Much slower fade for better visibility
          }}
        ></div>
      )}
    </div>
  );
});

// Memoized TypingText component
const TypingText = React.memo(({ displayText, currentLine }) => {
  return (
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-center lg:text-left">
      <div className="flex items-center justify-center lg:justify-start whitespace-pre-wrap lg:whitespace-nowrap ">
        <span className=''>{displayText.line1}</span>
        {currentLine === 1 && <span className="typing-cursor "></span>}
      </div>
      <div className="flex items-center justify-center lg:justify-start whitespace-pre-wrap lg:whitespace-nowrap mt-2 lg:mt-4 ">
        <span className=''> {displayText.line2}</span>
        {currentLine === 2 && <span className="typing-cursor"></span>}
      </div>
      <div className="flex items-center justify-center lg:justify-start whitespace-pre-wrap lg:whitespace-nowrap mt-2 lg:mt-4">
        <span className="gradient-textcopy">{displayText.line3}</span>
        {currentLine === 3 && <span className="typing-cursor"></span>}
      </div>
    </h1>
  );
});

// Main component
// Update the main component's container classes
const EzebitHomepage = () => {
  const { isMobileMenuOpen, isLargeScreen } = useMobileMenu();
  const [animationStage, setAnimationStage] = useState(0);
  const [orbitAngle, setOrbitAngle] = useState(0);
  const timeoutsRef = useRef([]);
  const animationFrameRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);
  const isMobile = !isLargeScreen;

  // New states for typing animation
  const [displayText, setDisplayText] = useState({
    line1: '',
    line2: '',
    line3: ''
  });
  const [currentLine, setCurrentLine] = useState(1);

  // Visibility detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0].isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentElement = document.getElementById('ezebit-animation-container');
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  // Typing animation - memoized with useCallback
  const typeText = useCallback((line, text) => {
    return new Promise((resolve) => {
      let currentChar = 0;
      const typingSpeed = 100;
      
      const interval = setInterval(() => {
        if (currentChar < text.length) {
          setDisplayText(prev => ({
            ...prev,
            [line]: text.slice(0, currentChar + 1)
          }));
          currentChar++;
        } else {
          clearInterval(interval);
          resolve();
        }
      }, typingSpeed);
    });
  }, []);

  // Start typing animation - memoized with useCallback
  const startTyping = useCallback(async () => {
    while (isVisible) { // Only run when visible
      // Reset text
      setDisplayText({
        line1: '',
        line2: '',
        line3: ''
      });
      
      setCurrentLine(1);
      await typeText('line1', fullText.line1);
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setCurrentLine(2);
      await typeText('line2', fullText.line2);
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setCurrentLine(3);
      await typeText('line3', fullText.line3);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Pause at the end
    }
  }, [isVisible, typeText]);

  // Start typing animation when component is visible
  useEffect(() => {
    if (isVisible && !isInitialized) {
      startTyping();
      setIsInitialized(true);
    }
  }, [isVisible, isInitialized, startTyping]);

  // Orbit animation function with requestAnimationFrame
  const animateOrbit = useCallback(() => {
    setOrbitAngle(prev => (prev + 0.3) % 360);
    if (isVisible) {
      animationFrameRef.current = requestAnimationFrame(animateOrbit);
    }
  }, [isVisible]);

  // Animation cycle with visibility control
  useEffect(() => {
    // Clear any existing timeouts and animation frames
    const clearAllTimeouts = () => {
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
    
    // Only start animation if component is visible
    if (!isVisible) {
      clearAllTimeouts();
      return;
    }
    
    const startAnimationCycle = () => {
      clearAllTimeouts();
      
      // Start initial loading from shape
      timeoutsRef.current.push(setTimeout(() => {
        setAnimationStage(1); // Start expanding from shape
      }, 800));

      // Start floating animation after icons have expanded
      timeoutsRef.current.push(setTimeout(() => {
        setAnimationStage(2); // Start floating
      }, 5000));
      
      // Start orbiting animation
      timeoutsRef.current.push(setTimeout(() => {
        setAnimationStage(3); // Start orbiting around the button
        // Start orbit animation
        animationFrameRef.current = requestAnimationFrame(animateOrbit);
      }, 10000));
      
      // Start shrinking animation back to shape
      timeoutsRef.current.push(setTimeout(() => {
        // Cancel orbit animation
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
          animationFrameRef.current = null;
        }
        setAnimationStage(4); // Start shrinking to shape
      }, 14000));
      
      // Reset to initial state and restart cycle
      timeoutsRef.current.push(setTimeout(() => {
        setAnimationStage(0); // Reset
        setOrbitAngle(0); // Reset orbit angle
        
        // Start the next cycle after a brief pause
        timeoutsRef.current.push(setTimeout(() => {
          startAnimationCycle(); // Recursively start the next cycle
        }, 1500));
        
      }, 19000)); // Extended to allow more time for shrinking transition
    };

    // Start the initial animation cycle
    startAnimationCycle();

    // Cleanup function
    return () => {
      clearAllTimeouts();
    };
  }, [isVisible, animateOrbit]);

  // Memoize the button style to prevent recalculations
  const buttonStyle = useMemo(() => ({
    zIndex: 40,
    opacity: animationStage === 2 ? 1 : 
            animationStage === 3 ? 0.7 : 0,
    transform: animationStage === 2 ? 'scale(1)' : 
              animationStage === 3 ? 'scale(0.9)' : 'scale(0.8)',
  }), [animationStage]);

  return (
    <div className={`flex flex-col ${
      !isLargeScreen 
        ? isMobileMenuOpen 
          ? 'mt-[30px] transition-all duration-500 ease-in-out' 
          : 'mt-[10px] transition-all duration-500 ease-in-out'
        : 'mt-[60px]' // Added margin top for large screens
    }`}>
      {/* Main Content */}
      <main className={`flex-grow flex flex-col lg:flex-row px-4 lg:px-8 py-2 lg:py-6 ${
        isLargeScreen ? 'mt-[40px] sm:mt-[60px] md:mt-[80px] lg:mt-[100px] xl:mt-[20px]' : ''
      } mb-0`}>
        {/* Left Section with Tech Icons */}
        <div 
          id="ezebit-animation-container"
          className="w-full lg:w-1/2 relative flex items-center justify-center mb-8 lg:mb-0 h-[350px] sm:h-[400px] md:h-[450px] lg:h-[550px] xl:h-[600px] overflow-hidden" 
          style={{ position: 'relative' }}
        >
          <div className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[550px] xl:h-[600px] flex items-center justify-center">
            {/* Update the button sizing */}
            <div className="absolute transition-all duration-1000 ease-in-out" 
                style={{
                  ...buttonStyle,
                  transform: ${buttonStyle.transform} scale(${isMobile ? 0.7 : isLargeScreen ? 1 : 0.8})
                }}>
              <button className="bg-teal-700 text-white py-2 px-4 md:py-2 md:px-5 lg:py-3 lg:px-6 rounded-md font-bold text-base md:text-lg lg:text-xl shadow-lg hover:bg-teal-600 pulse-button">
                Lets Get Started!
              </button>
            </div>
            
            {/* Tech Icons Circle Animation - Memoized */}
            {techIcons.map((icon, index) => (
              <TechIcon
                key={icon.alt}
                icon={icon}
                index={index}
                totalIcons={techIcons.length}
                animationStage={animationStage}
                orbitAngle={orbitAngle}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>
        
        {/* Right Section with Text - Memoized */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start mt-0 lg:mt-12 xl:mt-20 px-4 lg:px-0">
          <div className="max-w-lg w-full animation-text">
            <TypingText displayText={displayText} currentLine={currentLine} />
          </div>
        </div>
      </main>
    </div>
  );
};

// Export memoized component
export default React.memo(EzebitHomepage);
