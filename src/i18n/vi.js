export default {
  line: "Chuyển tuyến",
  language: "Chọn ngôn ngữ",
  common: [
    "Chăm sóc khách hàng trực tuyến",
    "Hủy tính năng đa cửa sổ"
  ],
    home: {
        broadcast: "Chúc mừng thành viên {member}đề xuất một người{vipname}<br>nhận được {currency}{grade}tiền thưởng quảng bá!",
        taskHall: {
            title: ["Sảnh nhiệm vụ","Sảnh thương gia đăng"]
        },
        memberList: {
            title: "Danh sách thành viên",
            data: ['Chúc mừng :{member}','hôm nay đã hoàn thành {num}nhiệm vụ ,nhận được {currency}{profit}!']
        },
        businessList: {
            title: "Danh sách thương gia ",
            data: [
            "{member}",
            "Hôm nay đăng  {num}nhiệm vụ"
            ]
        },
        noticeTitle: "Lời nhắc nhở",
        tabBar: ['Trang đầu','Nhiệm vụ','VIP','Doanh thu','Của tôi'],
    menu: [
      "Chuyên VIP",
      "Video hướng dẫn",
      "Tiền thưởng quảng bá"
    ],
msg: "Nhiệm vụ chưa mở",
video: "Tạm thời không có video hướng dẫn"
    
    },

  login: {
    text: [
      "Ghi nhớ tên đăng nhập/mật khẩu",
      "Đang đăng nhập...",
      "Đăng nhập ngay"
    ],
    placeholder: [
      "Vui lòng nhập số điện thoại",
      "Vui lòng nhập mật khẩu đăng nhập"
    ],
    i18n: [
      "Không có {title}tài khoản ？{a} {line}",
      "Đăng kí "
    ]
  },
  register: {
    text: [
      "Hoan nghênh đăng ký",
      "Đang gửi mã xác minh qua tin nhắn ...",
      "Nhận mã xác minh qua tin nhắn",
      "Đang đăng kí...",
      "Đăng kí ngay",
      "Đã có tài khoản，tải ngay",
      "Đăng kí qua số điện thoại",
      "Đăng kí qua email"
    ],
    placeholder: [
      "Vui lòng nhập số điện thoại",
      "Vui lòng nhập mã xác minh qua tin nhắn ",
      "Vui lòng nhập mật khẩu đăng nhập",
      "Vui lòng xác nhận mật khẩu của bạn",
      "Vui lòng nhập mã mời",
      "Hai lần nhập mật khẩu không khớp",
      "Vui lòng nhập mã xác minh ",
      "Vui lòng nhập địa chỉ email"
    ],
    i18n: [
      "Đã có tài khoản？{a} {line}",
      "Đăng nhập"
    ]
  },





    postTask: {
        navBar: {
            title: "Nhiệm vụ đăng",
            right: "Quy tắc đăng"
        },
        field: [
            {
                label: "Phân loại nhiệm vụ",
            },
            {
                label: "Tiêu đề nhiệm vụ",
                placeholder: "Vui lòng nhập tiêu đề nhiệm vụ",
                error: "Tiêu đề nhiệm vụ không được để trống"
            },
            {
                label: "Giới thiệu sơ lược về nhiệm vụ",
                placeholder: "Vui lòng nhập giới thiệu về nhiệm vụ"
            },
            {
                label: "Đơn giá nhiệm vụ",
                placeholder: "Vui lòng nhập đơn giá nhiệm vụ",
                right: "{currency}",
                error: ["Đơn giá nhiệm vụ không được để trống","Đơn giá nhiệm vụ không được thấp hơn 1{currency}"]
            },
            {
                label: "Số lượng nhận ",
                placeholder: "Vui lòng nhập số lượng nhận",
                error: "Số lượng nhận không được để trống"
            },
            {
                label: "Số lần nhận",
                placeholder: "Vui lòng nhập số lần nhận",
                right: "lần /người ",
                error: "Số lần nhận không được để trống"
            },
            {
                label: "Tổng giá nhiệm vụ",
                error: "Chưa tính tổng giá nhiệm vụ"
            },
            {
                label: "Thông tin liên kết",
                placeholder: "Vui lòng nhập địa chỉ liên kết",
                error: "Thông tin liên kết không được để trống"
            },
            {
                label: "Cấp bậc nhiệm vụ",
            },
            {
                label: "Ngày kết thúc",
                placeholder: "Nhấn để chọn ngày tháng",
                error: "Ngày kết thúc không được để trống"
            },
            {
                label: "Điều kiện hoàn thành",
                error: "Vui lòng chọn điều kiện hoàn thành"
            },
            {
                label: "Ví dụ về xét duyệt",
            },
            {
                label: "Các bước thao tác",
                placeholder: "Các bước đơn giản dễ hiểu có lợi cho việc hoàn thành !",
                error: "Các bước thao tác không được để trống"
            },
        ],
        button: "Gửi đi",
        step: {
            title: "Các bước thao tác",
            right: "Hoàn thành ",
            placeholder: "Vui lòng nhập mô tả các bước",
            button: ['Xóa','Thêm']
        },
        tips: [
      "Phí thủ tục của nền tảng khoảng {pump}{br}Lần đăng này cần thanh toán khoảng  {price}，Vui lòng đảm bảo số dư đủ {a}{br}Lời nhắc nhở: Nền tảng này cấm đăng những nội dung khiêu dâm,cá cược,chất gây nghiện,nội dung liên quan chính trị và những nội dung pháp luật cấm，nếu phát hiện sẽ bị trừ điểm，khóa tài khoản",
      "Nạp tiền",
      "Tối thiểu phải giữ lại một bước",
      "Tối đa chỉ thêm mười bước"
    ]
    },
    vip: {
        user: {
            title: ['Vai trò của bạn','Khách viếng thăm'],
            label: "Nhiệm vụ mỗi ngày",
            value: ['Thời gian có hiệu lực','Có hiệu lực vĩnh viễn','Vui lòng đăng nhập trước'],
        },
        list: {
            label: "Nhiệm vụ mỗi ngày:{number}次",
            button: "Gia nhập ngay",
            text: [
                  "Doanh thu mỗi ngày",
                  "Doanh thu tháng ",
                  "Tiền thưởng đề xuất:mỗi người",
                  "Miễn phí",
                  "Mỗi nhiệm vụ"
                  ]
        },
        dialog: ['Xác định tốn phí {amount} {currency}trở thành {name}hay không？','Hiện tại bạn là {currname}，Không thể trở thành{name}','Xác định tốn phí {amount} {currency}tiếp tục trả phí {name}hay không？']
    },
    user: {
        myEarnings: {
            grid: ["Số dư cá nhân","Doanh thu hôm qua","Doanh thu hôm nay","Doanh thu tuần này","Doanh thu tháng này","Doanh thu tháng trước","Tổng doanh thu","Hôm nay hoàn thành ( )nhiệm vụ ","Hôm nay còn dư ( )nhiệm vụ "]
        },

    default: [
      "Cấp trên của tôi",
      "Tài khoản đăng nhập",
      "Mã mời",
      "Đăng xuất",
      "Số dư",
      "Tiền xu",
      "Ví của tôi",
      "Khóa tài khoản",
      "Hạn chế",
      "Tốt",
      "Xuất sắc",
      "机器人"
    ],
    menu: [
      "Lịch sử nhiệm vụ",
      "Xét duyệt nhiệm vụ",
      "Quản lý đăng",
      "Thông tin cá nhân",
      "Liên kết tài khoản",
      "Bảng thanh toán theo ngày",
      "Lịch sử thay đổi sổ sách",
      "Mời bạn bè",
      "Bảng nhóm ",
      "Sổ tay hướng dẫn",
      "Trung tâm tín dụng",
      "Tải APP"
    ]
    },

  userInfo: {
    default: [
      "Thông tin cá nhân",
      "Ảnh đại diện",
      "Số điện thoại",
      "Thẻ ngân hàng",
      "Alipay",
      "Thông tin chi tiết",
      "Mật khẩu đăng nhập",
      "Mật khẩu thanh toán",
      "Nhấn để cài đặt",
      "Đổi ảnh đại diện",
      "Đổi mật khẩu đăng nhập",
      "Đổi mật khẩu thanh toán",
      "Gửi đi",
      "Xóa bộ nhớ cache"
    ],
    label: [
      "Mật khẩu đăng nhập cũ ",
      "Mật khẩu đăng nhập mới ",
      "Xác nhận mật khẩu",
      "Mật khẩu thanh toán cũ",
      "Mật khẩu thanh toán mới",
      "Xác nhận mật khẩu"
    ],
    placeholder: [
      "Vui lòng nhập mật khẩu đăng nhập cũ",
      "Vui lòng nhập mật khẩu đăng nhập mới",
      "Vui lòng xác nhận mật khẩu đăng nhập",
      "Vui lòng nhập mật khẩu thanh toán cũ",
      "Vui lòng nhập mật khẩu thanh toán mới",
      "Vui lòng xác nhận mật khẩu thanh toán "
    ]
  },
  bankCard: {
    default: [
      "Liên kết thẻ ngân hàng",
      "Xác minh ngay",
      "Đang gửi đi...",
      "Thêm ngay",
      "Thêm thẻ ngân hàng"
    ],
    tips: [
      "Vui lòng xác minh danh tính trước rồi mới thêm thẻ ngân hàng",
      "Tên chủ thẻ ngân hàng mà bạn liên kết phải khớp với họ tên thật mà bạn xác minh ,nếu không sẽ không thể rút tiền thành công "
    ],
    label: [
      "Họ tên",
      "Tên ngân hàng",
      "Số tài khoản ngân hàng",
      "Mã IFSC"
    ],
    placeholder: [
      "Vui lòng chọn tên ngân hàng",
      "Vui lòng chọn số tài khoản ngân hàng",
      "Vui lòng nhập mã IFSC"
    ]
  },
  userSet: {
    default: [
      "Xác minh danh tính",
      "Thông tin chi tiết",
      "Liên kết Alipay",
      "Gửi đi"
    ],
    label: [
      "Họ tên thật",
      "Số QQ",
      "Tài khoản Alipay",
      "Họ tên trên Alipay"
    ],
    placeholder: [
      "Vui lòng nhập họ tên thật (Họ tên thật dùng để rút tiền)",
      "Vui lòng nhập số QQ",
      "Vui lòng nhập tài khoản Alipay",
      "Vui lòng nhập họ tên trên Alipay"
    ],
    tips: "Lời nhắc nhở：Liên kết thẻ ngân hàng không thể thay đổi，sử dụng để rút tiền cho bạn"
  },
  bindAccount: {
    default: [
      "Liên kết tài khoản",
      "Hướng dẫn tra cứu",
      "Gửi đi"
    ],
    tabs: [
      "tài khoản",
      "tài khoản",
      "tài khoản"
    ],
    label: [
      "Hướng dẫn thao tác",
      "Thêm ảnh chụp màn hình",
      "tài khoản"
    ],
    placeholder: "Vui lòng nhập {account}tài khoản"
  },
  dayReport: [
    "Bảng thanh toán theo ngày",
    "Tổng doanh thu",
    "Nhiệm vụ tôi đã hoàn thành",
    "Doanh thu nhiệm vụ của tôi",
    "Nhiệm vụ cấp dưới hoàn thành",
    "Doanh thu nhiệm vụ của cấp dưới",
    "Nhiệm vụ",
    "30 ngày gần nhất",
    "Số lượng",
    "Nhiệm vụ",
    "Cấp dưới",
    "Chi tiêu",
    "Ngày tháng"
  ],
  fundRecord: {
    default: [
      "Lịch sử chi ra",
      "Lịch sử nạp tiền",
      "Lịch sử thu nhập",
      "Nạp",
      "Thu",
      "Chi"
    ],
    tabs: [
      "Thu nhập",
      "Chi ra",
      "Nạp tiền"
    ]
  },
  vanPull: [
    "Không còn dữ liệu khác",
    "Không có dữ liệu"
  ],
  promote: [
    "Bạn bè của tôi",
    "Mời bạn gia nhập{title}",
    "Mã đề xuất",
    "Sao chép mã đề xuất",
    "Sao chép liên kết mời",
    "Lưu mã QR",
    "Tiền thưởng quảng bá",
    "Lưu áp phích thành công",
    "Lưu áp phích không thành công，vui lòng thử lại vài lần hoặc chụp lại màn hình để lưu",
    "Vui lòng chụp màn hình",
    "Lưu áp phích quảng bá",
    "Lưu áp phích quảng bá về điện thoại <br>nếu không thành công ，vui lòng thử lại vài lần hoặc chụp lại màn hình để lưu"
  ],
  teamReport: {
    default: [
      "Tìm kiếm ",
      "Số dư của nhóm",
      "Doanh thu của nhóm",
      "Nạp tiền của nhóm",
      "Rút tiền của nhóm",
      "Số người nạp lần đầu",
      "Số người đề xuất lần đầu",
      "Số thành viên của nhóm",
      "Số thành viên tăng thêm của nhóm",
      "người ",
      "Tôi",
      "Người dùng",
      "Nạp tiền",
      "Rút tiền",
      "Chiết khấu",
      "Hoa hồng",
      "Chọn ngày tháng năm",
      "Không tìm thấy dữ liệu",
      "Số tiền nạp",
      "Số người nạp",
      "Hoa hồng nạp"
    ],
    tabs: [
      "Bảng nhóm",
      "Nhóm của tôi"
    ],
    team: [
      "Cấp 1",
      "Cấp 2",
      "Cấp 3"
    ]
  },
  help: [
    "Sổ tay hướng dẫn",
    "Không tìm thấy nội dung"
  ],
  credit: [
    "Trung tâm tín dụng",
    "Mô tả tín dụng",
    "Lịch sử tín dụng",
    "<p>1.Điểm tín dụng mỗi tuần đánh giá một lần </p><p>2.Điểm tín dụng ban đầu của người dùng :<b>60</b></p><p>3.Nếu phát hiện người dùng đăng tải ảnh làm nhiệm vụ gian lận thì mỗi ngày trừ :<b>1</b>điểm ,số điểm trừ tối đa :<b>7</b>điểm </p><p>4.Nếu không phát hiện người dùng đăng tải ảnh làm nhiệm vụ gian lận thì mỗi ngày tăng thêm <b>1</b>điểm</p><p>5.Điểm tín dụng thấp hơn <b>50</b>điểm thì sẽ bị hạn chế rút tiền </p><p>6.Điểm tín dụng thấp hơn <b>30</b>điểm thì giảm nửa số lần nhận nhiệm vụ</p><p>7.Điểm tín dụng ít hơn hoặc bằng <b>0</b>điểm thì sẽ bị khóa tài khoản</p>",
    "Tín dụng của tôi",
    "Tạm thời không có lịch sử tín dụng"
  ],
  upload: [
    "Đang đăng tải...",
    "Lỗi định dạng",
    "Đăng tải thành công",
    "Đăng tải không thành công"
  ],
  task: {
    default: [
      "Bảng nhiệm vụ",
      "Yêu cầu nhiệm vụ",
      "Tạo",
      "Xét duyệt",,
      "Mở liên kết",
      "Sao chép liên kết",
      "Đơn giá",
      "Gửi đi",
      "Từ bỏ"
    ],
    tabs: [
      "Đang tiến hành",
      "Đang xét duyệt",
      "Đã hoàn thành",
      "Đã thất bại",
      "Cố ý",
      "Đã từ bỏ"
    ],
    msg: "Vui lòng đăng ảnh hoàn thành nhiệm vụ",
    info: [
      "Chi tiết nhiệm vụ",
      "Tiêu đề nhiệm vụ",
      "Doanh thu nhiệm vụ",
      "Mô tả nhiệm vụ",
      "Yêu cầu đăng",
      "Mẫu gửi đi",
      "Mẫu người dùng chưa gửi đi",
      "Mô tả xét duyệt",
      "Ngày xét duyệt",
      "Bên có nhu cầu",
      "Đăng",
      "Sao chép",
      "Chuyển qua",
      "Các bước nhiệm vụ",
      "Bước thứ {index}",
      "Mẫu xét duyệt",
      "Không có mẫu xét duyệt",
      "Đang tại dữ liệu...",
      "Từ bỏ nhiệm vụ",
      "Gửi nhiệm vụ đã hoàn thành",
      "Đăng tải nội dung"
    ],
    index: [
      "Vai trò hiện tại",
      "Cấp bậc hiện tại của bạn là  <i style=\"color:#1989fa\">{currVip}</i><br>Hiện tại chỉ có thể nhận <i style=\"color:#1989fa\">{currVip}</i>nhiệm vụ cấp <br>是否加入 <i style=\"color:#dd6161\">{vip}</i> cấp",
      "Gia nhập ngay",
      "Vui lòng chọn loại nhiệm vụ"
    ],
    list: [
      "Bảng nhiệm vụ",
      "Bên có nhu cầu",
      "Còn dư",
      "Yêu cầu",
      "Nhận "
    ],
    show: [
      "Chi tiết nhiệm vụ",
      "Người đã kiếm được",
      "Còn dư {num} suất",
      "Xét duyệt trong vòng 48 tiếng",
      "Mô tả nhiệm vụ",
      "Bên có nhu cầu",
      "Tiêu chuẩn xét duyệt",
      "Sao chép ",
      "Chuyển qua",
      "Các bước nhiệm vụ",
      "Bước thứ{index}",
      "Mẫu xét duyệt",
      "Không có mẫu xét duyệt",
      "Đang tải dữ liệu...",
      "Đang gửi đi...",
      "Nhận nhiệm vụ",
      "Đăng nhập ngay",
      "Đăng nội dung"
    ]
  },
  serviceCenter: [
    "Trung tâm chăm sóc khách hàng",
    "Hi，Tôi là nhân viên chăm sóc khách hàng",
    "Rất vui khi được phục vụ quý khách",
    "Dịch vụ tự động",
    "Chăm sóc khách hàng trực tuyến",
    "Chăm sóc khách hàng nạp tiền",
    "Chăm sóc khách hàng Line"
  ],
  audit: {
    default: [
      "Xét duyệt nhiệm vụ",
      "Người dùng nhận",
      "Ngày nhận",
      "Ngày cập nhật",
      "Xét duyệt",
    ],
    tabs: [
      "Đang tiến hành",
      "Đang xét duyệt",
      "Đã hoàn thành",
      "Đã thất bại"
    ],
    info: [
      "Chi tiết xét duyệt",
      "Tiêu đề nhiệm vụ",
      "Số tiền nhiệm vụ",
      "Người đã hoàn thành",
      "Còn dư {num}suất",
      "Mô tả nhiệm vụ",
      "Thông tin liên kết",
      "Mẫu xét duyệt",
      "Người dùng nhận",
      "Nhận",
      "Trạng thái hoàn thành",
      "Mẫu gửi đi",
      "Mẫu người dùng chưa gửi đi",
      "Ngày cập nhật",
      "Đang tải dữ liệu...",
      "Cố ý",
      "Duyệt lại",
      "Thất bại",
      "Thành công",
      "Xét duyệt nhiệm vụ",
      "Mô tả xét duyệt",
      "Vui lòng nhập mô tả xét duyệt",
      "Nhiệm vụ gửi đi không hợp lệ，Vui lòng gửi lại để duyệt",
      "Chúc mừng bạn đã hoàn thành nhiệm vụ，tiếp tục thôi nào",
      "Ảnh chụp màn hình giao diện nhiệm vụ gửi đi không đúng,nhiệm vụ không thành công",
      "Nhiệm vụ gửi nhiều lần，nhiệm vụ không thành công"
    ]
  },
  postRecord: [
    "Quản lý đăng",
    "Đăng",
    "Tổng số lượng",
    "Đã hoàn thành ",
    "Ngày kết thúc",
    "Xét duyệt",
    "Thu hồi",
    "Sửa"
  ],
  wallet: {
    default: [
      "Ví của tôi",
      "Nạp tiền",
      "Rút tiền",
      "Lịch sử nạp tiền",
      "Lịch sử rút tiền",
      "Nạp",
      "Rút",
      "Alipay"
    ],
    label: [
      "Phương thức rút tiền",
      "Số tiền rút ra",
      "Mật khẩu thanh toán",
      "Gửi đi",
      "Số điện thoại",
      "Email",
      "IFSC"
    ],
    placeholder: [
      "Chọn phương thức rút tiền",
      "Vui lòng nhập số tiền rút ra",
      "Vui lòng nhập mật khẩu thanh toán",
      "Vui lòng chọn phương thức rút tiền",
      "Vui lòng nhập số điện thoại người nhận tiền",
      "Vui lòng nhập email người nhận tiền",
      "Vui lòng nhập IFSC người nhận tiền"
    ],
    msg: [
      "Bạn vẫn chưa cài đặt mật khẩu thanh toán ，vui lòng cài đặt trước",
      "Bạn vẫn chưa liên kết thẻ ngân hàng，vui lòng liên kết trước"
    ]
  },
  recharge: {
    default: [
      "Nạp tiền",
      "Chi tiết nạp tiền",
      "Lịch sử nạp tiền",
      "Số dư khả dụng{money}，vui lòng chọn phương thức nạp tiền",
      "Sô tiền tối thiểu mỗi giao dịch{currency}{min}，tối đa {currency}{max}，phí thủ tục {fee}%",
      "Đang gửi đi...",
      "Nạp ngay",
      "Quay lại",
      "Đang tải..."
    ],
    label: [
      "Số tiền nạp",
      "Kênh nạp",
      "Họ tên người chuyển khoản",
      "Họ tên người thanh toán",
      "Số điện thoại người thanh toán",
      "Tài khoản UPIngười thanh toán",
      "Email người thanh toán"
    ],
    placeholder: [
      "Vui lòng nhập số tiền nạp",
      "Vui lòng chọn kênh nạp tiền",
      "Vui lòng nhập họ tên người chuyển khoản",
      "Số tiền tối thiểu mỗi giao dịch{currency}{min}",
      "Số tiền tối đa mỗi giao dịch{currency}{max}",
      "Vui lòng nhập họ tên người thanh toán",
      "Vui lòng nhập số điện thoại người thanh toán，trước số điện thoại thêm mã vùng quốc tế，Ví dụ +86",
      "Vui lòng nhập tài khoản UPIngười thanh toán",
      "Vui lòng nhập email người thanh toán"
    ],
    info: [
      "Số tiền nạp",
      "Mã đơn hàng",
      "Ngân hàng nhận tiền",
      "Số tài khoản nhận tiền",
      "Người nhận tiền",
      "Sao chép ",
      "{type}chuyển khoản",
      "Ảnh chụp màn hình chuyển khoản",
      "Gửi đi",
      "Mã IFSC",
      "Loại tài khoản",
      "Mô tả xử lý"
    ],
    tips: [
      "Vui lòng chọn phương thức dưới đây chuyển khoản với số tiền tương ứng để tránh việc kéo dài thời gian kế toán kiểm tra và nhận chuyển khoản <br>Sau khi chuyển khoản vui lòng đăng ảnh chụp màn hình chuyển khoản để chứng minh và đối chiếu ",
      "Không cần kết bạn，quét mã QR để thanh toán chuyển khoản cho tôi",
      "Vui lòng hoàn thành chuyển khoản theo những thông tin dưới đây",
      "Lời nhắc nhở ：sau khi thanh toán thành công，vui lòng liên hệ chăm sóc khách hàng trực tuyến，cung cấp tài khoản thành viên của bạn、số tiền nạp、mã đơn hàng、tài khoản người nạp tiền、thời gian nạp；để tiện cho kế toán kịp thời thêm tiền vào cho bạn ",
      "Lưu ý：Với mỗi giao dịch thanh toán chuyển khoản thành viên vui lòng chỉ gửi một lần",
      "Sau khi chuyển khoản vui lòng đăng ảnh chụp màn hình chuyển khoản để chứng minh và đối chiếu "
    ]
  },

  dialog: [
    "Lời nhắc nhở",
    "Xác định",
    "Đang gửi đi...",
    "Sao chép thành công",
    "Phiên bản hệ thống IOSquá cũ không hỗ trợ",
    "Đang đăng kí...",
    "Đang tải dữ liệu..."
  ],

  lineList: [
    "Chọn tuyến",
    "Tuyến hiện tại",
    "Tuyến"
  ],


}