"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Phone,
  ArrowLeft,
  Building2,
  Users2,
  Clock,
  Globe2,
  Play,
  Pause,
  Volume2,
  VolumeX,
  PhoneCall,
  CalendarCheck,
  CreditCard,
  Languages,
} from "lucide-react";
import { useState } from "react";

export default function FitnessSFDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [activeDemo, setActiveDemo] = useState("membership");
  const demoScenarios = {
    membership: {
      title: "Membership Inquiry",
      duration: "1:30",
      description: "Handle pricing questions and tour scheduling",
      audioSrc: "/demos/membership-inquiry.mp3",
    },
    scheduling: {
      title: "Class Scheduling",
      duration: "1:15",
      description: "Book classes and check availability",
      audioSrc: "/demos/class-scheduling.mp3",
    },
    billing: {
      title: "Billing Support",
      duration: "1:45",
      description: "Handle payment and billing inquiries",
      audioSrc: "/demos/billing-support.mp3",
    },
    multilingual: {
      title: "Multilingual Support",
      duration: "1:20",
      description: "Spanish language membership inquiry",
      audioSrc: "/demos/spanish-inquiry.mp3",
    },
  };

  const handlePlayDemo = () => {
    const audio = document.querySelector("audio");
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0b1e] text-white">
      <header className="fixed top-0 w-full z-50">
        <div className="container mx-auto px-6 py-6">
          <nav className="flex items-center justify-between bg-white/[0.02] backdrop-blur-lg border border-white/[0.05] rounded-3xl px-8 py-4">
            <Link href="/" className="flex items-center space-x-3">
              <Phone className="w-10 h-10 text-[#b624ff]" />
              <span className="text-white text-3xl font-bold tracking-tight">
                GymCall AI™
              </span>
            </Link>
            <Button variant="ghost" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Button>
          </nav>
        </div>
      </header>

      <main className="pt-48 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-20 h-20 bg-white/[0.02] rounded-2xl flex items-center justify-center border border-white/[0.05]">
                <Building2 className="w-10 h-10 text-[#b624ff]" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Fitness SF Demo</h1>
                <p className="text-gray-400 mt-2">
                  Customized AI Call Management Solution
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Live Demo Video</h2>
                <div className="relative aspect-video">
                  <video
                    className="w-full rounded-xl border border-white/[0.05] shadow-2xl"
                    poster="/demo-thumbnail.jpg"
                    controls
                  >
                    <source src="/demos/fitness-sf-call.mp4" type="video/mp4" />
                  </video>
                </div>
                <p className="text-gray-400 mt-4 text-sm">
                  Watch our AI handle a real membership inquiry call for Fitness
                  SF
                </p>
              </div>
            </div>

            <div className="text-center"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
