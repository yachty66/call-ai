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
} from "lucide-react";
import { useState } from "react";

export default function FitnessSFDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-2xl p-6">
                <Users2 className="w-8 h-8 text-[#b624ff] mb-4" />
                <h3 className="font-semibold mb-2">Members</h3>
                <p className="text-gray-400">20,000+</p>
              </div>
              <div className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-2xl p-6">
                <Clock className="w-8 h-8 text-[#b624ff] mb-4" />
                <h3 className="font-semibold mb-2">Operating Hours</h3>
                <p className="text-gray-400">24/7</p>
              </div>
              <div className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-2xl p-6">
                <Globe2 className="w-8 h-8 text-[#b624ff] mb-4" />
                <h3 className="font-semibold mb-2">Locations</h3>
                <p className="text-gray-400">8 Facilities</p>
              </div>
            </div>

            <div className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6">
                Customized Solution Overview
              </h2>
              <div className="space-y-4">
                <p className="text-gray-400">
                  Our AI-powered system is specifically tailored for Fitness
                  SF's unique needs:
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li>• 24/7 call management across all 8 locations</li>
                  <li>
                    • Membership inquiry handling with real-time availability
                    checks
                  </li>
                  <li>• Class scheduling and booking integration</li>
                  <li>
                    • Multi-language support for diverse Bay Area community
                  </li>
                  <li>
                    • Seamless integration with existing CRM and booking systems
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6">Voice Agent Demo</h2>
              <div className="space-y-6">
                <p className="text-gray-400">
                  Listen to how our AI handles common scenarios at Fitness SF:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/[0.03] rounded-xl p-6 space-y-4">
                    <h3 className="font-semibold">Membership Inquiry</h3>
                    <p className="text-sm text-gray-400">
                      Hear how our AI handles membership pricing questions and
                      schedules tours.
                    </p>
                    <div className="flex items-center justify-between">
                      <audio src="/fitness-sf-demo.mp3" className="hidden" />
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={handlePlayDemo}
                          className="bg-[#b624ff] hover:bg-[#c93eff] transition-colors rounded-full p-3"
                        >
                          {isPlaying ? (
                            <Pause className="w-5 h-5" />
                          ) : (
                            <Play className="w-5 h-5" />
                          )}
                        </button>
                        <button
                          onClick={() => {
                            const audio = document.querySelector("audio");
                            if (audio) {
                              audio.muted = !audio.muted;
                              setIsMuted(!isMuted);
                            }
                          }}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          {isMuted ? (
                            <VolumeX className="w-5 h-5" />
                          ) : (
                            <Volume2 className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                      <div className="text-sm text-gray-400">1:30</div>
                    </div>
                  </div>

                  <div className="bg-white/[0.03] rounded-xl p-6">
                    <h3 className="font-semibold">Key Features</h3>
                    <ul className="mt-4 space-y-3 text-sm text-gray-400">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#b624ff]" />
                        <span>Natural conversation flow</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#b624ff]" />
                        <span>Accurate pricing information</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#b624ff]" />
                        <span>Seamless tour scheduling</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#b624ff]" />
                        <span>Location-specific details</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#b624ff] to-[#c93eff] hover:opacity-90 transition-opacity rounded-2xl px-16 py-8 text-lg font-medium"
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
