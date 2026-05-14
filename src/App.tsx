
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  Bot, 
  Cpu, 
  Layers, 
  Zap, 
  Shield, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Github, 
  Twitter, 
  Mail,
  Menu,
  X,
  Sparkles,
  Command
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { cn } from "@/lib/utils";
import { useSEO } from "@/lib/seo";

const queryClient = new QueryClient();

// --- Components ---

const GlassCard = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn(
    "backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl transition-all duration-300",
    className
  )}>
    {children}
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "الميزات", path: "/features" },
    { name: "الأسعار", path: "/pricing" },
    { name: "من نحن", path: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-6xl mx-auto">
        <GlassCard className="px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-2 rounded-xl">
              <Sparkles className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
              Astra AI
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === link.path ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:inline-flex">تسجيل الدخول</Button>
            <Button className="rounded-full shadow-lg shadow-primary/20">ابدأ مجاناً</Button>
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </GlassCard>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4"
          >
            <GlassCard className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium p-2"
                >
                  {link.name}
                </Link>
              ))}
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="border-t border-white/10 pt-20 pb-10 mt-20">
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="text-primary w-6 h-6" />
            <span className="text-2xl font-bold">Astra AI</span>
          </div>
          <p className="text-muted-foreground text-sm">
            الجيل القادم من وكلاء الذكاء الاصطناعي ذاتيي التشغيل المصممة لرفع كفاءة الأعمال.
          </p>
          <div className="flex gap-4">
            <Twitter className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-primary transition-colors" />
            <Github className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-primary transition-colors" />
            <Mail className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-primary transition-colors" />
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4">المنتج</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="hover:text-primary cursor-pointer">الميزات</li>
            <li className="hover:text-primary cursor-pointer">التكاملات</li>
            <li className="hover:text-primary cursor-pointer">API الوكلاء</li>
            <li className="hover:text-primary cursor-pointer">الأمان</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">المصادر</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="hover:text-primary cursor-pointer">المدونة</li>
            <li className="hover:text-primary cursor-pointer">التوثيق</li>
            <li className="hover:text-primary cursor-pointer">أدلة الاستخدام</li>
            <li className="hover:text-primary cursor-pointer">المجتمع</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">الشركة</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="hover:text-primary cursor-pointer">من نحن</li>
            <li className="hover:text-primary cursor-pointer">وظائف</li>
            <li className="hover:text-primary cursor-pointer">اتصل بنا</li>
            <li className="hover:text-primary cursor-pointer">قانوني</li>
          </ul>
        </div>
      </div>
      <div className="text-center pt-8 border-t border-white/10 text-sm text-muted-foreground">
        © 2024 Astra AI. جميع الحقوق محفوظة.
      </div>
    </Container>
  </footer>
);

// --- Pages ---

const Home = () => {
  useSEO("Astra AI - وكلاء ذكاء اصطناعي ثوريين", "أتمتة أعمالك باستخدام وكلاء الأداء العالي من Astra AI.");
  
  return (
    <div className="relative pt-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[150px] rounded-full -z-10" />

      <Section>
        <Container className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-sm text-primary font-medium"
          >
            <Sparkles className="w-4 h-4" />
            <span>نقدم نظام iOS 26 الجديد للذكاء الاصطناعي</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black tracking-tighter leading-none"
          >
            مستقبل الأعمال يدار <br /> 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-indigo-500">
              بوكلاء أذكياء
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            استخدم وكلاء Astra AI لتنفيذ المهام المعقدة، تحليل البيانات، والتفاعل مع عملائك على مدار الساعة بدقة بشرية وسرعة خارقة.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="rounded-full text-lg px-8 h-14 shadow-xl shadow-primary/30">
              ابدأ تجربتك المجانية <ArrowRight className="mr-2 w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-lg px-8 h-14 backdrop-blur-sm border-white/20">
              مشاهدة العرض الحي
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-20 px-4"
          >
            <GlassCard className="relative p-2 overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.2)]">
              <img 
                src="https://picsum.photos/seed/dashboard/1600/900" 
                alt="لوحة التحكم" 
                className="rounded-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
            </GlassCard>
          </motion.div>
        </Container>
      </Section>

      <Section className="bg-white/5 py-40">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold leading-tight">لماذا Astra AI هي الخيار الأمثل للمؤسسات الطموحة؟</h2>
              <p className="text-muted-foreground text-lg">
                نحن لا نقدم مجرد دردشة آليه؛ نحن نقدم "عقولاً" رقمية قادرة على اتخاذ القرار، التعاون، والتطور مع كل مهمة تؤديها.
              </p>
              <div className="space-y-4">
                {[
                  "زمن استجابة أقل من 50 مللي ثانية",
                  "تكامل عميق مع Slack, Discord, و CRM",
                  "بروتوكولات تشفير عسكرية للبيانات",
                  "قدرة على معالجة 1000 مهمة في الدقيقة"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <GlassCard className="p-8 aspect-square flex flex-col justify-center items-center text-center gap-4 hover:scale-105 transition-transform">
                <div className="bg-blue-500/20 p-4 rounded-3xl"><Bot className="w-10 h-10 text-blue-500" /></div>
                <h3 className="font-bold">وكلاء متخصصون</h3>
              </GlassCard>
              <GlassCard className="p-8 aspect-square flex flex-col justify-center items-center text-center gap-4 mt-8 hover:scale-105 transition-transform">
                <div className="bg-purple-500/20 p-4 rounded-3xl"><Zap className="w-10 h-10 text-purple-500" /></div>
                <h3 className="font-bold">استجابة فائقة</h3>
              </GlassCard>
              <GlassCard className="p-8 aspect-square flex flex-col justify-center items-center text-center gap-4 -mt-8 hover:scale-105 transition-transform">
                <div className="bg-emerald-500/20 p-4 rounded-3xl"><Layers className="w-10 h-10 text-emerald-500" /></div>
                <h3 className="font-bold">هيكلية مرنة</h3>
              </GlassCard>
              <GlassCard className="p-8 aspect-square flex flex-col justify-center items-center text-center gap-4 hover:scale-105 transition-transform">
                <div className="bg-orange-500/20 p-4 rounded-3xl"><Shield className="w-10 h-10 text-orange-500" /></div>
                <h3 className="font-bold">أمان حقيقي</h3>
              </GlassCard>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

const Features = () => {
  useSEO("الميزات - Astra AI", "اكتشف القوة الكامنة لوكلائنا الذكيين.");
  return (
    <div className="pt-32">
      <Container>
        <div className="text-center mb-20 space-y-4">
          <h1 className="text-5xl font-bold">قدرات لا حصر لها</h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            من الأتمتة البسيطة إلى اتخاذ القرارات الاستراتيجية المعقدة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "التعلم المستمر", desc: "يتعلم الوكيل من تفاعلاتك السابقة ليصبح أكثر دقة بمرور الوقت.", icon: <Cpu /> },
            { title: "بناء الوكلاء المرئي", desc: "واجهة سحب وإفلات لبناء تدفقات عمل معقدة دون كتابة كود واحد.", icon: <Command /> },
            { title: "تحليل المشاعر", desc: "فهم الحالة العاطفية للعملاء والاستجابة بنبرة مناسبة دائماً.", icon: <Users /> },
            { title: "تعدد اللغات", desc: "دعم لـ 95 لغة عالمية بطلاقة تامة ووعي ثقافي محلي.", icon: <Sparkles /> },
            { title: "تقارير ذكية", desc: "احصل على رؤى حول أداء وكلائك وكيفية تحسين إنتاجية فريقك.", icon: <Layers /> },
            { title: "توسع تلقائي", desc: "النظام يتوسع تلقائياً للتعامل مع الملايين من الطلبات المتزامنة.", icon: <Shield /> },
          ].map((f, i) => (
            <GlassCard key={i} className="p-8 hover:bg-white/15 transition-colors group cursor-default">
              <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </GlassCard>
          ))}
        </div>

        <Section className="mt-20">
          <GlassCard className="p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
             <div className="flex-1 space-y-6">
                <h2 className="text-4xl font-bold">هل أنت مطور؟</h2>
                <p className="text-muted-foreground text-lg">
                  استخدم الـ SDK الخاص بنا لدمج وكلاء Astra في تطبيقاتك الخاصة في دقائق معدودة.
                </p>
                <code className="block p-4 bg-black/40 rounded-xl font-mono text-sm border border-white/10">
                  npm install @astra/ai-core
                </code>
                <Button variant="secondary" className="rounded-full">قراءة التوثيق</Button>
             </div>
             <div className="flex-1">
                <img src="https://picsum.photos/seed/code/600/400" className="rounded-2xl shadow-2xl rotate-2" alt="Dev Tools" />
             </div>
          </GlassCard>
        </Section>
      </Container>
    </div>
  );
};

const Pricing = () => {
  useSEO("الأسعار - Astra AI", "اختر الخطة المناسبة لنمو أعمالك.");
  return (
    <div className="pt-32">
      <Container>
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-bold">خطط بسيطة وشفافة</h1>
          <p className="text-muted-foreground text-xl">ابدأ مجاناً وقم بالترقية حسب حاجتك.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          <GlassCard className="p-8 space-y-6 flex flex-col">
            <div>
              <h3 className="text-2xl font-bold italic">بداية</h3>
              <div className="flex items-baseline mt-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-muted-foreground ml-2">/للأبد</span>
              </div>
            </div>
            <ul className="space-y-4 flex-1">
              {["وكيل واحد نشط", "1,000 رسالة/شهر", "دعم مجتمعي", "ميزات أساسية"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> {item}
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full rounded-full">ابدأ الآن</Button>
          </GlassCard>

          <GlassCard className="p-8 space-y-6 flex flex-col border-primary/50 relative bg-white/15 scale-105">
            <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">الاكثر شعبية</div>
            <div>
              <h3 className="text-2xl font-bold italic">نمو</h3>
              <div className="flex items-baseline mt-4">
                <span className="text-4xl font-bold">$49</span>
                <span className="text-muted-foreground ml-2">/شهرياً</span>
              </div>
            </div>
            <ul className="space-y-4 flex-1 font-medium">
              {[
                "10 وكلاء نشطين",
                "50,000 رسالة/شهر",
                "دعم بريد ممتاز",
                "تعاون الفريق (5 مستخدمين)",
                "إزالة شعار Astra AI"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> {item}
                </li>
              ))}
            </ul>
            <Button className="w-full rounded-full shadow-lg shadow-primary/30">اختر هذه الخطة</Button>
          </GlassCard>

          <GlassCard className="p-8 space-y-6 flex flex-col">
            <div>
              <h3 className="text-2xl font-bold italic">مؤسسات</h3>
              <div className="flex items-baseline mt-4">
                <span className="text-2xl font-bold">اتصل بنا</span>
              </div>
            </div>
            <ul className="space-y-4 flex-1">
              {[
                "عدد غير محدود من الوكلاء",
                "استضافة داخلية (On-premise)",
                "مدير حساب مخصص",
                "اتفاقيات مستوى الخدمة SLA",
                "تطوير ميزات مخصصة"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> {item}
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full rounded-full">تواصل مع المبيعات</Button>
          </GlassCard>
        </div>
      </Container>
    </div>
  );
};

const About = () => {
  useSEO("من نحن - Astra AI", "تعرف على الفريق وراء الثورة القادمة.");
  return (
    <div className="pt-32">
       <Container className="space-y-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold">مهمتنا هي تمكين البشر لا استبدالهم.</h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                في Astra AI، نؤمن أن الذكاء الاصطناعي هو أعظم أداة تم اختراعها لتعزيز الإبداع البشري. نحن نعمل منذ 2021 على بناء أنظمة لا تعالج البيانات فحسب، بل تفهم السياق وتساعد البشر على التركيز على ما يقومون به بشكل أفضل: الابتكار.
              </p>
              <div className="p-6 border-l-4 border-primary bg-white/5 rounded-r-2xl italic">
                "مستقبل العمل ليس في المزيد من الجهد، بل في المزيد من الذكاء."
              </div>
            </div>
            <img src="https://picsum.photos/seed/team/800/600" className="rounded-3xl shadow-2xl" alt="Our team" />
          </div>

          <div className="text-center space-y-12">
            <h2 className="text-4xl font-bold">القيم التي تحركنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="text-primary text-3xl font-bold">01.</div>
                <h3 className="text-xl font-bold">الخصوصية أولاً</h3>
                <p className="text-muted-foreground">بياناتك ملك لك. لا نقوم بتدريب النماذج العامة على بيانات عملائنا الخاصة نهائياً.</p>
              </div>
              <div className="space-y-4">
                <div className="text-primary text-3xl font-bold">02.</div>
                <h3 className="text-xl font-bold">البساطة الجذرية</h3>
                <p className="text-muted-foreground">التكنولوجيا المعقدة يجب أن تأتي بواجهة بسيطة يمكن لأي شخص استخدامها.</p>
              </div>
              <div className="space-y-4">
                <div className="text-primary text-3xl font-bold">03.</div>
                <h3 className="text-xl font-bold">الابتكار المفتوح</h3>
                <p className="text-muted-foreground">نساهم في مشاريع المصدر المفتوح ونؤمن بالتعاون لرفع مستوى الصناعة بأكملها.</p>
              </div>
            </div>
          </div>
       </Container>
    </div>
  );
};

// --- App Root ---

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <div className="min-h-screen bg-slate-50 dark:bg-[#050505] text-foreground transition-colors duration-500 font-sans selection:bg-primary selection:text-white" dir="rtl">
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
