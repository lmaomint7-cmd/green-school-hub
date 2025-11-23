import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Recycle, Lightbulb, Users, TreePine, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-green-school.jpg";
import gardenImage from "@/assets/garden-program.jpg";

const Index = () => {
  const pillars = [
    {
      icon: TreePine,
      title: "Campus Xanh Thông Minh",
      description: "Kiến trúc sinh thái kết hợp công nghệ tiên tiến, năng lượng tái tạo"
    },
    {
      icon: Recycle,
      title: "Quản Lý Môi Trường",
      description: "Dự án nghiên cứu về tái chế, xử lý rác thải và kinh tế tuần hoàn"
    },
    {
      icon: BookOpen,
      title: "Chương Trình STEM Xanh",
      description: "Khoa học môi trường, công nghệ sinh học và năng lượng bền vững"
    },
    {
      icon: Lightbulb,
      title: "Đổi Mới Sáng Tạo",
      description: "Khuyến khích sáng kiến xanh, dự án khoa học về môi trường"
    },
    {
      icon: Users,
      title: "Câu Lạc Bộ & Dự Án",
      description: "CLB môi trường, tình nguyện xanh và các dự án cộng đồng"
    },
    {
      icon: Leaf,
      title: "Định Hướng Nghề Nghiệp",
      description: "Chuẩn bị nghề nghiệp xanh và phát triển bền vững"
    }
  ];

  const stats = [
    { number: "100%", label: "Năng lượng tái tạo" },
    { number: "50+", label: "Dự án môi trường" },
    { number: "95%", label: "Tỷ lệ tốt nghiệp" },
    { number: "30+", label: "CLB hoạt động xanh" }
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
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-primary font-medium">Trường THPT</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-['Quicksand']">
            Trường THPT Xanh
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-foreground/90 max-w-3xl mx-auto">
            Giáo dục toàn diện - Trách nhiệm môi trường - Định hướng tương lai bền vững
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
              Tuyển Sinh 2025
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Xem Chương Trình Đào Tạo
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
            Về Trường THPT Xanh
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Trường THPT Xanh tiên phong trong giáo dục bền vững, nơi học sinh không chỉ học kiến thức mà còn 
            phát triển kỹ năng nghiên cứu khoa học, giải quyết vấn đề môi trường và chuẩn bị cho các ngành nghề xanh. 
            Chương trình đào tạo kết hợp chặt chẽ giữa học thuật xuất sắc và trách nhiệm môi trường, 
            giúp học sinh sẵn sàng cho đại học và sự nghiệp tương lai.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <div className="inline-flex items-center gap-2 text-accent font-medium">
              <Leaf className="w-5 h-5" />
              <span>Đào tạo THPT chất lượng cao</span>
            </div>
            <div className="inline-flex items-center gap-2 text-primary font-medium">
              <BookOpen className="w-5 h-5" />
              <span>Định hướng nghề nghiệp xanh</span>
            </div>
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
                Nghiên Cứu Khoa Học Môi Trường
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Học sinh được tham gia các dự án nghiên cứu thực tế về môi trường, từ phân tích chất lượng 
                không khí đến phát triển giải pháp năng lượng xanh. Các nghiên cứu được hướng dẫn bởi giáo viên 
                giàu kinh nghiệm và có cơ hội tham gia các cuộc thi khoa học cấp quốc gia.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Lightbulb className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground">Dự án nghiên cứu khoa học STEM</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Lightbulb className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground">Phòng thí nghiệm môi trường hiện đại</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Lightbulb className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground">Tham gia cuộc thi khoa học quốc gia và quốc tế</span>
                </li>
              </ul>
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Xem Dự Án Học Sinh
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src={gardenImage} 
                alt="Nghiên cứu khoa học môi trường" 
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
            Tuyển Sinh Năm Học 2025
          </h2>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
            Trở thành một phần của cộng đồng THPT Xanh - nơi học sinh phát triển toàn diện, 
            chuẩn bị cho đại học và nghề nghiệp tương lai với trách nhiệm môi trường.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              Hồ Sơ Tuyển Sinh
            </Button>
            <Button size="lg" variant="outline" className="border-background/50 text-primary-foreground hover:bg-primary-foreground/10">
              Tư Vấn Tuyển Sinh
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-muted/30 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-foreground font-['Quicksand']">Trường THPT Xanh</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Giáo dục THPT chất lượng cao - Định hướng nghề nghiệp xanh - Trách nhiệm môi trường
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 Trường THPT Xanh. Mọi quyền được bảo lưu.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
