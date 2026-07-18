"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

// Free, token-less vector tiles (OpenStreetMap data via OpenFreeMap)
const MAP_STYLE_URL = "https://tiles.openfreemap.org/styles/positron";

// Location data for markers
const locations = [
  { name: "London", coords: [-0.1276, 51.5074] as [number, number], events: "200+ events", isPrimary: true },
  { name: "Manchester", coords: [-2.2426, 53.4808] as [number, number], events: "45+ events", isPrimary: false },
  { name: "Birmingham", coords: [-1.8904, 52.4862] as [number, number], events: "38+ events", isPrimary: false },
  { name: "Edinburgh", coords: [-3.1883, 55.9533] as [number, number], events: "22+ events", isPrimary: false },
  { name: "Bristol", coords: [-2.5879, 51.4545] as [number, number], events: "30+ events", isPrimary: false },
  { name: "Leeds", coords: [-1.5491, 53.8008] as [number, number], events: "25+ events", isPrimary: false },
];

// Stats data
const stats = [
  { value: 500, label: "Events", suffix: "+" },
  { value: 50, label: "Cities", suffix: "+" },
  { value: 98, label: "Satisfaction", suffix: "%" },
];

// Animated counter hook
function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, start]);

  return count;
}

export default function CoverageMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const markersRef = useRef<maplibregl.Marker[]>([]);

  // Animated counters
  const eventsCount = useCountUp(stats[0].value, 2000, isVisible);
  const citiesCount = useCountUp(stats[1].value, 2000, isVisible);
  const satisfactionCount = useCountUp(stats[2].value, 2000, isVisible);
  const counts = [eventsCount, citiesCount, satisfactionCount];

  // Intersection observer for triggering animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: MAP_STYLE_URL,
      center: [-0.1276, 51.5074],
      zoom: 6,
      pitch: 0,
      bearing: 0,
      interactive: false,
      attributionControl: { compact: true },
    });

    // Add coverage radius rings after map loads
    map.current.on("load", () => {
      if (!map.current) return;

      // Add animated coverage circles as a source
      const rings = [50000, 100000, 200000]; // meters

      rings.forEach((radius, index) => {
        const sourceId = `coverage-ring-${index}`;
        const layerId = `coverage-ring-layer-${index}`;

        // Create a circle using turf-like calculation
        const center = [-0.1276, 51.5074];
        const points = 64;
        const coords = [];

        for (let i = 0; i <= points; i++) {
          const angle = (i / points) * 2 * Math.PI;
          const dx = radius * Math.cos(angle);
          const dy = radius * Math.sin(angle);
          const lat = center[1] + (dy / 111320);
          const lng = center[0] + (dx / (111320 * Math.cos(center[1] * Math.PI / 180)));
          coords.push([lng, lat]);
        }

        map.current!.addSource(sourceId, {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Polygon",
              coordinates: [coords],
            },
          },
        });

        map.current!.addLayer({
          id: layerId,
          type: "line",
          source: sourceId,
          paint: {
            "line-color": "#1D1D1D",
            "line-width": 1.5,
            "line-opacity": 0.3 - index * 0.08,
            "line-dasharray": [2, 2],
          },
        });
      });
    });

    // Add location markers
    locations.forEach((location) => {
      const el = document.createElement("div");
      el.className = "location-marker";

      if (location.isPrimary) {
        el.innerHTML = `
          <div style="position: relative; cursor: pointer;">
            <div style="
              width: 20px;
              height: 20px;
              background-color: #1D1D1D;
              border-radius: 50%;
              border: 3px solid white;
              box-shadow: 0 2px 12px rgba(0,0,0,0.3);
              position: relative;
              z-index: 2;
            "></div>
            <div class="pulse-ring" style="
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 60px;
              height: 60px;
              background-color: rgba(29, 29, 29, 0.15);
              border-radius: 50%;
              animation: pulseRing 2s ease-out infinite;
              z-index: 1;
            "></div>
            <div class="pulse-ring" style="
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 60px;
              height: 60px;
              background-color: rgba(29, 29, 29, 0.15);
              border-radius: 50%;
              animation: pulseRing 2s ease-out infinite 0.5s;
              z-index: 1;
            "></div>
            <div class="pulse-ring" style="
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 60px;
              height: 60px;
              background-color: rgba(29, 29, 29, 0.15);
              border-radius: 50%;
              animation: pulseRing 2s ease-out infinite 1s;
              z-index: 1;
            "></div>
          </div>
        `;
      } else {
        el.innerHTML = `
          <div style="
            width: 12px;
            height: 12px;
            background-color: #1D1D1D;
            border-radius: 50%;
            border: 2px solid white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
            cursor: pointer;
            transition: transform 0.2s ease;
          "></div>
        `;
      }

      // Add hover events
      el.addEventListener("mouseenter", () => setActiveTooltip(location.name));
      el.addEventListener("mouseleave", () => setActiveTooltip(null));

      const marker = new maplibregl.Marker({ element: el })
        .setLngLat(location.coords)
        .addTo(map.current!);

      markersRef.current.push(marker);
    });

    // Add global styles for animations
    const style = document.createElement("style");
    style.textContent = `
      @keyframes pulseRing {
        0% { transform: translate(-50%, -50%) scale(0.5); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
      }
      .location-marker:hover > div > div:first-child {
        transform: scale(1.2);
      }
    `;
    document.head.appendChild(style);

    return () => {
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
      style.remove();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full lg:h-screen overflow-hidden"
    >
      {/* Map Container — its own block on mobile, full overlay on desktop */}
      <div
        ref={mapContainer}
        className="relative h-[55vh] w-full lg:absolute lg:inset-0 lg:h-full"
        style={{ touchAction: "pan-y" }}
      />

      {/* Tooltips for markers */}
      {locations.map((location) => (
        <div
          key={location.name}
          className={`absolute z-20 pointer-events-none transition-[opacity,transform] duration-200 ${
            activeTooltip === location.name ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -120%)",
          }}
        >
          {activeTooltip === location.name && (
            <div
              className="px-4 py-2 rounded-lg whitespace-nowrap"
              style={{
                backgroundColor: "#1D1D1D",
                fontFamily: "var(--font-helvetica-now)",
              }}
            >
              <p className="text-white text-sm font-medium">{location.name}</p>
              <p className="text-white/70 text-xs">{location.events}</p>
            </div>
          )}
        </div>
      ))}

      {/* Info Box — full-width block under the map on mobile, floating card on desktop */}
      <div
        className="relative z-10 w-full px-6 py-12 text-center lg:absolute lg:bottom-16 lg:left-16 lg:w-auto lg:max-w-md lg:p-12 lg:text-left lg:rounded-[20px]"
        style={{
          backgroundColor: "#1D1D1D",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-helvetica-now)",
            fontSize: "24px",
            fontWeight: 500,
            color: "#FFFFFF",
            marginBottom: "12px",
          }}
        >
          Where we operate
        </h3>
        <p
          style={{
            fontFamily: "var(--font-helvetica-now)",
            fontSize: "15px",
            fontWeight: 400,
            color: "rgba(255, 255, 255, 0.7)",
            lineHeight: 1.6,
            marginBottom: "24px",
          }}
        >
          Based in Greater London, we provide premium photo booth experiences across the capital and surrounding areas. We also service events throughout the entire UK upon request.
        </p>

        {/* Animated Stats */}
        <div className="flex justify-center lg:justify-start gap-8 mb-6">
          {stats.map((stat, index) => (
            <div key={stat.label}>
              <p
                style={{
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "32px",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  lineHeight: 1,
                }}
              >
                {counts[index]}{stat.suffix}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "13px",
                  fontWeight: 400,
                  color: "rgba(255, 255, 255, 0.5)",
                  marginTop: "4px",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/contact"
          className="inline-block px-6 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
          style={{
            fontFamily: "var(--font-helvetica-now)",
            backgroundColor: "#FFFFFF",
            color: "#1D1D1D",
          }}
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}
