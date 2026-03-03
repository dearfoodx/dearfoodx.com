"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    kakao: any;
    __kakaoMapLoaded?: boolean;
  }
}

const KAKAO_APP_KEY = process.env.NEXT_PUBLIC_KAKAO_APP_KEY;

interface KakaoMapProps {
  lat: number;
  lng: number;
  title: string;
  level?: number;
}

export default function KakaoMap({ lat, lng, title, level = 3 }: KakaoMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!KAKAO_APP_KEY) return;

    const initMap = () => {
      window.kakao.maps.load(() => {
        if (!mapRef.current) return;

        const position = new window.kakao.maps.LatLng(lat, lng);
        const map = new window.kakao.maps.Map(mapRef.current, {
          center: position,
          level,
        });

        const marker = new window.kakao.maps.Marker({ map, position });

        const infowindow = new window.kakao.maps.InfoWindow({
          content: `<div style="padding:5px 10px;font-size:13px;white-space:nowrap;">${title}</div>`,
        });
        infowindow.open(map, marker);

        map.addControl(
          new window.kakao.maps.ZoomControl(),
          window.kakao.maps.ControlPosition.RIGHT,
        );
      });
    };

    if (window.__kakaoMapLoaded) {
      initMap();
      return;
    }

    const existing = document.querySelector(
      'script[src*="dapi.kakao.com/v2/maps"]',
    );
    if (existing) {
      existing.addEventListener("load", initMap);
      return;
    }

    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_APP_KEY}&autoload=false`;
    script.async = true;
    script.onload = () => {
      window.__kakaoMapLoaded = true;
      initMap();
    };
    document.head.appendChild(script);
  }, [lat, lng, title, level]);

  if (!KAKAO_APP_KEY) {
    return (
      <div className="aspect-[16/10] bg-beige flex items-center justify-center text-sm opacity-50">
        카카오맵 API 키가 설정되지 않았습니다
      </div>
    );
  }

  return <div ref={mapRef} className="aspect-[16/10] w-full" />;
}
