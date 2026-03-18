import { Search, Map, MessageCircleQuestion, ArrowDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "現状分析",
    description: "現在の学習状況、得意・不得意、目標を徹底的にヒアリング。データに基づいた客観的な分析を行います。",
    details: ["学習時間・習慣の可視化", "科目別の理解度診断", "志望校との距離感の測定"],
  },
  {
    number: "02",
    icon: Map,
    title: "計画策定",
    description: "分析結果をもとに、あなただけのオーダーメイド学習計画を策定。無理なく、確実に前進できるロードマップを作成します。",
    details: ["週単位・月単位の学習計画", "優先順位の明確化", "進捗管理シートの作成"],
  },
  {
    number: "03",
    icon: MessageCircleQuestion,
    title: "質問回答",
    description: "面談中の質問はもちろん、日々の学習で生じた疑問にも丁寧に対応。一人で抱え込まない環境を提供します。",
    details: ["Zoom面談での直接指導", "学習法に関する相談", "モチベーション管理のサポート"],
  },
];

export function Service() {
  return (
    <section id="service" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-accent mb-3 uppercase tracking-wider">
            Service
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">
            伴走型コーチングの流れ
          </h2>
          <p className="text-muted-foreground leading-relaxed text-pretty">
            授業をするのではなく、Zoom面談を通じて学習の質を最大化。
            <br className="hidden md:block" />
            あなた専属の学習戦略パートナーとして伴走します。
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <Card className="bg-card border-border/50 mb-6 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Number and icon */}
                      <div className="flex md:flex-col items-center md:items-start gap-4">
                        <span className="text-4xl md:text-5xl font-bold text-accent/30">
                          {step.number}
                        </span>
                        <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center">
                          <step.icon className="w-7 h-7 text-primary" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {step.description}
                        </p>
                        <ul className="space-y-2">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center mb-6">
                    <ArrowDown className="w-6 h-6 text-accent/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
