import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Recycle, Lightbulb, Users, TreePine, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-green-school.jpg";
import gardenImage from "@/assets/garden-program.jpg";

const Index = () => {
  const pillars = [
    {
      icon: TreePine,
      title: "Môi Trường Xanh",
      description: "Campus với không gian xanh, vườn sinh thái và kiến trúc bền vững"
    },
    {
      icon: Recycle,
      title: "Tái Chế & Tiết Kiệm",
      description: "Chương trình tái chế, tiết kiệm năng lượng và giảm thiểu rác thải"
    },
    {
      icon: BookOpen,
      title: "Giáo Dục Môi Trường",
      description: "Chương trình học tập tích hợp kiến thức về bảo vệ môi trường"
    },
    {
      icon: Lightbulb,
      title: "Năng Lượng Sạch",
      description: "Sử dụng năng lượng mặt trời và các nguồn năng lượng tái tạo"
    },
    {
      icon: Users,
      title: "Cộng Đồng Xanh",
      description: "Xây dựng văn hóa bảo vệ môi trường trong cộng đồng học đường"
    },
    {
      icon: Leaf,
      title: "Sống Xanh",
      description: "Khuyến khích lối sống xanh, thân thiện với thiên nhiên"
    }
  ];

  const stats = [
    { number: "100%", label: "Năng lượng tái tạo" },
    { number: "80%", label: "Giảm phát thải CO2" },
    { number: "500+", label: "Cây xanh trồng" },
    { number: "95%", label: "Rác thải tái chế" }
  ];

  return (
    <main className="min-h-screen bg-background font-['Poppins']">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-['Quicksand']">
            Trường Học Xanh
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-foreground/90 max-w-3xl mx-auto">
            Giáo dục bền vững cho thế hệ tương lai - Nơi trẻ em học tập, khám phá và yêu thiên nhiên
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
              Khám Phá Ngay
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Tìm Hiểu Thêm
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full p-1">
            <div className="w-1.5 h-3 bg-primary rounded-full mx-auto" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold mb-2 font-['Quicksand']">{stat.number}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-['Quicksand']">
            Về Trường Học Xanh
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Trường Học Xanh là mô hình giáo dục tiên tiến, tích hợp kiến thức môi trường vào từng hoạt động học tập. 
            Chúng tôi tin rằng giáo dục không chỉ là học thuật mà còn là trách nhiệm với hành tinh, 
            nơi học sinh được trải nghiệm thực tế về bảo vệ môi trường qua các hoạt động sống động và ý nghĩa.
          </p>
          <div className="inline-flex items-center gap-2 text-accent font-medium">
            <Leaf className="w-5 h-5" />
            <span>Cam kết môi trường bền vững</span>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground font-['Quicksand']">
            Các Trụ Cột Xanh
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <Card 
                key={index} 
                className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <pillar.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-['Quicksand']">
                Chương Trình Vườn Sinh Thái
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Học sinh tham gia trồng và chăm sóc cây xanh, rau củ hữu cơ trong vườn trường. 
                Đây là cơ hội tuyệt vời để các em học về chu trình sinh học, trách nhiệm chăm sóc 
                thiên nhiên và giá trị của thực phẩm sạch.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Leaf className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground">Trồng và thu hoạch rau củ hữu cơ</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Leaf className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground">Học về phân bón tự nhiên và composting</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Leaf className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground">Quan sát côn trùng và động vật có ích</span>
                </li>
              </ul>
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Xem Các Chương Trình
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src={gardenImage} 
                alt="Chương trình vườn sinh thái" 
                className="rounded-2xl shadow-2xl w-full h-auto animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-['Quicksand']">
            Cùng Xây Dựng Tương Lai Xanh
          </h2>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
            Hãy tham gia cùng chúng tôi để tạo nên một thế hệ yêu thiên nhiên, 
            hiểu biết về môi trường và sẵn sàng hành động vì một tương lai bền vững.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              Đăng Ký Tham Quan
            </Button>
            <Button size="lg" variant="outline" className="border-background/50 text-primary-foreground hover:bg-primary-foreground/10">
              Liên Hệ Chúng Tôi
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-muted/30 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-foreground font-['Quicksand']">Trường Học Xanh</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Giáo dục bền vững - Tương lai xanh
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 Trường Học Xanh. Mọi quyền được bảo lưu.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
