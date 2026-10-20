# Nguồn hoa

Các đường dẫn dưới đây tương đối so với thư mục cha HPBD, dùng để đối chiếu mã gốc; ứng dụng không tải các tệp này khi chạy.

## I. Blooming_Flower

- `Blooming_Flower/Home.html`
- `Blooming_Flower/home.css`
- Giữ cấu trúc 4 cánh dạng chén, nhụy, thân xanh ngọc, lá tím trên thân.
- README gốc dẫn tới https://github.com/dumpsterdj/glowing-flower-animation.git và ghi giấy phép MIT, nhưng bản cục bộ không có tệp LICENSE.

## II. Flower-animation

- `Flower-animation/FLORES.html`
- `Flower-animation/css/main.css`
- Giữ cánh vàng, nhụy vàng nâu, thân và lá xanh.
- Nguồn theo README: https://github.com/gmpsankalpa/Flower-animation
- Bản quyền (c) 2024 GMP Sankalpa, MIT. Giữ nguyên giấy phép trong `licenses/Flower-animation-MIT.txt`.

## III. flowers

- `flowers/index2.html`, CSS nằm trong thẻ style.
- Giữ 12 phần tử cánh vàng cam, nhụy nâu, thân và lá xanh ô liu.
- Căn lại tâm cánh và tâm nhụy để cánh xếp tròn trên đầu thân khi ghép bó.
- Không có README hoặc giấy phép trong thư mục nguồn cục bộ.

## IV. FlowersGift

- `FlowersGift/flower.html`
- `FlowersGift/css/style.css`
- Giữ cánh trắng hồng, nhụy vàng xanh, thân sáng và lá xanh.
- README gốc ghi nguồn cảm hứng: https://github.com/FIQTOR/flowers-for-someone
- Không có giấy phép trong thư mục nguồn cục bộ.

## V. Thay đổi khi ghép

- Tách CSS của cánh, nhụy, thân và lá gắn trên thân; gom phần chung và giữ màu riêng theo mẫu.
- Chuyển `vmin` thành `em` và đưa toàn bộ bó vào cùng một hệ tọa độ co giãn.
- Mỗi thân giữ 4 lá; không đưa CSS hoặc phần tử cỏ, lá rời vào dự án mới.
- Thay hiệu ứng theo từng khu vườn bằng hiệu ứng nở hoa chung có thể phát lại.
- Thêm giấy gói, nơ, thẻ quà, lời chúc và bố cục cho điện thoại.

## VI. Cảnh mở phong thư

- Tham khảo dự án cục bộ `E:/VS CODE/HAPPY_WOMEN_DAY`.
- Chép nguyên ảnh `img/bgr.png` thành `img/letter-bg.png` và `img/love-message.png` sang dự án mới.
- Tham khảo phần phong thư trong `index.html`, `style.css` và `initGiftBox` trong `main.js`: thư lắc, phát sáng, phóng lên 1.25 lần trong 500 ms rồi bung lên 2.5 lần trong 150 ms, kèm hai đợt hạt 100 và 50 phần tử.
- Giữ thời gian chuyển nền 1.8 giây và cảnh mở đầu nằm ngang trên điện thoại dọc. Cảnh sau dùng bó hoa HTML/CSS của dự án này.
- Viết lại điều khiển bằng CSS và API hoạt ảnh sẵn có của trình duyệt, không cần Anime.js, Three.js hoặc CDN. Thêm thao tác bàn phím, chống nhấn lặp và chế độ giảm chuyển động.
- Không có tệp giấy phép trong bản nguồn cục bộ đã đọc.

Các ghi chú trên chỉ ghi nhận thông tin có trong nguồn cục bộ, không cấp lại giấy phép cho phần mã kế thừa.
