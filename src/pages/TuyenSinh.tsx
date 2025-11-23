import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Calendar, FileText, Trophy, CheckCircle2, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  hoTen: z.string().min(2, "Họ tên phải có ít nhất 2 ký tự").max(100, "Họ tên không vượt quá 100 ký tự"),
  ngaySinh: z.string().min(1, "Vui lòng nhập ngày sinh"),
  gioiTinh: z.string().min(1, "Vui lòng chọn giới tính"),
  soDienThoai: z.string().regex(/^[0-9]{10}$/, "Số điện thoại phải có 10 chữ số"),
  email: z.string().email("Email không hợp lệ").max(255, "Email không vượt quá 255 ký tự"),
  truongHienTai: z.string().min(2, "Vui lòng nhập tên trường hiện tại").max(200, "Tên trường không vượt quá 200 ký tự"),
  diemTrungBinh: z.string().min(1, "Vui lòng nhập điểm trung bình"),
  lopDangKy: z.string().min(1, "Vui lòng chọn lớp đăng ký"),
  diaChi: z.string().min(5, "Địa chỉ phải có ít nhất 5 ký tự").max(500, "Địa chỉ không vượt quá 500 ký tự"),
  hoTenPhuHuynh: z.string().min(2, "Họ tên phụ huynh phải có ít nhất 2 ký tự").max(100, "Họ tên không vượt quá 100 ký tự"),
  soDienThoaiPhuHuynh: z.string().regex(/^[0-9]{10}$/, "Số điện thoại phải có 10 chữ số"),
  ghiChu: z.string().max(1000, "Ghi chú không vượt quá 1000 ký tự").optional(),
  dongY: z.boolean().refine((val) => val === true, "Bạn phải đồng ý với điều khoản"),
});

const TuyenSinh = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hoTen: "",
      ngaySinh: "",
      gioiTinh: "",
      soDienThoai: "",
      email: "",
      truongHienTai: "",
      diemTrungBinh: "",
      lopDangKy: "",
      diaChi: "",
      hoTenPhuHuynh: "",
      soDienThoaiPhuHuynh: "",
      ghiChu: "",
      dongY: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", values);
    
    toast({
      title: "Đăng ký thành công!",
      description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  const dieuKien = [
    "Học sinh tốt nghiệp THCS hoặc tương đương",
    "Điểm trung bình năm học lớp 9 từ 6.5 trở lên",
    "Có giấy xác nhận hạnh kiểm và học lực từ trường THCS",
    "Có hồ sơ sức khỏe đầy đủ",
    "Cam kết tuân thủ nội quy và giá trị xanh của trường",
  ];

  const hoSo = [
    "Đơn xin nhập học (theo mẫu của trường)",
    "Bản sao học bạ THCS (công chứng)",
    "Giấy khai sinh (bản sao công chứng)",
    "4 ảnh 3x4 (chụp trong 6 tháng gần đây)",
    "Giấy xác nhận sức khỏe",
    "Bản sao CMND/CCCD của phụ huynh",
    "Giấy xác nhận ưu tiên (nếu có)",
  ];

  const lichThi = [
    { su_kien: "Nộp hồ sơ", thoi_gian: "01/03/2025 - 31/05/2025", dia_diem: "Phòng Tuyển sinh" },
    { su_kien: "Xét duyệt hồ sơ", thoi_gian: "01/06/2025 - 15/06/2025", dia_diem: "Online" },
    { su_kien: "Thi tuyển", thoi_gian: "20/06/2025", dia_diem: "Campus chính" },
    { su_kien: "Công bố kết quả", thoi_gian: "25/06/2025", dia_diem: "Website & Bảng tin" },
    { su_kien: "Nhập học", thoi_gian: "01/08/2025 - 15/08/2025", dia_diem: "Phòng Đào tạo" },
  ];

  const ketQua = [
    { nam: "2024", chiTieu: 450, trungTuyen: 445, diemChuan: 7.2 },
    { nam: "2023", chiTieu: 420, trungTuyen: 418, diemChuan: 7.0 },
    { nam: "2022", chiTieu: 400, trungTuyen: 395, diemChuan: 6.8 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-accent/5 to-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6 text-primary-foreground hover:bg-primary-foreground/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Về Trang Chủ
          </Button>
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">Tuyển Sinh 2025</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Chào mừng thế hệ học sinh mới đến với ngôi trường THPT xanh hiện đại
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="dieu-kien" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto">
            <TabsTrigger value="dieu-kien" className="py-3">
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Điều Kiện
            </TabsTrigger>
            <TabsTrigger value="ho-so" className="py-3">
              <FileText className="mr-2 h-4 w-4" />
              Hồ Sơ
            </TabsTrigger>
            <TabsTrigger value="lich-thi" className="py-3">
              <Calendar className="mr-2 h-4 w-4" />
              Lịch Thi
            </TabsTrigger>
            <TabsTrigger value="ket-qua" className="py-3">
              <Trophy className="mr-2 h-4 w-4" />
              Kết Quả
            </TabsTrigger>
            <TabsTrigger value="dang-ky" className="py-3 font-bold">
              Đăng Ký
            </TabsTrigger>
          </TabsList>

          {/* Điều Kiện Tab */}
          <TabsContent value="dieu-kien" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Điều Kiện Tuyển Sinh</CardTitle>
                <CardDescription>Yêu cầu cơ bản để đăng ký nhập học</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {dieuKien.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-accent/30 transition-all hover:bg-accent/50">
                    <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardHeader>
                <CardTitle>Ưu Tiên Xét Tuyển</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Con em gia đình chính sách, ưu tiên theo quy định
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Học sinh có thành tích xuất sắc về môi trường
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Học sinh có chứng chỉ quốc tế về tiếng Anh, khoa học
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Hồ Sơ Tab */}
          <TabsContent value="ho-so" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Hồ Sơ Đăng Ký</CardTitle>
                <CardDescription>Danh sách giấy tờ cần chuẩn bị</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {hoSo.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-accent/30 transition-all hover:bg-accent/50">
                    <FileText className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-destructive/5 to-destructive/10 border-destructive/20">
              <CardHeader>
                <CardTitle className="text-destructive">Lưu Ý Quan Trọng</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p>• Hồ sơ cần được nộp đầy đủ và đúng thời hạn</p>
                <p>• Giấy tờ công chứng phải còn hiệu lực (không quá 6 tháng)</p>
                <p>• Trường sẽ không hoàn trả hồ sơ trong mọi trường hợp</p>
                <p>• Hồ sơ gian lận sẽ bị hủy kết quả tuyển sinh</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Lịch Thi Tab */}
          <TabsContent value="lich-thi" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Lịch Trình Tuyển Sinh</CardTitle>
                <CardDescription>Các mốc thời gian quan trọng trong năm 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {lichThi.map((item, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-lg bg-gradient-to-r from-accent/30 to-accent/50 border-l-4 border-primary transition-all hover:shadow-lg"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-primary mb-2">{item.su_kien}</h3>
                          <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                            <span className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              {item.thoi_gian}
                            </span>
                            <span className="flex items-center gap-2">
                              <FileText className="h-4 w-4" />
                              {item.dia_diem}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Kết Quả Tab */}
          <TabsContent value="ket-qua" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Kết Quả Tuyển Sinh Các Năm</CardTitle>
                <CardDescription>Thống kê điểm chuẩn và tỷ lệ trúng tuyển</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-primary">
                        <th className="text-left p-4 font-bold">Năm</th>
                        <th className="text-center p-4 font-bold">Chỉ Tiêu</th>
                        <th className="text-center p-4 font-bold">Trúng Tuyển</th>
                        <th className="text-center p-4 font-bold">Điểm Chuẩn</th>
                        <th className="text-center p-4 font-bold">Tỷ Lệ</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ketQua.map((item, index) => (
                        <tr key={index} className="border-b hover:bg-accent/30 transition-colors">
                          <td className="p-4 font-bold text-lg">{item.nam}</td>
                          <td className="text-center p-4">{item.chiTieu}</td>
                          <td className="text-center p-4 text-primary font-semibold">{item.trungTuyen}</td>
                          <td className="text-center p-4">
                            <span className="px-3 py-1 bg-primary/20 rounded-full font-bold">{item.diemChuan}</span>
                          </td>
                          <td className="text-center p-4">
                            <span className="text-green-600 font-semibold">
                              {((item.trungTuyen / item.chiTieu) * 100).toFixed(1)}%
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardHeader>
                <CardTitle>Phân Tích Xu Hướng</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p>📈 Chỉ tiêu tuyển sinh tăng đều qua các năm</p>
                <p>📊 Điểm chuẩn có xu hướng tăng nhẹ do chất lượng đầu vào cao</p>
                <p>🎯 Tỷ lệ trúng tuyển ổn định trên 98%</p>
                <p>✨ Trường ưu tiên chất lượng hơn số lượng</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Đăng Ký Tab */}
          <TabsContent value="dang-ky" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Form Đăng Ký Trực Tuyến</CardTitle>
                <CardDescription>Hoàn thành form để đăng ký xét tuyển vào trường</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="hoTen"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Họ và Tên Học Sinh *</FormLabel>
                            <FormControl>
                              <Input placeholder="Nguyễn Văn A" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="ngaySinh"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Ngày Sinh *</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="gioiTinh"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Giới Tính *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Chọn giới tính" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="nam">Nam</SelectItem>
                                <SelectItem value="nu">Nữ</SelectItem>
                                <SelectItem value="khac">Khác</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="soDienThoai"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Số Điện Thoại Học Sinh *</FormLabel>
                            <FormControl>
                              <Input placeholder="0912345678" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="truongHienTai"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Trường THCS Hiện Tại *</FormLabel>
                            <FormControl>
                              <Input placeholder="THCS Lê Quý Đôn" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="diemTrungBinh"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Điểm Trung Bình Lớp 9 *</FormLabel>
                            <FormControl>
                              <Input type="number" step="0.1" min="0" max="10" placeholder="8.5" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="lopDangKy"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Lớp Đăng Ký *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Chọn lớp" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="10">Lớp 10</SelectItem>
                                <SelectItem value="11">Lớp 11 (Chuyển trường)</SelectItem>
                                <SelectItem value="12">Lớp 12 (Chuyển trường)</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="diaChi"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Địa Chỉ Thường Trú *</FormLabel>
                          <FormControl>
                            <Input placeholder="123 Đường ABC, Quận XYZ, TP. HCM" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="hoTenPhuHuynh"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Họ Tên Phụ Huynh *</FormLabel>
                            <FormControl>
                              <Input placeholder="Nguyễn Văn B" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="soDienThoaiPhuHuynh"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Số Điện Thoại Phụ Huynh *</FormLabel>
                            <FormControl>
                              <Input placeholder="0987654321" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="ghiChu"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ghi Chú (Nếu có)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Thông tin bổ sung, thành tích đặc biệt..."
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="dongY"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 bg-accent/30">
                          <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              Tôi xác nhận rằng các thông tin trên là chính xác và đồng ý với các điều khoản tuyển sinh
                              của trường *
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <div className="flex gap-4">
                      <Button type="submit" size="lg" className="flex-1" disabled={isSubmitting}>
                        {isSubmitting ? "Đang gửi..." : "Đăng Ký Ngay"}
                      </Button>
                      <Button type="button" variant="outline" size="lg" onClick={() => form.reset()}>
                        Xóa Form
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TuyenSinh;
