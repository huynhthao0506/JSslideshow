/**
 * 1. Làm sao để hiển thị ảnh bất kỳ (nguyên nhân: display: none)
 * - Viết hàm hienThiSlide(k)
 * - Lấy ra các element img -> Có mảng img -> Muốn hiện ảnh nào thì truy xuất đến phần tử tương ứng.
 * 2. Sử dụng một biết toàn cục để lưu lại index của img đang được hiển thị
 * 3. 
 * 
 */

 let index = 0; // Vị trí trong mảng của bức ảnh đang được hiện
 hienThiSlide(index);
 // Hiện bức ảnh k
 function hienThiSlide(k) {
    var slides = document.getElementsByClassName("slides");
    if ( k > slides.length - 1)
    index = 0;
    if ( k < 0)
    index = slides.length -1;
  slides[index].style.display = "block";
 }
 
 // Ẩn bức ảnh k
 function anSlide(k) {
    var slides = document.getElementsByClassName("slides");
    for (var i = 0; i < slides.length; i++)
  {
    slides[i].style.display = "none";
  }
 }
 
 
 function hienThiSlideTruocDo() {
    anSlide(index);
    index--;
    hienThiSlide(index);
 }
 
 function hienThiSlideKeTiep() {
     // Gọi hàm ẩn slide ở index hiện tại
    anSlide(index);
     // Tăng index lên
    index++
     // Gọi hàm hiển thị Slide với index mới (sau tăng)
     hienThiSlide(index);
 }