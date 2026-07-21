export default async function handler(req, res) {
  // DÁN LINK GOOGLE APPS SCRIPT CỦA ÔNG VÀO GIỮA 2 DẤU NGOẶC KÉP BÊN DƯỚI
  const googleUrl = "https://script.google.com/macros/s/AKfycbwfEIvmfer1RoQ3rAWmnKXRf7x-KNZ_o4Gx65tjKC-2eAiMZ3hXrpt4yA6zHqyX7d7N/exec";
  
  try {
    const response = await fetch(googleUrl);
    const data = await response.json();
    
    // Ép máy chủ siêu tốc của Vercel lưu bản photo này trong 30 giây
    res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate');
    
    // Phát bản photo cho 300 người truy cập
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Lỗi trạm trung chuyển Vercel" });
  }
}
