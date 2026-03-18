"use client";

import { ArrowRight, Calendar, Clock, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Video,
    title: "オンラインで完結",
    description: "Zoomを使用した面談で、どこからでも受講可能",
  },
  {
    icon: Clock,
    title: "約30分の無料相談",
    description: "現状のヒアリングと、サービスの詳細説明を行います",
  },
  {
    icon: Calendar,
    title: "ご都合に合わせて",
    description: "平日夜間・土日も対応可能です",
  },
];

export function CTA() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA content */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 text-balance">
              まずは無料の初回相談から
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              学習の悩みや目標について、お気軽にお聞かせください。
              <br className="hidden md:block" />
              あなたに最適な学習戦略を一緒に考えます。
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-10">
            {benefits.map((benefit) => (
              <Card 
                key={benefit.title} 
                className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/20 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/70">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-primary font-semibold px-10 py-7 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open("https://calendly.com", "_blank")}
            >
              無料相談を予約する
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="mt-4 text-sm text-primary-foreground/60">
              ※ご予約後、Zoom招待リンクをお送りします
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
