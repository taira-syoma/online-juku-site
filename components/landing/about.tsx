import { BookOpen, Users, Trophy, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  {
    icon: Users,
    value: "50+",
    label: "指導実績",
  },
  {
    icon: Trophy,
    value: "90%",
    label: "目標達成率",
  },
  {
    icon: BookOpen,
    value: "3年+",
    label: "指導経験",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Coach illustration/image area */}
            <div className="order-2 lg:order-1">
              <Card className="bg-card border-border/50 overflow-hidden">
                <CardContent className="p-8 md:p-10">
                  {/* Stylish abstract representation */}
                  <div className="aspect-square max-w-sm mx-auto relative">
                    {/* Background decorative circles */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-full rounded-full bg-primary/5" />
                    </div>
                    <div className="absolute inset-8 flex items-center justify-center">
                      <div className="w-full h-full rounded-full bg-accent/10" />
                    </div>
                    
                    {/* Center content - study tools illustration */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                          <BookOpen className="w-12 h-12 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <p className="text-xs uppercase tracking-wider text-accent font-medium">
                            Medical Student Coach
                          </p>
                          <h3 className="text-xl font-bold text-primary">
                            代表講師
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Achievement stats */}
                  <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
                    {achievements.map((achievement) => (
                      <div key={achievement.label} className="text-center">
                        <achievement.icon className="w-5 h-5 mx-auto mb-2 text-accent" />
                        <p className="text-2xl font-bold text-primary">{achievement.value}</p>
                        <p className="text-xs text-muted-foreground">{achievement.label}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Text content */}
            <div className="order-1 lg:order-2">
              <p className="text-sm font-medium text-accent mb-3 uppercase tracking-wider">
                About
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-balance">
                講師について
              </h2>
              
              <div className="space-y-6 text-foreground leading-relaxed">
                <p>
                  国立大学医学部に在籍する現役の医学生です。受験生時代に培った学習戦略と、大学での論理的思考力を活かし、一人ひとりに最適化された学習サポートを提供しています。
                </p>
                
                <p>
                  塾講師・家庭教師として多数の生徒を指導し、<span className="font-semibold text-primary">偏差値10以上アップの逆転合格</span>を数多くサポートしてきました。
                </p>

                <p className="text-muted-foreground">
                  ※個人の特定を避けるため、名前・顔写真は非公開とし、属性情報のみを開示しております。
                </p>
              </div>

              {/* Privacy notice */}
              <div className="mt-8 flex items-start gap-4 p-4 bg-primary/5 rounded-lg">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-primary text-sm">匿名性へのこだわり</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    指導の質と信頼関係を最優先に、安心してご相談いただける環境を整えています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
