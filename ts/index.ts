console.log("Hello TypeScript");
console.log("bc76");

// cộng chuỗi + cộng số ==> chuỗi số
// string,number,boolean,array,object...
let diemToan: number = 9;
let diemVan: number = 7;

let thongBao: string = "Chúc mừng ngày 20/11";
let kiemTra: boolean = diemToan > 10 && diemVan > 5;

// Mảng
// Lan , Quyên, Hương , Quỳnh
let arrTenSinhVien: Array<string> = ["Lan", "Quyên", "Hương", "5"];
// 500,10000,2000
let arrTienLuong: number[] = [500, 2000, 10000, 123];

// Xe hơi: hãng - màu xe - giá tiền - năm sản xuất
let xeHoi: {
  hang: string;
  mauXe: string;
  giaTien: number;
  namSanXuat: number;
} = {
  giaTien: 15000,
  hang: "Honda",
  mauXe: "Đen",
  namSanXuat: 2019,
};
interface IXeHoi {
  hang: string;
  mauXe: string;
  giaTien: number;
  namSanXuat: number;
}

let xeMazda: IXeHoi = {
  giaTien: 12,
  hang: "Mazda",
  mauXe: "Đỏ",
  namSanXuat: 2020,
  // thêm thuộc tính đã merge
  soLuong: 10,
  kichThuoc: [1, 2, 3],
};

type TypeMonAn = {
  tenMon: string;
  soLuong: number;
  kichThuoc: string[];
};

let miSuiCao: TypeMonAn = {
  tenMon: "Mì Sủi Cảo",
  soLuong: 10,
  kichThuoc: ["nhỏ", "lớn", "vừa"],
};
//merge interface với IXeHoi phía trên
interface IXeHoi {
  soLuong: number;
  kichThuoc: number[];
}

// Union Type
// Chức vụ: "ADMIN" - "KETOAN" - "NHANSU"

type ChucVu = "ADMIN" | "KETOAN" | "NHANSU";
let chucVuLong: ChucVu = "ADMIN";
// kế thừa

// Giáo Viên - Kế Toán
// msnv - ten - chucVu - soNamLamViec - soLopDangDay - danhGia
// msnv - ten - chucVu - soNamLamViec - phongBan - thuongTet
interface IHuman {
  msnv: string;
  ten: string;
  chucVu: "Giáo Viên" | "Kế TOán";
  soNamLamViec: number;
  goiVip?: boolean;
}

interface IGiaoVien extends IHuman {
  soLopDangDay: number[];
  danhGia: number;
}
let coGiaoThao: IGiaoVien = {
  chucVu: "Giáo Viên",
  ten: "Thảo",
  danhGia: 9,
  soLopDangDay: [1, 2, 3],
  msnv: "ABC09",
  soNamLamViec: 4,
  // goiVip:true
};
interface IKeToan extends IHuman {
  phongBan: string;
  thuongTet: number;
}
let keToanThao: IKeToan = {
  chucVu: "Kế TOán",
  ten: "Thảo",
  msnv: "ABC10",
  soNamLamViec: 10,
  phongBan: "IT",
  thuongTet: 10,
};

function tinhTong(diemToan: number, diemVan: number): number {
  return diemToan + diemVan;
}

type TypeHamTinhTong = (diem1: number, diem2: number) => number;
interface ISinhVien {
  diemToan: number;
  diemAnh: number;
  tinhTong: TypeHamTinhTong;
}
let sinhVienLam: ISinhVien = {
  diemAnh: 4,
  diemToan: 3,
  tinhTong: (diemAnh: number, diemVan: number) => {
    return 3 - 3;
  },
};
let diemTongCuaQuan: number = tinhTong(9, 5);

// Generic Type (TGhao tác truyền kiểu dữ liệu động)
interface IResponse<T> {
  statusCode: number;
  message: string;
  dateTime: string;
  content: T; // [object] - object
}

let giayTheoId: IResponse<ISinhVien> = {
  statusCode: 300,
  message: "Thành công",
  dateTime: "09/01/2005",
  content: {
    diemAnh: 9,
    diemToan: 3,
    tinhTong: (a = 4, b = 5) => {
      return a + b;
    },
  },
};

//
type TypeThuocTinhObject = "name" | "gioiTinh" | "soLuong" | "tuoi";
type TypeObject = {
  [key in TypeThuocTinhObject]: string;
};
let object: TypeObject = {
  name: "abc",
  gioiTinh: "xyz",
  soLuong: "10",
  tuoi: "20",
};

// Class
// Quần áo - mauSac - kichThuoc - ten - hang - giaBan - trangThai
class QuanAo {
  ten: string;
  giaBan: number;
  trangThai: boolean;
  kichThuoc: "S" | "M" | "L";
  mauSac: string;
  hang: string;
  constructor(
    _ten: string,
    _giaBan: number,
    _kichThuoc: "S" | "M" | "L",
    _trangThai: boolean,
    _mauSac: string,
    _hang: string
  ) {
    this.ten = _ten;
    this.giaBan = _giaBan;
    this.trangThai = _trangThai;
    this.kichThuoc = _kichThuoc;
    this.mauSac = _mauSac;
    this.hang = _hang;
  }
}

// ThoiTrang
class ThoiTrang extends QuanAo {
  // hiển thị giá tiền
  hienThiGiaTien() {
    console.log(this.giaBan);
  }
}
let quanTay = new QuanAo("Quần tây", 12000, "M", true, "Đỏ", "Prada");
let fashion = new ThoiTrang("Quần tây", 12000, "M", true, "Đỏ", "Prada");
fashion.hienThiGiaTien();

// class Animal
// ten- mauLong - xuatSu - giaTien
// nhanVien - ten - chuVu - heSoLuong

// public (cho phép các object  và các lớp đối tượng được kế thừa có thể sử dụng)
// private (chỉ cho phép sử dụng trong lớp đối tượng, không cho phép object và các lớp đối tượng kế thừa được sử dụng)
// protect (chỉ các lớp đối tượng được kế thừa và lớp đối tượng đang tạo được sử dụng, còn các object được khởi tạo thì không sử dụng)
class Animal {
  //   public ten: string;
  //   private giaTien: number = 5000;
  //   protected soLuong:number = 10
  //   constructor(_ten: string) {
  //     this.ten = _ten;
  //   }
  constructor(
    public ten: string,
    private giaTien: number = 5000,
    protected soLuong: number = 10
  ) {}
  hienThiGiaTien() {
    console.log(this.giaTien);
  }
}

class Animal2 extends Animal {
  tinhGiaTien() {
    this.soLuong;
  }
}

let meoBanhBao = new Animal("Bánh ba0");
meoBanhBao.hienThiGiaTien();

// interface thongTinDangNhap
interface IThongTinDangNhap {
  email: string;
  password: string;
}
// Partial giúp xử lí các thuộc tính bên trong interface sẽ thay đổi thành optional ngay tại thời điểm này
const thongTinDangNhap1: Partial<IThongTinDangNhap> = {
  email: "Khai@gmail",
};
// const thongTinDangNhap2:IThongTinDangNhap = {

// }

interface IBook {
  name: string;
  quanlity: number;
}
interface IUser {
  name: string;
  age: number;
}

type UnionData = "user" | "book";

// book : IBook
const dataHuman: Record<UnionData, IBook[] | IUser[]> = {
  // UnionData :"string" key ibook và iuser sẽ nhận vào 2 mảng nên sẽ chèn vào thuộc tính mảng nào cũng được
  user: [{ name: "Hân", quanlity: 22 }],
  book: [{ name: "Long", age: 12 }],
};

// name , email , phoneNumber , password
interface IAccount {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
}

// đăng nhập : name - password
// đăng ký : name - email - password
const dataDangNhap: Pick<IAccount, "name" | "password"> = {
  name: "Lan",
  password: "123",
};
// lấy những cái còn lại trừ phoneNumber
const dataDangKy: Omit<IAccount, "phoneNumber"> = {
  name: "Hòa",
  email: "hoa123@gmail.com",
  password: "123456",
};

// any : gọi bất kỳ thuộc tính nào cũng được k bị check lỗi đầu vào
const data2: any = {
  quantity: 2,
  hoTen: "Xá xíu",
};

// enum list các dữ liệu nhận vào
// truongPhong,nhanVien,giamDoc
// "TRUONGPHONG"
enum EnumRole {
  truongPhong = "TRUONGPHONG",
  nhanVien = "NHANVIEN",
  giamDoc = "GIAMDOC",
}

interface INhanVien {
  hoTen: string;
  chucVu: EnumRole;
}

const nhanVienNam: INhanVien = {
  hoTen: "Như Quân",
  chucVu: EnumRole.giamDoc,
};
// interface Employee {
//   fullName: string;
//   IsMarried?: boolean;
//   showinfo(): void;
// }

// class Designer implements Employee {
//   fullName: string;
//   constructor(fullName: string) {
//     this.fullName = fullName;
//   }
//   showinfo(): void {
//     console.log(this.fullName);
//   }
// }
// let des = new Designer("Peter");
// des.showinfo();
