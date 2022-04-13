"use strict";

exports.__esModule = true;
exports.default = void 0;
var _default = {
  name: 'Tên',
  tel: 'điện thoại',
  save: 'tiết kiệm',
  confirm: 'xác nhận',
  cancel: 'hủy bỏ',
  delete: 'xóa bỏ',
  complete: 'thực hiện',
  loading: 'Đang tải...',
  telEmpty: 'Vui lòng điền vào điện thoại',
  nameEmpty: 'Xin vui lòng điền tên của bạn',
  nameInvalid: 'Vui lòng nhập đúng tên',
  confirmDelete: 'Bạn chắc chắn muốn xóa nó',
  telInvalid: 'Xin vui lòng nhập một số điện thoại hợp lệ',
  vanCalendar: {
    end: 'Kết thúc',
    start: 'Khởi đầu',
    title: 'Lựa chọn ngày',
    confirm: 'mục đích',
    startEnd: 'bắt đầu kết thúc',
    weekdays: ['Ngày', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu'],
    monthTitle: function monthTitle(year, month) {
      return year + "/" + month;
    },
    rangePrompt: function rangePrompt(maxRange) {
      return "Chọn ngày không thể vượt quá " + maxRange + " ngày";
    }
  },
  vanContactCard: {
    addText: 'Thêm danh bạ'
  },
  vanContactList: {
    addText: 'Địa chỉ liên lạc mới'
  },
  vanPagination: {
    prev: 'Trang trước',
    next: 'Trang tiếp theo'
  },
  vanPullRefresh: {
    pulling: 'Kéo xuống để làm mới...',
    loosing: 'Phát hành để làm mới...'
  },
  vanSubmitBar: {
    label: 'toàn bộ:'
  },
  vanCoupon: {
    unlimited: 'Không có ngưỡng sử dụng',
    discount: function discount(_discount) {
      return _discount + "% off";
    },
    condition: function condition(_condition) {
      return "Có sẵn trên" + _condition + "nhân dân tệ";
    }
  },
  vanCouponCell: {
    title: 'phiếu mua hàng',
    tips: 'Không có sẵn',
    count: function count(_count) {
      return _count + "ảnh có sẵn";
    }
  },
  vanCouponList: {
    empty: 'Không có phiếu giảm giá',
    exchange: 'đổi',
    close: 'Không có phiếu giảm giá',
    enable: 'Có sẵn',
    disabled: 'không có sẵn',
    placeholder: 'Vui lòng nhập mã phiếu giảm giá'
  },
  vanAddressEdit: {
    area: 'khu vực',
    postal: 'mã bưu điện',
    areaEmpty: 'vui lòng chọn khu vực',
    addressEmpty: 'Vui lòng điền địa chỉ chi tiết',
    postalEmpty: 'Định dạng mã bưu chính không chính xác',
    defaultAddress: 'Đặt làm địa chỉ giao hàng mặc định',
    telPlaceholder: 'Số điện thoại di động của người nhận hàng',
    namePlaceholder: 'Tên người nhận hàng',
    areaPlaceholder: 'Chọn tỉnh / thành phố / huyện'
  },
  vanAddressEditDetail: {
    label: 'Địa chỉ',
    placeholder: 'Số đường, số phòng và các thông tin khác'
  },
  vanAddressList: {
    add: 'Thêm địa chỉ'
  }
};
exports.default = _default;