"use client";

import { Check, Crown, MessageCircle, Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "スタンダードプラン",
    description: "週1回の面談で着実に成長",
    price: "19,800",
    period: "月額（税込）",
    features: [
      "週1回のZoom面談（60分）",
      "学習計画の策定・修正",
      "進捗管理シートの提供",
      "面談中の質問対応",
      "学習レポートの作成",
    ],
    popular: false,
  },
  {
    name: "プレミアムプラン",
    description: "週2回の面談で集中サポート",
    price: "34,800",
    period: "月額（税込）",
    features: [
      "週2回のZoom面談（各90分）",
      "詳細な学習計画の策定・修正",
      "進捗管理シートの提供",
      "面談中の質問対応",
      "週次学習レポートの作成",
      "優先予約権",
    ],
    popular: true,
  },
];

export function Pricing() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-accent mb-3 uppercase tracking-wider">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">
            料金プラン
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            あなたの学習スタイルに合わせて選べる2つのプラン
          </p>
        </div>

        {/* Pricing cards */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.name}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.popular 
                  ? "border-2 border-accent shadow-lg" 
                  : "border-border/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-accent text-primary px-4 py-1 text-sm font-medium flex items-center gap-1.5 rounded-bl-lg">
                    <Crown className="w-4 h-4" />
                    人気
                  </div>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Star className={`w-5 h-5 ${plan.popular ? "text-accent" : "text-primary/30"}`} />
                  <h3 className="text-xl font-bold text-primary">{plan.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-muted-foreground">¥</span>
                    <span className="text-4xl md:text-5xl font-bold text-primary">{plan.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{plan.period}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? "text-accent" : "text-primary"}`} />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={scrollToContact}
                  className={`w-full py-6 ${
                    plan.popular 
                      ? "bg-accent hover:bg-accent/90 text-primary font-semibold" 
                      : "bg-primary hover:bg-primary/90 text-primary-foreground"
                  }`}
                >
                  このプランで相談する
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add-on option */}
        <div className="max-w-4xl mx-auto mt-10">
          <Card className="bg-primary/5 border-primary/10 overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-1">
                      24時間SNS質問し放題オプション
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      面談日以外も、LINEやDiscordでいつでも質問OK。日々の疑問をその場で解消できます。
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:flex-shrink-0">
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">+¥9,800<span className="text-sm font-normal text-muted-foreground">/月</span></p>
                    <p className="text-xs text-muted-foreground">各プランに追加可能</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
