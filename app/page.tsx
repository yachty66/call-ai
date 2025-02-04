import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, Menu, Phone } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0b1e] text-white overflow-x-hidden">
      <header className="fixed top-0 w-full z-50">
        <div className="container mx-auto px-6 py-6">
          <nav className="flex items-center justify-between bg-white/[0.02] backdrop-blur-lg border border-white/[0.05] rounded-3xl px-8 py-4">
            <Link href="/" className="flex items-center space-x-3">
              <Phone className="w-10 h-10 text-[#b624ff]" />
              <span className="text-white text-3xl font-bold tracking-tight">
                GymCall AI™
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-16">
              {["Benefits", "Features", "How it works", "FAQs"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-gray-300 hover:text-white transition-colors text-base font-medium"
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#b624ff] to-[#c93eff] hover:opacity-90 transition-opacity rounded-2xl px-10 py-6 text-base font-medium hidden md:inline-flex"
              >
                Book a Demo
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-8 w-8" />
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section className="pt-48 md:pt-56 pb-20 md:pb-32 relative">
          <div className="container mx-auto px-6 text-center">
            <div className="flex items-center justify-center mb-12">
              <div className="flex items-center space-x-4 bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-full px-7 py-3.5">
                <span className="text-gray-400 text-base">Trusted by</span>
                <div className="bg-[#ff6b01] w-6 h-6 flex items-center justify-center rounded">
                  <span className="text-white font-bold text-sm">500+</span>
                </div>
                <span className="text-[#ff6b01] font-medium text-base">
                  Gyms
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white max-w-6xl mx-auto leading-[1.2] tracking-tight">
              Revolutionize your{" "}
              <span className="bg-gradient-to-r from-[#b624ff] to-[#c93eff] text-transparent bg-clip-text">
                gym's
              </span>{" "}
              call management with{" "}
              <span className="bg-gradient-to-r from-[#b624ff] to-[#c93eff] text-transparent bg-clip-text">
                AI Precision
              </span>
            </h1>

            <p className="mt-10 text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Empower your gym with AI-driven call solutions to capture every
              lead,
              <br className="hidden md:inline" />
              boost member satisfaction, and drive real value
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 max-w-6xl mx-auto">
              {[
                "24/7 Call Management",
                "Human-like Conversations",
                "Seamless CRM Integration",
                "Multilingual Support",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center justify-center space-x-3 bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-2xl px-6 py-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#b624ff]/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#b624ff]" />
                  </div>
                  <span className="text-gray-300 text-base font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="mt-20 bg-gradient-to-r from-[#b624ff] to-[#c93eff] hover:opacity-90 transition-opacity rounded-2xl px-16 py-8 text-lg font-medium"
            >
              Book a Demo
            </Button>

            <div className="relative mt-40">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-30">
                <div className="absolute inset-0 rounded-full bg-[#b624ff] blur-[150px]" />
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=800&width=1400"
                  alt="GymCall AI Dashboard"
                  width={1400}
                  height={800}
                  className="rounded-3xl border border-white/[0.05]"
                />
              </div>
            </div>
          </div>

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
            <div
              className="absolute top-0 left-0 w-[800px] h-[800px] opacity-30"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(182, 36, 255, 0.2) 0%, rgba(10, 11, 30, 0) 70%)",
              }}
            />
            <div
              className="absolute top-0 right-0 w-[800px] h-[800px] opacity-30"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(182, 36, 255, 0.2) 0%, rgba(10, 11, 30, 0) 70%)",
              }}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
