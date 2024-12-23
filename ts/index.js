var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Hello TypeScript");
console.log("bc76");
// cộng chuỗi + cộng số ==> chuỗi số
// string,number,boolean,array,object...
var diemToan = 9;
var diemVan = 7;
var thongBao = "Chúc mừng ngày 20/11";
var kiemTra = diemToan > 10 && diemVan > 5;
// Mảng
// Lan , Quyên, Hương , Quỳnh
var arrTenSinhVien = ["Lan", "Quyên", "Hương", "5"];
// 500,10000,2000
var arrTienLuong = [500, 2000, 10000, 123];
// Xe hơi: hãng - màu xe - giá tiền - năm sản xuất
var xeHoi = {
    giaTien: 15000,
    hang: "Honda",
    mauXe: "Đen",
    namSanXuat: 2019,
};
var xeMazda = {
    giaTien: 12,
    hang: "Mazda",
    mauXe: "Đỏ",
    namSanXuat: 2020,
    // thêm thuộc tính đã merge
    soLuong: 10,
    kichThuoc: [1, 2, 3],
};
var miSuiCao = {
    tenMon: "Mì Sủi Cảo",
    soLuong: 10,
    kichThuoc: ["nhỏ", "lớn", "vừa"],
};
var chucVuLong = "ADMIN";
var coGiaoThao = {
    chucVu: "Giáo Viên",
    ten: "Thảo",
    danhGia: 9,
    soLopDangDay: [1, 2, 3],
    msnv: "ABC09",
    soNamLamViec: 4,
    // goiVip:true
};
var keToanThao = {
    chucVu: "Kế TOán",
    ten: "Thảo",
    msnv: "ABC10",
    soNamLamViec: 10,
    phongBan: "IT",
    thuongTet: 10,
};
function tinhTong(diemToan, diemVan) {
    return diemToan + diemVan;
}
var sinhVienLam = {
    diemAnh: 4,
    diemToan: 3,
    tinhTong: function (diemAnh, diemVan) {
        return 3 - 3;
    },
};
var diemTongCuaQuan = tinhTong(9, 5);
var giayTheoId = {
    statusCode: 300,
    message: "Thành công",
    dateTime: "09/01/2005",
    content: {
        diemAnh: 9,
        diemToan: 3,
        tinhTong: function (a, b) {
            if (a === void 0) { a = 4; }
            if (b === void 0) { b = 5; }
            return a + b;
        },
    },
};
var object = {
    name: "abc",
    gioiTinh: "xyz",
    soLuong: "10",
    tuoi: "20",
};
// Class
// Quần áo - mauSac - kichThuoc - ten - hang - giaBan - trangThai
var QuanAo = /** @class */ (function () {
    function QuanAo(_ten, _giaBan, _kichThuoc, _trangThai, _mauSac, _hang) {
        this.ten = _ten;
        this.giaBan = _giaBan;
        this.trangThai = _trangThai;
        this.kichThuoc = _kichThuoc;
        this.mauSac = _mauSac;
        this.hang = _hang;
    }
    return QuanAo;
}());
// ThoiTrang
var ThoiTrang = /** @class */ (function (_super) {
    __extends(ThoiTrang, _super);
    function ThoiTrang() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // hiển thị giá tiền
    ThoiTrang.prototype.hienThiGiaTien = function () {
        console.log(this.giaBan);
    };
    return ThoiTrang;
}(QuanAo));
var quanTay = new QuanAo("Quần tây", 12000, "M", true, "Đỏ", "Prada");
var fashion = new ThoiTrang("Quần tây", 12000, "M", true, "Đỏ", "Prada");
fashion.hienThiGiaTien();
// class Animal
// ten- mauLong - xuatSu - giaTien
// nhanVien - ten - chuVu - heSoLuong
// public (cho phép các object  và các lớp đối tượng được kế thừa có thể sử dụng)
// private (chỉ cho phép sử dụng trong lớp đối tượng, không cho phép object và các lớp đối tượng kế thừa được sử dụng)
// protect (chỉ các lớp đối tượng được kế thừa và lớp đối tượng đang tạo được sử dụng, còn các object được khởi tạo thì không sử dụng)
var Animal = /** @class */ (function () {
    //   public ten: string;
    //   private giaTien: number = 5000;
    //   protected soLuong:number = 10
    //   constructor(_ten: string) {
    //     this.ten = _ten;
    //   }
    function Animal(ten, giaTien, soLuong) {
        if (giaTien === void 0) { giaTien = 5000; }
        if (soLuong === void 0) { soLuong = 10; }
        this.ten = ten;
        this.giaTien = giaTien;
        this.soLuong = soLuong;
    }
    Animal.prototype.hienThiGiaTien = function () {
        console.log(this.giaTien);
    };
    return Animal;
}());
var Animal2 = /** @class */ (function (_super) {
    __extends(Animal2, _super);
    function Animal2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Animal2.prototype.tinhGiaTien = function () {
        this.soLuong;
    };
    return Animal2;
}(Animal));
var meoBanhBao = new Animal("Bánh ba0");
meoBanhBao.hienThiGiaTien();
// Partial giúp xử lí các thuộc tính bên trong interface sẽ thay đổi thành optional ngay tại thời điểm này
var thongTinDangNhap1 = {
    email: "Khai@gmail",
};
// book : IBook
var dataHuman = {
    user: [{ name: "Hân", quanlity: 22 }],
    book: [{ name: "Long", age: 12 }],
};
// đăng nhập : name - password
// đăng ký : name - email - password
var dataDangNhap = {
    name: "Lan",
    password: "123",
};
// lấy những cái còn lại trừ phoneNumber
var dataDangKy = {
    name: "Hòa",
    email: "hoa123@gmail.com",
    password: "123456",
};
// any
var data2 = {
    quantity: 2,
    hoTen: "Xá xíu",
};
// enum list các dữ liệu nhận vào
// truongPhong,nhanVien,giamDoc
// "TRUONGPHONG"
var EnumRole;
(function (EnumRole) {
    EnumRole["truongPhong"] = "TRUONGPHONG";
    EnumRole["nhanVien"] = "NHANVIEN";
    EnumRole["giamDoc"] = "GIAMDOC";
})(EnumRole || (EnumRole = {}));
var nhanVienNam = {
    hoTen: "Như Quân",
    chucVu: EnumRole.giamDoc,
};
var Designer = /** @class */ (function () {
    function Designer(fullName) {
        this.fullName = fullName;
    }
    Designer.prototype.showinfo = function () {
        console.log(this.fullName);
    };
    return Designer;
}());
var des = new Designer("Peter");
des.showinfo();
